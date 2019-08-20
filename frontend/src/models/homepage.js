import { login } from '../services/service'

export default {
  namespace: 'homepage',

  state: {

  },

  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/') {
        }
      })
    }
  },

  effects: {
    * login ({ payload, callback }, { call }) {
      try {
        let res = yield call(login, payload)
        callback && callback(res)
      } catch (error) {
        console.log(error.error)
      }
    }
  },

  reducers: {
    updateData (state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
