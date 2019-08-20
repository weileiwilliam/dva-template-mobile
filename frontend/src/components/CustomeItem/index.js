import React, { Component } from 'react'
import styles from './index.scss'

class CustomeItem extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className={styles.container} > I'm CustomeItem</div>)
  }
}

export default CustomeItem
