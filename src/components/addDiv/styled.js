import styled from "styled-components"

export const AddShoppingWrapper = styled.div`
   width:100%;
   height:100%;
   position: relative;
   display:flex;
   justify-content:center;
   align-items:center;
   background:rgba(0,0,0,0.7);
   z-index:11;
    &>div{
        width:100%;
        height:80%;
        bottom:-2.3rem;
        position: relative;
        z-index:11;
        background:#fff;
        position:relative;
        transition: all 2s ease-out;
   .header{
       width:100%;
       height:1.6rem;
       color:#333;
       font-size:.3rem;
       padding:0 0 0 2rem;
       position:absolute;
       top:0;
        }
       p:nth-of-type(1){
           width:.4rem;
           height:.8rem;
           color:#e4393c;
           font-size:.3rem;
           line-height:.8rem;
       }
       p:nth-of-type(2){
           height:.32rem;
           color:#333;
           padding:0 10px 0 0;
       }
       .cha{
           width:.3rem;
           height:.3rem;
           color:#ccc;
           font-size:.3rem;
           text-align:center;
           line-height:.3rem;
           position:absolute;
           right:10px;
           top:10px;
           display:inline-block;
       }
       .imgCom{
            width:1.8rem;
            height:1.8rem;
            position:absolute;
            top:-.2rem;
            left:.2rem
            img{
                width:100%;
                height:100%
            }
        }
        .delicise{
            width:100%;
            height:.8rem;
            font-size:.3rem;
            line-height:.8rem;
            text-align:left;
            padding:0 .2rem;
            position:absolute;
            top:1.6rem;
            color:#999;
        }
        .goods_info{
            width:100%;
            height:1.6rem;
            margin:0 0 3px;
            position:absolute;
            top:2.4rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            span:nth-child(1){
                width:4rem;
                height:.6rem;
                color:#fff;
                font-size:.3rem;
                line-height:.6rem;
                text-align:left;
                border-radius:10px;
                margin:0 0 10px 10px ;
                padding: 0 10px ;
                display: inline-block;
                background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
            }
            span:nth-child(2){
                width:3.4rem;
                color:#333;
                font-size:22x;
                background:#ccc;
                border-radius:10px;
                margin:0 0 10px 10px ;
                padding: 0 10px ;
                display: inline-block;
            }
        }
        .Num_Add{
                width:100%;
                height:.9rem;
                color:#666;
                font-size:.3rm;
                padding: 0 10px 13px;
                position:absolute;
                top:4rem;
                p{
                    width:100%;
                    height:100%;
                    color:#ccc;
                    font-size:.3rem;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    span{
                        display:flex;
                        align-items:center;
                        .add,.reducer{
                            width:.5rem;
                            height:.5rem;
                            background:#ccc;
                            color:#fff;
                            text-align:center;
                            line-height:.5rem;
                            display: inline-block;
                            font-size:.3rem;
                            outline:none;
                            border:none
                        }
                        input{
                            border:none;
                            border-top:1px solid #ccc;
                            border-bottom:1px solid #ccc;
                            outline:none;
                            width:1rem;
                            height:.5rem;
                            font-size:.3rem;
                            line-height:.5rem;
                            text-align:center    
                        }
                    }
                }
            }
            .lipin{
                width:100%;
                height:.8rem;
                font-size:.3rem;
                line-height:.8rem;
                text-align:left;
                padding:0 .2rem;
                position:absolute;
                top:4.8rem;
                color:#999;
            }
            .shop_footer{
                width:100%;
                height:1rem;
                color:#fff;
                font-size:.4rem;
                text-align:center;
                line-height:1rem;
                border:none;
                position:absolute;
                bottom:0;
                background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%)
            }
    }
`