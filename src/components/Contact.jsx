import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Contact({ defaultSubject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    requirement: 'Air Conditioning Systems',
    message: defaultSubject ? `Inquiry regarding: ${defaultSubject}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please fill in your Full Name and Phone Number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            LOCATION & CONTACT
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CONNECT WITH <br />
            <span className="text-cyan-400 cyan-text-glow">JP ENGINEERING.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Get in touch for air-conditioning consultation, equipment supply inquiries, or system specifications in Visakhapatnam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/90 border border-cyan-500/20 p-8 rounded-2xl space-y-6 tech-border shadow-xl">
              
              <div>
                <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-wider uppercase block mb-1">
                  OFFICIAL BUSINESS HEADQUARTERS
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  JP ENGINEERING
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-xs text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-1">Office Location:</strong>
                  <p className="leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 text-xs text-slate-300 border-t border-white/10 pt-4">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">Direct Telephone:</strong>
                  <a href={`tel:${companyInfo.phoneRaw}`} className="text-cyan-400 font-mono text-sm font-bold hover:underline">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3.5 text-xs text-slate-300 border-t border-white/10 pt-4">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">Business Hours:</strong>
                  <span>{companyInfo.workingHours}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={companyInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-cyan-400/10 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 font-mono text-xs font-bold rounded-lg border border-cyan-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-mono text-xs font-bold rounded-lg border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CALL NOW</span>
                </a>
              </div>

            </div>

            {/* Map Visual Preview Card */}
            <div className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden p-4 relative group">
              <div className="h-44 bg-blueprint-fine rounded-xl flex flex-col items-center justify-center text-center p-4 border border-cyan-500/20 relative">
                <MapPin className="w-8 h-8 text-cyan-400 animate-bounce mb-2" />
                <span className="font-mono text-xs font-bold text-white">VISAKHAPATNAM CAMPUS</span>
                <span className="font-mono text-[10px] text-slate-400">{companyInfo.coordinates}</span>
                <a
                  href={companyInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[10px] font-mono text-cyan-400 hover:underline flex items-center gap-1"
                >
                  OPEN IN GOOGLE MAPS <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl tech-border shadow-2xl space-y-6">
              
              <div>
                <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-wider uppercase block mb-1">
                  DIRECT CONSULTATION INQUIRY
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Send Us Your Requirement
                </h3>
              </div>

              {submitted ? (
                <div className="bg-cyan-950/80 border border-cyan-500/50 p-8 rounded-xl text-center space-y-4 font-mono animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your requirement regarding <span className="text-cyan-400">{formData.requirement}</span> has been logged. Our technical team at JP Engineering will contact you promptly at <strong className="text-white">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        company: '',
                        requirement: 'Air Conditioning Systems',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2 bg-cyan-400 text-slate-950 font-bold text-xs rounded uppercase tracking-wider"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {error && (
                    <div className="bg-rose-950/80 border border-rose-500/50 p-3 rounded text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 block">FULL NAME *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 block">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 block">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 block">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Commercial Firm / Residence"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Requirement Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 block">SOLUTION CATEGORY</label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Air Conditioning Systems">Air Conditioning Systems</option>
                      <option value="HVAC Solutions">HVAC Solutions</option>
                      <option value="System Consultation">System Consultation</option>
                      <option value="Supply & Support">Supply & Support</option>
                      <option value="Commercial Space Inquiry">Commercial Space Inquiry</option>
                      <option value="Other HVAC Inquiry">Other HVAC Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 block">PROJECT / REQUIREMENT DETAILS</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify room area, tonnage requirement, or spatial details..."
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-98"
                  >
                    <span>SEND ENQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
