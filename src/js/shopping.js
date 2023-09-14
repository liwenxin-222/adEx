function shopping() {
    mainOcr();

    sleep(1000);
    function shuaXin() {
        click_chuShou();
        sleep(random(500, 550));
        click_gouMai();
        sleep(random(3000, 3500));
    }

    function buyLou() {
        click_shop_no1();
        sleep(200);
        click_shop_buy();
        sleep(200);
        click_shop_confirm_buy();
        sleep(500);
        click_center_ok();
        sleep(200);
        click_center_ok();
    }

    while (true) {

        if (isScriptExit()) {
            break;
        }
        // shuaXin();
        console.time(1)
        let tmpImage = image.captureFullScreen();
        let clipImage = image.clip(tmpImage, 871,313,984,355);
        // image.saveTo(clipImage, '/sdcard/ec/ui.jpg')
        // orz 参数代表是旋转角度，0 代表不旋转 90 代表向左旋转90度，还有180，270，360参数
        let result = ocr.ocrImage(clipImage, 1000, {"orz": 0});
        logd("耗时 {}", console.timeEnd(1))
        logi(JSON.stringify(result));

        image.recycle(tmpImage)
        image.recycle(clipImage)

        if (result && result[0] && result[0].label < 40 ) {
            logi('发现漏');
            buyLou()
            // sleep(1000);
        } else {
            shuaXin();
        }
        //释放所有资源
    }

    ocr.releaseAll();
}
