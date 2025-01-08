import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap');

    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden; /* Optional: Prevents horizontal scroll */
}

    html{
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    body{
        font-family: 'Work Sans', sans-serif;
        letter-spacing: -0.25px;
        font-size: 14px;
        line-height: 1.125;
        overflow-x: hidden;
        background: linear-gradient(to bottom, #efefef 0px, #efefef 300px, #fff 600px, #fff 100%);

        @media(max-width: 1100px){
            * section>img, * ::after, * ::before, svg{
              transform: scale(0.5) !important;
              background-size: 50% !important;
            }
        }
    }
    main{
      margin: 0 auto;
      max-width: 1430px;
    }
    
    section{
        position: relative;
    }

    .flex-right {
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    main {
      z-index: 1;
      position: relative;
    }

    // for code snippets
    .code-yellow{color: #ddad25}
    .code-pink{color: #dd79b8}
    .code-turquoise{color: #00dfa3}
    .code-blue{color: #0049ef}
    
    // for color subtexts
    & .pink{color: #ff0e9c}
    & .blue{color: #0049ef}
    & .turquoise{color: #00dfa3}
    

    .cls-1, .cls-2 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
        fill-rule: evenodd;
      }

      .cls-1 {
        stroke: #0049ef;
      }

      .cls-2 {
        stroke: #ff0e9c;
      }

      svg {
      
        & .cls-1,& .cls-2 {
          stroke-dasharray: 10000;
          stroke-dashoffset: 0;
          animation: dash 2s linear;
        }
        
        @keyframes dash {
          from {
            stroke-dashoffset: 10000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      }

`;

export const dottedLine = `
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23dcdee2' stroke-width='4' stroke-dasharray='2%2c 18' stroke-dashoffset='7' stroke-linecap='square'/%3e%3c/svg%3e");
    height: 2px;
    width: 120px;
    border: none;
`;

export const illustration = `
  position: absolute;
  top: 0;
  right: 0;
`;

export default GlobalStyle;
