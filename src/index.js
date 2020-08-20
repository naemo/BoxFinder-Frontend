import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"NanumSquareRound", serif'
    },
});

ReactDOM.render(<MuiThemeProvider theme={theme}> <App /> </MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
