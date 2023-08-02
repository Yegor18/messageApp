<template>
  <div></div>
</template>
<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
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
  //Если notify метод вернул false, значит переданы неверные параметры и уведомление не отобразится.
  //В этом случае отправляю опции по дефолту
  let isOptionsValid = $q.notify(options);
  if (!isOptionsValid) $q.notify(defaultOptions);
});
</script>
