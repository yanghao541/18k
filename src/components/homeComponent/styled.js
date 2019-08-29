import styled from "styled-components";

export const HomeWrapper = styled.div`
    width:100%;
    height:7.4rem;
    .info{
        width:100%;
        height:1.2rem;
        color:#333;
        font-size:.3rem;
        margin:.16rem 0 0;
        padding:0 0 0 .15rem;
        background:#fff;
    
        .info_1{
            display:flex;
            align-items:center;
            .info_img{
            width:1.2rem;
            height:1.2rem;
            display: inline-block;
            img{
                width:100%;
                height:100%
            }
        .user_type{
            width:2.16rem;
            height:1.2rem;
            margin:0 0 0 .1rem;
            display: inline-block;
                a{
                    color:#fff !important;
                    font-size:.4rem;
                }
        }
        }
        
        }
        .user_main{
            width: 100%;
            margin: .24rem .1rem;
            .user_me{
                border-radius:.4rem;
                width:6.7rem;
                height:2rem;
                color:#333;
                background:#fff;
                display:flex;
                justify-content:space-around;
                align-items:center;
            }
        }
        .common_card{
            border-radius:.4rem;
            width:6.7rem;
            height:2.6rem;
            background:#fff;
            p{
                width:6.7rem;
                height:.7rem;
                color:#333;
                font-size:.3rem;
                padding:0 0 0 .15rem;
                border-bottom:1px solid #ccc;
                text-align:left;
                line-height:.7rem
            }
            ul{
                width:6.7rem;
                height:1.9rem;
                background:#fff;
                display:flex;
                line-height:.1.9rem;
                justify-content:space-around;
                 border-radius:1.9rem;
                li{
                    align-self:center
                }
            }
        }
    }

`