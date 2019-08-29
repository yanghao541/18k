import Loadable from "react-loadable"
import Loading from "@common/loading"

const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})


const Nian=Loadable({
    loader:()=>import("./nian"),
    loading:Loading
})

const List=Loadable({
    loader:()=>import("./list"),
    loading:Loading
})

const Search=Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
const Price=Loadable({
    loader:()=>import("./price"),
    loading:Loading
})
export {Home,Nian,List,Search,Price}