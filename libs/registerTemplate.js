/**
 * handlebars模版注册
 */

var hbs = require('hbs');
var fs  = require('fs');

// 注册top模版
hbs.registerPartial('top', fs.readFileSync(__dirname + '/../views/tpl/top.html', 'utf8'));
hbs.registerPartial('photo-flow', fs.readFileSync(__dirname + '/../views/tpl/photo-flow.html', 'utf8'));
hbs.registerPartial('photoList', fs.readFileSync(__dirname + '/../views/tpl/photo-list.html', 'utf8'));