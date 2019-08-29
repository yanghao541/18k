import styled from "styled-components"

export const Searchcss=styled.div`
background:white;
.box{
    height:.9rem;
    width:100%;
    background:black;
    display:flex;
    div:nth-child(1){
        text-align:center;
        line-height:.8rem;
        height:100%;
        width:.8rem;color:white;
    }
    div:nth-child(3){
        text-align:center;
        line-height:.8rem;
        height:100%;
        width:.9rem;color:white;
    }
    .s_div{
        margin-top:.16rem;
        height:.56rem;
        width:5.6rem; 
        overflow:hidden;
        input{          
            width:5.6rem;
            border:none;
            border-radius: .2rem;
            height:.56rem;
            font-size:.3rem;
            color:black;
            font-weight:400;
            padding-left:.3rem
        }
}

}
li{
    width:100%;
    height:.8rem;
    border-bottom:solid 1px #eee;
    padding-left:.3rem;
    color:black;
    font-size:.28rem;
    font-weight:400;
    line-height:.8rem;
}

   
`