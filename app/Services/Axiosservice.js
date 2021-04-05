// @ts-ignore
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean',
    timeout: 10000
})