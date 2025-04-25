import React, { useEffect } from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import BreadcrumbComponent from '../../component/Breadcums';
import { Link, useNavigate } from 'react-router-dom';

const BlogPage = () => {
    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "The Importance of Regular Dental Check-ups",
            excerpt: "Regular dental check-ups are crucial for maintaining oral health. Learn why you should visit your dentist every six months and what happens during these important appointments.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
            author: "Dr. Rahul Soni",
            date: "April 15, 2025",
            category: "Preventive Care"
        },
        {
            id: 2,
            title: "Understanding Teeth Whitening Procedures",
            excerpt: "Teeth whitening has become increasingly popular. Discover the different methods available, their effectiveness, and whether professional whitening is right for you.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-2.jpg",
            author: "Dr. Rahul Soni",
            date: "April 10, 2025",
            category: "Cosmetic Dentistry"
        },
        {
            id: 3,
            title: "How to Properly Care for Dental Implants",
            excerpt: "Dental implants require special care to ensure their longevity. Learn the best practices for maintaining your implants and keeping your smile healthy for years to come.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
            author: "Dr. Rahul Soni",
            date: "April 5, 2025",
            category: "Restorative Dentistry"
        },
        {
            id: 4,
            title: "Children's Dental Health: What Parents Should Know",
            excerpt: "Establishing good dental habits early is essential for children's oral health. Find out when to schedule their first appointment and how to make dental care fun for kids.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-2.jpg",
            author: "Dr. Rahul Soni",
            date: "March 30, 2025",
            category: "Pediatric Dentistry"
        },
        {
            id: 5,
            title: "The Link Between Oral Health and Overall Wellness",
            excerpt: "Research continues to show connections between oral health and conditions like heart disease and diabetes. Learn how taking care of your teeth can benefit your entire body.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
            author: "Dr. Rahul Soni",
            date: "March 25, 2025",
            category: "Health & Wellness"
        },
        {
            id: 6,
            title: "Advances in Pain-Free Dentistry",
            excerpt: "Modern dental techniques have revolutionized the patient experience. Discover how new technologies are making dental visits more comfortable than ever before.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
            author: "Dr. Rahul Soni",
            date: "March 20, 2025",
            category: "Technology"
        }
    ];

    const navigate = useNavigate()


    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
            .replace(/^-+|-+$/g, '');


    const handleReadMore = (title) => {
        const slug = slugify(title);
        navigate(`/blog/${slug}`);

    };


    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blogs ' },


    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <BreadcrumbComponent items={breadcrumbItems}  headText='Our Blogs' />



            {/* Blog Content */}
            <div className="container mx-auto xl:px-10 lg:px-6 px-4 py-12">

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="px-2 h-full ">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                {/* Image Container with Fixed Height */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 left-0 bg-[#E47F9F] text-white text-xs px-3 py-1 m-2 rounded-full">
                                        {post.date}
                                    </div>
                                </div>

                                {/* Content Container with Fixed Height */}
                                <div className="p-5 flex flex-col h-48">
                                    {/* Title with Fixed Height */}
                                    <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-20">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt with Fixed Height and Line Clamp */}
                                    <p className="text-sm text-gray-600 line-clamp-4 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Button - Optional */}
                                    <button
                                        onClick={() => handleReadMore(post.title)}
                                        className="mt-4 text-[#E47F9F] font-medium flex items-center text-sm hover:underline"
                                    >
                                        Read More
                                        <ArrowRight size={16} className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {/* <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 border border-[#E47F9F] rounded-md bg-[#E47F9F] text-white">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">3</button>
            <span className="px-2">...</span>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">Next</button>
          </div>
        </div> */}



            </div>

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">BrightSmile Dental</h3>
              <p className="text-gray-400">Providing exceptional dental care for the whole family since 2005.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">General Dentistry</a></li>
                <li><a href="#" className="hover:text-white">Cosmetic Procedures</a></li>
                <li><a href="#" className="hover:text-white">Emergency Care</a></li>
                <li><a href="#" className="hover:text-white">Pediatric Dentistry</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic">
                <p>123 Smile Avenue</p>
                <p>Dental District, CA 90210</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
                <p>Email: info@brightsmile.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BrightSmile Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
        </div>
    );
}


export default BlogPage