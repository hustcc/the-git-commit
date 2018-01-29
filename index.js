/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

var execSync = require('child_process').execSync;

/**
 * git commit format
 *
 * 1. no merge
 *
 commit a41d55c100ae3e47a4781b7215cc2b5578fb59da
 Author: hustcc <i@hust.cc>
 Date:   Mon Dec 18 15:22:09 2017 +0800

 删除一些密码信息，防止被黑！
 *
 * 2. merge commit
 *
 commit a41d55c100ae3e47a4781b7215cc2b5578fb59da
 Merge: 54df71f f8d50c8
 Author: hustcc <i@hust.cc>
 Date:   Mon Dec 18 20:26:34 2017 +0800

 Merge branch 'release_7266153_20171218' of gitlab.al
 *
 * 3. invalid commit
 *
 * fatal: ambiguous argument '12': unknown revision or path not in the working tree.
 *
 */

function safeString(s) {
  return s || '';
}

/**
 * var tgm = new TGM(); // current dir
 * var tgm = new TGM('/home/git/hustcc/git-commit');
 * @param cwd
 * @constructor
 */
function TGM (cwd) {
  this.cwd = cwd; // current dir.
}

/**
 * tgm.info(hash);
 * tgm.info(); // latest commit
 *
 * @param hash
 * @returns {string}
 */
TGM.prototype.info = function (hash) {
  var baseCmd = 'git log -n 1'; // get commit log with this cmd.
  var cmd = hash ? baseCmd + ' ' + hash : baseCmd;
  const info = execSync(cmd, { cwd: this.cwd }).toString();

  return this.parse(info);
};

TGM.prototype.parse = function(info) {
  var r = {};

  var arr = safeString(info).trim().split('\n');

  var cnt = -1;
  var s = '';
  // 1 th line is commit hash
  s = safeString(arr[++ cnt]);

  r.hash = s.substring('commit'.length).trim();
  r.short = r.hash.substring(0, 7);

  s = safeString(arr[++ cnt]);

  // 2 th line is Merge:
  if (s.indexOf('Merge:') === 0) {
    r.merge = s.substring('Merge:'.length).trim().split(' ');

    s = safeString(arr[++ cnt]);
  }

  // 3 th line is Author: author, email
  var author = s.substring('Author:'.length).trim().match(/(.*)<(.*)>/);
  r.author = safeString(author[1]).trim();
  r.email = safeString(author[2]).trim();
  s = safeString(arr[++ cnt]);

  // 4 th line is Date
  r.date = s.substring('Date:'.length).trim();
  s = safeString(arr[++ cnt]);

  // commit
  r.message = arr.slice(cnt).join('').trim();

  return r;
}

module.exports = TGM;
