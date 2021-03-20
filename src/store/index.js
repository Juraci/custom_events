import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    timestamps: [],
  },
  mutations: {
    ADD_NOTE(state, payload) {
      const note = payload;
      state.notes.push(note);
    },
    ADD_TIMESTAMP(state, payload) {
      const timestamp = payload;
      state.timestamps.push(timestamp);
    },
  },
  actions: {
    addNote(context, payload) {
      context.commit("ADD_NOTE", payload);
    },
    addTimestamp(context, payload) {
      context.commit("ADD_TIMESTAMP", payload);
    },
  },
  getters: {
    getNotes: (state) => state.notes,
    getTimestamps: (state) => state.timestamps,
    getNoteCount: (state) => state.notes.length,
  },
  modules: {},
});
