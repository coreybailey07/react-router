//import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './example/example.scss';
import './App.css';

import * as cmpt from './example';

function App() {
  return (
    <div className='app'>
      <nav className='nav'>
        <Link className='link' to='/react-router/animate-transitions'>animate-transitions</Link>
        <Link className='link' to='/react-router/basic'>basic</Link>
        <Link className='link' to='/react-router/custom-link'>custom-link</Link>
        <Link className='link disabled' to='/react-router/model-gallery'>model-gallery</Link>
        <Link className='link' to='/react-router/nesting'>nesting</Link>
        <Link className='link' to='/react-router/no-match-40'>no-match-40</Link>
        <Link className='link' to='/react-router/preventing-transitions'>preventing-transitions</Link>
        <Link className='link' to='/react-router/query-parameter'>query-parameter</Link>
        <Link className='link disabled' to='/react-router/recursive-paths'>recursive-paths</Link>
        <Link className='link' to='/react-router/redirects-auth'>redirects-auth</Link>
        <Link className='link' to='/react-router/route-config'>route-config</Link>
        <Link className='link' to='/react-router/sidebar'>sidebar</Link>
        <Link className='link' to='/react-router/static-router-context'>static-router-context</Link>
        <Link className='link' to='/react-router/url-parameter'>url-parameter</Link>
      </nav>
      <hr />
      <main>
        <Switch>
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
