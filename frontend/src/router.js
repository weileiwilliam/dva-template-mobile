import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { HomePage } from './routes'
import PropTypes from 'prop-types'

function RouterConfig ({ history }) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  )
}

RouterConfig.propTypes = {
  history: PropTypes.object
}

export default RouterConfig
