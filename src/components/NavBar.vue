<template>
    <div class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <a class="navbar-brand" href="index.html">
          <img alt="Pipeline" src="/assets/img/logo.svg">
        </a>
        <div class="d-flex align-items-center">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-block d-lg-none ml-2">
            <div class="dropdown">
              <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="Image" src="/assets/img/avatar-male-4.jpg" class="avatar">
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="nav-side-user.html" class="dropdown-item">Profile</a>
                <a href="utility-account-settings.html" class="dropdown-item">Account Settings</a>
                <a href="#" class="dropdown-item">Log Out</a>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse navbar-collapse justify-content-between" id="navbar-collapse">
          <ul class="navbar-nav">

            <li class="nav-item">

              <a class="nav-link" href="index.html">Overview</a>

            </li>

            <li class="nav-item">

              <div class="dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" id="nav-dropdown-2">Pages</a>
                <div class="dropdown-menu">

                  <a class="dropdown-item" href="pages-app.html">App Pages</a>

                  <a class="dropdown-item" href="pages-utility.html">Utility Pages</a>

                  <a class="dropdown-item" href="pages-layouts.html">Layouts</a>

                </div>
              </div>

            </li>

            <li class="nav-item">

              <div class="dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" id="nav-dropdown-3">Components</a>
                <div class="dropdown-menu">

                  <a class="dropdown-item" href="components-bootstrap.html">Bootstrap</a>

                  <a class="dropdown-item" href="components-pipeline.html">Pipeline</a>

                </div>
              </div>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="documentation/index.html">Documentation</a>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="documentation/changelog.html">Changelog</a>

            </li>

          </ul>
          <div class="d-lg-flex align-items-center">
            <form class="form-inline my-lg-0 my-2">
              <div class="input-group input-group-dark input-group-round">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">search</i>
                  </span>
                </div>
                <input type="search" class="form-control form-control-dark" placeholder="Search" aria-label="Search app">
              </div>
            </form>
            <div class="dropdown mx-lg-2">
              <button class="btn btn-primary btn-block dropdown-toggle" type="button" id="newContentButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Add New
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Team</a>
                <a class="dropdown-item" href="#">Project</a>
                <a class="dropdown-item" href="#">Task</a>
              </div>
            </div>
            <div class="d-none d-lg-block">
              <div class="dropdown">
                <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="Image" src="/assets/img/avatar-male-4.jpg" class="avatar">
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="nav-side-user.html" class="dropdown-item">Profile</a>
                  <a href="utility-account-settings.html" class="dropdown-item">Account Settings</a>
                  <button @click="logout" class="dropdown-item">Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  methods: {
    logout(){
      console.log('logout')
    }
  },



}
</script>
<style scoped>

</style>