import {createStore} from 'vuex'
import firebase from 'firebase/app'

export const store = createStore({
    state() {
        return {
            loadedFusiomes: [
                {
                    imageUrl: 'https://d3nuqriibqh3vw.cloudfront.net/mcd-cossette_partyfries_aotw.jpg',
                    title: 'Burger King',
                    description: 'I would like to get more visits to my webpage "kratosfitness.ee" and sell more products. Also to promote my product positive sides and raise peoples knowledge why stainless steel shaker\n' +
                        '\n' +
                        'is better than the plastic one. For example, if you leave your protein shake to the shaker for a few days, then you don\'t have to throw the shaker away, because it smells like a new after wash. Stailess steel surface don\'t absorb smell and is odor resistant, that\'s why food industries use stainless steel equipment.',
                    brand_description: 'Kratos fitness is a brand that does bla bla bla',
                    looking_for: 'For example, if you leave your protein shake to the shaker for a few days, then you don\'t have to throw the shaker away, because it smells like a new after wash. Stailess steel surface don\'t absorb smell and is odor resistant, that\'s why food industries use stainless steel equipment.\n' +
                        '\n' +
                        'Make a video, story or vlog about my shaker and promote positive aspects like, extra container, possibility to use stainless steel shaker when would have thrown away your plastic shaker. you\n' +
                        '\n' +
                        'Content creator should be passionate about sport, hiking, active lifestyle',
                    what_to_do: 'Promote positive aspects',
                    requested_content: 'One off' +
                        '\n' +
                        '1x Instagram story by December 31, 2021',
                    required_hashtags: '#kratosfitness' + '\t' +'#reklaam' + '\t' + '#fusiomeDeals',
                    rewards: {
                        product_reward: 'Kratos Stainless steel shaker',
                        monetary_reward: null
                    },
                    id: '4',
                    dateAdded: '2021-12-06',
                    credits: 16,

                },
                {
                    imageUrl: 'https://e-ope.khk.ee/ek/2013/meedia_ja_mojutamine/meediazanrid/rademar.jpg',
                    title: 'Rademar',
                    description: 'The Hill is a 1965 British-American prison drama film directed by Sidney Lumet, set in an army prison in North Africa at the end of the Second World War. It stars Sean Connery, Harry Andrews, Ian Bannen, Ossie Davis, Ian Hendry, Alfred Lynch, Roy Kinnear and Michael Redgrave.',
                    brand_description: '',
                    looking_for: '',
                    what_to_do: '',
                    requested_content: '',
                    required_hashtags: '',
                    rewards: {
                        product_reward: null,
                        monetary_reward: null,
                    },
                    id: '1',
                    dateAdded: '2021-03-21',
                    credits: 2
                },
                {
                    imageUrl: 'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg',
                    title: 'Project Power Store',
                    description: 'When a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a teenage dealer and a local cop must team with an ex-soldier to take down the group responsible for its creation.',
                    brand_description: '',
                    looking_for: '',
                    what_to_do: '',
                    requested_content: '',
                    required_hashtags: '',
                    rewards: {
                        product_reward: null,
                        monetary_reward: null,
                    },
                    id: '2',
                    dateAdded: '2021-03-20',
                    credits: 28
                },
                {
                    imageUrl: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/87399/88660/san_andreas_poster_regular_style_buy_original_movie_posters_at_starstills__38275.1435245972.jpg?c=2',
                    title: 'San Andreas',
                    description: 'In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife across the state in order to rescue his daughter. In San Andreas, California is experiencing a statewide earthquake that goes on record as easily the biggest earthquake in history.',
                    brand_description: '',
                    looking_for: '',
                    what_to_do: '',
                    requested_content: '',
                    required_hashtags: '',
                    rewards: {
                        product_reward: null,
                        monetary_reward: null,
                    },
                    id: '3',
                    dateAdded: '2021-03-27',
                    credits: 8
                },
            ],
            user: null,
            loading: false,
            error: null,
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        signUserUp({commit}, payload) {
            commit('setLoading', true);
            commit('clearError');
            // eslint-disable-next-line no-undef
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false);
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
                        commit('setLoading', false);
                        commit('setError', error);
                        console.log(error);
                    }
                )
        },
        signUserIn({commit}, payload) {
            commit('setLoading', true);
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false);
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
                        commit('setLoading', false);
                        commit('setError', error);
                        console.log(error)
                    }
                )
        },
        autoSignIn({commit}, payload) {
            commit('setUser', {id: payload.uid, likedFusiomes: [], seenFusiomes: [], dislikedFusiomes: []})
        },
        logout({commit}) {
            firebase.auth().signOut();
            commit('setUser', null);
        },
        clearError({commit}) {
            commit('clearError');
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
        user(state) {
            return state.user;
        },
        loading(state) {
            return state.loading;
        },
        error(state) {
            return state.error;
        }
    },
})