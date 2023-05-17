import axios from 'axios';
const baseUrl = '/api/events';

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getOne = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getEventsByOrg = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/byorg/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getOneShab = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const erase = (id) => {
  const url = baseUrl + '/' + id;
  const request = axios.delete(url);
  return request.then((response) => {
    return response.status;
  });
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const eventService = {
  getAll,
  getOne,
  getEventsByOrg,
  create,
  erase,
  update,
  getOneShab,
};
export default eventService;
