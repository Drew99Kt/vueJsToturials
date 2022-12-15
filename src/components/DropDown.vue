<template>
<div id="app">
  

  <label>Vendor</label>
  <v-select  v-model= "selected"  @close="selectedChange1"   label="name"  :options="vendorUrl">
  </v-select>
  <label>Category</label>
  <v-select  v-model= "selected"  @close="selectedChange2"   label="title"  :options="categoryUrl">
  </v-select>
</div>
</template> 

<script>
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default {
   
 
    name: 'DropDown',
 
    methods: { 
 
  
      selectedChange1: function() {
      this.$emit('category1', this.selected.vendor_url)
    },
    selectedChange2: function() {
      this.$emit('category2', `/shop/categories/${this.selected.title}`)
    },
    },
    components:{
        vSelect
    },
 
    data() {
    return {
      vendorUrl: [
    {
      name: "Western Tasty Fruits Ltd.",
      vendor_url: "/shop/vendors/672"
    },
    {
      name: "Exotic Fruits Company",
      vendor_url: "/shop/vendors/32"
    },
    {
      name: "Home Fruits",
      vendor_url: "/shop/vendors/501"
    },
    {
      name: "Fun Fresh Fruits Ltd.",
      vendor_url: "/shop/vendors/810"
    },
    {
      name: "Nuts for Nuts Company",
      vendor_url: "/shop/vendors/67"
    }
  ],
      categoryUrl: [
        { title: "Fruits" },
        { title: "Dried" },
        { title: "Fresh" },
        { title: "Exotic" },
        { title: "Nuts" }
      ]
    };
  }
}

</script>

<style>
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

h1,
.muted {
  color: #2c3e5099;
}

h1 {
  font-size: 26px;
  font-weight: 600;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}

</style>