# 주간커피 [원두 구독서비스]
##### 다양한 로스터리 카페와 소비자를 연결해주고, 주기적으로 물건을 받을수 있는 구독서비스 입니다.
##### 팀 프로젝트이나 소스코드는 별도의 레포에서 관리하고 있습니다.
<br>

## 개발하는 서비스 - 파트너 서비스

##### 로스터리 카페의 [입점신청, 판매제품등록, 판매제품관리, 주문정보관리]를 개발합니다. 
<br>


## 개발진행과정
# 2021년 11월 1일
커밋 링크입니다.<br>
 https://github.com/jaeyoon492/-weekly-coffee/commit/793095bb2e7c406d5ef0da7628f49d85f6c5158c<br>
 <details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 프론트엔드
1. next.js 설치
2. Bootstrap 설치
3. Bootstrap 초기환경 구성
4. redux 초기환경 구성
    * redux 설치
    * 전역 store 구현
5. 상단바, 사이드바 구현

## 백엔드
1. spring initializr로 프로젝트 파일 생성
2. 라이브러리 의존성 주입
3. application.yml 초기설정 구성
4. 더미데이터 저장및 데이터베이스 연동 위한 엔티티클래스 구현
5. CORS를 사용하기 위해 WebConfiguration클래스 구현

### 관련 트러블 슈팅
1.  https://www.notion.so/2021-11-1-DB-6c2073a4966943eca1c43b8a9cdf3e45

2. https://www.notion.so/2021-11-1-PostgreSQL-70aa33c1ec2b405b9d3373136ec7ebe7

### 관련 참고자료
- https://parksrazor.tistory.com/218<br>
- https://jogeum.net/8<br>
- https://jeong-pro.tistory.com/231<br>
<br>

</div>
</details>
<br>

# 2021년 11월 2일
커밋 링크입니다.<br>
 https://github.com/jaeyoon492/-weekly-coffee/commit/059c4b99e148efd06e4906df76dc08657d7bdcbc<br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. 데이터 연관관계 수정 ( 기존 양방향 -> 단방향 )
2. 메세지큐 연동 테스트
3. 더미테이터 전송 테스트
4. 메세지큐 provider메세지큐 전송으로 주문요청 전송 구현
5. 메세지큐 consumer메세지큐 송신으로 주문요청 수신및 저장 구현
6. 엔티티 클래스 이름 변경 (SQL예약어 관련)

### 관련 트러블 슈팅
1.  https://www.notion.so/SQL-Order-859e4216ee8146eb9419e184d61489f5
2. https://www.notion.so/11-03-9f46fe4424d54c9cacdd0a119430931d


### 관련 참고자료
- https://jogeum.net/7?category=766565<br>
- https://www.koke.kr/coffee/287<br>
- https://velog.io/@youns1121/JPA-object-references-an-unsaved-transient-instance-save-the-transient-instance-before-flushing-%EC%97%90%EB%9F%AC<br>

</div>
</details>

## 추가 학습한 내용
<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

백엔드 데이터 관계

Member 1 : Partner 1 = OneToOne 관계 (양방향)
- 원래 Partner가 멤버를 참조하도록 단방향으로 맵핑하려고 했지만 OneToOne 어노테이션을 쓰려면 양방향 맵핑을 해줘야 한다고 생각했음
- 대신 주인객체를 설정해주어 Partner가 Member의 PK를 FK로 가질수 있도록 한다.
- Member에 클래스에서 Partner를 OneToOne으로 설정하고 ( mappedBy = “member” ) 해주면된다.

단점
- 양방향은 서로 참조가 가능하므로 데이터 오염이 생길수 있다.
- Entity의 값이 변경 되었는데 이게 누구에 의한데이터의 변경인지 파악하기 어렵다.
- 데이터의 변경은 최대한 폐쇠적으로 접근하는게 좋기 때문에 양방향 관계는 비추

