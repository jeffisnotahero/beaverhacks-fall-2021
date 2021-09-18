import axios from 'axios';

const url = 'http://localhost:5000/';

export const getMemos = () => axios.get(url);
export const createMemo = (newMemo) => axios.post(url, newMemo);