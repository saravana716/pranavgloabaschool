import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  GraduationCap,
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  FileText,
  Plus,
  Minus,
  Upload
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { saveJobApplicationData, type JobApplicationData as FirebaseJobApplicationData } from '../utils/firebaseService';
import { uploadResume } from '../utils/storageService';
import logo from "../assets/Career.jpg"

// Manual list of major Indian cities
const cities = [
  'Agra', 'Ahmedabad', 'Ajmer', 'Allahabad', 'Amritsar', 'Aurangabad',
  'Bangalore', 'Bhopal', 'Bhubaneswar', 'Chandigarh', 'Chennai', 'Coimbatore',
  'Cuttack', 'Dehradun', 'Delhi', 'Dhanbad', 'Faridabad', 'Ghaziabad', 'Goa',
  'Guntur', 'Gurgaon', 'Guwahati', 'Gwalior', 'Hubli-Dharwad', 'Hyderabad',
  'Indore', 'Jabalpur', 'Jaipur', 'Jalandhar', 'Jammu', 'Jamshedpur', 'Jodhpur',
  'Kanpur', 'Kochi', 'Kolkata', 'Kota', 'Kozhikode', 'Lucknow', 'Ludhiana',
  'Madurai', 'Mangalore', 'Meerut', 'Mumbai', 'Mysore', 'Nagpur', 'Nashik',
  'Navi Mumbai', 'Noida', 'Patna', 'Pune', 'Raipur', 'Rajkot', 'Ranchi',
  'Salem', 'Shimla', 'Siliguri', 'Srinagar', 'Surat', 'Thane', 'Thiruvananthapuram',
  'Tiruchirappalli', 'Tirupati', 'Udaipur', 'Vadodara', 'Varanasi', 'Vijayawada',
  'Visakhapatnam', 'Warangal'
];

interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  city?: string;
  experience: string;
  coverLetter?: string;
  resume: File | null;
}

interface JobAccordionItemProps {
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
  };
  index: number;
}

