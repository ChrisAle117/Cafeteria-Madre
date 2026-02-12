import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Coffee, Home, Award, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

export function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const highlights = [
    {
      icon: Coffee,
      title: "Café Artesanal",
      description: "Granos selectos tostados para cada taza perfecta"
    },
    {
      icon: Home,
      title: "Casona Histórica",
      description: "Arquitectura auténtica de la Colonia Roma"
    },
    {
      icon: Award,
      title: "Cocina de Autor",
      description: "Platillos contemporáneos con raíces tradicionales"
    },
    {
      icon: Heart,
      title: "Hecho con Pasión",
      description: "Cada detalle pensado para tu experiencia"
    }
  ];

  const images = [
    { 
      src: "https://images.unsplash.com/photo-1612204901743-265c907cf78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwY2FmZSUyMGludGVyaW9yJTIwcGxhbnRzJTIwc3VubGlnaHR8ZW58MXx8fHwxNzcwOTM5MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Interior elegante con luz natural"
    },
    { 
      src: "https://images.unsplash.com/photo-1563311977-d285756282dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBwb3VyJTIwb3ZlciUyMGJhcmlzdGElMjBoYW5kc3xlbnwxfHx8fDE3NzA5MzkxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Preparación artesanal de café"
    },
    { 
      src: "https://images.unsplash.com/photo-1708509361005-3b4b792764eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicnVuY2glMjBwbGF0ZSUyMHN0eWxpbmd8ZW58MXx8fHwxNzcwOTM5MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brunch signature con aguacate"
    },
    { 
      src: "https://images.unsplash.com/photo-1765959813405-da6777489346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwdGFibGVzJTIwY2hhaXJzfGVufDF8fHx8MTc3MDkzOTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Ambiente acogedor vintage"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4">
                Sofisticación Atemporal
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl mb-6 font-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Donde la Historia se Encuentra con el Sabor
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ubicados en una hermosa casona de la Colonia Roma, Madre es un espacio donde 
              convergen la arquitectura histórica y la gastronomía contemporánea. Cada rincón 
              de nuestro espacio cuenta una historia, mientras nuestra cocina escribe nuevas 
              narrativas culinarias.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Desde nuestro brunch dominical hasta la coctelería vespertina, Madre es el 
              refugio perfecto para foodies, nómadas digitales y amantes de experiencias 
              únicas. Ven a descubrir por qué somos el corazón gastronómico de la Roma.
            </motion.p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card className={`border-none shadow-sm bg-muted/30 transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-secondary/10 shadow-lg' : ''
                  }`}>
                    <CardContent className="p-5">
                      <motion.div
                        animate={{ 
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <highlight.icon className="w-8 h-8 text-secondary mb-3" />
                      </motion.div>
                      <h4 className="mb-2 font-display">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {[0, 1].map((idx) => (
                  <motion.div
                    key={idx}
                    className="relative overflow-hidden rounded-xl group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <ImageWithFallback
                      src={images[idx].src}
                      alt={images[idx].alt}
                      className={`w-full ${idx === 0 ? 'h-64' : 'h-48'} object-cover rounded-xl`}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      initial={{ opacity: 0 }}
                    >
                      <span className="text-white font-display text-sm">{images[idx].alt}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4 mt-8">
                {[2, 3].map((idx) => (
                  <motion.div
                    key={idx}
                    className="relative overflow-hidden rounded-xl group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (idx - 2) * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <ImageWithFallback
                      src={images[idx].src}
                      alt={images[idx].alt}
                      className={`w-full ${idx === 2 ? 'h-48' : 'h-64'} object-cover rounded-xl`}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      initial={{ opacity: 0 }}
                    >
                      <span className="text-white font-display text-sm">{images[idx].alt}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
