<template>
  <div class="col-md-6">
    <div class="card card-team">
      <div class="card-body">
        <div class="dropdown card-options">
          <button
            class="btn-options"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" style="">
            <a class="dropdown-item" href="#">Manage</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="#">Leave Team</a>
          </div>
        </div>
        <div class="card-title">
          <a href="#"
            ><h5 data-filter-by="text" class="H5-filter-by-text">
              {{ team_item.name }}
            </h5></a
          >

          <span
            >{{ team_item.projects_number }} Projects,
            {{ team_item.members_count }} Members</span
          >
        </div>
        <ul class="avatars">
          <li>
            <a
              href="#"
              data-toggle="tooltip"
              title=""
              data-original-title="Kenny"
            >
              <img
                alt="Kenny Tran"
                class="avatar"
                src="/assets/img/avatar-male-6.jpg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Team_Item',
  components:{},
  props:['team_item']

}
</script>