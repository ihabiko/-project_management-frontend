<template>
<Base>    

    <template v-slot:side>

        <div class="sidebar-container">
          <button class="btn btn-primary btn-round btn-floating btn-lg d-lg-none" type="button" data-toggle="collapse" data-target="#sidebar-collapse" aria-expanded="false">
            <i class="material-icons">more_horiz</i>
            <i class="material-icons">close</i>
          </button>
          <div class="sidebar collapse" id="sidebar-collapse">
            <div class="sidebar-content">

              <div class="chat-team-sidebar text-small">
                <div class="chat-team-sidebar-top">
                  <ul class="nav nav-tabs nav-justified" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="members-tab" data-toggle="tab" href="#members" role="tab" aria-controls="members" aria-selected="true">Members</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="files-tab" data-toggle="tab" href="#files" role="tab" aria-controls="files" aria-selected="false">Groups</a>
                    </li>
                  </ul>
                </div>
                <div class="chat-team-sidebar-bottom">
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="members" role="tabpanel" data-filter-list="list-group">
                      <form class="px-3 mb-3">
                        <div class="input-group input-group-round">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">filter_list</i>
                            </span>
                          </div>
                          <input type="search" class="form-control filter-list-input" placeholder="Filter members" aria-label="Filter Members">
                        </div>
                      </form>

                      <div class="list-group list-group-flush"  v-for="user in users" :key="user" >
                      <router-link   class="list-group-item list-group-item-action" :to="{'name':'room', params:{id:user.pk}}"  >
                          <div class="media media-member mb-0">
                            <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" class="avatar" />
                            <div class="media-body">
                              <h6 class="mb-0" data-filter-by="text">{{user.username}}</h6>
                              <span data-filter-by="text"></span>
                            </div>
                          </div>
                        </router-link>
                        
                        
                      </div>
                    </div>
                    <div class="tab-pane fade" id="files" role="tabpanel" data-filter-list="dropzone-previews">
                      <form class="px-3 mb-3">
                        <div class="input-group input-group-round">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">filter_list</i>
                            </span>
                          </div>
                          <input type="search" class="form-control filter-list-input" placeholder="Filter files" aria-label="Filter Files">
                        </div>
                      </form>
                      <ul class="d-none dz-template">
                        <li class="list-group-item dz-preview dz-file-preview">
                          <div class="media align-items-center dz-details">
                            <ul class="avatars">
                              <li>
                                <div class="avatar bg-primary dz-file-representation">
                                  <i class="material-icons">attach_file</i>
                                </div>
                              </li>
                              <li>
                                <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" class="avatar" data-title="David Whittaker" data-toggle="tooltip" />
                              </li>
                            </ul>
                            <div class="media-body d-flex justify-content-between align-items-center">
                              <div class="dz-file-details">
                                <a href="#" class="dz-filename">
                                  <span data-dz-name></span>
                                </a>
                                <br>
                                <span class="text-small dz-size" data-dz-size></span>
                              </div>
                              <img alt="Loader" src="assets/img/loader.svg" class="dz-loading" />
                              <div class="dropdown">
                                <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a class="dropdown-item" href="#">Download</a>
                                  <a class="dropdown-item" href="#">Share</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger" href="#" data-dz-remove>Delete</a>
                                </div>
                              </div>
                              <button class="btn btn-danger btn-sm dz-remove" data-dz-remove>
                                Cancel
                              </button>
                            </div>
                          </div>
                          <div class="progress dz-progress">
                            <div class="progress-bar dz-upload" data-dz-uploadprogress></div>
                          </div>
                        </li>
                      </ul>
                      <form class="dropzone" action="https://mediumra.re/dropzone/upload.php">
                        <span class="dz-message">Drop files here or click here to upload</span>
                      </form>

                      <ul class="list-group list-group-activity dropzone-previews flex-column-reverse list-group-flush">

                        <li class="list-group-item">
                          <div class="media align-items-center">
                            <ul class="avatars">
                              <li>
                                <div class="avatar bg-primary">
                                  <i class="material-icons">insert_drive_file</i>
                                </div>
                              </li>
                              <li>
                                <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" class="avatar" data-title="Peggy Brown" data-toggle="tooltip" data-filter-by="data-title" />
                              </li>
                            </ul>
                            <div class="media-body d-flex justify-content-between align-items-center">
                              <div>
                                <a href="#" data-filter-by="text">client-questionnaire</a>
                                <br>
                                <span class="text-small" data-filter-by="text">48kb Text Doc</span>
                              </div>
                              <div class="dropdown">
                                <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a class="dropdown-item" href="#">Download</a>
                                  <a class="dropdown-item" href="#">Share</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li class="list-group-item">
                          <div class="media align-items-center">
                            <ul class="avatars">
                              <li>
                                <div class="avatar bg-primary">
                                  <i class="material-icons">folder</i>
                                </div>
                              </li>
                              <li>
                                <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" class="avatar" data-title="Harry Xai" data-toggle="tooltip" data-filter-by="data-title" />
                              </li>
                            </ul>
                            <div class="media-body d-flex justify-content-between align-items-center">
                              <div>
                                <a href="#" data-filter-by="text">moodboard_images</a>
                                <br>
                                <span class="text-small" data-filter-by="text">748kb ZIP</span>
                              </div>
                              <div class="dropdown">
                                <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a class="dropdown-item" href="#">Download</a>
                                  <a class="dropdown-item" href="#">Share</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li class="list-group-item">
                          <div class="media align-items-center">
                            <ul class="avatars">
                              <li>
                                <div class="avatar bg-primary">
                                  <i class="material-icons">image</i>
                                </div>
                              </li>
                              <li>
                                <img alt="Ravi Singh" src="assets/img/avatar-male-3.jpg" class="avatar" data-title="Ravi Singh" data-toggle="tooltip" data-filter-by="data-title" />
                              </li>
                            </ul>
                            <div class="media-body d-flex justify-content-between align-items-center">
                              <div>
                                <a href="#" data-filter-by="text">possible-hero-image</a>
                                <br>
                                <span class="text-small" data-filter-by="text">1.2mb JPEG image</span>
                              </div>
                              <div class="dropdown">
                                <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a class="dropdown-item" href="#">Download</a>
                                  <a class="dropdown-item" href="#">Share</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li class="list-group-item">
                          <div class="media align-items-center">
                            <ul class="avatars">
                              <li>
                                <div class="avatar bg-primary">
                                  <i class="material-icons">insert_drive_file</i>
                                </div>
                              </li>
                              <li>
                                <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" class="avatar" data-title="Claire Connors" data-toggle="tooltip" data-filter-by="data-title" />
                              </li>
                            </ul>
                            <div class="media-body d-flex justify-content-between align-items-center">
                              <div>
                                <a href="#" data-filter-by="text">LandingPrototypes</a>
                                <br>
                                <span class="text-small" data-filter-by="text">415kb Sketch Doc</span>
                              </div>
                              <div class="dropdown">
                                <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a class="dropdown-item" href="#">Download</a>
                                  <a class="dropdown-item" href="#">Share</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li class="list-group-item">
                          <div class="media align-items-center">
                            <ul class="avatars">
                              <li>
                                <div class="avatar bg-primary">
                                  <i class="material-icons">insert_drive_file</i>
                                </div>
                              </li>
                              <li>
                                <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" class="avatar" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                              </li>
                            </ul>
                            <div class="media-body d-flex justify-content-between align-items-center">
                              <div>
                                <a href="#" data-filter-by="text">Branding-Proforma</a>
                                <br>
                                <span class="text-small" data-filter-by="text">15kb Text Document</span>
                              </div>
                              <div class="dropdown">
                                <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <a class="dropdown-item" href="#">Download</a>
                                  <a class="dropdown-item" href="#">Share</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </template>
    <template  v-slot:main>
    </template>
</Base>
</template>

<script>
import Base from '@/components/Base.vue'

import AuthService from "@/services/AuthService";

export default({
    name: 'chat',
    components: {
        Base,

    },
    data(){
        return {
            users:[],
        }
    },
    mounted() {
        AuthService.getAllUser().then(response => {
          this.users = response.data;
        }).catch(e => {
          console.log(e);
        });
       
        document.getElementById('root').classList.add('layout-sidebar')
    },
    unmounted() {
        document.getElementById('root').classList.remove('layout-sidebar')
    },
})
</script>

