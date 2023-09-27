function handlerTiaoguo() {
    mainOcr();

    console.time(2)
    let tmpImage = image.captureFullScreen();
    var reg = [1758, 588, 2093, 658]
    if (__current_equipment__ === XU_NI_JI) {
        reg = [936, 390, 1236, 440];
    }
    let clipImage = image.clip(tmpImage, reg[0], reg[1], reg[2], reg[3]);
    // image.saveTo(clipImage, '/sdcard/ec/ui.jpg')
    // orz 参数代表是旋转角度，0 代表不旋转 90 代表向左旋转90度，还有180，270，360参数
    let result = ocr.ocrImage(clipImage, 1000, {"orz": 0});
    logd("耗时 {}", console.timeEnd(2))
    logi(JSON.stringify(result));

    image.recycle(tmpImage)
    image.recycle(clipImage)

    if (
        result && result[0] && result[0].label.includes('小麦磨碎挑战') ||
        result && result[0] && result[0].label.includes('拌曲配料挑战') ||
        result && result[0] && result[0].label.includes('踩曲')
    ) {
        logi('小麦磨碎挑战');
        click_answer_top_text();
    } else {
    }
}