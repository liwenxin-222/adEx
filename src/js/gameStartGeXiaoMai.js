function gameStartGeXiaoMai() {
    function rightPoint() {
        if (__current_equipment__ === XU_NI_JI) {
            return {
                x: random(690, 713),
                y: random(290, 316),
                ex: random(1100, 1126),
                ey: random(310, 340)
            }
        }
        return {
            x: random(956, 966),
            y: random(490, 630),
            ex: random(1903, 1999),
            ey: random(493, 596)
        }
    }

    function centerPoint() {
        if (__current_equipment__ === XU_NI_JI) {
            return {
                x: random(160, 200),
                y: random(220, 263),
                ex: random(936, 986),
                ey: random(276, 322),
            }
        }
        return {
            x: random(295, 365),
            y: random(443, 546),
            ex: random(1903, 1999),
            ey: random(443, 546),
        }
    }

    function rightLoopSwiper() {
        var rightPointO = rightPoint();
        swipeToPoint(rightPointO.x, rightPointO.y, rightPointO.ex, rightPointO.ey, random(240, 270));
        swipeToPoint(rightPointO.ex, rightPointO.ey, rightPointO.x, rightPointO.y, random(240, 270));
    }

    function centerLoopSwiper() {
        var centerPointO = centerPoint();
        swipeToPoint(centerPointO.x, centerPointO.y, centerPointO.ex, centerPointO.ey, random(240, 270));
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
            if (__current_equipment__ === XU_NI_JI) {
                multiColor = [
                    "136|96|#828C95-#101010,153|643|#785827-#101010,366|633|#DDE9FF-#101010,750|643|#F6D796-#101010,1106|666|#775935-#101010,1170|110|#949494-#101010",
                    // "1100|562|#7FA344-#101010",
                ];
            }

            var reg = {x: 50, y: 265, ex: 2295, ey: 1045}
            if (__current_equipment__ === XU_NI_JI) {
                reg = {x: 6, y: 333, ex: 809, ey: 1873}
            }
            let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, reg.x, reg.y, reg.ex, reg.ey);

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
                    var colorCon = {
                        firstColor: "#80A445-#101010",
                        multiColor: "62|4|#8BB14B-#101010",
                    }
                    var badreg = [260, 220, 2100, 1020];
                    if (__current_equipment__ === XU_NI_JI) {
                        colorCon = {
                            firstColor: "#82A646-#101010",
                            multiColor: "37|10|#7EA343-#101010",
                        }
                        badreg = [26, 183, 1226, 666];
                    }

                    var isHasBad = image.findMultiColor(tmpImage, colorCon.firstColor, colorCon.multiColor, 1, badreg[0], badreg[1], badreg[2], badreg[3], 1, 2);
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