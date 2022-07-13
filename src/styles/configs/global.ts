import { createGlobalStyle } from 'styled-components';
import { pxToRem } from '../helpers/pxtorem';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-500);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${colors.grey600};
  color: ${colors.grey100};
  -webkit-font-smoothing: antialiased;
}

html {
  font-size: 16px;
}

h1{
  font-size: ${pxToRem(18)};
}

body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`;