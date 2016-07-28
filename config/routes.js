import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from 'containers/app';
import { Home } from 'routes/home';
import { Example } from 'routes/example';
import { Queue } from 'routes/queue';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } />
    <Route path='/example' component={ Example } />
    <Route path='/queue' component={ Queue } />
  </Route>
);
