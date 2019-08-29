import styled from "styled-components"


export const HeaderWrapper = styled.div`
    .heander{
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        border-bottom-color: transparent;
        padding: 8px 10px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 120;
        display: block;
        box-sizing: border-box;
        display: flex;
    justify-content: space-between;
        span{
            font-weight: 800;
            font-size: .6rem;           
            display: block;
            color: #fff;
           
            float: left;
        }
        p{
            font-family: Simhei;
            font-size: 17px;
            line-height: 28px;
            color: #fff;
        }
        i{
            line-height: 28px;
            font-size:17px;
            color: #fff;
            font-family: Simhei;


        }
    }
    .Nav{
        ul{
            li{
                box-sizing: border-box;
                margin-top:1rem;
                float: left;
                width: 25%;
                text-align: center;
                line-height: 50px;
                height: 50px;
                font-size: 15px;
    color: #333;
            }
        }
        
    }
`