import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Mail, Phone, Clock, Send, ShieldCheck, MapPin, 
  HelpCircle, CheckCircle2, MessageSquare, ArrowRight, UserCheck, RefreshCw 
} from 'lucide-react';
import { TradeInquiry, ChatMessage } from '../types';

export default function ContactView() {
  // Form States
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successInquiry, setSuccessInquiry] = useState<TradeInquiry | null>(null);

  // Chat States
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: 'Good day. I am the Lexpo B.V. Automated Trade Specialist. I can advise you on Netherlands trade regulations, CE approvals, fiscal representation, or FMCG cold-chain requirements. How may I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!fullName || !company || !email || !subject || !message) {
      setFormError("Please populate all required fields.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const uniqueId = `LXP-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      const newInquiry: TradeInquiry = {
        id: uniqueId,
        fullName,
        company,
        email,
        subject,
        message,
        status: 'Pending',
        timestamp: new Date().toLocaleString()
      };

      setSuccessInquiry(newInquiry);
      setSubmitting(false);

      // Reset form
      setFullName('');
      setCompany('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  const handleChatSend = (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const query = customText || chatInput;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    // Simulated Intelligent Trade Advisor response matching keywords
    setTimeout(() => {
      let responseText = '';
      const norm = query.toLowerCase();

      if (norm.includes('excise') || norm.includes('beverage') || norm.includes('tax') || norm.includes('fmcg')) {
        responseText = `Regarding FMCG/Beverage Excise:\n\nLexpo B.V. supports standard import compliance and logistics coordination for FMCG and beverage shipments in the Netherlands. We facilitate proper regulatory filing, tax documentation, and coordinate transport routes to manage transit steps seamlessly. We handle standard representations to support foreign trade partners.`;
      } else if (norm.includes('ce') || norm.includes('electronic') || norm.includes('gaming') || norm.includes('certif')) {
        responseText = `Regarding Consumer Electronics & Compliance Standards:\n\nAll electronics entering the Netherlands must verify compliance. Our compliance desk in our Netherlands terminal conducts physical inspections, scans OEM serial numbers, and audits declaration files to confirm industry standard specifications are fulfilled. We log serial keys to ensure zero-diversion and prevent counterfeits from entering distributors' channels.`;
      } else if (norm.includes('singapore') || norm.includes('asia') || norm.includes('apac')) {
        responseText = `Singapore Gateway Node Operations:\n\nOur Singapore hub coordinates sub-24-hour transshipment for high-value semiconductor parts and tech items in APAC. We support automated product sorting and direct intermodal shipping lanes linking ASEAN ports with our Netherlands master hub. Average cargo dispatch SLA in Singapore is under 2 hours.`;
      } else if (norm.includes('quote') || norm.includes('fee') || norm.includes('cost') || norm.includes('rate')) {
        responseText = `Pricing and Quota Inquiries:\n\nTo provide an official trade quote, our desk requires a detailed manifest (CBM volume, net weights, CE certs, and country of origin). You can utilize the "Request Sourcing Proposal" form on our Contact Page or Services Tab to submit your request. Our Netherlands headquarters commits to a 2-hour response window.`;
      } else {
        responseText = `Thank you for your message. Lexpo B.V. coordinates international wholesale logistics, standard warehousing, and trade clearance under strict Netherlands compliance guidelines. \n\nTo discuss this sourcing project in detail, please submit an official inquiry through the form, or email our Netherlands trade desk directly at trade@lexpo.nl. We look forward to connecting.`;
      }

      const assistantMsg: ChatMessage = {
        id: `msg-assistant-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, assistantMsg]);
    }, 1000);
  };

  const chatPrompts = [
    'How do trade compliance and standard VAT filing operate in the Netherlands?',
    'What CE certification rules apply to premium consumer electronics?',
    'What are the operations specifications of the Singapore Hub?'
  ];

  return (
    <div id="contact-view-container" className="flex flex-col">
      
      {/* Contact Header banner */}
      <section id="contact-hero" className="bg-[#0c0d10] text-white pt-20 pb-16 border-b border-zinc-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase">
            // Netherlands Sourcing Desk
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase leading-none mt-3">
            Connect with our Trade Specialists.
          </h1>
          <p className="mt-4 text-zinc-400 text-sm font-sans max-w-xl mx-auto">
            Submit a sourcing prospectus, coordinate custom clearances, or chat with our live automated compliance advisory desk.
          </p>
        </div>
      </section>

      {/* Main Form & Hub Info Section */}
      <section id="contact-details" className="py-20 bg-white border-b border-brand-border font-sans">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            
            {/* Left side: Clean underline-styled inquiry form */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="font-display text-xl font-bold text-brand-primary uppercase">Trade Sourcing Inquiry</h3>
                <p className="text-xs text-brand-muted font-sans">Complete the secure portal below. Every prospectus undergoes verified compliance assessment within 2 business hours.</p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-6">
                {formError && (
                  <div className="bg-zinc-100 border border-zinc-300 text-zinc-900 rounded p-4 text-xs font-mono">
                    ⚠️ {formError}
                  </div>
                )}
                {/* Full Name field */}
                <div className="relative border-b border-zinc-300 focus-within:border-brand-accent transition-colors py-1.5">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Full Name *</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-none p-1 text-sm text-brand-primary placeholder-zinc-300 focus:outline-none mt-1 font-sans"
                  />
                </div>

                {/* Company field */}
                <div className="relative border-b border-zinc-300 focus-within:border-brand-accent transition-colors py-1.5">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Company Name *</label>
                  <input
                    id="contact-form-company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="E.g., Benelux Electronics Distribution B.V."
                    className="w-full bg-transparent border-none p-1 text-sm text-brand-primary placeholder-zinc-300 focus:outline-none mt-1 font-sans"
                  />
                </div>

                {/* Email field */}
                <div className="relative border-b border-zinc-300 focus-within:border-brand-accent transition-colors py-1.5">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Corporate Email Address *</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="trade@company.com"
                    className="w-full bg-transparent border-none p-1 text-sm text-brand-primary placeholder-zinc-300 focus:outline-none mt-1 font-sans"
                  />
                </div>

                {/* Inquiry Subject */}
                <div className="relative border-b border-zinc-300 focus-within:border-brand-accent transition-colors py-1.5">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Inquiry Subject *</label>
                  <input
                    id="contact-form-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g., Sourcing Agreement Partnership"
                    className="w-full bg-transparent border-none p-1 text-sm text-brand-primary placeholder-zinc-300 focus:outline-none mt-1 font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="relative border-b border-zinc-300 focus-within:border-brand-accent transition-colors py-1.5">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Prospectus Details / Message *</label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your volume, categories, and target transshipment lanes..."
                    className="w-full bg-transparent border-none p-1 text-xs text-brand-primary placeholder-zinc-300 focus:outline-none mt-1.5 font-sans resize-none"
                  />
                </div>

                {/* Compliance Statement */}
                <div className="flex items-start gap-2.5 text-[10px] text-zinc-500 bg-zinc-50 p-3 rounded border border-zinc-200">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-accent shrink-0" />
                  <span>By submitting this inquiry, you agree to Lexpo B.V.'s standard KYC procedures. Sourcing operations comply with Netherlands trade compliance protocols.</span>
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-sm bg-brand-accent text-black hover:bg-brand-accent-hover p-4 text-xs font-bold uppercase tracking-widest transition-colors font-mono flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Auditing Prospectus...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-brand-accent" />
                      Send Sourcing Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right side: Hub headquarters details & map */}
            <div className="flex flex-col justify-between gap-10">
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl font-bold text-brand-primary uppercase">Netherlands Desk</h3>
                </div>

                {/* Address Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-zinc-50 p-5 rounded border border-zinc-200 flex flex-col justify-between">
                    <div>
                      <Building2 className="h-5 w-5 text-brand-accent mb-3" />
                      <h4 className="font-display font-semibold text-xs uppercase tracking-wide text-brand-primary">Lexpo B.V. Netherlands</h4>
                      <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
                        Netherlands Gateway Hub<br />
                        Benelux Transit Corridor<br />
                        The Netherlands
                      </p>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 mt-4">Logistics Operations Node</span>
                  </div>

                  <div className="bg-zinc-50 p-5 rounded border border-zinc-200 flex flex-col justify-between">
                    <div>
                      <Phone className="h-5 w-5 text-brand-accent mb-3" />
                      <h4 className="font-display font-semibold text-xs uppercase tracking-wide text-brand-primary">Direct Desk Channels</h4>
                      <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
                        <strong>Email:</strong> trade@lexpo.nl<br />
                        <strong>Excise Desk:</strong> logistics@lexpo.nl<br />
                        <strong>Phone Office:</strong> +31 (0)20 408 9200
                      </p>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 mt-4">SLA Operations Office</span>
                  </div>
                </div>
              </div>

              {/* Stylized Vector Mini-Map of Wilhelminakade / Kop van Zuid */}
              <div id="contact-map" className="bg-[#0b0c10] border border-zinc-800 rounded-lg p-5 text-white flex flex-col justify-between min-h-[250px] relative">
                
                {/* Background blueprint pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:12px_12px] rounded-lg" />

                <div className="relative z-10 flex justify-between items-center mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-brand-accent" />
                    Netherlands Hub Coordinates
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500">50.1109° N, 8.6821° E</span>
                </div>

                {/* SVG Vector Drawing Wilhelminakade layout */}
                <div className="relative z-10 flex-1 flex items-center justify-center min-h-[140px]">
                  <svg viewBox="0 0 400 150" className="w-full h-auto select-none opacity-90 font-mono">
                    {/* Maas River riverbed */}
                    <path d="M 0,40 Q 150,55 400,20 L 400,0 L 0,0 Z" fill="#0c1926" stroke="#102538" strokeWidth="1" />
                    <text x="180" y="24" fill="#1b3954" className="text-[10px] font-bold">NIEUWE MAAS</text>

                    {/* Erasmusbrug bridge lines */}
                    <path d="M 120,45 L 80,150" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="3" />
                    <text x="110" y="85" fill="#4b5563" transform="rotate(-65 110 85)" className="text-[8px]">Erasmusbrug</text>

                    {/* Wilhelminakade spit */}
                    <path d="M 80,48 L 400,50 L 400,105 L 140,110 Q 95,100 80,75 Z" fill="#111317" stroke="#1f2937" strokeWidth="1.5" />
                    <text x="240" y="75" fill="#374151" className="text-[11px] font-bold tracking-widest">WILHELMINAKADE</text>

                    {/* Lexpo HQ Beacon */}
                    <g className="cursor-pointer">
                      <circle cx="280" cy="80" r="12" fill="#ffffff" fillOpacity="0.2" />
                      <circle cx="280" cy="80" r="4" fill="#ffffff" />
                      {/* Callout box */}
                      <rect x="295" y="60" width="90" height="35" rx="3" fill="#000000" stroke="#ffffff" strokeWidth="1" />
                      <text x="340" y="72" textAnchor="middle" fill="#ffffff" className="text-[8px] font-bold">LEXPO B.V.</text>
                      <text x="340" y="86" textAnchor="middle" fill="#71717a" className="text-[7px]">Wilhelminakade 953</text>
                    </g>

                    {/* Katendrecht harbor spit */}
                    <path d="M 130,135 L 400,135 L 400,150 L 120,150 Z" fill="#1c1e24" />
                  </svg>
                </div>

                <div className="relative z-10 border-t border-zinc-800/80 pt-3 flex justify-between text-[9px] text-zinc-500 font-mono">
                  <span>Target Anchor: Rijnhaven Terminal</span>
                  <span>Port Sector Node: ROT-82</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Interactive Compliance advisory desk Chat specialist */}
      <section id="chat-specialist" className="py-24 bg-zinc-50 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Col: Chat Guide */}
            <div className="lg:col-span-5 flex flex-col gap-4 font-sans">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase">
                Trade Advisor AI Assistant
              </h2>
              <p className="text-brand-muted text-xs leading-relaxed font-sans">
                Review Netherlands regulatory standards, CE import guidelines, or duty suspend warehouses on-demand. Select a suggested prompt or submit a custom wholesale query to receive instant advice.
              </p>

              {/* Chat Prompts suggestions */}
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Suggested Inquiries</span>
                {chatPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChatSend(undefined, prompt)}
                    className="text-left p-3 rounded bg-white hover:bg-brand-light border border-brand-border text-xs text-brand-primary leading-relaxed transition-all flex items-center justify-between group"
                  >
                    <span>{prompt}</span>
                    <ArrowRight className="h-4 w-4 text-zinc-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col: Chat Screen */}
            <div className="lg:col-span-7 bg-white border border-brand-border rounded-lg shadow-sm flex flex-col h-[480px]">
              
              {/* Chat Header */}
              <div className="bg-[#0b0c10] text-white p-4 rounded-t-lg flex justify-between items-center font-sans border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-zinc-300 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold font-display uppercase tracking-wider block">Compliance Advisor Desk</span>
                    <span className="text-[9px] font-mono text-zinc-500">Live Custom Regulatory Assessment</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-white font-bold">Netherlands Terminal</span>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md p-4 rounded text-xs leading-relaxed whitespace-pre-line shadow-sm border ${
                      msg.sender === 'user' 
                        ? 'bg-zinc-100 text-brand-primary border-zinc-200 rounded-br-none' 
                        : 'bg-zinc-50 text-zinc-800 border-zinc-200 rounded-bl-none'
                    }`}>
                      <p>{msg.text}</p>
                      <span className="block text-[8px] font-mono text-zinc-400 text-right mt-1.5">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Form */}
              <form onSubmit={handleChatSend} className="p-4 border-t border-brand-border bg-zinc-50 rounded-b-lg flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about VAT deferral, CE guidelines, Singapore hub..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 rounded border border-zinc-300 bg-white p-3 text-xs focus:outline-none focus:border-brand-accent text-brand-primary"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-brand-accent text-black hover:bg-brand-accent-hover px-4 py-3 text-xs font-bold uppercase transition-colors font-mono flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4" />
                </button>
              </form>

            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS INQUIRY MODAL */}
      {successInquiry && (
        <div id="success-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg border border-brand-border w-full max-w-md overflow-hidden shadow-2xl font-sans text-xs"
          >
            <div className="bg-[#0a0a0a] text-white p-6 flex items-center gap-3 border-b border-zinc-800">
              <CheckCircle2 className="h-8 w-8 shrink-0 text-white" />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Prospectus Logged</span>
                <h3 className="font-display text-base font-bold uppercase tracking-tight mt-0.5">Sourcing File Created</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center bg-zinc-50 p-3 rounded border border-zinc-200 font-mono">
                <span className="text-zinc-400 text-[10px] uppercase">Transaction ID</span>
                <span className="font-bold text-brand-primary">{successInquiry.id}</span>
              </div>

              <div className="space-y-2 text-zinc-600 leading-relaxed">
                <p>
                  Thank you, <strong>{successInquiry.fullName}</strong>. Your trade sourcing prospectus for <strong>{successInquiry.company}</strong> has been logged inside our Netherlands terminal.
                </p>
                <p>
                  An authorized Netherlands compliance director has been assigned to audit your subject (<strong>{successInquiry.subject}</strong>). We will send routing feasibility briefs to <strong>{successInquiry.email}</strong> within 2 hours.
                </p>
              </div>

              <div className="bg-zinc-50 p-4 rounded border border-zinc-200 text-[10px] leading-relaxed flex items-start gap-2 text-zinc-500">
                <UserCheck className="h-4.5 w-4.5 text-brand-accent shrink-0 mt-0.5" />
                <span>An automated compliance log ticket has been synced to your local session history. Record: SECURE-FAST-LXP</span>
              </div>
            </div>

            <div className="bg-zinc-50 px-6 py-4 border-t border-zinc-200 text-right">
              <button 
                onClick={() => setSuccessInquiry(null)}
                className="rounded bg-brand-primary text-white hover:bg-zinc-800 px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider"
              >
                Close Receipt
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
