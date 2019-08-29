//本文件是路由的配置
import {
    Mine,
    Home,
    Items,
    Baoyou,
    Collection,
    Login,
    Details,
    Lingquan
} from "@pages";


export const tabBarRoute =[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue607"
    },
    {
        path:"/baoyou",
        component:Baoyou,
        meta:{
            flag:true
        },
        name:"9.9包邮",
        icon:"\ue606"
    },
    {
        path:"/items",
        component:Items,
        meta:{
            flag:true
        },
        name:"分类",
        icon:"\ue7f9"
    },
    {
        path:"/collection",
        component:Collection,
        meta:{
            flag:true
        },
        name:"收藏",
        icon:"\ue637"  //这样转换是转换成了 unicode 值
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            auth:true
        },
        name:"我的",
        icon:"\ue619"
    }
]

export const noTabBarRoute =[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登录",
    },
    {
        path:"/details/:index",
        component:Details,
        meta:{
            flag:false
        },
        name:"详情",
    },
    {
        path:"/lingquan",
        component:Lingquan,
        meta:{
            flag:false
        },
        name:"领券",
    }
]

export const routeConfig =tabBarRoute.concat(noTabBarRoute)