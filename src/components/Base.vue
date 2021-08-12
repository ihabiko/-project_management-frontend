<template>
  <div class="home">
    <NavBar>
    </NavBar>
    <div class="main-container">
    <slot name="side"></slot>
    <div class="content-container">
    <Breadcrumb></Breadcrumb>
    <slot name="main"></slot>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
    Breadcrumb,
  }
}
</script>
