<template>
  <form
    class="modal fade"
    id="team-add-modal"
    tabindex="-1"
    aria-hidden="true"
    @submit.prevent="addNewTeam"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Team</h5>
          <button
            type="button"
            class="close btn btn-round"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="material-icons">close</i>
          </button>
        </div>
        <!--end of modal head-->
        <ul class="nav nav-tabs nav-fill" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="team-add-details-tab"
              data-toggle="tab"
              href="#team-add-details"
              role="tab"
              aria-controls="team-add-details"
              aria-selected="true"
              >Details</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="team-add-members-tab"
              data-toggle="tab"
              href="#team-add-members"
              role="tab"
              aria-controls="team-add-members"
              aria-selected="false"
              >Members</a
            >
          </li>
        </ul>
        <div class="modal-body">
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="team-add-details"
              role="tabpanel"
            >
              <h6>Team Details</h6>
              <div class="form-group row align-items-center">
                <label class="col-3">Name</label>
                <input
                  class="form-control col"
                  type="text"
                  placeholder="Team name"
                  v-model="form.name"
                />
              </div>
              <div class="form-group row">
                <label class="col-3">Description</label>
                <textarea
                  class="form-control col"
                  rows="3"
                  placeholder="Team description"
                  v-model="form.description"
                ></textarea>
              </div>
            </div>
            <div class="tab-pane fade" id="team-add-members" role="tabpanel">
              <div class="users-manage" data-filter-list="form-group-users">
                <div class="mb-3">
                  <ul class="avatars text-center">
                    <li>
                      <img
                        alt="Claire Connors"
                        src="assets/img/avatar-female-1.jpg"
                        class="avatar"
                        data-toggle="tooltip"
                        data-title="Claire Connors"
                      />
                    </li>

                    <li>
                      <img
                        alt="Marcus Simmons"
                        src="assets/img/avatar-male-1.jpg"
                        class="avatar"
                        data-toggle="tooltip"
                        data-title="Marcus Simmons"
                      />
                    </li>

                    <li>
                      <img
                        alt="Peggy Brown"
                        src="assets/img/avatar-female-2.jpg"
                        class="avatar"
                        data-toggle="tooltip"
                        data-title="Peggy Brown"
                      />
                    </li>

                    <li>
                      <img
                        alt="Harry Xai"
                        src="assets/img/avatar-male-2.jpg"
                        class="avatar"
                        data-toggle="tooltip"
                        data-title="Harry Xai"
                      />
                    </li>
                  </ul>
                </div>
                <div class="input-group input-group-round">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">filter_list</i>
                    </span>
                  </div>
                  <input
                    type="search"
                    class="form-control filter-list-input"
                    placeholder="Filter members"
                    aria-label="Filter Members"
                  />
                </div>
                <div class="form-group-users filter-list-1626075065030">
                  <div
                    class="custom-control custom-checkbox"
                    v-for="user in users"
                    :key="user"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      v-bind:id="user.pk"
                      v-bind:value="user.pk"
                      v-model="form.member"
                      :v-checked="form.member.includes(user.pk)"
                    />
                    <label class="custom-control-label" :for="user.pk">
                      <span class="d-flex align-items-center">
                        <img
                          alt="Claire Connors"
                          src="assets/img/avatar-female-1.jpg"
                          class="avatar mr-2"
                        />
                        <span
                          class="h6 mb-0 SPAN-filter-by-text"
                          data-filter-by="text"
                          >{{ user.username }}</span
                        >
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end of modal body-->
        <div class="modal-footer">
          <button role="button" class="btn btn-primary" type="submit" >
            Done
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import AuthService from "@/services/AuthService";
import TeamDataService from "@/services/TeamDataService";

export default {
  name: "Team_modal",
  data() {
    return {
      form: {
        name: "",
        description: "",
        member: [],
      },
      users: {},
    };
  },
  methods: {
    addNewTeam() {
      TeamDataService.addNewTeam(this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => console.log(e));
    },
  },

  mounted() {
    AuthService.getAllUser()
      .then((response) => {
        this.users = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>