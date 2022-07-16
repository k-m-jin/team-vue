<template>
  
   <el-card class="box-card">
    
    <el-calendar class="calender" v-model="value" />
      
  </el-card>
  
</template>
<script>
import { ref } from 'vue'
export default {
   created(){
    const value = ref(new Date())
   }
}
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.box-card {
  width: 480px;
  height: 90vh;
  display: block;
  .calender {
     height: 30px;
    
  }
}

</style>