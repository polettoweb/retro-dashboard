import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { uuid } from "vue-uuid";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "retro-dashboard",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    modalVisible: false,
    newCard: {
      content: "",
      column: null
    },
    columns: [
      {
        title: "Glad",
        color: "#4caf50",
        tasks: []
      },
      {
        title: "Sad",
        color: "#ffeb3b",
        tasks: []
      },
      {
        title: "Mad",
        color: "#f44336",
        tasks: []
      }
    ]
  },
  mutations: {
    toggleModal(state, payload) {
      state.modalVisible = payload;
    },
    setNewCard(state, payload) {
      state.newCard = payload;
    },
    setColumns(state, payload) {
      state.columns = payload;
    },
    addCardToColumns(state, { column, content }) {
      console.log(state.columns[column].tasks.length);
      state.columns[column].tasks.push({
        id: uuid.v4(),
        content: content,
        votes: 0
      });
    },
    removeCardFromColumns(state, { id, column }) {
      state.columns[column].tasks = state.columns[column].tasks.filter(
        task => task.id !== id
      );
    },
    commitVotes(state, { counter, id, column }) {
      console.log(state.columns[column].tasks);
      state.columns[column].tasks.map(task => {
        if (task.id === id) {
          task.votes = counter;
        }
      });
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin]
});
