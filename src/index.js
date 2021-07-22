import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Message';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
const myName = 'Anna';

ReactDOM.render(
  <React.StrictMode>
    <App name={myName} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

ReactDOM.render(
  <React.StrictMode>
    <Message />
  </React.StrictMode>,
  document.getElementById('plain-text')
);


reportWebVitals();
const MessageText = 'This is the text to be rendered';

ReactDOM.render(
  <React.StrictMode>
    <Message name={MessageText} />
  </React.StrictMode>,
  document.getElementById("plain-text")
);

reportWebVitals();

ReactDOM.render(
  <React.StrictMode>
    <Message />
  </React.StrictMode>,
  document.getElementById('App-header')
);


reportWebVitals();
const MessageInHeader = 'This is the text to be rendered in App';

ReactDOM.render(
  <React.StrictMode>
    <Message text={MessageInHeader} />
  </React.StrictMode>,
  document.getElementById("App-header")
);

reportWebVitals();