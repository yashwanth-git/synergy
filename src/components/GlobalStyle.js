import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    --colorPrimary:#8739F9;
    --colorAccent:#37B9F1;
    --colorGrey:#F2F5F5;
    --colorText:#565360;
    --colorLabel:#908E9B;
    --colorDisabled:#E1DFE9;
    --lengthSm1:0.25rem;
    --lengthSm2:0.375rem;
    --lengthSm3:0.5rem;
    --lengthMd1:1rem;
    --lengthMd2:1.25rem;
    --lengthMd3:1.5rem;
    --lengthLg1:2rem;
    --lengthLg2:3rem;
    --lengthLg3:4rem;
    --font:'Poppins', sans-serif;
}
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    line-height:1;
    font-family:var(--font);
}
img{
    width:100%;
    height:auto;
}
.container{
    max-width:1200px;
    margin:0 auto;
}
`;

export default GlobalStyle;
