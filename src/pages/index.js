//路由懒加载
import Loadable from 'react-loadable';
import Loading from '../common/loading';

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
const Freeshipping = Loadable({
    loader:()=>import("./freeshipping"),
    loading:Loading
})
const Sort = Loadable({
    loader:()=>import("./sort"),
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
const Collection = Loadable({
    loader:()=>import("./collection"),
    loading:Loading
})
const List = Loadable({
    loader:()=>import("./list"),
    loading:Loading
})



export {
    Home,
    Mine,
    Sort,
    Login,
    Freeshipping,
    Collection,
    List
}
