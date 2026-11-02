/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Google Form Action URL
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeZ6Y1-DQGGIVerYUiT5hvr7xOMDl9ZfCxb2rpm223FlM8lAg/formResponse";

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-6 md:p-12 selection:bg-blue-100">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Main Content */}
        <div className="space-y-6 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-bold border-b pb-4">
            HOW TO CREATE AND LAUNCH AN ONLINE BUSINESS USING SIMPLE PDFs
          </h1>

          <p className="font-semibold text-lg">Dear Friend,</p>
          
          <p>
            I know your time is valuable, so I'll get straight to the point.
          </p>

          <p className="text-xl font-bold text-red-600">I NEED YOUR ADVICE!</p>

          <p>
            I'm working on putting together a resource to help 9–5 workers like you understand how to make money online by creating and selling PDFs.
          </p>

          <p>
            The idea is simple: to show you how you can turn useful knowledge and information into an eBook that people are willing to pay for, and potentially build an additional income stream alongside your job.
          </p>

          <p>
            But before I put everything together, I want to make sure I'm addressing the questions that actually matter to you.
          </p>

          <p className="font-bold">So, I have just one question for you:</p>

          <p className="text-xl font-bold bg-yellow-50 p-2">
            What's your biggest question about making money online through PDF creation?
          </p>

          <p>
            It could be anything. Perhaps you want to know how to choose a PDF topic, create your first PDF, find buyers, market it online, or actually make sales.
          </p>

          <p>
            Whatever it is, I'd love to hear it. Even if you think your question is silly, please ask.
          </p>

          <p>
            Here's what I need you to do:
          </p>

          <p className="font-medium italic">
            Type your biggest question in the box below and click submit.
          </p>

          <p className="font-bold">
            As a thank-you for sharing your thoughts, I'll send you the finished product for free.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
          {isSubmitted ? (
            <div className="text-center py-8">
              <p className="text-xl font-bold text-emerald-600">Thank you!</p>
              <p className="mt-2 text-slate-600">Your question has been submitted. I'll be in touch soon.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-blue-600 underline"
              >
                Submit another question
              </button>
            </div>
          ) : (
            <form 
              action={FORM_URL}
              method="POST"
              target="_blank"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="question" className="block font-bold">
                  What's Your Biggest Question About Making Money Online Through PDF Creation?
                </label>
                <textarea 
                  id="question"
                  name="entry.1317186693"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:border-blue-600 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="block font-bold">First Name:</label>
                <input 
                  type="text"
                  id="name"
                  name="entry.1968949555"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:border-blue-600 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-bold">Primary Email Address:</label>
                <input 
                  type="email"
                  id="email"
                  name="entry.1516020781"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:border-blue-600 outline-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors uppercase tracking-wide"
              >
                SUBMIT MY QUESTION
              </button>

              <p className="text-xs text-slate-500 leading-tight">
                Your information will be treated with respect and won't be sold or rented to unauthorized third parties. You'll only receive future marketing emails if you separately choose to subscribe.
              </p>
            </form>
          )}
        </div>

        {/* Closing */}
        <div className="pt-8 space-y-4">
          <p>Thank you for taking a moment to share your thoughts.</p>
          <p>
            Your answer will help us create something that addresses the real questions and challenges of people who want to build an income stream online through PDFs.
          </p>
          <p>I appreciate your help!</p>
          
          <div className="pt-4">
            <p className="font-bold">Dream Big, Market Smart.</p>
            <p className="text-slate-600">Emmanuel Ifenna</p>
          </div>
        </div>
      </div>
    </div>
  );
}
