<template>
<header>
    <h1>
       {{title}}
    </h1>
    <Button  :text="showAddTask ?'Close' : 'Add Product'" color="green"></Button>
</header>
</template>

<script>
import Button from './Button'



    export default {
        name: 'Header',
        props: {
            title: String,
            text:String,
            showAddTask:Boolean,
        },
 
    components: {
            Button,
        },
    }

</script>


<style scoped>
header { 
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 20px;
}
</style>