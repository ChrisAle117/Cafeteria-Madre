import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://mxc.com.mx/wp-content/uploads/2019/07/1-1.jpg",
      category: "Arquitectura",
      title: "Fachada Colonial"
    },
    {
      src: "https://images.unsplash.com/photo-1612204901743-265c907cf78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwY2FmZSUyMGludGVyaW9yJTIwcGxhbnRzJTIwc3VubGlnaHR8ZW58MXx8fHwxNzcwOTM5MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Interior",
      title: "Espacio Principal"
    },
    {
      src: "https://images.unsplash.com/photo-1563311977-d285756282dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBwb3VyJTIwb3ZlciUyMGJhcmlzdGElMjBoYW5kc3xlbnwxfHx8fDE3NzA5MzkxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Café",
      title: "Preparación Artesanal"
    },
    {
      src: "https://images.unsplash.com/photo-1708509361005-3b4b792764eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicnVuY2glMjBwbGF0ZSUyMHN0eWxpbmd8ZW58MXx8fHwxNzcwOTM5MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Comida",
      title: "Brunch Signature"
    },
    {
      src: "https://images.unsplash.com/photo-1569727712418-041b2da7fa9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNhcHB1Y2Npbm8lMjBjb2ZmZWUlMjBhcnR8ZW58MXx8fHwxNzcwOTM5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Café",
      title: "Latte Art"
    },
    {
      src: "https://images.unsplash.com/photo-1651658943835-bae37931c324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXpjYWwlMjBjb2NrdGFpbCUyMG9yYW5nZSUyMGdhcm5pc2h8ZW58MXx8fHwxNzcwOTM5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Coctelería",
      title: "Mezcal Especial"
    },
    {
      src: "https://images.unsplash.com/photo-1767878032664-cd1d61f0e076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGF0aW8lMjBjYWZlJTIwcGxhbnRzJTIwY296eXxlbnwxfHx8fDE3NzA5MzkxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Terraza",
      title: "Jardín al Aire Libre"
    },
    {
      src: "https://images.unsplash.com/photo-1765959813405-da6777489346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwdGFibGVzJTIwY2hhaXJzfGVufDF8fHx8MTc3MDkzOTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Interior",
      title: "Ambiente Acogedor"
    },
    {
      src: "https://images.unsplash.com/photo-1652006836828-64039c0b3f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MDg4NDM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Café",
      title: "Granos Selectos"
    },
    {
      src: "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cmllcyUyMGNyb2lzc2FudCUyMGJha2VyeSUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwOTM5MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Repostería",
      title: "Panadería Artesanal"
    },
    {
      src: "https://images.unsplash.com/photo-1563902483976-838df753f4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhJTIwY2FmZXxlbnwxfHx8fDE3NzA5MzkxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Café",
      title: "Espresso Perfecto"
    },
    {
      src: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGZvb2QlMjBwbGF0aW5nJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzA5MzkxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Comida",
      title: "Alta Gastronomía"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">
            Explora Madre
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-display">
            Galería Visual
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un recorrido por nuestra casona, platillos y experiencias que definen a Madre
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index % 7 === 0 ? 'md:row-span-2' : ''
              } ${index % 5 === 0 ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover min-h-[200px]"
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                initial={false}
              >
                <Badge variant="secondary" className="w-fit mb-2">
                  {image.category}
                </Badge>
                <h3 className="text-white font-display text-lg">{image.title}</h3>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />

            {/* Image Container */}
            <div className="relative z-10 max-w-7xl w-full h-full flex items-center justify-center p-4">
              <motion.div
                key={selectedImage}
                className="relative max-w-5xl max-h-[90vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <ImageWithFallback
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <Badge variant="secondary" className="mb-2">
                    {images[selectedImage].category}
                  </Badge>
                  <h3 className="text-white font-display text-2xl">
                    {images[selectedImage].title}
                  </h3>
                </div>
              </motion.div>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
