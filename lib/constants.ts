/* Cryptocurrency Data */
export const cryptocurrencies = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 45230.50,
    change24h: 2.34,
    volume: '28.5B',
    marketCap: '890B',
    icon: '₿',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2340.75,
    change24h: 1.89,
    volume: '15.2B',
    marketCap: '280B',
    icon: 'Ξ',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 156.43,
    change24h: 3.45,
    volume: '2.8B',
    marketCap: '73B',
    icon: '◎',
  },
  {
    id: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    price: 612.89,
    change24h: 0.98,
    volume: '3.1B',
    marketCap: '92B',
    icon: '⬡',
  },
  {
    id: 'ripple',
    name: 'Ripple',
    symbol: 'XRP',
    price: 2.45,
    change24h: 5.12,
    volume: '2.4B',
    marketCap: '130B',
    icon: '✕',
  },
]

/* Features */
export const features = [
  {
    id: 1,
    title: 'Real-Time Tracking',
    description: 'Track cryptocurrency prices with live updates across 10,000+ assets',
    icon: '📊',
  },
  {
    id: 2,
    title: 'Smart Analytics',
    description: 'Advanced charting tools and technical analysis indicators',
    icon: '📈',
  },
  {
    id: 3,
    title: 'Portfolio Management',
    description: 'Manage and monitor your crypto investments in one place',
    icon: '💼',
  },
  {
    id: 4,
    title: 'Market Alerts',
    description: 'Get instant notifications for price movements and market events',
    icon: '🔔',
  },
  {
    id: 5,
    title: 'Secure Trading',
    description: 'Enterprise-grade security with multi-factor authentication',
    icon: '🔐',
  },
  {
    id: 6,
    title: 'Mobile Access',
    description: 'Full-featured mobile app for trading on the go',
    icon: '📱',
  },
]

/* Pricing Plans */
export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 29,
    description: 'Perfect for beginners',
    features: [
      'Real-time price tracking',
      'Basic charting tools',
      'Portfolio management',
      'Up to 10 alerts',
      'Mobile app access',
      'Email support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: 99,
    description: 'For active traders',
    features: [
      'Everything in Starter',
      'Advanced analytics',
      'Unlimited alerts',
      'API access',
      'Priority support',
      'Custom indicators',
      'Market research reports',
    ],
    cta: 'Get Pro',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: null,
    description: 'For institutions',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solutions',
      'Advanced security',
      'API rate unlimited',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

/* Testimonials */
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Professional Trader',
    feedback:
      'CryptoVision has completely transformed how I manage my portfolio. The real-time analytics are incredible.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Crypto Investor',
    feedback:
      'The mobile app is seamless and the alerts keep me informed even when I\'m away from my desk.',
    avatar: '👨‍💻',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Fund Manager',
    feedback:
      'Outstanding customer support and the most intuitive interface I\'ve used for crypto tracking.',
    avatar: '👩‍🔬',
  },
]

/* How It Works Steps */
export const howItWorks = [
  {
    id: 1,
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up in minutes with email or social authentication',
  },
  {
    id: 2,
    step: '02',
    title: 'Build Your Portfolio',
    description: 'Add your crypto holdings and track them in real-time',
  },
  {
    id: 3,
    step: '03',
    title: 'Analyze & Trade',
    description: 'Use advanced tools to analyze markets and execute trades',
  },
]

/* Team Members */
export const teamMembers = [
  {
    id: 1,
    name: 'Alex Park',
    role: 'CEO & Founder',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Lisa Chen',
    role: 'CTO',
    avatar: '👩‍💻',
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Head of Security',
    avatar: '👨‍🔐',
  },
  {
    id: 4,
    name: 'Maria Santos',
    role: 'Product Director',
    avatar: '👩‍🏫',
  },
]

/* Company Values */
export const companyValues = [
  {
    id: 1,
    title: 'Transparency',
    description: 'We believe in open communication and honest pricing',
    icon: '🔍',
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'Constantly pushing boundaries in crypto technology',
    icon: '💡',
  },
  {
    id: 3,
    title: 'Security',
    description: 'Your assets are protected with enterprise-grade encryption',
    icon: '🔒',
  },
  {
    id: 4,
    title: 'Growth',
    description: 'Empowering traders to achieve their financial goals',
    icon: '📈',
  },
]

/* FAQ Items */
export const faqItems = [
  {
    id: 1,
    question: 'Is my cryptocurrency safe on CryptoVision?',
    answer:
      'Yes, we use enterprise-grade security protocols including cold storage for digital assets and multi-factor authentication for account access.',
  },
  {
    id: 2,
    question: 'What cryptocurrencies can I track?',
    answer:
      'We support tracking of 10,000+ cryptocurrencies including all major tokens and altcoins across multiple exchanges.',
  },
  {
    id: 3,
    question: 'Can I set custom price alerts?',
    answer:
      'Absolutely! You can set unlimited price alerts on the Pro plan and customize them by percentage or absolute value changes.',
  },
  {
    id: 4,
    question: 'Do you offer API access?',
    answer:
      'Yes, API access is available on our Pro and Enterprise plans. Full documentation and support are provided.',
  },
  {
    id: 5,
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee for all subscription plans. No questions asked.',
  },
  {
    id: 6,
    question: 'Can I use CryptoVision for institutional trading?',
    answer:
      'Yes, our Enterprise plan is specifically designed for institutions with dedicated support and custom integrations.',
  },
]

/* Navigation Links */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Markets', href: '/markets' },
  { label: 'Insights', href: '/insights' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
