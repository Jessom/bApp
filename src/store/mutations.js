import { SHOW_LOADING, HIDE_LOADING, SET_LOADING_TEXT, SET_TITLE } from './types'

const state = {
	loading: false,
	loadingText: '',
	title: '首页'
}

const mutations = {
	[SHOW_LOADING](state) {
		state.loading = true
	},
	[HIDE_LOADING](state) {
		state.loading = false
	},
	[SET_LOADING_TEXT](state, text) {
		state.loadingText = text
	},
	[SET_TITLE](state, title) {
		state.title = title
	}
}

const getters = {
	getLoadingStatus(state) {
		return state.loading
	}
}

export default {
	state,
	mutations,
	getters
}
