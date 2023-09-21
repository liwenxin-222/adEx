var numberJiaoYingColor = [
    {
        name: 1,
        firstColor: "#97663E-#101010",
        multiColor: "0|3|#FFE9B3-#101010,-4|5|#966E42-#101010,-1|13|#89673E-#101010,2|14|#996439-#101010,2|20|#99623A-#101010,2|24|#9A663A-#101010,2|32|#9C6539-#101010,0|35|#C19D72-#101010,-6|40|#916037-#101010,-1|39|#FFE9B3-#101010,5|38|#FFE9B3-#101010,12|38|#FFE9B3-#101010,15|33|#9B653B-#101010,15|26|#8A683F-#101010,14|17|#906640-#101010,14|7|#8F633D-#101010,8|8|#FFE9B3-#101010,8|3|#FFE9B3-#101010,16|2|#8D6B41-#101010",
    },
    {
        name: 2,
        firstColor: "#9C7943-#101010",
        multiColor: "3|-6|#FFE9B3-#101010,9|-1|#9B6D45-#101010,13|-9|#FFE9B3-#101010,16|-1|#9F693D-#101010,22|2|#FFE9B3-#101010,15|5|#9E6D40-#101010,16|12|#FFE9B3-#101010,8|13|#9D6941-#101010,10|19|#FFE9B3-#101010,3|19|#9C6B41-#101010,6|26|#FFE9B3-#101010,-4|27|#A67A49-#101010,15|33|#946D43-#101010,22|29|#FFE9B3-#101010,18|21|#99643C-#101010,23|14|#9B693F-#101010,28|1|#987346-#101010",

    },
    {
        name: 3,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-4|3|#9D6D40-#101010,9|-3|#FFE9B3-#101010,17|2|#FFE9B3-#101010,15|10|#FFE9B3-#101010,7|15|#FFE9B3-#101010,2|15|#9D7042-#101010,2|9|#9A6842-#101010,7|6|#A1844B-#101010,0|23|#977041-#101010,9|26|#A27949-#101010,17|27|#FFE9B3-#101010,12|32|#FFE9B3-#101010,6|33|#FFE9B3-#101010,0|33|#FFE9B3-#101010,19|13|#A06A3E-#101010,13|13|#FFE9B3-#101010",

    },
    {
        name: 4,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-7|1|#A37C57-#101010,-2|-7|#A67644-#101010,3|-6|#FFE9B3-#101010,1|-16|#AA874F-#101010,7|-16|#FFE9B3-#101010,13|-22|#FFE9B3-#101010,7|-23|#A67744-#101010,17|-14|#FFE9B3-#101010,17|0|#FFE9B3-#101010,21|0|#FFE9B3-#101010,22|-4|#9F653A-#101010,11|9|#A57649-#101010,12|-7|#AA7649-#101010,9|-7|#A47243-#101010,24|8|#B08853-#101010,16|12|#FFE9B3-#101010",

    },
    {
        name: 5,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-5|0|#9B663C-#101010,-6|17|#98673E-#101010,-1|16|#FFE9B3-#101010,8|12|#FFE9B3-#101010,5|4|#9C6439-#101010,5|9|#9C643A-#101010,16|9|#95673F-#101010,21|15|#97673D-#101010,17|20|#FFE9B3-#101010,15|0|#FFE9B3-#101010,20|1|#99683F-#101010,15|31|#FFE9B3-#101010,1|35|#FFE9B3-#101010,2|29|#96663D-#101010,-3|24|#8D6A42-#101010",

    },
    {
        name: 6,
        firstColor: "#FFE9B3-#101010",
        multiColor: "4|3|#9B6C3E-#101010,-1|4|#986F3F-#101010,-6|4|#A27746-#101010,-13|10|#9D663A-#101010,-18|9|#FFE9B3-#101010,-19|27|#FFE9B3-#101010,-5|34|#FFE9B3-#101010,1|27|#FFE9B3-#101010,1|20|#FFE9B3-#101010,6|17|#9E6C3F-#101010,2|10|#9E6B3E-#101010,-7|22|#987143-#101010,-9|29|#9F683C-#101010",
    },
    {
        name: 0,
        firstColor: "#3A3629-#101010",
        multiColor: "220|500|#D7E3FF-#101010,602|495|#FFE49F-#101010,820|320|#403D2D-#101010,817|12|#393528-#101010",
    },
]

