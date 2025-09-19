<script setup>
import { onMounted, ref } from "vue";

const avatar = ref(null);
onMounted(() => {
  sha256("xiaoyuan151@outlook.com").then((hash) => {
    avatar.value.src = `https://www.gravatar.com/avatar/${hash}`;
  });
});

async function sha256(email) {
  const encoder = new TextEncoder();
  const data = encoder.encode(email);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const array = Array.from(new Uint8Array(buffer));
  return array.map((b) => b.toString(16).padStart(2, "0")).join("");
}
</script>

<template>
  <main>
    <div class="header">
      <div class="title">
        <img ref="avatar" alt="avatar" src="" />
        <h1>小源151</h1>
      </div>
      <p class="contact" style="white-space: nowrap">
        如对页面内容有任何疑问，请联系：<a href="mailto:contact@xiaoyuan151.com"
          >contact@xiaoyuan151.com</a
        >
      </p>
    </div>
    <div class="content">
      <section class="section">
        <h2>官方链接</h2>
        <a href="/" target="_blank">官方网站</a>
        <a href="//blog.xiaoyuan151.com" target="_blank">官方博客</a>
        <a href="//drive.xiaoyuan151.com" target="_blank">官方网盘</a>
        <a href="//music.xiaoyuan151.com" target="_blank">官方音乐站</a>
        <a href="//git.xiaoyuan151.com" target="_blank">官方代码站</a>
        <a href="//status.xiaoyuan151.com" target="_blank">官方状态站</a>
      </section>
      <section class="section">
        <h2>赞助链接</h2>
        <h3>使用以下链接注册以支持我，并享受专属优惠！</h3>
        <a href="//xylnk.in/bandwagonhost" target="_blank">BandwagonHost</a>
        <a href="//xylnk.in/akile" target="_blank">AkileCloud</a>
        <a href="//xylnk.in/donate" target="_blank">官方网站</a>
      </section>
      <section class="section">
        <h2>友情链接</h2>
        <a href="/" target="_blank">官方网站</a>
        <a href="/" target="_blank">官方网站</a>
        <a href="/" target="_blank">官方网站</a>
      </section>
      <section class="section">
        <h2>其他链接</h2>
        <a href="//src.xiaoyuan151.net/pub.gpg" target="_blank"
          >官方 GnuPG 公钥</a
        >
        <a href="/" target="_blank">官方网站</a>
        <a href="//img.xiaoyuan151.com/neuro" target="_blank"
          >随机 Neuro 图片</a
        >
      </section>
    </div>
  </main>
</template>

<style scoped>
a {
  color: inherit;
}

main {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.header {
  width: 100%;
  margin: 24px auto 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.title {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.title img {
  height: 80px;
  border-radius: 10px;
}

.contact {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contact a:hover {
  color: var(--color-border-hover);
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section h2 {
  font-size: 16px;
  padding-left: 4px;
}

.section h3 {
  font-size: 10px;
  padding-left: 4px;
}

.section h2 + h3 {
  margin-top: -10px;
}

.section a {
  width: 100%;
  height: 50px;
  line-height: 50px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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
