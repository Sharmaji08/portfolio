import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vikash Thakur",
    role: "Product Manager",
    company: "TechCorp Inc.",
    quote: "Rahul transformed our vision into reality. His attention to detail and technical expertise made our project a huge success.",
    rating: 5
  },
  {
    id: 2,
    name: "Deepak Yadav",
    role: "CEO",
    company: "StartupX",
    quote: "Working with Rahul was a game-changer for our startup. His innovative solutions and clear communication made the development process smooth.",
    rating: 5
  },
  {
    id: 3,
    name: "Harshit Sharma",
    role: "Creative Director",
    company: "DesignHub",
    
    quote: "Rahul's ability to blend beautiful design with robust functionality sets him apart. He's now our go-to developer for all web projects.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-dark-bg/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            Don't just take my word for it - here's what clients and collaborators have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                
                <div className="ml-4">
                  <h3 className="font-semibold text-light-text dark:text-dark-text">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-light-muted dark:text-dark-muted">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <blockquote className="mb-4">
                <p className="text-light-text dark:text-dark-text italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;