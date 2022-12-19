<template>    


<div id="sidebarContainer">
    <Button text="Products" id="btn1" :color="btn1 ? 'grey' : 'green'" ></Button>
    <Button text="Vendors" id="btn2" :color="btn2 ? 'grey' : 'green'"></Button>
    <Button text="Orders" id="btn3" :color="btn3 ? 'grey' : 'green'"></Button>
    <Button text="Customers" id="btn4" :color="btn4 ? 'grey' : 'green'"></Button>
    <Button text="Category" id="btn5" :color="btn5 ? 'grey' : 'green'"></Button>

</div>
</template>
<script>
import Button from './Button'



    export default {
        name: 'SideBar',
        props: {
            title: String,
            text:String,
            btn1:Boolean,
            btn2:Boolean,
            btn3:Boolean,
            btn4:Boolean,
            btn5:Boolean,

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