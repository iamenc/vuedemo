<template>
  <el-row :gutter="20">
  
  <div
    class="svg-box"
    v-bind:style="{
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }"
  >
    <svg height="100%" width="100%">
      <path
        v-for="(item, index) in sperms2"
        :key="index"
        :d="getStrPath(item.body.counter)"
        class="svg-item-ok"
      />
    </svg>
  </div>
  </el-row>
</template>

<script>
export default {
  name: "svg-show",
  props: ["sperms", "srcimg"],
  data() {
    return {
      msg: "world",
      imgUrl:
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg",
      // sperms2: ["220.66,10 300,210 170,250 123,234"],
      sperms2: [
        {
          body: {
            counter: [
              [
                [[0, 0]], 
                [[512, 512]], 
                [[400, 0]]
              ],
              [
                [[10,5]],
                [[280,50]], 
                [[180,160]]
              ],
              [
                [[15,8]],
                [[180,25]], 
                [[150,140]]
              ],

            ],
          },
        },
      ],
    };
  },
  methods: {
    getStrPath(counters) {
      var rstr = "";
      for (var k = 0; k < counters.length; k++) {
        for (var i = 0; i < counters[k].length; i++) {
          if (i == 0) {
            rstr += "M ";
          } else {
            rstr += "L";
          }
          var p = counters[k][i][0];
          rstr += p[0] + " " + p[1] + " ";
        }
        rstr += "Z ";
      }
      alert(rstr);
      return rstr;
    },
  },
};
</script>

<style scoped>
.svg-box {
  width: 1536px;
  height: 1024px;
  border-radius: 5px;
  background-color: beige;
  box-sizing: border-box;
}
.svg-item-ok {
  fill: lime;
  stroke-width: 1;
  opacity: 0.5;
  transition:fill 300ms;
}
.svg-item-ok:hover {
  fill: yellow;
  stroke-width: 1;
  opacity: 0.5;
}
</style>