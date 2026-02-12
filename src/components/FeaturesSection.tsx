import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Wifi, 
  Laptop, 
  Music, 
  Coffee, 
  Utensils, 
  CreditCard, 
  Users, 
  Clock,
  TreePine,
  Gift
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Wifi,
      title: "WiFi de Alta Velocidad",
      description: "Internet rápido ideal para nómadas digitales"
    },
    {
      icon: Laptop,
      title: "Espacio de Trabajo",
      description: "Mesas amplias y tomas de corriente disponibles"
    },
    {
      icon: TreePine,
      title: "Terraza & Jardín",
      description: "Espacio al aire libre en nuestra casona"
    },
    {
      icon: Coffee,
      title: "Café de Especialidad",
      description: "Granos de origen único, tostado artesanal"
    },
    {
      icon: Utensils,
      title: "Cocina de Autor",
      description: "Menú contemporáneo de desayuno a cena"
    },
    {
      icon: CreditCard,
      title: "Todos los Pagos",
      description: "Efectivo, tarjetas y pagos digitales"
    },
    {
      icon: Users,
      title: "Eventos Privados",
      description: "Espacios exclusivos para ocasiones especiales"
    },
    {
      icon: Clock,
      title: "Horario Extendido",
      description: "Abierto de 8 AM a 10 PM todos los días"
    },
    {
      icon: Music,
      title: "Música en Vivo",
      description: "Sesiones acústicas selectas cada semana"
    },
    {
      icon: Gift,
      title: "Tarjetas de Regalo",
      description: "El regalo perfecto para foodie lovers"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
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
            Experiencia Completa
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-display">
            Todo lo que Necesitas para una Experiencia Perfecta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde café de especialidad hasta eventos privados, cada detalle ha sido 
            pensado para superar tus expectativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className={`text-center h-full transition-all duration-300 ${
                  hoveredIndex === index ? 'shadow-2xl border-secondary/50 bg-card' : 'shadow-sm'
                }`}>
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit"
                      animate={{ 
                        scale: hoveredIndex === index ? 1.1 : 1,
                        backgroundColor: hoveredIndex === index ? 'rgba(166, 124, 82, 0.2)' : 'rgba(166, 124, 82, 0.1)'
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <feature.icon className={`w-7 h-7 text-secondary transition-all duration-300 ${
                        hoveredIndex === index ? 'scale-110' : ''
                      }`} />
                    </motion.div>
                    <CardTitle className="text-base font-display">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
