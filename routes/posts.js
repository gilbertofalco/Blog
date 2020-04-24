const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db')

router.get('/posts', (req, res) => {


 
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=cpp62871;PWD=11zj85gv8x9lx@2g;", function (err,conn)  {
      if (err) return console.log(err);
      
      conn.query('select * from CPP62871.POSTS', function (err, data) {
        if (err) console.log(err);
        else{
            console.log(data);
            res.send(data)
        }
     
        conn.close(function () {
          console.log('conn closed');
        });
      });
    });

})

//A SINTAXE DO INSERT SQL É ASPAS

router.get('/posts/new', (req, res) => {
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=cpp62871;PWD=11zj85gv8x9lx@2g;", function (err,conn)  {
        if (err) return console.log(err);
        conn.query(`insert into CPP62871.POSTS (TITLE , TEXT, AUTHOR) values ('${req.query.title}', '${req.query.text}','${req.query.author}')`, function (err, data) {
          if (err) console.log(err);
          else{
              console.log(data);
              res.send(data)
          }
       
          conn.close(function () {
            console.log('conn closed');
          });
        });
      });
  
   
})


module.exports = router