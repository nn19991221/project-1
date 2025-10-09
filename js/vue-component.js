// js/vue-component.js

// 注册一个 Vue 组件：review-list
Vue.component('review-list', {
  data() {
    return {
      reviews: [
        {
          name: "Sarah M.",
          text: "My daughter loves her swimming class! She’s now fearless in the water."
        },
        {
          name: "David K.",
          text: "Great instructors and friendly environment. My son can finally swim laps confidently."
        },
        {
          name: "Lucy P.",
          text: "Clean facilities and professional staff. The small group classes are perfect for kids."
        }
      ]
    };
  },
  template: `
    <div class="review-list mt-4">
      <div v-for="(r, index) in reviews" :key="index" class="mb-4">
        <blockquote class="blockquote text-center">
          <p class="mb-2">"{{ r.text }}"</p>
          <footer class="blockquote-footer">{{ r.name }}</footer>
        </blockquote>
      </div>
    </div>
  `
});

// 启动 Vue 实例
new Vue({
  el: '#vue-app'
});
