<template>
  <div>
    <div>
      {{ count }}
    </div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
const count = ref(0);
const increment = () => count.value++;
</script>
