function updateTime() {
    var cT = new Date();
    var fmtTime = cT.toTimeString().split(' ')[0];
    var h1 = fmtTime[0];
    var h2 = fmtTime[1];
    var m1 = fmtTime[3];
    var m2 = fmtTime[4];
    var s1 = fmtTime[6];
    var s2 = fmtTime[7];
    h1 = parseInt(h1);
    h2 = parseInt(h2);
    m1 = parseInt(m1);
    m2 = parseInt(m2);
    s1 = parseInt(s1);
    s2 = parseInt(s2);
    console.log(h1)
    $('#nav').html(fmtTime);
    if (s2 === 1) {
        $('#ss4b').removeClass('off').addClass('on');
    }
    if (s2 === 2) {
        $('#ss4b').removeClass('on').addClass('off');
        $('#ss3b').removeClass('off').addClass('on');
    }
    if (s2 === 3) {
        $('#ss4b').removeClass('off').addClass('on');
        $('#ss3b').removeClass('off').addClass('on');
    }
    if (s2 === 4) {
        $('#ss4b').removeClass('on').addClass('off');
        $('#ss3b').removeClass('on').addClass('off');
        $('#ss2b').removeClass('off').addClass('on');
    }
    if (s2 === 5) {
        $('#ss4b').removeClass('off').addClass('on');
    }
    if (s2 === 6) {
        $('#ss4b').removeClass('on').addClass('off');
        $('#ss3b').removeClass('off').addClass('on');
        $('#ss2b').removeClass('off').addClass('on');
    }
    if (s2 === 7) {
        $('#ss4b').removeClass('off').addClass('on');
        $('#ss3b').removeClass('off').addClass('on');
        $('#ss2b').removeClass('off').addClass('on');
    }
    if (s2 === 8) {
        $('#ss4b').removeClass('on').addClass('off');
        $('#ss2b').removeClass('on').addClass('off');
        $('#ss3b').removeClass('on').addClass('off');
        $('#ss1b').removeClass('off').addClass('on');
    }
    if (s2 === 9) {
        $('#ss4b').removeClass('off').addClass('on');
    }
    if (s2 === 0) {
        $('#ss4b').removeClass('on').addClass('off');
        $('#ss2b').removeClass('on').addClass('off');
        $('#ss3b').removeClass('on').addClass('off');
        $('#ss1b').removeClass('on').addClass('off');
    }
    if (s1 === 1) {
        $('#ss4a').removeClass('off').addClass('on');
    }
    if (s1 === 2) {
        $('#ss4a').removeClass('on').addClass('off');
        $('#ss3a').removeClass('off').addClass('on');
    }
    if (s1 === 3) {
        $('#ss4a').removeClass('off').addClass('on');
        $('#ss3a').removeClass('off').addClass('on');
        $('#ss2a').removeClass('on').addClass('off');
    }
    if (s1 === 4) {
        $('#ss4a').removeClass('on').addClass('off');
        $('#ss3a').removeClass('on').addClass('off');
        $('#ss2a').removeClass('off').addClass('on');
    }
    if (s1 === 5) {
        $('#ss4a').removeClass('off').addClass('on');
    }
    if (s1 === 0) {
        $('#ss4a').removeClass('on').addClass('off');
        $('#ss3a').removeClass('on').addClass('off');
        $('#ss2a').removeClass('on').addClass('off');
        $('#ss1a').removeClass('on').addClass('off');
    }
    if (m2 === 1) {
        $('#mm4b').removeClass('off').addClass('on');
    }
    if (m2 === 2) {
        $('#mm4b').removeClass('on').addClass('off');
        $('#mm3b').removeClass('off').addClass('on');
    }
    if (m2 === 3) {
        $('#mm4b').removeClass('off').addClass('on');
        $('#mm3b').removeClass('off').addClass('on');
    }
    if (m2 === 4) {
        $('#mm4b').removeClass('on').addClass('off');
        $('#mm3b').removeClass('on').addClass('off');
        $('#mm2b').removeClass('off').addClass('on');
    }
    if (m2 === 5) {
        $('#mm4b').removeClass('off').addClass('on');
    }
    if (m2 === 6) {
        $('#mm4b').removeClass('on').addClass('off');
        $('#mm3b').removeClass('off').addClass('on');
        $('#mm2b').removeClass('off').addClass('on');
    }
    if (m2 === 7) {
        $('#mm4b').removeClass('off').addClass('on');
        $('#mm3b').removeClass('off').addClass('on');
        $('#mm2b').removeClass('off').addClass('on');
    }
    if (m2 === 8) {
        $('#mm4b').removeClass('on').addClass('off');
        $('#mm2b').removeClass('on').addClass('off');
        $('#mm3b').removeClass('on').addClass('off');
        $('#mm1b').removeClass('off').addClass('on');
    }
    if (m2 === 9) {
        $('#mm4b').removeClass('off').addClass('on');
    }
    if (m2 === 0) {
        $('#mm4b').removeClass('on').addClass('off');
        $('#mm2b').removeClass('on').addClass('off');
        $('#mm3b').removeClass('on').addClass('off');
        $('#mm1b').removeClass('on').addClass('off');
    }
    if (m1 === 1) {
        $('#mm4a').removeClass('off').addClass('on');
    }
    if (m1 === 2) {
        $('#mm4a').removeClass('on').addClass('off');
        $('#mm3a').removeClass('off').addClass('on');
    }
    if (m1 === 3) {
        $('#mm4a').removeClass('off').addClass('on');
        $('#mm3a').removeClass('off').addClass('on');
        $('#mm2a').removeClass('on').addClass('off');
    }
    if (m1 === 4) {
        $('#mm4a').removeClass('on').addClass('off');
        $('#mm3a').removeClass('on').addClass('off');
        $('#mm2a').removeClass('off').addClass('on');
    }
    if (m1 === 5) {
        $('#mm4a').removeClass('off').addClass('on');
        $('#mm2a').removeClass('off').addClass('on');
    }
    if (m1 === 0) {
        $('#mm4a').removeClass('on').addClass('off');
        $('#mm3a').removeClass('on').addClass('off');
        $('#mm2a').removeClass('on').addClass('off');
        $('#mm1a').removeClass('on').addClass('off');
    }
    if (h2 === 1) {
        $('#hh4b').removeClass('off').addClass('on');
    }
    if (h2 === 2) {
        $('#hh4b').removeClass('on').addClass('off');
        $('#hh3b').removeClass('off').addClass('on');

    }
    if (h2 === 3) {
        $('#hh4b').removeClass('off').addClass('on');
        $('#hh3b').removeClass('off').addClass('on');
    }
    if (h2 === 4) {
        $('#hh4b').removeClass('on').addClass('off');
        $('#hh3b').removeClass('on').addClass('off');
        $('#hh2b').removeClass('off').addClass('on');
    }
    if (h2 === 5) {
        $('#hh4b').removeClass('off').addClass('on');
        $('#hh2b').removeClass('off').addClass('on');
    }
    if (h2 === 6) {
        $('#hh4b').removeClass('on').addClass('off');
        $('#hh3b').removeClass('off').addClass('on');
        $('#hh2b').removeClass('off').addClass('on');
    }
    if (h2 === 7) {
        $('#hh4b').removeClass('off').addClass('on');
        $('#hh3b').removeClass('off').addClass('on');
        $('#hh2b').removeClass('off').addClass('on');
    }
    if (h2 === 8) {
        $('#hh4b').removeClass('on').addClass('off');
        $('#hh2b').removeClass('on').addClass('off');
        $('#hh3b').removeClass('on').addClass('off');
        $('#hh1b').removeClass('off').addClass('on');
    }
    if (h2 === 9) {
        $('#hh4b').removeClass('off').addClass('on');
    }
    if (h2 === 0) {
        $('#hh4b').removeClass('on').addClass('off');
        $('#hh2b').removeClass('on').addClass('off');
        $('#hh3b').removeClass('on').addClass('off');
        $('#hh1b').removeClass('on').addClass('off');
    }
    if (h1 === 0) {
        $('#hh4a').removeClass('on').addClass('off');
    }
    if (h1 === 1) {
        $('#hh4a').removeClass('off').addClass('on');
    }
    if (h1 === 2) {
        $('#hh4a').removeClass('on').addClass('off');
        $('#hh3a').removeClass('off').addClass('on');
    }
}
setInterval(updateTime, 1000);
