import styled from "styled-components"
export const HeaderWrapper = styled.div`
        padding-bottom: 44px;
        display: block;
        max-width: 750px;
        text-align: left;
        margin: auto;
        overflow: hidden;
        width:100%;
        background:orange;
        border-radius:0 0 40px 40px;
            .left{
                width: 100%;
                height: 66px;
                box-sizing: border-box;
                padding-left: 15px;
                position: relative;
                z-index: 1;
                zoom: 1;
                margin-top: 16px;
                float:left;
                margin-right:.2rem;
                img{
                    height: 1.3rem;
                    width: 1.3rem;
                    border-radius: 50%;
                    box-sizing: border-box;
                    float: left;
                    margin-right:.2rem;
                }
                span{
                    display:block;
                    float: left;
                    color: #fff;
                    line-height: 1.3rem;
                    font-weight: 500;
                    font-size: 20px;
                    font-family: PingFangSC-Medium;
                }
                
            }
            .right{
                margin-top: -1.3rem;
                float:right;
                margin-right:.2rem;
              
            }
            .user_me{
                height: 2rem;
                position: absolute;
                width: 6.9rem;
                background: #fff;
                /* text-align: center; */
                margin: 0 auto;
                margin-top: 2rem;
                margin-left: .3rem;
                display: flex;
                justify-content: space-around;
                border-radius: 10px;
                div{
                    margin-top: .5rem;
                    font-weight: 300;
                    color: #666;
                    float: left;
                    text-align: center;
                    img{
                        width: 34px;
                        height: 34px;
                    }
                }
               }
               .centent{
                background: #fff;
                box-shadow: 0 0 6px -1px rgba(0,0,0,.09);
                border-radius: 6px;
                margin-top: 15px;
                position: absolute;
                top: 4rem;
                width: 6.9rem;
                height: 2.7rem;
                /* text-align: center; */
                margin-left: .3rem;
                p{
                    height: 35px;
                    border-bottom: 1px solid #EEE;
                    line-height: 35px;
                    padding-left: 15px;
                    box-sizing: border-box;
                    font-size: 14px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    color: #333;
                }
                ul{
                    li{
                        margin-top: .19rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: 67px;
                        width: 25%;
                        float:left;
                        img{
                            width: .57rem;
                            height: .57rem;
                            display: block;
                        }
                        span{
                            width: 54px;
                            height: 18px;
                            font-size: 13px;
                            font-family: PingFangSC-Light;
                            font-weight: 300;
                            color: #666;
                            line-height: 18px;
                            display: block;
                            margin-top: 6px;
                        }
                    }
                }
               }

`