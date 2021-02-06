import axios from 'axios'

const state = {
  events: [],
}

const getters = {
  allEvents: state => state.events,
}

const actions = {
  async fetchEvents ({ commit }) {
    const response = await axios.get(
      'https://localhost:5001/api/event',
    )

    commit('setEvents', response.data)
  },
  async addEvent ({ commit }, form) {
    console.log('================update====================')
          console.log(form)
          console.log('====================================')
    const response = await axios.post(
      'https://localhost:5001/api/event',
      form,
    )

    commit('newEvent', response.data)
  },
  async deleteEvent ({ commit }, id) {
    await axios.delete(`https://localhost:5001/api/Event/${id}`)

    commit('removeEvent', id)
  },
  async filterEvents ({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText,
    )

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/events?_limit=${limit}`,
    )

    commit('setEvents', response.data)
  },
  async updateEvent ({ commit }, id, updEvent) {
     console.log('================update====================')
          console.log(updEvent)
          console.log('====================================')
    const response = await axios.put(
      `https://localhost:5001/api/Event/${id}`,
      updEvent,
    )

    commit('updateEvent', response.data)
  },
}

const mutations = {
  setEvents: (state, events) => (state.events = events),
  newEvent: (state, event) => state.events.unshift(event),
  removeEvent: (state, id) =>
    (state.events = state.events.filter(event => event.id !== id)),
  updateEvent: (state, updEvent) => {
    const index = state.events.findIndex(event => event.id === updEvent.id)
    if (index !== -1) {
      state.events.splice(index, 1, updEvent)
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
