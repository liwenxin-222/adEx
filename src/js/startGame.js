function startGame() {

    if (jobMap.game.selected === false) {
        click_job_niangzao();
        sleep(random(500, 600));
        click_job_niangzao_start();
        sleep(random(1000, 1100));
        click_game_no1();
        sleep(random(500, 600));
        click_game_no2();
        sleep(random(500, 600));
        click_game_no3();
        sleep(random(500, 600));
        click_game_select_done();
        sleep(random(500, 600));
        click_center_ok();
        sleep(random(500, 600));
        click_game_select_done_goon();
        jobMap.game.selected = true;
    }



}
