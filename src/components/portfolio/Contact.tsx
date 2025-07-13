
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import {Linkedin, X, Github} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_service_id,    
        import.meta.env.VITE_template_id,   
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_public_key     
      );
  
      console.log('✅ Email sent successfully!', result.text);
      // Optional: clear form, show toast, etc.
    } catch (error) {
      console.error('❌ Email send failed:', error);
      // Optional: show error message to the user
    }
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      label: "Phone",
      value: "+2347048474025",
      link: "tel:+2347048474025"
    },
    {
      label: "Email",
      value: "cmacobia@gmail.com",
      link: "mailto:cmacobia@gmail.com"
    },
    {
      label: "WhatsApp",
      value: "Chat with me",
      link: "https://wa.me/234813065354"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/macben-obiakor-787b44331",
      icon: <Linkedin className="lg:w-6 lg:h-6 w-3 h-3" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/macobia",
      icon:  <Github className="lg:w-6 lg:h-6 w-3 h-3" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/cargo.sui",
      icon:  <X className="lg:w-6 lg:h-6 w-3 h-3" />,
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };


  return (
    <section className="py-20 bg-[var(--textRev)]/98 backdrop-blur-sm transition-colors duration-300 border border-[hsl(var(--background))]/20" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-[hsl(var(--foreground))]"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-[hsl(var(--card))]/80 backdrop-blur-sm border border-[hsl(var(--border))] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[hsl(var(--foreground))]">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-[hsl(var(--foreground))] font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-[hsl(var(--border))] text-[hsl(var(--foreground))]d placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-[hsl(var(--foreground))] font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-[hsl(var(--muted))]/50 border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-[hsl(var(--foreground))] font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-[hsl(var(--muted))]/50 border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] transition-colors min-h-[120px]"
                        placeholder="Your message..."
                        required
                      />
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit"
                        className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="bg-[hsl(var(--card))]/80 backdrop-blur-sm border border-[hsl(var(--border))] shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[hsl(var(--foreground))]">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-[hsl(var(--muted-foreground))] font-medium">{info.label}:</span>
                        <a 
                          href={info.link}
                          className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="bg-[hsl(var(--card))]/80 backdrop-blur-sm border border-[hsl(var(--border))] shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[hsl(var(--foreground))]">Social Media</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-[hsl(var(--muted))]/50 hover:bg-[hsl(var(--muted))] border border-[hsl(var(--border))] px-4 py-2 rounded-lg transition-all duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                        >
                          <span className='hidden md:block'>{social.icon}</span>
                          <span className="font-medium">{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
