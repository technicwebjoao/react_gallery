import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import store from './store';
import Main from './components/Main';
import './App.css';

library.add(faThumbsUp, faThumbsDown);

const App = () => (
  <Provider store={store}>
    <Container>
      <Main />
    </Container>
  </Provider>
);

export default App;
