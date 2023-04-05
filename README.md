# 원주곤충마을박물관
접근성, 디자인, 반응형 등이 아쉬웠던 [원주곤충마을박물관](http://www.bugsvill.co.kr/)의 리뉴얼 팀프로젝트를 진행 하였다.  
## Renewal Link
[바로가기](https://wonju-walkingcabbage.koyeb.app/)
## Color & Font
![image](https://user-images.githubusercontent.com/70689018/229988833-a9b88d28-5596-439d-83b6-4df6922b40c6.png)  
Font : Noto Sans KR
## Details
### Main Page
* Main 인트로 섹션에서 스크롤이 아래로 이동하면 자동으로 다음 섹션으로 이동하게 만들었다. 
* 주변 이미지에 애니메이션을 주어 생동감을 주었다.
* 체험 프로그램 섹션에서 Swiper.js API를 이용하여 PC & 태블릿 환경에선 버튼을 이용하여 슬라이드를, 모바일 환경에선 드래그를 이용하여 슬라이드 가능하게 하였다.   
### Sub Page
1. 로그인 & 회원가입
    * 로그인 : 로그인 기능 미구현
    * 회원가입 : 정규식을 기반으로 정보가 적합한지 check, User 데이터베이스에 정보를 추가  
3. 곤충마을 소개 / 인삿말 : 업체 소개 페이지
4. 프로그램 / 체험프로그램 & 캠프프로그램 & 예약하기 : JS를 이용한 tab 기능 구현
5. 커뮤니티 / 공지사항 & 자주하는 질문 & 묻고 답하기 : 데이터베이스, 리스트와 아코디언을 이용한 기능 구현
6. 시설 안내 / 숙소 & 강당 * 체험관 : JS를 이용한 tab 기능 구현
6. Navigation Bar 
    * EJS & Express.js 기반으로 router에서 category 데이터를 받아 nav가 변경되도록 설정하였다. 
