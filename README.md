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



