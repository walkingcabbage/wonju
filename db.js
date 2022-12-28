var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'wonju',
  dateStrings: 'date',
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


module.exports = {
    insertNotice,
    getNotice,
    incrNoticeView,
    getNoticeByid,
    updateNotice,
    deleteNoticeByid,
};