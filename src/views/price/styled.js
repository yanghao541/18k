import styled from "styled-components"

export const Pricecss=styled.div`
.head{
      background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
.head-1{
    width:100%;
    height:.9rem;
    border-bottom:none;
    display:flex;
    div:nth-of-type(1){
        height:100%;
        width:.9rem;
        line-height:.9rem;
        text-align:center;
        color:white
    }
    div:nth-of-type(2){
        flex:1;
        height:100%;
        line-height:.9rem;
        text-align:center;
        img{
            margin: .2rem 0 0 1.7rem;
            width:2rem;
            height:.56rem;
            line-height:.9rem;
            text-align:center;
        }
    }
}
.head-2{
    height:1rem;width:100%;
    
}

`