function gameStartCaiJiaoYing() {
    while (true) {
        if (isScriptExit()) {
            break;
        }
        if (jobMap.game.caiQu.done) {
            break;
        }
        let tmpImage = image.captureFullScreen();

        if (tmpImage != null) {
            let touch3 = [];

            for (let i = 0; i < numberJiaoYingColor.length; i++) {
                if (i === 3) {
                    tmpImage = image.captureFullScreen();
                }
                logi('开始截图---' + i);

                let points = image.findMultiColor(
                    tmpImage, numberJiaoYingColor[i].firstColor,
                    numberJiaoYingColor[i].multiColor,
                    0.9, 205, 405, 1955, 1020,
                    numberJiaoYingColor[i].name < 2 ? 5 : 20,
                    2
                );

                if (points) {
                    // var filterList = points;
                    var filterList = filterXiangtongWeizhi(points);
                    logd(i + " 找到points " + JSON.stringify(filterList));

                    let touch1 = [];
                    let touch2 = [];
                    for (let k = 0; k < filterList.length; k++) {
                        var x = filterList[k].x;
                        var y = filterList[k].y;
                        var pObj = {
                            x: [x, x + 20],
                            y: [y, y + 20],
                        }

                        if (numberJiaoYingColor[i].name === 0) {
                            jobMap.game.caiQu.done = true;
                            logi('踩曲结束')
                            break;
                        }

                        logi(JSON.stringify(pObj) + '---', numberJiaoYingColor[i].name);
                        // fastClick(pObj, numberJiaoYingColor[i].name);
                        if (
                            filterList.length === 2
                        ) {

                            if (k === 0) {
                                for (let j = 0; j < numberJiaoYingColor[i].name; j++) {
                                    var touch1x = random(x, x + 20);
                                    var touch1y = random(y, y + 20);
                                    touch1.push({
                                        "action": 0,
                                        "x": touch1x,
                                        "y": touch1y,
                                        "pointer": 1,
                                        "delay": random(40, 50)
                                    });
                                    touch1.push({
                                        "action": 1,
                                        "x": touch1x,
                                        "y": touch1y,
                                        "pointer": 1,
                                        "delay": 1
                                    });
                                }

                            }
                            if (k === 1) {
                                for (let j = 0; j < numberJiaoYingColor[i].name; j++) {
                                    var touch2x = random(x, x + 20);
                                    var touch2y = random(y, y + 20);
                                    touch2.push({
                                        "action": 0,
                                        "x": touch2x,
                                        "y": touch2y,
                                        "pointer": 2,
                                        "delay": random(40, 50)
                                    });
                                    touch2.push({
                                        "action": 1,
                                        "x": touch2x,
                                        "y": touch2y,
                                        "pointer": 2,
                                        "delay": 1
                                    });
                                }
                            }

                        } else {
                            touch3.push([]);
                            for (let j = 0; j < numberJiaoYingColor[i].name; j++) {
                                var touch1xx = random(x, x + 20);
                                var touch1yy = random(y, y + 20);
                                touch3[touch3.length - 1].push({
                                    "action": 0,
                                    "x": touch1xx,
                                    "y": touch1yy,
                                    "pointer": touch3.length,
                                    "delay": random(40, 50)
                                });
                                touch3[touch3.length - 1].push({
                                    "action": 1,
                                    "x": touch1xx,
                                    "y": touch1yy,
                                    "pointer": touch3.length,
                                    "delay": 1
                                });
                            }

                            if (touch3.length > 2) {
                                logi('[touch3]多点触控--' + JSON.stringify(touch3));
                                multiTouch(touch3[0], touch3[1], touch3[2], 30000);
                                touch3 = [];
                            }


                        }

                    }

                    if (touch3.length === 1) {
                        logi('[touch1]多点触控--' + JSON.stringify(touch3));
                        multiTouch(touch3[0], null, null, 30000);
                        // fastClick(pObj, numberJiaoYingColor[i].name);
                        touch3 = [];
                    }
                    if (touch3.length === 2) {
                        logi('[touch2]多点触控--' + JSON.stringify(touch3));
                        multiTouch(touch3[0], touch3[1], null, 30000);
                        // fastClick(pObj, numberJiaoYingColor[i].name);
                        touch3 = [];
                    }

                    if (
                        touch1.length > 0 ||
                        touch2.length > 0
                    ) {
                        logi('多点触控--' + JSON.stringify(touch1) + JSON.stringify(touch2));
                        multiTouch(touch1, touch2, null, 30000);
                    }
                }

            }
            logi('循环完成');
        }
        // 图片要回收
        image.recycle(tmpImage);
        // sleep(30);
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
