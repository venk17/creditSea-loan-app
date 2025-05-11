import { API_ENDPOINTS } from '../config/api';

export const loanService = {
  getAllLoans: async () => {
    const response = await fetch(API_ENDPOINTS.LOANS.GET_ALL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return await response.json();
  },

  getLoanById: async (id) => {
    const response = await fetch(API_ENDPOINTS.LOANS.GET_ONE(id), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return await response.json();
  },

  createLoan: async (loanData) => {
    const response = await fetch(API_ENDPOINTS.LOANS.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(loanData)
    });
    return await response.json();
  },

  updateLoan: async (id, loanData) => {
    const response = await fetch(API_ENDPOINTS.LOANS.UPDATE(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(loanData)
    });
    return await response.json();
  },

  deleteLoan: async (id) => {
    const response = await fetch(API_ENDPOINTS.LOANS.DELETE(id), {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return await response.json();
  }
};

export const authService = {
  register: async (userData) => {
    const response = await fetch(API_ENDPOINTS.USERS.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return await response.json();
  },

  login: async (credentials) => {
    const response = await fetch(API_ENDPOINTS.USERS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    return await response.json();
  },

  getProfile: async () => {
    const response = await fetch(API_ENDPOINTS.USERS.PROFILE, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return await response.json();
  }
};