//本文件用来做路由懒加载
import Loadable from "react-loadable";

import Loading from "@common/loading";

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading 
})
const Baoyou = Loadable({
    loader:()=>import("./baoyou"),
    loading:Loading 
})
const Collection = Loadable({
    loader:()=>import("./collection"),
    loading:Loading 
})
const Items = Loadable({
    loader:()=>import("./items"),
    loading:Loading 
})
const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading 
})
const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading 
})
const Details = Loadable({
    loader:()=>import("./details"),
    loading:Loading 
})
const Lingquan = Loadable({
    loader:()=>import("./lingquan"),
    loading:Loading 
})

export {
    Mine,
    Home,
    Items,
    Baoyou,
    Collection,
    Login,
    Details,
    Lingquan
}