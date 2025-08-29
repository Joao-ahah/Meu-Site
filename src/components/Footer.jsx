import React from 'react';
import { Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Joao-ahah' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/jo%C3%A3o-victor-b971482a6/' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/victorize' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@victorize' },
    { name: 'Email', icon: Mail, url: 'mailto:johnsantosapzone@gmail.com' }
  ];

  const services = [
    'Desenvolvimento Frontend',
    'UI/UX Design',
    'Design Gráfico',
    'Edição de Vídeo'
  ];

  return (
    <footer id="contact" className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
              Victorize
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Transformando ideias em experiências digitais excepcionais. 
              Vamos criar algo incrível juntos!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.name}
                >
                  <social.icon size={20} className="text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Email:</p>
                <a
                  href="mailto:johnsantosapzone@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  johnsantosapzone@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400">WhatsApp:</p>
                <a
                  href="https://wa.me/5575992881961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  (75) 9 9288-1961
                </a>
              </div>
              <div>
                <p className="text-gray-400">Localização:</p>
                <span className="text-gray-300">Russas, CE - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 border-t border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos discutir como posso ajudar a transformar 
            sua ideia em uma solução digital excepcional.
          </p>
          <a
            href="https://wa.me/5575992881961?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <Mail size={20} />
            Vamos Conversar
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Victorize. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;