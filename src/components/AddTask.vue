<template>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Name</label>
        <input type="text" v-model="name" name="text" placeholder="Bag of apples" />
      </div>
      
      <div class="form-control">
        <label>Price</label>
        <input type="text" v-model="price" name="text" placeholder="5.99" />
      </div>

      <div class="form-control">
      
        <DropDown @category1 = "category1" @category2 = "category2" v-model="category_url" ></DropDown>
        </div>

         
      <!-- <div class="form-control">
        <label>Vendor</label>
        <DropDown v-model="vendor_url"></DropDown>
    </div> -->

      <input type="submit" value="Save Product" class="btn btn-block" />
    </form>
  </template>
  
  <script>
import DatePicker from './DatePicker'
import DropDown from './DropDown'
var Category1
var Category2



  export default {
    name: 'AddTask',
    data() {
      return {
        name: '',
        price: '',
        category_url: '',
        vendor_url: '',
      }
    },
    methods: {
    

        
      category1(val){
        this.Category2=val
        console.log(val)
      },
      category2(val){
        this.Category1=val
        console.log(val)
      },

      onSubmit(e) {
        e.preventDefault()
        if (!this.name ) {
          alert('Product name is required')
   
          return
        }
        const newTask = {
          name: this.name,
          price: this.price,
          category_url: this.Category1,
          vendor_url: this.Category2,
        }
        this.$emit('add-task', newTask)
        this.name = ''
        this.price = ''
        this.category_url = '',
        this.vendor_url = ''
      },
    },
    components: {
        DatePicker,
        DropDown
    }
  }
  </script>
  
  <style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  .form-control {
    margin: 20px 0;
  }
  .form-control label {
    display: block;
  }
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-control-check label {
    flex: 1;
  }
  .form-control-check input {
    flex: 2;
    height: 20px;
  }
  </style>