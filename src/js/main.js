/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

var jobMap = {
    isGO: true,
    game: {
        xiaoMai: {
            done: false,

        },
        banQu: {
            done: false,

        },
        caiQu: {
            done: false,

        },
        done: false,
        selected: false,
    }
}

function stayGo() {
    jobMap.isGO = false;
}

function GO() {
    jobMap.isGO = true;
}

function main() {
    //开始再这里编写代码了！！
    // toast("Hello World");
    // var name = readConfigString("name");
    // logd("姓名: " + name);
    // logd("年龄: " + readConfigString("age"));
    // logd("听音乐: " + readConfigString("music"));
    // logd("是不是一年级: " + readConfigString("one"));
    // logd("备注: " + readConfigString("mark"));
    // logd("jobTaskTag..." + readConfigString("jobTaskTag"));
    //如果自动化服务正常
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logd("开始执行脚本...")
    initImg();
    sleep(1000);
    // shopping();
    // logi(jobMap.game.done+ '333')
    while (true) {
        if (isScriptExit()) {
            break;
        }
        if (!jobMap.isGO) {
            logi('退出主循环');
            break;
        }
        logi('主循环再跑~~~')
        findCurrentPage();
        sleep(5000);
    }
    // if (!netcardProcessor()) {
    //     return;
    // }
    // home();
}

// function netcardProcessor() {
//     logd("开始进行卡密验证")
//     // 官方自带的卡密系统
//     // appId 和 appSecret的值 请到 http://uc.ieasyclick.com/ 进行注册后提卡
//     let appId = "";
//     let appSecret = "";
//     let cardNo = readConfigString("cardNo")
//     if (cardNo == null || cardNo == undefined || cardNo.length <= 0) {
//         toast("请输入卡密")
//         loge("请输入卡密")
//         exit()
//         return false;
//     }
//     let inited = ecNetCard.netCardInit(appId, appSecret)
//     if (!inited) {
//         toast("初始化卡密失败")
//         exit();
//         return false;
//     }
//     let bind = ecNetCard.netCardBind(cardNo)
//     let bindResult = false;
//     if (bind != null && bind != undefined && bind["code"] == 0) {
//         logd("卡密绑定成功")
//         let leftDays = bind['data']['leftDays'] + "天";
//         logd("剩余时间：" + leftDays);
//         logd("激活时间：" + bind['data']['startTime'])
//         logd("过期时间：" + bind['data']['expireTime'])
//         bindResult = true;
//         toast("卡密剩余时间:" + leftDays)
//     } else {
//         if (bind == null || bind == undefined) {
//             loge("卡密绑定失败,无返回值 ")
//             let msg = "卡密绑定失败,无返回值"
//             loge(msg)
//             toast(msg)
//         } else {
//             let msg = "卡密绑定失败: " + bind["msg"]
//             loge(msg)
//             toast(msg)
//         }
//     }
//     return bindResult;
// }
function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

function initImg () {

    //action_timeout 找图找色动作的最大时间，超时后会自动返回避免阻塞
    // auto_click_request_dialog 是否自动点击截屏授权对话框，默认是true，自动点击
    // image.setInitParam({"action_timeout":1000});
    image.setInitParam(
        {
            "action_timeout":1000,
            "auto_click_request_dialog":false
        }
    );
    // image.setFindColorImageMode(2);
    let request = image.requestScreenCapture(10000,0);
    if (!request) {
        request = image.requestScreenCapture(10000,0);
    }
    logd("申请截图结果... "+request)
    if(!request){
        loge("申请截图权限失败,检查是否开启后台弹出,悬浮框等权限")
        exit()
    }
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    sleep(1000)
}
main();
