<template>
  <div class="home">
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <img src="../img/M1.jpg">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  //
  methods:{
   getList(){
   this.axios.get('http://localhost:3312/user/getList',{
    params:{
      page:this.query.page,
      size:this.query.size,
      name:this.query.name,
      phone:this.query.phone,
      city:this.query.city
    }
   }).then((resp)=>{
    console.log(resp);
    this.tableData = resp.data.content.list;
    this.total = resp.data.content.total;
   })
   },
  }
  //
}
</script>
