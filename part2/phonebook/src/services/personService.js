import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then(response => response.data)
}

const createPerson = newPerson => {
  const request = axios.post(baseURL, newPerson);
  return request.then(response => response.data)
}

const removePerson = id => {
  return axios.delete(`${baseURL}/${id}`)
}

const updatePerson = (id, personObj) => {
  const request = axios.put(`${baseURL}/${id}`, personObj);
  return request.then(response => response.data)
}

export default { getAll, createPerson, removePerson, updatePerson }