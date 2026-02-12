import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Arquitecta",
      rating: 5,
      text: "Madre es mi lugar favorito en la Roma. El ambiente es perfecto para trabajar en la mañana y después disfrutar de un brunch espectacular. La casona es hermosa y el café excepcional.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Ramírez",
      role: "Foodie & Blogger",
      rating: 5,
      text: "La cocina de autor de Madre es impresionante. Cada platillo es una obra de arte. El Carpaccio de Betabel y el Carajillo de la Casa son imperdibles. Definitivamente mi spot favorito.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Ana Martínez",
      role: "Diseñadora Digital",
      rating: 5,
      text: "Como nómada digital, he probado muchos cafés en la CDMX y Madre es sin duda el mejor. WiFi rápido, espacios cómodos, café delicioso y un ambiente que inspira creatividad.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Silva",
      role: "Empresario",
      rating: 5,
      text: "Celebramos varios eventos corporativos en Madre y siempre superan las expectativas. El servicio es impecable, la comida excepcional y el espacio es perfecto para reuniones importantes.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Laura Torres",
      role: "Locutora",
      rating: 5,
      text: "El brunch dominical en Madre es una tradición que no me pierdo. Los Pancakes de Plátano son adictivos y el servicio siempre es cálido. La terraza es el lugar perfecto para relajarse.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">
            Experiencias Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-display">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Miles de visitantes han vivido la experiencia Madre. Lee sus historias.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="relative h-[400px] md:h-[350px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <Card className="bg-card shadow-2xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      {/* Avatar */}
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <div className="relative">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-24 h-24 rounded-full object-cover ring-4 ring-secondary/20"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center">
                            <Quote className="w-5 h-5" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <motion.div
                          className="flex gap-1 mb-4 justify-center md:justify-start"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                            >
                              <Star className="w-5 h-5 fill-secondary text-secondary" />
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Text */}
                        <motion.p
                          className="text-lg text-foreground mb-6 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          "{testimonials[currentIndex].text}"
                        </motion.p>

                        {/* Author */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="font-display text-xl mb-1">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-secondary w-8' 
                    : 'bg-muted-foreground/30 w-2'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { value: "4.9", label: "Calificación", suffix: "/5" },
            { value: "2.5K+", label: "Reseñas", suffix: "" },
            { value: "15K+", label: "Visitantes", suffix: "" },
            { value: "98%", label: "Recomendación", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-none shadow-none bg-background/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-display text-secondary mb-2">
                    {stat.value}
                    <span className="text-xl">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
