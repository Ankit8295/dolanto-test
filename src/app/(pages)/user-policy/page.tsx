import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <div
        data-aos="fade-up"
        className="w-[80%] mx-auto p-10 max-lg:w-full flex flex-col gap-5 text-[#001942] bg-lightBLue rounded-xl"
      >
        <h2 className="text-secondary font-semibold text-lg">Introduction</h2>
        <span>
          This privacy policy takes you through the different policies of
          Dolanto Engineering Pvt. Ltd. After reading this web page, you will
          know how the company will use the information that you may submit
          through the official website.
        </span>
        <h2 className="text-secondary font-semibold text-lg">User Consent</h2>
        <span>
          When you navigate the website, we understand that you agree to our
          Terms and Conditions. You also agree to the way in which the
          information is processed and how it is used as it is described on the
          web page.
        </span>

        <h2 className="text-secondary font-semibold text-lg">
          Type of Information we may collect
        </h2>
        <span>
          While you go through the website, we gather personal information
          regarding what will personally identify you. This includes name, Email
          Id, address and other information that is not related to you.
          Moreover, we gather ‘anonymous information’ that is not associated
          with any personal information and doesn’t relate to the identification
          about yourself.
        </span>
        <h2 className="text-secondary font-semibold text-lg">
          Use of Personal Information
        </h2>

        <span>
          Once we have gathered the information, we don’t sell, trade or share
          it with a third party for any marketing activities. In general, we use
          the data to offer you access to the official website and the services.
          The information, in the long run, helps us to improve the site and
          modify the features accordingly. However, we may probably disclose
          personal information to third parties so that they may communicate
          with you for some or the other reason. For instance, we will use the
          data for sending across emails, data analysis, or processing the
          payment made from the visitor’s end. We also expect the third-parties
          not to use the day but only when they need to offer relevant services.
          In future, we may also share the relevant information to those who are
          thinking about purchasing our products. Just in case you don’t want us
          to share the information, then you may not consider clicking on any
          advertisements or making a purchase.
        </span>
        <span>
          We also have the right to create information records from the
          information you may provide. This includes feedback or comments that
          you offer us which we may or may not think is suitable to include in
          any manner. Way ahead, we may share essential information to affiliate
          companies that really follow and honor the terms stated under the
          Privacy Policy.
        </span>
        <span>
          If we are thinking about a merger or an acquisition with an objective
          to sell some of our assets, then the personal information may be sent
          to that company. When such a case arises, we consider that you
          acknowledge such a kind of transfer.
        </span>
        <h2 className="text-secondary font-semibold text-lg">
          Use of Unidentifiable Information
        </h2>
        <span>
          This privacy policy doesn’t set any constraints on disclosing any
          anonymous information in any manner. Besides, it is under our
          discretion that we will be disclosing the anonymous information to our
          advertisers, partners as well as third parties
        </span>
        <h2 className="text-secondary font-semibold text-lg">
          How do you others view our information?
        </h2>
        <span>
          When you browse through our site, certain kinds of data may be
          publicly available and may be fetched, including those who are not
          under control.
        </span>
        <h2 className="text-secondary font-semibold text-lg">
          Revisions of the Privacy Policy
        </h2>
        <span>
          Our team may change the terms of the privacy policy at their
          discretion. In case we make the changes in the long run, then we shall
          notify you with the changes through an email. Under any disagreement
          using the site, we would request to stop going through the website.
          But, we will consider that you have accepted the changes in the policy
          on when there is continuous posting of the changes.
        </span>
      </div>
    </div>
  );
}
