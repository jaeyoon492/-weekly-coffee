import axios from "axios";
import {
  ProductCachePageResponse,
  ProductPagingResponse,
  ProductRequest,
  ProductResponse,
} from "../provider/modules/product";

export interface ProductId {
  productId: number;
  partnerId: number;
}

const productApi = {
  add: (productItem: ProductRequest) =>
    axios.post<ProductResponse>(`http://localhost:8082/products`, productItem),

  fetch: (partnerId: number, page: number, size: number) =>
    axios.get<ProductPagingResponse>(
      `http://localhost:8082/partner/products/paging/${partnerId}?page=${page}&size=${size}`
    ),

  modify: (productItem: ProductRequest) =>
    axios.put<ProductResponse>(
      `http://localhost:8082/product/semimodify`,
      productItem
    ),

  modifyItem: (productRequestItem: ProductRequest) =>
    axios.put<ProductResponse>(
      `http://localhost:8082/product/modify`,
      productRequestItem
    ),

  remove: (productId: ProductId) =>
    axios.put<boolean>(`http://localhost:8082/product/remove`, productId),

  salesChange: (productId: ProductId) =>
    axios.put<number>(`http://localhost:8082/product/sales`, productId),

  getProductCache: (companyName: string) =>
    axios.get<ProductCachePageResponse>(
      `http://localhost:8082/products/${companyName}?page=0&size=8`
    ),
};
//partner/products/paging/{partnerId}
export default productApi;
