function gameStartGeXiaoMai() {
    function rightPoint() {
        return {
            x: random(956, 1026),
            y: random(490, 630),
            ex: random(1783, 1799),
            ey: random(493, 596)
        }
    }

    function centerPoint() {
        return {
            x: random(495, 565),
            y: random(443, 546),
            ex: random(1680, 1790),
            ey: random(443, 546),
        }
    }

    function rightLoopSwiper() {
        var rightPointO = rightPoint();
        swipeToPoint(rightPointO.x, rightPointO.y, rightPointO.ex, rightPointO.ey, random(250, 300));
        swipeToPoint(rightPointO.ex, rightPointO.ey, rightPointO.x, rightPointO.y, random(260, 300));
    }

    function centerLoopSwiper() {
        var centerPointO = centerPoint();
        swipeToPoint(centerPointO.ex, centerPointO.ey, centerPointO.x, centerPointO.y, random(250, 320));
    }

    let flag = 'right';

    setTimeout(() => {
        flag = 'center';
    }, 60000)
    // var t;
    // t = setInterval(function() {
    //     loopSwiper();
    // }, random(400, 450));

    while (true) {
        if (isScriptExit()) {
            break;
        }

        if (jobMap.game.xiaoMai.done) {
            break;
        }

        let tmpImage = image.captureFullScreen();

        if (tmpImage != null) {
            let multiColor = [
                "180|176|#818A93-#101010,203|436|#3B454E-#101010,220|950|#7E6231-#101010,926|970|#D3E1FF-#101010,1310|963|#FFE29D-#101010",
                // "1100|562|#7FA344-#101010",
            ];
            let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, 50,265,2295,1045);
            logd("points " + points);

            switch (points) {
                case 0:
                    logi('结束了。');
                    jobMap.game.xiaoMai.done = true;
                    // cancelInterval(t);
                    break;
                // case 1:
                // logi('有坏籽');
                // cancelInterval(t);
                // sleep(2000);
                // t = setInterval(function() {
                //     loopSwiper();
                // },random(400, 450));
                // break;
                default:
                    var isHasBad = image.findMultiColor(tmpImage,  "#7FA444-#101010",  "58|23|#7FA244-#101010", 1, 200,270,2030,1030, 10, 2);
                    if (isHasBad) {
                        sleep(1000);
                        logi('有坏籽');
                    } else {
                        if (flag === 'right') {
                            rightLoopSwiper();
                            logi('继续割小麦 , 右边');
                        } else {
                            centerLoopSwiper();
                            logi('继续割小麦 , 中间');
                        }
                    }
            }
            //图片要回收
            image.recycle(tmpImage)
        }

        sleep(80);
    }
}