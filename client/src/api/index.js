import axios from 'axios';

const url = 'http://localhost:5000/';

export const createMemo = (newMemo) => axios.post(url, newMemo);