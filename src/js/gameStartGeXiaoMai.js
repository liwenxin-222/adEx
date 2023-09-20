function gameStartGeXiaoMai() {
    function rightPoint() {
        return {
            x: random(956, 1066),
            y: random(490, 630),
            ex: random(1703, 1799),
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
        swipeToPoint(rightPointO.x, rightPointO.y, rightPointO.ex, rightPointO.ey, random(150, 220));
        swipeToPoint(rightPointO.ex, rightPointO.ey, rightPointO.x, rightPointO.y, random(160, 220));
    }

    function centerLoopSwiper() {
        var centerPointO = centerPoint();
        swipeToPoint(centerPointO.x, centerPointO.y, centerPointO.ex, centerPointO.ey, random(150, 220));
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
                "275|180|#818A94-#101010,215|545|#4E4F4B-#101010,230|965|#705124-#101010,1760|185|#888C8E-#101010,1770|660|#524F47-#101010,1750|970|#76562E-#101010,1560|975|#FEDD94-#101010,985|965|#D6E3FE-#101010",
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
                    var isHasBad = image.findMultiColor(tmpImage, "#80A445-#101010",  "62|4|#8BB14B-#101010", 1, 260, 220, 2100, 1020, 10, 2);
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

        sleep(100);
    }
}