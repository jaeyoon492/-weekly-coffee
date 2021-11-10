# 주간커피 [원두 구독서비스]
##### 다양한 로스터리 카페와 소비자를 연결해주고, 주기적으로 물건을 받을수 있는 구독서비스 입니다.
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