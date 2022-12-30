var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'database-2.cbz6fbp9zvar.ap-northeast-2.rds.amazonaws.com',
  user: 'root',
  password: 'fc357159!',
  database: 'wonju',
  dateStrings: 'date',
  multipleStatements:true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected!');
})
//start

//공지사항 리스트 가져오는 쿼리
function getNotice(callback) {
  connection.query('SELECT * FROM noticeinfo ORDER BY id desc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
//공지사항 읽기 쿼리
function getNoticeByid(id, callback) {
  connection.query(`select * from noticeinfo where id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    }
  )
}
//공지사항 조회수 증가 쿼리 
function incrNoticeView(id, callback) {
  connection.query(`UPDATE noticeinfo SET views = views + 1 WHERE id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    })
}
//공지사항 작성 쿼리
function insertNotice(title, content, callback) {
  connection.query(`INSERT INTO noticeinfo(title,views,create_time,content) VALUES ('${title}',0,NOW(),'${content}')`, (err) => {
    if (err) throw err;
    callback();
  })
}
//공지사항 수정 쿼리
function updateNotice(id, title, content, callback) {
  connection.query(`UPDATE noticeinfo SET title='${title}',content='${content}',
    create_time=NOW() WHERE id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  })
}
//공지사항 삭제 쿼리
function deleteNoticeByid(id, callback) {
  connection.query(`delete from noticeinfo where id=${id}`, (err => {
    if (err) throw err;
    callback();
  }))
}


//QNA  start

// QNA 리스트 가져오는 쿼리
function getqnainfo(callback) {
  connection.query('SELECT * FROM qnainfo ORDER BY id desc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
}
//QNA 리스트 작성하는 쿼리
function insertqna(title, content, user, tel, category, callback) {
  connection.query(`INSERT INTO qnainfo(create_time,title,content,user,tel,category,views) VALUES (NOW(),'${title}','${content}','${user}','${tel}','${category}',0)`, (err) => {
    if (err) throw err;
    callback();
  })
}
//QNA 읽기 쿼리
function getQnaInfoByid(id, callback) {
  connection.query(`select * from qnainfo where id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    }
  )
}
//QNA 수정 쿼리
function updateQna(id, title, content, user, tel, category, callback) {
  connection.query(`UPDATE qnainfo SET title='${title}',content='${content}', user='${user}', tel='${tel}', category='${category}',
    create_time=NOW() WHERE id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  })
}
//QNA 삭제 쿼리
function deleteQnaByid(id, callback) {
  connection.query(`delete from qnainfo where id=${id}`, (err => {
    if (err) throw err;
    callback();
  }))
}
//QNA 조회수 증가 쿼리 
function incrQnaView(id, callback) {
  connection.query(`UPDATE qnainfo SET views = views + 1 WHERE id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    })
}
module.exports = {
  insertNotice,
  getNotice,
  incrNoticeView,
  getNoticeByid,
  updateNotice,
  deleteNoticeByid,
  getqnainfo,
  insertqna,
  getQnaInfoByid,
  updateQna,
  deleteQnaByid,
  incrQnaView
};

//인서트 와 겟또자데
