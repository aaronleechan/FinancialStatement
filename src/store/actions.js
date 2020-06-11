import axios from 'axios'
export const API = process.env.REACT_APP_API_ROOT_URL
export const GET_COMPANY_CODE = "GET_COMPANY_CODE"
export const getCompanyCode = {type: GET_COMPANY_CODE}