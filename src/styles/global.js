import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
   * {
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font: 14px sans-serif;
        background: #000046;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    #root {
        margin: 0 auto;
        max-width: 330px;
        width: 100%;
        padding: 40px 0;
    }
`;