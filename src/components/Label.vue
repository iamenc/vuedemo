<template>
  <el-row :gutter="0">
    <el-col :span="20" :offset="2">
      <div class="box">
        <div class="item1">
          <el-row :gutter="20">
            <el-col :span="24" :offset="0">
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=196359071,3705181571&fm=15&gp=0.jpg"
                alt=""
                class="img"
              />
            </el-col>
            <el-col :span="24" :offset="0">
              <label for=""> </label>
            </el-col>
          </el-row>
        </div>
        <div class="item2"></div>
        <div class="item3"></div>
        <div class="item4"></div>
      </div>
    </el-col>
    <el-col :span="20" :offset="2">
      <el-row>
        <div class="ctl-box">
          <el-button>123</el-button>
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      showData: [
        {
          img_id: "1231wqdsadsad",
          file_path_on_server: "path on server",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 650px;
  background-color: grey;
  border-radius: 10px;
  margin: 5px;
}

.ctl-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: grey;
  border-radius: 10px;
  margin: 5px;
}
.item1 {
  width: 300px;
  background: chocolate;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}
.item2 {
  width: 300px;
  background: chocolate;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}
.item3 {
  width: 300px;
  background: chocolate;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}
.item4 {
  width: 300px;
  background: chocolate;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}

.img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>