//import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as cmpt from './example';

function App() {
  return (
    <div className='App'>
      <Route exact path='/react-router/animate-transitions' component={cmpt.AnimatedTransitions} />
      <Route exact path='/react-router/basic' component={cmpt.Basic} />
      <Route exact path='/react-router/custom-link' component={cmpt.CustomLink} />
      <Route exact path='/react-router/model-gallery' component={cmpt.ModalGallery} />
      <Route exact path='/react-router/nesting' component={cmpt.Nesting} />
      <Route exact path='/react-router/no-match-40' component={cmpt.NoMatch404} />
      <Route exact path='/react-router/preventing-transitions' component={cmpt.PreventingTransitions} />
      <Route exact path='/react-router/query-parameter' component={cmpt.QueryParameters} />
      <Route exact path='/react-router/recursive-paths' component={cmpt.RecursivePaths} />
      <Route exact path='/react-router/redirects-auth' component={cmpt.RedirectsAuth} />
      <Route exact path='/react-router/route-config' component={cmpt.RouteConfig} />
      <Route exact path='/react-router/sidebar' component={cmpt.Sidebar} />
      <Route exact path='/react-router/static-router-context' component={cmpt.StaticRouterContext} />
      <Route exact path='/react-router/url-parameter' component={cmpt.UrlParameters} />
    </div>
  );
}

export default App;
