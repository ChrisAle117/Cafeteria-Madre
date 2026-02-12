import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star, MapPin, Clock, Wifi, Coffee } from 'lucide-react';
import type { Cafe } from '../data/cafes';

interface CafeCardProps {
  cafe: Cafe;
}

export function CafeCard({ cafe }: CafeCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'WiFi':
        return <Wifi className="w-3 h-3" />;
      case 'Coffee':
        return <Coffee className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="p-0">
        <div className="relative">
          <ImageWithFallback
            src={cafe.image}
            alt={cafe.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {cafe.priceRange}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="mb-2">{cafe.name}</CardTitle>
        
        <div className="flex items-center gap-1 mb-2">
          {renderStars(cafe.rating)}
          <span className="ml-1 text-sm text-muted-foreground">
            {cafe.rating}
          </span>
        </div>
        
        <div className="flex items-center gap-1 mb-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{cafe.district}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{cafe.hours}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {cafe.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {cafe.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {cafe.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <p className="text-xs text-muted-foreground">
          {cafe.address}
        </p>
      </CardFooter>
    </Card>
  );
}