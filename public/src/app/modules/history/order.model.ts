export interface APIres {
  success: boolean;
  message: string;
  data: OrderData[];
}

export interface OrderData {
  id: number;
  created_at: string;
  updated_at: string;
  order_date: string;
  order_number: string | null;
  order_status: string;
  order_total: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  user_id: number;
}

export interface orderHistory {
  id: number;
  created_at: string;
  updated_at: string;
  order_id: number;
  product_id: number;
  product_name: string;
  product_price: string;
  product_quantity: number;
  product_subtotal: string;
}
