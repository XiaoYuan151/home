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
    <a v-if="cn" href="//www.xiaoyuan151.com.cn">www.xiaoyuan151.com.cn</a
    ><a v-else href="//www.xiaoyuan151.com">www.xiaoyuan151.com</a>(hereinafter
    referred to as "we" or "this website"). We value your privacy highly and are
    committed to protecting your personal information. This privacy policy
    explains how we collect, use, disclose, and protect your information when
    you use this website. Please read the following carefully.
  </p>
  <h2>1. Information We Collect</h2>
  <p>We may collect the following types of personal information:</p>
  <ul>
    <li>
      <strong>Information You Provide</strong>: Such as name, email address, or
      other information provided through contact forms, registration, or comment
      features.
    </li>
    <li>
      <strong>Automatically Collected Information</strong>: When you visit this
      website, we may automatically collect information through Cookies or
      similar technologies, including IP address, browser type, device
      information, access time, and page view history.
    </li>
    <li>
      <strong>Third-Party Sources</strong>: If you interact with this website
      through social media or other third-party platforms, we may obtain limited
      information from these platforms.
    </li>
  </ul>
  <h2>2. How We Use Your Information</h2>
  <p>We may use the collected information for the following purposes:</p>
  <ul>
    <li>Provide and optimize the services and features of this website.</li>
    <li>Respond to your inquiries or provide customer support.</li>
    <li>Analyze website usage to improve user experience.</li>
    <li>
      Send notifications or updates related to this website (if subscribed).
    </li>
    <li>Comply with legal obligations or protect our legitimate interests.</li>
  </ul>
  <h2>3. Information Sharing and Disclosure</h2>
  <p>
    We will not sell or rent your personal information to third parties, but may
    share your information in the following circumstances:
  </p>
  <ul>
    <li>
      Cooperate with third parties providing services (such as website hosting,
      data analysis), where these third parties use your information only to the
      extent necessary and are bound by confidentiality obligations.
    </li>
    <li>
      Disclose information in accordance with legal requirements or government
      orders.
    </li>
    <li>
      Disclose information as necessary to protect the rights, property, or
      safety of this website, users, or other parties.
    </li>
  </ul>
  <h2>4. Cookies and Tracking Technologies</h2>
  <p>
    This website may use Cookies and similar technologies to enhance user
    experience and analyze website traffic. You can disable Cookies through your
    browser settings, but this may affect some features of the website.
  </p>
  <h2>5. Data Security</h2>
  <p>
    We take reasonable technical and organizational measures to protect your
    personal information from unauthorized access, loss, or tampering. However,
    internet transmission is not completely secure, and we cannot absolutely
    guarantee data security.
  </p>
  <h2>6. Your Rights</h2>
  <p>Depending on applicable laws, you may have the following rights:</p>
  <ul>
    <li>Access your personal information held by us.</li>
    <li>Request correction or deletion of your personal information.</li>
    <li>Object to or restrict our processing of your information.</li>
    <li>Request transfer of your information to other service providers.</li>
  </ul>
  <p>To exercise these rights, please contact us via email.</p>
  <h2>7. Third-Party Links</h2>
  <p>
    This website may contain links to third-party websites. These websites have
    their own independent privacy policies, and we are not responsible for their
    content or practices. Please review the privacy policies of any third-party
    websites you visit.
  </p>
  <h2>8. Children's Privacy</h2>
  <p>
    This website is not intended for children under 13 years old. We do not
    knowingly collect personal information from children. If we discover that we
    have inadvertently collected information from children, please contact us,
    and we will delete the relevant information as soon as possible.
  </p>
  <h2>9. Changes to the Privacy Policy</h2>
  <p>
    We may update this privacy policy from time to time. Any changes will be
    posted on this page, with the "Last Updated Date" updated. Please check this
    policy regularly for the latest information.
  </p>
  <h2>10. Contact Us</h2>
  <p>
    If you have any questions or comments about this privacy policy, please
    contact us through the following methods:
  </p>
  <p>
    Email:
    <a v-if="cn" href="mailto:contact@xiaoyuan151.com.cn"
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
