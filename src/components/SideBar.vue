<template>    


<div id="sidebarContainer">
    <Button text="Products" color="grey"></Button>
    <Button text="Vendors" color="grey"></Button>
    <Button text="Orders" color="grey"></Button>
    <Button text="Customers" color="grey"></Button>
    <Button text="Category" color="grey"></Button>

</div>
</template>
<script>
import Button from './Button'



    export default {
        name: 'SideBar',
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
Button { 
    width: 8rem;

  
  
    
   
    margin-bottom: 10px;
}

</style>