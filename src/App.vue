<template>
  <div id="full">

    <div class="container">
      <div id="sidebar">
        <SideBar
        :btn1="btn1"
        :btn2="btn2"
        :btn3="btn3"
        :btn4="btn4"
        :btn5="btn5"
        @click="sidebarbtnclick"
        ></SideBar>
      </div>
      <div id="container2">
        <Header :showAddTask="showAddTask" text="t" @click="btnClicked" title="Store Products" />
        <div v-show="showAddTask">
          <AddTask @add-task="addTask" />
        </div>
        <Tasks @toggleReminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"></Tasks>


      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import SideBar from './components/SideBar'
const api = "https://api.predic8.de"

//import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
    SideBar

    // Footer,
  },
  data() {
    return {
      tasks: [],
      showAddTask: true,
      btn1:true,
      btn2:true,
      btn3:true,
      btn4:true,
      btn5:true,
    }
  },
  methods: {

    sidebarbtnclick(e){
      

    if(e.path[0].id=="sidebarContainer"){
    return
    }

      this.btn1=true,
      this.btn2=true,
      this.btn3=true,
      this.btn4=true,
      this.btn5=true
     
      switch(e.path[0].id) {
        case "btn1":
        this.btn1=false
          break;
        case "btn2":
        this.btn2=false
          break;
        case "btn3":
        this.btn3=false
          break;
        case "btn4":
        this.btn4=false
          break;
        case "btn5":
        this.btn5=false
          break;
        default:"s"
          // code block
    }

    },

    btnClicked() {
      this.showAddTask = !this.showAddTask
    },
    showTaskForm() {

    },
    async deleteTask(id) {
      console.log(id)

      if (confirm('Are you sure')) {
        const res = await fetch(`${api}${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        })


        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.product_url !== id)) :
          alert("Error Delete Failed")


      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`${api}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json(id)

      this.tasks = this.tasks.map((task) => task.id === id ?
        { ...task, reminder: data.reminder } : task)
    },
    async addTask(task) {


      console.log(task)
      const res = await fetch(`${api}/shop/products/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      this.tasks = [...this.tasks, data]

    },
    async fetchTasks() {
      const res = await fetch(`${api}/shop/products/?page=1&limit=100`)

      const data = await res.json()

      return data.products
    },
    async fetchTask(id) {
      const res = await fetch(`${api}${id}`)

      const data = await res.json()

      return data
    },

  },
  async created() {
    this.tasks = await this.fetchTasks()
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 1000px;

  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  flex: 1;
  border-radius: 5px;

  display: flex;

}

#container2 {
  width: 2000px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

#full {

  display: flex;
}

#sidebar {
  max-width: 10rem;
  background-color: rgb(161, 205, 205);
  flex: 1;
  min-height: 300px;
  border-right: 1px solid steelblue;
  border-bottom: 1px solid steelblue;
  padding: 10px;
  border-radius: 0px;

  margin-right: 10px;



}
</style>