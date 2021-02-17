import CodeView from '../views/CodeView'
import Home from '../views/Home'
import HookDemo from '../views/HookDemo'
import NotFound from '../views/NotFound'
import ReducerDemo from '../views/ReducerDemo'
import QrFollow from '../views/QrFollow'
import RandomId from '../views/RandomId'
import Download from '../views/Download'

const router = [{
  path: '/download',
  exact: true,
  component: Download
}, {
  path: '/randomid',
  exact: true,
  component: RandomId
}, {
  path: '/qrfollow',
  exact: true,
  component: QrFollow
}, {
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