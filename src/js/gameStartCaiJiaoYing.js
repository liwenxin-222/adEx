var numberJiaoYingColor = [
    {
        name: 1,
        firstColor: "#FFE9B3-#101010",
        multiColor:  "-8|13|#B08552-#101010,-1|9|#FFE9B3-#101010,-1|16|#FFE9B3-#101010,-1|21|#FFE9B3-#101010,-1|30|#FFE9B3-#101010,-8|34|#FFE9B3-#101010,10|34|#FFE9B3-#101010,9|27|#A58951-#101010",

    },
    {
        name: 2,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-5|-21|#A67341-#101010,-12|-17|#AF8158-#101010,-6|-18|#F5DDA9-#101010,-4|-11|#FFE9B3-#101010,-7|8|#A26C40-#101010,-5|8|#B58B60-#101010,-9|-17|#F5DEA9-#101010,-3|-7|#FFE9B3-#101010,-10|-13|#FFE9B3-#101010,-5|20|#FFE9B3-#101010,-3|7|#FFE9B3-#101010,6|-11|#A4804B-#101010,5|18|#FFE9B3-#101010,-12|8|#A88153-#101010,-14|14|#A67248-#101010,0|8|#FFE9B3-#101010,3|4|#A1673E-#101010,0|-17|#FFE9B3-#101010,-12|14|#A36F44-#101010,6|22|#A36D3F-#101010",

    },
    {
        name: 3,
        firstColor: "#FFE9B3-#101010",
        multiColor: "8|-3|#FFE9B3-#101010,15|1|#FFE9B3-#101010,7|6|#8B693D-#101010,5|11|#9A663A-#101010,6|26|#936F43-#101010,9|28|#92633B-#101010,16|30|#FFE9B3-#101010,-3|33|#FFE9B3-#101010,18|17|#9C683E-#101010",

    },
    {
        name: 4,
        firstColor: "#FFE9B3-#101010",
        multiColor: "0|24|#FFE9B3-#101010,0|36|#FFE9B3-#101010,7|24|#FFE9B3-#101010,-18|24|#FFE9B3-#101010,-10|19|#A0683B-#101010,-3|11|#A16B3E-#101010,-4|19|#A0683C-#101010,-6|33|#A07248-#101010",

    },
    {
        name: 5,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-11|0|#FFE9B3-#101010,-16|1|#FFE9B3-#101010,-19|14|#FFE9B3-#101010,-10|10|#9D673B-#101010,-3|7|#997347-#101010,-2|19|#FFE9B3-#101010,-10|28|#91673E-#101010,-13|35|#FFE9B3-#101010",

    },
    {
        name: 6,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-5|-2|#FFE9B3-#101010,-15|0|#FFE9B3-#101010,-19|10|#FFE9B3-#101010,-19|19|#FFE9B3-#101010,-10|14|#FFE9B3-#101010,-6|6|#8D6841-#101010,0|19|#FFE9B3-#101010,0|28|#FFE9B3-#101010,-6|34|#FFE9B3-#101010,-9|31|#9A643A-#101010",

    },
    {
        name: 0,
        firstColor: "#D4E1FF-#101010",
        multiColor: "15|-25|#E2EBFE-#101010,217|-2|#C9DAFF-#101010,575|-5|#FEE09A-#101010,785|-4|#FEE19A-#101010,1103|-312|#3D392A-#101010,1115|-477|#3D392A-#101010",
    }
]

function gameStartCaiJiaoYing() {
    while (true) {
        if (isScriptExit()) {
            break;
        }
        if (jobMap.game.caiQu.done) {
            break;
        }
        // if (tmpImage != null) {
            for (let i = 0; i < numberJiaoYingColor.length; i++) {
                let tmpImage = image.captureFullScreen();

                let points = image.findMultiColor(
                    tmpImage, numberJiaoYingColor[i].firstColor,
                    numberJiaoYingColor[i].multiColor,
                    0.9, 80, 410, 2260, 1030, 1, 2
                );

                if (points) {
                    var filterList = points;
                    // var filterList = filterXiangtongWeizhi(points);
                    logd("points " + JSON.stringify(filterList));

                    for (let k = 0; k < filterList.length; k++) {
                        var x = filterList[k].x;
                        var y = filterList[k].y;
                        var pObj = {
                            x: [x, x + 40],
                            y: [y, y + 40],
                        }
                        if (numberJiaoYingColor[i].name === 0) {
                            jobMap.game.caiQu.done = true;
                            break;
                        }
                        logi(JSON.stringify(pObj) + '---', numberJiaoYingColor[i].name);
                        fastClick(pObj, numberJiaoYingColor[i].name);
                    }

                }
                image.recycle(tmpImage)
            }
            // 图片要回收
        // }
        logi('循环完成');
        sleep(500)
    }

    // TODO 没用。太慢
    // mainOcr();
    //
    // while (true) {
    //     if (isScriptExit()) {
    //         break;
    //     }
    //     if (jobMap.game.caiQu.done) {
    //         break;
    //     }
    //     let tmpImage = image.captureFullScreen();
    //     let imgClip = image.clip(tmpImage, 80, 410, 2260, 1030);
    //     let result = ocr.ocrImage(imgClip, 1000, {"orz": 0});
    //     logi(JSON.stringify(result));
    //     if (result) {
    //         for (let i = 0; i < result.length; i++) {
    //             if (result[i].label.includes('完成挑战')) {
    //                 jobMap.game.caiQu.done = true;
    //                 break;
    //             }
    //             if (['1', '2', '3', '4', '5', '6'].includes(result[i].label)) {
    //                 var x = result[i].x;
    //                 var y = result[i].y;
    //                 var pObj = {
    //                     x: [x, x + 10],
    //                     y: [y, y + 10],
    //                 }
    //                 fastClick(pObj, result[i].label);
    //             }
    //         }
    //     }
    //
    //     sleep(500)
    // }

}

function filterXiangtongWeizhi(list) {
    return list.filter((item, i) => {
        if (i > 0 &&
            (Math.abs(list[i].x - list[i - 1].x) + Math.abs(list[i].y - list[i - 1].y)) < 20
        ) {

        } else {
            return item;
        }
    })
}