var express = require('express');
var util = require('util');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var https = require('https');
var http = require('http');
var port = 80;

var app = express();

app.get(
  '/.well-known/pki-validation/0E32BED196A30353FE37EC318977B522.txt',
  function (req, res) {
    var origFileNm, savedFileNm, savedPath, fileSize;
    origFileNm = '0E32BED196A30353FE37EC318977B522.txt'; //다운받을때파일이름
    savedFileNm = '0E32BED196A30353FE37EC318977B522.txt'; //실제 파일이름
    savedPath = './.well-known/pki-validation'; //위치
    fileSize = '100'; //파일사이즈확인
    var file = savedPath + '/' + savedFileNm;
    console.log('file : ', file);
    fs.readFile(file, 'utf-8', function (err, data) {
      res.send(data);
    });
    // mimetype = mime.lookup(origFileNm);
    // console.log('mimetype : ' + mimetype);
    // res.setHeader('Content-Disposition', 'attachment; filename=' + origFileNm);
    // res.setHeader('Content-Type', mimetype);
    // var filestream = fs.createReadStream(file).pipe(res);
  }
);

var httpServer = http.createServer(app);
httpServer.listen(port, function () {
  console.log('http woring 80');
});
