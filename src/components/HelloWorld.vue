<template>
  <div class="hello-world">
    <p>This is a Hello World component.</p>
    <button @click="queryHello">Query</button>
    <ul>
      <li v-for="node in queryValue" :key="node">
        {{ node }}
        <button @click="currentPath += node + '/'">Go</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  data() {
    return {
      currentPath: '/',
      queryValue: []
    };
  },
  methods: {
    queryHello() {
      this.$socket.emit('query-directory', this.currentPath, (value) => {

        this.queryValue = value;
      });
    }
  }
};
</script>

<style scoped>
.hello-world {
  border: 2px solid black;
}
</style>
