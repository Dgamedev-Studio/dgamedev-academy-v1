"use client";

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslations } from "next-intl";

export default function SubscribeWrapper() {

  const  t  = useTranslations('HomePage.Subscribe');

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 md:mt-24 mx-auto">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 w-full md:max-w-7xl rounded-3xl shadow-2xl transform transition-all duration-500 hover:shadow-blue-300/30 hover:shadow-xl mx-4 md:mx-12">
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        {/* Content container */}
        <div className="relative z-10 p-8 md:px-12 flex flex-col items-center">
          {/* Title with gradient text */}
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white font-sans text-center mb-6">
            {t('Title')} <span className="bg-clip-text text-transparent bg-amber-300">{t('TitleHighlight')}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-blue-100 text-center max-w-lg mb-8 md:text-lg">
              {t('Subtitle')}
          </p>
          
          {/* Form - now always in row layout with longer email input */}
          <div className="w-full max-w-xl pb-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="relative flex-grow group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Kamu"
                  className="w-full pl-4 md:pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md rounded-xl text-white placeholder:text-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl py-4 px-2 md:px-6 text-white font-semibold flex items-center justify-center gap-2 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1 whitespace-nowrap"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
