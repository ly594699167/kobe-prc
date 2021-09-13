<template>
  <div id="app">
    <Container>
      <template v-slot:top>
        <Top />
      </template>
      <template v-slot:main>
        <Main />
      </template>
    </Container>
  </div>
</template>
<script>
import Container from './views/Home.vue';
import Top from './components/layout/Heade.vue';
import Main from './views/public.vue';

export default {
  components: {
    Container,
    Top,
    Main,
  },
};
</script>

<style lang="less">
  #app{
    width:950px;
    margin:auto;
  }
</style>
