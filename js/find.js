// function tab1(){
//   document.getElementById('tab1_txt').style.display = 'block' ;
//   document.getElementById('tab2_txt').style.display = 'none' ;
// }
// function tab2(){
//   document.querySelector('#tab1_txt').style.display = 'none' ;
//   document.querySelector('#tab2_txt').style.display = 'block' ;
// }

const tabItem = document.querySelectorAll(".tab_li");
const tabContent = document.querySelectorAll(".tab_cont");
tabItem.forEach((item) => {
  item.addEventListener("click", tabHandler);
});
function tabHandler(item) {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  tabItem.forEach((title) => {
    title.classList.remove("li_act");
  });
  tabContent.forEach((target) => {
    target.classList.remove("target");
  });
  document.querySelector("#" + target).classList.add("target");
  tabTarget.classList.add("li_act");
}

// =================================
//joinform_check 함수로 유효성 검사
// function find_check01() {
//   //변수에 담아주기
//   var user_id = document.getElementById("user_id");
//   var user_name = document.getElementById("user_name");
//   var user_email = document.getElementById("user_email");
//   // 아이디==========================
//   //아이디 정규식
//   var idCheck = /^[a-z]+[a-z0-9]{6,12}$/;
//   if (!idCheck.test(user_id.value)) {
//     alert("아이디는 영문자+숫자 조합으로 6~12자리 사용해야 합니다.");
//     user_id.focus();
//     return false;
//   }
//   //아이디 유효성검사
//   if (user_id.value == "") {
//     //해당 입력값이 없을 경우 같은말: if(!uid.value)
//     alert("아이디를 입력하세요.");
//     user_id.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
//     return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
//   }

//   //이름=============================================
//   //이름 정규식
//   var nameCheck = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
//   if (!nameCheck.test(user_name.value)) {
//     alert("이름은 한글,영문만 사용해야 합니다.");
//     user_name.focus();
//     return false;
//   }
//   //이름 유효성검사
//   if (user_name.value == "") {
//     alert("이름을 입력하세요.");
//     user_name.focus();
//     return false;
//   }

//   //이메일=============================================
//   if (user_email.value == "") {
//     alert("이메일 주소를 입력하세요.");
//     user_email.focus();
//     return false;
//   }

//   //이메일 옵션 선택후 주소 자동 완성
//   function change_email() {
//     var email_add = document.getElementById("email_add");
//     var email_sel = document.getElementById("email_sel");

//     //지금 골라진 옵션의 순서와 값 구하기
//     var idx = email_sel.options.selectedIndex;
//     var val = email_sel.options[idx].value;

//     email_add.value = val;
//   }

//   //입력 값 전송
//   document.join_form.submit(); //유효성 검사의 포인트
// }

// //joinform_check 함수로 유효성 검사
// function find_check02() {
//   //변수에 담아주기
//   var user_id = document.getElementById("user_id");
//   var user_name = document.getElementById("user_name");
//   var user_email = document.getElementById("user_email");
//   // 아이디==========================
//   //아이디 정규식
//   var idCheck = /^[a-z]+[a-z0-9]{6,12}$/;
//   if (!idCheck.test(user_id.value)) {
//     alert("아이디는 영문자+숫자 조합으로 6~12자리 사용해야 합니다.");
//     user_id.focus();
//     return false;
//   }
//   //아이디 유효성검사
//   if (user_id.value == "") {
//     //해당 입력값이 없을 경우 같은말: if(!uid.value)
//     alert("아이디를 입력하세요.");
//     user_id.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
//     return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
//   }

//   //이름=============================================
//   //이름 정규식
//   var nameCheck = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
//   if (!nameCheck.test(user_name.value)) {
//     alert("이름은 한글,영문만 사용해야 합니다.");
//     user_name.focus();
//     return false;
//   }
//   //이름 유효성검사
//   if (user_name.value == "") {
//     alert("이름을 입력하세요.");
//     user_name.focus();
//     return false;
//   }

//   //이메일=============================================
//   if (user_email.value == "") {
//     alert("이메일 주소를 입력하세요.");
//     user_email.focus();
//     return false;
//   }

//   //이메일 옵션 선택후 주소 자동 완성
//   function change_email() {
//     var email_add = document.getElementById("email_add");
//     var email_sel = document.getElementById("email_sel");

//     //지금 골라진 옵션의 순서와 값 구하기
//     var idx = email_sel.options.selectedIndex;
//     var val = email_sel.options[idx].value;

//     email_add.value = val;
//   }

//   //입력 값 전송
//   document.join_form.submit(); //유효성 검사의 포인트
// }
