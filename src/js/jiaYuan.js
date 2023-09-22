function jiaYuan() {
    console.log(jobMap.jiaYuan.shouGe, 'jobMap.jiaYuan.shouGe')
    if (!jobMap.jiaYuan.shouGe) {
        click_menu();
        sleepRandom();
        click_jiaYuan();
        sleepRandom();
        sleep(4000);
        swipeToPoint(392, 837, 462, 601, 4300);
        // 收割
        sleep(2000);
        click_jiaYuan_center_btn();
        sleep(4000);
        click_jiaYuan_xxx();
        // sleep(5000);
        sleepRandom();
        // 遮罩
        click_jiaYuan_center_btn();
        sleep(1500);
        click_jiaYuan_xxx();
        sleepRandom();
        // 播种
        click_jiaYuan_center_btn();
        sleep(1500);



        click_jiaYuan_jiFenDuiHuan();
        sleep(1500);
        click_jiaYuan_xiaoMaiZhongZi();
        sleepRandom();
        click_jiaYuan_200();
        sleepRandom();
        click_jiaYuan_200_ok_buy();
        sleepRandom();
        click_jiaYuan_shop_back();
        sleepRandom();
        click_jiaYuan_xxx();
        sleepRandom();
        click_jiaYuan_center_btn();
        sleepRandom();
        click_jiaYuan_boZhong();
        sleep(2000);
        click_jiaYuan_center_btn();
        sleep(2000);
        click_jiaYuan_center_btn();
        sleep(2000);
        click_jiaYuan_leave();
        sleep(4000);

        jobMap.jiaYuan.shouGe = true;
    }
}