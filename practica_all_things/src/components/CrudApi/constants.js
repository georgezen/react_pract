const DEV_API_URL = 'http://localhost:3000/api';
const PROD_API_URL = 'http://api.dracosoftzen.com:3000/api';

const API_URL = process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL;

export { API_URL };