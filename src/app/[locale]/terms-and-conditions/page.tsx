"use client";

import React from 'react';
import { useTranslations } from "next-intl";

export default function TermsAndConditionsPage() {
  const t = useTranslations("TermsAndConditions");

  const generalProvisionsItems = t.raw("GeneralProvisions.Items") as string[];

  const intellectualPropertyItems = t.raw("IntellectualProperty.Items") as string[];

  const userObligationsItems = t.raw("UserObligations.Items") as {
    Title: string;
    Description: string;
  }[];

  const limitationOfLiabilityItems = t.raw("LimitationOfLiability.Items") as string[];

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

          {/* General Provisions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("GeneralProvisions.Title")}</h2>
            <p className="mb-4">{t("GeneralProvisions.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {generalProvisionsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("IntellectualProperty.Title")}</h2>
            <p className="mb-4">{t("IntellectualProperty.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {intellectualPropertyItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Service Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("ServiceDescription.Title")}</h2>
            <p>{t("ServiceDescription.Description")}</p>
          </section>

          {/* User Obligations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("UserObligations.Title")}</h2>
            <p className="mb-4">{t("UserObligations.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {userObligationsItems.map((item, index) => (
                <li key={index}>
                  <span className="font-medium">{item.Title}:</span> {item.Description}
                </li>
              ))}
            </ul>
          </section>

          {/* Account and Registration */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("AccountAndRegistration.Title")}</h2>
            <p>{t("AccountAndRegistration.Description")}</p>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("PaymentTerms.Title")}</h2>
            <p>{t("PaymentTerms.Description")}</p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("LimitationOfLiability.Title")}</h2>
            <p className="mb-4">{t("LimitationOfLiability.Description")}</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {limitationOfLiabilityItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Termination.Title")}</h2>
            <p>{t("Termination.Description")}</p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("GoverningLaw.Title")}</h2>
            <p>{t("GoverningLaw.Description")}</p>
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
