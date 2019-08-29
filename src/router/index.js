import {Home,Login,Nian,List,Search,Price} from "@views"

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
        path:"/login",
        component:Login,
        meta:{flag:true},
        name:"登录"
    },
 

]
export const notabBarRoute=[
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

