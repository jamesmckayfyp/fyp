<template>
  <div class="container">
    <Welcome />
    <LiveScores />
</div>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import LiveScores from "./LiveScores";

export default {
  name: "HomeContent",
  components: {
    Welcome,
    LiveScores,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
};
</script>