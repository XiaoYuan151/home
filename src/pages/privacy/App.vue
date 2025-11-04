<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import zh from "./components/zh.vue";
import en from "./components/en.vue";

const { t, locale } = useI18n();
const year = ref(null);
const cn = ref(false);
onMounted(() => {
  if (location.hostname.endsWith(".cn")) {
    cn.value = true;
  }
  const start = 2024;
  const current = new Date().getFullYear();
  if (year.value) {
    year.value.textContent =
      start === current ? current : `${start}–${current}`;
  }
  document.title = t("title");
});
</script>

<template>
  <main>
    <div class="header">
      <div class="title">
        <img alt="avatar" src="https://img.xiaoyuan151.net/avatar.jpg" />
        <h1>{{ t("title") }}</h1>
      </div>
      <p>{{ t("update") }}</p>
      <a href="/">{{ t("back") }}</a>
    </div>
    <div class="content">
      <zh v-if="locale.value === 'zh'"></zh>
      <en v-else></en>
    </div>
  </main>
  <footer>
    <p>
      &copy; {{ t("copy") }} <span ref="year"></span> {{ t("owner") }}
      <a v-if="cn" href="https://beian.miit.gov.cn" target="_blank">{{
        t("beian")
      }}</a>
      <a v-else href="https://icp.gov.moe/?keyword=20250319" target="_blank">{{
        t("icp")
      }}</a>
    </p>
    <p>
      <a href="/privacy">{{ t("privacy") }}</a> |
      <a href="/terms">{{ t("terms") }}</a>
    </p>
  </footer>
</template>

<style scoped>
a {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  user-select: none;
}

a:hover {
  color: var(--color-border-hover);
}

main {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 14px 6px 38px;
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

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
