import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AuditForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Quality Assurance',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        service: 'Quality Assurance',
        message: ''
      });
    }, 4000);
  };

  if (formSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-6 text-center space-y-2">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="text-lg font-bold">Thank You! Request Submitted</h4>
        <p className="text-sm text-emerald-700">Our engineering director will review your requirements and respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1.5">First Name *</label>
          <input 
            type="text" 
            required 
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1.5">Last Name *</label>
          <input 
            type="text" 
            required 
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-600"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1.5">Company Email *</label>
          <input 
            type="email" 
            required 
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1.5">Phone Number</label>
          <input 
            type="tel" 
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-zinc-300 mb-1.5">Primary Service Needed</label>
        <select 
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-600"
        >
          <option value="Quality Assurance">Quality Assurance & Test Automation</option>
          <option value="Custom Software">Custom Software Engineering</option>
          <option value="Pega Development">Pega PRPC Development & Testing</option>
          <option value="Cloud DevOps">Cloud Infrastructure & DevOps</option>
          <option value="AI & RPA">AI & Intelligent RPA Solutions</option>
          <option value="Data Analytics">Data Analytics & Big Data</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-zinc-300 mb-1.5">Project Details / Requirements *</label>
        <textarea 
          required 
          rows={4}
          placeholder="Tell us about your project, current tech stack, or QA challenges..."
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base py-3.5 rounded-lg btn-hover shadow-md flex items-center justify-center gap-2"
      >
        <span>Submit Consultation Request</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="text-center text-xs text-neutral-400">
        We respect your privacy. Zero spam guarantee.
      </div>
    </form>
  );
}
