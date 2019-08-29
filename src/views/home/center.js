import styled from "styled-components"

export const Center=styled.div`
width:100%;
height:100%;
padding:1.6rem  .2rem 1rem .2rem;
overflow-x:auto;
.ant-carousel .slick-slide {
    text-align: center;
    height: 3.2rem;
    line-height: 160px;
    background:#c33;
    overflow: hidden;

    .a{  
        background:url("https://img.alicdn.com/imgextra/i2/2053469401/O1CN01Hku8WQ2JJhy7HXhjx_!!2053469401.jpg")
    }
    .b{
        background:url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01NloWWM2JJhy4lFSbA_!!2053469401.jpg")
    }
    .c{
        background:url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Lis7YT2JJhy2nj2IC_!!2053469401.jpg")
    }
    div{height:100%;
        background:url("https://img.alicdn.com/imgextra/i2/2053469401/O1CN01O731Q12JJhy6sNdlt_!!2053469401.jpg")
    }
  }
  div{
    background:#F6F6F6;
  }
  .tu{      
        display:flex;
        justify-content:space-between;
      div{
        overflow: hidden;border-radius: .1rem;
      }
  }
  .tit{
      margin: .3rem auto .2rem;
      width: 2rem;
      height: .4rem;
      font-size: .3rem;
      font-family: PingFangSC-Medium;
      font-weight: 600;
      color: #333;
      text-align:center;
      line-height: .4rem;
    }

  .u{
    display:flex;    
    justify-content:space-between;
    flex-wrap:wrap;
    li{
      overflow:hidden;
      border-radius: .1rem;
      margin-bottom:.2rem;
      width:3.46rem;
      background:white;
      div{background:white;}
      div:nth-of-type(1){
        img{
          width:3.46rem;
          height:3.46rem;
        }
      }
      div:nth-of-type(2){
        width: 100%;
        height:.34rem;  
        font-size: .25rem;
        font-weight: 500;
        color: #333;
        line-height: .34rem;
        margin: .16rem auto;
        overflow: hidden;
      }
      div:nth-of-type(3){
        border-radius: .06rem;
        width: 1rem;
        padding-left:.1rem;
        margin: 0 .1rem  0 .1rem;
        display: flex;
        color: #FFF;
        background:#ff4f4f;
      }
      div:nth-of-type(4){
        margin-left: .16rem;
        font-weight: 400;
        color: #ff3b32;
        line-height: .28rem;
      }
      div:nth-of-type(5){
        margin: .1rem 0 .3rem .16rem;
        display: flex;
        justify-content: space-between;
        font-size: .3rem;
        font-weight: 400;
        color: #999;
        line-height: .28rem;
      }
    }
  }

`