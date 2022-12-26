const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.render('index', {
    subHeader: false,
    subFooter:false,
    category:'main',
    subcategory:'main',
  });
})
router.get('/introPage', function (req, res) {
  res.render('intro', {
    subHeader: true,
    subFooter:true,
    category:'intro',
    subcategory:'intro',
  });
})
router.get('/expPage', function (req, res) {
  res.render('experience', {
    subHeader: true,
    subFooter:true,
    category:'program',
    subcategory:'exp',
  });
})
router.get('/campPage', function (req, res) {
  res.render('camp', {
    subHeader: true,
    subFooter:true,
    category:'program',
    subcategory:'camp',
  });
})
router.get('/lodgingPage', function (req, res) {
  res.render('lodging', {
    subHeader: true,
    subFooter:true,
    category:'facility',
    subcategory:'lodging',
  });
})
router.get('/auditoriumPage', function (req, res) {
  res.render('auditorium', {
    subHeader: true,
    subFooter:true,
    category:'facility',
    subcategory:'auditorium',
  });
})
router.get('/expcenterPage', function (req, res) {
  res.render('expcenter', {
    subHeader: true,
    subFooter:true,
    category:'facility',
    subcategory:'expcenter',
  });
})
router.get('/noticePage', function (req, res) {
  res.render('noticeList', {
    subHeader: true,
    subFooter:true,
    category:'community',
    subcategory:'notice',
  });
})
router.get('/FAQPage', function (req, res) {
  res.render('noticeList', {
    subHeader: true,
    subFooter:true,
    category:'community',
    subcategory:'FAQ',
  });
})
router.get('/QNAPage', function (req, res) {
  res.render('QNA', {
    subHeader: true,
    subFooter:true,
    category:'community',
    subcategory:'QNA',
  });
})
router.get('/learnPage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter:true,
    category:'learning',
    subcategory:'learn',
  });
})
router.get('/learnrefPage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter:true,
    category:'learning',
    subcategory:'insectref',
  });
})
router.get('/stegPage', function (req, res) {
  res.render('steg', {
    subHeader: true,
    subFooter:true,
    category:'learning',
    subcategory:'steg',
  });
})
router.get('/beatlePage', function (req, res) {
  res.render('learn', {
    subHeader: true,
    subFooter:true,
    category:'learning',
    subcategory:'beatle',
  });
})





module.exports = router;