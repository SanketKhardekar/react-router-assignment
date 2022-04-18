import axios from "axios";
import * as URL from "../utils/url";

export const getCollegesAPI=(collegeName, country)=>{
    if(collegeName)
    {
        return axios.get(`${URL.getColleges}name=${collegeName}${country ? "&country="+ country :""}`);
    }
    return axios.get(`${URL.getColleges}${country ? "country="+ country :""}`);
}

export const getCountriesAPI=()=>{
    return axios.get(`${URL.getCountries}`);
}