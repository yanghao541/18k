import styled from "styled-components";

export const HeaderWrapper =styled.div`
    width:100%;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    height:.88rem;
    padding:.08rem .1rem;
    position:fixed;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100;
    .header_1{
        position: absolute;
        left: .30rem;
        height: .28rem;
        width: .28rem;
        display: block;
        color:#fff;
        font-size:.4rem;
        line-height:.28rem
    }
    .header_c{
        width:1.3rem;
        height:.52rem;
        img{
            width:100%;
            height:100%
        }
    }
    .header_r{
        width:.28rem;
        height:.28rem;
        position: absolute;
        right: .40rem;
    }
    .iconfont{
        font-size:.4rem;
        color:#fff;
    }

`