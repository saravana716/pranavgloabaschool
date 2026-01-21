import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import logo1 from "../assets/Contact-Us.jpg"

import logo from "../assets/ss.png"
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { PageHeader } from './PageHeader';
import { saveContactFormData } from '../utils/firebaseService';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
}

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    trigger
  } = useForm<ContactFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await saveContactFormData(data);
      setSubmitSuccess(true);
      toast.success('Message sent successfully! We will get back to you within 24 hours.');
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
   
    {
      icon: Phone,
      title: "Phone",
      info: "84388 11038",
      info1: "75400 61038",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Mail,
      title: "Email",
      info: " pranavglobalschool@gmail.com",
      info1: " pranavpreschool@gmail.com ",
      color: "text-secondary bg-secondary/10"
    },
     {
      icon: MapPin,
      title: "Address",
      info: "NH-3, Silapathikaram Street, Maraimalai Nagar,",
      info1: "Chennai - 603209",
      color: "text-secondary bg-secondary/10"
    },
    // {
    //   icon: Clock,
    //   title: "Office Hours",
    //   info: "Monday - Friday: 8:00 AM - 5:00 PM",
    //   color: "text-secondary bg-secondary/10"
    // }
  ];

  const departments = [
    { name: "Admissions Office", email: "admissions@branovschool.edu", phone: "(555) 123-4567" },
    { name: "Academic Affairs", email: "academics@branovschool.edu", phone: "(555) 123-4568" },
    { name: "Student Services", email: "students@branovschool.edu", phone: "(555) 123-4569" },
    { name: "Finance Office", email: "finance@branovschool.edu", phone: "(555) 123-4570" }
  ];

  if (submitSuccess) {
    return (
      <div>
        <PageHeader title="Contact" currentPage="Contact" />
        <div className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted/30 rounded-2xl p-12">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Message Sent Successfully
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting Branov School. We have received your message 
              and our team will get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setSubmitSuccess(false)}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Send Another Message
            </Button>
          </div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Contact" currentPage="Contact" backgroundImage={logo1}/>
      <div className="py-20 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about admissions, academics, or our programs? 
              We're here to help. Reach out to us and we'll get back to you promptly.
            </p>
          </div>

          <div className="w-full md:px-6 lg:px-6">
            {/* Contact Info Cards - Mobile: 1 column, Desktop: 4 columns */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mb-12 md:mb-16 max-w-6xl mx-auto">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 w-full">
        <CardContent className="p-4 md:p-6">
          <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl flex items-center justify-center ${contact.color}`}>
            <contact.icon className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <h3 className='tit'>{contact.title}</h3>
          <p className="tit1">{contact.info}</p>
          <p className="tit2">{contact.info1}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* Contact Form - Full width on mobile, centered on desktop */}
 
</div>

        </div>
         <div className='forms'>
    <div className="w-full max-w-3xl mx-auto" >
    <Card className="w-full" style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",  
              border: "1px solid rgba(255, 255, 255, 1)",
              padding:"40px 0px"
            }}  >
      <CardHeader className="px-4 md:px-6">
        <CardTitle className="text-xl md:text-3xl font-boldv text-foreground" style={{fontWeight:"bold"}}>Send us a Message</CardTitle>
        <p className="text-muted-foreground text-sm md:text-base">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-sm md:text-base">First Name *</Label>
              <Input
                id="firstName"
                {...register('firstName', { 
                  required: 'First name is required',
                  minLength: { value: 2, message: 'First name must be at least 2 characters' }
                })}
                className={`mt-1 ${errors.firstName ? 'border-destructive' : ''}`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-destructive text-xs md:text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm md:text-base">Last Name *</Label>
              <Input
                id="lastName"
                {...register('lastName', { 
                  required: 'Last name is required',
                  minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                })}
                className={`mt-1 ${errors.lastName ? 'border-destructive' : ''}`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-destructive text-xs md:text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-sm md:text-base">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`mt-1 ${errors.email ? 'border-destructive' : ''}`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-destructive text-xs md:text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-sm md:text-base">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', {
                pattern: {
                  value: /^[+]?[\d\s\-\(\)]+$/,
                  message: 'Invalid phone number format'
                }
              })}
              className={`mt-1 ${errors.phone ? 'border-destructive' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-destructive text-xs md:text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="subject" className="text-sm md:text-base">Subject *</Label>
            <Select onValueChange={(value) => setValue('subject', value)}>
              <SelectTrigger className={`mt-1 ${errors.subject ? 'border-destructive' : ''}`}>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                <SelectItem value="academics">Academic Information</SelectItem>
                <SelectItem value="facilities">Facilities Tour</SelectItem>
                <SelectItem value="enrollment">Enrollment Process</SelectItem>
                <SelectItem value="financial-aid">Financial Aid</SelectItem>
                <SelectItem value="general">General Information</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <input
              type="hidden"
              {...register('subject', { required: 'Please select a subject' })}
            />
            {errors.subject && (
              <p className="text-destructive text-xs md:text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, ...field } }) => (
                <Textarea
                  id="message"
                  {...field}
                  value={value || ''}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  className={`mt-1 ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Tell us how we can help you... (Optional)"
                  rows={4}
                />
              )}
            />
            {errors.message && (
              <p className="text-destructive text-xs md:text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 md:py-2"
            
          >
            {isSubmitting ? (
              'Sending Message...'
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
  <div className='icon'>
    <img src={logo} alt="" />
  </div>
  </div>
      </div>
    </div>
  );
}