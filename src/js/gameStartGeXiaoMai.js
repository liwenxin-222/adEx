function gameStartGeXiaoMai() {
    function startPoint() {
        return {
            x: random(956, 1066),
            y: random(490, 630),
        }
    }

    function endPoint() {
        return {
            x: random(1703, 1799),
            y: random(493, 596)
        }
    }

    function loopSwiper() {
        var start = startPoint();
        var end = endPoint();
        swipeToPoint(start.x, start.y, end.x, end.y, random(250, 350));
        swipeToPoint(end.x, end.y, start.x, start.y, random(260, 360));
    }
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
                "1100|562|#7FA344-#101010",
            ];
            let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, 50,265,2295,1045);
            logd("points " + points);

            switch (points) {
                case 0:
                    logi('结束了。');
                    jobMap.game.xiaoMai.done = true;
                    // cancelInterval(t);
                    break;
                case 1:
                    logi('有坏籽');
                    // cancelInterval(t);
                    // sleep(2000);
                    // t = setInterval(function() {
                    //     loopSwiper();
                    // },random(400, 450));
                    break;
                default:
                    loopSwiper();
                    logi('继续割小麦');
            }
            //图片要回收
            image.recycle(tmpImage)
        }

        sleep(200);
    }
}