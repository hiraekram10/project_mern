// src/api/WooCommerceService.js
import WooCommerceAPI from '../auth/WooCommerceAPI';

export const getProducts = async () => {
  try {
    const response = await WooCommerceAPI.get('/products');
    console.log('Products:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add more functions as needed
export const getProductById = async (id) => {
  try {
    const response = await WooCommerceAPI.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
