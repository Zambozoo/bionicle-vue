<template>
<div class="product">
  <div class="image">
    <img :src="'/images/'+product.image">
  </div>
  <div class="info">
    <h1>{{product.name}}</h1>
	<h6>{{product.desc}}</h6>
	<h6>{{product.price}}</h6>
    <p>{{product.full_desc}}</p>
  </div>
  <hr>
  <h1>Comments</h1>
  <div v-for="comment in comments" v-bind:key="comment.id">
    <hr>
    <form v-if="editing(comment.id)" @submit.prevent="editComment(comment.id, comment.name, comment.body)">
      <input v-model="comment.name">
      <p></p>
      <textarea v-model="comment.body"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
    <div v-else class="comment">
      <div class="body">
        <p><i>{{comment.name}}</i></p>
        <p>--{{comment.body}}</p>
		<button @click="edit(comment.id)">Edit</button>
		<button @click="removeComment(comment.id)">Remove</button>
      </div>
    </div>
  </div>
  <div>
    <hr>
    <form v-if="creating" @submit.prevent="addComment">
      <input v-model="name" placeholder="Name">
      <p></p>
      <textarea v-model="body" placeholder="Comment"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
    <div v-else>
      <p>Thank you for commenting! We appreciate the feedback.</p>
      <p><a @click="toggleForm" href="#">Comment again</a></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      creating: true,
      product: {},
      editIndex : -1,
	  name:"",
	  body:"",
    }
  },
  created() {
    this.product = this.$root.$data.products.find(product => product.id === parseInt(this.$route.params.id));
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
	edit(id) {
      this.editIndex = id;
    },
    addComment() {
      this.$root.$data.addComment(this.name, this.body);
      this.name = "";
      this.body = "";
      this.creating = false;
    },
	removeComment(id) {
      this.$root.$data.removeComment(id);
	},
	editing(id) {
		return this.editIndex == id;
	},
	editComment(id, name, body) {
      this.$root.$data.editComments(id, name, body);
	  this.editIndex = -1;
	}
  },
  computed: {
    comments() {
      return this.$root.$data.getComments();
    }
  }
}
</script>

<style scoped>
.intro {
  font-style: italic;
}

.product {
  margin:10px;
}

img {
  border: 1px solid #333;
  height: 500px;
  width: 400px;
  object-fit: cover;
}

</style>
