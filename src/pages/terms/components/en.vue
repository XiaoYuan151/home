<script setup>
import { ref } from "vue";

const cn = ref(false);
if (location.hostname.endsWith(".cn")) {
  cn.value = true;
}
</script>
<template>
  <p>
    Welcome to
    <a v-if="cn === true" href="//www.xiaoyuan151.com.cn"
      >www.xiaoyuan151.com.cn</a
    ><a v-else href="//www.xiaoyuan151.com">www.xiaoyuan151.com</a>(hereinafter
    referred to as "this website" or "we"). These Terms of Use (hereinafter
    referred to as "Terms") govern your use of this website and its services,
    content, and features. By using this website, you agree to comply with these
    Terms. If you do not agree, please do not use this website.
  </p>
  <h2>1. Acceptance of Terms</h2>
  <p>
    These Terms constitute a legal agreement between you and this website,
    applicable to all your access and use of this website. We may update the
    Terms at any time, and the updated version will be posted on this page,
    indicating the "Last Updated Date." Continued use of this website
    constitutes your acceptance of the updated Terms.
  </p>
  <h2>2. Usage Permissions</h2>
  <p>
    We grant you a limited, non-exclusive, non-transferable license to access
    and use this website solely for personal, non-commercial purposes. You must
    not:
  </p>
  <ul>
    <li>Engage in any illegal or unauthorized activities.</li>
    <li>Interfere with the normal operation or security of this website.</li>
    <li>
      Copy, modify, or distribute the website's content without permission.
    </li>
  </ul>
  <h2>3. User Responsibilities</h2>
  <p>You agree that when using this website:</p>
  <ul>
    <li>You will not post illegal, offensive, or infringing content.</li>
    <li>
      You will not use automated tools to obtain website data without
      authorization.
    </li>
    <li>
      You will not attempt to access the website's backend systems without
      permission.
    </li>
  </ul>
  <p>
    We reserve the right to monitor user behavior and restrict or terminate
    access when necessary.
  </p>
  <h2>4. Intellectual Property</h2>
  <p>
    All content on this website (including text, images, code, etc.) is
    protected by copyright, trademark, or other laws and belongs to this website
    or its licensors. Without written permission, you may not use, copy, or
    distribute these contents.
  </p>
  <h2>5. Third-Party Links</h2>
  <p>
    This website may contain links to third-party websites. We are not
    responsible for the availability, content, or practices of these websites.
    You assume the risk of accessing third-party websites at your own
    discretion.
  </p>
  <h2>6. Disclaimer</h2>
  <p>
    This website is provided "as is" without any express or implied warranties,
    including warranties of merchantability or fitness for a particular purpose.
    We are not responsible for:
  </p>
  <ul>
    <li>Any loss or damage caused by using this website.</li>
    <li>The accuracy or completeness of the website's content.</li>
    <li>Service interruptions due to technical issues.</li>
  </ul>
  <h2>7. Termination of Use</h2>
  <p>
    We may suspend or terminate your access to this website at any time without
    prior notice, for reasons including but not limited to violations of these
    Terms or the need to protect website security.
  </p>
  <h2>8. Governing Law</h2>
  <p>
    These Terms are governed by the laws of the People's Republic of China. Any
    disputes shall be submitted to the people's court with jurisdiction in the
    location of the website operator.
  </p>
  <h2>9. Updates to Terms</h2>
  <p>
    We may update these Terms from time to time, and updates will be posted on
    this page. Please check regularly for the latest Terms. Continued use of
    this website constitutes your acceptance of the updates.
  </p>
  <h2>10. Contact Information</h2>
  <p>
    If you have any questions, please contact us through the following methods:
  </p>
  <p>
    Email:
    <a v-if="cn === true" href="mailto:contact@xiaoyuan151.com.cn"
      >contact@xiaoyuan151.com.cn</a
    >
    <a v-else href="mailto:contact@xiaoyuan151.com">contact@xiaoyuan151.com</a>
  </p>
  <p>We will respond to your request as soon as possible.</p>
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
</style>
