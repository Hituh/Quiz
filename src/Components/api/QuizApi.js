import axios from 'axios'
axios.defaults.baseURL='http://localhost:7777/';

function getQuiz(){
    return axios.get('meals')
    .then((response) => {
        return response.data;
    })
    .catch((error)=> {
        return error;
    })
}

function addQuestion(body){
    console.log("yup")
    return axios.post("/meals",body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}

function editQuestion(id,body){
    return axios.put("/meals/" +id,body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
function deleteQuestion(id){
    return axios.delete("/meals/" +id)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
export {getQuiz, addQuestion, deleteQuestion, editQuestion};