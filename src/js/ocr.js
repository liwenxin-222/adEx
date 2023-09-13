function mainOcr() {

    let mlkit = {
        "type": "mlkit"
    }

    let inited = ocr.initOcr(mlkit)
    logd("初始化结果 -" + inited);
    if (!inited) {
        loge("error : " + ocr.getErrorMsg());
        exit();
    }
}

