import { useState, useEffect } from 'react';
import BreadcrumbComponent from '../../component/Breadcums';
import { MessageCircleQuestion } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { slug } = useParams();
  

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Common Health Issues and Their Treatments",
      excerpt: "Learn about everyday health concerns and how Dr. Monika provides effective treatments for these conditions.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
      author: "Dr. Monika",
      date: "April 15, 2025",
      category: "General Health",
      content: `
        Understanding common health issues is essential for maintaining overall wellbeing. From seasonal allergies to chronic pain, knowing what treatments are available can help you make informed decisions about your health.

        Many people experience recurring health problems that affect their quality of life. These can include digestive issues, skin conditions, respiratory problems, and various types of pain. While some conditions require specialized care, many can be effectively managed with the right treatment plan.

        Dr. Monika specializes in providing comprehensive treatment options for a wide range of health concerns. Rather than focusing on just one area of medicine, she takes a holistic approach that considers how different body systems interact with each other.

        During a typical consultation, Dr. Monika conducts a thorough assessment of your symptoms and medical history. This allows her to develop a personalized treatment plan that addresses the root cause of your health issues, not just the symptoms.

        Many patients find that this integrated approach helps them achieve better health outcomes than they experienced with more specialized treatments. By addressing multiple aspects of health simultaneously, Dr. Monika helps patients achieve balanced wellness.

        Regular check-ups with Dr. Monika enable early detection and treatment of potential health issues before they become serious problems. This preventive approach is key to maintaining good health and avoiding more intensive interventions later.
      `,
      url: "understanding-common-health-issues-and-treatments"
    },
    {
      id: 2,
      title: "The Benefits of Holistic Medicine in Modern Healthcare",
      excerpt: "Discover how holistic treatment approaches can complement conventional medicine for better health outcomes.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
      author: "Dr. Monika",
      date: "April 10, 2025",
      category: "Holistic Health",
      content: `
        Holistic medicine approaches health from a whole-person perspective, considering physical, emotional, social, and spiritual wellbeing. This comprehensive approach has gained recognition for its ability to complement conventional medical treatments.

        Instead of focusing solely on specific symptoms, holistic medicine examines how different aspects of a person's life contribute to their overall health. This may include diet, exercise, stress management, sleep quality, and environmental factors.

        Dr. Monika incorporates principles of holistic medicine into her practice, combining conventional medical knowledge with complementary therapies when appropriate. This integrated approach allows her to address health concerns more comprehensively.

        Many patients find that holistic treatments help reduce their reliance on medications with potential side effects. While pharmaceuticals play an important role in treating many conditions, complementary approaches can sometimes achieve similar benefits with fewer unwanted effects.

        Research increasingly supports the effectiveness of certain holistic treatments that were once considered alternative. Mind-body practices, nutritional interventions, and lifestyle modifications have all demonstrated benefits for various health conditions.

        For those with chronic health issues, holistic approaches often improve quality of life even when a condition cannot be completely cured. These therapies can help manage symptoms, reduce stress, and improve overall functioning.

        Before pursuing any treatment approach, it's important to consult with a qualified healthcare provider like Dr. Monika. She can help determine which combination of conventional and complementary treatments will best address your specific health concerns.
      `,
      url: "benefits-of-holistic-medicine"
    },
    {
      id: 3,
      title: "Managing Chronic Health Conditions Effectively",
      excerpt: "Learn strategies for living well with chronic health conditions and how Dr. Monika's treatments can help improve your quality of life.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
      author: "Dr. Monika",
      date: "April 5, 2025",
      category: "Chronic Conditions",
      content: `
        Chronic health conditions require ongoing management to minimize symptoms and maintain quality of life. With the right treatment approach, many people with chronic conditions can lead active, fulfilling lives despite their health challenges.

        A personalized treatment plan is essential for effectively managing chronic conditions. Dr. Monika works closely with each patient to develop strategies tailored to their specific health needs, preferences, and circumstances.

        Many chronic conditions respond well to a combination of conventional and complementary treatments. Medications may address specific symptoms, while dietary changes, exercise, and stress management techniques can improve overall health and reduce flare-ups.

        Regular monitoring is crucial for chronic condition management. Dr. Monika schedules follow-up appointments to assess how treatments are working and make adjustments as needed to optimize results.

        For some conditions, patients may need to work with multiple healthcare providers. Dr. Monika collaborates with specialists when necessary to ensure comprehensive care while helping coordinate different aspects of treatment.

        Patient education is a key component of chronic disease management. Understanding your condition and treatment options empowers you to take an active role in your health care and make informed decisions about managing your condition.

        Support from family, friends, and sometimes support groups can make a significant difference for those living with chronic health issues. Dr. Monika often recommends community resources that can provide additional assistance and emotional support.
      `,
      url: "managing-chronic-health-conditions"
    },
    {
      id: 4,
      title: "Preventive Health Measures for Every Age Group",
      excerpt: "Discover essential preventive health practices for different life stages and how Dr. Monika can help you maintain optimal health.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-2.jpg",
      author: "Dr. Monika",
      date: "March 30, 2025",
      category: "Preventive Care",
      content: `
        Preventive healthcare is the foundation of lifelong wellness. By taking proactive measures at every stage of life, you can reduce your risk of developing serious health conditions and enjoy better quality of life as you age.

        For children and adolescents, preventive care includes regular health check-ups, appropriate vaccinations, and establishing healthy habits like nutritious eating and regular physical activity. These early interventions set the stage for healthy development and can prevent health problems later in life.

        Young adults should focus on maintaining healthy lifestyle choices while also addressing stress management and mental health. Regular screenings for common health issues become increasingly important during this stage of life.

        Middle-aged adults benefit from more comprehensive health screenings to detect conditions like high blood pressure, diabetes, and certain cancers early when they're most treatable. This is also a crucial time to address risk factors for heart disease and other chronic conditions.

        For older adults, preventive care emphasizes maintaining mobility, preventing falls, managing chronic conditions, and preserving cognitive function. Regular medication reviews and vaccinations appropriate for this age group are also important preventive measures.

        Dr. Monika provides personalized preventive care recommendations based on your age, health history, and specific risk factors. Her comprehensive approach helps ensure that you're receiving the appropriate preventive services for your individual needs.

        Remember that prevention is always more effective than treatment. By investing in preventive healthcare throughout your life, you can avoid many health problems and enjoy better overall wellness.
      `,
      url: "preventive-health-measures-for-every-age"
    },
    {
      id: 5,
      title: "Natural Approaches to Managing Common Ailments",
      excerpt: "Explore effective natural remedies and lifestyle changes that can help address everyday health concerns under Dr. Monika's guidance.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
      author: "Dr. Monika",
      date: "March 25, 2025",
      category: "Natural Remedies",
      content: `
        Natural approaches to health management have gained popularity as people seek gentler alternatives for addressing common ailments. When used appropriately, these methods can provide relief with fewer side effects than some conventional treatments.

        For digestive issues like occasional indigestion or bloating, dietary modifications often provide significant relief. Identifying and eliminating trigger foods, increasing fiber intake, and staying properly hydrated can resolve many digestive complaints without medication.

        Minor respiratory conditions such as seasonal allergies or the common cold may respond to natural interventions like saline nasal irrigation, honey for coughs (in adults and older children), and certain herbal preparations with anti-inflammatory properties.

        Sleep problems affect many people and can impact overall health. Natural approaches to improving sleep include establishing consistent sleep routines, creating a sleep-conducive environment, limiting caffeine and electronic device use before bedtime, and relaxation techniques.

        For mild to moderate pain, alternatives to medication may include heat or cold therapy, gentle movement, relaxation techniques, and certain supplements with anti-inflammatory properties. These approaches can be particularly helpful for managing chronic pain conditions.

        Stress management is essential for overall health, as chronic stress contributes to numerous health problems. Natural approaches include mindfulness practices, regular exercise, spending time in nature, and social connection.

        Dr. Monika can help you determine which natural approaches are most appropriate for your specific health concerns. She combines traditional medical knowledge with evidence-based natural remedies to provide comprehensive care that addresses both symptoms and underlying causes.
      `,
      url: "natural-approaches-to-common-ailments"
    },
    {
      id: 6,
      title: "Advances in Integrative Medicine for Better Outcomes",
      excerpt: "Learn how modern integrative medicine combines the best of conventional and complementary approaches for optimal health.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
      author: "Dr. Monika",
      date: "March 20, 2025",
      category: "Integrative Medicine",
      content: `
        Integrative medicine represents a significant advancement in healthcare by combining evidence-based conventional treatments with complementary therapies that address the whole person. This approach has gained recognition for its effectiveness in treating various health conditions.

        Modern research has validated many traditional healing practices that were once dismissed by conventional medicine. Techniques like acupuncture, certain herbal medicines, and mind-body practices now have substantial scientific evidence supporting their benefits for specific conditions.

        Technology has enhanced the field of integrative medicine through innovations like advanced diagnostic tools that can detect subtle imbalances in body systems. These tools allow practitioners to identify potential health issues before they develop into serious problems.

        Personalized treatment plans are a hallmark of integrative medicine. Dr. Monika conducts thorough assessments of each patient's health history, current symptoms, lifestyle factors, and preferences to develop individualized approaches that address their unique needs.

        The mind-body connection is increasingly recognized as crucial for health and healing. Integrative medicine incorporates techniques that harness this connection, such as biofeedback, guided imagery, and mindfulness-based stress reduction.

        Nutritional science has evolved significantly, with research demonstrating how dietary choices can influence inflammation, immune function, and even gene expression. Integrative medicine applies this knowledge through targeted nutritional interventions.

        For patients with complex or chronic health conditions, integrative medicine often provides options when conventional treatments alone have not been fully effective. By addressing multiple aspects of health simultaneously, this approach can help improve outcomes and quality of life.
      `,
      url: "advances-in-integrative-medicine"
    }
  ];
  useEffect(() => {
    const post = blogPosts.find(post => post.url === slug);
      // console.log("bhai mai slug hu",post)  ;
      
    if (!post) {
      navigate("/404");
    } else {
      setCurrentPost(post);
      const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id);
      setRelatedPosts(related);
    }
    setIsLoading(false);
  }, [slug]);



  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse text-pink-500 text-xl">Loading...</div>
    </div>;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blogs' },
    { label: currentPost?.title },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [detail]);

  return (
    <div className="bg-pink-50 min-h-screen">
      <BreadcrumbComponent headerText={currentPost?.title} items={breadcrumbItems} />

      {/* Content */}
      <main className="container mx-auto lg:px-10 px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="py-6 px-4 lg:px-8">
                <div className="text-pink-600 lg:text-3xl text-2xl font-bold mb-4">
                  {currentPost?.title}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span className="mr-4">{currentPost.author}</span>
                  <span className="mr-4">|</span>
                  <span className="mr-4">{currentPost.date}</span>
                  <span className="mr-4">|</span>
                  <span>{currentPost.category}</span>
                </div>
                <div className="prose max-w-none">
                  {currentPost.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph.trim()}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8">
                  <div className="text-sm text-gray-600 mb-2">Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Health</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">{currentPost.category}</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Wellness</span>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-8 p-4 bg-pink-50 rounded-lg flex items-center">
                  <div className="h-14 w-14 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-xl mr-4">
                    {currentPost.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{currentPost.author}</div>
                    <div className="text-gray-600 text-sm">Medical Practitioner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 w-full">
            {/* About Dr. Monika */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-pink-600 text-lg mb-3">About Dr. Monika</h3>
              <p className="text-gray-700 text-sm mb-4">
                Dr. Monika is a trusted healthcare provider specializing in a wide range of medical treatments. With years of experience, she offers comprehensive care for various health conditions.
              </p>
              <div className="border-t border-pink-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Experience</span>
                  <span className="text-pink-600 font-medium">15+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Specialties</span>
                  <span className="text-pink-600 font-medium">Multiple Treatments</span>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-pink-600 text-lg mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <div key={post.id} onClick={() => navigate(`/blog/${post?.url}`)} className="flex gap-3 group cursor-pointer">
                    <div className="w-20 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-pink-600 line-clamp-2">{post.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-6 text-white">
              <div className="flex justify-center mb-4">
                <MessageCircleQuestion size={48} />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Need help?</h2>
              <p className="text-center text-sm mb-4">
                Schedule your consultation today and start your journey towards better health. Dr. Monika offers treatments for various conditions!
              </p>
              <div className="flex justify-center">
                <button className="bg-white text-pink-600 hover:bg-pink-100 rounded-full px-6 py-2 font-medium flex items-center shadow-md transition duration-300 cursor-pointer" onClick={() => navigate("/contact")}>
                  Contact Us
                  <span className="ml-2 bg-pink-600 rounded-full p-1 text-white">
                    <MessageCircleQuestion size={16} />
                  </span>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="font-semibold text-pink-600 text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 hover:text-pink-600 cursor-pointer">General Health</span>
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">6</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 hover:text-pink-600 cursor-pointer">Holistic Health</span>
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">4</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 hover:text-pink-600 cursor-pointer">Chronic Conditions</span>
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">8</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 hover:text-pink-600 cursor-pointer">Natural Remedies</span>
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">5</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 hover:text-pink-600 cursor-pointer">Preventive Care</span>
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;