import React from 'react';
import ReactDOM from 'react-dom';
//import 'semantic-ui-css/semantic.min.css'
import TableContextProvider from './store/table-context';
import './index.css';
import App from './App';


ReactDOM.render(
  <TableContextProvider>
    {' '}
    <App />
  </TableContextProvider>,
  document.getElementById('root')
)