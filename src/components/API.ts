import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.openweathermap.org'
});

export const API = {
    getCityCords: async (location: string) => {
        let response = await axiosInstance.get(`/data/2.5/weather?q=${encodeURI(location)}&appid=1dbf677402a57361a93e11b176b0db44&units=metric&lang=pt_br`);
        return response.data;
    },

    getInfoNow: async (lat: string, lon: string) => {
        let response = await axiosInstance.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=1dbf677402a57361a93e11b176b0db44&units=metric&lang=pt_br`);
        return response.data;
    },
} 
