import {Home,Login,Nian} from "@views"

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

]


export const routeConfig=TabBarRoute.concat(notabBarRoute)