변경내용
Member 1 - Partner 1 = OneToOne 관계 (단방향)
- Partner가 Member를 참조하도록  맵핑하려고  OneToOne 어노테이션을 사용해 단방향 맵핑을 해줌
- Partner에 클래스에서 Member를 OneToOne으로 설정하고 @JoinColumn(name = “memberId”) 로 해주면된다.
- 

Partner 1 : Product * = oneToMany 관계 ( 단방향 )
- Partner 1명이 많은 Product를 갖고 있을수 있어서 OneToMany관계로 맵핑해 주었습니다.
- 주의할점은 OneToMany 단방향은 부모엔티티 에서 @OneToMany를 지정하게 되고,
- JPA 관계중 유일하게 FK가 있는 자식엔티티가 아닌 부모엔티티에 @OneToMany어노테이션이 위치하게 됩니다. 
- 기본적으로 FetchType이 Lazy로 되어있습니다.

Member 1 : RegistrationForm 1 = OneToOne (단방향)
- 기존 Member 와 Partner관계와 같습니다.

</div>
</details>
<br>

# 2021년 11월 3일
커밋 링크입니다.<br>
 https://github.com/jaeyoon492/-weekly-coffee/commit/4687ea14cc3184afa7eb364656cc9e3f62c24ba5<br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. 데이터 연관관계 수정 ( 필요없는 관계 삭제 )
2. PartnerRespons클래스(Dto) 추가
3. PartnerConnect메서드 구현 (접속하면 상위 제품 4개만 조회 해주는 페이징 메서드)
4. Member - Partner OneToOne 관계맵핑 (구현중)

### 관련 트러블 슈팅
1.  https://www.notion.so/DDL-NULL-e6d4f18cdcf04bf0abdfc28d4d50dda1
2. https://www.notion.so/Formula-582a874abab54f708e688cba67435e44


### 관련 참고자료
- https://www-swpro-com.tistory.com/24<br>
- https://sundries-in-myidea.tistory.com/91<br>
- https://mycup.tistory.com/223<br>
- https://greatlaboratory.dev/spring/jpa-03/<br>
- https://mycup.tistory.com/223<br>

</div>
</details>
<br>

# 2021년 11월 4일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/a93e077b6540f7bd164102c4c9a57546bb0aa499
 - https://github.com/jaeyoon492/-weekly-coffee/commit/90052d2184bcbd5f3113531c426b4d3742458237
 <br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. 파트너 제품 조회 수정 (전체 조회 -> 페이징 조회)
2. 파트너 주문 조회 수정 (전체 조회 -> 페이징 조회)
3. 입점신청 메세지큐 연동 (파트너 -> 어드민)
4. 입점승인 메세지큐 연동 (어드민 -> 파트너)
5. 승인된 멤버에게 파트너 권한 부여 구현 ( 파트너 객체 전송 )
6. 멤버와 파트너 관계 수정 (OneToOne 단방향 {부모 = 맴버})
7. 파트너 객체가 전송되면 해당 멤버의 Id로 멤버를 찾아 수신한 파트너 객체와 결합( 파트너 권한 + true )
8. Dto 추가구현


### 관련 트러블 슈팅
- OneToOne 관계때 겪은 어려움
    1. https://www.notion.so/OneToOne-e911fa6e06554d74adb2b37a134dc7ea


### 관련 참고자료
- OneToOne 관련
    - https://ict-nroo.tistory.com/126<br>
    - https://greatlaboratory.dev/spring/jpa-03/<br>
    - https://mycup.tistory.com/223<br>
- JPA Query creation관련
    - https://sundries-in-myidea.tistory.com/91<br>

### 주요 키워드
- 순환참조
- FK
- outer join
</div>
</details>


# 2021년 11월 5일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/944563fc880f86d840c9b74142ca3e513e5c548e
 <br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. image데이터를 S3에 저장하기 위해 file업로드 기능을 구현

## 프론트엔드
1. Next.js 화면 이동 구현 [ 주문관리, 제품목록, 홈, 제품등록 ]
2. 제품목록 화면 react-bootstrap으로 퍼블리싱


