import React from 'react';
import Slider from 'react-slick';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlogSlider = () => {
    const navigate = useNavigate();

    const blogPosts = [
        {
            id: 2,
            title: "Understanding Teeth Whitening Procedures",
            excerpt: "Teeth whitening has become increasingly popular. Discover the most effective procedures and what to expect from treatments.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-2.jpg",
            author: "Dr. Rahul Soni",
            date: "April 10, 2025",
            category: "Cosmetic Dentistry"
        },
        {
            id: 3,
            title: "How to Properly Care for Dental Implants",
            excerpt: "Dental implants require special care to ensure their longevity. Learn the best practices for maintaining your implants.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
            author: "Dr. Rahul Soni",
            date: "April 5, 2025",
            category: "Restorative Dentistry"
        },
        {
            id: 4,
            title: "Children's Dental Health: What Parents Should Know",
            excerpt: "Establishing good dental habits early is essential for children's oral health. Get expert advice for your child's smile.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-2.jpg",
            author: "Dr. Rahul Soni",
            date: "March 30, 2025",
            category: "Pediatric Dentistry"
        },
        {
            id: 5,
            title: "The Link Between Oral Health and Overall Wellness",
            excerpt: "Research continues to show connections between oral health and conditions like heart disease and diabetes.",
            image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
            author: "Dr. Rahul Soni",
            date: "March 25, 2025",
            category: "Health & Wellness"
        },
        // {
        //     id: 6,
        //     title: "Advances in Pain-Free Dentistry",
        //     excerpt: "Modern dental techniques have revolutionized the patient experience. Learn how we make your visit comfortable.",
        //     image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
        //     author: "Dr. Rahul Soni",
        //     date: "March 20, 2025",
        //     category: "Technology"
        // }
    ];

    const slugify = (text) =>
        text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const handleReadMore = (title) => {
        const slug = slugify(title);
        navigate(`/blog/${slug}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className='bg-gray-100'>
            <div className="px-4 lg:px-2 py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Latest Blog Posts</h2>
                <div className="slick-equal-height">
                    <Slider {...settings}>
                        {blogPosts.map(post => (
                            <div key={post.id} className="px-2 h-full pb-8">
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
                                        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
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
                    </Slider>
                </div>
            </div>
            
            {/* Add this CSS for equal height slick slides */}
            <style jsx>{`
                .slick-equal-height .slick-track {
                    display: flex !important;
                }
                .slick-equal-height .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                }
                .slick-equal-height .slick-slide > div {
                    display: flex;
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </section>
    );
};

export default HomeBlogSlider;