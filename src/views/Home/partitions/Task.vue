<template>
  <div>
    <div class="row content-list-head">
      <div class="col-auto">
        <h3>Tasks</h3>
      </div>
      <form class="col-md-auto" @submit.prevent="filterTasks">
        <div class="input-group input-group-round">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="material-icons">filter_list</i>
            </span>
          </div>
          <input
            v-model="q"
            type="search"
            id="task_q"
            class="form-control"
            placeholder="Filter tasks"
            aria-label="Filter Tasks"
          />
        </div>
      </form>
    </div>
    <div class="content-list-body row">
      <div class="col-12" v-for="item in tasks" v-bind:key="item">
        <div class="card card-task">
          <div class="card-body">
            <div class="card-title">
              <router-link :to="{ name: 'TaskDetail', params: { id: item.pk } }"
                ><h6 data-filter-by="text" class="H6-filter-by-text">
                  {{ item.name }}
                </h6></router-link
              >
              <span class="text-small">{{ item.description }}</span>
            </div>
            <div class="dropdown card-options">
              <button
                class="btn-options"
                type="button"
                id="task-dropdown-button-1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="material-icons">more_vert</i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li
                  class="dropdown-item text-success"
                  v-on:click="changeTaskStatus(item, 'CO')"
                >
                  Mark As Done
                </li>
                <div class="dropdown-divider"></div>
                <li
                  class="dropdown-item text-danger"
                  v-on:click="changeTaskStatus(item, 'DR')"
                >
                  Archive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TaskDataService from "@/services/TaskDataService";

export default {
  name: "Task",
  data() {
    return {
      tasks: [],
      q: "",
      status: "",
    };
  },
  methods: {
    changeTaskStatus(itemId, status) {
      TaskDataService.changeStatus(itemId, status)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    filterTasks() {
      TaskDataService.filters(this.q)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    TaskDataService.getAll()
      .then((response) => {
        this.tasks = response.data;
        console.log(response.data)

      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>