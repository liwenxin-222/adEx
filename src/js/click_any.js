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
    clickPoint(random(1077, 1283), random(710, 750));
}

function click_job_niangzao() {
    clickPoint(random(422, 602), random(151, 186));
}

function click_job_niangzao_start() {
    clickPoint(random(246, 502), random(226, 289));
}

function click_game_no1() {
    clickPoint(random(500, 550), random(300, 380))
}

function click_game_no2() {
    clickPoint(random(886, 1027), random(586, 679))

}

function click_game_no3() {
    clickPoint(random(1281, 1417), random(353, 423))
}

function click_game_select_done() {
    clickPoint(random(1900, 1978), random(900, 960));
}

function click_game_select_done_goon() {
    clickPoint(random(810, 965), random(736, 774));
}

function click_answer_tiaoguo() {
    clickPoint(random(2046, 2122), random(44, 70));
}

function click_answer_top_text() {
    clickPoint(random(1827, 2039), random(613, 648));
}

function click_answer_down_text() {
    clickPoint(random(1762, 2029), random(738, 799));
}

function click_niangzao_wrapper() {
    clickPoint(random(288, 452), random(300, 386));
}

function click_jon_renwu() {
    clickPoint(random(233, 319), random(151, 186));
}

function click_game_ReStart() {
    clickPoint(random(1370, 1535), random(805, 845));
}

// 完成挑战
function click_game_wanchentiaozhan() {
    clickPoint(random(1335, 1555), random(940, 975));

}
// 拌曲的按钮
function click_game_banqu_anniu() {
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
    clickPoint(random(1856, 2034), random(913, 958));
}
// 左上角返回
function click_return_top () {
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