import React, { useEffect, useState } from 'react';
import { Brain, Heart, Users, Activity, Moon, MessageCircle, Zap, Coffee, Shield, RefreshCw, Pill, ClipboardCheck, Star, CheckIcon, Calendar, Trophy, Phone, Mail, Clock } from 'lucide-react';
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
                            ? 'bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white'
                            : 'bg-white text-[#5b2e67] shadow hover:shadow-md'}`}
                    >
                        Psychiatry Treatment
                    </button>
                    <button
                        onClick={() => setActiveTab('therapies')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'therapies'
                            ? 'bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white'
                            : 'bg-white text-[#5b2e67] shadow hover:shadow-md'}`}
                    >
                        Counselling Services
                    </button>
                    <button
                        onClick={() => setActiveTab('approach')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'approach'
                            ? 'bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#5b2e67] shadow hover:shadow-md'}`}
                    >
                        Therapies
                    </button>
                </div>

                {/* Treatments Tab Content */}
                {activeTab === 'treatments' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#5b2e67] mb-4">Psychiatry Treatment </h2>
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


                {activeTab === 'therapies' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#5b2e67] mb-4">Our Counseling Services</h2>
                            <p className="text-gray-600 lg:max-w-3xl w-full text-justify md:text-center mx-auto text-lg">
                                We provide personalized counseling services to support individuals through emotional, psychological, and life challenges.
                                Our qualified counselors specialize in a variety of approaches to help clients navigate stress, anxiety, relationship issues, and personal growth.
                            </p>
                        </div>


                        {/* Featured Therapy Section */}
                        <div className="lg:mb-12 bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#e47f9f] to-[#5b2e67] lg:p-8 p-4 text-white">
                                    <h3 className="lg:text-2xl text-xl font-bold mb-4">The Value of Counseling Support</h3>
                                    <p className="mb-4">
                                        Counseling offers a safe and confidential space where you can express your concerns and emotions freely with a trained professional who listens with empathy and without judgment. It empowers you to explore your thoughts, feelings, and behaviors to better understand yourself.
                                    </p>
                                    <p className="mb-4">
                                        Our counselors utilize evidence-based approaches tailored to your individual circumstances. Whether you're facing anxiety, depression, relationship difficulties, or seeking clarity in life decisions, counseling can offer tools and support to manage life’s challenges more effectively.
                                    </p>
                                    <p>
                                        No matter where you are on your personal journey, our counseling services are here to guide you toward emotional well-being, healthier relationships, and greater self-awareness.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.iI5m-yGjhrnwG-EpMXdLdgHaE1&pid=Api&P=0&h=180" alt="Counseling services" className="w-full h-full object-cover" />
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
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#5b2e67] mb-4">Therapies</h2>
                            <p className="text-gray-600 md:max-w-3xl w-full mx-auto text-lg text-justify md:text-center">
                                We provide a range of evidence-based therapies designed to support various mental health needs.
                                Our skilled therapists collaborate with you to choose the most suitable therapeutic path for your individual journey.
                            </p>
                        </div>


                        {/* Featured Therapy */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#5b2e67] to-[#e47f9f] lg:p-8 p-4 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Therapies</h3>
                                    <p className="mb-4">
                                        Our therapy services encompass a wide range of evidence-based approaches designed to support your mental and emotional well-being. Whether you’re dealing with anxiety, depression, trauma, or relationship challenges, we offer effective therapeutic solutions.
                                    </p>
                                    <p className="mb-4">
                                        Each therapy is tailored to your individual needs, ensuring that you receive the most appropriate and impactful care. Our licensed therapists draw from various modalities to create a personalized and empowering experience.
                                    </p>
                                    <p>
                                        Therapy is more than just treatment—it’s a journey toward self-awareness, healing, and lasting growth. We’re here to walk with you every step of the way.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img
                                        src="https://tse3.mm.bing.net/th?id=OIP.iI5m-yGjhrnwG-EpMXdLdgHaE1&pid=Api&P=0&h=180"
                                        alt="Therapies"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Cognitive Behavioral Therapy */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Cognitive Behavioral Therapy (CBT)</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Cognitive Behavioral Therapy is a structured, goal-oriented therapy that helps you identify and change negative thought patterns and behaviors. CBT is based on the concept that your thoughts, feelings, and actions are interconnected, and that changing one affects the others.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Effective for depression, anxiety, PTSD, and phobias
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Focuses on current problems rather than past issues
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Teaches practical coping skills and strategies
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Usually shorter-term than other therapies
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Psychotherapy */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Psychotherapy</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Psychotherapy, also known as talk therapy, encompasses a range of techniques for treating mental health problems by talking with a psychiatrist, psychologist, or other mental health provider. It helps you understand your feelings, thoughts, and behaviors, and develop healthier ways of coping.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Treats a wide range of mental health conditions
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Improves communication and interpersonal skills
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Helps process trauma and difficult emotions
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Provides insight into patterns and triggers
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Aversion Therapy */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Aversion Therapy</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Aversion therapy is a form of behavioral treatment that aims to reduce unwanted behaviors by associating them with unpleasant stimuli or discomfort. This type of therapy is primarily used to treat certain addictions, substance abuse disorders, and harmful habits.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Can help reduce addictive behaviors
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Effective for specific compulsive behaviors
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Often used as part of a comprehensive treatment plan
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Can produce results in a relatively short time frame
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Dialectical Behavior Therapy */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Dialectical Behavior Therapy (DBT)</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Dialectical Behavior Therapy is a modified form of CBT that teaches skills to manage painful emotions and decrease conflict in relationships. DBT specifically focuses on providing therapeutic skills in four key areas: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Effective for borderline personality disorder
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Helps with emotional dysregulation
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Teaches practical mindfulness and coping skills
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Improves interpersonal relationships
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Family Therapy */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Family Therapy</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Family therapy is a form of psychotherapy that helps family members improve communication and resolve conflicts. It views problems in the context of the family unit and emphasizes the role of family relationships in psychological health.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Improves family communication patterns
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Addresses family roles and behavior patterns
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Helps families navigate major life transitions
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Builds stronger family support systems
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Group Therapy */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Group Therapy</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Group therapy involves one or more therapists working with several individuals at the same time. This approach allows members to receive support from peers facing similar challenges while learning from their experiences and insights.
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-[#5b2e67] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Creates a supportive community atmosphere
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Provides multiple perspectives on problems
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Improves social skills through interaction
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">•</span>
                                                Reduces feelings of isolation and loneliness
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="max-w-6xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50">
                    <div className="relative">
                        {/* Decorative header bar */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5B2E67] via-[#E47F9F] to-[#5B2E67]"></div>

                        {/* Decorative circles */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#E47F9F] opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#5B2E67] opacity-20"></div>

                        <div className="p-8">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5B2E67] to-[#E47F9F]">
                                    Get in Touch With Us
                                </h3>
                                <div className="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-[#5B2E67] to-[#E47F9F] rounded-full"></div>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Phone Card */}
                                <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 border-l-4 border-[#E47F9F]">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-pink-50 rounded-lg">
                                            <Phone className="text-[#E47F9F]" size={24} />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                                            <a href="tel:9838346118" className="text-gray-600 mb-1 block hover:text-[#E47F9F] transition-colors">
                                                9838346118
                                            </a>
                                            <a href="tel:9277163686" className="text-gray-600 block hover:text-[#E47F9F] transition-colors">
                                                9277163686
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 border-l-4 border-[#5B2E67]">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-purple-50 rounded-lg">
                                            <Mail className="text-[#5B2E67]" size={24} />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                                            <a href="mailto:monikapandey185@gmail.com" className="text-gray-600 break-all block hover:text-[#5B2E67] transition-colors">
                                                monikapandey185@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours Card */}
                                <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 border-l-4 border-[#E47F9F]">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-pink-50 rounded-lg">
                                            <Clock className="text-[#E47F9F]" size={24} />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                                            <p className="text-gray-600 mb-1">Morning: 10:00 AM - 1:30 PM</p>
                                            <p className="text-gray-600 mb-1">Evening: 00:06 PM - 06:30 PM</p>
                                            <p className="text-gray-500 text-sm">(Monday - Sunday)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Appointment Button */}
                            <div className="mt-8 text-center">
                                <button onClick={() => navigate("/appoitment")} className="px-6 py-3 bg-gradient-to-r from-[#5B2E67] to-[#E47F9F] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}


