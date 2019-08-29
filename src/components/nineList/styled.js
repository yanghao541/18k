import styled from "styled-components";

export const NineListWrapper = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    ul{
        width:100%;
    li{
        width:3.75rem;
        height:5.76rem;
        background:#fff;
        border-left:1px solid #ccc;
        border-bottom:1px solid #ccc;
        display:inline-block
        .Nine_list{
            width:100%;
            height:100%;
            margin:0 2.5px 5px 0;
            padding:0 5px 0 0 ;
            .NIne_img{
                width:100%;
                height:3.75rem;
                img{
                    width:100%;
                    height:100%
                }
            }
            .cont{
                width:100%;
                height:.96rem;
                margin: 0 .1rem;
                padding:0 0 .13rem;
                .cont_bt{
                    width:100%;
                    height:.3rem;
                    color:red;
                    font-size:.3rem 
                }
                .cont_price{
                    width:100%;
                    height:.7rem;
                    color:#888;
                    padding:5px 10px 10px 0px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color:12px;
                    span{
                        color:#ff2b22;
                        font-size:.3rem
                    }
                }
                .cont_shouhou{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color:#ff2b22;
                    padding:5px 10px 10px 0px;
                    .cont_shprice{
                        span{
                            font-size:.4rem
                        }
                    }
                    .cont_quan{
                        width:1.2rem;
                        height:.44rem;
                        background:#fff;
                        border: 1px solid #FC4D52;
                        padding:2px 0;
                        border-radius:.15rem;
                        line-height:.44rem;
                        text-align:center
                    }
                }
            }
        }
    }
}
`