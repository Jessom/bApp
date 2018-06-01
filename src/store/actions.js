import * as types from './types'

export default {
	showLoading: ({commit}) => {
		commit(types.SHOW_LOADING)
	},
	hideLoading: ({commit}) => {
		commit(types.HIDE_LOADING)
	},
	setTitle: ({commit}) => {
		commit(types.SET_TITLE)
	}
}
