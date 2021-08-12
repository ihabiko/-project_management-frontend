<template>
  <div class="tab-content">
    <div class="row content-list-head">
      <div class="col-auto">
        <h3>Teams</h3>
        <button
          class="btn btn-round"
          data-toggle="modal"
          data-target="#team-add-modal"
        >
          <i class="material-icons">add</i>
        </button>
      </div>
      <form class="col-md-auto" @submit.prevent="filterTeams">
        <div class="input-group input-group-round">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="material-icons">filter_list</i>
            </span>
          </div>
           <input
            v-model="q"
            type="search"
            id="Team_q"
            class="form-control"
            placeholder="Filter Teams"
            aria-label="Filter Teams"
          />
        </div>
      </form>
    </div>
    <!--end of content list head-->
    <div class="content-list-body row filter-list-1626594005362" >
      <Team_Item  v-for="team in Teams" :key="team" :team_item="team"></Team_Item>
    </div>
    <!--end of content-list-body-->
  </div>
  <Team_modal/>
</template>

<script>
import TeamDataService from "@/services/TeamDataService";
import Team_Item from "@/views/Home/partitions/Team/Team_Item";
import Team_modal from "@/views/Home/partitions/Team/Team_modal";

export default {
  name: "Team",
  data() {
    return {
      Teams: [],
      q: "",
    };
  },
  components: { Team_Item,Team_modal },
  methods: {
    filterTeams() {
      TeamDataService.filters(this.q)
        .then((response) => {
          this.Teams = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    TeamDataService.getAll()
      .then((response) => {
        this.Teams = response.data;
        console.log(response.data);
        console.log(this.$cookies)
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>