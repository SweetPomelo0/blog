"use strict";

/**
 * 生成百度链接推送文件
 */
var fs = require("fs");

var path = require("path");

var chalk = require("chalk");

var matter = require("gray-matter"); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter


var readFileList = require("./modules/readFileList");

var urlsRoot = path.join(__dirname, "..", "urls.txt"); // 百度链接推送文件

var DOMAIN = process.argv.splice(2)[0]; // 获取命令行传入的参数

if (DOMAIN) {
  main();
} else {
  console.log(chalk.red("请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://.com"));
}
/**
 * 主体函数
 */


function main() {
  fs.writeFileSync(urlsRoot, DOMAIN);
  var files = readFileList(); // 读取所有md文件数据

  files.forEach(function (file) {
    var _matter = matter(fs.readFileSync(file.filePath, "utf8")),
        data = _matter.data;

    if (data.permalink) {
      var link = "\r\n".concat(DOMAIN).concat(data.permalink);
      console.log(link);
      fs.appendFileSync(urlsRoot, link);
    }
  });
}