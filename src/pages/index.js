//路由懒加载
import Loadable from 'react-loadable';
import Loading from '../common/loading';


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
const List2 = Loadable({
    loader:()=>import("./list2"),
    loading:Loading
})



export {

    Mine,
    Sort,
    Login,
    Freeshipping,
    Collection,
    List2
}
