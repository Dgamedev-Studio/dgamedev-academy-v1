"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-[#F5F6FB] min-h-screen pt-18 md:pt-24">
      <main className="max-w-full mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl font-bold text-center md:text-left">
              Contact Us
            </h1>
            <p className="pt-4 text-md md:text-lg">
              Butuh Bantuan atau Punya Pertanyaan? Kami siap membantu! Hubungi
              kami kapan saja untuk dukungan, pertanyaan, atau kerja sama. Tim
              kami akan merespons secepat mungkin.
            </p>

            <div className="flex flex-col md:flex-row mt-42 gap-8">
              <div>
                <h1>Customer Support</h1>
              </div>
              <div>
                <h1>Customer Support</h1>
              </div>
              <div>
                <h1>Customer Support</h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2  ">
            <form className="flex flex-col gap-4 mt-8">
              <div className="flex flex-row gap-8">
                <div className="w-1/2">
                  <label
                    htmlFor="prefix"
                    className="block mb-1 font-medium text-sm "
                  >
                    Prefix
                  </label>
                  <input
                    type="text"
                    placeholder="Prefix"
                    className="w-full p-2 rounded-lg  bg-gray-200"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="nama"
                    className="block mb-1 font-medium text-sm "
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Kamu"
                    className="w-full p-2 text-sm rounded-lg  bg-gray-200"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <div className="w-1/2">
                  <label
                    htmlFor="telphone"
                    className="block mb-1 font-medium text-sm "
                  >
                    Phone/Whatsapp
                  </label>
                  <input
                    type="text"
                    placeholder="+62"
                    className="w-full p-2 rounded-lg  bg-gray-200"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-sm "
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full p-2 rounded-lg  bg-gray-200"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="category"
                  className="block mb-1 font-medium text-md pb-2"
                >
                  Kategori
                </label>
                {/* <input type="text" placeholder="Email" className='w-full p-2 rounded-lg  bg-gray-200' />
                 */}
                <div className="flex  gap-4">
                  <div className="w-1/2 ">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="general"
                        className="relative
                                w-5 h-5
                                border-2 border-gray-400
                                rounded-full
                                mr-3
                                flex items-center justify-center
                                transition-all duration-200
                                peer-checked:border-blue-600
                              "
                      />
                      General
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="support"
                        className="relative
                                w-5 h-5
                                border-2 border-gray-400
                                rounded-full
                                mr-3
                                flex items-center justify-center
                                transition-all duration-200
                                peer-checked:border-blue-600
                              "
                      />
                      Support
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="business"
                        className="relative
                                w-5 h-5
                                border-2 border-gray-400
                                rounded-full
                                mr-3
                                flex items-center justify-center
                                transition-all duration-200
                                peer-checked:border-blue-600
                              "
                      />
                      Business
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="general"
                        className="relative
                                w-5 h-5
                                border-2 border-gray-400
                                rounded-full
                                mr-3
                                flex items-center justify-center
                                transition-all duration-200
                                peer-checked:border-blue-600
                              "
                      />
                      General
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="support"
                        className="relative
                                w-5 h-5
                                border-2 border-gray-400
                                rounded-full
                                mr-3
                                flex items-center justify-center
                                transition-all duration-200
                                peer-checked:border-blue-600
                              "
                      />
                      Support
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="business"
                        className="relative
                                w-5 h-5
                                border-2 border-gray-400
                                rounded-full
                                mr-3
                                flex items-center justify-center
                                transition-all duration-200
                                peer-checked:border-blue-600
                              "
                      />
                      Business
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200 mt-4 w-full md:w-auto hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
