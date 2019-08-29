import styled from "styled-components";

export const ToggleWrapper = styled.div`
   width:100%;
   height:100%;
   position: relative;
   display:flex;
   justify-content:center;
   align-items:center;
   background:rgba(0,0,0,0.7);
   z-index:11;
    .cent{
        width:6rem;
        height:5rem;
        border-radius:1rem;
        background:#fff;
        font-size:.3rem;
        line-height:3rem;
        text-align:center;
        h1{
            width:100%;
            height:1rem;
            color:#666;
            padding:.1rem 0;
            text-align:center;
            line-height:1rem;
            font-size:.4rem
        }
        p:nth-of-type(1){
            width:100%;
            height:2.1rem;
            background:#ccc;
            padding:.2rem 0;
            font-size:32px;
            text-align:center;
            line-height:2.1rem;
            word-break: normal;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow: hidden;
            color:#333
        }
        p:nth-of-type(2){
            height:.8rem;
            color:#ccc;
            padding:0 0 .1rem;
            font-size:.3rem;
            position:absolute;
            top:5.1rem;
            text-align:center;
        }
        button{
            width:3rem;
            height:.8rem;
            line-height:.8rem;
            text-align:center;
            color:#fff;
            font-size:.3rem;
            background:linear-gradient(to left,#FE9F69 0,#FB85F7 100%);
            border-radius:.2rem;
            outline:none;
            position:relative;
            bottom:.2rem
        }
       
    }
`