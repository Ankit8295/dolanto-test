import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="USER POLICY">
        Our clean room doors are created to order to meet the needs of these
        industries. Our clean room door helps to keep dust particles and
        contaminants out of the space. When there is a high risk of air
        contamination from environmental contaminants such as dust, airborne
        microorganisms, aerosol particles, and chemical vapor, a clean room
        environment is essential.
      </PageDescription>
      <div
        data-aos="fade-up"
        className="w-[80%] mx-auto p-10 max-lg:w-full flex flex-col gap-5 text-[#001942] bg-lightBLue rounded-xl"
      >
        <h2 className="text-secondary font-semibold text-lg">Introduction</h2>
        <span>
          At Creative Tim, accessible here, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by Website Name and how
          we use it.If you have additional questions or require more information
          about our Privacy Policy, do not hesitate to contact us through email
          at hello@creative-tim.comThis privacy policy applies only to our
          online activities and is valid for visitors to our website with
          regards to the information that they shared and/or collect in Creative
          Tim. This policy is not applicable to any information collected
          offline or via channels other than this website.
        </span>
        <h2 className="text-secondary font-semibold text-lg">
          Managing Your Information
        </h2>
        <span>
          Unless otherwise stated, Creative Tim and/or its licensors own the
          intellectual property rights for all material on Creative Tim. All
          intellectual property rights are reserved. You may access this from
          Creative Tim for your own personal use subjected to restrictions set
          in these terms and conditions.
        </span>
        <span>You must not:</span>
        <ol className="list-disc pl-5">
          <li>Republish material from Creative Tim</li>
          <li>Sell, rent or sub-license material from Creative Tim</li>
          <li>Reproduce, duplicate or copy material from Creative Tim</li>
          <li>Redistribute content from Creative Tim</li>
        </ol>
        <span>
          This Agreement shall begin on the date hereof. Our Terms and
          Conditions were created with the help of the Terms And Conditions
          Generator and the Privacy Policy Generator.
        </span>
        <span>
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          Creative Tim does not filter, edit, publish or review Comments prior
          to their presence on the website. Comments do not reflect the views
          and opinions of Creative Tim,its agents and/or affiliates. Comments
          reflect the views and opinions of the person who post their views and
          opinions. To the extent permitted by applicable laws, Creative Tim
          shall not be liable for the Comments or for any liability, damages or
          expenses caused and/or suffered as a result of any use of and/or
          posting of and/or appearance of the Comments on this website.
        </span>
        <span>
          Creative Tim reserves the right to monitor all Comments and to remove
          any Comments which can be considered inappropriate, offensive or
          causes breach of these Terms and Conditions.
        </span>
        <h2 className="text-secondary font-semibold text-lg">Security</h2>
        <span>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </span>
      </div>
    </div>
  );
}
