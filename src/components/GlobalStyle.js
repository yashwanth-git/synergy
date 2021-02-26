import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    --colorPrimary:#8739F9;
    --colorAccent:#37B9F1;
    --colorGrey:#F2F5F5;
    --colorText:#565360;
    --colorLabel:#908E9B;
    --colorDisabled:#E1DFE9;
    --colorBg:#ffffff;
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
.App{
    transition:all 450ms ease-in-out;
}
.darkMode{
    --colorAccent:#C651CD;
    --colorGrey:#363636;
    --colorBg:#363636;
    --colorText:rgba(255, 255, 255, 0.96);
    --colorLabel:rgba(255, 255, 255, 0.67);
    --colorDisabled:rgba(255, 255, 255, 0.45);
    transition:all 450ms ease-in-out;
}
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    line-height:1;
    font-family:var(--font);
}
html,body,.App,#root{
    height:100%;
}
img{
    width:100%;
    height:auto;
}
.container{
    max-width:1200px;
    margin:0 auto;
}
.hide{
    display:none;
}
.show{
    display:block;
}
`;

export default GlobalStyle;
