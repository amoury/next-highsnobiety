import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://localhost:8080",
  consumerKey: "ck_2e6578ac02bc0bc71b544b8b593302f645ba7576",
  consumerSecret: "cs_ac538b82eb03294a24c341929446484c1807ef04",
  version: "wc/v3"
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

export default api;