### 관련 트러블 슈팅
- 멀티파트 파일 업로드 용량제한 문제
    1. https://www.notion.so/260ce3046dd147bca8d8ebe5359e5e6c


### 관련 참고자료
- 파일 업로드 관련
    1. https://artiiicy.tistory.com/8
    

### 주요 키워드
- multipart.MaxUploadSizeExceededException
</div>
</details>


# 2021년 11월 6일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/3f3aa8144703554a62adc1b1c1a3af236010f768
 <br><br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. 어드민 담당 개발자에게 사정이 생겨 admin서비스의 입점승인 기능을  기존에 테스트로 구현했던 부분을 수정하여 입접신청 요청에 자동으로 승인하도록 변경 구현했습니다.
<br>

### 해당 경로 입니다.
- Partner/partner/src/main/java/com/weeklycoffee/partner/rabbittest/admin/registration/AdminRegistrationService.java


## 프론트엔드
1. 입점신청 화면 테이블 구현
2. 리덕스로 상태관리 구현
    - 기능별 리덕스 슬라이스 환경구성 완료
    - partner, subscribe, member, registration...
3. Material UI 라이브러리의 DashBoard템플릿으로 기존 대쉬보드 형태에서 바꿔주었습니다.
4. Redux-Saga를 사용하기위해 Root-Saga 초기환경 구성을 하였습니다.
5. Redux-Saga로 백엔드와 통신중 일어나는 사이드이펙트를 처리하였습니다.
6. 입점신청 프론트엔드 <-> 백엔드 연동 완료

### 관련 트러블 슈팅
- Next.js에 Material Ui 설치시 몇가지 설치안되는 것들이 존재했습니다.


### 관련 참고자료
- CSS 선택자 관련
    1. https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048

- Material UI 사이트
    1. https://mui.com/
    
- Next.js 개발환경, 배포환경 세팅시 .env 관련
    1. https://medium.com/@qsx314/2-next-js-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-env-483e14958752

### 주요 키워드
- UI 라이브러리, Redux, Redux-Saga, .env, ActionCreate함수, reducer, saga
</div>
</details>

# 2021년 11월 7일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/7e73c011270f0d86069e34481a25ea3d2ed70ff9
 <br><br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. 엔티티 필드 이름 변경, Ex: id -> productId 
    - 어떤 id인지 헷갈리지 않도록 이름을 변경했습니다.
2. 테스트용 파트너 상품, 주문 전체조회용 응답 클래스를 만들었습니다.
<br>

## 프론트엔드
1. 입전신청 ~ 멤버의 파트너권한 부여 기능 구현을 마무리 했습니다.
2. MemberApi 구현 memberSaga 연결
3. PartnerApi 구현 partnerSaga 연결
4. 파트너 권한이 있을때 파트너 권한이 없을때를 상태처리로 다르게 보이도록 하였습니다.
5. Material UI로 대쉬보드 생상 변경및 main 화면에 css 추가

### 관련 트러블 슈팅
- useEffect 관련 이슈
    - https://www.notion.so/State-Select-be93b1dc92254037a2cb082c65205e9c


### 관련 참고자료


### 주요 키워드
- UI 라이브러리, Redux, Redux-Saga, Api
</div>
</details>


# 2021년 11월 9일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/ef98547efaeb8667f90ae887f383b345353bd4a6
 <br><br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

## 백엔드
1. ProductRequest 필드 타입 추가,
    - 프론트의 ProductResponse에 필요한 데이터 타입이 지정되지 않은게 몇개 있어서 추가해주었습니다.
2. 페이징용 Product 메소드 구현
3. 수정용 modify 메서드 구현
<br>

## 프론트엔드
1. 제품목록 페이징처리 구현
    - 판매 상품 조회용 Redux-Saga, Redux 구현
    - 백엔드 연동 Api 구현
    - 대쉬보드 색상 컨셉에 맞게 변경
