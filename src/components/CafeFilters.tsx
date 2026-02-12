import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DISTRICTS, PRICE_RANGES, SPECIALTIES } from '../utils/cafe-filters';

interface CafeFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDistrict: string;
  onDistrictChange: (value: string) => void;
  selectedPriceRange: string;
  onPriceRangeChange: (value: string) => void;
  selectedSpecialties: string[];
  onSpecialtyToggle: (specialty: string) => void;
  totalCount: number;
}

export function CafeFilters({
  searchTerm,
  onSearchChange,
  selectedDistrict,
  onDistrictChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedSpecialties,
  onSpecialtyToggle,
  totalCount,
}: CafeFiltersProps) {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5" />
        <h3>Filter Cafes</h3>
        <Badge variant="secondary" className="ml-auto">
          {totalCount} cafes
        </Badge>
      </div>
      
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
        <Input
          placeholder="Search cafes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={selectedDistrict} onValueChange={onDistrictChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select district" />
          </SelectTrigger>
          <SelectContent>
            {DISTRICTS.map((district) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select price range" />
          </SelectTrigger>
          <SelectContent>
            {PRICE_RANGES.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <p className="text-sm mb-2">Specialties:</p>
        <div className="flex flex-wrap gap-2">
          {SPECIALTIES.map((specialty) => (
            <Badge
              key={specialty}
              variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/10"
              onClick={() => onSpecialtyToggle(specialty)}
            >
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}