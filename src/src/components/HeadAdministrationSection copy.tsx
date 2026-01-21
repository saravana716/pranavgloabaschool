import React from 'react';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { Settings, FileText, Users2, TrendingUp, Shield, Clock, CheckCircle, BarChart3 } from 'lucide-react';

export const HeadAdministrationSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated Header Section */}
      <div className="relative bg-gradient-to-r from-secondary via-primary to-secondary py-24 section-full-width overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-full bg-white"
                style={{ left: `${(i + 1) * 8.33}%` }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
          
          {/* Floating Icons */}
          <motion.div
            className="absolute top-16 left-20 text-white/20"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <Settings size={40} />
          </motion.div>
          <motion.div
            className="absolute top-32 right-32 text-white/20"
            animate={{ rotate: -360, y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <FileText size={35} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-1/3 text-white/20"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity }}
          >
            <BarChart3 size={30} />
          </motion.div>
        </div>

        <div className="relative z-10 page-container">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center p-6 rounded-full bg-white/20 mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Settings size={48} className="text-white mr-2" />
              <TrendingUp size={48} className="text-white" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Head of Administration
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Streamlining Operations, Enhancing Efficiency
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Admin Profile */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 bg-white shadow-xl relative overflow-hidden">
              {/* Animated Background Shapes */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full transform -translate-x-4 translate-y-4"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-center mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-primary p-1 mb-4"
                    whileHover={{ rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
                        alt="Ms. Anjali Mehta - Head of Administration" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-xl mb-2 text-primary">Ms. Anjali Mehta</h3>
                  <p className="text-secondary mb-2">Head of Administration</p>
                  <p className="text-sm text-muted-foreground">MBA Operations | B.Com Finance</p>
                </motion.div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "12+", label: "Years Experience", color: "primary" },
                    { value: "250+", label: "Processes Managed", color: "secondary" }
                  ].map((metric, index) => (
                    <motion.div 
                      key={index}
                      className={`text-center p-4 bg-${metric.color}/5 rounded-xl border border-${metric.color}/10`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`text-2xl font-bold text-${metric.color}`}>{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Specializations */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-primary">Specializations</h4>
                  {[
                    { icon: Shield, text: "Policy Management", color: "text-blue-600" },
                    { icon: Users2, text: "HR Operations", color: "text-green-600" },
                    { icon: FileText, text: "Documentation", color: "text-purple-600" },
                    { icon: Clock, text: "Process Optimization", color: "text-orange-600" }
                  ].map((spec, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <spec.icon size={16} className={spec.color} />
                      </motion.div>
                      <span className="text-sm text-muted-foreground">{spec.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Administrative Excellence Content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            
            {/* Administrative Philosophy */}
            <Card className="p-8 bg-gradient-to-br from-white to-blue-50/30 shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="p-4 rounded-full bg-gradient-to-br from-secondary to-primary mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Settings className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-2xl text-primary">Administrative Excellence</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Effective administration is the backbone of any successful educational institution. As the Head of 
                    Administration at Pranav Global School, I ensure that every operational aspect runs seamlessly, 
                    allowing our educators to focus on what they do best - teaching and nurturing young minds.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    Through systematic processes, technology integration, and continuous improvement initiatives, we 
                    maintain the highest standards of operational efficiency. My role encompasses policy implementation, 
                    resource management, compliance monitoring, and creating an environment where excellence thrives.
                  </motion.p>
                </div>
              </motion.div>
            </Card>

            {/* Key Responsibilities */}
            <Card className="p-8 bg-white shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center mb-8">
                  <motion.div
                    className="p-3 rounded-full bg-primary/10 mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="text-primary" size={24} />
                  </motion.div>
                  <h2 className="text-2xl text-primary">Key Responsibilities</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Operations Management",
                      items: ["Daily school operations", "Facility management", "Vendor coordination", "Safety protocols"],
                      color: "from-blue-500 to-blue-600",
                      icon: "⚙️"
                    },
                    {
                      title: "Policy & Compliance",
                      items: ["Policy development", "Regulatory compliance", "Documentation systems", "Quality assurance"],
                      color: "from-green-500 to-green-600",
                      icon: "📋"
                    },
                    {
                      title: "Human Resources",
                      items: ["Staff coordination", "Performance management", "Training programs", "Employee welfare"],
                      color: "from-purple-500 to-purple-600",
                      icon: "👥"
                    },
                    {
                      title: "Financial Oversight",
                      items: ["Budget planning", "Cost optimization", "Financial reporting", "Resource allocation"],
                      color: "from-orange-500 to-orange-600",
                      icon: "💰"
                    }
                  ].map((responsibility, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                      whileHover={{ y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`text-2xl p-2 rounded-lg bg-gradient-to-r ${responsibility.color} text-white mr-3`}>
                          {responsibility.icon}
                        </div>
                        <h4 className="font-medium text-primary">{responsibility.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {responsibility.items.map((item, itemIndex) => (
                          <motion.li 
                            key={itemIndex}
                            className="text-sm text-muted-foreground flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + index * 0.1 + itemIndex * 0.05 }}
                          >
                            <CheckCircle size={12} className="text-secondary mr-2 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Card>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Card className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg mb-2">Operational Efficiency</h3>
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-sm opacity-90">Process Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">45%</div>
                        <div className="text-sm opacity-90">Cost Reduction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">System Monitoring</div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="p-4 bg-white/10 rounded-full"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <TrendingUp className="text-white" size={32} />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeadAdministrationSection;