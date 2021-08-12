<template>
    
        <div class="breadcrumb-bar navbar bg-white sticky-top">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)" :class="{'active': !!breadcrumb.link}">{{ breadcrumb.name }} </li>
              <!-- <li class="breadcrumb-item"><a href="pages-app.html#">App Pages</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">User</li> -->
            </ol>
          </nav>
          <div class="dropdown">
            <button class="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
              <i class="material-icons">settings</i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">

              <a class="dropdown-item" href="#">Account Settings</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#">Log out</a>

            </div>
          </div>

        </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>