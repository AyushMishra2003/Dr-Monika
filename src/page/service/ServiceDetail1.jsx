import React, { useEffect, useState } from 'react';
import { Brain, Heart, Users, Activity, Moon, MessageCircle, Zap, Coffee, Shield, RefreshCw, Pill, ClipboardCheck, Star, CheckIcon, Calendar, Trophy } from 'lucide-react';
import BreadCrumbs from '../../component/Breadcums';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';




export default function PsychiatricServicesDetails() {
    const [activeTab, setActiveTab] = useState('treatments');

    // List of psychiatric conditions/treatments
    const treatments = [
        {
            title: "Depression",
            icon: <Zap className="w-8 h-8 text-white" />,
            description: "Evidence-based treatment approaches for depressive disorders, including medication management, psychotherapy, and lifestyle interventions.",
            symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Changes in appetite", "Feelings of worthlessness"],
            longDescription: "Depression is a common but serious mood disorder that causes severe symptoms that affect how you feel, think, and handle daily activities. Our treatment combines medication, therapy, and lifestyle changes to help you regain joy and functionality in your life."
        },
        {
            title: "Anxiety Disorders",
            icon: <Activity className="w-8 h-8 text-white" />,
            description: "Comprehensive care for anxiety disorders that may present with various symptoms, including personalized treatment plans and coping strategies.",
            symptoms: ["Excessive worry", "Restlessness", "Difficulty concentrating", "Sleep disturbances", "Panic attacks"],
            longDescription: "Anxiety disorders involve excessive fear or worry that doesn't go away and can worsen over time. Our treatment approaches include cognitive behavioral therapy, medication when appropriate, and mindfulness techniques to help manage symptoms."
        },
        {
            title: "Substance Use Disorders",
            icon: <Coffee className="w-8 h-8 text-white" />,
            description: "Professional treatment for substance dependence and addiction recovery, including assessment, detoxification support, and long-term recovery planning.",
            symptoms: ["Compulsive drug seeking", "Withdrawal symptoms", "Tolerance development", "Physical dependence", "Social withdrawal"],
            longDescription: "Substance use disorders include a range of conditions related to the use of alcohol, prescription medications, and illicit drugs. Our comprehensive approach includes detoxification, therapy, support groups, and aftercare planning."
        },
        {
            title: "Obsessive Compulsive Disorder",
            icon: <RefreshCw className="w-8 h-8 text-white" />,
            description: "Specialized treatment for OCD, focusing on breaking the cycle of obsessions and compulsions through behavioral therapy and medication when needed.",
            symptoms: ["Intrusive thoughts", "Repetitive behaviors", "Excessive cleaning", "Checking rituals", "Arranging items symmetrically"],
            longDescription: "OCD is characterized by unreasonable thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions). Our specialized treatment includes exposure and response prevention therapy and medication management."
        },
        {
            title: "Sleep Disorders",
            icon: <Moon className="w-8 h-8 text-white" />,
            description: "Diagnosis and treatment of various sleep disorders, including insomnia, sleep apnea, and circadian rhythm disturbances.",
            symptoms: ["Difficulty falling asleep", "Waking during the night", "Excessive daytime sleepiness", "Irregular sleep patterns", "Sleep-related breathing issues"],
            longDescription: "Sleep disorders affect the quality, timing, and amount of sleep, leading to daytime distress and impaired functioning. Our treatment includes sleep hygiene education, cognitive behavioral therapy for insomnia, and when appropriate, medication management."
        },
        {
            title: "Psychotic Disorders",
            icon: <Brain className="w-8 h-8 text-white" />,
            description: "Comprehensive care for psychotic disorders, including early intervention, medication management, and supportive therapy.",
            symptoms: ["Hallucinations", "Delusions", "Disorganized thinking", "Social withdrawal", "Lack of motivation"],
            longDescription: "Psychotic disorders are severe mental disorders characterized by abnormal thinking and perceptions. Our treatment focuses on antipsychotic medications, psychosocial treatments, and family education and support."
        }
    ];

    // List of therapy services
    const therapies = [
        {
            title: "Cognitive Behavioral Therapy",
            icon: <Brain className="w-8 h-8 text-white" />,
            description: "Evidence-based approach that focuses on identifying and changing negative thought patterns and behaviors.",
            benefits: ["Changed thought patterns", "New behavioral responses", "Emotional regulation", "Problem-solving skills", "Stress management"],
            duration: "45-60 minutes per session",
            longDescription: "CBT is a structured, goal-oriented therapy that helps patients identify and change destructive thought patterns that influence emotional responses and behavior. It's effective for depression, anxiety disorders, PTSD, and more."
        },
        {
            title: "Psychotherapy",
            icon: <MessageCircle className="w-8 h-8 text-white" />,
            description: "Talk therapy that explores thoughts, feelings, and behaviors to improve mental health and well-being.",
            benefits: ["Self-awareness", "Emotional healing", "Personal growth", "Better relationships", "Coping strategies"],
            duration: "50-60 minutes per session",
            longDescription: "Psychotherapy is a collaborative treatment based on the relationship between an individual and a therapist. It provides a supportive environment to talk openly about concerns and feelings, helping you understand and change troubling emotions, thoughts, and behaviors."
        },
        {
            title: "Family Counseling",
            icon: <Users className="w-8 h-8 text-white" />,
            description: "Therapeutic sessions designed to improve family dynamics, communication, and resolve conflicts within the family unit.",
            benefits: ["Improved communication", "Conflict resolution", "Stronger relationships", "Better boundaries", "Enhanced family functioning"],
            duration: "60-90 minutes per session",
            longDescription: "Family therapy helps family members improve communication, resolve conflicts, and deepen understanding. It can be useful for addressing issues that affect the family unit, such as mental illness of a family member, substance abuse, or child and adolescent behavioral problems."
        },
        {
            title: "Medication Management",
            icon: <Pill className="w-8 h-8 text-white" />,
            description: "Expert prescription and monitoring of psychiatric medications to effectively manage symptoms with minimal side effects.",
            benefits: ["Symptom relief", "Personalized medication plans", "Side effect management", "Regular monitoring", "Medication education"],
            duration: "20-30 minutes per session",
            longDescription: "Our medication management services include comprehensive evaluation, prescription of appropriate medications, and ongoing monitoring to ensure effectiveness and minimize side effects. We work closely with patients to find the right medications and dosages."
        },
        {
            title: "Trauma-Focused Therapy",
            icon: <Shield className="w-8 h-8 text-white" />,
            description: "Specialized therapy designed to address the emotional and mental health needs of people who have experienced traumatic events.",
            benefits: ["Processing traumatic memories", "Reduced trauma symptoms", "Improved coping skills", "Restored sense of safety", "Post-traumatic growth"],
            duration: "60-90 minutes per session",
            longDescription: "Trauma-focused therapy helps individuals process difficult emotions related to traumatic experiences. Techniques may include EMDR (Eye Movement Desensitization and Reprocessing), prolonged exposure therapy, and cognitive processing therapy."
        },
        {
            title: "Group Therapy",
            icon: <Users className="w-8 h-8 text-white" />,
            description: "Therapeutic sessions conducted in groups to provide support, perspectives, and skill development among peers facing similar challenges.",
            benefits: ["Peer support", "Different perspectives", "Social skill practice", "Sense of belonging", "Cost-effective treatment"],
            duration: "90-120 minutes per session",
            longDescription: "Group therapy involves one or more therapists working with a group of people. It provides the opportunity to learn that you're not alone in your struggles, gain different perspectives, and practice new skills in a supportive environment."
        }
    ];

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen">
            <Helmet>
        <title>Physiotherapy Services | Comprehensive Rehab & Pain Relief Care</title>
        <meta
          name="description"
          content="Restore mobility and relieve pain with our expert physiotherapy services. Personalized rehab, injury recovery, and chronic pain care tailored to your unique needs."
        />
        <meta
          name="keywords"
          content="physiotherapy in Lucknow, pain management, rehabilitation, post-surgery physiotherapy, back pain, joint therapy, physical therapy clinic"
        />
        <meta name="author" content="Sambhawna Clinic" />
        <link rel="canonical" href="https://yourdomain.com/services/physiotherapy" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Physiotherapy Services | Restore Movement & Relieve Pain" />
        <meta
          property="og:description"
          content="Get personalized physiotherapy care at Sambhawna Clinic. We specialize in pain relief, mobility restoration, and rehabilitation."
        />
        <meta property="og:url" content="https://yourdomain.com/services/physiotherapy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/images/physiotherapy-cover.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Physiotherapy Services | Sambhawna Clinic" />
        <meta
          name="twitter:description"
          content="Expert physiotherapists offering rehab, injury recovery, and pain management at Sambhawna Clinic. Book your session today."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/physiotherapy-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

            <BreadCrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'Psychiatric' } // last item without a path
                ]}
                headText="Gynecology & Obstetrics"
            />
            <div className="container mx-auto px-4 lg:py-12 py-6 md:py-8 ">
                {/* Hero Section with Image */}
                <div className="lg:mb-16 mb-6 md:mb-10 text-center relative overflow-hidden rounded-3xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5b2e67]/90 to-[#e47f9f]/90 z-10"></div>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.iI5m-yGjhrnwG-EpMXdLdgHaE1&pid=Api&P=0&h=180" alt="Mental health support" className="w-full object-cover h-64 md:h-96" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="px-4 py-6 text-white">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                Comprehensive <span className="text-white/90">Psychiatric Services</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Personalized care for mental health and wellbeing with evidence-based treatments
                            </p>
                            <button onClick={() => navigate("/appoitment")} className="mt-6 cursor-pointer bg-white text-[#5b2e67] font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors">
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center mb-10">
                    <button
                        onClick={() => setActiveTab('treatments')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'treatments'
                            ? 'bg-[#5b2e67] text-white shadow-lg'
                            : 'bg-white text-[#5b2e67] shadow hover:shadow-md'}`}
                    >
                        Treatment Conditions
                    </button>
                    <button
                        onClick={() => setActiveTab('therapies')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'therapies'
                            ? 'bg-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#5b2e67] shadow hover:shadow-md'}`}
                    >
                        Therapy Services
                    </button>
                    <button
                        onClick={() => setActiveTab('approach')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'approach'
                            ? 'bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#5b2e67] shadow hover:shadow-md'}`}
                    >
                        Our Approach
                    </button>
                </div>

                {/* Treatments Tab Content */}
                {activeTab === 'treatments' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#5b2e67] mb-4">Mental Health Conditions We Treat</h2>
                            <p className="text-gray-600 md:max-w-3xl w-full mx-auto text-lg text-justify md:text-center">
                                Our experienced team of psychiatrists and therapists provides evidence-based treatment for a wide range of
                                psychiatric conditions. We offer comprehensive care tailored to your unique needs and circumstances.
                            </p>
                        </div>

                        {/* Featured Treatment */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#5b2e67] to-[#e47f9f] lg:p-8 p-4 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Understanding Mental Health Conditions</h3>
                                    <p className="mb-4">
                                        Mental health conditions affect your thinking, feeling, mood, and behavior in ways that influence your ability to relate to others and function in daily life. These conditions are medical problems that often result from a complex interplay of genetic, biological, psychological, and environmental factors.
                                    </p>
                                    <p className="mb-4">
                                        With proper diagnosis and treatment, many individuals learn to cope or recover from mental health conditions. Our comprehensive treatment approaches are tailored to each individual's needs and may include therapy, medication, lifestyle changes, and support services.
                                    </p>
                                    <p>
                                        If you're experiencing symptoms that concern you, reaching out for professional help is an important first step toward recovery and improved wellbeing.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.iI5m-yGjhrnwG-EpMXdLdgHaE1&pid=Api&P=0&h=180" alt="Mental health treatment" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                            {treatments.map((treatment, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                            {treatment.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{treatment.title}</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
                                        <p className="text-gray-600 mb-4">{treatment.longDescription}</p>
                                        <div>
                                            <h4 className="font-semibold text-[#5b2e67] mb-2">Common Symptoms:</h4>
                                            <ul className="space-y-1">
                                                {treatment.symptoms.map((symptom, i) => (
                                                    <li key={i} className="flex items-center text-gray-600">
                                                        <span className="text-[#e47f9f] mr-2">•</span>
                                                        {symptom}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Therapies Tab Content */}
                {activeTab === 'therapies' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#5b2e67] mb-4">Our Therapeutic Services</h2>
                            <p className="text-gray-600 lg:max-w-3xl w-full text-justify md:text-center mx-auto text-lg">
                                We offer a comprehensive range of evidence-based therapies tailored to your unique needs.
                                Our expert clinicians are trained in various therapeutic modalities to address a wide spectrum of mental health concerns.
                            </p>
                        </div>

                        {/* Featured Therapy Section */}
                        <div className="lg:mb-12 bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#e47f9f] to-[#5b2e67] lg:p-8 p-4 text-white">
                                    <h3 className="lg:text-2xl text-xl font-bold mb-4">The Power of Therapeutic Intervention</h3>
                                    <p className="mb-4">
                                        Therapy provides a supportive environment where you can talk openly with a trained professional who's objective, neutral, and nonjudgmental. Through various therapeutic techniques, you can gain insight into your feelings, behaviors, and thoughts, develop coping strategies, and work toward positive change.
                                    </p>
                                    <p className="mb-4">
                                        Each therapy type has unique approaches and benefits. Our specialists will help determine which therapy or combination of therapies might work best for your specific situation and needs.
                                    </p>
                                    <p>
                                        Whether you're dealing with a specific mental health condition, life transitions, relationship issues, or simply seeking personal growth, our therapeutic services can help you navigate challenges and improve your quality of life.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.iI5m-yGjhrnwG-EpMXdLdgHaE1&pid=Api&P=0&h=180" alt="Therapeutic services" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {therapies.map((therapy, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-gradient-to-r from-[#e47f9f] to-[#5b2e67] p-4 flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                            {therapy.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{therapy.title}</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
                                        <p className="text-gray-600 mb-4">{therapy.longDescription}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                            <ul className="space-y-1">
                                                {therapy.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-center text-gray-600">
                                                        <span className="text-[#e47f9f] mr-2">✓</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                            <strong>Session Duration:</strong> {therapy.duration}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Approach Tab Content */}
                {activeTab === 'approach' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#5b2e67] mb-4">Our Treatment Approach</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-center text-justify ">
                                Our approach to psychiatric care is comprehensive, personalized, and focused on long-term wellbeing.
                                We believe in treating the whole person, not just symptoms.
                            </p>
                        </div>

                        {/* Philosophy Section */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#5b2e67] to-[#e47f9f] lg:p-8 p-4 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Our Philosophy of Care</h3>
                                    <p className="mb-4">
                                        We believe that every individual deserves compassionate, respectful, and evidence-based care for their mental health needs. Our approach is founded on the understanding that mental health is an essential component of overall wellbeing, and that recovery is possible with proper support and treatment.
                                    </p>
                                    <p className="mb-4">
                                        We recognize that each person's journey is unique, and we are committed to providing personalized care that addresses individual needs, preferences, and goals. Our integrative approach combines the best of modern psychiatric medicine with holistic considerations of lifestyle, relationships, and personal values.
                                    </p>
                                    <p>
                                        We strive to create a safe, welcoming environment where individuals feel empowered to actively participate in their treatment and recovery process.
                                    </p>
                                </div>
                                <div className="md:w-1/2">

                                    <img src="https://tse3.mm.bing.net/th?id=OIP.iI5m-yGjhrnwG-EpMXdLdgHaE1&pid=Api&P=0&h=180" alt="Psychiatric care philosophy" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-xl font-bold text-[#5b2e67] mb-6 flex items-center">
                                        <ClipboardCheck className="w-6 h-6 mr-2 text-[#e47f9f]" />
                                        Treatment Process
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#5b2e67] text-white flex items-center justify-center font-bold">1</div>
                                                <div className="h-full w-0.5 bg-[#e47f9f] mx-auto mt-2 mb-2"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#5b2e67]">Comprehensive Assessment</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Thorough evaluation of symptoms, medical history, and psychological factors to develop a complete understanding of your needs.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#5b2e67] text-white flex items-center justify-center font-bold">2</div>
                                                <div className="h-full w-0.5 bg-[#e47f9f] mx-auto mt-2 mb-2"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#5b2e67]">Personalized Treatment Planning</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Creation of a customized treatment plan that addresses your specific condition, symptoms, and personal goals.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#5b2e67] text-white flex items-center justify-center font-bold">3</div>
                                                <div className="h-full w-0.5 bg-[#e47f9f] mx-auto mt-2 mb-2"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#5b2e67]">Active Treatment</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Implementation of evidence-based therapies, medication management when appropriate, and ongoing support throughout your treatment journey.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#5b2e67] text-white flex items-center justify-center font-bold">4</div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#5b2e67]">Continuous Monitoring & Adjustment</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Regular assessment of progress, refinement of treatment approaches as needed, and long-term follow-up care.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#5b2e67] mb-6 flex items-center">
                                        <Star className="w-6 h-6 mr-2 text-[#e47f9f]" />
                                        Our Core Principles
                                    </h3>

                                    <div className="bg-purple-50 lg:p-6 p-2 md:p-4 rounded-xl">
                                        <ul className="space-y-4">
                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#5b2e67]">Patient-Centered Care</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Your needs, preferences, and goals are at the center of every treatment decision.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#5b2e67]">Evidence-Based Practices</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        All treatments are grounded in scientific research and clinical expertise.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#5b2e67]">Holistic Approach</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Addressing all aspects of wellbeing: mental, physical, social, and spiritual.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#5b2e67]">Compassionate Care</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Treatment delivered with empathy, respect, and without judgment.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#5b2e67]">Collaborative Treatment</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Working together with you and your support network to achieve the best outcomes.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Patient Experience Section */}
                        <div className="bg-white rounded-xl shadow-lg p-2 md:p-8">
                            <h3 className="text-xl font-bold text-[#5b2e67] mb-6 text-center">What to Expect as a Patient</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5b2e67] text-white flex items-center justify-center">
                                        <Calendar className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-semibold text-[#5b2e67] mb-2">Initial Consultation</h4>
                                    <p className="text-gray-600 text-justify md:text-center">
                                        Your first appointment will focus on understanding your concerns, history, and treatment goals. We'll begin to develop a personalized care plan together.
                                    </p>
                                </div>

                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e47f9f] text-white flex items-center justify-center">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-semibold text-[#5b2e67] mb-2">Ongoing Care</h4>
                                    <p className="text-gray-600 text-justify md:text-center">
                                        Regular sessions with your treatment team will help monitor progress, adjust treatment as needed, and provide ongoing support through your recovery journey.
                                    </p>
                                </div>

                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white flex items-center justify-center">
                                        <Trophy className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-semibold text-[#5b2e67] mb-2">Long-Term Support</h4>
                                    <p className="text-gray-600 text-justify md:text-center">
                                        As you progress, we'll help you transition to maintenance care, develop relapse prevention strategies, and provide resources for continued wellbeing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="lg:mt-16 mt-8 text-center">
                    <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white py-10 px-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Healing Journey Today</h2>
                        <p className="text-white/90 max-w-2xl mx-auto mb-8">
                            Our compassionate team of experts is ready to help you overcome your challenges and improve your mental wellbeing.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/appoitment" className="bg-white text-[#5b2e67] font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors">
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}


