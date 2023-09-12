function findCurrentPage() {
    let tmpImage = image.captureFullScreen();
    // let  e = image.saveTo(tmpImage,"/sdcard/ec/yy.png");
    // let  r = image.pixel(tmpImage,100,100);
    // let uu = image.clip(tmpImage, 468,216,530,408);
    // let  f = image.saveTo(uu,"/sdcard/ec/yy1.png");

    // logi(e + '===' + r);
    if (tmpImage != null) {
        // image.setFindColorImageMode(1)
        let multiColor = [
            "426|96|#4E86FF-#101010,422|132|#FFFFFF-#101010,758|120|#75A3FD-#101010,694|182|#679BFF-#101010,1808|114|#88CDFF-#101010,1924|124|#86C9FF-#101010,1886|130|#FFFFFF-#101010",
            "478|238|#FB8A37-#101010,524|294|#FB9041-#101010,482|394|#FA9A50-#101010",
            "1070|880|#EEDBB6-#101010,1284|876|#E2C39B-#101010,1388|680|#C4EACF-#101010,1156|114|#F0E4A3-#101010,2050|164|#FFFFFF-#101010",

        ];
        let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, 0, 0, 0, 0);
        logd("points " + points);
        switch (points) {
            // 小广播
            case 0:
                logi('小广播')
                clickPoint(random(1868, 1902), random(110, 146))
                break;
            case 1:
                logi('上新专场')
                clickPoint(random(2040, 2060), random(150, 170))
                break;
            case 2:
                logi('美自天成页面')
                clickPoint(random(2040, 2060), random(150, 170))
                break;
            default:
                logi('不知道的页面')
        }
        //图片要回收
        image.recycle(tmpImage)
    }

}