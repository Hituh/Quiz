import axios from 'axios'
axios.defaults.baseURL='http://localhost:7777';

function getQuizReact(){
    return axios.get("/react")
    .then((response) => {
        return response.data;
    })
    .catch((error)=> {
        return error;
    })
}

function addQuestionReact(body){
    return axios.post("/react",body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}

function editQuestionReact(Id,body){
    console.log("W Api jest id: "+Id)
    return axios.put("/react/"+Id, body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
function deleteQuestionReact(id){
    return axios.delete("/react/" +id)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
function getQuizAngular(){
    return axios.get("/angular")
    .then((response) => {
        return response.data;
    })
    .catch((error)=> {
        return error;
    })
}

function addQuestionAngular(body){
    return axios.post("/angular",body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}

function editQuestionAngular(Id,body){
    console.log("W Api jest id: "+Id)
    return axios.put("/angular/"+Id, body)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
function deleteQuestionAngular(id){
    return axios.delete("/angular/" +id)
    .then((response) => {
        return response;
    })
    .catch((error)=> {
        return error;
    })
}
export {getQuizReact, addQuestionReact, deleteQuestionReact, editQuestionReact, getQuizAngular, addQuestionAngular, deleteQuestionAngular, editQuestionAngular};