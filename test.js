/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

var TGM = require('.');

var tgm = new TGM();

// lastease commit
console.log(tgm.info());

var s1 = `
commit a41d55c100ae3e47a4781b7215cc2b5578fb59de
Author: hustcc <i@hust.cc>
Date:   Mon Dec 18 15:22:09 2017 +0800

    init 初始化支持
`

console.log(tgm.parse(s1));

var s2 = `
commit a41d55c100ae3e47a4781b7215cc2b5578fb59de
Merge: 54df71f f8d50c8
Author: hustcc <i@hust.cc>
Date:   Mon Dec 18 20:26:34 2017 +0800

    Merge branch 'release_20171218' of fixed-1

`

console.log(tgm.parse(s2));