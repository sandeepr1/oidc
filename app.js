var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors')
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get("/authorize", (req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.set({'Location':req.headers.redirect_uri+"#accessToken=eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAtMjU2Iiwia2lkIjoidHBBbks3Z1JDVWszMlBDbEFoTW5CcHNJYXIwPSIsImN0eSI6IkpXVCJ9.Oh64OU6BxHYgJ1rTIkuLgRh0BFia6IvrV4eK_fuzh7tebRdY69pXB-tIhGD8W2DQgAUjdg1CSbW1TnSM7Zq1mZCCuAJCTrzjJG382bo4noKwEnjjJfphmte5kaaYkN2kHZ2Lmq0FV-0S2GXHMdgA-Q43DFgYEhIdzMc_ak8WQhYgDiH8jizb-6JLHu3nd0uZ8dUe5A9uGNPxclcYeSAWqShu7swb6qpXCsbmOnYFE0pZIMJQSDJUeQMkR4cOu_gTMGj-A15RrrIlvF-wde_F4zBUl5xHMP2gq8Cz98lN68142fWmN7Lo_6ZUufHv0lvcRUCUGHm7-0vQ6i-sMNhgjA.tCyinItOUXfim9GsPd8Kfg.J4LHtu04h1QtvZTwEDjH4__tXRnRtjdH9z7VV6B-r85hJgRAYSrQYkWn2aEdbOebyv4teU8H78eVhCZdXiMbTi_5D4oOaFRQdbycG-ufHKy8jp2FAZrgfAn3D6pXp8YJv01ByX-3rL-JxCfsmHCTpKT17v14TyLFIvDU7aTGXkaWuNn_lJX9d5pYY-7PU2_5_v-32LRFgJCjzs_Ve0s578vS0-RBqlTLLmLTypDdwjliqoKFvm2KGwfAsffvq6u-ZsP-bLmahj8fpFT1FZi9Y5G8Z1_Grtf0KUbqE5f5h-7Vg9S4qW-i6IX8AKP8fwSO_IkEsrUInmT8fyCEDouo19WTqPYe8ib2CaxC5YUae6pmzdu0GK79n5jCKu68r7gfa78ufxB3NqVAMQ1d3BEHZYX9tmH0RdnJe66HEmxTaVnQKM4OnGCDH8fLXpuO7iQgx0uadTFhuRxZ1f4qOW4M6HVQyD-JC6aOe75FSy6nwyEqCZPp6qq0d9zK82KxxqNnMvITQo3UeYDo45u5a18pUYH5It9tn4Aazo2Hs-JIeUFzDC2aiqhtTLo1nN1CvseFg2gROm5_MWiclpUWhbazH_TL1q1mPyKnW5JuaNwxkqxikm_kJTVdMQCQzkgdyg4h1owXy_giMC0qkrpgvHzL_uKn7kJmzOxjRYaOwhHA7a8lqDzi_UBmIaugPCQbUTCJkzPbLKWULf2Px6dxIUbco1S-8Q8JSt_vBmytB2yl_tr0yyhtqoWdWpgHWV8jq2yyrx9AJzgnpqjs0LzDo3eNTgJJS1aIPhpc14Kzdz_HHOr80CtHPELGrGVt7OOQMeLQXDDfQV9qt5SHNStMcLrhxVkj2bQ-u1gjtxJkeQwHPK7H-Yv-Uuu_JQwla-7cQmoXPR8jRAi-nrbfG7Va11-wgouXYNFkgFFuZaoJ3ZZNVclDddO7Dn0Fbv8k2EiBCR6_G2LJ-chvE9O8C7_Fls820jXR7pDAOyq8FVzMjR6Pa9ZQi7TpndqA-yOvbSDeTXdGQKHGTC3F0qvZCsgR-JOCGRai3G8MThZPoAIuPdiu8O0kQXfWYBHCZS4ApL_H6vlrkiiiTay25UiXeBysJ07qX2fBbXKDJrZXS8TC1y2Fl-6UnFyELjp-v0Yaf4zi5Dee.iJ1o0O098bC6tbhv0p2Nag&id_token=124455555666"});
     res.status(302);
     console.log(req.headers.redirect_uri);
     res.send();
    //res.redirect(req.headers.redirect_uri+"?access=token");
   // res.status().send({status:true});
   });

module.exports = app;
