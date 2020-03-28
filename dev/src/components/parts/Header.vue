<template>
  <header class="header">
    <div class="btn-toggle" @click="toggleMenu">
      <span class="btn-toggle__line btn-toggle__line--first"></span>
      <span class="btn-toggle__line btn-toggle__line--second"></span>
      <span class="btn-toggle__line btn-toggle__line--third"></span>
    </div>

    <div class="menu__wrapper">
      <ul class="menu">
        <li v-for="item in items" :key="item.text" class="menu__item">
          <router-link @click.native="linkClick" :to="item.link" class="menu__link">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";

let t1 = new TimelineMax({ paused: true });

export default {
  name: "Header",
  data: function() {
    return {
      items: [
        { text: "Главная", link: "/" },
        { text: "О нас", link: "about" },
        { text: "Галерея", link: "gallery" },
        { text: "Контакты", link: "contacts" }
      ],
      openMenu: false
    };
  },
  components: {},
  mounted() {
    // let menu = document.querySelector(".btn-toggle");
    // let lineOne = menu.querySelector('.btn-toggle__line--first');
    // let lineTwo = menu.querySelector('.btn-toggle__line--second');
    // let lineThree = menu.querySelector('.btn-toggle__line--third');
    // console.log(menu);
    // TweenMax.from(menu, 2, { x: 100 });
  },
  methods: {
    toggleMenu: function() {
      t1.to(".btn-toggle", 0.8, {
        zIndex: 2
      });

      t1.to(".btn-toggle__line--first", 0.8, {
        y: 6,
        rotation: 45,
        ease: Expo.easeInOut
      });

      t1.to(".btn-toggle__line--second", 0.8, {
        y: -6,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.8
      });

      t1.to(".menu__wrapper", 2, {
        top: "0%",
        zIndex: 1,
        ease: Expo.easeInOut,
        delay: -2
      });

      t1.staggerFrom(
        ".menu__wrapper li",
        2,
        { x: -200, opacity: 0, ease: Expo.easeOut },
        0.3
      );
      t1.reverse();
      t1.reversed(!t1.reversed());
    },

    linkClick: function() {
      t1.reversed(!t1.reversed());
    }
  }
};
</script>
