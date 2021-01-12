import { NavLink, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import router from './router'

function App() {
  let {pathname} = useLocation()
  let matched = useRouteMatch('/ReducerDemo')

  return (
    <div className="app container pt-3">
      {
        matched
        ? (
          <div className="text-right">
            <NavLink to={`codeview?origin=${pathname.substr(1)}`}>
              <button className="btn btn-primary mb-3">查看源码</button>
            </NavLink>
          </div>
        )
        : null
      }
      <Switch>
        {
          router.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
