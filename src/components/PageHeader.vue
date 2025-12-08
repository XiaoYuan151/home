<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="header">
    <div class="title">
      <img alt="avatar" src="https://img.xiaoyuan151.net/avatar.jpg" />
      <h1>{{ title }}</h1>
    </div>
    <p>{{ subtitle }}</p>
    <p v-html="html"></p>
  </div>
</template>

<style scoped>
:deep(a) {
  color: inherit;
  text-decoration: none;
  user-select: none;
}

.header {
  width: 100%;
  margin: 24px auto 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.header p {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.header :deep(a) {
  font-weight: bold;
}

.header :deep(a:hover) {
  color: var(--color-border-hover);
}

.title {
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.title img {
  height: 80px;
  border-radius: 10px;
}
</style>
