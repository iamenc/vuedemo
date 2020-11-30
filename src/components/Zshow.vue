<template>
  <el-row :gutter="20">
    <el-col :span="24" :offset="0">
      <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :on-progress="onchange"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-col>


    <el-col :span="24">
      <show-resoult :sperms="imgb64s" :srcimg="imageUrl"/>
    </el-col>


    <el-col :span="24" :offset="0">
      <div
        class="zshow-box"
        v-bind:style="{
          backgroundImage: 'url(' + imageUrl + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }"
      >
        <div v-for="(img, index) in Computed_imgb64s" :key="index"
          class="red-round"
          v-bind:style="{
            left: img.centerP[0] + 'px',
            top: img.centerP[1] + 'px',
            'background-color': getColor(img.classesNormal),
          }"
        ></div>
      </div>
    </el-col>

    <el-row :span="24" v-for="(img, index) in imgb64s" :key="index">
      <el-col :span="6" :offset="0">
        <img
          :style="{ 'background-color': getColor(img.classesNormal) }"
          :src="'data:image/png;base64,' + img.rgbaB64"
          alt=""
          class="imgshow"
        />
      </el-col>
      <el-col :span="6" :offset="0" v-if="img.head != ''">
        <img
          :src="'data:image/png;base64,' + img.head.rgbaB64"
          alt=""
          class="imgshow"
        />
      </el-col>
      <el-col :span="6" :offset="0" v-if="img.head != ''">
        <img
          :src="'data:image/png;base64,' + img.body.rgbaB64"
          alt=""
          class="imgshow"
        />
      </el-col>
      <el-col :span="6" :offset="0" v-if="img.head != ''">
        <img
          :src="'data:image/png;base64,' + img.tail.rgbaB64"
          alt=""
          class="imgshow"
        />
      </el-col>
    </el-row>

    
    
  </el-row>
</template>

<style>
.red-round {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  transform: translate(-50%, -50%);
}

.zshow-box {
  overflow: hidden;
  position: relative;
  width: 1536px;
  height: 1024px;
  background-color: blanchedalmond;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.imgshow {
  border: 5px dotted purple;
  border-radius: 15px;
  padding: 15px;
  background-color: rgb(56, 133, 69);
}
</style>

<script>
import ShowResoult from './sub/ShowResoult.vue';
import SpermShow from "./sub/spermShow.vue";
import uploadSperm from "./sub/uploadSperm.vue";
export default {
  components: { uploadSperm, SpermShow, ShowResoult }, 
  data() {
    return {
      imageUrl: "",
      imgb64s: [],
      // api_url: "https://jsonplaceholder.typicode.com/posts/",
      api_url: "http://localhost:8080/api/sperm-project/compute/",
    };
  },
  computed:{
      Computed_imgb64s: function(){
          var r = this.imgb64s.filter(function(item){
              return item.classesArea == "ok" && item.classesMdel == 0
          })
          console.log(r);
          return r
      }
  },
  methods: {
    onchange(err, file, filelist) {
      // console.log(file);
      this.getBase64(file.raw).then((res) => {
        console.log(res);
        this.imageUrl = res;
        this.$axios({
          url: this.api_url,
          method: "post",
          data: {
            imgName: file.name,
            imgb64: res,
          },
        })
          .then((res) => {
            // this.imgb64s = res.data.imgb64s
            this.imgb64s = res.data[0].sperms;
            console.log(">>>?>>>", res.data[0].sperms);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },

    getBase64(file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },

    getColor(a) {
      if (a == "abnormal") {
        return "red";
      }
      if (a == "normal") {
        return "skyblue";
      }
      if (a == "false") {
        return "black";
      } else {
        return "blue";
      }
    }
  },
};

</script>