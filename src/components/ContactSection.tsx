import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Train,
    Bus,
    Bike,
    Calendar as CalendarIcon,
    MessageCircle,
    Navigation,
    ChevronRight,
    Info,
    Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from './ui/utils';

export function ContactSection() {
    const [date, setDate] = useState<Date>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const transportInfo = [
        {
            icon: Train,
            title: "Metro",
            description: "Estación Insurgentes (Línea 1) a 10 min caminando.",
            color: "text-orange-500"
        },
        {
            icon: Bus,
            title: "Metrobús",
            description: "Estación Álvaro Obregón (Línea 1) a 5 min caminando.",
            color: "text-red-500"
        },
        {
            icon: Bike,
            title: "Ecobici",
            description: "Estación 120 ubicada justo en la esquina de Orizaba.",
            color: "text-green-500"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="outline" className="mb-4">
                        Visítanos & Reserva
                    </Badge>
                    <h2 className="text-4xl md:text-5xl mb-6 font-display">
                        Encuéntranos en la Roma
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Te esperamos en nuestra histórica casona para vivir una experiencia gastronómica inigualable.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info & Form */}
                    <div className="space-y-8">
                        <Card className="border-2 shadow-sm">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl">Reserva tu Mesa</CardTitle>
                                <CardDescription>Selecciona fecha y hora para asegurar tu lugar.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nombre Completo</Label>
                                            <Input id="name" placeholder="Tu nombre" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="guests">Número de Personas</Label>
                                            <Input id="guests" type="number" min="1" max="10" placeholder="2" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Fecha de Reservación</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 bg-white" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                        disabled={(date: Date) => date < new Date()}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="time">Hora</Label>
                                            <Input id="time" type="time" required />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg" disabled={isSubmitted}>
                                        {isSubmitted ? "¡Reservación Enviada!" : "Hacer Reservación"}
                                    </Button>

                                    {isSubmitted && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center text-green-600 font-medium text-sm"
                                        >
                                            Te enviaremos una confirmación vía correo electrónico en breve.
                                        </motion.p>
                                    )}
                                </form>
                            </CardContent>
                        </Card>

                        {/* Transport Section */}
                        <div className="space-y-4">
                            <h3 className="font-display text-xl flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-secondary" />
                                Cómo Llegar
                            </h3>
                            <div className="grid gap-3">
                                {transportInfo.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className={cn("p-2 rounded-lg bg-background shadow-sm", item.color)}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Contact Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Button variant="outline" className="flex-1 min-w-[150px] bg-green-500/5 border-green-500/20 hover:bg-green-500/10 text-green-700" asChild>
                                <a href="https://wa.me/525598765432" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    WhatsApp
                                </a>
                            </Button>
                            <Button variant="outline" className="flex-1 min-w-[150px]" asChild>
                                <a href="tel:+525512345678">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Llamar ahora
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Map & Details */}
                    <div className="space-y-6 h-full flex flex-col">
                        <Card className="overflow-hidden border-2 flex-grow h-[500px] min-h-[500px]">
                            <div className="relative h-full bg-muted w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.885827725964!2d-99.1601666!3d19.4173889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3999e4693b%3A0x86749170562e847b!2sOrizaba%20127%2C%20Roma%20Nte.%2C%20Cuauht%20%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                                ></iframe>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <motion.div
                                        className="bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-border"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="p-3 bg-secondary/20 rounded-full text-secondary">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-display text-xl mb-1">Ubicación</h4>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    Calle Orizaba 127, Roma Norte<br />
                                                    Cuauhtémoc, 06700 CDMX
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-secondary" />
                                                <span className="text-xs font-medium">8:00 - 22:00</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-secondary" />
                                                <span className="text-xs font-medium">4.9 en Google</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Card>

                        <div className="flex gap-4">
                            <Card className="flex-1 bg-secondary/5 border-secondary/20 border-dashed">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <div className="p-2 bg-secondary/20 rounded-full text-secondary">
                                        <Info className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Contamos con valet parking y área de mascotas.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
