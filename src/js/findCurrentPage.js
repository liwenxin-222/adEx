function findCurrentPage() {
    let tmpImage = image.captureFullScreen();
    // let  e = image.saveTo(tmpImage,"/sdcard/ec/yy.png");
    // let  r = image.pixel(tmpImage,100,100);
    // let uu = image.clip(tmpImage, 468,216,530,408);
    // let  f = image.saveTo(uu,"/sdcard/ec/yy1.png");

    logi(tmpImage);
    if (tmpImage != null) {
        // image.setFindColorImageMode(1)
        let multiColor = [
            "426|96|#4E86FF-#101010,422|132|#FFFFFF-#101010,758|120|#75A3FD-#101010,694|182|#679BFF-#101010,1808|114|#88CDFF-#101010,1924|124|#86C9FF-#101010,1886|130|#FFFFFF-#101010",
            "478|238|#FB8A37-#101010,524|294|#FB9041-#101010,482|394|#FA9A50-#101010",
            "1070|880|#EEDBB6-#101010,1284|876|#E2C39B-#101010,1388|680|#C4EACF-#101010,1156|114|#F0E4A3-#101010,2050|164|#FFFFFF-#101010",
            "2188|57|#FFFFFF-#101010,2175|57|#FFFFFF-#101010,2160|45|#FFFFFF-#101010,2162|71|#FFFFFF-#101010,2162|59|#FFFFFF-#101010,2157|56|#FFFFFF-#101010,2124|74|#BABDB8-#101010,2106|73|#F5F7F3-#101010,2090|71|#FFFFFF-#101010,2093|57|#FFFFFF-#101010,2093|44|#FFFFFF-#101010,2073|46|#FFFFFF-#101010,2072|69|#FFFFFF-#101010,2063|67|#FFFFFF-#101010,2067|45|#FFFFFF-#101010,2046|52|#FFFFFF-#101010,2041|72|#FFFFFF-#101010",
            "350|145|#61B68F-#101010,385|960|#60AF8B-#101010,560|620|#95D093-#101010,935|745|#FCE19F-#101010,1385|765|#FBDC96-#101010,1675|305|#C3CE94-#101010,1715|50|#81BEA3-#101010",
            "145|105|#E4EEF6-#101010,210|695|#B09F80-#101010,685|395|#ACCEF3-#101010,1720|120|#FEFDFE-#101010,1060|1010|#D08927-#101010,1770|995|#D4C2A2-#101010,2235|70|#FEEBDE-#101010,2190|1040|#FEFEDB-#101010",
            "275|180|#818A94-#101010,215|545|#4E4F4B-#101010,230|965|#705124-#101010,1760|185|#888C8E-#101010,1770|660|#524F47-#101010,1750|970|#76562E-#101010,1560|975|#FEDD94-#101010,985|965|#D6E3FE-#101010",
            "815|125|#3A4B42-#101010,785|850|#CDDDFF-#101010,970|825|#DAE6FF-#101010,1370|825|#FFE39F-#101010,1545|835|#FEDF97-#101010,205|970|#2E403F-#101010,1760|1020|#2D4340-#101010,560|305|#D48963-#101010",
            "175|355|#271A22-#101010,140|950|#EFCEF0-#101010,585|990|#F0B6A5-#101010,1690|1010|#F3BEAC-#101010,1775|830|#EDD1F1-#101010,2270|950|#EFCDF0-#101010,2270|210|#30232C-#101010,1795|145|#472621-#101010",
            "310|450|#160C0A-#101010,975|965|#D6E3FF-#101010,1570|975|#FCDC95-#101010,2105|410|#0E060A-#101010,2140|955|#8D778D-#101010,1805|1010|#8E6E64-#101010,610|1015|#906F65-#101010,195|970|#8D768D-#101010,1920|220|#483324-#101010",

        ];
        let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, 0, 0, 0, 0);
        logd("points " + points);
        stayGo();
        switch (points) {
            // 小广播
            case 0:
                logi('小广播')
                clickPoint(random(1868, 1902), random(110, 146));
                GO();
                break;
            case 1:
                logi('上新专场')
                clickPoint(random(2040, 2060), random(150, 170))
                GO();
                break;
            case 2:
                logi('美自天成页面');
                GO();
                clickPoint(random(2040, 2060), random(150, 170))
                break;
            case 3:
                logi('跳过页面')
                click_answer_tiaoguo();
                sleep(500);
                handlerTiaoguo();
                GO();
                break;
            case 4:
                logi('进游戏页面');
                click_center_ok();
                GO();
                break;
            case 5:
                logi('小麦游戏');
                gameStartGeXiaoMai();
                GO();
                break;
            case 6:
                logi('小麦游戏结束');
                click_game_wanchentiaozhan();
                sleep(2000);
                click_niangzao_wrapper();
                GO();
                break;
            case 7:
                logi('再次挑战');
                click_game_ReStart();
                GO();
                break;
            case 8:
                logi('拌曲游戏');
                gameStartBanQu();
                GO();
                break;
            case 9:
                logi('拌曲游戏结束');
                // click_game_wanchentiaozhan();
                // sleep(2000);
                // click_niangzao_wrapper();
                // GO();
                break;
            default:
                logi('不知道的页面')
                click_niangzao_wrapper();
                GO();
        }
        //图片要回收
        image.recycle(tmpImage)
    }

}