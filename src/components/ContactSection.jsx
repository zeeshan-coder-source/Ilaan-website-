import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import logo3d from '../assets/3d_Logon.png';
import contactUsImg from '../assets/Contact_Us 1.png';
import line21Img from '../assets/Line 21.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Unable to connect to the server. Please check if the server is running.'
      });
    }
  };

  return (
    <section className="w-full py-6 pb-10 md:pb-20 lg:pb-40 px-4 md:px-6 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E6FBA2 100%)'
    }}>

      {/* Absolute Logo - Desktop: left edge aligned with form card, Mobile: smaller, left edge */}
      <div
        className="
    absolute
    pointer-events-none
    z-0

    left-[-15px]
    top-[45px]

    md:left-[-24px]
    md:top-[80px]

    lg:left-[-35px]
    lg:top-[15px]

    xl:left-[-53px]
    xl:top-[0px]
  "
      >

        {/* Mobile size */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={logo3d}
          alt="3D Logo Background"
          className="block md:hidden w-[110px] h-[170px] object-contain"
          style={{ transform: 'rotate(-164.83deg)' }}
        />

        {/* Tablet + Laptop + Desktop */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={logo3d}
          alt="3D Logo Background"
          className="
    hidden md:block
    md:w-[180px] md:h-[280px]
    lg:w-[250px] lg:h-[380px]
    xl:w-[315px] xl:h-[487px]
    object-contain
  "
          style={{ transform: 'rotate(-164.83deg)' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">

        {/* Center Content */}
        <div className="w-full lg:max-w-[1329px] flex flex-col items-center">

          {/* Let's Connect Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '162px',
              height: '37px',
              borderRadius: '18.5px',
              backgroundColor: '#F6F9F0',
              border: '1px solid #A6E44C',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '160%',
              letterSpacing: '0%',
              color: '#737787',
            }}>
              Let's Connect
            </span>
          </motion.div>

          {/* Contact Us Title - Image */}
          <img
            src={contactUsImg}
            alt="Contact Us"
            className="w-[222.24px] h-[47.04px] md:w-[463px] md:h-[98px] object-contain mb-2"
            draggable={false}
          />

          {/* Divider - Line 21 */}
          <img
            src={line21Img}
            alt="divider"
            style={{ width: '85.5px', height: 'auto' }}
            className="object-contain mb-8 md:mb-10"
            draggable={false}
          />

          {/* Description */}
          <p className="font-poppins font-medium text-[12px] md:text-[25px] leading-[160%] text-[#737787] text-center w-[288px] md:w-auto md:max-w-[600px] mx-auto mb-8 md:mb-[4rem]">
            We'd love to hear from you. Fill out the form and our team will get back to you shortly
          </p><br />

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[1329px] min-h-[auto] md:min-h-[894px] rounded-[30px] md:rounded-[50px] bg-[#FFFFFF] border border-[#46960040] shadow-2xl p-6 md:p-14 lg:p-[70px] flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="flex flex-col h-full flex-grow justify-between">

              {/* Alert Status Banners */}
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-5 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-center font-medium font-poppins flex items-center justify-center gap-3 shadow-md"
                >
                  <svg className="w-6 h-6 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-[14px] md:text-[16px]">Your message has been sent successfully! We will contact you soon.</span>
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-center font-medium font-poppins flex items-center justify-center gap-3 shadow-md"
                >
                  <svg className="w-6 h-6 text-red-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span className="text-[14px] md:text-[16px]">{status.error}</span>
                </motion.div>
              )}

              <div className="space-y-4 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-[#f4fce3] p-2 md:p-3 rounded-lg md:rounded-xl">
                      <User className="text-[#9CBE34] w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status.submitting}
                      className="w-full pl-14 md:pl-20 pr-4 md:pr-6 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white border border-[#c0c0c0] focus:border-[#9CBE34] focus:ring-2 focus:ring-[#9CBE34]/20 outline-none transition-all text-black font-medium text-[13px] md:text-lg placeholder:text-[#A0A3B1]"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-[#f4fce3] p-2 md:p-3 rounded-lg md:rounded-xl">
                      <Mail className="text-[#9CBE34] w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status.submitting}
                      className="w-full pl-14 md:pl-20 pr-4 md:pr-6 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white border border-[#c0c0c0] focus:border-[#9CBE34] focus:ring-2 focus:ring-[#9CBE34]/20 outline-none transition-all text-black font-medium text-[13px] md:text-lg placeholder:text-[#A0A3B1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-[#f4fce3] p-2 md:p-3 rounded-lg md:rounded-xl">
                      <Phone className="text-[#9CBE34] w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={status.submitting}
                      className="w-full pl-14 md:pl-20 pr-4 md:pr-6 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white border border-[#c0c0c0] focus:border-[#9CBE34] focus:ring-2 focus:ring-[#9CBE34]/20 outline-none transition-all text-black font-medium text-[13px] md:text-lg placeholder:text-[#A0A3B1]"
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-[#f4fce3] p-2 md:p-3 rounded-lg md:rounded-xl">
                      <Building className="text-[#9CBE34] w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={status.submitting}
                      className="w-full pl-14 md:pl-20 pr-4 md:pr-6 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white border border-[#c0c0c0] focus:border-[#9CBE34] focus:ring-2 focus:ring-[#9CBE34]/20 outline-none transition-all text-black font-medium text-[13px] md:text-lg placeholder:text-[#A0A3B1]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute left-4 md:left-6 top-4 md:top-8 bg-[#f4fce3] p-2 md:p-3 rounded-lg md:rounded-xl">
                    <MessageSquare className="text-[#9CBE34] w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                  </div>
                  <textarea
                    placeholder="Write your message..."
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status.submitting}
                    className="w-full pl-14 md:pl-20 pr-4 md:pr-6 py-4 md:py-8 rounded-xl md:rounded-2xl bg-white border border-[#c0c0c0] focus:border-[#9CBE34] focus:ring-2 focus:ring-[#9CBE34]/20 outline-none transition-all text-black font-medium text-[13px] md:text-lg resize-none placeholder:text-[#A0A3B1] min-h-[160px] md:min-h-auto"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full flex items-center justify-center bg-gradient-to-r from-[#86b52a] to-[#9CBE34] text-white font-bold h-[56px] md:h-[106px] rounded-xl md:rounded-2xl text-[15px] md:text-xl shadow-lg shadow-green-900/10 hover:shadow-green-900/20 active:scale-[0.98] transition-all mt-4 md:mt-0 ${status.submitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {status.submitting ? (
                    <div className="flex items-center gap-3">
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              <p className="text-center text-[#A0A3B1] text-[10px] md:text-[15px] mt-6 md:mt-8">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

