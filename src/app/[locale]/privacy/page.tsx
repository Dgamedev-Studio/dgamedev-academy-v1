"use client";

import React from 'react';
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  const infoCollectedItems = t.raw("InformationCollected.Items") as {
    Title: string;
    Description: string;
  }[];

  const usageItems = t.raw("HowWeUseInformation.Items") as string[];

  const disclosureItems = t.raw("InformationDisclosure.Items") as {
    Title: string;
    Description: string;
  }[];

  const rightsItems = t.raw("YourPrivacyRights.Items") as string[];

  return (
    <div className="bg-[#F5F6FB] min-h-screen pt-18 md:pt-24">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t("Title")}</h1>
          <p className="mt-4 text-lg text-gray-600">{t("Subtitle")}</p>
        </div>

        <div className="prose prose-lg mx-auto text-gray-700">
          {/* Introduction */}
          <section className="mb-8">
            <p>{t("Introduction")}</p>
          </section>

          {/* Information Collected */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("InformationCollected.Title")}</h2>
            <p className="mb-4">{t("InformationCollected.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {infoCollectedItems.map((item, index) => (
                <li key={index}>
                  <span className="font-medium">{item.Title}:</span> {item.Description}
                </li>
              ))}
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("HowWeUseInformation.Title")}</h2>
            <p className="mb-4">{t("HowWeUseInformation.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {usageItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Information Disclosure */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("InformationDisclosure.Title")}</h2>
            <p className="mb-4">{t("InformationDisclosure.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {disclosureItems.map((item, index) => (
                <li key={index}>
                  <span className="font-medium">{item.Title}:</span> {item.Description}
                </li>
              ))}
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("DataSecurity.Title")}</h2>
            <p>{t("DataSecurity.Description")}</p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("CookiesAndTracking.Title")}</h2>
            <p>{t("CookiesAndTracking.Description")}</p>
          </section>

          {/* Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("YourPrivacyRights.Title")}</h2>
            <p className="mb-4">{t("YourPrivacyRights.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {rightsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Policy Changes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("PolicyChanges.Title")}</h2>
            <p>{t("PolicyChanges.Description")}</p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("ContactUs.Title")}</h2>
            <p>{t("ContactUs.Description")}</p>
            <div className="mt-4">
              <p className="font-medium">{t("ContactUs.CompanyName")}</p>
              <p>Email: {t("ContactUs.Email")}</p>
              <p>Telepon: {t("ContactUs.Phone")}</p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-sm text-gray-600">{t("LastUpdated")}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
