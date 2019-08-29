import styled from "styled-components"

export const TabBarcss=styled.div`
    width:100%;
    height:1rem;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #cc;
    background:#fff;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-conten:space-betwen        
        li{
            width:100%;
            height:100%;  
        }
        a{  font-size:.3rem;
            color:black;
            width:100%;
            height:100%; 
            display:flex;
            justify-content:center;
            flex-direction:colum;
            align-items:center;      
        }
        .active{
            color:#c33;
        }
    }

`
