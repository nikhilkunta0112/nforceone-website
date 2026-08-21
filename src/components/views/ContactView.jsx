import React from 'react';
import { contactData } from '../../data/contactData';
import AuditForm from '../common/AuditForm';
import { MapPin, Mail, Phone, Globe, Calendar, ArrowRight } from 'lucide-react';

export default function ContactView() {
  return (
    <main className="flex-1 py-16 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest">
            {contactData.hero.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {contactData.hero.heading}
          </h1>
          <p className="text-lg text-zinc-400">
            {contactData.hero.subheading}
          </p>
        </div>

        {/* Global Offices Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactData.offices.map((office, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6 relative overflow-hidden group hover:border-red-500/50 transition-all">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{office.badge}</span>
                  <h3 className="text-2xl font-bold text-white">{office.city}, {office.country}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{office.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-red-400 transition-colors font-medium">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-red-400 transition-colors font-medium">
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it Works / Consultation Steps */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-5 sm:p-8 rounded-3xl space-y-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">How Our Discovery Process Works</h2>
            <p className="text-xs text-zinc-400">Three simple steps to transform your software engineering capabilities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactData.consultationSteps.map((step, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-3 relative">
                <div className="text-3xl font-black text-red-500">{step.step}</div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-zinc-900 p-5 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-white">Schedule a Free Technical Audit</h2>
            <p className="text-xs text-zinc-400">Fill out the details below and our team will get back to you within 24 hours.</p>
          </div>

          <AuditForm />
        </div>

      </div>
    </main>
  );
}
