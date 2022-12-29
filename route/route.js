const express = require('express');
const router = express.Router();
const db = require('./../db.js');

//메인페이지
router.get('/', function (req, res) {
  res.render('index', {
    subHeader: false,
    subFooter: false,
    isHF: true,
    category: 'main',
    subcategory: 'main',
  });
})
//소개 페이지
router.get('/introPage', function (req, res) {
  res.render('intro', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'intro',
    subcategory: 'intro',
  });
})
//체험프로그램 페이지
router.get('/expPage', function (req, res) {
  res.render('experience', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'program',
    subcategory: 'exp',
  });
})
//캠프 프로그램 페이지
router.get('/campPage', function (req, res) {
  res.render('camp', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'program',
    subcategory: 'camp',
  });
})
// 예약페이지
router.get('/bookingPage', function (req, res) {
  res.render('bespeak', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'program',
    subcategory: 'booking',
  });
})
// 숙소페이지
router.get('/lodgingPage', function (req, res) {
  res.render('lodging', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'facility',
    subcategory: 'lodging',
  });
})
// 강당 페이지
router.get('/auditoriumPage', function (req, res) {
  res.render('auditorium', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'facility',
    subcategory: 'auditorium',
  });
})
// 체험관 페이지
router.get('/expcenterPage', function (req, res) {
  res.render('expcenter', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'facility',
    subcategory: 'expcenter',
  });
})
//공지사항 리스트
router.get('/noticePage', (req, res) => {
  db.getNotice((rows) => {
    res.render('noticeList', {
      subHeader: true,
      subFooter: true,
      isHF: true,
      category: 'community',
      subcategory: 'notice',
      'rows': rows
    });
  });
})
//공지사항 작성 페이지
router.get('/noticeWritePage', function (req, res) {
  res.render('noticeWrite', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'community',
    subcategory: 'notice',
  });
})
//공지사항 작성 프로세스 
router.post('/writeNotice', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const title = param.title;
  const content = param.content;

  db.insertNotice(title, content, () => {
    res.redirect('noticePage');
  })
})

//공지사항 읽기 페이지
router.get('/noticeReadPage', (req, res) => {
  let id = req.query.id;
  db.incrNoticeView(id, () => {
    db.getNoticeByid(id, (rows) => {
      res.render('noticeRead', {
        subHeader: true,
        subFooter: true,
        isHF: true,
        category: 'community',
        subcategory: 'notice',
        'row': rows[0],
      });
    })
  })
})
//공지사항 수정 페이지 
router.get('/noticeUpdatePage', (req, res) => {
  const id = req.query.id;
  db.getNoticeByid(id, (rows) => {
    res.render('noticeUpdate', {
      subHeader: true,
      subFooter: true,
      isHF: true,
      category: 'community',
      subcategory: 'notice',
      'row': rows[0]
    });
  })
})


//공지사항 수정 프로세스
router.post('/updates', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const id = param.id;
  const title = param.title;
  const content = param.content;
  db.updateNotice(id, title, content, () => {
    res.redirect(`noticeReadPage?id=${id}`);
  })
})

//공지사항 삭제 프로세스
router.get('/deleteNotice', (req, res) => {
  let id = req.query.id;
  db.deleteNoticeByid(id, () => {
    res.redirect('noticePage');
  })
})

//자주 묻는 질문 리스트 페이지
router.get('/FAQPage', function (req, res) {
  res.render('faq', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'community',
    subcategory: 'FAQ',
  });
})

// 묻고 답하기 작성하기 페이지
router.get('/qnaWritePage', function (req, res) {
  res.render('qnaWrite', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'community',
    subcategory: 'QNA',
  });
})
// 묻고 답하기 수정 페이지 가기
router.get('/qnaUpdatePage', function (req, res) {
  const id = req.query.id;
  db.getQnaInfoByid(id, (rows) => {
    res.render('qnaUpdate', {
      subHeader: true,
      subFooter: true,
      isHF: true,
      category: 'community',
      subcategory: 'QNA',
      'row': rows[0]
    });
  })
})

//묻고 답하기 삭제 프로세스
router.get('/deleteQna', (req, res) => {
  let id = req.query.id;
  db.deleteQnaByid(id, () => {
    res.redirect('QNAPage');
  })
})

// 묻고 답하기 수정 프로세스
router.post('/qnaUpdates', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const id = param.id;
  const title = param.title;
  const content = param.content;
  const user = param.user;
  const tel = param.tel;
  const category = param.category;
  db.updateQna(id, title, content, user, tel, category, () => {
    res.redirect('QNAPage');
  })
})

// 묻고 답하기 작성하기 페이지
router.post('/qnaWrite', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const title = param.title;
  const content = param.content;
  const user = param.user;
  const tel = param.tel;
  const category = param.category;
  db.insertqna(title, content, user, tel, category, () => {
    res.redirect('QNAPage');
  })
})

//묻고 답하기 페이지
router.get('/QNAPage', (req, res) => {
  db.getqnainfo((rows) => {
    res.render('QNA', {
      subHeader: true,
      subFooter: true,
      isHF: true,
      category: 'community',
      subcategory: 'QNA',
      'rows': rows
    });
  });
})
//묻고 답하기 읽기 페이지
router.get('/QNAReadPage', function (req, res) {
  let id = req.query.id;
  db.incrQnaView(id, () => {
    db.getQnaInfoByid(id, (rows) => {
      res.render('QNARead', {
        subHeader: true,
        subFooter: true,
        isHF: true,
        category: 'community',
        subcategory: 'QNA',
        'row': rows[0],
      })
    });
  })
})

router.get('/learnPage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'learning',
    subcategory: 'learn',
  });
})

router.get('/learnrefPage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'learning',
    subcategory: 'insectref',
  });
})
router.get('/stegPage', function (req, res) {
  res.render('steg', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'learning',
    subcategory: 'steg',
  });
})
router.get('/beatlePage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter: true,
    isHF: true,
    category: 'learning',
    subcategory: 'beatle',
  });
})
//로그인 페이지
router.get('/loginPage', function (req, res) {
  res.render('login', {
    subHeader: false,
    subFooter: false,
    isHF: false,
    category: 'login',
    subcategory: 'login',
  });
})
//이용 약관 페이지
router.get('/join01Page', function (req, res) {
  res.render('join1', {
    subHeader: false,
    subFooter: false,
    isHF: false,
    category: 'join',
    subcategory: 'join01',
  });
})
// 회원가입 페이지
router.get('/join02Page', function (req, res) {
  res.render('join2', {
    subHeader: false,
    subFooter: false,
    isHF: false,
    category: 'join',
    subcategory: 'join02',
  });
})
//회원 찾기 페이지
router.get('/findUserPage', function (req, res) {
  res.render('findUser', {
    subHeader: false,
    subFooter: false,
    isHF: false,
    category: 'login',
    subcategory: 'findUser',
  });
})





module.exports = router;