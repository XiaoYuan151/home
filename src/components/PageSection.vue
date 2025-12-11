<script setup>
defineProps({
  subtitle: {
    type: String,
    required: false,
  },
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="section">
    <h3 v-if="subtitle">{{ subtitle }}</h3>
    <div v-for="link in list">
      <a :href="link.url" target="_blank">
        <font-awesome-icon :icon="link.icon" size="lg" />
        {{ link.name }}</a
      >
    </div>
    <!--
      <a @click="copy_bitcoin">
        <font-awesome-icon :icon="['fab', 'bitcoin']" size="lg" />
        {{ t("bitcoin") }}</a
      >
      <a @click="copy_dogecoin">
        <font-awesome-icon :icon="['fas', 'dollar-sign']" size="lg" />
        {{ t("dogecoin") }}</a
      >
      <a @click="copy_ethereum">
        <font-awesome-icon :icon="['fab', 'ethereum']" size="lg" />
        {{ t("ethereum") }}</a
      >
      <a @click="copy_tron">
        <font-awesome-icon :icon="['fas', 'dollar-sign']" size="lg" />
        {{ t("tron") }}</a
      >
    -->
  </section>
</template>

<style scoped>
:deep(a) {
  color: inherit;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
}

.section h3 {
  font-size: 10px;
  padding-left: 4px;
}

.section a {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--color-background-soft);
  transition: border-color 0.3s ease;
}

.section a:hover {
  border-color: var(--color-border-hover);
  background-color: var(--color-background-mute);
}
</style>
