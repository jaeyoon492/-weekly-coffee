import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductItem {
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageId: string;
  foodType: string;
  expirationData: string;
  manufacturer: string;
  manufacturingDate: string;
  companyName: string;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  beanType: string;
  beanTag: string;
  processing: string;
  country: string;
  region: string;
  farm: string;
  cupNote: string;
  roastingPoint: string;
  variety: string;
}

const initialState: ProductItem[] = [
  {
    partnerId: 1,
    productName: "에티오피아 예가체프 게르시",
    productPrice: 22000,
    productImageId: "1123h1jk231k2j4g12kj4",
    foodType: "원두",
    expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
    manufacturer: "영앤도터스",
    manufacturingDate: "제조일 별도 표기",
    companyName: "영앤도터스",
    companyIntroduce:
      "영앤도터스는 커피가 가진 다양한 매력을 선보이기 위해,좋은 생두를 선별하고, 일관성 있고 논리적인 로스팅을 거쳐 맛있는 한 잔의 커피로 고객의 손의 쥐어지기까지의 모든 과정을 까다롭고, 섬세하게 컨트롤하고 있습니다.",
    companyAddress: "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
    companyContact: "인스타 : younganddaughters",
    beanType: "싱글오리진",
    beanTag: "달콤",
    processing: "내추럴",
    country: "에티오피아",
    region: "예가체프",
    farm: "게르시 소농들",
    cupNote: "새콤한 산미",
    roastingPoint: "라이트 미디엄 로스팅",
    variety: "에티오피아 토착종",
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductItem>) => {
      const productItem = action.payload;
      state.unshift(productItem);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
