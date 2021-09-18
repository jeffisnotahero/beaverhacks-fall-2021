import * as api from '../api';

// Action Creator, function that returns an action 
// Thunk for async logic
export const createMemo = (memo) => async (dispatch) => {
    try {
        // Fetch data from api request
        const { data } = await api.createMemo(memo);
        dispatch({ type: 'CREATE', payload: data});

    } catch (error) {
        console.log(error.message);
        
    }
}