import {Home,Nian,List,Search,Price} from "@views"

import {
    Sort,
    Mine,
    Collection,
    List2,
    Login
} from '@pages' 


export const TabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{flag:true},
        name:"首页"
    },
    {
        path:"/nian",
        component:Nian,
        meta:{flag:true,auth:true},
        name:"9.9"
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
export const notabBarRoute=[
    {
        path:'/list',
        component:List2,
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
    },
   {
        path:"/list/:id",
        component:List,
        meta:{flag:false},
        name:"详情"
    },
    {
        path:"/search",
        component:Search,
        meta:{flag:false},
        name:"搜索"
    },
    {
        path:"/price",
        component:Price,
        meta:{flag:false},
        name:"半价"
    },  
]

export const routeConfig=TabBarRoute.concat(notabBarRoute)



