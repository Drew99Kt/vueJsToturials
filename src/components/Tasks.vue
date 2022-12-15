<template>
<div :key="task.product_url" v-for="task in tasks">
    <Task @toggleReminder = "$emit('toggleReminder', task.id)" @delete-task = "$emit('delete-task', task.product_url)" :task="task"/>
</div>
</template>


<script>
import Task from './Task'
export default{
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
        Task
    },
    methods: {

    },
    emits: [
        'delete-task',
        'toggleReminder',
    ],
}
</script>