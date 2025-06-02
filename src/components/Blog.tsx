import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to leverage TypeScript's powerful type system to build more maintainable React applications.",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "React"
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques for creating responsive web designs.",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "CSS"
  },
  {
    id: 3,
    title: "Optimizing React Performance",
    excerpt: "Essential techniques and best practices for improving the performance of your React applications.",
    date: "March 5, 2024",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Performance"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            Insights, tutorials, and updates from my journey in web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-light-card dark:bg-dark-card rounded-xl overflow-hidden shadow-lg 
                hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-sm 
                  rounded-full font-medium">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-light-muted dark:text-dark-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">
                  {post.title}
                </h3>
                <p className="text-light-muted dark:text-dark-muted mb-4">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-primary-600 dark:text-primary-400 
                  font-medium hover:gap-3 transition-all duration-300">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-full border-2 border-accent-pink dark:border-accent-cyan
            text-light-text dark:text-dark-text font-medium hover:bg-accent-pink hover:text-white
            dark:hover:bg-accent-cyan dark:hover:text-dark-bg transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;