2. S3버켓에 폼데이터로 변환하여 파일을 업로드 할수 있도록 했습니다.
    - 제품의 사진을 url을 가지고 서로 조회 할수 있습니다.
3. Product부분 요청, 응답 타입 분리, 페이징 타입분리, State타입 추가

4. 테스트용 위치정보 조회 Api 구현
    - 사용하려면 조금더 시간이 필요 할 것 같습니다.

### 관련 트러블 슈팅
- useEffect 관련, 인라인 수정시 state 바로 가져오기 문제
    - https://www.notion.so/useEffect-8483feb1adf040419adfdbc9ff33c4ba


### 관련 참고자료
- 주소 조회 API
    - https://sso-feeling.tistory.com/506

### 주요 키워드
- Redux, Redux-Saga, Api
</div>
</details>
<br>

# 2021년 11월 10일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/ef98547efaeb8667f90ae887f383b345353bd4a6
 <br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">        

## 백엔드
1. 수정된 데이터를 저장하는 Put메소드를 구현했습니다.
<br>

## 프론트엔드
1. 제품목록 수정, 저장 구현
    - 수정 버튼을 누르면 제품명, 가격등을 바꿀수 있도록 구현했습니다.
    - 저장 버튼을 누르면 수정한 데이터를 저장하도록 구현했습니다.

2. 저장한 데이터를 dispatch 하여 redux-state에 보여주도록 하였습니다.

### 관련 트러블 슈팅
- 화면이 첫 로딩될때는 서버사이드 랜더링이라 state가 기본값으로 되는게 정상이었다.

### 관련 참고자료


### 주요 키워드
- dispatch , yield, generated함수
</div>
</details><br>






# 2021년 11월 12일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/28a0454b9318b05eb66866136255a9233e64d429
 <br>


<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 프론트엔드
1. 제품목록 수정, 저장 리펙터링
    - 제품 목록에서 수정 버튼을 누르면 인라인 수정모드가 아닌 상세 수정화면으로 넘어가던 버그를 수정했습니다.

2. 주문목록 구현
    - 주문이 들어오면 주문목록 화면에서 주문데이터를 보여줄수 있도록 구현했습니다.

3. 주문목록 더보기 처리 구현
    - 주문목록은 카드 리스트 형태여서 페이징보다 더보기 버튼을 누르면 다음 데이터를 불러오도록 구현했습니다.

### 관련 트러블 슈팅
- 제품 수정시 processing의 state만 수정이 안되는 버그 발견
- useRef() 기본값 null처리 안하고 사용하기

- 관련 이슈 트러블 슈팅입니다.
    - https://www.notion.so/useRef-null-processing-state-a0ef467cb82a40879e8e398ee8a8271e


### 주요 키워드
</div>
</details><br>

# 2021년 11월 13일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/ce3d40eef0c14dbdf16ff569b45852aab0c52b1d
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 제품의 아이디가 동일하면 db에서 다른 파트너여도 update가 되어 제품데이터의 중복을 없애고자 복합키를 사용해 중복을 없앴습니다.

2. 물건 등록시 메세지큐로 SubscribeService로 데이터를 전송 하도록 했습니다.

3. ServerSentEvent를 통해 주문이 들어오면 실시간으로 화면에 나오는 주문알리미를 구현 했습니다.

4. 1번의 여파로 생긴 에러들을 수정했습니다. 
    1. typeMismatchException = > { 기존 아이디 : long ~>  현재 아이디 : ProductId : { productId, partnerId } }
    2. 프론트또한 마찬가지로 Api의 매개변수를 수정해주었습니다. { number ⇒ Product }
    3. Axios의 delete 메소드에 매개변수로 객체가 들어가지 않아 put 메소드를 사용하였습니다.
    4. api의 Path를 통해 변수를 넘길때 객체 타입을 넘길수 없어  ProductId가 필요한 부분을 { 요청바디 }에 넣어 보낼수 있도록 하였습니다.


