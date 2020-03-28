<template>
  <Resize id="app" class="app-layout" :class="{ 'mobile' : $root.isMobile}">
    <div class="content">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </Resize>
</template>

<script>
import Resize from "@/components/common/Resize";
import Header from "@/components/parts/Header";
import Footer from "@/components/parts/Footer";
export default {
  name: "app",
  components: {
    Resize,
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {
    routerName() {
      return this.$route.name;
    }
  }
};
</script>
