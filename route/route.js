const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.render('index', {
    subHeader: false,
    subFooter:false,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'main',
    subcategory:'main',
  });
})
router.get('/introPage', function (req, res) {
  res.render('intro', {
<<<<<<< HEAD
    subHeader: true,
    subFooter:true,
        isHF:true,
=======
    subHeader:true,
    subFooter:true,
>>>>>>> origin/gyeowoon
    category:'intro',
    subcategory:'intro',
  });
})
router.get('/expPage', function (req, res) {
  res.render('experience', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'program',
    subcategory:'exp',
  });
})
router.get('/campPage', function (req, res) {
  res.render('camp', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'program',
    subcategory:'camp',
  });
})
router.get('/lodgingPage', function (req, res) {
  res.render('lodging', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'facility',
    subcategory:'lodging',
  });
})
router.get('/auditoriumPage', function (req, res) {
  res.render('auditorium', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'facility',
    subcategory:'auditorium',
  });
})
router.get('/expcenterPage', function (req, res) {
  res.render('expcenter', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'facility',
    subcategory:'expcenter',
  });
})
router.get('/noticePage', function (req, res) {
  res.render('noticeList', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'community',
    subcategory:'notice',
  });
})
router.get('/FAQPage', function (req, res) {
  res.render('noticeList', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'community',
    subcategory:'FAQ',
  });
})
router.get('/QNAPage', function (req, res) {
  res.render('QNA', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'community',
    subcategory:'QNA',
  });
})
router.get('/learnPage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'learning',
    subcategory:'learn',
  });
})
router.get('/learnrefPage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'learning',
    subcategory:'insectref',
  });
})
router.get('/stegPage', function (req, res) {
  res.render('steg', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
=======
>>>>>>> origin/gyeowoon
    category:'learning',
    subcategory:'steg',
  });
})
router.get('/beatlePage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter:true,
<<<<<<< HEAD
        isHF:true,
    category:'learning',
    subcategory:'beatle',
  });
})
router.get('/loginPage', function (req, res) {
  res.render('login', {
    subHeader: false,
    subFooter:false,
    isHF:false,
    category:'login',
    subcategory:'login',
  });
})
router.get('/join01Page', function (req, res) {
  res.render('join1', {
    subHeader: false,
    subFooter:false,
    isHF:false,
    category:'join',
    subcategory:'join01',
  });
})
router.get('/join02Page', function (req, res) {
  res.render('join2', {
    subHeader: false,
    subFooter:false,
    isHF:false,
    category:'join',
    subcategory:'join02',
  });
})
router.get('/findUserPage', function (req, res) {
  res.render('findUser', {
    subHeader: false,
    subFooter:false,
    isHF:false,
    category:'login',
    subcategory:'findUser',
  });
=======
    category:'learning',
    subcategory:'beatle',
  });
>>>>>>> origin/gyeowoon
})





module.exports = router;