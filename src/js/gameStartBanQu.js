const daojuMap = [
    {
        name: '袋子',
        firstColor:  "#E7BA6B-#101010",
        multiColor: "-14|26|#BF905D-#101010,16|38|#BD855D-#101010",
        sign: "1171|889|#E7BB6C-#101010,1155|908|#E8C59D-#101010,1189|908|#B9845A-#101010,1178|940|#CB9764-#101010,1156|951|#C89B71-#101010",
    },
    {
        name: '盘子',
        firstColor: "#FED8AA-#101010",
        multiColor: "20|-5|#E3C772-#101010,40|4|#FFDAAB-#101010,4|26|#D7D5ED-#101010,35|26|#A1A0B9-#101010,47|25|#FFDDAD-#101010,-9|25|#FFDDAD-#101010",
        sign: "1171|897|#E8D27F-#101010,1142|918|#EEDA92-#101010,1156|943|#D3D3DE-#101010,1208|925|#A9630F-#101010,1173|953|#816654-#101010",
    },
    {
        name: '水滴',
        firstColor: "#6FA0D6-#101010",
        multiColor: "12|9|#9DC5EC-#101010,18|30|#F1F1F4-#101010,36|13|#C4D8EF-#101010,36|4|#FFDAAB-#101010,33|-9|#5B8FCE-#101010",
        sign: "1171|898|#639DD5-#101010,1158|927|#B8D9F5-#101010,1184|951|#8A98B6-#101010,1199|921|#67A1DB-#101010,1142|905|#83B0DE-#101010"
    }
];

function gameStartBanQu() {

    // 上次截图x位置
    var zhiZhen_X = 0;
    // 上次点击x位置
    var preClickPointX = 0;


    function banquIsDone() {
        let tmpImage = image.captureFullScreen();
        if (tmpImage != null) {
            let firstColor = "365|230|#4C3225-#101010,405|530|#120706-#101010,765|965|#D0E0FF-#101010,1350|965|#FFE19B-#101010,1555|970|#FEDF97-#101010";
            let points = image.cmpColor(tmpImage, firstColor, 0.9, 0, 0, 0, 0);
            logd("points " + points);
            if (points) {
                logi('拌曲结束了。');
                jobMap.game.banQu.done = true;
            }
            //图片要回收
            image.recycle(tmpImage)
        }
    }
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
            logd("points " + currentSelectIndex);
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
                    logi('不知道当前是什么, 看看结束没有');
                    banquIsDone();
                    // return;
            }

            if (currentSelectIndex !== -1) {
                let firstColor = "#FFFFFF-#101010"
                let multiColor = "2|11|#FFFFFF-#101010,2|25|#FFFFFF-#101010,1|39|#FFFFFF-#101010,1|48|#FFFFFF-#101010,2|55|#FFFFFF-#101010,2|68|#FFFFFF-#101010,0|75|#FFFFFF-#101010";
                // 当前指针位置
                let currentPoint = image.findMultiColor(tmpImage, firstColor, multiColor, 0.9, 496, 726, 1756, 852, 1, 2);
                logi('当前指针位置-- ' + JSON.stringify(currentPoint));
                if (currentPoint) {
                    var x = currentPoint[0].x;
                    var ex;
                    // 往右走
                    if (zhiZhen_X < x) {
                        x = x - 10;
                        ex = x + 95;
                    }
                    // 往左走
                    else {
                        logi('往左走');
                        x = x - 95;
                        ex = x + 10;
                    }
                    zhiZhen_X = currentPoint[0].x;
                    let isOkClick = image.findMultiColor(
                        tmpImage,
                        daojuMap[currentSelectIndex].firstColor,
                        daojuMap[currentSelectIndex].multiColor,
                        0.9, x, 630, ex, 760, 1, 2);


                    if (isOkClick) {
                        logi('包含' + daojuMap[currentSelectIndex].name);
                        logi('上次指针位置-》' + preClickPointX + '这次指针位置-》' + x);
                        if (Math.abs(preClickPointX - x) > 80) {
                            click_game_banqu_anniu();
                        }
                        preClickPointX = currentPoint[0].x;
                    }
                }

            }


            //图片要回收
            image.recycle(tmpImage)
            // image.recycle(tmpImageClip)
        }

        sleep(30);

    }
}
