<script setup>
import { onMounted, ref } from "vue";

const avatar = ref(null);
const year = ref(null);
const cn = ref(false);
if (location.hostname.endsWith(".cn")) {
  cn.value = true;
}
onMounted(() => {
  const start = 2024;
  const current = new Date().getFullYear();
  year.value.textContent = start === current ? current : `${start}–${current}`;
});
</script>

<template>
  <main>
    <div class="header">
      <div class="title">
        <img
          ref="avatar"
          alt="avatar"
          src="https://img.xiaoyuan151.net/avatar.jpg"
        />
        <h1>小源151</h1>
      </div>
      <p>欢迎来到小源151官方网站！</p>
      <p>
        如对页面内容有任何疑问，请联系：
        <a v-if="cn" href="mailto:contact@xiaoyuan151.com.cn"
          >contact@xiaoyuan151.com.cn</a
        >
        <a v-else href="mailto:contact@xiaoyuan151.com"
          >contact@xiaoyuan151.com</a
        >
      </p>
    </div>
    <div class="content">
      <section class="section">
        <h2>官方链接</h2>
        <a href="//www.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'house']" size="lg" />
          官方网站</a
        >
        <a href="//blog.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'blog']" size="lg" />
          官方博客</a
        >
        <a href="//drive.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'cloud']" size="lg" />
          官方网盘</a
        >
        <a href="//music.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'compact-disc']" size="lg" />
          官方音乐站</a
        >
        <a href="//git.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'git-alt']" size="lg" />
          官方代码站</a
        >
        <a href="//status.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'laptop']" size="lg" />
          官方状态站</a
        >
        <a
          href="javascript:
            navigator.clipboard.writeText('3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB');
            alert('已将 Bitcoin 地址复制到剪切板');
          "
        >
          <font-awesome-icon :icon="['fab', 'bitcoin']" size="lg" />
          通过 Bitcoin 支持我</a
        >
        <a
          href="javascript:
            navigator.clipboard.writeText('DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH');
            alert('已将 Dogecoin 地址复制到剪切板');
          "
        >
          <font-awesome-icon :icon="['fas', 'dollar-sign']" size="lg" />
          通过 Dogecoin 支持我</a
        >
        <a
          href="javascript:
            navigator.clipboard.writeText(
              '0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500',
            );
            alert('已将 Ethereum 地址复制到剪切板');
          "
        >
          <font-awesome-icon :icon="['fab', 'ethereum']" size="lg" />
          通过 Ethereum 支持我</a
        >
        <a
          href="javascript:
            navigator.clipboard.writeText(
              'TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF',
            );
            alert('已将 TRON 地址复制到剪切板');
          "
        >
          <font-awesome-icon :icon="['fas', 'dollar-sign']" size="lg" />
          通过 TRON 支持我</a
        >
      </section>
      <section v-if="!cn" class="section">
        <h2>赞助链接</h2>
        <h3>使用以下链接注册以支持我（完全免费），并享受专属优惠！</h3>
        <a href="//xylnk.in/binance" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          Binance - 安全便捷的加密货币交易所</a
        >
        <a href="//xylnk.in/wasabicard" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          WasabiCard - 安全便捷的加密货币虚拟卡</a
        >
        <a href="//xylnk.in/wise" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          Wise - 专业的跨境汇款平台</a
        >
        <a href="//xylnk.in/bandwagonhost" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          BandwagonHost - 速度超快的服务器提供商</a
        >
        <a href="//xylnk.in/justmysocks" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          JustMySocks - 速度超快的代理服务提供商</a
        >
        <a href="//xylnk.in/dmit" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          DMIT - 高品质的服务器提供商</a
        >
        <a href="//xylnk.in/racknerd" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          RackNerd - 便宜大碗的服务器提供商</a
        >
        <a href="//xylnk.in/akile" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          AkileCloud - 便宜的服务器提供商</a
        >
        <a href="//xylnk.in/facmata" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          FacMata.NET - 便宜的代理服务提供商</a
        >
      </section>
      <section class="section">
        <h2>友情链接</h2>
        <a href="//www.xiaoyuanstd.org" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          小源工作室</a
        >
        <a href="//ai.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          小源人工智能</a
        >
        <a href="//wyf9.top" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          wyf9 的博客</a
        >
        <a href="//zackzheng1121.github.io" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          zackzheng 的小基地</a
        >
        <a href="//siiway.top" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          SiiWay 的官网</a
        >
      </section>
      <section class="section">
        <h2>其他链接</h2>
        <a href="//src.xiaoyuan151.net/pub.gpg" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          官方 GnuPG 公钥</a
        >
        <a href="//swarm.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          蜂群工具箱</a
        >
        <a href="//img.xiaoyuan151.com/neuro" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          随机 Neuro 图片</a
        >
      </section>
    </div>
  </main>
  <footer>
    <p>
      &copy; 版权所有 <span ref="year"></span> 小源151 | 保留所有权利 |
      <a v-if="cn" href="https://beian.miit.gov.cn" target="_blank"
        >桂ICP备2025072112号</a
      >
      <a v-else href="https://icp.gov.moe/?keyword=20250319" target="_blank"
        >萌ICP备20250319号</a
      >
    </p>
    <p><a href="/privacy">隐私政策</a> | <a href="/terms">使用条款</a></p>
  </footer>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
  user-select: none;
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

.header a {
  font-weight: bold;
}

.header a:hover {
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
  user-select: none;
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

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer a {
  font-weight: bold;
}

footer a:hover {
  color: var(--color-border-hover);
}
</style>
