import api from "$lib/utils/api";

export interface ProductData {
  _id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  images: string[];
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  status: string;
  data: ProductData;
  message: string;
}

export const getProduct = async (
  productId: string
): Promise<ProductResponse> => {
  try {
    const response = await api.get<ProductResponse>(
      `/product/get/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch day summary:", error);
    throw error;
  }
};
