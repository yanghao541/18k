import {Home,Login,Nian,List} from "@views"

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
        name:"登录"
    },
]


export const routeConfig=TabBarRoute.concat(notabBarRoute)

