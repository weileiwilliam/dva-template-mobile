import React, { Component } from 'react'
import styles from './index.scss'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import PropTypes from 'prop-types'
import { CustomeItem } from '../../components'

@connect(state => ({
  loading: state.loading,
  project: state.project
}))

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { dispatch } = this.props
    return (<div className={styles.container}>My dva template<CustomeItem /></div>)
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func
}

export default withRouter(HomePage)
