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

function editQuestion(Id,body){
    console.log("W Api jest id: "+Id)
    return axios.put("/meals/"+Id, body)
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
function getQuizA(){
    return axios.get('categories')
    .then((response) => {
        return response.data;
    })
    .catch((error)=> {
        return error;
    })
}

function addQuestionA(body){
    console.log("yup")
    return axios.post("/categories",body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}

function editQuestionA(Id,body){
    console.log("W Api jest id: "+Id)
    return axios.put("/categories/"+Id, body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
function deleteQuestionA(id){
    return axios.delete("/categories/" +id)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
export {getQuiz, addQuestion, deleteQuestion, editQuestion, getQuizA, addQuestionA, deleteQuestionA, editQuestionA};