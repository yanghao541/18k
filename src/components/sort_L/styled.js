import styled from "styled-components"

export const HeaderWrapper = styled.div`
    position: fixed;
    width: 1.8rem;
    left: 0;
    top: 0;
    height: 86%;
    overflow: hidden;
    overflow-y: auto;
    background: #F4F4F4;
    margin-top:.88rem;
    a{
        line-height: 45px;
        display: block;
        height: 1rem;
        color: #333;
        z-index: 10;
        font-size: 14px;
        position: relative;
        transition: all .4s cubic-bezier(.4,.68,.15,1) 0s;
        -webkit-transition: all .4s cubic-bezier(.4,.68,.15,1) 0s;
        text-align: center;
        overflow: hidden;

    }
    .aa{
        border-left:2px solid red;
        color: #FC3F78;
        background:white;
    }
`
