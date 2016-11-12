/**
 * 文件描述
 * @author ydr.me
 * @create 2016-06-27 17:34
 */


'use strict';

var buildHTML = function (value) {
    return ''.concat(
        '<p>textarea:' + value + '</p>',
        '<textarea>' + value + '</textarea>'
    );
};

var morphdom = require('../src/index');
var demoEl = document.getElementById('demo');
var btnEl = document.getElementById('btn');

demoEl.innerHTML = buildHTML('');
btnEl.onclick = function () {
    morphdom(demoEl, '<div id="demo">' + buildHTML(Math.random()) + '</div>');
};

