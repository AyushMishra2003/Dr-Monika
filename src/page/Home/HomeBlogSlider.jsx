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
            id: 1,
            title: "The Importance of Mental Health Awareness",
            excerpt: "Mental health awareness is crucial for recognizing the signs of mental health issues. Learn why staying informed about mental health can help individuals get the support they need.",
            image: "https://tse3.mm.bing.net/th?id=OIF.cuWRIGUMWjAKVs%2fn5LGoRg&pid=Api&P=0&h=180",
            author: "Dr. Monika Pandey",
            date: "April 15, 2025",
            category: "Psychiatric"
        },
        {
            id: 2,
            title: "Understanding Anxiety and Its Treatment",
            excerpt: "Anxiety is one of the most common mental health conditions. Explore the various treatment options available and how therapy and medication can help manage symptoms effectively.",
            image: "https://tse4.mm.bing.net/th?id=OIP.GEtBBgroXmRfcJs4AppvmwHaD2&pid=Api&P=0&h=180",
            author: "Dr. Monika Pandey",
            date: "April 10, 2025",
            category: "Psychiatric"
        },
        {
            id: 3,
            title: "How to Cope with Depression: A Guide",
            excerpt: "Depression affects millions worldwide. Learn how to identify the symptoms and the importance of seeking professional help to manage this condition and regain a sense of well-being.",
            image: "https://img.freepik.com/free-photo/full-shot-depressed-woman-bed_23-2149071882.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
            author: "Dr. Monika Pandey",
            date: "April 5, 2025",
            category: "Psychiatric"
        },
        {
            id: 4,
            title: "Pregnancy Health: Essential Tips for Expecting Mothers",
            excerpt: "Pregnancy requires special care to ensure both the mother's and the baby's health. Learn about proper nutrition, prenatal care, and the changes to expect during pregnancy.",
            image: "https://img.freepik.com/free-photo/portrait-happy-pregnant-woman-touching-her-belly_171337-7024.jpg?t=st=1745824321~exp=1745827921~hmac=1c1517eb89f913d9ff146cea1a8f8a7ef233a8dbb52ececaf4f92898f024560f&w=1380",
            author: "Dr. Monika Pandey",
            date: "March 30, 2025",
            category: "Gynecology and Obstetrics"
        },
        {
            id: 5,
            title: "Understanding Postpartum Care: What You Need to Know",
            excerpt: "After childbirth, a mother’s body goes through many changes. Learn about postpartum care, recovery, and how to address the challenges new mothers face after delivery.",
            image: "https://img.freepik.com/free-photo/woman-using-nursing-pillow-home-newborn-baby_52683-110702.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
            author: "Dr. Monika Pandey",
            date: "March 25, 2025",
            category: "Gynecology and Obstetrics"
        },
        {
            id: 6,
            title: "The Importance of Regular Gynecological Check-ups",
            excerpt: "Routine gynecological check-ups are essential for women's health. Discover why regular visits to your gynecologist can help prevent serious conditions and ensure your well-being.",
            image: "https://img.freepik.com/free-photo/front-view-doctor-holding-anatomic-model_23-2149351652.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
            author: "Dr. Monika Pandey",
            date: "March 20, 2025",
            category: "Gynecology and Obstetrics"
        }
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
        <section className='bg-gray-100 '>
            <div className="px-2 lg:px-2 py-8 sm:py-12 md:py-14 lg:py-10 bg-gray-100 container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Latest Blog Posts</h2>
                <div className="slick-equal-height">
                    <Slider {...settings}>
                        {blogPosts.map(post => (
                            <div key={post.id} className="px-2">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border flex flex-col">
                                    {/* Image */}
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

                                    {/* Content */}
                                    <div className="p-4 flex flex-col flex-1">
                                        {/* Title with ellipsis */}
                                        <h2 className="text-[1rem] font-bold text-gray-800 mb-2 line-clamp-2">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt with ellipsis */}
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-4 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* Read More aligned to bottom */}
                                        <button
                                            onClick={() => handleReadMore(post.title)}
                                            className="mt-auto text-[#E47F9F] font-medium flex items-center text-sm hover:underline"
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