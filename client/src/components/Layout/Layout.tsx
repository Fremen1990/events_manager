import styled from "styled-components";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { green, orange } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    primary: green,
    secondary: orange,
    mode: "light",
  },
});

const LayoutStyles = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  overflow: hidden;
`;

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <LayoutStyles>{props.children}</LayoutStyles>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default Layout;
