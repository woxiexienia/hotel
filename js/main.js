/**
 * Created by Administrator on 2017/8/27 0027.
 */
require.config({
    shim:{
        "bootstrap":['jquery'],
        "swiper":['jquery'],
        "home":["jquery","swiper"]
    },
    paths: {
        "jquery": "jquery-3.2.1.min",
        "bootstrap":"node_modules/bootstrap/dist/js/bootstrap",
        "swiper":"swiper.min",
        "home":"home"
    }
});
require(['jquery','bootstrap','swiper','home'], function (jquery,bootstrap,swiper,home){
    // some code here
});
