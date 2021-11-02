# 주간커피 [원두 구독서비스]
##### 다양한 로스터리 카페와 소비자를 연결해주고, 주기적으로 물건을 받을수 있는 구독서비스 입니다.
<br>

## 개발하는 서비스 - 파트너 서비스

##### 로스터리 카페의 [입점신청, 판매제품등록, 판매제품관리, 주문정보관리]를 개발합니다. 
<br>


## 개발진행과정
# 2021년 11월 1일
커밋한 내용입니다.<br>
 https://github.com/jaeyoon492/-weekly-coffee/commit/793095bb2e7c406d5ef0da7628f49d85f6c5158c<br><br>
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
# 2021년 11월 2일
커밋한 내용입니다.<br>
 https://github.com/jaeyoon492/-weekly-coffee/commit/059c4b99e148efd06e4906df76dc08657d7bdcbc<br><br>

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

