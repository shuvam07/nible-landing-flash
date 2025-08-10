import { FC } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy: FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>
            Your privacy is important to us. It is Nible's policy to respect
            your privacy regarding any information we may collect from you
            through our app, Nible.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Information we collect
          </h2>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. How we use it</h2>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Cookies</h2>
          <p>
            Our app may use cookies to enhance user experience. You have the
            option to either accept or refuse these cookies, and know when a
            cookie is being sent to your device. If you choose to refuse our
            cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Links to other sites</h2>
          <p>
            Our service may contain links to other sites that are not operated
            by us. If you click a third-party link, you will be directed to that
            third party's site. We strongly advise you to review the Privacy
            Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third-party sites or
            services.
          </p>
          <h2 className="text-2xl font-semibold mt-6">5. Changes to this policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at{" "}
            <a href="mailto:support@nible.news">support@nible.news</a>.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            This policy is effective as of 8 August 2025.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;