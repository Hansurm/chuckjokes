import axios from 'axios'

const state = {
    jokes: [],
    favourites: []
}

const getters = {
    allJokes: (state) => state.jokes,
    allFavourites: (state) => state.favourites
}

const actions = {
    async fetchJokes({ commit }, payload) {
        let url = 'https://api.chucknorris.io/jokes/search?query=' + payload
        let min = Math.ceil(1)
        let max = Math.floor(11)
        let random = Math.floor(Math.random() * (max - min) + min)
        
        const response = await axios.get(url)
        const shuffled = response.data.result.sort(() => 0.5 - Math.random())
        commit('setJokes', shuffled.slice(0, random))
    },
    
    async favouriteJoke({commit}, payload) {
        const key = payload.key
        commit('addFavourite',  {
            payload,
            id: key
        })
    }
}

const mutations = {
    setJokes: (state, jokes) => (state.jokes = jokes),
    addFavourite: (state, payload) => (state.favourites.push(payload))
}

export default {
    state,
    getters,
    actions,
    mutations
}