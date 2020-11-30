<template>
  <div ref="z666" class="box" style="">
    <div v-if="showMode == '原图'">
        <img :src="srcimg" alt=""  class="fill">
    </div>
    <div v-if="showMode == '列表详情'"></div>
    <div v-if="showMode == '模仿去背景图'">123</div>
  </div>
</template>

<script>
export default {
  name: "sperm-show",
  data() {
    return {
      showMode: "原图", // "模仿去背景图"  "原图"  "列表详情"
    };
  },
  props: {
    sperm: { type: Object, default: {} },
    srcimg: { type: String, default: "" },
  },
  mounted: function () {
    console.log(this.$refs.z666.clientHeight);
  },
  methods: {
    computeShowCenterP(centerP) {},
  },
};
</script>

<style  scoped>
.box {
  width: 60vw;
  height: 40vw;
  background-color: skyblue;
}

.fill {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
</style>
