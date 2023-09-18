
function filterXiangtongWeizhi(list, num) {
    var n = num;
    if (!n) {
        n = 20;
    }
    return list.filter((item, i) => {
        if (i > 0 &&
            (Math.abs(list[i].x - list[i - 1].x) + Math.abs(list[i].y - list[i - 1].y)) < n
        ) {

        } else {
            return item;
        }
    })
}
//
// console.time("1")
// // clickPoint(335, 1780)
// // clickPoint(335, 1780)
// // clickPoint(335, 1780)
// // clickPoint(335, 1780)
// // clickPoint(335, 1780)
// // setTimeout(function () {
// //     logi('1212');
// //     clickPoint(435, 1780)
// //     clickPoint(435, 1780)
// //     clickPoint(435, 1780)
// //     clickPoint(435, 1780)
// //     clickPoint(435, 1780)
// // }, 1)
// var touch1 = [
//     {"action": 0, "x": 435, "y": 1780, "pointer": 1, "delay": 20},
//     {"action": 1, "x": 435, "y": 1780, "pointer": 1, "delay": 1},
//     {"action": 0, "x": 435, "y": 1780, "pointer": 1, "delay": 20},
//     {"action": 1, "x": 435, "y": 1780, "pointer": 1, "delay": 1},
//     {"action": 0, "x": 435, "y": 1780, "pointer": 1, "delay": 20},
//     {"action": 1, "x": 435, "y": 1780, "pointer": 1, "delay": 1},
//     {"action": 0, "x": 435, "y": 1780, "pointer": 1, "delay": 20},
//     {"action": 1, "x": 435, "y": 1780, "pointer": 1, "delay": 1},
//     {"action": 0, "x": 435, "y": 1780, "pointer": 1, "delay": 20},
//     {"action": 1, "x": 435, "y": 1780, "pointer": 1, "delay": 1},
// ]
// var touch2 = [
//     {"action": 0, "x": 335, "y": 1780, "pointer": 2, "delay": 20},
//     {"action": 1, "x": 333, "y": 1783, "pointer": 2, "delay": 1},
//     {"action": 0, "x": 335, "y": 1780, "pointer": 2, "delay": 20},
//     {"action": 1, "x": 333, "y": 1783, "pointer": 2, "delay": 1},
//     {"action": 0, "x": 335, "y": 1780, "pointer": 2, "delay": 20},
//     {"action": 1, "x": 333, "y": 1783, "pointer": 2, "delay": 1},
//     {"action": 0, "x": 335, "y": 1780, "pointer": 2, "delay": 20},
//     {"action": 1, "x": 333, "y": 1783, "pointer": 2, "delay": 1},
//     {"action": 0, "x": 335, "y": 1780, "pointer": 2, "delay": 20},
//     {"action": 1, "x": 333, "y": 1783, "pointer": 2, "delay": 1},
// ]
// multiTouch(null, touch2, null, 30000);
// // logd("耗时: " + console.timeEnd(1) + " ms")