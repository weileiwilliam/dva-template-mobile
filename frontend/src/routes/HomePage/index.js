import React, { Component } from 'react'
import styles from './index.scss'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import PropTypes from 'prop-types'
import { CustomeItem } from '../../components'
import { Popover, NavBar, Icon } from 'antd-mobile'
const Item = Popover.Item
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className='am-icon am-icon-xs' alt='' />
@connect(state => ({
  loading: state.loading,
  project: state.project
}))

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true,
      selected: ''
    }
  }
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value
    })
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible
    })
  };

  render () {
    const { dispatch } = this.props
    return (<div className={styles.container}>
      <div className={styles.fontSet}>My dva template</div>
      <CustomeItem />
      <div>
        <NavBar
          mode='light'
          rightContent={
            <Popover mask
              overlayClassName='fortest'
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key='4' value='scan' icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed='logId'>Scan</Item>),
                (<Item key='5' value='special' icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                (<Item key='6' value='button ct' icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>)
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0]
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center'
              }}
              >
                <Icon type='ellipsis' />
              </div>
            </Popover>
          }
        >
        NavBar
        </NavBar>
      </div>
    </div>)
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func
}

export default withRouter(HomePage)
