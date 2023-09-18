const daojuMap = [
    {
        name: '袋子',
        firstColor:  "#E7BB6C-#101010",
        multiColor:  "1|25|#DBAC75-#101010,15|36|#BA7C4C-#101010,-2|33|#6F491C-#101010",
        sign: "1118|888|#F4DFA4-#101010,1110|905|#E3C7A2-#101010,1145|908|#B88258-#101010,1142|932|#C99866-#101010,1120|941|#542D01-#101010",
    },
    {
        name: '盘子',
        firstColor: "#EFD991-#101010",
        multiColor: "-13|25|#CAC7C2-#101010,0|26|#D0D0E4-#101010,25|14|#A96915-#101010",
        sign: "1122|901|#E5CA79-#101010,1107|921|#EDD98F-#101010,1151|941|#9593B0-#101010,1122|940|#BFBBD5-#101010,1101|941|#D8D6EC-#101010",
    },
    {
        name: '水滴',
        firstColor: "#6095D2-#101010",
        multiColor: "-5|24|#B5D5F4-#101010,4|40|#D8DCDE-#101010,17|21|#6EA4DB-#101010",
        sign: "1121|892|#629BD0-#101010,1121|920|#97C1E9-#101010,1122|943|#6AA2D9-#101010,1095|901|#4A84CA-#101010,1147|893|#80AADD-#101010"
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
            let firstColor =  "120|184|#190C17-#101010,158|514|#070207-#101010,246|994|#8D768D-#101010,536|1010|#8E6E64-#101010,944|954|#CEDEFF-#101010,1504|968|#FEE099-#101010";
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
            let currentSelectIndex = image.cmpMultiColor(tmpImage, currentSelectTab, 0.9, 1065,852,1172,974);
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
                let multiColor = "2|24|#FFFFFF-#101010,1|49|#FFFFFF-#101010,2|64|#FFFFFF-#101010,1|73|#FFFFFF-#101010";
                // 当前指针位置
                let currentPoint = image.findMultiColor(tmpImage, firstColor, multiColor, 0.9, 523,713,1729,859, 1, 2);
                logi('当前指针位置-- ' + JSON.stringify(currentPoint));
                if (currentPoint) {
                    var x = currentPoint[0].x;
                    var ex;
                    // 往右走
                    if (zhiZhen_X < x) {
                        x = x - 10;
                        ex = x + 110;
                    }
                    // 往左走
                    else {
                        logi('往左走');
                        x = x - 110;
                        ex = x + 10;
                    }
                    zhiZhen_X = currentPoint[0].x;
                    let isOkClick = image.findMultiColor(
                        tmpImage,
                        daojuMap[currentSelectIndex].firstColor,
                        daojuMap[currentSelectIndex].multiColor,
                        0.9, x, 626, ex, 736, 1, 2);


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
