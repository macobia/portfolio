
import React from 'react';
import { Github, Linkedin, X } from 'lucide-react';

const Footer :React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/macben-obiakor-787b44331",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/macobia",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Cago_Sui",
      icon: <X className="w-6 h-6" />,
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <div className="mb-8">
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "From bugs to breakthroughs — that’s the real developer journey."
            </blockquote>
            <p className="text-gray-400">- Macben Obiakor</p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <span className='hidden md:block'>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {currentYear} Macben Obiakor. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
            Designed in the dark, deployed to the world. ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;