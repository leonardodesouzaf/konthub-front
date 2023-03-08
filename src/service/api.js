import axios from "axios";
const URL = 'http://localhost:8080';

export function getRepos(username){
    const requisition = axios.get(`${URL}/repos/${username}`);
    return requisition;
}
