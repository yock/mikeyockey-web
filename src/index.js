import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { polyfill } from 'es6-promise'
import { fetch } from 'isomorphic-fetch';

import LatestPost from './components/LatestPost';
import Reducers from './reducers';

polyfill();
fetch('http://localhost/posts')
  .then(response => response.json())
  .then((posts) => {
    const store = createStore(Reducers, { posts })

    const App = () => {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={LatestPost}/>
            </div>
          </BrowserRouter>
        </Provider>
      )
    }
    render(<App />, document.querySelector('#container'));
  });
