import styled from "styled-components";

export const DalConWrapper = styled.div`
    width:100%;
    background:#fff;
    &>div{
       
    
    .wrapper{
        position:absolute;
        top:0;
        width:100%;
        height:7.5rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .goods_info{
        position:absolute;
        top:7.5rem;
        h1{
            font-size:.3rem;
            font-weight: 400;
            padding:14px 10px 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span{
            width:.72rem;
            height:.32rm;
            color:#fc3f78;
            font-size:.3rem;
            margin:0 5px 0 0;
            padding:0 5px;
            border:1px solid #fc3
            }
        }
    }
    .info_price{
        width:100%;
        height:1.12rem;
        position:absolute;
        top:8.2rem;
        padding:0 .3rem;
        div:nth-child(1),div:nth-child(2){
            display:flex;
            justify-content:space-between;
            align-items:center;
            span{
                color:#fc4d52;
                font-size:.3rem
            }
        }
    }
    .goods_shopShow{
        position:absolute;
        top:9rem;
        .text{
            position:absolute;
            top:.5rem;
            left:.5rem;
            z-index:10;
            color:#fff;
            .qixian{
                font-size:20px;
                position:relative;
                top:-.4rem
            }
            .liji{
                width:.5rem;
                height:1rem;
                text-align:cnter;
                line-height:1rem;
                font-size:.4rem;
                border-left:5px dashed #fff;
                position:relative;
                left:2rem;
                bottom:.5rem;
                padding-left:.1rem
            }
        }
        .goods_desc{
            width:100%;
            height:#888;
            font-size:28px;
            margin:0 .14rem;
            padding:.07rem .1rem .29rem;
            color:#abb;
        }
    }
}
`