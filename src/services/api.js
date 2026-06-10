// API Service layer for backend-ready integration
import { products } from '../data/products';

/**
 * Fetches the list of all products.
 * This is an async function mimicking a database fetch call.
 * To integrate with a real backend later, simply update this function
 * to make an API request:
 * 
 * const response = await fetch('/api/products');
 * return response.json();
 */
export const getProducts = async () => {
  // Simulate network latency (200ms)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
};
