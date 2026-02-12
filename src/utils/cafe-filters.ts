import type { Cafe } from '../data/cafes';

export const DISTRICTS = [
  'All Districts',
  'Red Square',
  'Arbat',
  'Tverskoy',
  'Kitay-gorod',
  'Zamoskvorechye',
  'Sokolniki'
];

export const PRICE_RANGES = [
  'All Prices',
  '₽₽₽₽',
  '₽₽₽',
  '₽₽',
  '₽'
];

export const SPECIALTIES = [
  'Specialty Coffee',
  'Local Pastries',
  'International Cuisine',
  'Vegetarian',
  'Vegan',
  'Breakfast',
  'Desserts',
  'Craft Beer'
];

export interface FilterOptions {
  searchTerm: string;
  selectedDistrict: string;
  selectedPriceRange: string;
  selectedSpecialties: string[];
}

export function filterCafes(cafes: Cafe[], filters: FilterOptions): Cafe[] {
  return cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         cafe.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesDistrict = filters.selectedDistrict === 'All Districts' || 
                           cafe.district === filters.selectedDistrict;
    
    const matchesPriceRange = filters.selectedPriceRange === 'All Prices' || 
                             cafe.priceRange === filters.selectedPriceRange;
    
    const matchesSpecialties = filters.selectedSpecialties.length === 0 ||
                              filters.selectedSpecialties.some(specialty => 
                                cafe.specialties.includes(specialty));
    
    return matchesSearch && matchesDistrict && matchesPriceRange && matchesSpecialties;
  });
}