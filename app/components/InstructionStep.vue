<template>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
      {{ number }}
    </div>
    <div class="flex-1">
      <h4 class="font-bold text-lg text-text-light dark:text-text-dark">{{ title }}</h4>
      <p class="text-muted"><slot /></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: Number,
  title: String,
});
</script>
