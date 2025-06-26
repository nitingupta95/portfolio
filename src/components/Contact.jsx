import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (response) => {
        console.log('✅ Email sent:', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 3000);
      },
      (error) => {
        console.error('❌ Email failed:', error);
        setStatus('error');
      }
    );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      value: "ng61315@gmail.com",
      href: "mailto:ng61315@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-emerald-400" />,
      title: "Phone",
      value: "+91 7897619801",
      href: "tel:+917897619801",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: "Location",
      value: "Prayagraj, Uttar Pradesh, India",
      href: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question
                or just want to say hi, I’ll do my best to get back to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 group">
                    <div>{item.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-400">{item.title}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {status === 'success' && <p className="text-green-400 text-center mt-2">✅ Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-400 text-center mt-2">❌ Please fill out all fields or try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
