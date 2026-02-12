import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Clock, Star, Coffee, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://mxc.com.mx/wp-content/uploads/2019/07/1-1.jpg"
            alt="Madre Café Casona Histórica"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-md hover:bg-white/30 transition-all px-4 py-2">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Casona Histórica • Cocina de Autor
            <Sparkles className="w-4 h-4 ml-2" />
          </Badge>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl mb-6 text-white font-display tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Madre
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto font-body leading-relaxed">
            Historia, Café y Gastronomía en el corazón de la Roma.
            Una experiencia donde lo antiguo se encuentra con lo moderno.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            className="flex items-center gap-2 text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <MapPin className="w-5 h-5" />
            <span>Colonia Roma, CDMX</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Clock className="w-5 h-5" />
            <span>8:00 - 22:00 todos los días</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl shadow-secondary/50 px-8"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Reservar Mesa
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm px-8"
            >
              Ver Menú
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer hover:text-white transition-colors z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Desliza para explorar</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
