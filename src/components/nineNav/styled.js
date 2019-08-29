import styled from "styled-components";

export const NavWrapper = styled.div`
    width:100%;
    background:#fff;
    border-top :1px solid #ccc;
    overflow-x:auto;
    overflow-y:hidden;
    .div_1{ 
        line-height:100px; 
        text-align:center;
        overflow-x:auto;
        white-space:nowrap;
        overflow-y:hidden;
        height:100px;
            &>div{
                display:inline-block;
                a{
                    margin:0 .3rem;
                    font-size:.3rem
                }
                .active{
                    color:#c33;
                }
            }
           
        }
  
    .Nine_jianxi{
        width:100%;
        height:.1rem;
        background:#f5f5f5;
        border-top:1px solid #f5f5f5;
        border-bottom:1px solid #f5f5f5;
    }
    .Nine_nxtj{
        width:100%;
        height:.5rem;
        background:#fff;
        font-weight: 400;
        line-height: .5rem;
        text-align: center;
        margin-top: .1rem;
        z-index: 0;
        span{
            line-height: .4rem;
            padding: 0 .1rem;
            font-size: .3rem;
            color:#FC436D
        }
    }
    

`