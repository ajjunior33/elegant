import { createGlobalStyle } from "styled-components";
import { Theme } from './Variables';
export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}
body{
    background-color:#F0F2FA;
    -webkit-font-smoothing:antialiased;
}
body, input, button{
    font-size:15px;    
    font-family: 'Inter', sans-serif;
    color:${Theme.default.title};
}

button{
    cursor:pointer;
}
`;
