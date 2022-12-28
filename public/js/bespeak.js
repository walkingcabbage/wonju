// 달력 생성
const makeCalendar = (date) => {
  // 현재 년도와 월 받아오기
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  // 첫날의 요일 구하기 - 초기 시작위치를 위해서
  const firstDay = new Date(date.setDate(1)).getDay();
  // 마지막 날짜 구하기
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달 날짜 표시하기
  for (let i = 1; i <= lastDay; i++) {
    htmlDummy += `<div>${i}</div>`;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
}


const date = new Date();

makeCalendar(date);

// 이전달 이동
document.querySelector(`.prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}




// hold
let calender = document.querySelector(".calender");
let addUser = document.querySelector(".adduser");
let bookBtn = document.querySelector(".booking_btn");

let A1 = document.querySelectorAll('.a1');


for (let i = 0; i < A1.length; i++) {
  A1[i].addEventListener("click", () => {
    
    A1[i].classList.toggle('hold');

    for(let j=0;j<A1.length;j++){
      if(A1[j].classList.contains('hold')){
        calender.classList.remove('display_none');
        addUser.classList.remove('display_none');
        break;
      }else if(!A1[j].classList.contains('hold')){
        calender.classList.add('display_none');
        addUser.classList.add('display_none');
      }
    }

  });
}
