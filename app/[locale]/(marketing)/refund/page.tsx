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
    title: t('refund.title'),
    description: t('refund.description'),
    openGraph: {
      images: [t('refund.ogImage')],
    },
  };
}

export default function RefundPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <p className="text-muted-foreground mb-8">
          Effective Date: January 1, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
          <p>
            At yanina.AI, we are committed to providing reliable and high-quality AI video generation services. This Refund Policy outlines the specific conditions under which refunds may be granted.
          </p>
          <p className="mt-4">
            <strong>Important:</strong> All credit purchases and subscription fees are final and non-refundable, except in the limited circumstances described below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
          
          <h3 className="text-xl font-semibold mb-3">Service Failure Refunds</h3>
          <p>
            Refunds will only be considered in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Complete Service Failure:</strong> If yanina.AI experiences a complete system failure or crash that prevents you from accessing or using the Service for more than 48 consecutive hours</li>
            <li><strong>Technical Inability to Deliver:</strong> If we are unable to deliver the Service due to technical issues on our end that prevent video generation functionality</li>
            <li><strong>Extended Service Outage:</strong> If the Service is unavailable for an extended period due to our infrastructure failures</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Refunds Are NOT Available For:</h3>
          <p>
            The following situations do NOT qualify for refunds:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Change of Mind:</strong> Simply deciding you no longer want the service</li>
            <li><strong>Dissatisfaction:</strong> Dissatisfaction with generated video quality, content, or results</li>
            <li><strong>Used Credits:</strong> Credits that have already been consumed or used to generate videos</li>
            <li><strong>User Error:</strong> Mistakes in usage, misunderstanding of features, or incorrect input</li>
            <li><strong>Partial Service Interruptions:</strong> Temporary technical issues, brief outages, or degraded performance</li>
            <li><strong>Accidental Purchases:</strong> Accidental or mistaken purchases</li>
            <li><strong>Account Termination:</strong> Account suspension or termination due to violation of Terms of Service</li>
            <li><strong>Third-Party Issues:</strong> Issues with payment gateways, internet connectivity, or other external factors</li>
            <li><strong>Subscription Cancellations:</strong> Cancelling a subscription does not entitle you to a refund for the current billing period</li>
            <li><strong>Late Requests:</strong> Refund requests submitted more than 30 days after the service failure</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Refund Request Timeframe</h2>
          <p>
            To be eligible for a refund due to service failure, you must submit your refund request:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Within 30 days</strong> of the service failure occurrence</li>
            <li>While the service failure is ongoing or immediately after it is resolved</li>
            <li>With detailed documentation of the service failure and its impact on your ability to use the Service</li>
          </ul>
          <p className="mt-4">
            Refund requests submitted after 30 days from the service failure will not be considered.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. How to Request a Refund</h2>
          
          <h3 className="text-xl font-semibold mb-3">Step 1: Contact Support</h3>
          <p>
            To request a refund due to service failure, send an email to support@yanina.ai with the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your account email address</li>
            <li>Order number or transaction ID</li>
            <li>Date of purchase</li>
            <li>Detailed description of the service failure, including:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Date and time of the service failure</li>
                <li>Duration of the outage or inability to use the Service</li>
                <li>Specific error messages or issues encountered</li>
                <li>Screenshots or documentation of the service failure</li>
              </ul>
            </li>
            <li>Impact on your ability to use the Service</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Step 2: Review Process</h3>
          <p>
            Our support team will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acknowledge your request within 1-2 business days</li>
            <li>Review your eligibility based on this policy</li>
            <li>Verify the service failure with our technical team</li>
            <li>Request additional information if needed</li>
            <li>Make a decision within 5 business days of receiving all required information</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Step 3: Refund Processing</h3>
          <p>
            If your refund request is approved:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You will receive confirmation via email</li>
            <li>Refunds will be issued to the original payment method</li>
            <li>Processing time: 5-14 business days</li>
            <li>Bank or payment processor may add additional processing time</li>
            <li>For subscription refunds, the subscription will be cancelled and no future charges will occur</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> If your refund request is denied, we will provide a detailed explanation of the decision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Refund Methods</h2>
          <p>
            Approved refunds will be issued to the original payment method used for the purchase:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Credit/Debit Cards:</strong> 5-14 business days</li>
            <li><strong>PayPal:</strong> 3-7 business days</li>
            <li><strong>Other Payment Methods:</strong> Processing time varies by payment provider</li>
          </ul>
          <p className="mt-4">
            The refund amount will be equal to the amount paid, minus any credits that were already consumed before the service failure occurred.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Credits and Subscription Refunds</h2>
          
          <h3 className="text-xl font-semibold mb-3">Credit Purchases</h3>
          <p>
            For one-time credit purchases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds will be calculated based on unused credits at the time of service failure</li>
            <li>Credits already consumed will not be refunded</li>
            <li>If all credits were unused due to service failure, a full refund will be issued</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">Subscription Plans</h3>
          <p>
            For subscription plans:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>If service failure occurs, refunds will be calculated based on the unused portion of the current billing period</li>
            <li>The subscription will be cancelled as part of the refund process</li>
            <li>Credits already consumed during the billing period will not be refunded</li>
            <li>Future billing periods will not be charged</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
          <p>
            If you disagree with our refund decision, you may:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request an internal review by providing additional documentation</li>
            <li>Contact us at support@yanina.ai for further clarification</li>
            <li>File a dispute with your payment provider in accordance with their policies</li>
          </ul>
          <p className="mt-4">
            We are committed to fair and transparent resolution of all refund requests that meet our policy criteria.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Fraudulent Refund Requests</h2>
          <p>
            We reserve the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deny refunds for suspected fraudulent activity or misrepresentation</li>
            <li>Suspend accounts that submit fraudulent refund requests</li>
            <li>Report fraudulent behavior to relevant authorities</li>
            <li>Pursue legal action for fraudulent chargebacks</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Policy Modifications</h2>
          <p>
            We reserve the right to modify this refund policy at any time. Changes will be:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Posted on this page with an updated effective date</li>
            <li>Communicated via email for significant changes</li>
            <li>Applied to new purchases after the effective date</li>
            <li>Honored under previous terms for existing purchases made before the change</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p>
            For refund requests and questions about this policy:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>Support Email:</strong> support@yanina.ai</li>
            <li><strong>Response Time:</strong> 1-2 business days</li>
            <li><strong>Website:</strong> https://yanina.ai</li>
          </ul>
          
          <p className="mt-6 p-4 bg-primary/10 rounded-lg">
            <strong>Important Reminder:</strong> This refund policy is strictly limited to service failures caused by yanina.AI system crashes or technical failures. All other purchases are final and non-refundable. We encourage you to contact us with any questions or concerns about our Service.
          </p>
        </section>
      </div>
    </div>
  );
}
