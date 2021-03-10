import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, task) {
      let new_task = { 'description': task, 'checked': false }
      state.tasks.push(new_task);
    },
    CHECK_TASK(state, index) {
      state.tasks[index]['checked'] = !state.tasks[index]['checked']
    },
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1)
    }
  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    },
    checkTask(context, index) {
      context.commit('CHECK_TASK', index)
    },
    removeTask(context, index) {
      context.commit('REMOVE_TASK', index)
    }
  },
  modules: {
  }
})
