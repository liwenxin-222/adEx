function clickRandom(x,y, ex, ey) {
    clickPoint(random(x, ex), random(y, ey));
}
function sleepRandom() {
    sleep(random(400, 500));
}
// 我要购买
function click_gouMai() {
    clickPoint(random(240, 400), random(140, 160));
}

// 我要出售
function click_chuShou() {
    clickPoint(random(540, 640), random(140, 160));
}

// 交易行第一个商品
function click_shop_no1() {
    clickPoint(random(900, 1000), random(280, 340));
}

// 交易行返回
function click_shop_return() {
    clickPoint(random(1485, 1638), random(990, 1033));
}

// 交易行购买
function click_shop_buy() {
    clickPoint(random(1713, 1856), random(990, 1033));
}

// 交易行确认购买
function click_shop_confirm_buy() {
    clickPoint(random(1228, 1409), random(916, 956));
}

// 最中间的确定
function click_center_ok() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(595,492,702,504);
        return;
    }
    clickPoint(random(1077, 1283), random(710, 750));
}

function click_job_niangzao() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(245,105,297,120);
        return;
    }
    clickPoint(random(422, 602), random(151, 186));
}

function click_job_niangzao_start() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(122,175,272,190);
        return;
    }
    clickPoint(random(246, 502), random(226, 289));
}

function click_game_no1() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(192,227,234,252);
        return;
    }
    clickPoint(random(500, 550), random(300, 380))
}

function click_game_no2() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(477,412,512,439);
        return;
    }
    clickPoint(random(886, 1027), random(586, 679))

}

function click_game_no3() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(727,235,787,265);
        return;
    }
    clickPoint(random(1281, 1417), random(353, 423))
}

function click_game_select_done() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1142,610,1162,635);
        return;
    }
    clickPoint(random(1900, 1978), random(900, 960));
}

// 继续挑战
function click_game_select_done_goon() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(402,487,482,507);
        return;
    }
    clickPoint(random(810, 965), random(736, 774));
}

function click_answer_tiaoguo() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1158,34,1182,43);
        return;
    }
    clickPoint(random(2046, 2122), random(44, 70));
}

function click_answer_top_text() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1000,396,1066,419);
        return;
    }
    clickPoint(random(1827, 2039), random(613, 648));
}

function click_answer_down_text() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(973,503,1039,519);
        return;
    }
    clickPoint(random(1762, 2029), random(738, 799));
}

function click_niangzao_wrapper() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(132,172,269,192);
        return;
    }
    clickPoint(random(288, 452), random(300, 386));
}

function click_jon_renwu() {
    clickPoint(random(233, 319), random(151, 186));
}

function click_game_ReStart() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(796,543,859,559);
        return;
    }
    clickPoint(random(1370, 1535), random(805, 845));
}

// 完成挑战
function click_game_wanchentiaozhan() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(783,620,876,646);
        return;
    }
    clickPoint(random(1335, 1555), random(940, 975));

}
// 拌曲的按钮
function click_game_banqu_anniu() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1130,545,1175,605);
        return;
    }
    clickPoint(random(1885, 2000), random(810, 915))
}

function clickOk(x, y) {
    var result = clickPoint(x, y);
    if (!result) {
        clickOk(x, y);
    }
}
// 一键领取基酒
function click_yi_jian_ling_qu() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1100,610,1203,626);
        return;
    }
    clickPoint(random(1856, 2034), random(913, 958));
}
// 左上角返回
function click_return_top () {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(70,23,143,39);
        return;
    }
    clickPoint(random(310, 495), random(26, 59));
}

function click_qiandao_x() {
    clickPoint(random(1840, 1872), random(201, 226));
}

function click_huodongzhiyin_x() {
    clickPoint(random(1854, 1884), random(151, 177));
}

//
function fastClick(point, count) {
    for (let i = 0; i < count; i++) {
        logi(i);
        clickPoint(random(point.x[0], point.x[1]), random(point.y[0], point.y[1]));
        // sleep(random(10, 20));
    }
}

function click_menu() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1170,333,1193,359);
        return;
    }
    clickRandom(2097,507,2129,569);
}

function click_jiaYuan() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1056,286,1099,309);
        return;
    }
    clickRandom(1872,435,2084,507);
}


function swipeToXiaomai() {
    if (__current_equipment__ === XU_NI_JI) {
        // var touch1 = [
        //     {"action": 0, "x": 150, "y": 556, "pointer": 1, "delay": 1},
        //     {"action": 2, "x": 193, "y": 340, "pointer": 1, "delay": 200},
        //     {"action": 1, "x": 193, "y": 340, "pointer": 1, "delay": 4200}
        // ]
        swipeToPoint(150, 556, 193, 340, 4300);
        // multiTouch(touch1, null, null, 30000);
    } else {
        swipeToPoint(392, 837, 462, 601, 4300);

    }
}

function click_jiaYuan_center_btn() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(813,350,843,380);
        return;
    }
    clickRandom(1557,515,1617,572);
}

function click_jiaYuan_jiFenDuiHuan() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(613,373,659,383);
        return;
    }
    clickRandom(1125,560,1242,587);
}

function click_jiaYuan_xiaoMaiZhongZi() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(556,110,662,150);
        return;
    }
    clickRandom(1122,172,1259,249);
}

function click_jiaYuan_200() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(893,643,999,659);
        return;
    }
    clickRandom(1545,955,1715,990);
}

function click_jiaYuan_200_ok_buy() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(773,496,859,516);
        return;
    }
    clickRandom(1372,747,1559,782);
}

function click_jiaYuan_shop_back() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(60,23,163,36);
        return;
    }
    clickRandom(342,25,492,60);
}

function click_jiaYuan_xxx() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(925,270,940,292);
        return;
    }
    clickRandom(1720,410,1743,436);
}

function click_jiaYuan_boZhong() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(586,513,659,543);
        return;
    }
    clickRandom(1092,777,1229,817);
}

function click_jiaYuan_leave() {
    if (__current_equipment__ === XU_NI_JI) {
        clickRandom(1080,236,1100,262);
        return;
    }
    clickRandom(1955,347,1967,377);
}
