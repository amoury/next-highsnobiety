import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://localhost:8080",
  consumerKey: "ck_2e6578ac02bc0bc71b544b8b593302f645ba7576",
  consumerSecret: "cs_ac538b82eb03294a24c341929446484c1807ef04",
  version: "wc/v3"
});

export default api;