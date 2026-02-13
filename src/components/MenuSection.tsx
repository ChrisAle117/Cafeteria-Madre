import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function MenuSection() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("desayuno");

    const menuCategories = [
        {
            id: "desayuno",
            title: "Desayuno & Brunch",
            time: "8:00 - 14:00",
            image: "https://images.unsplash.com/photo-1708509361005-3b4b792764eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicnVuY2glMjBwbGF0ZSUyMHN0eWxpbmd8ZW58MXx8fHwxNzcwOTM5MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            items: [
                { name: "Overnight Oats", price: "$185", description: "Avena reposada con leche de almendra, frutos rojos y miel de agave", popular: true },
                { name: "Molletes Madre", price: "$165", description: "Con frijoles refritos, queso gratinado y pico de gallo" },
                { name: "Pancakes de Plátano", price: "$195", description: "Esponjosos pancakes con plátano caramelizado y nueces", popular: true }
            ]
        },
        {
            id: "cafe",
            title: "Cafetería & Bebidas",
            time: "Todo el día",
            image: "https://images.unsplash.com/photo-1569727712418-041b2da7fa9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNhcHB1Y2Npbm8lMjBjb2ZmZWUlMjBhcnR8ZW58MXx8fHwxNzcwOTM5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
            items: [
                { name: "Madre Espresso Tonic", price: "$95", description: "Doble carga de espresso, agua tónica, rodaja de pomelo y romero", popular: true },
                { name: "Cappuccino de Casa", price: "$85", description: "Espresso doble con espuma de leche aterciopelada" },
                { name: "Cold Brew Nitro", price: "$110", description: "Extracción en frío con infusión de nitrógeno, suave y cremoso" }
            ]
        },
        {
            id: "comida",
            title: "Comida & Cena",
            time: "14:00 - 22:00",
            image: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGZvb2QlMjBwbGF0aW5nJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzA5MzkxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            items: [
                { name: "Carpaccio de Betabel", price: "$210", description: "Láminas de betabel rostizado con queso de cabra y nuez garapiñada", popular: true },
                { name: "Salmón al Miso", price: "$345", description: "Filete de salmón laqueado con glaseado de miso y vegetales de temporada" },
                { name: "Risotto de Hongos", price: "$285", description: "Cremoso risotto con mix de hongos, parmesano y aceite de trufa" }
            ]
        },
        {
            id: "cocteleria",
            title: "Coctelería",
            time: "16:00 - 22:00",
            image: "https://images.unsplash.com/photo-1651658943835-bae37931c324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXpjYWwlMjBjb2NrdGFpbCUyMG9yYW5nZSUyMGdhcm5pc2h8ZW58MXx8fHwxNzcwOTM5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
            items: [
                { name: "Carajillo de la Casa", price: "$160", description: "El clásico con un toque secreto de especias Madre", popular: true },
                { name: "Mezcal Sour", price: "$175", description: "Mezcal artesanal, jugo de limón, jarabe y espuma de clara de huevo" },
                { name: "Gin & Tonic Botánico", price: "$185", description: "Gin premium con tónica, hierbas frescas y cítricos" }
            ]
        }
    ];

    return (
        <section id="menu" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="outline" className="mb-4">
                        Excelencia Culinaria
                    </Badge>
                    <h2 className="text-4xl md:text-5xl mb-6 font-display">
                        Nuestro Menú
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Descubre nuestra selección de platillos contemporáneos y bebidas de especialidad,
                        preparados con ingredientes de la más alta calidad.
                    </p>
                </motion.div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2 bg-muted/30">
                        {menuCategories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground py-4 px-6 text-base font-display transition-all duration-300"
                            >
                                {category.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <AnimatePresence mode="wait">
                        {menuCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-500">
                                        <CardHeader className="p-0">
                                            <motion.div
                                                className="relative overflow-hidden h-64 md:h-96"
                                                initial={{ scale: 1.1 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <ImageWithFallback
                                                    src={category.image}
                                                    alt={category.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                                <motion.div
                                                    className="absolute top-6 right-6"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.3, type: "spring" }}
                                                >
                                                    <Badge className="bg-black/70 text-white backdrop-blur-md border-white/20 px-4 py-2">
                                                        <Clock className="w-4 h-4 mr-2" />
                                                        {category.time}
                                                    </Badge>
                                                </motion.div>
                                                <motion.div
                                                    className="absolute bottom-6 left-6"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 }}
                                                >
                                                    <h3 className="text-white text-4xl font-display">{category.title}</h3>
                                                </motion.div>
                                            </motion.div>
                                        </CardHeader>

                                        <CardContent className="p-8 md:p-12">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {category.items.map((item, itemIndex) => (
                                                    <motion.div
                                                        key={itemIndex}
                                                        className="relative border-2 border-border rounded-xl p-6 hover:border-secondary transition-all duration-300 group"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                                                        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(166, 124, 82, 0.15)" }}
                                                        onMouseEnter={() => setHoveredItem(`${category.id}-${itemIndex}`)}
                                                        onMouseLeave={() => setHoveredItem(null)}
                                                    >
                                                        {item.popular && (
                                                            <motion.div
                                                                className="absolute -top-3 -right-3"
                                                                initial={{ scale: 0, rotate: -45 }}
                                                                animate={{ scale: 1, rotate: 0 }}
                                                                transition={{ delay: 0.5 + itemIndex * 0.1, type: "spring" }}
                                                            >
                                                                <Badge className="bg-secondary text-secondary-foreground px-3 py-1">
                                                                    <Sparkles className="w-3 h-3 mr-1" />
                                                                    Popular
                                                                </Badge>
                                                            </motion.div>
                                                        )}

                                                        <div className="flex justify-between items-start mb-3">
                                                            <h4 className="font-medium font-display text-lg pr-2 group-hover:text-secondary transition-colors">{item.name}</h4>
                                                            <motion.span
                                                                className="font-semibold text-secondary text-lg flex-shrink-0"
                                                                animate={{
                                                                    scale: hoveredItem === `${category.id}-${itemIndex}` ? 1.15 : 1
                                                                }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                {item.price}
                                                            </motion.span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </AnimatePresence>
                </Tabs>

                <motion.div
                    className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 px-8"
                            asChild
                        >
                            <a href="https://madrecafe.mx/menu" target="_blank" rel="noopener noreferrer">
                                Ver Menú Completo
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8"
                            asChild
                        >
                            <a href="https://madrecafe.mx/vinos" target="_blank" rel="noopener noreferrer">
                                Carta de Vinos
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
