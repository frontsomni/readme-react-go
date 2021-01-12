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
          <div className="text-right mb-3">
            <a href="https://readme.codermore.com/2021/01/11/%E5%89%8D%E7%AB%AF%E5%8F%A3%E8%A2%8B%E5%B0%8F%E5%86%8C-%E7%AC%AC36%E6%9C%9F/">
              <button className="btn btn-primary mr-3">教程详情</button>
            </a>
            <NavLink to={`codeview?origin=${pathname.substr(1)}`}>
              <button className="btn btn-primary">查看源码</button>
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
