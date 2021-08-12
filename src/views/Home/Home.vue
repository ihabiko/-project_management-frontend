<template>
  <Base>
  <template v-slot:main>
   <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-11">
              <div class="page-header mb-4">
                <div class="media">
                  <img alt="Image" src="assets/img/avatar-male-4.jpg" class="avatar avatar-lg mt-1">
                  <div class="media-body ml-3">
                    <h1 class="mb-0"></h1>
                    <p class="lead">Interface designer and front-end developer</p>
                  </div>
                </div>
              </div>
              <ul class="nav nav-tabs nav-fill" role="tablist">
                <li class="nav-item">
                      <a class="nav-link" :class="isTeam" @click="nav_component = 'Team'">Teams</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  :class="isProject" @click="nav_component = 'Project'" >Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="isTask" @click="nav_component = 'Task'">Tasks</a>
                </li>
              </ul>
              <div class="tab-content">
                <component :is="loadedComponent" />
              </div>
            </div>
          </div>
    </div>
  </template>
  </Base>
</template>

<script>
// @ is an alias to /src
import Base from '@/components/Base.vue'
import Team from '@/views/Home/partitions/Team/Team.vue'
import Project from '@/views/Home/partitions/Project.vue'
import Task from '@/views/Home/partitions/Task.vue'


export default {
  name: 'Home',
  components: {
    Base,
    Task,
    Project,
    Team,
  },
  data(){
    return {
      nav_component:"Team",
    };
  },
  computed:{

    isTeam(){
    if (this.nav_component=='Team')
      return{
        active:true
      };
    return{
      active:false
    };
    },
    isProject(){
    if (this.nav_component=='Project')
      return{
        active:true
      };
       return{
      active:false
    };
    },
    isTask(){
    if (this.nav_component=='Task')
      return{
        active:true
      };
       return{
      active:false
    };
    },
    loadedComponent(){

    if (this.nav_component=='Team')
      return Team;
    
    if (this.nav_component=='Project')
      return Project;
    
      
    if (this.nav_component=='Task')
      return Task;
    return Team
    }
  }
}
</script>
