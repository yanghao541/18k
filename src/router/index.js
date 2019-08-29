import {
    Home,
    Freeshipping,
    Sort,
    Mine,
    Collection,
    List,
    Login
} from '@pages' 

export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:'首页',
        icon:"\ue64a"
    },
    {
        path:"/freeshipping",
        component:Freeshipping,
        meta:{
            flag:true
        },
        name:'9块9',
        icon:"\ue6bf"
    },
    {
        path:"/sort",
        component:Sort,
        meta:{
            flag:true
        },
        name:'分类',
        icon:"\ue7f9"
    },
    {
        path:"/collection",
        component:Collection,
        meta:{
            flag:true
        },
        name:'收藏',
        icon:"\ue60f"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true
        },
        name:'我的',
        icon:"\ue610"
    },
  
]

export const noTabBarRoute = [
    {
        path:'/list',
        component:List,
        meta:{
            flge:false
        },
        name:"列表"
    },
    {
        path:'/login',
        component:Login,
        meta:{
            flge:false
        },
        name:"登录"
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)