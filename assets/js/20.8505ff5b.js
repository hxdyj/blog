(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{602:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" Mysql")]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("create database abc;")]),s._v(" "),a("td",[s._v("//创建数据库 abc")])]),s._v(" "),a("tr",[a("td",[s._v("use abc;")]),s._v(" "),a("td",[s._v("//连接数据库 abc")])]),s._v(" "),a("tr",[a("td",[s._v("set names utf8;")]),s._v(" "),a("td",[s._v("//设置数据库编码")])]),s._v(" "),a("tr",[a("td",[s._v("source /home/abc/abc.sql;")]),s._v(" "),a("td",[s._v("//导入.sql 数据")])]),s._v(" "),a("tr",[a("td",[s._v("mysqldump -u 用户名 -p 数据库名 > 导出的文件名")]),s._v(" "),a("td",[s._v("导出.sql")])])])]),s._v(" "),a("h2",{attrs:{id:"mysql-杂项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-杂项"}},[s._v("#")]),s._v(" mysql 杂项")]),s._v(" "),a("h2",{attrs:{id:"deepin-navicat-破解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deepin-navicat-破解"}},[s._v("#")]),s._v(" deepin navicat 破解")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("whereis navicat\nrm -rf ~/.navicat64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"mysql-开启远程访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-开启远程访问"}},[s._v("#")]),s._v(" mysql 开启远程访问")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("管理员登录 mysql")]),s._v(" "),a("a",{attrs:{href:"http://www.cnblogs.com/hfdp/p/6088288.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use mysql\nupdate user set host = '%' where user = 'root';\nselect host, user from user;\nFLUSH PRIVILEGES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("hr"),s._v(" "),a("ul",[a("li",[s._v("ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)")])]),s._v(" "),a("p",[s._v("大意就是你有一个用户名为空的账户，mysql 会先匹配它，然后就一直提示你密码错误，删掉这个匿名用户，然后执行 FLUSH PRIVILEGES；")]),s._v(" "),a("h2",{attrs:{id:"mysql-添加测试用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-添加测试用户"}},[s._v("#")]),s._v(" mysql 添加测试用户")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql>select host,user,password from mysql.user;\ninsert into mysql.user(Host,User,Password) values("%","test",password("1234"));\nmysql>flush privileges;\n//after insert need flush privileges;\nmysql>grant all on *.* to 用户名@"%" identified by "您的密码"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);