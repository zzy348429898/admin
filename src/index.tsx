import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import AdminRouter from './routers/index';
import rootReducer from './redux/rootReducer'


const store = createStore(rootReducer, applyMiddleware(logger));

ReactDom.render(
  <AppContainer>
    <Provider store={store}>
      <AdminRouter></AdminRouter>
    </Provider>
  </AppContainer>
  ,
  document.getElementById('app'));