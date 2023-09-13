function gameStartGeXiaoMai() {
    function startPoint() {
        return {
            x: random(450, 680),
            y: random(285, 445),
        }
    }

    function endPoint() {
        return {
            x: random(1525, 1790),
            y: random(395, 560)
        }
    }

    function loopSwiper() {
        var start = startPoint();
        var end = endPoint();
        swipeToPoint(start.x, start.y, end.x, end.y, random(200, 250));
        swipeToPoint(end.x, end.y, start.x, start.y, random(200, 250));
    }
    var t;
    t = setInterval(function() {
        loopSwiper();
    },200);

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
                
            ];
            let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, 0, 0, 0, 0);
            logd("points " + points);

            switch (points) {
                case 0:
                    logi('结束了。');
                    jobMap.game.xiaoMai.done = true;
                    cancelInterval(t);
                    break;
                case 1:
                    logi('有坏籽');
                    cancelInterval(t);
                    sleep(2000);
                    t = setInterval(function() {
                        loopSwiper();
                    },200);
                    break;
                default:
                    logi('继续割小麦');
            }
            //图片要回收
            image.recycle(tmpImage)
        }

        sleep(300);
    }
}