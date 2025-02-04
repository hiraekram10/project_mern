import axios from 'axios';

// Replace with your WooCommerce details
const WOOCOMMERCE_BASE_URL = 'https://padelpulse.pk//wp-json/wc/v3';
const CONSUMER_KEY = 'ck_f2e4bcc3718b200c775eef56745e98b50a7a93f3';
const CONSUMER_SECRET = '1cff059c9a7e25b038ab83cf4f23e7ccf4548f61';

// Create Axios instance
const WooCommerceAPI = axios.create({
  baseURL: WOOCOMMERCE_BASE_URL,
  auth: {
    username: CONSUMER_KEY,
    password: CONSUMER_SECRET,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch products
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

// Export the Axios instance for other uses if needed
export default WooCommerceAPI;
