<template>
  <div class="q-pa-md row justify-center"></div>
</template>
<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();
$q.notify({
  type: "positive",
  message: 'This is a "positive" type notification.',
  caption: "Something",
  position: "top-right",
});
</script>
