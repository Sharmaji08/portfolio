import { Check } from 'lucide-react';

interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Landing Page",
    price: "$81.95",
    description: "Perfect for small businesses looking to establish their online presence.",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimization",
      "Contact Form",
      "5 Content Sections",
      "2 Rounds of Revisions"
    ]
  },
  {
    id: 2,
    name: "Full Website",
    price: "$210.77",
    description: "Comprehensive solution for businesses requiring multiple pages and features.",
    features: [
      "Up to 5 Pages",
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimization",
      "Contact Form",
      "Blog Integration",
      "3 Rounds of Revisions",
      "Basic Analytics"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "E-Commerce",
    price: "$468.38",
    description: "Complete online store setup with product management and secure payments.",
    features: [
      "Full E-Commerce Setup",
      "Up to 100 Products",
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimization",
      "Payment Integration",
      "Inventory Management",
      "Order Tracking",
      "4 Rounds of Revisions"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-dark-bg/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            Pricing Plans
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            Choose the perfect package for your project needs. All plans include project management and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white dark:bg-dark-card rounded-xl p-8 shadow-lg 
                hover:shadow-xl transition-all duration-300 ${
                  tier.isPopular ? 'border-2 border-accent-pink dark:border-accent-cyan' : ''
                }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-pink 
                  dark:bg-accent-cyan text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
                  {tier.name}
                </h3>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-light-text dark:text-dark-text">
                    {tier.price}
                  </span>
                </div>
                <p className="text-light-muted dark:text-dark-muted">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-light-text dark:text-dark-text">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-medium transition-all duration-300
                ${tier.isPopular
                  ? 'bg-accent-pink dark:bg-accent-cyan text-white hover:shadow-lg'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-light-muted dark:text-dark-muted">
            Need a custom solution? <button className="text-primary-600 dark:text-primary-400 font-medium">
              Contact me
            </button> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;