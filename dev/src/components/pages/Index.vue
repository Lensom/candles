<template>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
  </full-page>
</template>


<script>
import { TweenMax, TimelineMax } from "gsap";

export default {
  name: "Index",
  components: {},
  data: function() {
    return {
      options: {
        scrollingSpeed: 1500,
        navigation: true,
        anchors: ["first", "second", "third"],
        sectionsColor: ["#ded4d5", "#bcada8", "#ffefd5"],
        easing: "cubic-bezier(0.45, 0, 0.55, 1)"
      }
    };
  }
};
</script>

<style scoped>
.panel {
  font-size: 30px;
  color: black;
}
</style>

