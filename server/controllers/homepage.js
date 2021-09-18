// Handler for routes

// import Model
import PostMemo from '../models/postMemo.js'

// Homepage
export const getMemo = async (req, res) => {

    // Get memo data
    try{
        // Retrieve all memo from database
        const postMemos = await PostMemo.find()

        // Return success response
        res.status(200).json(postMemos);
        
    } catch (error) {
        // Return error response
        res.status(404).json({ message: error });
    }
}

// Create memo
export const createMemo = async (req, res) => {

    // Get memo data from request
    const memo = req.body;

    // Create new memo
    const newMemo = new PostMemo(memo);

    try{
        // Save memo to database
        await newMemo.save();
        res.status(201).json("Success");

    } catch (error) {
        res.status(409).json({ message : error.messsage });

    }
}