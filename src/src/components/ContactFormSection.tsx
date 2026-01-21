import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  User,
  Calendar
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@pranavglobalschool.edu', 'admissions@pranavglobalschool.edu'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Education Lane, Knowledge City', 'State - 123456, India'],
      description: 'Visit our campus for a tour'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 8:00 AM - 2:00 PM'],
      description: 'Sunday - Closed'
    }
  ];

  const inquiryTypes = [
    { value: '', label: 'Select Inquiry Type' },
    { value: 'admission', label: 'Admission Information' },
    { value: 'academic', label: 'Academic Programs' },
    { value: 'fees', label: 'Fees & Payment' },
    { value: 'transport', label: 'Transportation' },
    { value: 'infrastructure', label: 'Facilities & Infrastructure' },
    { value: 'career', label: 'Career Opportunities' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  const departments = [
    {
      title: 'Admissions Office',
      phone: '+91 98765 43210',
      email: 'admissions@pranavglobalschool.edu',
      hours: 'Mon - Sat: 9:00 AM - 4:00 PM'
    },
    {
      title: 'Academic Office',
      phone: '+91 98765 43211',
      email: 'academic@pranavglobalschool.edu',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM'
    },
    {
      title: 'Finance Office',
      phone: '+91 98765 43212',
      email: 'finance@pranavglobalschool.edu',
      hours: 'Mon - Fri: 9:00 AM - 4:00 PM'
    },
    {
      title: 'Transport Office',
      phone: '+91 98765 43213',
      email: 'transport@pranavglobalschool.edu',
      hours: 'Mon - Sat: 7:00 AM - 6:00 PM'
    }
  ];

  if (isSubmitted) {
    return (
      <div>
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with us for any inquiries or information about our school"
          backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop&q=80"
        />
        
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                Message Sent Successfully!
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Thank you for contacting Pranav Global School. We have received your 
                message and will respond within 24 hours. For urgent matters, please 
                call us directly.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Reference ID:</strong> MSG{Date.now().toString().slice(-6)}
                  <br />
                  <strong>Submitted on:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or information about our school"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop&q=80"
      />

      {/* Contact Information Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help with any questions or information you need about our school
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {info.title}
                </h3>
                
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
                
                <p className="text-sm text-muted-foreground/80 mt-2">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        {...register('fullName', { required: 'Full name is required' })}
                        placeholder="Enter your full name"
                        className={errors.fullName ? 'border-destructive' : ''}
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        placeholder="Enter your email"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Phone number must be 10 digits'
                          }
                        })}
                        placeholder="Enter 10-digit phone number"
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <select
                        id="inquiryType"
                        {...register('inquiryType', { required: 'Inquiry type is required' })}
                        className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                          errors.inquiryType ? 'border-destructive' : ''
                        }`}
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.inquiryType && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.inquiryType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      placeholder="Enter message subject"
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Enter your message..."
                      rows={5}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send size={20} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map and Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 relative flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      School Location
                    </h3>
                    <p className="text-muted-foreground">
                      Interactive map would be embedded here
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-card-foreground mb-2">
                    Pranav Global School
                  </h4>
                  <p className="text-muted-foreground">
                    123 Education Lane, Knowledge City<br />
                    State - 123456, India
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Need Immediate Assistance?
                </h4>
                <p className="text-muted-foreground mb-6">
                  For urgent matters or immediate assistance, don't hesitate to call us directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:info@pranavglobalschool.edu"
                    className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">info@pranavglobalschool.edu</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Department Contacts
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Connect with specific departments for specialized assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  {dept.title}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <a 
                      href={`tel:${dept.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {dept.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {dept.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {dept.hours}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-card-foreground mb-4">
              Visit Our Campus
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience our facilities firsthand and meet our team. Schedule a visit 
              to see why Pranav Global School is the right choice for your child's education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center space-x-2">
                <Calendar size={20} />
                <span>Schedule Campus Visit</span>
              </Button>
              <Button className="border-2 border-primary text-primary hover:bg-primary/5 flex items-center space-x-2">
                <MessageSquare size={20} />
                <span>Live Chat Support</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}