export const products = [
  {
    id: 'pixel-pro',
    name: 'Google Pixel 9 Pro',
    shortName: 'Pixel 9 Pro',
    originalPrice: 99999,
    discountedPrice: 84999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85',
    variants: [
      { id: 'pixel-128', name: '128GB', originalPrice: 99999, discountedPrice: 84999 },
      { id: 'pixel-256', name: '256GB', originalPrice: 109999, discountedPrice: 94999 },
      { id: 'pixel-512', name: '512GB', originalPrice: 124999, discountedPrice: 109999 },
    ],
    emiPlans: [
      { duration: 3, monthlyAmount: 28999, totalInterest: 998 },
      { duration: 6, monthlyAmount: 14699, totalInterest: 1820 },
      { duration: 12, monthlyAmount: 7699, totalInterest: 3390 },
    ],
  },
  {
    id: 'watch-ultra',
    name: 'Apple Watch Ultra 2',
    shortName: 'Watch Ultra 2',
    originalPrice: 89900,
    discountedPrice: 79900,
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85',
    variants: [
      { id: 'watch-gps', name: '49mm GPS', originalPrice: 89900, discountedPrice: 79900 },
      { id: 'watch-cellular', name: '49mm Cellular', originalPrice: 99900, discountedPrice: 89900 },
    ],
    emiPlans: [
      { duration: 3, monthlyAmount: 27250, totalInterest: 850 },
      { duration: 6, monthlyAmount: 13699, totalInterest: 3210 },
      { duration: 12, monthlyAmount: 7199, totalInterest: 6490 },
    ],
  },
]

export const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`