## 프론트엔드
1. 메인 대쉬보드의 그리드 화면을 구현하고 , 주문알리미 기능을 만들었습니다.
    1. 그리드 화면은 materialUI의 grid와 paper를 사용했고, 주문알리미 기능은 ServerSentEvent 방식을 통해 구현했습니다.

### 관련 트러블 슈팅
- 버튼 클릭시 아무 함수도 안걸었는데 새로고침이 되는 상황
- 1번 파트너와 2번 파트너를 준비한뒤 각각 제품을       넣었을때 1번 파트너의 제품이 사라짐

- 관련 이슈 트러블 슈팅입니다.
    - https://www.notion.so/pk-UPDATE-da9e521aac194bd68c6fcad342b32306

- 관련 참고 자료 입니다.
    - https://devhoma.tistory.com/90


### 주요 키워드
</div>
</details><br>


# 2021년 11월 14일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/d10bfe8a147b42ad875ee412715f16ae433525bf
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 첫 화면 접속시 보여주는 최근 등록 제품 8개 캐시데이터로 저장후 companyName 기준으로 조회할수 있도록 구현 했습니다.
    1. 새로 제품이 추가되면 기존 캐시데이터를 삭제하고 다시 최신순 8개를 저장하도록 했습니다.

2. Subscribe-Service와 메시지큐로 제품데이터를 전송 했습니다.

3. queryDsl 의존주입 후 Q클래스를 받아두었습니다.

4. 기존 파트너 { 구독, 제품 }데이터 전체조회 메소드 삭제후 캐시데이터로 조회 하는걸로 수정했습니다.

## 프론트엔드
1. 메인 대쉬보드 화면에 최근 등록제품 8개를 보여주기 위해 데이터 그리드 처리 및 데이터 클릭시 해당 제품 상세보기로 이동하기를 구현했습니다.


### 주요 키워드
</div>
</details><br>

# 2021년 11월 15일
커밋 링크입니다.<br>
 - https://github.com/jaeyoon492/-weekly-coffee/commit/9d57cebeb9b748e83ab84031b13187655b0a916b
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 주문데이터 메세지큐 수신 구현

2. 화면이 움직이는 순서에 따라 데이터를 조회하고, 새로고침이 되어도 데이터가 화면에 계속 보여지도록 useEffect와 유효성 검사 처리

3.  조회성능 개선을 위해 주문이 들어올때 subscribeDate의 타입을 String타입 -> Date 타입으로 변경 하였습니다.


## 프론트엔드
1. 주문데이터 페이징 첫 조회후 리랜더링 같은 이벤트가 생기면 같은 페이지의 같은 데이터가 기존 state에 concat 되어 화면에 표시 되는 버그가 생겨 수정하였습니다.

    1.  첫조회에 유효성 검사 로직을 추가 하여, 같은 데이터가 들어오는걸 방지하도록 했습니다.

    2.  다음 페이지 데이터를 불러 올때는 다른 ActionCreator 함수를 사용해 데이터를 조회 할수 있도록 버그를 수정했습니다.


## 트러블슈팅
- 이슈 관련내용을 적어놓은 트러블 슈팅 링크 입니다.
https://www.notion.so/df2be95613ba49d6965c28ac790ba53f


- 주문 디테일이 제품의 외래키(FK)를 가지고 있어 제품데이터만 디비에 있을때는 문제없이 삭제되지만, 주문이 들어오면 주문디테일에 제품 외래키가 있어서 제품만 따로 삭제가 안되는 버그가 생겼습니다.

- 주문데이터 페이징 첫 조회후 리랜더링 같은 이벤트가 생기면 같은 페이지의 같은 데이터가 기존 state에 concat 되어 화면에 표시 되는 버그가 있었습니다.

### 주요 키워드
- 외래키, 페이징, 리랜더링, 스테이트 초기화, 중복조회, 유효성 검사, concat, ActionCreateCreate


</div>
</details><br>


