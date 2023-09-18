var numberJiaoYingColor = [
    {
        name: 1,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-4|1|#9B6A40-#101010,0|-4|#96663D-#101010,6|-4|#9E653A-#101010,6|-13|#9E693D-#101010,0|-14|#936F47-#101010,6|-27|#9B673D-#101010,2|-29|#9B6D43-#101010,2|-35|#FFE9B3-#101010,2|-37|#976840-#101010,12|-36|#FFE9B3-#101010,12|-26|#FFE9B3-#101010,12|-17|#FFE9B3-#101010,16|-5|#9E653A-#101010,16|-17|#9D673D-#101010,24|2|#98663D-#101010,13|5|#9C673B-#101010",
    },
    {
        name: 2,
        firstColor: "#9E6E3D-#101010",
        multiColor: "4|-5|#FFE9B3-#101010,8|-8|#FFE9B3-#101010,12|-3|#A57445-#101010,17|-7|#FFE9B3-#101010,22|-3|#FFE9B3-#101010,15|9|#9C673B-#101010,10|14|#A06E40-#101010,9|17|#A47141-#101010,5|22|#D5B889-#101010,-1|29|#97663A-#101010,26|5|#9E6B3D-#101010,24|13|#A77545-#101010,19|19|#986B3D-#101010,15|17|#FFE9B3-#101010,15|24|#9D6439-#101010,24|29|#FFE9B3-#101010,14|29|#FFE9B3-#101010,29|29|#A37242-#101010,12|34|#90653E-#101010",

    },
    {
        name: 3,
        firstColor: "#9F6D41-#101010",
        multiColor: "5|-5|#FFE9B3-#101010,14|-7|#FFE9B3-#101010,12|-2|#A27143-#101010,11|6|#A06A3F-#101010,10|10|#FFE9B3-#101010,5|10|#A47C4D-#101010,9|16|#AB8654-#101010,5|21|#A37344-#101010,16|20|#A46F40-#101010,22|21|#FFE9B3-#101010,14|30|#FFE9B3-#101010,2|28|#FFE9B3-#101010,-3|23|#9F693F-#101010,1|33|#A06F42-#101010",

    },
    {
        name: 4,
        firstColor: "#FFE9B3-#101010",
        multiColor: "-16|1|#946B4A-#101010,-11|10|#FEE8B2-#101010,-17|24|#FFE9B3-#101010,-11|20|#9E663B-#101010,-4|14|#9D653B-#101010,-6|31|#987047-#101010,2|34|#FFE9B3-#101010,9|25|#FFE9B3-#101010,7|31|#9D683D-#101010",

    },
    {
        name: 5,
        firstColor: "#FFE9B3-#101010",
        multiColor: "0|19|#FFE9B3-#101010,7|12|#99643B-#101010,11|8|#906A42-#101010,18|3|#FFE9B3-#101010,19|13|#966B42-#101010,13|11|#966E43-#101010,8|24|#876640-#101010,1|29|#916B44-#101010,6|34|#9A643B-#101010,7|39|#FFE9B3-#101010,20|28|#FFE9B3-#101010",

    },
    {
        name: 6,
        firstColor: "#9A6940-#101010",
        multiColor: "-3|-3|#FFE9B3-#101010,-11|-7|#FFE9B3-#101010,-10|0|#9D6A40-#101010,-14|4|#9B7047-#101010,-17|8|#9E663B-#101010,-22|11|#FFE9B3-#101010,-22|19|#FFE9B3-#101010,-2|9|#A07349-#101010,1|5|#977247-#101010,-8|20|#9D6A3F-#101010,-8|22|#9E6D3F-#101010,-1|25|#FFE9B3-#101010",
    },
    {
        name: 0,
        firstColor: "#D4E1FF-#101010",
        multiColor: "15|-25|#E2EBFE-#101010,217|-2|#C9DAFF-#101010,575|-5|#FEE09A-#101010,785|-4|#FEE19A-#101010,1103|-312|#3D392A-#101010,1115|-477|#3D392A-#101010",
    },
    {
        nama: '错误',
        firstColor: "#CA694F-#101010",
        multiColor:"-49|7|#CF6F54-#101010,8|-59|#C7664E-#101010"
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
        let tmpImage = image.captureFullScreen();

        if (tmpImage != null) {
            let touch3 = [];

            for (let i = 0; i < numberJiaoYingColor.length; i++) {
                logi('开始截图---' + i);

                let points = image.findMultiColor(
                    tmpImage, numberJiaoYingColor[i].firstColor,
                    numberJiaoYingColor[i].multiColor,
                    0.9, 105, 415, 2215, 995, 20, 2
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
                            x: [x, x + 40],
                            y: [y, y + 40],
                        }

                        if (numberJiaoYingColor[i].name === 0) {
                            jobMap.game.caiQu.done = true;
                            logi('踩曲结束')
                            break;
                        }

                        logi(JSON.stringify(pObj) + '---', numberJiaoYingColor[i].name);

                        if (
                            filterList.length === 2
                        ) {

                            if (k === 0) {
                                for (let j = 0; j < numberJiaoYingColor[i].name; j++) {
                                    var touch1x = random(x, x + 40);
                                    var touch1y = random(y, y + 40);
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
                                    var touch2x = random(x, x + 40);
                                    var touch2y = random(y, y + 40);
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
                                var touch1xx = random(x, x + 40);
                                var touch1yy = random(y, y + 40);
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

                            if (touch3.length > 1) {
                                logi('[touch3]多点触控--' + JSON.stringify(touch3));
                                multiTouch(touch3[0], touch3[1], null, 30000);
                                touch3 = [];
                            }


                        }

                    }

                    if (touch3.length === 1) {
                        logi('[touch1]多点触控--' + JSON.stringify(touch3));
                        multiTouch(touch3[0], null, null, 30000);
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
        sleep(30);
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
