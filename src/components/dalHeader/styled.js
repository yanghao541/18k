import styled from "styled-components";

export const DetHeaderWrapper =styled.div`
    width:100%;
    background:rgba(255,255,255,0.5);
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
        color:#333;
    }
    .header_c{
        width:1.3rem;
        height:.52rem;
    }
    .header_r{
        width:.28rem;
        height:.28rem;
        position: absolute;
        right: .40rem;
    }
    .iconfont{
        font-size:.4rem;
        color:#333;
    }

`