import http from "@utils/http"
// 三张图
export const three=()=>
http.get("/app/index.php?r=class%2Findex&type=2")


export const two=(pageId=2)=>
http.get("/api/api/category/index/lingquan-live-new",{
    pageId:pageId,
    pageSize:10,
    entityId:4,
    type:1,
    userId:669231,
    tuserId:669231,
})

export const one=(goodsId)=>
http.get("/api/api/goods/get-goods-detail-img",{
    goodsId:goodsId,
    entityId:4,
    userId:669231,
    tuserId:669231,
})

export const searchdata=(kw)=>
http.get("/app/index.php?r=index/kwarr&kw="+kw+"&token=false")