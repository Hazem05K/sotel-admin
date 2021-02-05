import axios from 'axios'

const state = {
  users: [],
}

const getters = {
  allUsers: state => state.users,
}

const actions = {
  async fetchUsers ({ commit }) {
    const response = await axios.get(
      'https://localhost:5001/api/user/all-user',
    )

    commit('setUsers', response.data)
  },
  async addUser ({ commit }, form) {
    const response = await axios.post(
      'https://localhost:5001/api/Authenticate/register',
      form,
    )

    commit('newUser', response.data)
  },
  async deleteUser ({ commit }, id) {
    await axios.post(`https://localhost:5001/api/User/delete/${id}`)

    commit('removeUser', id)
  },
  async filterUsers ({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText,
    )

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
    )

    commit('setUsers', response.data)
  },
  async updateUser ({ commit }, id, updUser) {
    const response = await axios.put(
      `https://localhost:5001/api/User/${id}`,
      updUser,
    )

    console.log(response.data)

    commit('updateUser', response.data)
  },
}

const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, todo) => state.users.unshift(todo),
  removeUser: (state, id) =>
    (state.users = state.users.filter(todo => todo.id !== id)),
  updateUser: (state, updUser) => {
    const index = state.users.findIndex(todo => todo.id === updUser.id)
    if (index !== -1) {
      state.users.splice(index, 1, updUser)
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}

 //       .get('https://localhost:5001/api/user/all-user')

 //       axios.post('https://localhost:5001/api/Authenticate/register', formData, {
