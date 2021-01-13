import CodeView from '../views/CodeView'
import Home from '../views/Home'
import HookDemo from '../views/HookDemo'
import NotFound from '../views/NotFound'
import ReducerDemo from '../views/ReducerDemo'

const router = [{
  path: '/hookdemo',
  exact: true,
  component: HookDemo
}, {
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