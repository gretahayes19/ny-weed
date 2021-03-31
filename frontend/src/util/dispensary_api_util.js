import axios from "axios"

export const fetchDispensaries = () => {
    return axios.get('/api/map/all')
};

export const fetchDispensaryPhotos = () => {
    return axios.get(`/api/photo/all`)
};