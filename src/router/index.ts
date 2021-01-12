import CodeView from '../views/CodeView'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import ReducerDemo from '../views/ReducerDemo'
const router = [{
  path: '/codeview',
  exact: true,
  component: CodeView
}, {
  path: '/reducerdemo',
  exact: true,
  component: ReducerDemo
}, {
  path: '/',
  exact: true,
  component: Home
}, {
  path: '',
  component: NotFound
}]

export default router