import axios from 'axios';
import { BASE_URL } from './APIConfig';

export const fetchDishes = async (chefId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/dishes/${chefId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dishes:', error);
    throw error;
  }
};

export const deleteDish = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/v1/dishes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting dish:', error);
    throw error;
  }
};

export const createDish = async (dishData) => {
  try {
    const formData = new FormData();
    for (const key in dishData) {
      formData.append(key, dishData[key]);
    }

    const response = await axios.post(`${BASE_URL}/api/v1/dishes`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating dish:', error);
    throw error;
  }
};
