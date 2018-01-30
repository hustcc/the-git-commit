/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

var TGM = require('.');
var expect = require('expect');


var s1 = 'commit a41d55c100ae3e47a4781b7215cc2b5578fb59de\n' +
'Author: hustcc <i@hust.cc>\n' +
'Date:   Mon Dec 18 15:22:09 2017 +0800\n' +
'\n' +
'    init 初始化支持\n';

var s2 = 'commit a41d55c100ae3e47a4781b7215cc2b5578fb59de\n' +
'Merge: 54df71f f8d50c8\n' +
'Author: hustcc <i@hust.cc>\n' +
'Date:   Mon Dec 18 20:26:34 2017 +0800\n' +
'\n' +
'    Merge branch release_20171218 of fixed-1\n';


describe('the-git-commit', function() {
  it(' - parse', function() {
    var tgm = new TGM();
    expect(tgm.parse(s1)).toEqual({
      hash: 'a41d55c100ae3e47a4781b7215cc2b5578fb59de',
      short: 'a41d55c',
      author: 'hustcc',
      email: 'i@hust.cc',
      date: 'Mon Dec 18 15:22:09 2017 +0800',
      message: 'init 初始化支持'
    });
    expect(tgm.parse(s2)).toEqual({
      hash: 'a41d55c100ae3e47a4781b7215cc2b5578fb59de',
      short: 'a41d55c',
      merge: [ '54df71f', 'f8d50c8' ],
      author: 'hustcc',
      email: 'i@hust.cc',
      date: 'Mon Dec 18 20:26:34 2017 +0800',
      message: 'Merge branch release_20171218 of fixed-1'
    });
  });

  it(' - current', function() {
    var tgm = new TGM();
    expect(typeof tgm.info()).toEqual('object');
    expect(tgm.info('0c380cd9624239473906ae77e99f755081312939')).toEqual({
      hash: '0c380cd9624239473906ae77e99f755081312939',
      short: '0c380cd',
      author: 'hustcc',
      email: 'i@hust.cc',
      date: 'Mon Jan 29 21:46:15 2018 +0800',
      message: 'v0.0.1'
    });
  });

  it(' - dir', function() {
    var tgm = new TGM('./');
    expect(typeof tgm.info()).toEqual('object');
    expect(tgm.info('0c380cd9624239473906ae77e99f755081312939')).toEqual({
      hash: '0c380cd9624239473906ae77e99f755081312939',
      short: '0c380cd',
      author: 'hustcc',
      email: 'i@hust.cc',
      date: 'Mon Jan 29 21:46:15 2018 +0800',
      message: 'v0.0.1'
    });
  });
});
