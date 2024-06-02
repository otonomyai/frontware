import api from "$lib/utils/api";

export interface OrderedProduct {
  product: string;
  quantity: number;
  price: number;
}

export interface AddOrderRequest {
  user: string;
  items: OrderedProduct[];
  totalAmount: number;
}

export interface OrderData {
  _id: string;
  user: string;
  items: OrderedProduct[];
  totalAmount: number;
  paymentStatus: string;
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddOrderResponse {
  status: string;
  data: OrderData;
  message: string;
}

export const addOrder = async (
  orderData: AddOrderRequest
): Promise<AddOrderResponse> => {
  try {
    const response = await api.post<AddOrderResponse>(`/user/add`, orderData);
    return response.data;
  } catch (error) {
    console.error("Failed to add order:", error);
    throw error;
  }
};
