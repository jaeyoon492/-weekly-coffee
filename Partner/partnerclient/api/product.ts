import axios from "axios";
import {
  ProductPagingResponse,
  ProductRequest,
  ProductResponse,
} from "../provider/modules/product";

const productApi = {
  add: (productItem: ProductRequest) =>
    axios.post<ProductResponse>(`http://localhost:8082/products`, productItem),

  fetch: (partnerId: number, page: number, size: number) =>
    axios.get<ProductPagingResponse>(
      `http://localhost:8082/partner/products/paging/${partnerId}?page=${page}&size=${size}`
    ),

  modify: (productItem: ProductRequest) =>
    axios.put<ProductResponse>(
      `http://localhost:8082/product/modify`,
      productItem
    ),

  modifyItem: (productId: number, productRequestItem: ProductRequest) =>
    axios.put<ProductResponse>(
      `http://localhost:8082/product/modified/${productId}`,
      productRequestItem
    ),

  remove: (id: number) =>
    axios.delete<boolean>(`http://localhost:8082/product/remove/${id}`),

  salesChange: (id: number) =>
    axios.put<number>(`http://localhost:8082/product/sales/${id}`),
};
//partner/products/paging/{partnerId}
export default productApi;
