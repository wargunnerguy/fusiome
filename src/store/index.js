import {createStore} from 'vuex'
import firebase from 'firebase/app'

export const store = createStore({
    state: {
        loadedFusiomes: [
            {
                imageUrl: 'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
                title: 'The Hill',
                description: 'The Hill is a 1965 British-American prison drama film directed by Sidney Lumet, set in an army prison in North Africa at the end of the Second World War. It stars Sean Connery, Harry Andrews, Ian Bannen, Ossie Davis, Ian Hendry, Alfred Lynch, Roy Kinnear and Michael Redgrave.',
                id: '1',
                dateAdded: '2021-03-21',
            },
            {
                imageUrl: 'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg',
                title: 'Project Power Store',
                description: 'When a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a teenage dealer and a local cop must team with an ex-soldier to take down the group responsible for its creation.',
                id: '2',
                dateAdded: '2021-03-20',
            },
            {
                imageUrl: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/87399/88660/san_andreas_poster_regular_style_buy_original_movie_posters_at_starstills__38275.1435245972.jpg?c=2',
                title: 'San Andreas',
                description: 'In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife across the state in order to rescue his daughter. In San Andreas, California is experiencing a statewide earthquake that goes on record as easily the biggest earthquake in history.',
                id: '3',
                dateAdded: '2021-03-27',
            }
        ],
        user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUserUp ({commit}, payload) {
            console.log(payload.email)
            // eslint-disable-next-line no-undef
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid,
                            likedFusiomes: [],
                            seenFusiomes: [],
                            dislikedFusiomes: [],
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }
                )
        },
        signUserIn({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid,
                            likedFusiomes: [],
                            seenFusiomes: [],
                            dislikedFusiomes: [],
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }
                )
        }
    },
    getters: {
        loadedFusiomes(state) {
            return state.loadedFusiomes.sort((fusiomeA, fusiomeB) => {
                return fusiomeA.date > fusiomeB.date
            })
        },
        featuredFusiomes(state, getters) {
            return getters.loadedFusiomes.slice(0, 5)
        },
        loadedFusiome(state) {
            return (fusiomeId) => {
                return state.loadedFusiomes.find((fusiome) => {
                        return fusiome.id === fusiomeId
                    }
                )
            }
        },
        user (state) {
            return state.user
        }
    }
})