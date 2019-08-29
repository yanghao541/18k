import styled from 'styled-components'

export const HeaderWrapper = styled.div`

    width:100%;
    height:.88rem;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    left:0;
    top:0;
    position:fixed;

    display:flex;

    .header_l{
        font-size:.6rem;
        font-weight:1000;
        width:1rem;
        line-height:.88rem;
        text-align: center;
    }
    .header_r{
        line-height: .88rem;
        input{
            background-color: #fff;
            border-radius: 5px;
            min-width: 50%;
            height:.6rem;
            border: 0;
            line-height:.6rem;
            width: 6rem;
            font-size: .25rem;
            ::-webkit-input-placeholder {/*Chrome/Safari*/
                color:#deacac;
                }
                text-indent:1em; 
        }
    }   
`