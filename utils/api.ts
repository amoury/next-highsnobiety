import { TGenerateToken, TRegisterCustomer } from '@customTypes/customer';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from 'axios';

const api = new WooCommerceRestApi({
  // url: "http://localhost:3000",
  url: "http://localhost:8080",
  consumerKey: "ck_2e6578ac02bc0bc71b544b8b593302f645ba7576",
  consumerSecret: "cs_ac538b82eb03294a24c341929446484c1807ef04",
  version: "wc/v3",
  // axiosConfig: {
  //   proxy: {
  //     host: 'localhost',
  //     port: 8080
  //   }
  // }
});

// http://localhost:8080/wp-json/wp/v2/static-pages

export const fetchProducts = async (): Promise<any> => {
  return api.get('products');
}

export const fetchProductById = async (productId: number): Promise<any> => {
  return api.get(`products/${productId}`);
}

export const fetchShippingDetailsByProduct = async (productId: number): Promise<any> => {
  return api.get(`products/shipping_classes/${productId}`);
}

export const fetchAllCustomers = async (): Promise<any> => {
  return api.get(`customers`);
}

export const registerCustomer = async (data: TRegisterCustomer): Promise<any> => {
  return api.post('customers', data);
}

export const retrieveCustomerByEmail = async (email: string): Promise<any> => {
  return api.get(`customers?email=${email}`);
}

export const generateToken = async (data: TGenerateToken): Promise<any> => {
  return axios.post('http://localhost:8080/wp-json/jwt-auth/v1/token', data);
}

export default api;