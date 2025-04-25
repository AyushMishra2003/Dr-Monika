import { useState, useEffect } from 'react';
import BreadcrumbComponent from '../../component/Breadcums';
import { MessageCircleQuestion } from 'lucide-react';
import { href, useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { detail } = useParams()


  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Regular Dental Check-ups",
      excerpt: "Regular dental check-ups are crucial for maintaining oral health. Learn why you should visit your dentist every six months and what happens during these important appointments.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
      author: "Dr. Monika Pandey",
      date: "April 15, 2025",
      category: "Preventive Care",
      content: `
        Regular dental check-ups are a cornerstone of good oral health. Visiting your dentist every six months allows for early detection of potential issues before they become serious problems.

        During a typical check-up, your dentist will perform a thorough examination of your teeth, gums, and mouth. This includes checking for cavities, plaque, and tartar, as well as examining your gums for signs of gingivitis or other periodontal disease. Many dentists also conduct oral cancer screenings during routine visits.

        Professional cleaning is another important component of your dental check-up. Even with diligent brushing and flossing at home, plaque can build up in hard-to-reach areas. Your dental hygienist has specialized tools to remove this buildup effectively.

        These regular visits also provide an opportunity for your dentist to offer personalized advice on improving your oral hygiene routine. They can demonstrate proper brushing and flossing techniques tailored to your specific needs.

        For children, regular dental visits help establish comfort with dental procedures and instill good habits early. Many dental problems in adulthood can be prevented with proper care from a young age.

        Remember, prevention is always better than treatment. By maintaining a schedule of regular check-ups, you're investing in your long-term oral health and potentially avoiding more expensive and uncomfortable procedures down the road.
      `,
      url: "the-importance-of-regular-dental-check-ups"
    },
    {
      id: 2,
      title: "Understanding Teeth Whitening Procedures",
      excerpt: "Teeth whitening has become increasingly popular. Discover the different methods available, their effectiveness, and whether professional whitening is right for you.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
      author: "Dr. Monika Pandey",
      date: "April 10, 2025",
      category: "Cosmetic Dentistry",
      content: `
        Teeth whitening has become one of the most popular cosmetic dental procedures, with numerous options available ranging from professional treatments to over-the-counter products.

        Professional whitening performed in a dental office typically uses high-concentration bleaching agents and specialized lights or lasers to accelerate the process. This method offers the most dramatic results, often brightening teeth by several shades in just one visit.

        Take-home whitening kits provided by dentists offer a more gradual approach. These typically include custom-fitted trays and professional-grade whitening gel to be used at home according to your dentist's instructions.

        Over-the-counter options like whitening strips, toothpastes, and rinses can help maintain whiteness or provide mild improvement, but they generally don't match the effectiveness of professional treatments.

        It's important to understand that not all discoloration responds equally to whitening treatments. Yellowing tends to respond well, while brown or gray tones may be more resistant. Additionally, whitening won't affect the color of fillings, crowns, or bonded surfaces.

        Before pursuing any whitening treatment, it's wise to consult with your dentist. They can help determine the cause of your tooth discoloration and recommend the most appropriate whitening method for your specific situation.
      `,
      url: "understanding-teeth-whitening-procedures"
    },
    {
      id: 3,
      title: "How to Properly Care for Dental Implants",
      excerpt: "Dental implants require special care to ensure their longevity. Learn the best practices for maintaining your implants and keeping your smile healthy for years to come.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
      author: "Dr. Monika Pandey",
      date: "April 5, 2025",
      category: "Restorative Dentistry",
      content: `
        Dental implants represent a significant investment in your oral health and appearance. With proper care, they can last a lifetime, making proper maintenance essential.

        Daily cleaning is the foundation of implant care. While implants can't develop cavities like natural teeth, the surrounding gum tissue is still susceptible to infection. Brush at least twice daily with a soft-bristled toothbrush, paying special attention to the area where the implant meets the gumline.

        Flossing around implants requires a slightly different technique than with natural teeth. Many dentists recommend using floss specifically designed for implants or interdental brushes to clean between and around the implant structures.

        Regular professional cleanings remain important after getting implants. Your dental hygienist will use specialized tools designed to be safe for the implant surface while effectively removing buildup.

        Avoid using abrasive products on your implants. Toothpastes containing harsh abrasives, baking soda, or stain removers can scratch the implant surface, creating areas where bacteria can accumulate.

        Be aware of habits that could damage your implants. Avoid chewing extremely hard items like ice or hard candy, and if you grind your teeth at night, talk to your dentist about a protective nightguard.

        Finally, maintain regular dental check-ups. Your dentist can monitor the condition of your implants and surrounding tissues, addressing any concerns before they become serious problems.
      `,
      url: "how-to-properly-care-for-dental-implants"
    },
    {
      id: 4,
      title: "Children's Dental Health: What Parents Should Know",
      excerpt: "Establishing good dental habits early is essential for children's oral health. Find out when to schedule their first appointment and how to make dental care fun for kids.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-2.jpg",
      author: "Dr. Monika Pandey",
      date: "March 30, 2025",
      category: "Pediatric Dentistry",
      content: `
        Establishing good dental habits in childhood creates a foundation for lifelong oral health. Parents play a crucial role in this process through both direct care and modeling positive attitudes toward dental health.

        Children should have their first dental visit by their first birthday or within six months after their first tooth appears. These early visits help familiarize children with the dental environment and allow dentists to monitor development from the beginning.

        For infants, oral care begins before teeth emerge. Gently wipe gums with a clean, damp cloth after feedings. Once teeth appear, brush them twice daily with a tiny smear of fluoride toothpaste (about the size of a grain of rice) using an infant toothbrush.

        As children grow, gradually increase the amount of toothpaste to a pea-sized amount around age three. Supervise brushing until around age seven or eight, when children develop the manual dexterity to brush effectively on their own.

        Diet plays a significant role in dental health. Limit sugary snacks and drinks, and avoid putting a baby to bed with a bottle containing anything other than water, as this can lead to "baby bottle tooth decay."

        Make dental care fun through positive reinforcement. Use colorful toothbrushes, flavored toothpaste (approved for children), and perhaps a timer or song to ensure they brush for the recommended two minutes. Many smartphone apps are now available that make brushing entertaining.

        Remember that children learn by example. When they see parents prioritizing their own dental care, they're more likely to value oral health themselves.
      `,
      url: "children-s-dental-health-what-parents-should-know"
    },
    {
      id: 5,
      title: "The Link Between Oral Health and Overall Wellness",
      excerpt: "Research continues to show connections between oral health and conditions like heart disease and diabetes. Learn how taking care of your teeth can benefit your entire body.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-1.jpg",
      author: "Dr. Monika Pandey",
      date: "March 25, 2025",
      category: "Health & Wellness",
      content: `
        The connection between oral health and overall wellness has become increasingly clear through scientific research. Your mouth serves as a window to the rest of your body, often showing signs of systemic diseases before other symptoms appear.

        Periodontal (gum) disease has been linked to several serious health conditions. The inflammation associated with this common oral infection may contribute to cardiovascular problems, including heart disease and stroke. Bacteria from infected gums can enter the bloodstream, potentially affecting heart valves and causing inflammation in blood vessels.

        For people with diabetes, the relationship with oral health works both ways. Diabetes increases susceptibility to gum disease, while gum infections can make blood glucose levels more difficult to control, creating a challenging cycle.

        Respiratory conditions may also be affected by oral health. Bacteria from the mouth can be aspirated into the lungs, potentially causing or exacerbating pneumonia and chronic obstructive pulmonary disease (COPD).

        Pregnancy complications, including low birth weight and premature birth, have been associated with periodontal disease in expectant mothers. Hormonal changes during pregnancy already increase the risk of gum problems, making dental care particularly important during this time.

        Even cognitive health may be connected to oral wellness. Some research suggests potential links between gum disease and increased risk of Alzheimer's disease, though more study is needed in this area.

        These connections underscore the importance of regular dental care as part of your overall health strategy. Brushing twice daily, flossing, and maintaining regular dental check-ups aren't just good for your smile—they're investments in your total health.
      `,
      url: "the-link-between-oral-health-and-overall-wellness"
    },
    {
      id: 6,
      title: "Advances in Pain-Free Dentistry",
      excerpt: "Modern dental techniques have revolutionized the patient experience. Discover how new technologies are making dental visits more comfortable than ever before.",
      image: "https://html.awaikenthemes.com/dentaire/images/post-3.jpg",
      author: "Dr. Monika Pandey",
      date: "March 20, 2025",
      category: "Technology",
      content: `
        Dental anxiety has historically kept many people from seeking necessary care, but modern advances in pain management and technology have transformed the dental experience. Today's dental visits can be remarkably comfortable, even for traditionally uncomfortable procedures.

        Enhanced anesthetics represent one significant advancement. Today's local anesthetics are more effective and can be administered with minimal discomfort. Computer-controlled delivery systems can regulate the flow and pressure of anesthesia, reducing pain during injection and providing more consistent numbness.

        For patients with severe anxiety, sedation dentistry offers several options. From mild relaxation through nitrous oxide (laughing gas) to oral sedatives or IV sedation for deeper relaxation, these approaches help patients remain calm while still conscious. For complex procedures or extreme anxiety, general anesthesia remains an option in some cases.

        Laser dentistry has revolutionized many procedures. Dental lasers can prepare teeth for fillings, reshape gum tissue, and treat infections with minimal discomfort. The precision of laser treatment often eliminates the need for drills and reduces the necessity for anesthesia in some procedures.

        Digital imaging has replaced uncomfortable traditional impressions in many practices. Instead of biting into trays filled with impression material, optical scanners can create 3D models of your teeth without discomfort.

        Even the dental environment itself has evolved to reduce stress. Many modern dental offices incorporate soothing design elements, comfortable seating, entertainment options during procedures, and noise-canceling headphones to create a more relaxing atmosphere.

        These innovations have made dentistry more accessible to those who previously avoided treatment due to fear. If dental anxiety has kept you from seeking care, discussing these modern options with your dentist might help you find a comfortable approach to maintaining your oral health.
      `,
      url: "advances-in-pain-free-dentistry"
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