export interface Cafe {
  id: string;
  name: string;
  image: string;
  rating: number;
  address: string;
  district: string;
  hours: string;
  specialties: string[];
  features: string[];
  priceRange: string;
  description: string;
}

export const mockCafes: Cafe[] = [
  {
    id: '1',
    name: 'Café Pushkin',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    rating: 4.8,
    address: 'Tverskoy Boulevard, 26А, Moscow',
    district: 'Tverskoy',
    hours: '8:00 - 23:00',
    specialties: ['Specialty Coffee', 'Local Pastries', 'International Cuisine'],
    features: ['WiFi', 'Coffee'],
    priceRange: '₽₽₽₽',
    description: 'Elegant 18th-century styled cafe with exquisite Russian and French cuisine in the heart of Moscow.'
  },
  {
    id: '2',
    name: 'Coffee Bean & Tea Leaf',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    rating: 4.5,
    address: 'Red Square, 1, Moscow',
    district: 'Red Square',
    hours: '7:00 - 22:00',
    specialties: ['Specialty Coffee', 'Breakfast', 'Desserts'],
    features: ['WiFi', 'Coffee'],
    priceRange: '₽₽₽',
    description: 'Premium coffee experience with a view of the iconic Red Square and Kremlin walls.'
  },
  {
    id: '3',
    name: 'Danilovsky Market Café',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop',
    rating: 4.6,
    address: 'Mytnaya Street, 74, Moscow',
    district: 'Zamoskvorechye',
    hours: '9:00 - 20:00',
    specialties: ['Local Pastries', 'Vegetarian', 'Vegan'],
    features: ['WiFi'],
    priceRange: '₽₽',
    description: 'Farm-to-table cafe in historic Danilovsky Market with fresh local ingredients and artisanal coffee.'
  },
  {
    id: '4',
    name: 'Arbat Coffee House',
    image: 'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=400&h=300&fit=crop',
    rating: 4.3,
    address: 'Old Arbat Street, 15, Moscow',
    district: 'Arbat',
    hours: '8:00 - 21:00',
    specialties: ['Specialty Coffee', 'Local Pastries', 'Craft Beer'],
    features: ['WiFi', 'Coffee'],
    priceRange: '₽₽₽',
    description: 'Cozy coffee house on the famous pedestrian street with live music and artistic atmosphere.'
  },
  {
    id: '5',
    name: 'Kitay-gorod Roasters',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop',
    rating: 4.7,
    address: 'Varvarka Street, 8, Moscow',
    district: 'Kitay-gorod',
    hours: '7:30 - 22:00',
    specialties: ['Specialty Coffee', 'Breakfast', 'Desserts'],
    features: ['WiFi', 'Coffee'],
    priceRange: '₽₽₽',
    description: 'Artisanal coffee roasters in the historic Kitay-gorod district with freshly roasted beans daily.'
  },
  {
    id: '6',
    name: 'Sokolniki Park Café',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    rating: 4.2,
    address: 'Sokolnichesky Val, 1, Moscow',
    district: 'Sokolniki',
    hours: '8:00 - 20:00',
    specialties: ['Vegetarian', 'Vegan', 'Local Pastries'],
    features: ['WiFi'],
    priceRange: '₽₽',
    description: 'Nature-surrounded cafe in beautiful Sokolniki Park with organic food and peaceful atmosphere.'
  }
];