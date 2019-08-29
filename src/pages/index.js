//路由懒加载
import Loadable from 'react-loadable';
import Loading from '../common/loading';

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
const List2 = Loadable({
    loader:()=>import("./list2"),
    loading:Loading
})

const Baoyou = Loadable({
    loader:()=>import("./baoyou"),
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
    Sort,
    Login,
    List2,
    Baoyou,
    Details,
    Lingquan
}
