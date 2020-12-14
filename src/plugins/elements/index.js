import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/packages/theme-chalk/lib/index.css'
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Link,
  Notification,
  Loading
} from 'element-ui'

const elements = [Button, Card, Form, FormItem, Input, Select, Option, Link, Loading]

Vue.prototype.$notify = Notification

locale.use(lang)
// import ElementUI from 'element-ui'
// Vue.use(ElementUI, { locale })

elements.forEach(el => Vue.use(el, { locale }))
