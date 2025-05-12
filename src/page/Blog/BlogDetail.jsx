import { useState, useEffect } from 'react';
import BreadcrumbComponent from '../../component/Breadcums';
import { MessageCircleQuestion } from 'lucide-react';
import { href, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogDetails = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { detail } = useParams()

  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Mental Health Awareness",
      excerpt: "Mental health awareness is crucial for recognizing the signs of mental health issues. Learn why staying informed about mental health can help individuals get the support they need.",
      image: "https://tse3.mm.bing.net/th?id=OIF.cuWRIGUMWjAKVs%2fn5LGoRg&pid=Api&P=0&h=180",
      author: "Dr. Anjali Sharma",
      date: "April 15, 2025",
      category: "Psychiatric",
      content: `
          Mental health awareness plays a critical role in recognizing and addressing mental health issues early on. As we become more informed, we are better equipped to identify signs of conditions like depression, anxiety, and other disorders that can significantly affect a person’s well-being.

          It's important to understand that mental health is just as important as physical health. Many people struggle in silence, unaware of the resources available to them. By raising awareness, we can reduce the stigma surrounding mental health and create an environment where people feel comfortable seeking help.

          Educating ourselves about mental health issues can lead to earlier intervention and treatment, which can drastically improve outcomes. Whether it's through therapy, support groups, or medication, there are many paths to recovery. Let's work together to ensure everyone has access to the support they need.
        `,
      url: "the-importance-of-mental-health-awareness"
    },
    {
      id: 2,
      title: "Understanding Anxiety and Its Treatment",
      excerpt: "Anxiety is one of the most common mental health conditions. Explore the various treatment options available and how therapy and medication can help manage symptoms effectively.",
      image: "https://tse4.mm.bing.net/th?id=OIP.GEtBBgroXmRfcJs4AppvmwHaD2&pid=Api&P=0&h=180",
      author: "Dr. Anjali Sharma",
      date: "April 10, 2025",
      category: "Psychiatric",
      content: `
          Anxiety is a common but often misunderstood condition. It can manifest as excessive worry, restlessness, and even physical symptoms like a rapid heartbeat. While it's normal to feel anxious in stressful situations, chronic anxiety can interfere with daily life.

          Treatment options for anxiety are varied, ranging from therapy to medication. Cognitive-behavioral therapy (CBT) is one of the most effective forms of therapy for managing anxiety. CBT helps individuals identify and challenge negative thought patterns, which can alleviate anxiety symptoms.

          Medications, including anti-anxiety medications and antidepressants, can also be prescribed to manage more severe cases of anxiety. It’s important to consult with a healthcare professional to determine the best treatment plan tailored to an individual's needs.

          Early intervention is key to managing anxiety effectively. If you or someone you know is struggling with anxiety, don't hesitate to seek help.
        `,
      url: "understanding-anxiety-and-its-treatment"
    },
    {
      id: 3,
      title: "How to Cope with Depression: A Guide",
      excerpt: "Depression affects millions worldwide. Learn how to identify the symptoms and the importance of seeking professional help to manage this condition and regain a sense of well-being.",
      image: "https://img.freepik.com/free-photo/full-shot-depressed-woman-bed_23-2149071882.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
      author: "Dr. Anjali Sharma",
      date: "April 5, 2025",
      category: "Psychiatric",
      content: `
          Depression is a serious mental health condition that affects millions of people worldwide. It can cause persistent feelings of sadness, hopelessness, and a lack of interest in activities once enjoyed.

          Identifying the symptoms of depression early is crucial for getting the right treatment. Common symptoms include persistent low mood, difficulty concentrating, fatigue, and changes in appetite or sleep patterns.

          Fortunately, depression is treatable. Therapy, such as cognitive-behavioral therapy (CBT), can help individuals change negative thinking patterns. In some cases, medication such as antidepressants may be recommended to help balance brain chemicals.

          It’s important to remember that seeking help for depression is a sign of strength, not weakness. With the right treatment, many people with depression can recover and lead fulfilling lives.
        `,
      url: "how-to-cope-with-depression-a-guide"
    },
    {
      id: 4,
      title: "Pregnancy Health: Essential Tips for Expecting Mothers",
      excerpt: "Pregnancy requires special care to ensure both the mother's and the baby's health. Learn about proper nutrition, prenatal care, and the changes to expect during pregnancy.",
      image: "https://img.freepik.com/free-photo/portrait-happy-pregnant-woman-touching-her-belly_171337-7024.jpg?t=st=1745824321~exp=1745827921~hmac=1c1517eb89f913d9ff146cea1a8f8a7ef233a8dbb52ececaf4f92898f024560f&w=1380",
      author: "Dr. Priya Verma",
      date: "March 30, 2025",
      category: "Gynaecology and Obstetrics",
      content: `
          Pregnancy is an exciting yet challenging time, requiring special attention to both the mother's and the baby’s health. Proper nutrition is essential during this period. A balanced diet rich in vitamins, minerals, and protein supports the development of the baby and helps maintain the mother's energy levels.

          Prenatal care is vital, with regular check-ups to monitor the progress of the pregnancy. These visits allow healthcare professionals to track the baby's growth, detect any potential issues early, and provide guidance on managing common pregnancy symptoms.

          Expectant mothers should also be aware of physical changes and take steps to prepare for labor and delivery. Staying active, managing stress, and practicing relaxation techniques can all contribute to a healthy pregnancy.
        `,
      url: "pregnancy-health-essential-tips-for-expecting-mothers"
    },
    {
      id: 5,
      title: "Understanding Postpartum Care: What You Need to Know",
      excerpt: "After childbirth, a mother’s body goes through many changes. Learn about postpartum care, recovery, and how to address the challenges new mothers face after delivery.",
      image: "https://img.freepik.com/free-photo/woman-using-nursing-pillow-home-newborn-baby_52683-110702.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
      author: "Dr. Priya Verma",
      date: "March 25, 2025",
      category: "Gynaecology and Obstetrics",
      content: `
          The postpartum period is a time of significant physical and emotional changes. After childbirth, new mothers may experience a range of physical symptoms such as vaginal bleeding, uterine contractions, and changes in breast tissue as they begin breastfeeding.

          Postpartum care focuses on helping mothers recover from delivery and adapt to the challenges of caring for a newborn. It’s essential to attend follow-up appointments with your doctor to monitor recovery and address any concerns, such as postpartum depression or difficulties with breastfeeding.

          Mental health support is just as important as physical recovery. Many new mothers experience emotional ups and downs, and seeking support from family, friends, or a counselor can help ease the transition.
        `,
      url: "understanding-postpartum-care-what-you-need-to-know"
    },
    {
      id: 6,
      title: "The Importance of Regular Gynecological Check-ups",
      excerpt: "Routine gynecological check-ups are essential for women's health. Discover why regular visits to your gynecologist can help prevent serious conditions and maintain your well-being.",
      image: "https://img.freepik.com/free-photo/front-view-doctor-holding-anatomic-model_23-2149351652.jpg?ga=GA1.1.477998870.1745404788&semt=ais_hybrid&w=740",
      author: "Dr. Priya Verma",
      date: "March 20, 2025",
      category: "Gynaecology and Obstetrics",
      content: `
          Regular gynecological check-ups are crucial for maintaining women's health and preventing serious conditions such as cervical cancer, ovarian cancer, and sexually transmitted infections (STIs). These check-ups allow your gynecologist to monitor your reproductive health and catch any potential issues early.

          The American College of Obstetricians and Gynecologists (ACOG) recommends women begin seeing a gynecologist in their teenage years and continue routine visits throughout adulthood. Regular screenings, such as Pap smears and mammograms, can detect abnormal changes that may require further investigation or treatment.

          By maintaining regular check-ups, women can take proactive steps to ensure their overall health and well-being.
        `,
      url: "the-importance-of-regular-gynecological-check-ups"
    }
  ];







  useEffect(() => {
    const post = blogPosts.find(post => post.url === detail);
    if (!post) {
      navigate("/404");
    } else {
      setCurrentPost(post);
      const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id);
      setRelatedPosts(related);
    }
    setIsLoading(false);
  }, [detail]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blogs' },
    { label: currentPost?.title },

  ]

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <div className="bg-gray-50 min-h-screen">


      <BreadcrumbComponent headText={currentPost?.title} items={breadcrumbItems} />
      <Helmet>
        <title>{currentPost?.title} | Blog by Dr. Monika Pandey</title>
        <meta name="description" content={currentPost?.content?.slice(0, 150)} />
        <meta name="keywords" content={`health blog, ${currentPost?.category}, Dr Monika Pandey, wellness`} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${currentPost?.url}`} />

        {/* Open Graph */}
        <meta property="og:title" content={currentPost?.title} />
        <meta property="og:description" content={currentPost?.content?.slice(0, 150)} />
        <meta property="og:image" content={currentPost?.image} />
        <meta property="og:url" content={`https://yourdomain.com/blog/${currentPost?.url}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Content */}
      <main className="container mx-auto lg:px-10 px-2 py-8 ">


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-[80rem]">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="py-4 lg:px-6  px-2">
                <div className='text-[#E47F9F] lg:text-3xl text-2xl font-extrabold mb-4'>
                  {currentPost?.title}
                </div>
                <div className="prose max-w-none">
                  {currentPost.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-justify">{paragraph.trim()}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8">
                  <div className="text-sm text-gray-600 mb-2">Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Dental Health</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{currentPost.category}</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Oral Care</span>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-[#E47F9F] font-bold text-xl mr-4">
                    {currentPost.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium">{currentPost.author}</div>
                    <div className="text-gray-600 text-sm">Senior Dental Surgeon</div>
                  </div>
                </div>
              </div>
            </div>


          </div>


          {/* Sidebar */}
          <div className="lg:w-[20rem]">



            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md lg:p-6 mb-6 cursor-pointer">
              <h3 className="font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} onClick={() => navigate(`/blog/${post?.url}`)} className="flex gap-3 group">
                    <div className="w-20 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-[#E47F9F] line-clamp-2">{post.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-[#E47F9F] rounded-lg p-6 text-white">
              <div className="flex justify-center mb-4">
                <MessageCircleQuestion size={48} />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Need help?</h2>
              <p className="text-center text-sm mb-4">
                Schedule your initial consultation today and start your journey towards a pain-free, healthier smile. Contact us now!
              </p>
              <div className="flex justify-center">
                <button className="bg-white text-[#E47F9F] rounded-full px-4 py-2 flex items-center cursor-pointer" onClick={() => navigate("/contact")}>
                  Contact Us
                  <span className="ml-2 bg-[#E47F9F] rounded-full p-1 text-white">
                    <MessageCircleQuestion size={16} />
                  </span>
                </button>
              </div>
            </div>


          </div>



        </div>


      </main>





    </div>
  )
}

export default BlogDetails