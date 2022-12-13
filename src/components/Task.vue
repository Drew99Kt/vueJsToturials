<template>
    <div @dblclick="$emit('toggleReminder', task.id)" :class = "[task.reminder ? 'reminder' : '', 'task']">
      
      <b>Order Url <i @click="$emit('delete-task', task.order_url)" class="fas fa-times"></i>
       </b>
      <p>{{ task.order_url}} 
      </p>
    <b >Order state</b>
    <p> {{task.state}}</p>
    <b> Created Date</b>
    <p>{{ task.createdAt}}</p>
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