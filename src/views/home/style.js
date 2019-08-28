import styled from "styled-components"

export const Tou=styled.div`
    width:100%;
    height:1.6rem;
    position:fixed;
    left:0;
    top:0;
    z-index:1;
    background:#c33;
    div{
        margin-left: .18rem;
        margin-top: .16rem;    
        height:.64rem;
        width:7.12rem;
        border-radius: .32rem;
        overflow: hidden;
        input{
            color: #999;
            line-height: .6rem;
            padding-left: .64rem;
            height:100%;
            width:100%;
        }
    }
    ul{
        width:100%;
        height:.8rem;
        overflow-x: auto;
        white-space: nowrap;
        li{
            display: inline-block;
            width:1rem;
            height:100%;
            line-height: .8rem;
            font-weight: 500;
            color:rgba(255,255,255,.65);
            font-size:.26rem;
            text-align: center;
        }
    }
`