<template>
  <section class="container pb-4 mb-md-3">
    <Roller />
    <Agents />
  </section>
</template>
<script>
import Agents from "@/components/Agents.vue";
import Roller from "@/components/Roller.vue";

export default {
  name: "Home",
  components: {
    Agents,
    Roller,
  },
};
</script>
