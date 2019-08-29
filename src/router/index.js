import {Home,Listt,Search,Price} from "@views"

import {
    Mine,
    Sort,
    Login,
    List2,
    Baoyou,
    Details,
    Lingquan
} from '@pages' 


export const TabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{flag:true},
        name:"首页",
        icon:"\ue607",
    },
    {
        path:"/baoyou",
        component:Baoyou,
        meta:{
            flag:true
        },
        name:"9.9包邮",
        icon:"\ue662"
    },

    {
        path:"/sort",
        component:Sort,
        meta:{
            flag:true
        },
       
        name:'分类',
        icon:"\ue7f9",
        
    },
        
        {
            path:"/mine",
            component:Mine,
            meta:{
                flag:true
            },
            icon:"\ue619",
            name:'我的',
        },
        {
            path:'/login',
            component:Login,
            meta:{
                flge:false
            },
            name:"登录",
            icon:"\ue67a",
            
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
        path:"/listt/:id",
        component:Listt,
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

export const routeConfig=TabBarRoute.concat(notabBarRoute)



