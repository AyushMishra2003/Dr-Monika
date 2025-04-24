import React, { useEffect, useState } from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Breadcrumb Component
const BreadcrumbComponent = ({ headerText, items }) => {
    const navigate= useNavigate();
  return (
    <div className="bg-pink-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-pink-800 mb-2">{headerText}</h1>
        <div className="flex items-center space-x-2 text-pink-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {item.href ? (
                <a href={item.href} className="hover:text-pink-800 transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function BlogPage() {
    const navigate= useNavigate();

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Importance of Regular Health Check-ups",
      excerpt: "Regular health check-ups are crucial for detecting problems early. Learn why you should schedule annual check-ups and what to expect during your visit.",
      image: "/api/placeholder/600/400",
      author: "Dr. Monika",
      date: "April 15, 2025",
      category: "Preventive Care"
    },
    {
      id: 2,
      title: "Managing Seasonal Allergies Effectively",
      excerpt: "Seasonal allergies can significantly impact your quality of life. Discover methods to identify triggers and treatment options that can help you breathe easier.",
      image: "/api/placeholder/600/400",
      author: "Dr. Monika",
      date: "April 10, 2025",
      category: "Allergies"
    },
    {
      id: 3,
      title: "Understanding Common Medications for Hypertension",
      excerpt: "High blood pressure is a common concern. Learn about various medication options, their effects, and lifestyle changes that can help manage hypertension.",
      image: "/api/placeholder/600/400",
      author: "Dr. Monika",
      date: "April 5, 2025",
      category: "Cardiovascular Health"
    },
    {
      id: 4,
      title: "Children's Health: Vaccination Schedules and Benefits",
      excerpt: "Childhood vaccinations are essential for protecting your child against serious diseases. Find out about recommended schedules and why timely vaccination matters.",
      image: "/api/placeholder/600/400",
      author: "Dr. Monika",
      date: "March 30, 2025",
      category: "Pediatric Care"
    },
    {
      id: 5,
      title: "The Connection Between Diet and Overall Health",
      excerpt: "What you eat directly impacts your health. Explore the links between nutrition, chronic diseases, and how dietary changes can improve your wellbeing.",
      image: "/api/placeholder/600/400",
      author: "Dr. Monika",
      date: "March 25, 2025",
      category: "Nutrition & Wellness"
    },
    {
      id: 6,
      title: "Managing Stress for Better Health Outcomes",
      excerpt: "Chronic stress can lead to numerous health issues. Discover effective strategies to manage stress and improve both your mental and physical health.",
      image: "/api/placeholder/600/400",
      author: "Dr. Monika",
      date: "March 20, 2025",
      category: "Mental Health"
    }
  ]);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Health Blog' },
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleReadMore = (title) => {
    const slug = slugify(title);
    // In a real app, you would use navigation here
    navigate(`/blog/${slug}`);
    console.log(`Navigating to: /blog/${slug}`);
    // navigate(`/blog/${slug}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <BreadcrumbComponent headerText='Health Articles & News' items={breadcrumbItems} />

      {/* Blog Content */}
      <div className="container mx-auto lg:px-10 px-4 py-12">
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs px-3 py-1 m-2 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="py-6 px-2 md:px-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="border-t border-pink-100 pt-4 mt-2">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1 text-pink-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-1 text-pink-500" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleReadMore(post?.title)} 
                    className="flex items-center text-pink-600 font-medium hover:text-pink-800 cursor-pointer"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-pink-200 rounded-md bg-white text-pink-700 hover:bg-pink-50">Previous</button>
            <button className="px-4 py-2 border border-pink-500 rounded-md bg-pink-500 text-white">1</button>
            <button className="px-4 py-2 border border-pink-200 rounded-md bg-white text-pink-700 hover:bg-pink-50">2</button>
            <button className="px-4 py-2 border border-pink-200 rounded-md bg-white text-pink-700 hover:bg-pink-50">3</button>
            <span className="px-2">...</span>
            <button className="px-4 py-2 border border-pink-200 rounded-md bg-white text-pink-700 hover:bg-pink-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}