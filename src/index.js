import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Lesson';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';
import Post from './components/post/post';
import Error from './components/error/error';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contacts' component={Contacts} />
          <Route exact path='/posts' component={Posts} />
          <Route path='/posts/:id' component={Post} />
          <Route path='*' component={Error} />
        </Switch>
      </App>
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
