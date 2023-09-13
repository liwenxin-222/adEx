function gameStartBanQu() {
    while (true) {
        if (isScriptExit()) {
            break;
        }

        if (jobMap.game.banQu.done) {
            break;
        }

        let tmpImage = image.captureFullScreen();

        if (tmpImage != null) {
            let tmpImageClip = image.clip(tmpImage, 606,603,1746,1003)

            let multiColor = [
                "943|755|#FFFFFF-#101010,941|768|#FFFFFF-#101010,943|788|#FFFFFF-#101010,941|806|#FFFFFF-#101010,941|826|#FFFFFF-#101010",

            ];
            let points = image.cmpMultiColor(tmpImage, multiColor, 0.9, 0, 0, 0, 0);
            logd("points " + points);

            switch (points) {
                case 0:

                    break;
                case 1:

                    break;
                default:
                    logi('继续拌曲');
            }
            //图片要回收
            image.recycle(tmpImage)
        }


        click_game_banqu_anniu();
    }
}