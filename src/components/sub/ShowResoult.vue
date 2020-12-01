<template>
  <div
    class="svg-box"
    v-bind:style="{
      backgroundImage: 'url(' + srcimg + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }"
  >
    <svg height="100%" width="100%">
      <path
        v-for="(item, index) in sperms"
        :key="'head' + index"
        :d="getStrPath(item.head.countour, item.centerP)"
        style="fill: green;"
        class="svg-item-ok"
      />
      <path
        v-for="(item, index) in sperms"
        :key="'body' + index"
        :d="getStrPath(item.body.countour, item.centerP)"
        style="fill: blue;"
        class="svg-item-ok"
      />
      <path
        v-for="(item, index) in sperms"
        :key="'tail' + index"
        :d="getStrPath(item.tail.countour, item.centerP)"
        style="fill: red;"
        class="svg-item-ok"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "show-result",
  props: ["sperms", "srcimg"],
  data() {
    return {
      msg: "world",
      imgUrl:
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg",
    };
  },
  methods: {
    getStrPath(counters, centerP) {
      var rstr = "";
      if (counters == undefined) {
        return rstr;
      }
      for (var k = 0; k < counters.length; k++) {
        for (var i = 0; i < counters[k].length; i++) {
          if (i == 0) {
            rstr += "M ";
          } else {
            rstr += "L";
          }
          var p = counters[k][i][0];
          rstr +=
            p[0] + centerP[0] - 192 + " " + (p[1] + centerP[1] - 192) + " ";
        }
        rstr += "Z ";
      }
      //   alert(rstr);
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
  opacity: 0.35;
}
.svg-item-ok:hover {
  fill: yellow;
  stroke-width: 1;
  opacity: 0.5;
  transition: fill 300ms;
}
</style>