const prefer = require('../views/prefer.vue');
const routers = [{
    path: '/prefer/prefer', // 入口
    component: prefer
},
{
    path: '/prefer/prefer/:type', // 肥胖原因的路由
    component: prefer,
    props: true
}];

export default routers;