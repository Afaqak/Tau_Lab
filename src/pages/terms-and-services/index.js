import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { motion } from "framer-motion";
import Footer from "../../components/footer";
const Legal = () => {
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
    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" lg:h-[100vh] md:h-[50vh] h-[80vh]  overflow-hidden p-4 text-white px-4 lg:px-16 relative bg-black">
        <Navbar />
        <motion.div
          style={{ transform: `scale(${scale})` }}
          className="h-full legal-image w-full absolute bg-no-repeat flex items-center justify-center py-4 top-0 left-0"
        ></motion.div>
        <div className="mt-32">
          <div className="relative mt-48 bg-black bg-opacity-75 border-2 border-gray-200 p-4 rounded-md mx-auto md:w-[80%] lg:w-[70%]">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mx-auto text-3xl lg:text-6xl leading-tight"
            >
              Terms and Services
            </motion.h1>
            <div className=" mx-auto mt-6 flex flex-col gap-16">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-lg lg:text-3xl"
              >
                Our mission is to push the boundaries of innovation by
                leveraging our specialized LLM technology and advanced
                generative multi-agent system, pioneering the next generation of
                gaming.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <main className=" transform  bg-black text-white">
        <h1 className="bg-black text-3xl lg:text-4xl mb-4 lg:mb-0 lg:-translate-y-12 lg:h-16 py-4 px-4  text-white bg-opacity-40">
          Tau Lab Terms & Conditions
        </h1>
        <p className="px-4 text-xl lg:text-2xl mb-4 lg:mb-0 lg:-translate-y-10">
          Last Updated: Aug 16th, 2023
        </p>
        <div className="bg-black px-4">
          <div className="md:w-[80%]">
            <div className="flex gap-4 flex-col">
              <h1 className="font-bold text-2xl">1. Introduction</h1>
              <p className="text-xl">
                These terms and conditions (these “Terms”) are the only terms
                that govern the provision of Services (as defined below) and our
                website www.taulab.ai as well as our related websites
                (collectively, our “Sites”) by Tau Lab Inc.
              </p>
              <p className="text-xl">
                For purposes of these Terms, “User”, “you”, and “your” means you
                as the user of the Service. If you use the Service on behalf of
                a company or other entity then “you” includes you and that
                entity, and you represent and warrant that (a) you are an
                authorized representative of the entity with the authority to
                bind the entity to these Terms, and (b) you agree to these Terms
                on the entity’s behalf. Please read these Terms carefully as
                they contain important information and affect User’s legal
                rights.
              </p>
              <p className="text-xl">
                By clicking to accept and/or using service, Users agree to be
                bound by these Terms and all of the Terms incorporated herein by
                reference. If Users do not agree to these Terms, Users may not
                access or use the service.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">2. Services</h1>
              <p className="text-xl">
                The “Services” means the at all times current version of the web
                services, associated software, and other services related
                thereto provided to the User by Tau Lab in accordance with these
                Terms.
              </p>
              <p className="text-xl">
                Tau Lab reserves the right to implement new versions and
                upgrades of the Services including, but not limited to, changes
                that effect modifications to the design, operational method,
                technical specifications, systems, and other functions, etc. of
                the Services, at any time without prior notice. Tau Lab shall be
                entitled to retain subcontractors, including third party
                software suppliers, for the performance of obligations in
                accordance with these Terms. Tau Lab shall be liable for the
                subcontractors’ work and services in the same manner as for its
                own work and services.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                3. License to Access and Use Our Service and Content
              </h1>
              <p className="text-xl">
                Subject to User’s compliance with the Terms, Tau Lab grants to
                User a limited, non-transferable, non-sub-licensable,
                nonexclusive, revocable license during the term of these Terms
                to access and use the Services solely and exclusively for User’s
                noncommercial and personal purposes. The Services are licensed,
                not sold, and User acknowledges that it does not acquire any
                license to use the Services in excess of the scope and duration
                of the license to the Services specified in the Terms. This
                license does not grant to User or any other party any right to
                copy, modify, enhance, or transfer the Services or otherwise
                disclose any Confidential Information disclosed by Tau Lab to
                any third party, including without limitation any Intellectual
                Property Rights.
              </p>
              <p className="text-xl">
                User is (i) solely responsible for maintaining the security and
                control of its premises and username(s) and access passwords to
                its Tau Lab account; and (ii) fully liable for all activity of
                its User’s employees, agents and contractors who are authorized
                to use the Services (“Employees”) and customers that occur under
                its Tau Lab account, whether authorized by User or not. User
                agrees to immediately notify Tau Lab if it becomes aware of any
                unauthorized activity under its Tau Lab account and will
                cooperate with Tau Lab to prevent any further unauthorized
                activity.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                4. Users’ Obligations and Restrictions
              </h1>
              <p className="text-xl">
                Users are fully responsible for your activities while using the
                Sites, including any content, information or other materials you
                post or upload to the Sites, and you bear all risks associated
                with the use of the Sites. By agreeing to these Terms, you agree
                to comply with all applicable federal, state, and local laws and
                regulations in connection with your use of the Sites. You also
                agree not to use the Site to engage in any prohibited conduct or
                to assist any other person or entity in engaging in any
                prohibited conduct.
              </p>
              <p className="text-xl">
                Users are fully responsible for your activities while using the
                Sites, including any content, information or other materials you
                post or upload to the Sites, and you bear all risks associated
                with the use of the Sites. By agreeing to these Terms, you agree
                to comply with all applicable federal, state, and local laws and
                regulations in connection with your use of the Sites. You also
                agree not to use the Site to engage in any prohibited conduct or
                to assist any other person or entity in engaging in any
                prohibited conduct.
              </p>
              <div className="text-xl">
                <p>
                  You are prohibited from using the Sites for the commission of
                  harmful or illegal activities. Accordingly, you may not, or
                  assist any other person to:
                </p>
                <ul className="">
                  <li>
                    ● Violate these Terms or other policies and terms posted on,
                    or otherwise applicable to, the Sites;
                  </li>
                  <li>
                    ● Include sensitive personal information (such as phone
                    numbers, residential addresses, health information, social
                    security numbers, driver’s license numbers, or other account
                    numbers) about yourself or any other person in any webform
                    on the Sites;
                  </li>
                  <li>
                    ● Copy or adapt the Sites’ software, including but not
                    limited to Flash, PHP, HTML, JavaScript, or other code;
                  </li>
                  <li>
                    ● Upload any material, program, or software that contains
                    any virus, worm, spyware, Trojan horse or other program or
                    code designed to interrupt, destroy or limit the
                    functionality of the Sites, launch a denial of service
                    attack, or in any other way attempt to interfere with the
                    functioning and availability of the Sites;
                  </li>
                  <li>
                    ● Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including, without limitation, any
                    spider, robot, cheat utility, scraper, offline reader, or
                    any data mining or similar data gathering extraction tools
                    to access the Sites, or use or launch any unauthorized
                    script or other software;
                  </li>
                  <li>
                    ● Interfere with, disable, vandalize or disrupt the Sites or
                    servers or networks connected to the Sites;
                  </li>
                  <li>
                    ● Hack into, penetrate, disable, or otherwise circumvent the
                    security measures of the Sites or servers or networks
                    connected to the Sites;
                  </li>
                  <li>
                    ● Impersonate another person or falsely represent an
                    affiliation with any organization or institution;
                  </li>
                  <li>
                    ● Send email to the addresses linked or made available on
                    the Sites (including in these Terms) to harass, annoy,
                    intimidate, or threaten any of our employees or agents;
                  </li>
                  <li>
                    ● Use the Sites in any way that violates any applicable
                    national, federal, state, local or international law or
                    regulation;
                  </li>
                  <li>Attempt to do any of the above.</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">5. Client Support</h1>
              <p className="text-xl">
                Tau Lab provides the User with support by e-mail
                ceciliashen@TauLab.ai regarding User’s enquiries in connection
                with use of the Services. Such support is provided on weekdays
                (excluding American public holidays) during Tau Lab’ ordinary
                office hours and to the reasonable extent decided upon from time
                to time in detail by Tau Lab. Enquiries and/or error notices
                must be submitted to Tau Lab by e-mail in accordance with the
                contact information available on Tau Lab’ Sites.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">6. Service Fee</h1>
              <p className="text-xl">
                “Service Fee” means fee paid by the User in order to use Tau Lab
                Services. User shall pay compensation for the Services in
                accordance with the fees set out upon sign up procedure or
                otherwise agreed. All Services provided by Tau Lab shall be
                debited to the Client in advance. When starting to use the
                Services, User agree that lose the right to a refund and waive
                any cooling off period. In the event of early termination of the
                Services due to the User’s breach, the User shall not be
                entitled to a refund of any prepaid fees.
              </p>
              <p className="text-xl">
                Tau Lab reserves the right to change Services Fee or other fees
                and upon thirty (30) days’ prior written Notice to User. Such
                Notice will include the effective date of the change(s). User’s
                continued use of the Services subsequent to any change in
                Service Fees, as applicable, will be deemed acceptance of such
                changes. If User does not accept such Service Fee change under
                this Section, then User may terminate these Terms by providing
                Tau Lab written Notice prior to the effective date of such
                Service Fee change, and User shall only be liable to Tau Lab for
                the payment of Service Fees for Services provided through the
                date of User’s Notice of termination. In the event payments are
                not received by Tau Lab within ten (10) days after becoming due,
                Tau Lab may suspend performance for all Services until payment
                has been made in full.
              </p>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="font-bold text-2xl mt-4">7. Ownership</h1>
              <p className="text-xl">
                Tau Lab shall hold title to any and all intellectual property
                rights and technical solutions to the Services or, in the
                alternative, shall possess a sole right to use the same. Such
                intellectual property rights and technical solutions may only be
                used by the User in the manner stated in this Terms. Under no
                circumstances shall the User or a third party acquire any
                intellectual property rights to the Services or to the software
                or technical solutions used in Services, or to any trademark or
                any other business mark belonging to or used by Tau Lab. Access
                to the Services is licensed, not sold.
              </p>
              <p className="text-xl">
                All content and data uploaded to, transferred through, posted,
                processed or entered into the Services by the User and/or its
                users shall remain the sole property of the User or its
                respective legal owner. Tau Lab shall have no liability for such
                content and data.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">8. Intellectual Property</h1>
              <p className="text-xl">
                All intellectual property rights, including copyrights, patents,
                patent disclosures and inventions (whether patentable or not),
                trademarks, service marks, trade secrets, know-how and other
                confidential information, trade dress, trade names, logos,
                corporate names, and domain names, together with all of the
                goodwill associated therewith, derivative works and all other
                rights (collectively, “Intellectual Property Rights”) in and to
                all documents, work product, and other materials that are
                delivered to User under these Terms or prepared by or on behalf
                of Tau Lab in the course of performing the Services, shall be
                owned by Tau Lab. The Sites are protected by copyright, trade
                dress, trademark, moral rights, and other intellectual property
                laws in the United States, the United Kingdom, and other
                international jurisdictions.
              </p>
              <p className="text-xl">
                All registered and unregistered trademarks, logos, and service
                marks are the property of Tau Lab and/or their respective
                owners. Nothing displayed or accessed in connection with the
                Site shall be construed as granting by implication, estoppel, or
                otherwise, any license or right to use any trademark, logo, or
                service mark displayed in connection with the Sites without the
                owner’s prior written permission, except as otherwise described
                herein.
              </p>
              <p className="text-xl">
                All Intellectual Property Rights not expressly granted to User
                are reserved by Tau Lab and its licensors. You may not (i)
                modify or make derivative works based upon the Sites; (ii)
                reverse engineer the Sites or access the Sites in order to (a)
                build a competitive product or service, or (b) build a product
                using similar features, functions, or graphics of the Sites, or
                (c)copy any features, functions, or graphics of the Sites. You
                further acknowledge and agree that, as between the parties, Tau
                Lab owns all right, title, and interest in and to the Sites,
                including the visual interfaces, graphics, design, compilation,
                information, data, computer code (including source code or
                object code), products, software, services, and all other
                elements of the Sites, and all intellectual property rights
                therein.
              </p>
              <p className="text-xl">
                Provided that you are eligible to use the Sites, you are granted
                a limited license to access and use the Sites and to download or
                print a copy of any portion of the Sites to which you have
                properly gained access solely for your personal, non-commercial
                use. We reserve all rights not expressly granted to you in and
                to the Sites.
              </p>
              <p className="text-xl">
                User is responsible for use of the Service and for any
                information User provides, including compliance with applicable
                laws, rules, and regulations, as well as these Terms. Users
                represent and warrant that User have, or have obtained, all
                rights, licenses, consents, permissions, power and/or authority
                necessary to grant the rights granted herein for any content
                that you create, submit, post, promote, or display on or through
                the Service. Users represent and warrant that such content does
                not contain material subject to copyright, trademark, publicity
                rights, or other intellectual property rights, unless Users have
                necessary permission or are otherwise legally entitled to post
                the material and to grant Tau Lab the license described above,
                and that the content does not violate any laws.
              </p>
              <p className="text-xl">
                By using the Service in conjunction with creating, submitting,
                posting, promoting, or displaying content, User grant Tau Lab a
                worldwide, non-exclusive, sub-licensable, royalty-free license
                to use, copy, modify, and display any content, including but not
                limited to text, materials, images, files, communications,
                comments, feedback, suggestions, ideas, concepts, questions,
                data, or otherwise, that you submit or post on or through the
                Service for our current and future business purposes, including
                to provide, promote, and improve the Service.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                9. Confidential Information
              </h1>
              <p className="text-xl">
                For purposes of these Terms, the term “Confidential Information”
                means any information disclosed by Tau Lab to User, whether
                orally or in writing, that is designated as confidential or that
                reasonably should be understood to be confidential given the
                nature of the information and the circumstances of disclosure,
                concerning the business, operations and assets of Tau Lab
                provided to User, includes the Services, hardware, and customer
                data, and any information relating thereto.
              </p>
              <p className="text-xl">
                User understands that Tau Lab has disclosed or may disclose
                Confidential Information relating to the Tau Lab’s business
                under these Terms. User agrees: (i) to take reasonable
                precautions to protect such Confidential Information; and (ii)
                not to use or divulge to any third person any such Confidential
                Information, in each case except as expressly permitted by the
                Privacy Policy. Tau Lab agrees that the foregoing obligations
                will not apply with respect to Confidential Information after
                five (5) years following the disclosure, or any Confidential
                Information that User can document (i) is or becomes generally
                available to the public by Tau Lab or a third party not bound by
                a confidentiality obligation; (ii) was in User’s possession or
                known by its prior to receipt from the Tau Lab; (iii) was
                rightfully disclosed to Tau Lab by a third party not bound by a
                confidentiality obligation; or (iv) was independently developed
                without use of any Confidential Information of the Tau Lab as
                demonstrated by User’s written records.
              </p>
              <p className="text-xl">
                Notwithstanding any provision of these Terms to the contrary,
                Tau Lab may disclose User’s Confidential Information, in whole
                or in part (i) to its representatives or potential
                representatives who have a need to know and are legally bound to
                keep such Confidential Information confidential by
                confidentiality obligations or, in the case of professional
                advisors, are bound by ethical duties to keep such Confidential
                Information confidential, consistent with the terms of these
                Terms; (ii) as required by law (in which case User shall, if
                permitted by applicable law and rules, provide Tau Lab with
                prior written notification thereof and the opportunity to
                contest such disclosure, and shall use its reasonable efforts to
                minimize such disclosure in each case to the extent permitted by
                applicable law, or (iii) otherwise in accordance with Tau Lab’s
                Privacy Policy.
              </p>
              <p className="text-xl">
                Tau Lab shall be entitled to injunctive relief for any violation
                of Section 9.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                10. Disclaimer of Warranties
              </h1>
              <p className="text-xl">
                USER’S ACCESS TO AND USE OF THE SERVICE IS AT USER’S OWN RISK.
                USERS UNDERSTAND AND AGREE THAT THE SERVICE IS PROVIDED ON AN
                “AS IS” AND “AS AVAILABLE” BASIS AND Tau Lab EXPRESSLY DISCLAIMS
                WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                Tau Lab (AND ITS SUPPLIERS) MAKE NO WARRANTY OR REPRESENTATION
                AND DISCLAIM ALL RESPONSIBILITY FOR WHETHER THE SERVICE: (A)
                WILL MEET USER’S REQUIREMENTS; (B) WILL BE AVAILABLE ON AN
                UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C) WILL
                BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.
              </p>
              <p className="text-xl">
                Tau Lab DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR
                IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR
                CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                TITLE AND NON-INFRINGEMENT. Tau Lab WILL NOT BE LIABLE FOR ANY
                LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON
                MATERIAL OR INFORMATION CONTAINED ON THE SERVICE. Tau Lab CANNOT
                GUARANTEE THE SECURITY OF ANY DATA THAT USER DISCLOSE ONLINE. NO
                ADVICE OR INFORMATION, WHETHER ORAL OR OBTAINED FROM THE Tau Lab
                PARTIES OR THROUGH THE SERVICE, WILL CREATE ANY WARRANTY OR
                REPRESENTATION NOT EXPRESSLY MADE HEREIN. USERS ACCEPT THE
                INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING
                ONLINE OVER THE INTERNET AND WILL NOT HOLD Tau Lab RESPONSIBLE
                FOR ANY BREACH OF SECURITY.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">11. Limitation Liability</h1>
              <p className="text-xl">
                We will not be liable for any loss or damage you suffer or cause
                in connection with your use or interaction with the Platform,
                including, without limitation, the following:
              </p>
              <ul className="text-xl">
                <li>
                  ● Unauthorized third-party activities and actions, such as
                  hacking, exploits, introduction of viruses or other malicious
                  code, phishing, Sybil attacks, 51% attacks, brute forcing,
                  cybersecurity attacks, or other means of attack or hacking
                  that affects the Tau Lab;
                </li>
                <li>● Weaknesses in security, or other technical errors;</li>
                <li>● Telecommunications or Internet failures;</li>
                <li>
                  ● Errors by you (such as forgotten passwords, lost private
                  keys, or mistyped addresses);
                </li>
                <li>
                  ● Errors by Tau Lab (such as incorrectly constructed or
                  programmed transactions or weaknesses in platform security);
                </li>
                <li>
                  ● Unfavorable regulatory determinations or actions, or newly
                  implemented laws or regulations, in any jurisdiction;
                </li>
                <p className="text-xl">
                  Tau Lab’s total liability to User for all damages, losses or
                  causes of action with respect to any claim asserted by you in
                  connection with the Platform or its use will not exceed the
                  amount User have paid Tau Lab in the six (6)-month period
                  prior to the assertion of your claim (or, if greater, the sum
                  of USD $1,000). Any claim or cause of action arising out of or
                  related to Service or these Terms must be filed within one
                  year after the claim or cause of action accrues, or be forever
                  barred.
                </p>
              </ul>
              <p className="text-xl">
                UNDER NO CIRCUMSTANCES WILL Tau Lab BE LIABLE FOR ANY INDIRECT,
                SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES OF ANY
                KIND, EVEN IF Tau Lab HAVE BEEN ADVISED OR OTHERWISE WERE AWARE
                OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">13. Force Majeure</h1>
              <p className="text-xl">
                No party shall be liable or responsible to the other party, nor
                be deemed to have defaulted under or breached these Terms, for
                any failure or delay in fulfilling or performing any term of
                these Terms (except for any obligations of User to make payments
                to Tau Lab hereunder), when and to the extent such failure or
                delay is caused by or results from acts beyond the impacted
                party’s (“Impacted Party”) reasonable control, including,
                without limitation, the following force majeure events (“Force
                Majeure Event(s)”): (i) acts of God; (ii) flood, fire,
                earthquake, OTHER POTENTIAL DISASTER(S) OR CATASTROPHE(S), SUCH
                AS EPIDEMICS, or explosion; (iii) war, invasion, hostilities
                (whether war is declared or not), terrorist threats or acts,
                riot or other civil unrest; (iv) government order, law, or
                action; (v) embargoes or blockades in effect on or after the
                date of these Terms; and (vi) national or regional emergency;
                and (vii) other similar events beyond the reasonable control of
                the Impacted Party. The Impacted Party shall give Notice within
                ten (10) days of the Force Majeure Event to the other party,
                stating the period of time the occurrence is expected to
                continue. The Impacted Party shall use diligent efforts to end
                the failure or delay and ensure the effects of such Force
                Majeure Event are minimized. The Impacted Party shall resume the
                performance of its obligations as soon as reasonably practicable
                after the removal of the cause. In the event that the Impacted
                Party’s failure or delay remains uncured for a period of ten
                (10) consecutive days following written Notice given by it under
                this Section, the either party may thereafter terminate these
                Terms upon five (5) days written Notice.
              </p>
              <p className="text-xl">
                Tau Lab DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR
                IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR
                CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                TITLE AND NON-INFRINGEMENT. Tau Lab WILL NOT BE LIABLE FOR ANY
                LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON
                MATERIAL OR INFORMATION CONTAINED ON THE SERVICE. Tau Lab CANNOT
                GUARANTEE THE SECURITY OF ANY DATA THAT USER DISCLOSE ONLINE. NO
                ADVICE OR INFORMATION, WHETHER ORAL OR OBTAINED FROM THE Tau Lab
                PARTIES OR THROUGH THE SERVICE, WILL CREATE ANY WARRANTY OR
                REPRESENTATION NOT EXPRESSLY MADE HEREIN. USERS ACCEPT THE
                INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING
                ONLINE OVER THE INTERNET AND WILL NOT HOLD Tau Lab RESPONSIBLE
                FOR ANY BREACH OF SECURITY.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">14. Assignment</h1>
              <p className="text-xl">
                User shall not assign any of its rights or delegate any of its
                obligations under these Terms without the prior written consent
                of Tau Lab. Any purported assignment or delegation in violation
                of this Section is null and void. No assignment or delegation
                relieves User of any of its obligations under these Terms.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                15. Relationship of the Parties
              </h1>
              <p className="text-xl">
                The relationship between the parties is that of independent
                contractors. Nothing contained in these Terms shall be construed
                as creating any agency, partnership, joint venture or other form
                of joint enterprise, employment, or fiduciary relationship
                between the parties, and neither party shall have authority to
                contract for or bind the other party in any manner whatsoever.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                16. Amendment and Modification
              </h1>
              <p className="text-xl">
                Tau Lab reserves the right to change or modify these Terms at
                any time and in our sole discretion. By continuing to access or
                use the Service, Users confirm their acceptance of the revised
                Terms and all of the terms incorporated therein by reference
                effective as of the date these Terms are updated. It is the
                User’s sole responsibility to review the Terms from time to time
                to view changes and to ensure that Users understand the Terms
                and conditions that apply when User accesses or uses the
                Service.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">17. Arbitration</h1>
              <p className="text-xl">
                This Section is referred to as the “Arbitration Provision.”
                Except where prohibited by applicable law and rules, User agrees
                that any and all disputes or claims that have arisen or may
                arise between User and Tau Lab, whether arising out of or
                relating to these Terms or in connection with User’s use of the
                Services or our websites, shall be resolved exclusively through
                confidential, final and binding arbitration, rather than a
                court, in accordance with the terms of this Arbitration
                Provision. User agrees that, by agreeing to these Terms, User
                and Tau Lab are each waiving the right to a trial by jury or to
                participate in a class action. User’s rights will be determined
                by a neutral arbitrator, not a judge or jury. The Federal
                Arbitration Act governs the interpretation and enforcement of
                this Arbitration Provision. Notwithstanding the foregoing, this
                Arbitration Provision shall not preclude either party from
                pursuing a court action for the sole purpose of obtaining a
                temporary restraining order or preliminary injunction in
                circumstances in which such relief is appropriate, provided that
                any other relief shall be pursued through an arbitration
                proceeding pursuant to this Arbitration Provision. In any event,
                any action or proceeding by User against Tau Lab relating to any
                dispute must commence within one (1) year after the cause of
                action accrues.
              </p>
              <p className="text-xl">
                Except where prohibited by applicable law and rules, User and
                Tau Lab agree that each may bring claims against the other only
                on an individual basis and not as plaintiff or class member in
                any purported class or representative action or proceeding.
                Unless both User and Tau Lab agree otherwise, the arbitrator may
                not consolidate or join more than one person’s or party’s claims
                and may not otherwise preside over any form of a consolidated,
                representative, or class proceeding. Also, the arbitrator may
                award relief (including monetary, injunctive, and declaratory
                relief) only in favor of the individual party seeking relief and
                only to the extent necessary to provide relief necessitated by
                that party’s individual claim(s).
              </p>
              <p className="text-xl">
                Tau Lab is always interested in resolving disputes amicably and
                efficiently, and most concerns can be resolved quickly and to
                the participant’s satisfaction by contacting Tau Lab’s support
                team. If such efforts prove unsuccessful, a party who intends to
                seek arbitration must first send to the other, by certified
                mail, a written Notice of dispute. The Notice must (i) describe
                the nature and basis of the claim or dispute and (ii) set forth
                the specific relief sought. If Tau Lab and User do not resolve
                the claim or dispute, despite good faith attempts, within sixty
                (60) calendar days after the Notice is received, User or Tau Lab
                may commence an arbitration proceeding. During the arbitration,
                the amount of any settlement offer made by Tau Lab or User shall
                not be disclosed to the arbitrator until after the arbitrator
                determines the amount, if any, to which User or Tau Lab is
                entitled.
              </p>
              <p className="text-xl">
                Arbitration will be conducted by a neutral arbitrator in
                accordance with the American Arbitration Association’s (“AAA”)
                rules and procedures, including the AAA’s Commercial Arbitration
                Rules (collectively, the “AAA Rules”), as modified by this
                Arbitration Provision. If there is any inconsistency between any
                term of the AAA Rules and any term of this Arbitration
                Provision, the applicable terms of this Arbitration Provision
                will control unless the arbitrator determines that the
                application of the inconsistent Arbitration Provision terms
                would not result in a fundamentally fair arbitration. All issues
                are for the arbitrator to decide, including, but not limited to,
                issues relating to the scope, enforceability, and arbitrability
                of this Arbitration Provision. The arbitrator can award issues
                relating to, without limitation, the scope, enforceability, and
                arbitrability of this Arbitration Provision. The arbitrator can
                award the same damages and relief on an individual basis that a
                court can award to an individual under these Terms and
                applicable law. Decisions by the arbitrator are enforceable in
                court and may be overturned by a court only for very limited
                reasons. Unless Tau Lab and User agree otherwise, any
                arbitration hearings shall take place in Mountain View,
                California, USA. The arbitration shall be conducted and the
                award shall be rendered in English. If User’s claim is for
                $10,000 or less, Tau Lab agrees that User may choose whether the
                arbitration will be conducted solely on the basis of documents
                submitted to the arbitrator, through a telephonic or video
                conference hearing or by an in-person hearing as established by
                the AAA Rules. If User’s claim exceeds $10,000, the right to a
                hearing will be determined by the AAA Rules. Regardless of the
                manner in which the arbitration is conducted, the arbitrator
                shall issue a reasoned written decision sufficient to explain
                the essential findings and conclusions on which the award is
                based. Payment of all filing, administration, and arbitrator
                fees will be governed by the AAA Rules, unless otherwise
                provided in this Arbitration Provision. Any payment of
                attorneys’ fees will be governed by the AAA Rules.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">
                19. Waiver and Severability
              </h1>
              <p className="text-xl">
                If you do not comply with a portion of these Terms and we do not
                take action right away, this does not mean we are giving up any
                of our rights under these Terms. If any term or provision of
                these Terms is invalid, illegal, or unenforceable in any
                jurisdiction, such invalidity, illegality, or unenforceability
                shall not affect any other term or provision of these Terms or
                invalidate or render unenforceable such term or provision in any
                other jurisdiction.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">20. Indemnification</h1>
              <p className="text-xl">
                User will indemnify, defend and hold harmless Tau Lab and its
                directors, officers, employees, affiliates and agents from and
                against any and all third-party proceedings, claims, losses,
                damages, demands, liabilities, fines imposed by regulatory
                authorities to the extent permitted under applicable law and
                rules, costs and expenses whatsoever, including all reasonable
                legal and accounting fees and expenses and all reasonable
                collection costs, incurred by Tau Lab, its directors, officers,
                employees, affiliates and agents to the extent resulting from or
                arising out of (i) User’s use of the Services, other than those
                attributable to Tau Lab’s gross negligence or willful
                misconduct, or for which Tau Lab is responsible; (ii) Tau Lab’s
                processing activities on behalf of User; (iii) the business of
                User; (iv) any sales transaction conducted by Tau Lab on behalf
                of User; (v) any noncompliance with any applicable law and rules
                by User or its Employees; (vi) User’s, or any Employees’ breach
                or nonperformance of any provision of these Terms; (vii) User’s
                or its Employee’s reliance on any report or other information
                generated through the Services; (viii) any Tax assessment or
                (ix) any claims against Tau Lab related to the use by Tau Lab of
                any User data or any of User’s intellectual property.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">21. Arbitration</h1>
              <p className="text-xl">
                This Section is referred to as the “Arbitration Provision.”
                Except where prohibited by applicable law and rules, User agrees
                that any and all disputes or claims that have arisen or may
                arise between User and Tau Lab, whether arising out of or
                relating to these Terms or in connection with User’s use of the
                Services or our Sites, shall be resolved exclusively through
                confidential, final and binding arbitration, rather than a
                court, in accordance with the terms of this Arbitration
                Provision. User agrees that, by agreeing to these Terms, User
                and Tau Lab are each waiving the right to a trial by jury or to
                participate in a class action. User’s rights will be determined
                by a neutral arbitrator, not a judge or jury. The Federal
                Arbitration Act governs the interpretation and enforcement of
                this Arbitration Provision. Notwithstanding the foregoing, this
                Arbitration Provision shall not preclude either party from
                pursuing a court action for the sole purpose of obtaining a
                temporary restraining order or preliminary injunction in
                circumstances in which such relief is appropriate, provided that
                any other relief shall be pursued through an arbitration
                proceeding pursuant to this Arbitration Provision. In any event,
                any action or proceeding by User against Tau Lab relating to any
                dispute must commence within one (1) year after the cause of
                action accrues.
              </p>
              <p className="text-xl">
                Except where prohibited by applicable law and rules, User and
                Tau Lab agree that each may bring claims against the other only
                on an individual basis and not as plaintiff or class member in
                any purported class or representative action or proceeding.
                Unless both User and Tau Lab agree otherwise, the arbitrator may
                not consolidate or join more than one person’s or party’s claims
                and may not otherwise preside over any form of a consolidated,
                representative, or class proceeding. Also, the arbitrator may
                award relief (including monetary, injunctive, and declaratory
                relief) only in favor of the individual party seeking relief and
                only to the extent necessary to provide relief necessitated by
                that party’s individual claim(s).
              </p>
              <p className="text-xl">
                Tau Lab is always interested in resolving disputes amicably and
                efficiently, and most concerns can be resolved quickly and to
                the participant’s satisfaction by contacting Tau Lab’s support
                team. If such efforts prove unsuccessful, a party who intends to
                seek arbitration must first send to the other, by certified
                mail, a written Notice of dispute. The Notice must (i) describe
                the nature and basis of the claim or dispute and (ii) set forth
                the specific relief sought. If Tau Lab and User do not resolve
                the claim or dispute, despite good faith attempts, within sixty
                (60) calendar days after the Notice is received, User or Tau Lab
                may commence an arbitration proceeding. During the arbitration,
                the amount of any settlement offer made by Tau Lab or User shall
                not be disclosed to the arbitrator until after the arbitrator
                determines the amount, if any, to which User or Tau Lab is
                entitled.
              </p>
              <p className="text-xl">
                Arbitration will be conducted by a neutral arbitrator in
                accordance with the American Arbitration Association’s (“AAA”)
                rules and procedures, including the AAA’s Commercial Arbitration
                Rules (collectively, the “AAA Rules”), as modified by this
                Arbitration Provision. If there is any inconsistency between any
                term of the AAA Rules and any term of this Arbitration
                Provision, the applicable terms of this Arbitration Provision
                will control unless the arbitrator determines that the
                application of the inconsistent Arbitration Provision terms
                would not result in a fundamentally fair arbitration. All issues
                are for the arbitrator to decide, including, but not limited to,
                issues relating to the scope, enforceability, and arbitrability
                of this Arbitration Provision. The arbitrator can award issues
                relating to, without limitation, the scope, enforceability, and
                arbitrability of this Arbitration Provision. The arbitrator can
                award the same damages and relief on an individual basis that a
                court can award to an individual under these Terms and
                applicable law. Decisions by the arbitrator are enforceable in
                court and may be overturned by a court only for very limited
                reasons. Unless Tau Lab and User agree otherwise, any
                arbitration hearings shall take place in Mountain View,
                California, USA. The arbitration shall be conducted and the
                award shall be rendered in English. If User’s claim is for
                $10,000 or less, Tau Lab agrees that User may choose whether the
                arbitration will be conducted solely on the basis of documents
                submitted to the arbitrator, through a telephonic or video
                conference hearing or by an in-person hearing as established by
                the AAA Rules. If User’s claim exceeds $10,000, the right to a
                hearing will be determined by the AAA Rules. Regardless of the
                manner in which the arbitration is conducted, the arbitrator
                shall issue a reasoned written decision sufficient to explain
                the essential findings and conclusions on which the award is
                based. Payment of all filing, administration, and arbitrator
                fees will be governed by the AAA Rules, unless otherwise
                provided in this Arbitration Provision. Any payment of
                attorneys’ fees will be governed by the AAA Rules.
              </p>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="font-bold text-2xl">22. Governing Law</h1>
              <p className="text-xl">
                These Terms of Use and your use of the Sites are governed by and
                construed in accordance with the laws of the State of California
                applicable to agreements made and to be entirely performed
                within the State of California, without regard to its conflict
                of law principles. 23. Electronic Communications and Contact
                Information Tau Lab may be required to provide User with certain
                disclosures, notices and communications (collectively,
                “Communications”) in written form. User agrees to receive all
                Communications regarding its use of any of the Services,
                including without limitation through the Services,
                electronically instead of in paper form. User’s consent to
                electronic Communications is valid until User revokes it.
                However, consent to electronic Communications is a condition of
                the Services, and if User revokes its consent, User will no
                longer be permitted to use the Services. User agrees it is
                responsible for keeping its e-mail address registered with Tau
                Lab accurate and up to date.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 mb-4">
          <p className="text-xl mt-4">
            You may contact us by emailing us at ceciliashen@TauLab.ai
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
