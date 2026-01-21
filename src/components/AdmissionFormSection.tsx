import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';

import { toast } from 'sonner';
import { PageHeader } from './PageHeader';
import { WhyChooseSection } from './WhyChooseSection';
import { saveAdmissionFormData, type AdmissionFormData as FirebaseAdmissionFormData } from '../utils/firebaseService';
import logo from "../assets/Admission.jpg"

interface AdmissionFormData {
  // Simplified fields based on the image
  studentName: string;
  parentName: string;
  mobileNo: string;
  emailId: string;
  grade: string;
  city: string;
  previousSchool: string;
  message: string;
  recaptcha: boolean; // For reCAPTCHA checkbox
}


import { City } from 'country-state-city';



const cities = City.getCitiesOfCountry('IN') || [];

export function AdmissionFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue
  } = useForm<AdmissionFormData>();

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    
    try {
      // Save to Firebase Firestore
      const firebaseData: FirebaseAdmissionFormData = {
        studentName: data.studentName,
        parentName: data.parentName,
        mobileNo: data.mobileNo,
        emailId: data.emailId,
        grade: data.grade,
        city: data.city,
        previousSchool: data.previousSchool,
        message: data.message,
        recaptcha: data.recaptcha
      };
      
      await saveAdmissionFormData(firebaseData);
      setSubmitSuccess(true);
      toast.success('Application submitted successfully! We will contact you within 48 hours.');
      reset();
    } catch (error) {
      console.error('Error submitting admission form:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div>
        <PageHeader title="Admission" currentPage="Admission" backgroundImage={logo}/>
        <div className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-muted/30 rounded-2xl p-12">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Application Submitted Successfully!
              </h2>
              <p className="text-muted-foreground mb-8">
                Thank you for choosing Branov School. We have received your admission application 
                and will review it carefully. Our admissions team will contact you within 48 hours 
                to schedule the next steps in the process.
              </p>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• You will receive a confirmation email shortly</li>
                    <li>• Our team will review your application within 2 business days</li>
                    <li>• We'll schedule an assessment and interview</li>
                    <li>• Admission decision will be communicated within 2 weeks</li>
                  </ul>
                </div>
              </div>
              <Button 
                onClick={() => setSubmitSuccess(false)}
                className="bg-secondary hover:bg-secondary/90 text-white mt-6"
              >
                Submit Another Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{marginBottom:"30px"}}>
      <PageHeader title="Admission" currentPage="Admission" backgroundImage={logo}/>
      <div style={{padding:40}}></div>
      <WhyChooseSection />

      <div className="py-0 bg-background"  style={{
              background: "#ffe8d9",
              borderRadius: "16px",
              boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",  
              border: "1px solid rgba(255, 255, 255, 1)",
              padding:"40px 0px"
            }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Admission Application Form
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete the form below to begin your admission process at Branov School.
            </p>
          </div>

          <Card style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",  
              border: "1px solid rgba(255, 255, 255, 1)",
              padding:"40px 0px"
            }}>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <FileText className="h-6 w-6 text-secondary" />
                Student Admission Application
              </CardTitle>
              <CardDescription>
                Please fill out all required fields accurately. All information will be kept confidential.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Student Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentName" style={{marginBottom:"10px"}}>Student Name *</Label>
                    <Input
                      id="studentName"
                      {...register('studentName', { 
                        required: 'Student name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={errors.studentName ? 'border-destructive' : ''}
                    />
                    {errors.studentName && (
                      <p className="text-destructive text-sm mt-1">{errors.studentName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="parentName" style={{marginBottom:"10px"}}>Parent Name *</Label>
                    <Input
                      id="parentName"
                      {...register('parentName', { 
                        required: 'Parent name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={errors.parentName ? 'border-destructive' : ''}
                    />
                    {errors.parentName && (
                      <p className="text-destructive text-sm mt-1">{errors.parentName.message}</p>
                    )}
                  </div>
                </div>

                {/* Mobile Number and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobileNo" style={{marginBottom:"10px"}}>Mobile Number *</Label>
                    <Input
                      id="mobileNo"
                      type="tel"
                      {...register('mobileNo', { 
                        required: 'Mobile number is required',
                        pattern: {
                          value: /^[+]?[\d\s\-\(\)]+$/,
                          message: 'Invalid phone number'
                        }
                      })}
                      className={errors.mobileNo ? 'border-destructive' : ''}
                    />
                    {errors.mobileNo && (
                      <p className="text-destructive text-sm mt-1">{errors.mobileNo.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="emailId" style={{marginBottom:"10px"}}>Email ID *</Label>
                    <Input
                      id="emailId"
                      type="email"
                      {...register('emailId', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.emailId ? 'border-destructive' : ''}
                    />
                    {errors.emailId && (
                      <p className="text-destructive text-sm mt-1">{errors.emailId.message}</p>
                    )}
                  </div>
                </div>

                {/* Grade and City Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="grade" style={{marginBottom:"10px"}}>Select Grade *</Label>
                    <Select onValueChange={(value) => setValue('grade', value)}>
                      <SelectTrigger className={errors.grade ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kindergarten">Kindergarten</SelectItem>
                        <SelectItem value="grade-1">Grade 1</SelectItem>
                        <SelectItem value="grade-2">Grade 2</SelectItem>
                        <SelectItem value="grade-3">Grade 3</SelectItem>
                        <SelectItem value="grade-4">Grade 4</SelectItem>
                        <SelectItem value="grade-5">Grade 5</SelectItem>
                        <SelectItem value="grade-6">Grade 6</SelectItem>
                        <SelectItem value="grade-7">Grade 7</SelectItem>
                        <SelectItem value="grade-8">Grade 8</SelectItem>
                        <SelectItem value="grade-9">Grade 9</SelectItem>
                        <SelectItem value="grade-10">Grade 10</SelectItem>
                        <SelectItem value="grade-11">Grade 11</SelectItem>
                        <SelectItem value="grade-12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      {...register('grade', { required: 'Please select grade' })}
                    />
                    {errors.grade && (
                      <p className="text-destructive text-sm mt-1">{errors.grade.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="city" style={{marginBottom:"10px"}}>Select City *</Label>
                    <Input
                      id="city"
                      list="cities-list"
                      {...register('city', { required: 'Please select city' })}
                      placeholder="Type to search cities..."
                      className={errors.city ? 'border-destructive' : ''}
                      autoComplete="off"
                    />
                    <datalist id="cities-list">
                      {cities.map((city, index) => (
                        <option key={`${city.name}-${index}`} value={city.name} />
                      ))}
                    </datalist>
                    {errors.city && (
                      <p className="text-destructive text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>
                </div>

                {/* Previous School (Optional) */}
                <div>
                  <Label htmlFor="previousSchool" style={{marginBottom:"10px"}}>Previous School (optional)</Label>
                  <Input
                    id="previousSchool"
                    {...register('previousSchool')}
                    placeholder="Enter previous school name"
                    className={errors.previousSchool ? 'border-destructive' : ''}
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" style={{marginBottom:"10px"}}>Enter your Message</Label>
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
                        placeholder="Tell us about your child or any additional information... (Optional)"
                        rows={4}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                    )}
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center space-x-2">
                    <Checkbox
                      id="recaptcha"
                      {...register('recaptcha', { required: 'Please verify you are not a robot' })}
                      className={errors.recaptcha ? 'border-destructive' : ''}
                    />
                    <label
                      htmlFor="recaptcha"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I'm not a robot
                    </label>
                  </div> */}
                  {/* <div className="flex items-center space-x-2">
                    <img src="https://www.google.com/recaptcha/api2/logo.png" alt="reCAPTCHA" className="h-6 w-6" />
                    <span className="text-xs text-muted-foreground">reCAPTCHA</span>
                  </div> */}
                </div>
                {errors.recaptcha && (
                  <p className="text-destructive text-sm mt-1">{errors.recaptcha.message}</p>
                )}

                {/* Submit Button */}
               <Button
  type="submit"
  disabled={isSubmitting}
  className="w-1/2 max-w-xs bg-secondary hover:bg-secondary/90 text-white"
  style={{ padding: '1rem 6rem' }} // py-4 px-6 equivalent
>
  {isSubmitting ? 'Submitting Application...' : 'Submit'}
</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}