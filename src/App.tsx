import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Button } from './components/ui/button';
import { Coffee, Heart, Star, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
          animate={{ 
            backgroundPosition: ["0px 0px", "60px 60px"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Star className="w-10 h-10 fill-current text-secondary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl mb-6 font-display"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Vive la Experiencia Madre
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-10 opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Únete a los cientos de foodies, arquitectos y creativos que han hecho de Madre 
              su lugar favorito en la Roma. Historia, sabor y comunidad en cada visita.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                  <Coffee className="w-5 h-5 mr-2" />
                  Reservar Mesa
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8">
                  <Heart className="w-5 h-5 mr-2" />
                  Regalar Experiencia
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Coffee className="w-10 h-10 text-secondary" />
                </motion.div>
                <h3 className="text-3xl font-display">Madre</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Historia, café y gastronomía en el corazón de la Roma. Una casona histórica 
                que alberga cocina de autor y experiencias únicas desde el desayuno hasta la cena.
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Star className="w-5 h-5 fill-current text-secondary" />
                  </motion.div>
                ))}
                <span className="ml-2 text-sm text-muted-foreground font-medium">4.9/5 en Google • 2,500+ reseñas</span>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="icon" className="rounded-full">
                      <social.icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 font-display text-lg">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  { label: 'Menú', href: '#menu' },
                  { label: 'Galería', href: '#gallery' },
                  { label: 'Reservaciones', href: '#contact' },
                  { label: 'Eventos Privados', href: '#contact' },
                  { label: 'Sobre Nosotros', href: '#about' }
                ].map((item, index) => (
                  <motion.li 
                    key={item.label}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={item.href} className="hover:text-foreground transition-colors">
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 font-display text-lg">Contacto</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>Av. Álvaro Obregón 145</li>
                <li>Roma Norte, CDMX 06700</li>
                <li className="pt-2">
                  <a href="tel:+525512345678" className="hover:text-foreground transition-colors">
                    +52 55 1234-5678
                  </a>
                </li>
                <li>
                  <a href="mailto:hola@madrecafe.mx" className="hover:text-foreground transition-colors">
                    hola@madrecafe.mx
                  </a>
                </li>
                <li className="pt-2 text-sm">
                  <strong className="text-foreground">Horario:</strong><br />
                  Lun - Dom: 8:00 AM - 10:00 PM
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t mt-12 pt-8 text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">&copy; 2024 Madre Café. Todos los derechos reservados. Hecho con ❤️ en la Roma.</p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-40 bg-secondary text-secondary-foreground p-4 rounded-full shadow-2xl hover:shadow-secondary/50 transition-shadow"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
