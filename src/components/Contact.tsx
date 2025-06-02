import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-bg/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-1">Email</h3>
                <p className="text-light-muted dark:text-dark-muted">rahul20020810@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-1">Phone</h3>
                <p className="text-light-muted dark:text-dark-muted">+91-7217326172</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-1">Location</h3>
                <p className="text-light-muted dark:text-dark-muted">Ghaziabad,UP,India</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-md"
            >
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-dark-bg text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-dark-bg text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="rahul@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-dark-bg text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-dark-bg text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg bg-primary-600 text-white font-medium flex items-center justify-center space-x-2
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'} transition-all duration-300`}
              >
                <span>Send Message</span>
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;