import dva from 'dva'
import { createBrowserHistory } from 'history'
import createLoading from 'dva-loading'
import 'normalize.css'
import router from './router'
import homepage from './models/homepage'

let history = createBrowserHistory()

// 1. Initialize
const app = dva({
  history
})

// 2. Plugins
app.use(createLoading())

// 3. Model
app.model(homepage)

// 4. Router
app.router(router)

// 5. Start
app.start('#root')
