import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    height: 100%;
    background: #f3f5f7;
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }

  #root,
  #page {
    height: 100%;
  }

  *:focus {
    outline: none;
  }

  /* Reset and base styles  */
  * {
    padding: 0;
    margin: 0;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Links */

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Common */

  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type="submit"] {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;

export default GlobalStyle;
