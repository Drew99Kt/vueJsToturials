<template>
    <div @dblclick="$emit('toggleReminder', task.id)" :class = "[task.reminder ? 'reminder' : '', 'task']">
    
      <b>Task Title<i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
</b>
      <p>{{ task.text}} 
      </p>
    <b >Description</b>
    <p> {{task.desc}}</p>
    <b>Date</b>
    <p>{{ task.day }}</p>
</div>
</template>


<script> 
export default {
    name: 'Task',
    props: {
        task: Object
    },
    methods: {
    
    }
}
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

 p {

  align-items: center;
   display: flex;
  justify-content: space-between;
}


b{
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 5px;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 2px;
  border-style: solid;
  
}
</style>