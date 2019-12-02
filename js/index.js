// window.onload = function () {
//     var click1 = document.getElementById('click1');
//     click1.onclick = function (event) {
//         event.stopPropagation(); //防止冒泡
//         setTimeout('smooth()', 2500);
//         console.log('2');
//     }

//     function smooth() {
//         document.body.scrollTop = document.getElementById("point2").offsetTop;
//     }

//     var names;
//     var list = ['00000', '01dhy', '02@xh'];
//     var click2 = document.getElementById('click2');
//     click2.onclick = function listName(event) {
//         event.stopPropagation(); //防止冒泡
//         var ipt = document.getElementById('ipt').value;
//         var iptback = document.getElementById('iptback');
//         var point3div = document.getElementById('point3div');
//         var greetCard = document.getElementById('greetingCard');
//         for (var i = 0; i < list.length; i++) {
//             if (ipt == list[i]) {
//                 console.log(list[i]);
//                 document.body.scrollTop = document.getElementById("point3").offsetTop;
//                 iptback.innerHTML = ' ';
//                 click1.onclick = null;
//                 console.log('onclick');
//                 names = list[i];
//                 namelist();
//                 point3div.className = 'background section-three';
//                 greetCard.className = 'background section-three';
//                 break;
//             } else {
//                 iptback.innerHTML = '请输入正确信息';
//                 console.log('1');
//                 break;
//             }
//         }
//         setTimeout('fadeIn()', 250);
//     }

//     function namelist() {
//         console.log(names);
//         var inside = document.getElementById('paragraph');
//         console.log(inside);
//         switch (names) {
//             case '00000':
//                 inside.innerHTML = "测试字段</br>测试字段";
//                 console.log('测试字段');
//                 break;
//             case '01dhy':
//                 inside.innerHTML = '01dhy';
//                 console.log('01dhy');
//                 break;
//             case '02@Xh':
//                 inside.innerHTML = "测试字段</br>测试字段";
//                 console.log('测试字段');
//                 break;
//             case '03000':
//                 inside.innerHTML = "测试字段</br>测试字段";
//                 console.log('测试字段');
//                 break;
//             case '04000':
//                 inside.innerHTML = "测试字段</br>测试字段";
//                 console.log('测试字段');
//                 break;
//             case '05000':
//                 inside.innerHTML = "测试字段</br>测试字段";
//                 console.log('测试字段');
//                 break;
//         }
//     }

//     function fadeIn() {
//         var btn = document.getElementById('page3inside');
//         btn.className = 'fadenum';
//         console.log('fateIn');
//         setTimeout('fadeInOver()', 1000);
//     }

//     function fadeInOver() {
//         var btn = document.getElementById('page3inside');
//         btn.className = '';
//         console.log('fateInover');
//     }

//     var click3 = document.getElementById('click3');
//     click3.onclick = function () {
//         document.body.scrollTop = document.getElementById("point5").offsetTop;
//     }

//     var start = document.getElementById('start');
//     var pause = document.getElementById('pause');
//     start.addEventListener('click', function () {
//         var bgm = document.getElementById('audio');
//         bgm.play();
//     }, true);
//     // pause.onclick = function (event) {
//     //     event.stopPropagation(); //防止冒泡
//     //     var bgm = document.getElementById('audio');
//     //     bgm.pause();
//     // }

//     // document.addEventListener('touchstart', function () {
//     //     function audioAutoPlay() {
//     //         var audio = document.getElementById('audio');
//     //         audio.play();
//     //     }
//     //     audioAutoPlay();
//     // });

//     var oSpan = document.getElementsByClassName('time')[0];

//     function tow(n) {
//         return n >= 0 && n < 10 ? '0' + n : '' + n;
//     }

//     function getDate() {
//         var Happy = document.getElementById('Happy');
//         var title = document.getElementById('timeTitle');
//         var oDate = new Date(); //获取日期对象
//         var oldTime = oDate.getTime(); //现在距离1970年的毫秒数
//         var newDate = new Date('2020/1/25 00:00:00');
//         var newTime = newDate.getTime(); //2020年春节距离1970年的毫秒数
//         // var newTime = 0;//新年功能测试
//         var second = Math.floor((newTime - oldTime) / 1000); //未来时间距离现在的秒数
//         var day = Math.floor(second / 86400); //整数部分代表的是天；一天有24*60*60=86400秒 ；
//         second = second % 86400; //余数代表剩下的秒数；
//         var hour = Math.floor(second / 3600); //整数部分代表小时；
//         second %= 3600; //余数代表 剩下的秒数；
//         var minute = Math.floor(second / 60);
//         second %= 60;
//         var str = tow(day) + '<span class="time">天</span>' +
//             tow(hour) + '<span class="time">小时</span>' +
//             tow(minute) + '<span class="time">分钟</span>' +
//             tow(second) + '<span class="time">秒</span>';
//         oSpan.innerHTML = str;
//         if (newTime - oldTime <= 0) {
//             oSpan.style.display = 'none';
//             title.style.display = 'none';
//             Happy.style.display = 'block';
//         }
//     }
//     getDate();
//     setInterval(getDate, 1000);
// }
window.addEventListener('load', function () {
    var click1 = document.getElementById('click1');
    click1.onclick = function (event) {
        event.stopPropagation(); //防止冒泡
        setTimeout('smooth()', 2500);
        // console.log('2');
    }
})

