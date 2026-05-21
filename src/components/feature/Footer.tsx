const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about.html' },
    { name: 'Rooms & Stay', path: '/rooms.html' },
    { name: 'Packages', path: '/packages.html' },
    { name: 'Experiences', path: '/experiences.html' },
    { name: 'Contact', path: '/contact.html' },
  ];


  const experiences = [
    { name: 'Limestone Caves', path: '/experiences' },
    { name: 'Mangrove Creek', path: '/experiences' },
    { name: 'Parrot Island', path: '/experiences' },
    { name: 'Mud Volcano', path: '/experiences' },
  ];

  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://static.readdy.ai/image/5b0394d63ea67e242d80d6c69b47f9d5/c39032b98dc737737414fc31dc0182cb.jpeg"
                alt="Dew Dale Resorts"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-serif font-semibold text-xl text-white">
                  Dew Dale Resorts
                </h3>
                <p className="text-xs text-sand tracking-widest">BARATANG ISLAND</p>
              </div>
            </div>
            <p className="text-sand-light text-sm leading-relaxed mb-6">
              Experience responsible luxury amidst the untouched forests of Baratang Island. Pioneer eco-resort in Andaman & Nicobar Islands.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://dewdaleresorts.online/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://x.com/intent/tweet?url=https://dewdaleresorts.online/&text=Dew%20Dale%20Resorts%20Baratang%20Island"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  <div>         
  <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Policies</h4> 
  <ul className="space-y-3">        
  <li>
    <a href="/terms-and-conditions.html" className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap">Terms & Conditions</a>
  </li>
  <li>
    <a href="/refund-policy.html" className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap">Refund & Cancellation</a>
  </li>
  <li>
    <a href="/privacy-policy.html" className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap">Privacy Policy</a>
  </li>
  
</ul>
</div>



          {/* Experiences */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Experiences</h4>
            <ul className="space-y-3">
              {experiences.map((exp, index) => (
                <li key={index}>
                  <a
                    href="/experiences.html"
                    className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap"
                  >
                    {exp.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-gold text-lg mt-1"></i>
                <p className="text-sand-light text-sm leading-relaxed">
                  Sundergarh Village, Baratang Island, Port Blair, Andaman, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-gold text-lg"></i>
                <a
                  href="tel:+919434280628"
                  className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap"
                >
                  +91 9434280628 & +91 74793 52391
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-gold text-lg"></i>
                <a
                  href="mailto:dewdale.resorts@gmail.com"
                  className="text-sand-light text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap"
                >
                  dewdale.resorts@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sand-light text-sm">
            © 2026 Dew Dale Resorts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
