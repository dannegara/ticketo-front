import axios from './instance';
const COUNTRY_ENDPOINT: string = '/countries'

export const getCountries = () => {
    return axios.get(`${COUNTRY_ENDPOINT}/get_countries`)
}

export const getCountry = (countryId: number) => {
    return axios.get(`${COUNTRY_ENDPOINT}/get_countries/${countryId}`)
}