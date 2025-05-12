import React, { useEffect } from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import BreadcrumbComponent from '../../component/Breadcums';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
    // Sample blog data
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
            category: "Gynaecology and Obstetrics"
        },
        {
            id: 5,
            title: "Understanding Postpartum Care: What You Need to Know",
            excerpt: "After childbirth, a mother’s body goes through many changes. Learn about postpartum care, recovery, and how to address the challenges new mothers face after delivery.",
            image: "https://img.freepik.com/free-photo/woman-using-nursing-pillow-home-newborn-baby_52683-110702.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
            author: "Dr. Monika Pandey",
            date: "March 25, 2025",
            category: "Gynaecology and Obstetrics"
        },
        {
            id: 6,
            title: "The Importance of Regular Gynecological Check-ups",
            excerpt: "Routine gynecological check-ups are essential for women's health. Discover why regular visits to your gynecologist can help prevent serious conditions and ensure your well-being.",
            image: "https://img.freepik.com/free-photo/front-view-doctor-holding-anatomic-model_23-2149351652.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
            author: "Dr. Monika Pandey",
            date: "March 20, 2025",
            category: "Gynaecology and Obstetrics"
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
            <Helmet>
        <title>Health & Wellness Blog | Dr. Monika Pandey</title>
        <meta
          name="description"
          content="Stay informed with expert tips and guidance on mental health, women's healthcare, pregnancy, and wellness from Dr. Monika Pandey. Read latest blogs now."
        />
        <meta
          name="keywords"
          content="health blog, mental health blog, Gynaecology tips, pregnancy advice, women health articles, Dr Monika Pandey, wellness blog, medical tips"
        />
        <meta name="author" content="Dr. Monika Pandey" />
        <link rel="canonical" href="https://yourdomain.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Blog - Health & Wellness by Dr. Monika Pandey" />
        <meta
          property="og:description"
          content="Read expert blogs by Dr. Monika Pandey on mental health, women’s healthcare, Gynaecology, and wellbeing. Stay updated and informed."
        />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/images/blog-cover.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Blog | Medical & Health Insights by Dr. Monika Pandey" />
        <meta
          name="twitter:description"
          content="Discover informative articles on women's health, psychiatry, and wellness by Dr. Monika Pandey. Follow our blog for expert insights."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/blog-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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