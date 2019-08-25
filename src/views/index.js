import Loadable from "react-loadable"
import Loading from "@common/loading"

const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Nian=Loadable({
    loader:()=>import("./nian"),
    loading:Loading
})

export {Home,Login,Nian}