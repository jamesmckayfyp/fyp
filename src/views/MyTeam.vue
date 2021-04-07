<template>
  <div id="my-team">
      <MyTeamContent />
  </div>
</template>

<script>
import MyTeamContent from "../components/MyTeam/MyTeamContent";

export default {
  name: "MyTeam",
  title: 'My Team | statpad',
  components: {
    MyTeamContent
  },
};
</script>
