// =================================
//joinform_check 함수로 유효성 검사
function find_check01() {
  //변수에 담아주기
  var user_name = document.getElementById("user_name");
  var user_email = document.getElementById("user_email");

  //이름=============================================
  //이름 정규식
  var nameCheck = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
  if (!nameCheck.test(user_name.value)) {
    alert("이름은 한글,영문만 사용해야 합니다.");
    user_name.focus();
    return false;
  }
  //이름 유효성검사
  if (user_name.value == "") {
    alert("이름을 입력하세요.");
    user_name.focus();
    return false;
  }

  //이메일=============================================
  if (user_email.value == "") {
    alert("이메일 주소를 입력하세요.");
    user_email.focus();
    return false;
  }

  //이메일 옵션 선택후 주소 자동 완성
  function change_email() {
    var email_add = document.getElementById("email_add");
    var email_sel = document.getElementById("email_sel");

    //지금 골라진 옵션의 순서와 값 구하기
    var idx = email_sel.options.selectedIndex;
    var val = email_sel.options[idx].value;

    email_add.value = val;
  }

  //입력 값 전송
  document.join_form.submit(); //유효성 검사의 포인트
}
