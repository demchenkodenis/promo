import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('t') || '',
        user: {},
        errorRegistration: [],
        countErrorRegistr: 0,
        promoCodes: []
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
        errorRegistr(state, errReg) {
            state.errorRegistration = []
            state.errorRegistration.push(errReg)
        },
        countErrReg(state, countErrorRegistr) {
            state.countErrorRegistr = countErrorRegistr
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'https://denisdemchenko.ru/project/promo/api/auth.php', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.t
                        const user = resp.data.lkuid
                        localStorage.setItem('t', token)
                        localStorage.setItem('lkuid', user);
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('t')
                        localStorage.removeItem('lkuid');
                        reject(err)
                    })
            })
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'https://denisdemchenko.ru/project/promo/api/registration.php', data: user, method: 'POST' })
                    .then(resp => {
                        if (resp.data.error.length > 0) {
                            console.log(resp.data.error)
                            commit('errorRegistr', resp.data.error)
                            commit('countErrReg', resp.data.error.length)
                        } else {
                            const token = resp.data.t
                            const user = resp.data.lkuid
                            localStorage.setItem('t', token)
                            localStorage.setItem('lkuid', user);
                            axios.defaults.headers.common['Authorization'] = token
                            commit('auth_success', token, user)
                            resolve(resp)
                        }
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('t')
                localStorage.removeItem('lkuid')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        errorRegistr: state => state.errorRegistration,
        countErrReg: state => state.countErrorRegistr
    }
})