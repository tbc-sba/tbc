<template>
  <div class="p-4 sm:p-6 bg-card-light dark:bg-card-dark rounded-lg shadow-sm text-right animate-fade-in">
    <h2 class="text-2xl font-bold mb-6 text-primary-DEFAULT text-center">تواصل معنا</h2>
    <div class="space-y-4">
      <ContactItem icon="location_on" title="العنوان">
        شارع المثال، المدينة، الرمز البريدي 12345
      </ContactItem>
      <ContactItem icon="phone" title="الهاتف">
        <a href="tel:+1234567890" class="hover:text-primary-DEFAULT transition-colors" dir="ltr">+123 456 7890</a>
      </ContactItem>
      <ContactItem icon="email" title="البريد الإلكتروني">
        <a href="mailto:info@school.com" class="hover:text-primary-DEFAULT transition-colors">info@school.com</a>
      </ContactItem>
       <ContactItem icon="schedule" title="أوقات العمل">
        الأحد - الخميس: 8:00 صباحًا - 4:00 مساءً
      </ContactItem>
    </div>
  </div>
</template>

<script setup>
import ContactItem from '~/components/ContactItem.vue';
</script>
