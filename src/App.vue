<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  computed: {
    truncate() {
      return (message,length)=>{
      if (message.length > length) {
        return message.substr(0,length)+"....";
      } else {
        return message;
      }
      }
      
    },
  },
};
</script>