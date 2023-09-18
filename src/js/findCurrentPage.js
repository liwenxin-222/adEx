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
            "1955|44|#FFFFFF-#101010,1954|51|#FFFFFF-#101010,1961|50|#FFFFFF-#101010,1961|45|#FFFFFF-#101010,1959|59|#FFFFFF-#101010,1957|66|#FFFFFF-#101010,1956|71|#FFFFFF-#101010,1950|72|#FFFFFF-#101010,1971|64|#FFFFFF-#101010,1984|59|#FFFFFF-#101010,1990|49|#FFFFFF-#101010,2000|53|#FFFFFF-#101010,2022|57|#FFFFFF-#101010,2031|59|#FFFFFF-#101010,2068|59|#FFFFFF-#101010,2099|58|#FFFFFF-#101010,2070|43|#FFFFFF-#101010,2068|72|#FFFFFF-#101010",
            "253|130|#64B38F-#101010,216|940|#62AD88-#101010,396|536|#DDB695-#101010,966|746|#FEE39F-#101010,2110|180|#5AA67F-#101010,2133|960|#5E9B82-#101010,1443|1006|#6ABF95-#101010",
            "60|156|#E0EDF9-#101010,66|936|#DAAF58-#101010,213|43|#BB804B-#101010,2123|163|#FEFEFE-#101010,2163|903|#DBAC69-#101010,1783|1000|#D7BFA1-#101010,2073|1020|#F3E7B9-#101010",

            "425|170|#7E8A94-#101010,410|465|#53524E-#101010,325|960|#795B2C-#101010,1305|955|#FFE6A2-#101010,1970|640|#4F4E47-#101010,1930|160|#949494-#101010",
            // 再次挑战
            "313|273|#272833-#101010,840|473|#FFFFFF-#101010,763|823|#DDE8FF-#101010,516|290|#DC9A6A-#101010,1330|836|#FEDE96-#101010,250|930|#342D2E-#101010",
            "206|234|#24171C-#101010,236|942|#EFCEF0-#101010,642|1022|#F4C1AF-#101010,1648|1002|#F1BBA9-#101010,1870|832|#776776-#101010,2182|214|#2F222A-#101010,1726|218|#765847-#101010",
            "120|184|#190C17-#101010,158|514|#070207-#101010,246|994|#8D768D-#101010,536|1010|#8E6E64-#101010,944|954|#CEDEFF-#101010,1504|968|#FEE099-#101010",

            "606|206|#6A5435-#101010,348|408|#3C3729-#101010,288|720|#3C392A-#101010,340|952|#7D775C-#101010,966|974|#D3E1FF-#101010,1546|982|#FDD98F-#101010,1614|200|#756347-#101010,2054|950|#7D755C-#101010",
            "36|57|#5C565D-#101010,76|123|#3B342C-#101010,25|300|#D7B688-#101010,51|585|#896244-#101010,42|1054|#84713C-#101010",
            "385|180|#229B94-#101010,788|456|#229B94-#101010,1190|173|#229B94-#101010,1795|696|#50AE82-#101010,1416|626|#E7E1DA-#101010,316|700|#4A342E-#101010,713|753|#FFDB8E-#101010,1955|165|#C2B5AF-#101010",
            "1847|252|#E38E6B-#101010,1818|221|#EC9C7B-#101010,1857|182|#EFA282-#101010,1890|211|#E89675-#101010,1848|181|#D2714B-#101010,1868|278|#F0A084-#101010,1902|345|#DB7F59-#101010,1954|342|#DE8663-#101010,1922|342|#070606-#101010,1860|334|#6C6D71-#101010,1917|208|#A5F1BB-#101010,1860|215|#FFF6E2-#101010",
            "1857|166|#EFF0F7-#101010,1871|178|#F1F3F8-#101010,1882|167|#E2E2E6-#101010,1871|152|#DDDFE3-#101010,1866|163|#7790C6-#101010,1865|173|#7A90C8-#101010,1877|174|#7790C6-#101010,1875|164|#839ACB-#101010,1871|167|#7891C6-#101010,1900|187|#6081C2-#101010",
            "382|175|#229B94-#101010,790|455|#229B94-#101010,972|280|#D8D0C9-#101010,637|160|#E3DBD5-#101010,707|420|#FBCE9F-#101010,1107|672|#D5D39D-#101010,1460|427|#DBD3AA-#101010,1842|925|#CDCEBE-#101010",

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
                click_game_wanchentiaozhan();
                // sleep(2000);
                // click_niangzao_wrapper();
                GO();
                break;
            case 10:
                logi('脚丫游戏结束');
                // click_game_wanchentiaozhan();
                // sleep(2000);
                // GO();
                break;
            case 11:
                logi('脚丫游戏开始');
                gameStartCaiJiaoYing();
                GO();
                break;
            case 12:
                logi('领基酒页面');
                click_yi_jian_ling_qu();
                sleep(1000);
                click_return_top()
                // GO();
                break;
            case 13:
                logi('签到页面');
                click_qiandao_x();
                GO();
                break;
            case 14:
                logi('活动指引');
                click_huodongzhiyin_x();
                GO();
                break;
            case 15:
                logi('领完基酒了。');
                jobMap.game.selected = true;
                GO();
                break;
            default:
                logi('不知道的页面')
                startGame();
                click_niangzao_wrapper();
                GO();
        }
        //图片要回收
        image.recycle(tmpImage)
    }

}