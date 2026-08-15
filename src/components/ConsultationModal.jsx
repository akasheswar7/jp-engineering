import React, { useState } from 'react';
import { X, Send, CheckCircle2, Wind, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ConsultationModal({ isOpen, onClose, initialCategory = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: initialCategory || 'Air Conditioning Systems',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#060D1D] border border-cyan-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 tech-border shadow-2xl animate-fadeIn relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-cyan-400 text-[10px] font-mono tracking-widest uppercase">
            <Wind className="w-3.5 h-3.5" />
            JP ENGINEERING • VISAKHAPATNAM
          </div>
          <h3 className="font-display text-2xl font-bold text-white">
            Request HVAC Consultation
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Direct response guaranteed by our technical team within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-cyan-950/90 border border-cyan-500/50 p-6 rounded-xl text-center space-y-4 font-mono">
            <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-white">Consultation Logged</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. We have received your consultation request for <span className="text-cyan-400">{formData.category}</span>. We will call you at <strong className="text-white">{formData.phone}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 w-full py-3 bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono text-slate-300 block mb-1">YOUR NAME *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono text-slate-300 block mb-1">PHONE NUMBER *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 78937 61976"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-300 block mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Optional"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-300 block mb-1">CATEGORY / INTEREST</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Air Conditioning Systems">Air Conditioning Systems</option>
                <option value="HVAC Solutions">HVAC Solutions</option>
                <option value="System Consultation">System Consultation</option>
                <option value="Supply & Support">Supply & Support</option>
                <option value="Commercial Space">Commercial Space</option>
                <option value="Residential AC">Residential AC</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-300 block mb-1">SPECIFIC REQUIREMENTS</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention room size, floor height, or space details..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
            >
              <span>SUBMIT CONSULTATION REQUEST</span>
              <Send className="w-4 h-4" />
            </button>

            <p className="text-[10px] font-mono text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              Direct phone support available: {companyInfo.phone}
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
