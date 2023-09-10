import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { motion } from "framer-motion";
import Footer from "../../components/footer";
const Privacy = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scale = 1 + scrollY * 0.0009;
  return (
    <div className="bg-black text-white overflow-hidden pb-4">
      <div className=" lg:h-[100vh] md:h-[50vh] h-[80vh]  overflow-hidden p-4 text-white px-4 lg:px-16 relative bg-black">
        <Navbar />
        <motion.div
          style={{ transform: `scale(${scale})` }}
          className="h-full header9-image w-full absolute bg-no-repeat flex items-center justify-center py-4 top-0 left-0"
        ></motion.div>
        <div className="mt-32">
          <div className="relative mt-48 bg-black bg-opacity-75 border-2 border-gray-200 p-4 rounded-md mx-auto md:w-[80%] lg:w-[70%]">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mx-auto text-3xl lg:text-6xl leading-tight"
            >
              Privacy Policy
            </motion.h1>
            <div className=" mx-auto mt-6 flex flex-col gap-16">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-lg lg:text-3xl"
              >
                Our commitment is to uphold the highest standards of data
                protection by employing advanced privacy technologies and robust
                security measures, ensuring the confidentiality and security of
                your personal information
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-[80%] ">
        {" "}
        <h1 className="bg-black text-4xl mt-2  text-white ">
          Tau Labs Privacy Policy
        </h1>
        <p className=" text-xl mt-4">Last Updated: Aug 16th, 2023</p>
        <p className=" text-xl mt-4">
          Tau Lab (“Company” or “We”) respect your privacy and are committed to
          protecting it through our compliance with this policy.
        </p>
        <p className=" text-xl mt-4">
          This Privacy Policy (“Policy”) describes how and why we collects,
          uses, shares and secures Personal Information (as defined herein)
          provided by you when you use our Services(“Services”), such as when
          you:
        </p>
        <ul className="my-4 text-xl">
          <li>
            ● Visit www.Taulab.ai (our “Website”) or any website of ours that
            links to this privacy notice.
          </li>

          <li>
            ● Engage with us in other related ways ― including any sales,
            marketing, or events. Therefore, before you provide Tau Lab with any
            Personal Information, you should read through this Policy in its
            entirety and understand its terms. We may update this Policy from
            time to time, so please check in occasionally.
          </li>
        </ul>
        <p className="text-xl">
          In this Policy, “Personal Information” means any information relating
          to an identified or identifiable individual, such as name, address,
          e-mail, phone number, location, credit or debit card information, or
          anything other information that may be used to identify an individual.
          Our Platform can contain links to and from third party e-commerce
          websites for sale of goods (“Third-party E-Commerce Websites”),
          websites of payment processor such as PayPal, social media platform
          such as Facebook, Twitter or Instagram, and advertisers, amongst
          others. If you follow a link to any of these websites, please note
          that this Policy does not apply to those websites. We are not
          responsible or liable for the privacy policies or practices of those
          websites, so please check their policies before you submit any
          Personal Information to those websites.
        </p>
        <ul className="text-xl my-4">
          <li>1. COLLECTION OF PERSONAL INFORMATION</li>
          <li>2. PROCESS OF PERSONAL INFORMATION</li>
          <li>3. PROCESS OF PERSONAL INFORMATION OF RESIDENTS IN EEA</li>
          <li>4. SHARING OF PERSONAL INFORMATION</li>
          <li>5. COOKIES</li>
          <li>6. DATA PROTECTION RIGHTS FOR RESIDENTS IN EEA</li>
          <li>7. DATA SECURITY</li>
          <li>8. YOUR CONTROLS AND CHOICES</li>
          <li>9. CHANGES TO THIS POLICY</li>
          <li>10. NOTICE TO CALIFORNIA RESIDENTS</li>
          <li>11. CHILDREN UNDER 13</li>
          <li>12. MISCELLANEOUS ISSUES</li>
          <li>13. CONTACT US</li>
        </ul>
        <div className="flex gap-4 flex-col">
          <h1 className="font-bold text-2xl">
            1. COLLECTION OF PERSONAL INFORMATION:
          </h1>
          <p className="text-xl">
            We collect Personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and Services, when you participate in activities on the
            Services, or when you contact us. It is your choice whether to
            provide us with Personal Information. If you do not provide Personal
            Information when requested, you will not be able to benefit from our
            Website or our Services if that information is necessary to provide
            such Services.
          </p>

          <p className="text-xl">
            In most cases, we collect Personal Information directly from you.
            However, we may also obtain Personal Information about you from
            third parties (such as PayPal, Stripe, Facebook, Twitter, Instagram
            or Third-party E-Commerce Websites) or automatically when you
            interact with our Website. Please keep in mind that when you provide
            any information to us through a third-party site or platform (e.g.
            PayPal, Stripe, Facebook, Twitter, Instagram or Third-party
            E-Commerce Websites), that any information you provide may be
            separately collected by the third-party site or platform and subject
            to the third-party site or platform’s privacy practices. Below is a
            description of some types of Personal Information we process and the
            sources from which we obtain them:
          </p>
          <ul className="text-xl my-4">
            <li>
              {" "}
              ● User Information. If you sign-up or register for our Website as
              an user, participate in social media functions with our Website,
              opt in to receive our newsletters and special offers alerts, we
              will collect your name, email, password, phone number, address or
              location, and information regarding the Company you represent, and
              we may also obtain from third parties your Personal Information
              when providing Services to you, such as your account
              name/username, profile, images or messages posted or sent on a
              third-party site or platform like PayPal, Sripe, Facebook,
              Twitter, and etc.
            </li>
            <li>
              ● Account details. Including username and user ID; ● Marketing and
              Communications. We may collect contact information when you
              express interest in our Services, sign up for an event or webinar,
              provide our business partners with your information, or download
              certain content. This may include your name, email address,
              address, phone number, title and company name.
            </li>
            <li>
              ● Feedback and Support Data: We may collect information from
              surveys that we may conduct in order to improve our Services and
              support queries we receive from you. ● Customer Data: We may
              collect Personal information contained in the digital files, data,
              and machine learning models that Customers provide to our Company.
            </li>
            <li>
              ● Browser Information. We may collect type and version of browser,
              any website from which you have been referred, which time zone you
              visit us from; pages you visit on our website; your IP-address and
              a rough location estimate based on your IP-address; information
              about your web activity or your interaction in emails we send to
              you; information on your use of our Services.
            </li>{" "}
            <li>
              {" "}
              ● Preferences. We may store your preferences like how your content
              is displayed, notification settings, and favorites. We may
              associate these choices with your ID, browser, or mobile device. ●
              Other sources. We may receive Personal Information about you from
              other sources, including third parties that help us identify new
              users, process payments (e.g. PayPal or Stripe), or prevent or
              detect fraud. We may also receive information about you from
              social media platforms (e.g. Facebook, Twitter or Instagram) when
              you interact with us on those platforms or access our social media
              content. The information we may receive is governed by the privacy
              settings, policies, and/or procedures of the relevant social media
              platform, and we encourage you to review them.
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">
            2. PROCESS OF PERSONAL INFORMATION:
          </h1>
          <p className="text-xl">
            We process your Personal Information for the follow purposes:
          </p>
          <ul className="text-xl">
            <li>
              ● To provide, operate and improve our Services to you, by
              performing data analysis.
            </li>
            <li>
              ● To secure your account and ensure the security of the Services
              provided.
            </li>
            <li>
              ● To improve the administration of our Website and quality of
              experience when you interact with our Website, including, but not
              limited to, by analyzing how you and other users find and interact
              with our Website.
            </li>
            <li>
              ● To provide you support, including but not limited to responding
              to your requests and inquiries, and investigating and addressing
              user concerns.
            </li>
            <li>
              ● Assist users of our Website in the resolution of complaints and
              disputes between them, as necessary for our legitimate interests
              in facilitating positive relations among users.
            </li>
            <li>
              ● For marketing purposes, including to send our users offers or
              promotion alerts, newsletters and other communications to our
              users and business contacts. Where you have told us you would like
              to receive marketing communications or when you have made a
              purchase using our Services, we or our partners will use your
              Personal Information (including your name, email address and
              address) to occasionally send you updates, news, and offers via
              email, post, or other forms of media. You may unsubscribe from our
              email marketing communications by modifying your preferences in
              your account, or by following the opt out instructions in the
              promotional emails that are sent to you.
            </li>
            <li>
              ● To manage our business relationships with our users, vendors,
              suppliers, Payment Processor, Third-party E-Commerce Websites and
              other business partners, including processing payment and sending
              service-related communications.
            </li>
            <li>
              ● To communicate with you and to notify you about changes to our
              Website, and any Services we provide through the Website.
            </li>
            <li>
              ● For other business purposes, such as to detect, prevent, and
              respond to actual or potential fraud or illegal activities, defend
              our legal rights, and comply with our legal obligations and
              internal policies.
            </li>
            <li>
              ● To comply with applicable laws, cooperate with investigations by
              law enforcement or other authorities of suspected violations of
              law, or to pursue or defend against legal threats and/or claims .
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">
            3. PROCESS OF PERSONAL INFORMATION OF RESIDENTS IN EEA:
          </h1>
          <ul className="text-xl">
            If you are located in the European Economic Area (“EEA”), we only
            process your Personal Information when we can rely on a valid legal
            ground such as:
            <li>
              ● Execution of a contract. We need your Personal Information to
              provide you with our Services, including to allow you to make
              payments directly through our Website or via Third-party
              E-Commerce Websites, or to otherwise respond to your queries.
            </li>
            <li>
              ● Compliance with a legal obligation. We are required or allowed
              to collect and use your Personal Information, for example to
              detect fraud or to comply with our tax, accounting and anti-money
              laundering obligations.
            </li>
            <li>
              ● Legitimate interest. We or a third party, have a legitimate
              interest in processing your Personal Information. For example, we
              have a legitimate interest in using your Personal Information to
              conduct business analytics or to improve the safety, security and
              performance of our products and Services. We only rely on our or a
              third party’s legitimate interests to process your Personal
              Information when these interests are not overridden by your rights
              and interests.
            </li>
            <li>
              ● Consent. You have consented to the use of your Personal
              Information, for example to send you our newsletter or promotional
              emails or for the use of certain cookies.
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">
            4. PROCESS OF PERSONAL INFORMATION OF RESIDENTS IN EEA:
          </h1>
          <p className="text-2xl">
            We will share Personal Information with the following categories of
            recipients, subject to applicable law:
          </p>
          <ul className="text-xl">
            <li>
              ● Third Party Service Providers: We may share Personal Information
              with third party service providers to provide technical
              infrastructure services; analyze how our Services are used;
              conduct quality assurance testing; provide technical and customer
              support; prevent and detect unauthorized activities; and provide
              other support to us.
            </li>
            <li>
              ● Affiliates/Employees: We share Personal Information with our
              affiliates (if we have any in the future), and employees all over
              the US as needed to provide our Services, for purposes consistent
              with this Policy or to operate shared infrastructure, systems and
              technology.
            </li>
            <li>
              ● Suppliers and service providers: We share Personal Information
              with companies that provide products or services to us for the
              operation of our business. These include providers of IT and
              software services, remote office services, cyber security
              services, mailing services, marketing services and finance
              systems. Such parties provide reasonable security for Personal
              Information and to use and process such Personal Information on
              our behalf only.
            </li>
            <li>
              ● Professional advisors. We share Personal Information with our
              accountants and other outside professional advisors in the course
              of the services they provide to us.
            </li>
            <li>
              ● Financial institutions: We share Personal Information with
              financial service provider such as in connection with collection
              and payment of our service fees (if any).
            </li>
            <li>
              ● Corporate purchasers: We may share Personal Information with any
              corporate purchaser or potential purchaser to the extent permitted
              by law as part of any merger, acquisition, sale of Company assets,
              or transition of service to another provider, as well as in the
              event of insolvency, bankruptcy, or receivership in which Personal
              Information would be transferred as an asset of Company.
            </li>
            <li>
              ● Mandatory disclosures and legal claims: We share Personal
              Information in order to comply with any subpoena, court order or
              other legal process, to comply with a request from our regulators,
              governmental request or any other legally enforceable demand. We
              also share Personal Information to establish or protect our legal
              rights, property, or safety, or the rights, property, or safety of
              others, or to defend against legal claims.
            </li>
            <li>
              ● Other third parties with your consent. We share Personal
              Information with other third parties with your consent.
            </li>
            <span>
              If you have questions about the parties with which we share
              Personal Information, please contact us as specified below.
            </span>
          </ul>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="font-bold text-2xl">5. COOKIES:</h1>
          <p className="text-xl">
            Through the use of cookies and similar technologies such as web
            beacons, we may collect your device identifier or IP address, unique
            device ID, hardware and software type, internet service provider,
            serving domain, geographical area, location data, browser type and
            settings data (such as screen resolution, color depth, time zone
            settings, browser extension and plugins) operating system, referring
            URLs, search history, usage patterns, information on actions taken
            or interaction with our digital assets (e.g., page views) and dates
            and times of actions. We may also place web beacons in emails sent
            to you to track which emails are opened and which links are clicked
            by you.
          </p>
          <span className="text-xl">The types of cookies we use include:</span>
          <ul className="text-xl">
            <li>
              ● Operational Cookies: To the extent applicable, we use
              operational cookies which are required for the operation of our
              Website, for example, cookies that enable you to log into some
              areas. These operational cookies are session cookies that are
              erased when you close your browser.
            </li>
            <li>
              ● Google Analytics Cookie: We use third-party analysis tools such
              as Google Analytics to collect information about how you use our
              Services. We use this information to create reports and improve
              our service. This cookie can help us understand the number of
              visitors to our Website, where visitors come from, and how
              visitors browse or use our Website. It can also help us identify
              areas we can improve such as navigation, shopping experience and
              marketing campaigns. To learn more about how Google uses data,
              visit https://policies.google.com/technologies/partner-sites. To
              opt-out from these cookies across our Website, visit
              http://tools.google.com/dlpage/gaoptout.
            </li>
            <li>
              ● Functional Cookies: We use functional cookies to improve the
              functional performance of our Website and make it easier for you
              to use. For example, cookies are used to remember that you have
              previously visited the Website. These cookies qualify as
              persistent cookies, because they remain on your device for us to
              use during a next visit to our Website.
            </li>
          </ul>

          <span>
            With your consent, some of Tau Lab’s business partners (such as
            advertisers) may use cookies on the Platform. Tau Lab has no access
            to or control over these cookies. This Policy covers the use of
            cookies by Tau Lab only and does not cover the use of cookies by any
            Tau Lab’s business partners, such as third-party advertisers,
            Third-party E-Commerce Websites or third party social media
            platforms to which the Website provides links.
          </span>
          <span>
            Most web browsers allow you to manage cookies through the browser
            settings. Be aware that, if you opt out from and do not agree to
            certain cookies, your experience on our Website may be diminished
            and some features may not work as intended depending on the cookie.
            To find out more about cookies, you can visit www.aboutcookies.org
            or www.allaboutcookies.org.
          </span>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">6. DATA SECURITY:</h1>
          <p className="text-xl">
            We maintain administrative, technical and physical safeguards that
            are intended to appropriately protect Personal Information against
            accidental or unlawful destruction, accidental loss, unauthorized
            alteration, unauthorized disclosure or access, misuse, and any other
            unlawful form of processing of the Personal Information in our
            possession. However, because no information system can be 100%
            secure, we cannot guarantee the absolute security of your
            information.
          </p>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">7. YOUR CONTROLS AND CHOICES:</h1>
          <p className="text-xl">
            In addition to Section 6, we provide you the ability to exercise
            certain controls and choices regarding our collection, use and
            sharing of your Personal Information. In accordance with local law,
            your controls and choices as described in this Section:
          </p>
          <ul className="text-xl">
            <li>
              ● You may correct, update and delete your registration account in
              our Website at any time. You may also update and correct
              inaccuracies in your account information at any time by logging in
              your registration account.
            </li>{" "}
            <li>
              ● You may change your choices for subscription, alerts and
              newsletters.
            </li>{" "}
            <li>
              ● You may choose whether to receive offers and updates from us and
              promotions for our Services.
            </li>
            <li>
              ● You may request access to the Personal Information we hold about
              you and that we amend or delete such information.
            </li>
            <li>
              {" "}
              ● You may set your browser to refuse all or some browser cookies,
              or to alter you when cookies are being sent. You may exercise your
              controls and choices, or request access to your Personal
              Information, by contacting us as specified below. Please be aware
              that if you do not allow us to collect Personal Information from
              you, some of our Services may not be available to you. If you have
              questions regarding the specific Personal Information about you
              that we process or retain, please contact us as specified below.
            </li>
          </ul>
        </div>
        <div className="flex gap-4 mb-4 flex-col">
          <h1 className="font-bold text-2xl">8. CHANGES TO THIS POLICY:</h1>
          <p className="text-xl">
            We may make changes to this Policy. The “Last Updated” date at the
            top of this page indicates when this Policy was last revised. If we
            make material changes, we may notify you via a notice posted on our
            Website or other method. We encourage you to read this Policy
            periodically to stay up-to-date about our privacy practices. Your
            continued use of our Website after such changes will constitute
            your: (a) acknowledgment of the updated Policy; and (b) agreement to
            abide and be bound by the updated Policy.
          </p>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">
            9. NOTICE TO CALIFORNIA RESIDENTS:
          </h1>
          <p className="text-xl">
            If you are a California resident, California Civil Code Section
            1798.83 permits you to request a notice regarding the disclosure of
            your Personal Information by the Company to partners for the
            partners’ direct marketing purpose. If you are a California resident
            and would like a copy of this notice, please contact us at
            ceciliashen@taulab.ai.
          </p>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">10. CHILDREN UNDER 13:</h1>
          <p className="text-xl">
            The Company is committed to protecting the online privacy of
            children and making the internet safe. We do not provide products
            and Services to children, or knowingly collect or solicit Personal
            Information from children under 13 years of age. Any communication
            we get that is identified as being from a child under 13 will not be
            kept by the Company. We encourage parents or guardians of children
            under 13 to regularly check and monitor their children’s use of
            email and other activities online. Further, you affirm that you are
            at least 18 years of age.{" "}
          </p>
        </div>
        <div className="flex gap-4 flex-col mb-4">
          <h1 className="font-bold text-2xl">11. MISCELLANEOUS ISSUES:</h1>
          <ul className="text-xl">
            <li>
              ● What are the consequences of not providing Personal Information?
              You are not required to provide all Personal Information
              identified in this Policy to visit our Website or to interact with
              us offline, but certain functionality will not be available if you
              do not provide Personal Information. If you do not provide
              Personal Information, we may not be able to respond to your
              request, provide Services to you, or provide you with information
              that we believe you would find valuable.
            </li>
            <li>
              ● Does the Website honor not track (“DNT”) signals sent via
              browsers? Given the divergent practices of organizations that
              offer browsers and the lack of a standard in the marketplace, we
              generally do not respond to DNT signals at this time.
            </li>
            <li>
              ● How long do we retain Personal Information? We typically retain
              Personal Information related to marketing activities for as long
              as you accept marketing communications from us, and we will
              securely delete such data in accordance with applicable law upon
              request. For Personal Information that we collect and process for
              other purposes, we will typically retain such Personal Information
              for as long as it is necessary to fulfill the purposes outlined in
              this Policy and as otherwise specified in applicable record
              retention policies and procedures.
            </li>
            <li>
              ● Are third party websites governed by this Policy? Our Website
              may contain links and references to other websites administered by
              unaffiliated third parties. This Policy does not apply to such
              third-party sites. When you click a link to visit a third-party
              website, you will be subject to that website's privacy practices.
              We encourage you to familiarize yourself with the privacy and
              security practices of any linked third-party websites before
              providing any Personal Information on that website.
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col pb-4">
          <h1 className="font-bold text-2xl">12. CONTACT US:</h1>
          <p className="text-xl">
            If you have any questions about this Policy, or if you would like to
            exercise your rights to your Personal Information, you may contact
            us at hr@taulab.ai or through our website at www.Taulab.ai
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
