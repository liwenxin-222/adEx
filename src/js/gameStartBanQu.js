var daojuMap = [
    {
        name: '袋子',
        firstColor: "#E7BA6B-#101010",
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
    if (__current_equipment__ === XU_NI_JI) {
        daojuMap = [
            {
                name: '袋子',
                firstColor: "#EFD193-#101010",
                multiColor: "-9|9|#E9D0A8-#101010,11|10|#C08C65-#101010,6|26|#C4864D-#101010,5|16|#CF9B6C-#101010,-13|24|#DBB382-#101010,-17|13|#FFDBAB-#101010,13|29|#EAC7A1-#101010,-2|26|#8A5F34-#101010,-2|16|#905B31-#101010",
                sign: "640|588|#E8CA84-#101010,619|602|#DCB687-#101010,659|604|#C08F66-#101010,658|634|#BB8762-#101010,616|628|#D5A688-#101010,639|620|#EBC99B-#101010,641|615|#FBCCA0-#101010",
            },
            {
                name: '盘子',
                firstColor: "#E8CD7E-#101010",
                multiColor: "-12|-1|#FED8AB-#101010,9|0|#FDD9A5-#101010,-14|11|#EFD98E-#101010,17|13|#815F3C-#101010,0|14|#C68E3B-#101010,-4|20|#D0CBD2-#101010,-11|18|#D6D5E3-#101010,12|18|#9D97A5-#101010,-6|23|#FDDEB0-#101010",
                sign: "641|599|#E2C873-#101010,617|615|#ECD48A-#101010,616|625|#DBD4E6-#101010,641|630|#CECAD8-#101010,641|617|#CEA150-#101010,662|627|#685956-#101010,666|617|#AB6D20-#101010",
            },
            {
                name: '水滴',
                firstColor: "#6A9ACB-#101010",
                multiColor: "-12|8|#B4C7D8-#101010,10|0|#5788C2-#101010,2|21|#7CAACE-#101010",
                sign: "640|595|#639BD4-#101010,623|603|#96C0E8-#101010,657|594|#5B89C4-#101010,646|635|#AFB7C4-#101010"
            }
        ];
    }
    // 上次截图x位置
    var zhiZhen_X = 0;
    // 上次点击x位置
    var preClickPointX = 0;


    function banquIsDone() {
        let tmpImage = image.captureFullScreen();
        if (tmpImage != null) {
            let firstColor = "365|230|#4C3225-#101010,405|530|#120706-#101010,765|965|#D0E0FF-#101010,1350|965|#FFE19B-#101010,1555|970|#FEDF97-#101010";
            if (__current_equipment__ === XU_NI_JI) {
                firstColor = "36|28|#BD804A-#101010,82|378|#150B09-#101010,368|644|#CCDCFE-#101010,760|640|#FFE49F-#101010,1122|662|#8F6A62-#101010,1268|628|#8D778C-#101010,1230|140|#160913-#101010";
            }
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
            var reg = [1093, 847, 1243, 990];
            if (__current_equipment__ === XU_NI_JI) {
                reg = [592, 568, 692, 670];
            }
            let currentSelectIndex = image.cmpMultiColor(tmpImage, currentSelectTab, 0.9, reg[0], reg[1], reg[2], reg[3],);
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
                let multiColor = "1|7|#FFFDFA-#101010,1|15|#FFFDFA-#101010,0|40|#FFFFFF-#101010,-1|47|#FFFEFA-#101010";
                // 当前指针位置
                var currentPointReg = [496, 726, 1756, 852];
                if (__current_equipment__ === XU_NI_JI) {
                    currentPointReg = [245, 485, 1035, 567];
                }
                let currentPoint = image.findMultiColor(tmpImage, firstColor, multiColor, 0.9, currentPointReg[0], currentPointReg[1], currentPointReg[2], currentPointReg[3], 1, 2);
                logi('当前指针位置-- ' + JSON.stringify(currentPoint));
                if (currentPoint) {
                    var x = currentPoint[0].x;
                    var ex;
                    // 往右走
                    if (zhiZhen_X < x) {
                        x = x - 10;
                        if (__current_equipment__ === XU_NI_JI) {
                            ex = x + 65;
                        } else {
                            ex = x + 95;
                        }
                    }
                    // 往左走
                    else {
                        logi('往左走');
                        ex = x + 10;
                        if (__current_equipment__ === XU_NI_JI) {
                            x = x - 75;
                        } else {
                            x = x - 100;
                        }
                    }
                    zhiZhen_X = currentPoint[0].x;
                    var yReg = 630, eyReg = 760;
                    if (__current_equipment__ === XU_NI_JI) {
                        yReg = 430;
                        eyReg = 490;
                    }
                    let isOkClick = image.findMultiColor(
                        tmpImage,
                        daojuMap[currentSelectIndex].firstColor,
                        daojuMap[currentSelectIndex].multiColor,
                        0.9, x, yReg, ex, eyReg, 1, 2);


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
