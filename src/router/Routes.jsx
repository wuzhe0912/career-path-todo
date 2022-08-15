import { Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import Catalog from 'views/Catalog';
import Detail from 'views/Detail';

const Routes = () => {
  return (
    <Switch>
      <Route path='/:category/search/:keyword' component={Catalog} />
      <Route path='/:category' component={Catalog} />
      <Route path='/:category/:id' component={Detail} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
};

export default Routes;
