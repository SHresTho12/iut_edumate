import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from "@chakra-ui/react";
import { Provider } from "react-redux";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Provider store={store}>
        {" "}
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
