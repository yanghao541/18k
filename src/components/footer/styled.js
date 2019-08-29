import styled from "styled-components";


export const FooterWrapper = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    height:1rem;
    background:#fff;
    line-height:center;
    div{
        height:100%;
        display:flex;
        padding-top:.2rem;
        justify-content:space-between;
        border-top:1px solid #ccc;
        button{
            outline:none;
            width:38%;
            height:80%;
            border-radius:.2rem;
            border:1px solid #c33;
            font-size:.3rem;
            text-align:center;
            background:#fff;
        }
        button:nth-of-type(2){
            background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%)
        }
    }



`