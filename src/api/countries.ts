import axios from './instance';
const COUNTRY_ENDPOINT: string = '/countries'

const getCountries = () => {
    return axios.get(`${COUNTRY_ENDPOINT}/get_countries`)
}

const getCountry = (countryId: number) => {
    return axios.get(`${COUNTRY_ENDPOINT}/get_countries/${countryId}`)
}

export default { getCountries, getCountry };