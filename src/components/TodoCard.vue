<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title has-text-left">
          {{today}}
          </p>
          <p class="card-header-title has-text-center has-text-primary">VueJs Tutorial ToDo List</p>
          <div class="has-text-right">
            <p class="card-header-title">{{tasks.length}} tâches</p>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            <new-todo @newTask="addTask"></new-todo>
          </div>
          <div class="content">
            <todo-list :tasks="tasks" @check="checkTask" @remover="removeTask"></todo-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapActions, mapState } from "vuex"
  import NewTodo from './NewTodo'
  import TodoList from './TodoList'


  export default {
    name: 'todo-card',
    components: {
      NewTodo,
      TodoList
    },
    data () {
      return {
        day: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        month: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        // tasks: []
      }
    },
    methods: {
      // addTask(task) {
      //   let new_task = {'description': task, 'checked': false}
      //   this.tasks.push(new_task)
      // },
      // checkTask(index) {
      //   this.tasks[index]['checked'] = !this.tasks[index]['checked']
      // },
      // removeTask(index){
      //   this.tasks.splice(index,1)
      // },
      ...mapActions(['addTask', 'checkTask', 'removeTask'])
    },
    computed: {
      ...mapState(['tasks']),
      today: function() {
        let newDate = new Date()
        return `${this.day[newDate.getDay()]} ${newDate.getDate()} ${this.month[newDate.getMonth()]}`
      }
    }
  }
</script>

<style>
  .card {
    border-radius: 10px;
  }
  
  .card-header-title {
    color: #636368;
  }
</style>
