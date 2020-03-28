<template>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <h3 class="title" animation->vue-fullpage.js</h3>
    </div>
    <div class="section" id="section-2">
      <h3 class="title">Section 2</h3>
      <img class="image image-1" src="https://fakeimg.pl/250x100/ff0000/" />
      <img class="image image-2" src="https://fakeimg.pl/250x100/ff0000/" />
    </div>
    <div class="section" id="section-3">
      <h3 class="title">Section 3</h3>
      <blockquote>
        "You should totally subscribe to my channel now"
        <span></span>
      </blockquote>
      <img id="office" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/office1.png" />
      <img id="building" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/sky.jpg" />
      <div id="box"></div>
    </div>
  </full-page>
</template>


<script>
import { TimelineLite } from "gsap";
import ScrollMagic from "scrollmagic";

let titles = document.querySelectorAll(".title");
const timeline = new TimelineLite();

export default {
  name: "Index",
  components: {},
  data: function() {
    return {
      options: {
        scrollingSpeed: 1500,
        navigation: true,
        anchors: ["first", "second", "third"],
        sectionsColor: ["#ded4d5", "#bcada8", "#a9957c"],
        easing: "cubic-bezier(0.45, 0, 0.55, 1)"
      }
    };
  },
  mounted() {
    var controller = new ScrollMagic.Controller();

    let ourScene = new ScrollMagic.Scene({
      triggerElement: "#section-2"
    })
      .setClassToggle(".title", "fadeInUp") // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller
    let ourScene2 = new ScrollMagic.Scene({
      triggerElement: "#section-2"
    })
      .setClassToggle(".image", "fadeInUpBig") // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller

    var tl = new TimelineMax({ onUpdate: updatePercentage });
    var tl2 = new TimelineMax();

    tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
    tl.from("span", 1, { width: 0 }, "=-.5");
    tl.from(
      "#office",
      1,
      { x: -200, opacity: 0, ease: Power4.easeInOut },
      "=-1"
    );
    tl.from(
      "#building",
      1,
      { x: 200, opacity: 0, ease: Power4.easeInOut },
      "=-.7"
    );

    tl2.from("#box", 1, { opacity: 0, scale: 0 });
    tl2.to("#box", 0.5, {
      left: "20%",
      scale: 1.3,
      borderColor: "white",
      borderWidth: 12,
      boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
    });

    const scene = new ScrollMagic.Scene({
      triggerElement: "#section-3",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setPin("#section-3")
      .setTween(tl)
      .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: "blockquote"
    })
      .setTween(tl2)
      .addTo(controller);

    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
    }
  },
  methods: {}
};
</script>


<style scoped>
blockquote {
  font-size: 2.3em;
  width: 30%;
  margin-top: 17%;
  position: absolute;
}

span {
  width: 100%;
  background: red;
  display: block;
  height: 5px;
  margin-top: 20px;
}

img {
  position: absolute;
}

img:nth-of-type(1) {
  width: 40%;
  right: 0;
  top: 20%;
}
img:nth-of-type(2) {
  width: 25%;
  right: 40%;
  top: 29%;
  margin-top: 15%;
}
section:nth-child(odd) {
  background: #f1f1f1;
}
.sticky {
  background: white !important;
}

.percentage {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

#box {
  width: 100px;
  height: 100px;
  position: absolute;
  border: 5px solid lightgray;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>