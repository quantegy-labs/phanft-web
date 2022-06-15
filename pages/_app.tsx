import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ec1f65",
      contrastText: "#fff",
    },
    secondary: {
      main: "#54c6eb",
      contrastText: "#fff",
    },
  },
});

const PhanFTApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.palette.primary.main}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <CssBaseline enableColorScheme />
    </ThemeProvider>
  );
};

export default PhanFTApp;
