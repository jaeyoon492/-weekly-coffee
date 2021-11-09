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
};
//partner/products/paging/{partnerId}
export default productApi;
