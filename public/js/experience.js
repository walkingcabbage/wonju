function getExpTabEvent() { //곤충체험 탭
    const tabBtn=document.querySelectorAll('#exp-tab>li>a');
    const tabcon=document.querySelectorAll('#expBox>.boxInner');
    const tabimg=document.querySelector('#expBox');

    for(let i=0;i<tabBtn.length;i++){
        tabBtn[i].addEventListener('click',(e)=>{

            e.preventDefault();

            //탭 active 아이콘 반복문
            for(let j=0;j<tabBtn.length;j++){
                tabBtn[j].classList.remove('activeLi');  
            }
            //탭 콘텐츠 변경 반복문
            for(let j=0;j<tabcon.length;j++){
                tabcon[j].classList.remove('active');
                if(tabBtn[i].dataset.tab==tabcon[j].id){
                    tabcon[j].classList.add('active');
                }
            }
            //탭 이미지 변경 반복문
            for(let j=0;j<tabBtn.length;j++){
                    tabimg.classList.remove(tabBtn[j].dataset.tab)
            }
            e.target.classList.add('activeLi');
            tabimg.classList.add(e.target.dataset.tab);
        })
    }

}
function getFarmTabEvent() { //낙농체험 탭
    const tabBtn=document.querySelectorAll('#farm-tab>li>a');
    const tabcon=document.querySelectorAll('#farmBox>.boxInner');
    const tabimg=document.querySelector('#farmBox');

    for(let i=0;i<tabBtn.length;i++){
        tabBtn[i].addEventListener('click',(e)=>{

            e.preventDefault();

            //탭 active 아이콘 반복문
            for(let j=0;j<tabBtn.length;j++){
                tabBtn[j].classList.remove('activeLi');  
            }
            //탭 콘텐츠 변경 반복문
            for(let j=0;j<tabcon.length;j++){
                tabcon[j].classList.remove('active');
                if(tabBtn[i].dataset.tab==tabcon[j].id){
                    tabcon[j].classList.add('active');
                }
            }
            //탭 이미지 변경 반복문
            for(let j=0;j<tabBtn.length;j++){
                    tabimg.classList.remove(tabBtn[j].dataset.tab)
            }
            e.target.classList.add('activeLi');
            tabimg.classList.add(e.target.dataset.tab);
        })
    }
}
function getExpPkgTabEvent() { //곤충패키지 탭
    const tabBtn=document.querySelectorAll('#exp-pkg-tab>li>a');
    const tabcon=document.querySelectorAll('#exp-pkg-Box>.pboxInner');
    const tabimg=document.querySelector('#exp-pkg-Box');

    for(let i=0;i<tabBtn.length;i++){
        tabBtn[i].addEventListener('click',(e)=>{

            e.preventDefault();

            //탭 active 아이콘 반복문
            for(let j=0;j<tabBtn.length;j++){
                tabBtn[j].classList.remove('pActive');  
            }
            //탭 콘텐츠 변경 반복문
            for(let j=0;j<tabcon.length;j++){
                tabcon[j].classList.remove('active');
                if(tabBtn[i].dataset.tab==tabcon[j].id){
                    tabcon[j].classList.add('active');
                }
            }
            //탭 이미지 변경 반복문
            for(let j=0;j<tabBtn.length;j++){
                    tabimg.classList.remove(tabBtn[j].dataset.tab)
            }
            e.target.classList.add('pActive');
            tabimg.classList.add(e.target.dataset.tab);
        })
    }
}
function getFarmPkgTabEvent() { //낙농패키지 탭
    const tabBtn=document.querySelectorAll('#farm-pkg-tab>li>a');
    const tabcon=document.querySelectorAll('#farm-pkg-Box>.pboxInner');
    const tabimg=document.querySelector('#farm-pkg-Box');

    for(let i=0;i<tabBtn.length;i++){
        tabBtn[i].addEventListener('click',(e)=>{

            e.preventDefault();

            //탭 active 아이콘 반복문
            for(let j=0;j<tabBtn.length;j++){
                tabBtn[j].classList.remove('pActive');  
            }
            //탭 콘텐츠 변경 반복문
            for(let j=0;j<tabcon.length;j++){
                tabcon[j].classList.remove('active');
                if(tabBtn[i].dataset.tab==tabcon[j].id){
                    tabcon[j].classList.add('active');
                }
            }
            //탭 이미지 변경 반복문
            for(let j=0;j<tabBtn.length;j++){
                    tabimg.classList.remove(tabBtn[j].dataset.tab)
            }
            e.target.classList.add('pActive');
            tabimg.classList.add(e.target.dataset.tab);
        })
    }
}
function getDroneTabEvent() { //낙농체험 탭
    const tabBtn=document.querySelectorAll('#drone-tab>li>a');
    const tabcon=document.querySelectorAll('#droneBox>.boxInner');
    const tabimg=document.querySelector('#droneBox');

    for(let i=0;i<tabBtn.length;i++){
        tabBtn[i].addEventListener('click',(e)=>{

            e.preventDefault();

            //탭 active 아이콘 반복문
            for(let j=0;j<tabBtn.length;j++){
                tabBtn[j].classList.remove('activeLi');  
            }
            //탭 콘텐츠 변경 반복문
            for(let j=0;j<tabcon.length;j++){
                tabcon[j].classList.remove('active');
                if(tabBtn[i].dataset.tab==tabcon[j].id){
                    tabcon[j].classList.add('active');
                }
            }
            //탭 이미지 변경 반복문
            for(let j=0;j<tabBtn.length;j++){
                    tabimg.classList.remove(tabBtn[j].dataset.tab)
            }
            e.target.classList.add('activeLi');
            tabimg.classList.add(e.target.dataset.tab);
        })
    }
}

getExpTabEvent();
getFarmTabEvent();
getExpPkgTabEvent();
getFarmPkgTabEvent();
getDroneTabEvent();