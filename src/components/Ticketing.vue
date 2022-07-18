<template>
   <el-card class="box-card">
    <div class="calender-box">
      <el-calendar class="calender" v-model="value">
      <template #dateCell="{ data }" class="calender">
      <p :class="data.isSelected ? 'is-selected' : ''" style="margin:0;">
        {{ data.day.split('-').slice(2,3).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
      </el-calendar>
    </div>

  <div class="price">{{price}}</div>
  <div class="date">{{startDate}}</div>
  <div class="date">{{endDate}}</div>
  </el-card>
</template>
<script>
import { ref } from 'vue'
export default {
  data(){
    return {
      startDate :'',
      endDate :''
    }
  },
  computed:{
    price (){
      return this.$store.state.show.price
    }
  },
   created(){
    const value = ref(new Date())
    this.getDate()
   },
   methods:{
    async getDate(){
      await this.$store.dispatch('show/searchShow')
      this.startDate = this.$store.state.show.showDetail[1]
      this.endDate = this.$store.state.show.showDetail[2]
    }
   }
   
}
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  width: 480px;
  height: 90vh;
  display: flex;
  justify-content: center;
  .calender-box {
    .calender{
    width: inherit;
    height: 400px;
    --el-calendar-cell-width: 30px; 
    font-size: small;  
     }
  }
  .date{
    height: 2rem;
  }
}

</style>