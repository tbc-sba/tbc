<template>
  <div class="flex items-center gap-4 p-4 bg-background-light dark:bg-background-dark rounded-lg">
    <div class="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
      <span class="material-icons text-white">{{ icon }}</span>
    </div>
    <div class="text-right">
      <h4 class="font-bold text-text-light dark:text-text-dark">{{ title }}</h4>
      <p class="text-muted"><slot /></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
});
</script>
