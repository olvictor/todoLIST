export const API_URL = 'http://localhost:8000/todos';


export function TODO_POST(body){
    return {
        url: API_URL,
        options: {
            method: 'POST',
            Headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}