<script>
import { store } from './store.js'
export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <header id="site_header" class="d-flex justify-content-around mt-5 ms-5 ">
    <h1 class="text-white">2048</h1>
    <div class="score card">
      <h3 class="text-uppercase">punteggio</h3>
      <h4>0</h4>
    </div>
    <div class="record card">
      <h3 class="text-uppercase">record</h3>
      <h4>0</h4>
    </div>
  </header>
  <!-- /#site_header -->
  <main id="site_main">
    <div class="my_container mt-5">
      <div class="row"
        :class="store.downAndLeft ? 'justify-content-start align-items-end' : store.downAndRight ? 'justify-content-end align-items-end' : store.upAndLeft ? 'align-items-start justify-content-start' : store.upAndRight ? 'align-items-start justify-content-end' : ''">
        <div class="col-3"></div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </main>
  <!-- /#site_main -->
  <footer id="site_footer">
    <button @click="store.switchUp" @keyup.up="store.switchUp"><i class="fa fa-arrow-up"
        aria-hidden="true"></i></button>
    <button @click="store.switchRight" @keyup.right="store.switchRight"><i class="fa fa-arrow-right"
        aria-hidden="true"></i></button>
    <button @click="store.switchDown" @keyup.down="store.switchDown"><i class="fa fa-arrow-down"
        aria-hidden="true"></i></button>
    <button @click="store.switchLeft" @keyup.left="store.switchLeft"><i class="fa fa-arrow-left"
        aria-hidden="true"></i></button>
  </footer>
  <!-- /#site_footer -->

</template>

<style lang="scss">
body {
  background-color: black
}

h1 {
  font-size: 80px;
}

.my_container {
  width: 600px;
  aspect-ratio: 1/1;
  margin: 2rem auto;
  background-color: rgb(43, 42, 42);
  padding: 1rem;
  border-radius: 1rem;
}

.card {
  padding: 1rem;
}

.row {
  height: 100%;
  border: 3px solid;
}

.col-3 {
  border: 6px solid rgb(73, 72, 72);
  background-color: rgb(126, 90, 90);
  height: calc(100%/4);
  border-radius: 1rem;
  position: relative;
}

.numb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: bold;
}
</style>