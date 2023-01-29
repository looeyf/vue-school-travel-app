<script setup lang="ts">
import mockedData from '@/data.json';

const destinations = mockedData.destinations;
</script>

<template>
  <div class="home">
    <h1>All destinations</h1>

    <div class="destinations">
      <router-link v-for="destination in destinations" :to="destination.slug" :key="destination.id">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