# 2021년 11월 16일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/c3a9d30460ad32a3bb11f0a02592f78cc4429ae4
- https://github.com/jaeyoon492/-weekly-coffee/commit/bb1319a5509ed4754ea856864f087cc47bbd0a5e
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 제품 삭제 코드 수정 [주문 데이터가 있을때 (포린키로 묶여 있을 때)]

2. 메세지큐로 잘못된 데이터가 넘어올때 무한으로 메세지를 보내는데 yml에 제한을 설정해 무한으로 메세지가 넘어오는걸 막을수 있었습니다.

3. 파일처리관련 자바 파일 gitIgnore 처리 ( S3의 키값이 노출되어 보안상 문제가 발생할거 같다 수정했습니다.)


## 프론트엔드
1. 프론트엔드 서버를 배포하였습니다. (CORS에러 발생)

.  기존 nginx를 사용해 배포했던것을 github 클로닝으로 배포하였습니다. 일련의 문제로 화면에 ui는 나오지만 백엔드와 CORS 에러가 발생하여 수정중에 있습니다.



## 트러블슈팅
- 이슈 관련내용을 적어놓은 트러블 슈팅 링크 입니다.
- 제품 삭제 관련 트러블 슈팅
https://www.notion.so/b5ec397ecdee4279878fd245175dba19

- 배포이후 ec2 서버에서 생긴 CORS 에러
- https://www.notion.so/ec2-CORS-474a0b07265248ac83b50f8abd9370be


## 이슈 내용
- 주문 과 제품이 many to one으로 관계가 맵핑 되어있는데 주문이 들어오면 제품이 삭제가 되지 않았다.

- 배포 이후 localhost3000에서는 원래처럼 백엔드 local8082와 통신이 잘 되었지만 배폰한 ec2와 백엔드 8080과는 통신이 제대로 되지 않았다.


</div>
</details><br>

# 2021년 11월 17일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/75af5ec83b0cfe46a66fabbd84c2073d8d6ff451
- https://github.com/jaeyoon492/-weekly-coffee/commit/ab6390bf65b52670bc828037cbd9c21276291672
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 일 매출을 집계하여 수집하는 테이블을 추가했습니다. - Profit

2. 메세지큐 수신중 에러가 나면 메세지를 제대로 수신할때 까지 무한대로 송신하는 버그를 yml파일 수정을 통해 해결했습니다.

3. 백엔드 서버를 ec2서버에 배포 하였습니다.


## 프론트엔드
1. 클라이언트 서버의 CORS 에러를 고치고 배포후 백엔드 배포 서버와 통신할수 있도록 했습니다.


## 트러블슈팅
### 이슈 관련내용을 적어놓은 트러블 슈팅 링크 입니다.
- 배포이후 ec2 서버에서 생긴 CORS 에러
- https://www.notion.so/ec2-CORS-474a0b07265248ac83b50f8abd9370be

- Next.js github Pages배포 중 에러 및 해결<br>
https://www.notion.so/Next-js-github-Pages-7ec603ba06aa4ce3a1fb0f88e3927a9d


## 이슈 내용
- ec2 배포중 서버 과부하로 인한 서버중지 현상

- 배포 이후 localhost3000에서는 원래처럼 백엔드 localhost8082와 통신이 잘 되었지만 배포한 ec2와 백엔드 localhost8082포트는 통신이 제대로 되지 않았다.


</div>
</details><br>

# 2021년 11월 18일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/636bd4692b88a95570ab11c0394e77549b7eb3a3
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 매출 데이터 집계용 테이블 Profit울 만들어 Subscribe에서 하루에 한번 데이터를 불러와 합산하여 다른 테이블에 저장하는걸 querydsl로 구현 했습니다.
    - 현재 테스트 중이어서 3초에 한번씩 받아오는데 기능이 완성된면 하루에 한번 데어터를 집게할수 있도록 스케줄을 고칠 예정 입니다.

