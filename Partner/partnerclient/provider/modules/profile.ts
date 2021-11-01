import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sadcat } from "../../lib/testdata";

// redux store(리덕스 저장소)에 하나의 state 관리라고 처리할 수 있는 모듈
// slice에는 state와 reducer가 있음
// reducer는 state를 변경하는 함수

// state 타입
export interface ProfileState {
  image: string | undefined;
  username: string | undefined;
}

// state 초기 상태를 선언
const initialState: ProfileState = {
  image: sadcat,
  username: "JaeYoon",
};

// slice생성 (state)
export const profileSlice = createSlice({
  name: "profile", // slice(state)의 이름
  //initialState: initialState, // state초기값
  initialState, // state의 초기값
  reducers: {
    // 함수명 : (기존 state 변수명, action 변수명) => { state 변경처리 }
    saveProfile: (state, action: PayloadAction<ProfileState>) => {
      // immer가 내장 되어있음 따라서 state 변수를 직접 제어함
      console.log(action);
      const profile = action.payload; // 매개변수로 받은 데이터
      state.image = profile.image;
      state.username = profile.username;
    },
  }, // state 변경함수 목록
});

// action creator 내보내기 -> 컴포넌트에서 사용하기 위함
// reducer 함수명에 맞는 action creator들을 createSlice할 때 자동으로 생성함

// action = { type: "...", payload:{...}}
// action.type : 처리할 액션의 종류를 나타내는 문자열
// action.payload : 처리할 데이터

// action creadtor함수는 action 객체를 생성하는 함수
// saveProfile(payload) => {type: "profile/saveProfile", payload}
export const { saveProfile } = profileSlice.actions;

// slice.reducer
// == state 변경함수를 여러개를 가지고 있음
// == reducer를 여러개 가지고 있는 객체
// reducer: { function..(), function..(), ....}
export default profileSlice.reducer;
