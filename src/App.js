import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';
import Main from './components/Main';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Container>
      <Main />
    </Container>
  </Provider>
);

export default App;
