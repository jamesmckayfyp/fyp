<template>
  <div class="events">
      <div class="events--home">
          
              {{eventPlayer}} - {{eventAction}} - {{eventTime}}
          
      </div>
      <div class="events--away">
        
              {{eventTime2}} - {{eventAction2}} - {{eventPlayer2}}
          
      </div>
  </div>
</template>

<script>

export default {
  name: "Events",
  data() {
      return {
          eventPlayer: "Bruno Fernandes",
          eventAction: "Goal",
          eventTime: "57'",

          eventPlayer2: "Harry Kane",
          eventAction2: "Yellow",
          eventTime2: "76'"
      }
  }
};
</script>