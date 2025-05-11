const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  LOANS: {
    BASE: `${API_BASE_URL}${process.env.REACT_APP_API_LOANS}`,
    CREATE: `${API_BASE_URL}${process.env.REACT_APP_API_LOANS}/create`,
    GET_ALL: `${API_BASE_URL}${process.env.REACT_APP_API_LOANS}/many`,
    GET_ONE: (id) => `${API_BASE_URL}${process.env.REACT_APP_API_LOANS}/${id}`,
    UPDATE: (id) => `${API_BASE_URL}${process.env.REACT_APP_API_LOANS}/${id}`,
    DELETE: (id) => `${API_BASE_URL}${process.env.REACT_APP_API_LOANS}/${id}`
  },
  USERS: {
    BASE: `${API_BASE_URL}${process.env.REACT_APP_API_USERS}`,
    REGISTER: `${API_BASE_URL}${process.env.REACT_APP_API_USERS}/register`,
    LOGIN: `${API_BASE_URL}${process.env.REACT_APP_API_USERS}/login`,
    PROFILE: `${API_BASE_URL}${process.env.REACT_APP_API_USERS}/profile`
  }
};