2. Profit 구현시 조건절에 날짜 값을 문자열로 받는데, 추후 성능 개선을 위해 Date 타입이나 숫자 타입으로 바꿀 예정입니다.


## 프론트엔드
1. ApexChart로 일 매출 통계 데이터를 끌어와 그래프화 하였습니다.
    - 데이터는 화면까지 잘 받아올수 있자만 화면에서 차트 컴포넌트로 Props down 해주는 부븐에 데이터가 안들가 있는데, 제대로 돌아가지 않는다.

## 트러블슈팅
### 이슈 관련내용을 적어놓은 트러블 슈팅 링크 입니다.
- https://www.notion.so/queryDsl-94cee6068b734e33910e0095019a15bb


## 이슈 내용
- 빌드시 querydel이 빌드가 안되는 현상이 있었습니다.

</div>
</details><br>



# 2021년 11월 19일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/26a9c060baa72832988089074b8989d447022650
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 주문 데이터를 집계하여 일매출 데이터로 환산 저장하는 테이블의 쿼리문을 수정하여 일자기준으로 그룹핑하여 새로운 필드로 만들었습니다.
    - 그룹핑한 데이터를 TotalPaymentByDateAndPartnerId 타입의 필드 만들었습니다.


## 프론트엔드
1. ApexChart의 그래프 높이값을 변경 하였습니다.

2. 주문 데이터에서 복수의 SubscribeDetail이 들어올경우 첫번째 데이터 이후에는 , 외 몇건 으로 처리 했습니다.

## 트러블슈팅
### 이슈 관련내용을 적어놓은 트러블 슈팅 링크 입니다.
- https://www.notion.so/0abdb02565bc4f76a662e054905c15c7


## 이슈 내용
- 일 매출 데이터를 받아서 그래프로 처리 할때, 데이터 타입이 제대로 맞지 않아 데이터를 차트에 띄워주는게 제대로 되지 않았습니다.

</div>
</details><br>


# 2021년 11월 20일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/7698fc66f8af235712c7066b4a4e3c66e077e41a
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 프론트엔드
1. 최근 등록 제품 캐시데이터 조회 reduxSaga 사용 -> 화면에서 바로 조회 하도록 변경했습니다.

2. 수정시 메세지큐 로 subscribe서비스에 수정된 데이터 전송할수 있도록 구현, 삭제시 메세지큐로 subscribe서비스에 삭제한 제품의 id를 전송할 수 있도록 구현했습니다.


## 이슈 내용
- 기존에 제품데이터를 끌어오지 않으면 별도로 최근 등록 제품이 조회 되지 않는 문제가 있었습니다.

</div>
</details><br>


# 2021년 11월 21일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/dd1b350bc4719538fb98a0ebe207c1c8db9a7104
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 주문, 수정, 삭제를 메세지큐로 보내면 subscribe서비스 쪽에서 제대로 반영되는지 테스트 했습니다.


</div>
</details><br>


# 2021년 11월 22일
커밋 링크입니다.<br>
- https://github.com/jaeyoon492/-weekly-coffee/commit/087301215a8df97afbc509687a28de5cbf3833d4
 <br>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

## 백엔드
1. 주문 접수시 접수가 완료됐음을 subscribeService 쪽으로 데이터를 보내주어야 할것 같아 메세지큐연동, 서비스, 컨트롤러에 기능을 추가 했습니다.

## 프론트엔드
1. 주문 접수버튼 클릭 이벤트 발생시 접수완료 된 subscribeId를 넘겨주기 위해 redux와 redux-saga에 내용을 추가했습니다.

2. 카카오의 주소 조회 Api를 구현 했습니다.
    - 데이터를 이벤트로 올려주는 과정에서 어려움이 있어 트러블 슈팅을 남겼습니다.

## 트러블 슈팅
 - PropsUp - eventDown 방식이해하기
 - https://www.notion.so/eventUp-Props-Down-c6e9da9d504b4d588ec73f4679a6a785


</div>
</details><br>

