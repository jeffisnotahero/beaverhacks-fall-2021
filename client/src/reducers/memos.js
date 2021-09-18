// Reducer does something with state based on action
// eslint-disable-next-line
export default (memos = [], action) => {
    switch (action.type){
        case 'GET_ALL':
            return action.payload;

        case 'CREATE':
            // action.payload is actual memo body
            return [...memos, action.payload];

        default:
            return memos;
    }

}