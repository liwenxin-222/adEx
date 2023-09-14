const daojuMap = [
    {
        name: '袋子',
        firstColor: "#EFCD7B-#101010",
        multiColor: "23|43|#E1B690-#101010,-1|38|#9D704E-#101010",
        sign: "1171|889|#E7BB6C-#101010,1155|908|#E8C59D-#101010,1189|908|#B9845A-#101010,1178|940|#CB9764-#101010,1156|951|#C89B71-#101010",
    },
    {
        name: '盘子',
        firstColor: "#E6CC7B-#101010",
        multiColor: "-16|27|#E5E5F7-#101010,24|18|#A45B13-#101010",
        sign: "1171|897|#E8D27F-#101010,1142|918|#EEDA92-#101010,1156|943|#D3D3DE-#101010,1208|925|#A9630F-#101010,1173|953|#816654-#101010",
    },
    {
        name: '水滴',
        firstColor: "#679FD7-#101010",
        multiColor: "2|34|#DFE3E8-#101010,15|-3|#528AC5-#101010",
        sign: "1171|898|#639DD5-#101010,1158|927|#B8D9F5-#101010,1184|951|#8A98B6-#101010,1199|921|#67A1DB-#101010,1142|905|#83B0DE-#101010"
    }
];

var zhiZhen_X = 0;

function gameStartBanQu() {
    while (true) {
        if (isScriptExit()) {
            break;
        }

        if (jobMap.game.banQu.done) {
            break;
        }

        let tmpImage = image.captureFullScreen();

        if (tmpImage != null) {
            // let tmpImageClip = image.clip(tmpImage, 590,615,1755,1005)

            let currentSelectTab = [
                // 袋子
                daojuMap[0].sign,
                // 盘子
                daojuMap[1].sign,
                // 水滴
                daojuMap[2].sign,
            ];
            let currentSelectIndex = image.cmpMultiColor(tmpImage, currentSelectTab, 0.9, 1093, 847, 1243, 990);
            logd("points " + currentSelectTab);
            switch (currentSelectIndex) {
                case 0:
                    logi('袋子');
                    break;
                case 1:
                    logi('盘子');
                    break;
                case 2:
                    logi('水滴');
                    break;
                default:
                    logi('不知道当前是什么, 估计结束了');
                    jobMap.game.banQu.done = true;
                    return;
            }

            let firstColor = "#FFFFFF-#101010"
            let multiColor = "-3|6|#FFFFFF-#101010,-1|21|#FFFFFF-#101010,0|35|#FFFFFF-#101010,0|48|#FFFFFF-#101010,0|60|#FFFFFF-#101010,-1|73|#FFFFFF-#101010";
            // 当前指针位置
            let currentPoint = image.findMultiColor(tmpImage, firstColor, multiColor, 0.9, 496, 726, 1756, 852, 1, 2);

            if (currentPoint) {
                var x = currentPoint[0].x;
                var ex;
                // 往右走
                if (zhiZhen_X < x) {
                    x = x - 30;
                    ex = x + 50;
                }
                // 往左走
                else {
                    x = x + 50;
                    ex = x - 30;
                }
                let isOkClick = image.findMultiColor(
                    tmpImage,
                    daojuMap[currentSelectIndex].firstColor,
                    daojuMap[currentSelectIndex].multiColor,
                    0.9, x, 630, ex, 760, 1, 2);

                if (isOkClick) {
                    logi('包含' + daojuMap[currentSelectIndex].name);
                    var cc = throttle(click_game_banqu_anniu, 500);
                    cc();
                }
            }


            //图片要回收
            image.recycle(tmpImage)
            // image.recycle(tmpImageClip)
        }

        sleep(300);

    }
}