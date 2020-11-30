import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Label from '@/components/Label'
import Classify from '@/components/Classify'
import Zshow from '@/components/Zshow'
import SvgShow from '@/components/SvgShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/label',
      name: 'Label',
      component: Label
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/zshow',
      name: 'Zshow',
      component: Zshow
    },
    {
      path: '/svgshow',
      name: SvgShow,
      component: SvgShow
    }
  ]
})
