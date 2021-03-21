import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  products: mock,
  cart: [],
  comments: [{
    id: 0,
    body: 'This is a fun product!',
    name: 'NotABot'
  }],
  getComments() {
    return this.comments;
  },
  addComment(name, body) {
    this.comments.push({
      id: this.comments.length,
      name: name,
      body: body
    });
  },
  removeComment(id) {
    this.comments.splice(id, 1);
    for(let i = 0; i < this.comments.length; i++) {
      this.comments[i].id = i;
    }
  },
  editComments(id, name, body) {
	this.comments[id].name = name;
	this.comments[id].body = body;
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')