<template>
  <div></div>
</template>
<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
console.log("Call notify ", window.messageAPI.onShowMessage);
const $q = useQuasar();
window.messageAPI.onShowMessage(async (event, options) => {
  let defaultOptions = {
    type: "positive",
    position: "center",
    message: "по умолчанию",
    caption: "по умолчанию",
    icon: null,
    timeout: 1000,
  };
  $q.notify.setDefaults(defaultOptions);
  let isOptionsValid = $q.notify(options);
  if (!isOptionsValid) $q.notify(defaultOptions);
  console.log("callback is calling ");
});
</script>