function smooth() {
    document.body.scrollTop = document.getElementById("point2").offsetTop;
}

function fadeIn() {
    var btn = document.getElementById('page3inside');
    btn.className = 'fadenum';
    // console.log('fateIn');
    setTimeout('fadeInOver()', 1000);
}

function fadeInOver() {
    var btn = document.getElementById('page3inside');
    btn.className = '';
    // console.log('fateInover');
}

window.addEventListener('load', function () {
    var names;
    var list = ['00000', '01dhy', '02@xh', '03sdq', '04000', '05000', '06000', '07000', '08000'];
    var click2 = document.getElementById('click2');
    click2.onclick = function listName(event) {
        event.stopPropagation(); //防止冒泡
        var ipt = document.getElementById('ipt').value;
        var iptback = document.getElementById('iptback');
        var point3div = document.getElementById('point3div');
        var greetCard = document.getElementById('greetingCard');
        var k = 0 //查询计数器
        for (var i = 0; i < list.length; i++) {
            if (ipt == list[i]) {
                // console.log(list[i]);
                document.body.scrollTop = document.getElementById("point3").offsetTop;
                iptback.innerHTML = ' ';
                click1.onclick = null;
                names = list[i];
                // console.log('names');
                namelist();
                point3div.className = 'background section-three';
                greetCard.className = 'background section-three';
                break;
            };
            k++;
        };
        if (k == list.length) {
            iptback.innerHTML = '请输入正确信息';
            // console.log('1');
        }

        setTimeout('fadeIn()', 250);
    }

    function namelist() {
        // console.log(names);
        var parspan = document.getElementById('parinside1');
        var inside = document.getElementById('parinside2');
        // console.log(inside);
        switch (names) {
            case '00000':
                inside.innerHTML = "测试字段</br>测试字段";
                break;
            case '01dhy':
                parspan.innerHTML = '致董海钰：';
                inside.innerHTML = '落叶，常要归根</br>但可以借风翱翔天空</br>也可以借水鹏腾万里</br>挑战，常伴随的是风险</br>安逸，单调无趣的重复</br>与其就此安详</br>我想冲上云霄</br>去看，去听</br>那我从未任职的世界。</br></br>除旧迎新</br>制定一年的计划</br>考研的起跑线就在眼前</br>冲吧</br>冲向梦的彼岸</br>飞翔在辽阔的远方';
                break;
            case '02@Xh':
                parspan.innerHTML = '致薛惠：';
                inside.innerHTML = "测试字段</br>测试字段";
                break;
            case '03sdq':
                parspan.innerHTML = '';
                inside.innerHTML = "测试字段</br>测试字段";
                break;
            case '04000':
                parspan.innerHTML = '';
                inside.innerHTML = "测试字段</br>测试字段";
                break;
            case '05000':
                parspan.innerHTML = '';
                inside.innerHTML = "测试字段</br>测试字段05";
                break;
        }
    }
})

window.addEventListener('load', function () {
    var click3 = document.getElementById('click3');
    click3.onclick = function () {
        document.body.scrollTop = document.getElementById("point5").offsetTop;
    }
})

window.addEventListener('load', function () {
    var start = document.getElementById('start');
    var pause = document.getElementById('pause');
    start.addEventListener('click', function () {
        var bgm = document.getElementById('audio');
        bgm.play();
    }, true);
})

window.addEventListener('load', function () {
    var oSpan = document.getElementsByClassName('time')[0];

    function tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }

    function getDate() {
        var Happy = document.getElementById('Happy');
        var title = document.getElementById('timeTitle');
        var oDate = new Date(); //获取日期对象
        var oldTime = oDate.getTime(); //现在距离1970年的毫秒数
        var newDate = new Date('2020/1/25 00:00:00');
        var newTime = newDate.getTime(); //2020年春节距离1970年的毫秒数
        // var newTime = 0;//新年功能测试
        var second = Math.floor((newTime - oldTime) / 1000); //未来时间距离现在的秒数
        var day = Math.floor(second / 86400); //整数部分代表的是天；一天有24*60*60=86400秒 ；
        second = second % 86400; //余数代表剩下的秒数；
        var hour = Math.floor(second / 3600); //整数部分代表小时；
        second %= 3600; //余数代表 剩下的秒数；
        var minute = Math.floor(second / 60);
        second %= 60;
        var str = tow(day) + '<span class="time">天</span>' +
            tow(hour) + '<span class="time">小时</span>' +
            tow(minute) + '<span class="time">分钟</span>' +
            tow(second) + '<span class="time">秒</span>';
        oSpan.innerHTML = str;
        if (newTime - oldTime <= 0) {
            oSpan.style.display = 'none';
            title.style.display = 'none';
            Happy.style.display = 'block';
        }
    }
    getDate();
    setInterval(getDate, 1000);
})