import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01a437d3 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _81797070 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _295df9a0 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _22ece220 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _68211ae8 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _145543d4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _09b7256d = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _01a437d3,
    children: [{
      path: "",
      component: _81797070,
      name: "home"
    }, {
      path: "/login",
      component: _295df9a0,
      name: "login"
    }, {
      path: "/register",
      component: _295df9a0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _22ece220,
      name: "profile"
    }, {
      path: "/settings",
      component: _68211ae8,
      name: "settings"
    }, {
      path: "/editor",
      component: _145543d4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _09b7256d,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
