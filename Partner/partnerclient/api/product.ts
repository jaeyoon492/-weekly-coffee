import axios from "axios";
import {
  ProductCachePageResponse,
  ProductPagingResponse,
  ProductRequest,
  ProductResponse,
} from "../provider/modules/product";


const productApi = {
  add: (productItem: ProductRequest) =>
    axios.post<ProductResponse>(`${process.env.NEXT_PUBLIC_API_BASE}/products`, productItem),

  fetch: (partnerId: number, page: number, size: number) =>
    axios.get<ProductPagingResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/partner/products/paging/${partnerId}?page=${page}&size=${size}`
    ),

  modify: (productItem: ProductRequest) =>
    axios.put<ProductResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/product/semimodify`,
      productItem
    ),

  modifyItem: (productRequestItem: ProductRequest) =>
    axios.put<ProductResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/product/modify`,
      productRequestItem
    ),

  remove: (productId: number) =>
    axios.delete<boolean>(`${process.env.NEXT_PUBLIC_API_BASE}/product/remove/${productId}`),

  salesChange: (productId: number) =>
    axios.put<number>(`${process.env.NEXT_PUBLIC_API_BASE}/product/sales/${productId}`),

  getProductCache: (companyName: string) =>
    axios.get<ProductCachePageResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/products/${companyName}?page=0&size=8`
    ),
};
//partner/products/paging/{partnerId}
export default productApi;
