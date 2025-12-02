/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import type { Locale } from "@/i18n.config";

export async function generateMetadata({
  params
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });

  return {
    title: t('terms.title'),
    description: t('terms.description'),
    openGraph: {
      images: [t('terms.ogImage')],
    },
  };
}

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <p className="text-muted-foreground mb-8">
          Effective Date: January 1, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to yanina.AI ("yanina.AI", "we", "our", or "us"). These Terms of Service ("Terms") govern your use of our website and services (collectively, the "Service") located at yanina.AI.
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            yanina.AI provides an AI-powered video generation platform. Our Service operates on a credit-based system where:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Users purchase credits through our payment gateway</li>
            <li>Credits are used to generate video content using our AI technology</li>
            <li>Each video generation consumes a specified amount of credits based on the service used</li>
            <li>Credits are non-transferable and have no cash value outside of the Service</li>
          </ul>
          <p className="mt-4">
            Our Service allows you to generate high-quality video content through natural language descriptions using advanced AI technology.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p>
            To access certain features of our Service, you may be required to create an account. When creating an account, you must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Promptly update your account information to keep it accurate</li>
            <li>Accept all risks of unauthorized access to your account</li>
            <li>Be at least 18 years old or the age of legal consent in your jurisdiction</li>
          </ul>
          <p className="mt-4">
            You are responsible for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Upload or transmit viruses or malicious code</li>
            <li>Engage in any activity that disrupts or interferes with the Service</li>
            <li>Attempt to gain unauthorized access to any portion of the Service</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Violate any applicable laws in your jurisdiction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of yanina.AI and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>
          <p className="mt-4">
            You retain ownership of any content you generate using the Service. By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your generated content solely in connection with operating and providing the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Credits System and Payment Terms</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-4">6.1 Credit Purchase</h3>
          <p>
            Our Service operates on a credit-based system. To use our video generation services, you must purchase credits through our payment gateway. Credits can be purchased through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>One-time credit packages</li>
            <li>Subscription plans that provide recurring credits</li>
          </ul>
          <p className="mt-4">
            All credit purchases are final and non-refundable except as explicitly stated in Section 6.4 (Refund Policy).
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Payment Processing</h3>
          <p>
            All payments are processed through secure third-party payment gateways. By making a purchase, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete billing information</li>
            <li>Pay all charges incurred by your account, including applicable taxes</li>
            <li>Comply with the payment gateway's terms and conditions</li>
            <li>Authorize us to charge your payment method for all purchases</li>
          </ul>
          <p className="mt-4">
            We reserve the right to change our pricing at any time. Price changes will not affect credits already purchased or subscription plans already in effect.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-4">6.3 Credit Usage and Expiration</h3>
          <p>
            Credits are consumed when you use our video generation services. You acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credits are non-transferable and cannot be exchanged for cash</li>
            <li>Credits have no monetary value outside of the Service</li>
            <li>Credits may expire according to the terms of your purchase or subscription plan</li>
            <li>Unused credits from terminated accounts may be forfeited</li>
            <li>We reserve the right to modify credit consumption rates with reasonable notice</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">6.4 Refund Policy</h3>
          <p>
            <strong>General Policy:</strong> All credit purchases and subscription fees are final and non-refundable, except as required by applicable law.
          </p>
          <p className="mt-4">
            <strong>Service Failure Refunds:</strong> We will provide refunds only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>If our Service experiences a complete system failure or crash that prevents you from using the Service for an extended period (more than 48 consecutive hours)</li>
            <li>If we are unable to deliver the Service due to technical issues on our end</li>
            <li>Refund requests must be submitted within 30 days of the service failure</li>
            <li>Refunds will be processed to the original payment method within 14 business days</li>
          </ul>
          <p className="mt-4">
            <strong>Non-Refundable Situations:</strong> The following situations do NOT qualify for refunds:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dissatisfaction with generated video quality or content</li>
            <li>Accidental purchases or change of mind</li>
            <li>Partial service interruptions or temporary technical issues</li>
            <li>User error or misuse of the Service</li>
            <li>Credits already consumed or used</li>
            <li>Account termination due to violation of these Terms</li>
          </ul>
          <p className="mt-4">
            To request a refund due to service failure, please contact us at [Your Email] with detailed information about the service issue and your account information.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-4">6.5 Subscription Plans</h3>
          <p>
            If you purchase a subscription plan:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
            <li>You may cancel your subscription at any time, but you will not receive a refund for the current billing period</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>Credits provided through subscriptions may be subject to expiration terms</li>
            <li>We reserve the right to modify subscription plans with 30 days' notice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimers and Limitations of Liability</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mt-4">
            We do not guarantee that the Service will be uninterrupted, secure, or error-free. The quality of generated videos may vary, and we do not warrant that the results will meet your specific requirements or expectations.
          </p>
          <p className="mt-4">
            IN NO EVENT SHALL yanina.AI, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
          </p>
          <p className="mt-4">
            Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless yanina.AI and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Service, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of generated content in violation of any laws or third-party rights</li>
            <li>Any content you generate or submit through the Service</li>
            <li>Your violation of any applicable laws or regulations</li>
            <li>Your infringement of any intellectual property or other rights of any person or entity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="mt-4">
            Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Privacy Policy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising under these Terms will be resolved through binding arbitration or in courts of competent jurisdiction, as applicable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li>Email: support@yanina.ai</li>
            <li>Website: https://yanina.ai</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
