export type TProduct = {
  images: Array<{ src: string; id: number; name: string; }>,
  id: number;
  description?: string;
  name: string;
  on_sale?: boolean;
  permalink: string;
  price: string;
  regular_price?: string;
  stock_status: "instock" | "outofstock";
  slug: string | string[];
  short_description?: string;
  acf?: TProductCustomFields;
};

type TProductCustomFields = {
  product_details?: string;
}