function JobAccordionItem({ job, index }: JobAccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-lg overflow-hidden shadow-sm border border-border/30"
    >
      {/* Job Title Header - Always Visible */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: isExpanded ? 'var(--muted)' : 'var(--background)',
        }}
        whileHover={{ 
          backgroundColor: isExpanded ? 'var(--muted)' : 'var(--accent)/5',
          scale: 1.001
        }}
        whileTap={{ scale: 0.998 }}
        animate={{
          backgroundColor: isExpanded ? 'var(--muted)' : 'var(--background)',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="text-lg font-semibold text-foreground text-left">
          {job.title}
        </h3>
        <motion.div
          className="flex-shrink-0 ml-4"
          animate={{ 
            rotate: isExpanded ? 180 : 0,
            scale: isExpanded ? 1.1 : 1,
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? (
              <Minus className="w-5 h-5 text-primary" />
            ) : (
              <Plus className="w-5 h-5 text-muted-foreground" />
            )}
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ 
          duration: 0.4, 
          ease: "easeInOut",
          opacity: { delay: isExpanded ? 0.1 : 0 }
        }}
        className="overflow-hidden"
        style={{ backgroundColor: 'var(--muted)' }}
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: isExpanded ? 0 : -20 }}
          transition={{ duration: 0.3, delay: isExpanded ? 0.1 : 0 }}
          className="px-6 pb-6"
        >
          <div className="pt-4 border-t border-border/30">
            {/* Job Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4"
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                transition={{ duration: 0.2 }}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                {job.department}
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-4 h-4 mr-2" />
                {job.type}
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                transition={{ duration: 0.2 }}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                {job.experience}
              </motion.div>
            </motion.div>

            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 10
              }}
              transition={{ duration: 0.3, delay: isExpanded ? 0.25 : 0 }}
              className="mb-6"
            >
              <h4 className="font-semibold text-foreground mb-3">Job Description</h4>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 10
              }}
              transition={{ duration: 0.3, delay: isExpanded ? 0.3 : 0 }}
            >
              <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((requirement, reqIndex) => (
                  <motion.li 
                    key={reqIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: isExpanded ? 1 : 0,
                      x: isExpanded ? 0 : -10
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: isExpanded ? 0.35 + (reqIndex * 0.05) : 0 
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-muted-foreground text-sm leading-relaxed">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function CareerSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showResumeError, setShowResumeError] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<JobApplicationData>();

  const jobOpenings = [
    {
      title: "Primary School Teacher",
      department: "Academics",
      location: "Pranav Global School Campus",
      type: "Full-time",
      experience: "2+ years",
      description: "We are looking for a passionate and dedicated primary school teacher to join our academic team. The ideal candidate should have experience in teaching young children and creating engaging learning environments.",
      requirements: [
        "Bachelor's degree in Education or related field",
        "Minimum 2 years of teaching experience",
        "Strong communication and interpersonal skills",
        "Passion for working with children"
      ]
    },
    {
      title: "Science Laboratory Assistant",
      department: "Academics",
      location: "Pranav Global School Campus",
      type: "Full-time",
      experience: "1+ years",
      description: "Join our science department as a laboratory assistant to help maintain and manage our state-of-the-art science facilities and support teachers in conducting experiments.",
      requirements: [
        "Bachelor's degree in Science",
        "Knowledge of laboratory safety procedures",
        "Experience with scientific equipment",
        "Attention to detail and organization skills"
      ]
    },
    {
      title: "Sports Coordinator",
      department: "Physical Education",
      location: "Pranav Global School Campus",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead our sports and physical education programs, organize inter-school competitions, and promote physical fitness among our students.",
      requirements: [
        "Bachelor's degree in Physical Education or Sports Science",
        "Coaching certification preferred",
        "Experience in organizing sports events",
        "Leadership and motivational skills"
      ]
    },
    {
      title: "Administrative Assistant",
      department: "Administration",
      location: "Pranav Global School Campus",
      type: "Full-time",
      experience: "1+ years",
      description: "Support the administrative operations of our school including student records, communication with parents, and general office duties.",
      requirements: [
        "Bachelor's degree preferred",
        "Proficiency in MS Office Suite",
        "Strong organizational skills",
        "Excellent communication abilities"
      ]
    }
  ];

  const onSubmit = async (data: JobApplicationData) => {
    // Ensure resume is uploaded if required
    if (!resumeFile) {
      setShowResumeError(true);
      toast.error('Please upload your resume');
      return;
    }
    
    setShowResumeError(false);
    setIsSubmitting(true);
    
    try {
      let resumeUrl: string | undefined;

      // Upload resume to Firebase Storage
      try {
        resumeUrl = await uploadResume(resumeFile, data.fullName);
      } catch (uploadError) {
        console.error('Error uploading resume:', uploadError);
        toast.error('Failed to upload resume. Please try again.');
        setIsSubmitting(false);
        return;
      }

      if (!resumeUrl) {
        toast.error('Resume upload failed. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Save to Firebase Firestore
      const firebaseData: FirebaseJobApplicationData = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        experience: data.experience,
        coverLetter: data.coverLetter || '',
        resumeFileName: resumeFile.name,
        resumeUrl: resumeUrl
      };
      
      await saveJobApplicationData(firebaseData);
      setIsSubmitted(true);
      toast.success('Application submitted successfully! We will review your application and contact you soon.');
      reset();
      setResumeFile(null);
    } catch (error) {
      console.error('Error submitting job application:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <PageHeader
          title="Career Opportunities"
          // subtitle="Join our team of dedicated educators and help shape the future of education"
          backgroundImage={logo}
        />

        <section className="py-20 bg-background">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-xl p-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  Application Submitted Successfully!
                </h2>
                <p className="text-green-700 mb-6">
                  Thank you for your interest in joining Pranav Global School. We have received your application 
                  and will review it carefully. If your qualifications match our requirements, we will contact 
                  you for the next steps in our selection process.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit Another Application
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Career Opportunities"
        // subtitle="Join our team of dedicated educators and help shape the future of education"
          backgroundImage={logo}
            />

      {/* Current Openings */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-3/4 mx-auto"
          >
            {/* We are Hiring Badge */}
            <div className="mb-8">
              <span className="inline-block bg-muted border border-border px-4 py-2 rounded-full text-sm font-medium text-muted-foreground">
                We are Hiring
              </span>
            </div>

            {/* Mission Statement */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Be part of our mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pranav Global School encourages growth in terms of intellectual development and contribution to the knowledge pool.
                </p>
                <p>
                  Responsible positions in school are offered to capable and proactive team members within the school. This is to enable career growth for individuals.
                </p>
                <p>
                  Join our team of dedicated faculty who create a world of opportunities for all the students equally.
                </p>
              </div>
            </div>

            {/* Job Openings Accordion */}
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <JobAccordionItem
                  key={index}
                  job={job}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="page-container"  style={{
              background: "#ffe8d9",
              borderRadius: "16px",
              boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",  
              border: "1px solid rgba(255, 255, 255, 1)",
              padding:"40px 0px"
            }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apply for a Position
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to make a difference? Submit your application and join our team of dedicated professionals.
            </p>
          </motion.div>

          <div className="gg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-lg"
               style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",  
              border: "1px solid rgba(255, 255, 255, 1)",
            }}
            >
              <form onSubmit={handleSubmit(onSubmit, (errors) => {
                toast.error('Please fill in all required fields correctly');
              })} className="space-y-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center mb-2">
                      <User className="w-4 h-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      {...register('fullName', { required: 'Full name is required' })}
                      placeholder="Enter your full name"
                      className={errors.fullName ? 'border-destructive' : ''}
                    />
                    {errors.fullName && (
                      <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email format'
                        }
                      })}
                      placeholder="your@email.com"
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="+1 (555) 000-0000"
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="position" className="flex items-center mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Position Applied For *
                    </Label>
                    <select
                      id="position"
                      {...register('position', { required: 'Please select a position' })}
                      className={`w-full px-3 py-2 border rounded-md bg-input-background ${errors.position ? 'border-destructive' : 'border-border'}`}
                    >
                      <option value="">Select Position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="text-destructive text-sm mt-1">{errors.position.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="city" className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Select City (Optional)
                  </Label>
                  <Input
                    id="city"
                    list="career-cities-list"
                    {...register('city')}
                    placeholder="Type to search cities..."
                    className={errors.city ? 'border-destructive' : ''}  
                    autoComplete="off"
                  />
                  <datalist id="career-cities-list">
                    {cities.map((city, index) => (
                      <option key={`${city}-${index}`} value={city} />
                    ))}
                  </datalist>
                  {errors.city && (
                    <p className="text-destructive text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="experience" className="flex items-center mb-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Years of Experience *
                  </Label>
                  <select
                    id="experience"
                    {...register('experience', { required: 'Please select your experience level' })}
                    className={`w-full px-3 py-2 border rounded-md bg-input-background ${errors.experience ? 'border-destructive' : 'border-border'}`}
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.experience && (
                    <p className="text-destructive text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="coverLetter" className="flex items-center mb-2">
                    <FileText className="w-4 h-4 mr-2" />
                    Cover Letter / Message
                  </Label>
                  <Controller
                    name="coverLetter"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value, ...field } }) => (
                      <Textarea
                        id="coverLetter"
                        {...field}
                        value={value || ''}
                        onChange={(e) => {
                          onChange(e.target.value);
                        }}
                        placeholder="Tell us why you want to join our team and what makes you the ideal candidate for this position... (Optional)"
                        rows={6}
                        className={errors.coverLetter ? 'border-destructive' : ''}
                      />
                    )}
                  />
                  {errors.coverLetter && (
                    <p className="text-destructive text-sm mt-1">{errors.coverLetter.message}</p>
                  )}
                </div>

                {/* Resume Upload Field */}
                <div>
                  <Label htmlFor="resume" className="flex items-center mb-2">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume *
                  </Label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          // Validate PDF only
                          if (file.type !== 'application/pdf') {
                            toast.error('Only PDF files are allowed');
                            e.target.value = ''; // Clear the input
                            setResumeFile(null);
                            return;
                          }
                          // Validate file size (5MB max)
                          if (file.size > 5 * 1024 * 1024) {
                            toast.error('File size must be less than 5MB');
                            e.target.value = '';
                            setResumeFile(null);
                            return;
                          }
                          setResumeFile(file);
                          setShowResumeError(false); // Clear error when file is selected
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className={`flex items-center justify-between px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
                      resumeFile ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}>
                      <div className="flex items-center">
                        <Upload className="w-5 h-5 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">
                          {resumeFile ? resumeFile.name : 'Click to upload your resume (PDF, DOC, DOCX)'}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {resumeFile ? 'Uploaded' : 'Browse'}
                      </span>
                    </div>
                  </div>
                  {showResumeError && !resumeFile && (
                    <p className="text-destructive text-sm mt-1">Resume is required</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Accepted format: PDF only. Max size: 5MB.
                  </p>
                </div>

              <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className='btn123'
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-100 h-4 mr-2" />
                        Submit Application
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}