import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  Calendar,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Álvaro Obregón 145", "Colonia Roma Norte", "Ciudad de México, 06700"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+52 55 1234-5678", "WhatsApp: +52 55 9876-5432"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservas@madrecafe.mx", "hola@madrecafe.mx"]
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes a Domingo", "8:00 AM - 10:00 PM", "Último pedido: 9:30 PM"]
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@madre_roma" },
    { icon: Facebook, name: "Facebook", handle: "Madre Café" }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #A67C52 2px, transparent 2px)",
          backgroundSize: "50px 50px"
        }}
        animate={{ 
          backgroundPosition: ["0px 0px", "50px 50px"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">
            Visítanos
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-display">
            Ubicación & Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ubicados en el corazón de la Roma Norte, estamos a solo pasos del metro Insurgentes. 
            Te esperamos con los brazos abiertos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className={`h-full transition-all duration-300 ${
                      hoveredCard === index ? 'shadow-xl border-secondary/50' : ''
                    }`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="p-3 bg-secondary/10 rounded-xl"
                            animate={{ 
                              scale: hoveredCard === index ? 1.1 : 1,
                              backgroundColor: hoveredCard === index ? 'rgba(166, 124, 82, 0.2)' : 'rgba(166, 124, 82, 0.1)'
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <info.icon className="w-5 h-5 text-secondary" />
                          </motion.div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Calendar className="w-5 h-5 mr-2" />
                    Hacer Reservación
                  </Button>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button variant="outline" size="lg" className="w-full">
                    <Navigation className="w-5 h-5 mr-2" />
                    Cómo Llegar
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="outline" size="lg" className="w-full bg-green-500/10 border-green-500/30 hover:bg-green-500/20">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start pt-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:border-secondary hover:text-secondary transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="overflow-hidden group h-full">
              <CardContent className="p-0 h-full">
                <motion.div 
                  className="bg-gradient-to-br from-muted to-muted/50 h-full min-h-[500px] flex items-center justify-center relative cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="text-center relative z-10 p-8">
                    <motion.div
                      animate={{ 
                        y: [0, -12, 0]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <MapPin className="w-20 h-20 text-secondary mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl mb-3 font-display">Mapa Interactivo</h3>
                    <p className="text-muted-foreground mb-6 px-4 leading-relaxed">
                      Haz clic para ver nuestra ubicación en Google Maps y obtener direcciones
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="bg-secondary hover:bg-secondary/90 shadow-lg">
                        <Navigation className="w-4 h-4 mr-2" />
                        Abrir en Maps
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* Address overlay */}
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold font-display mb-1">Madre Café</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Av. Álvaro Obregón 145, Roma Norte, Ciudad de México 06700
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Metro & Transportation Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="mt-16 overflow-hidden border-2">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl mb-8 font-display">Transporte Público</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "Metro", value: "Insurgentes (Línea 1) - 5 min caminando", color: "bg-pink-500" },
                    { label: "Metrobús", value: "Álvaro Obregón (Línea 1) - 2 min", color: "bg-red-500" },
                    { label: "Estacionamiento", value: "Valet parking disponible", color: "bg-secondary" }
                  ].map((transport, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`w-3 h-3 ${transport.color} rounded-full mx-auto mb-3`}></div>
                      <Badge variant="secondary" className="mb-3 px-4 py-1.5">{transport.label}</Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">{transport.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
