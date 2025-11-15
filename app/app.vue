<template>
  <div class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  },
  title: 'متوسطة الطيب ابراهيم شريفة',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'الصفحة الرسمية لمتوسطة الطيب إبراهيم شريفة، لغرز العلم لترقى القيم، ونبني مستقبلا مشرقا' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
  ]
})
</script>
