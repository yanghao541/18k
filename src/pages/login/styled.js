import styled from "styled-components"

export const HeaderWrapper = styled.div`
            width: 100%;
            height: 1.2rem;
            line-height: 1.2rem;
            position: relative;
            z-index: 5;
            zoom: 1;
            background:orange;
               
                    .left{
                        float:left;
                        font-size:.7rem;
                        font-weight:800;
                        margin-left:.3rem;
                        margin-right:2.7rem;
                    }
                    p{
                        font-size:.4rem;
                    }
                    .input{
                        margin-left:1rem;
                        margin-top:1rem;
                        
                        .inputText{
                            border: 0;
                            color: #333;
                            font-size: .3rem;
                            width: 90%;
                            background: 0 0;
                            input{
                                border: 0;
                                color: #333;
                                font-size: .3rem;
                                height: .7rem;
                            }
                    }
                }
                .dl{
                        height:1.1rem;
                        line-height:1.1rem;
                        text-align: center;
                        display: block;
                        width: 90%;
                        border-radius: 10px;
                        margin-left: .4rem;
                        background: #eee;
                        color: #666;
                }
                span{
                    margin-left:.4rem;
                    font-size: 14px;
                    font-family: Arial,Helvetica,sans-serif,"Microsoft YaHei";
                    .col-link{
                        font-size: 14px;
                        font-family: Arial,Helvetica,sans-serif,"Microsoft YaHei";
                        color: #1991EB;
                    }
                }
`