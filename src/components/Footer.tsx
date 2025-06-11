const Footer = () => {
  return (
    <footer className="bg-premium-black text-premium-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bodoni-regular">Musee</h2>
            <p className="font-comment text-soft-white text-sm mt-1">A modern art gallery experience</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-soft-white hover:text-premium-white hover:border-b hover:border-accent-gold transition-colors font-comment">Instagram</a>
            <a href="#" className="text-soft-white hover:text-premium-white hover:border-b hover:border-accent-gold transition-colors font-comment">Twitter</a>
            <a href="#" className="text-soft-white hover:text-premium-white hover:border-b hover:border-accent-gold transition-colors font-comment">Facebook</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-graphite text-center text-soft-white text-sm font-comment">
          &copy; {new Date().getFullYear()} Musee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;