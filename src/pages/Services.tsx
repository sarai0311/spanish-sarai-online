
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t('services.title')}
              </h1>
              <p className="text-xl opacity-90">
                {t('services.subtitle')}
              </p>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* Services Tabs */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" delay={0.2}>
              <Tabs defaultValue="individual" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="individual" className="px-6 py-3">{t('services.tab.individual')}</TabsTrigger>
                    <TabsTrigger value="packages" className="px-6 py-3">{t('services.tab.packages')}</TabsTrigger>
                    <TabsTrigger value="specialized" className="px-6 py-3">{t('services.tab.specialized')}</TabsTrigger>
                  </TabsList>
                </div>
                
                {/* Individual Classes */}
                <TabsContent value="individual">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      {t('services.individual.title')}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t('services.individual.subtitle')}
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Trial Lesson"
                          description="Try a 25-minute class to assess your level and discuss your learning goals."
                          icon="🎁"
                          price="€10.50"
                          features={[
                            "25 minutes",
                            "Level assessment",
                            "Learning goals discussion",
                            "Personalized learning plan",
                            "Q&A about methodology"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Standard Class"
                          description="Regular one-on-one Spanish lessons focused on your specific learning goals."
                          icon="📚"
                          price="€21.00"
                          features={[
                            "50 minutes",
                            "Customized curriculum",
                            "Homework assignments",
                            "Progress tracking",
                            "Flexible scheduling"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Premium Class"
                          description="Extended sessions for faster progress with additional materials and support."
                          icon="⭐"
                          price="€42.00"
                          features={[
                            "100 minutes",
                            "Personalized learning materials",
                            "Interactive exercises",
                            "Email support between classes",
                            "Monthly progress report"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                
                {/* Class Packages */}
                <TabsContent value="packages">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      Class Bundles
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Bundle packages for consistent learning and better value
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Starter Bundle"
                          description="Perfect for beginners or those testing the waters with consistent learning."
                          icon="🚀"
                          price="€105.00"
                          features={[
                            "5 classes",
                            "50 minutes each",
                            "Flexible scheduling",
                            "Basic study materials included",
                            "Valid for 2 months"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Progress Pro"
                          description="Our most popular package for steady and consistent progress."
                          icon="🔥"
                          price="€201.00"
                          features={[
                            "10 classes",
                            "50 minutes each",
                            "Priority scheduling",
                            "Complete study materials",
                            "Valid for 3 months"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Fluency Master"
                          description="Intensive learning experience for rapid progress and deep immersion."
                          icon="🌟"
                          price="€379.00"
                          features={[
                            "20 classes",
                            "50 minutes each",
                            "Chat support between sessions",
                            "Premium learning materials",
                            "Valid for 4 months"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                
                {/* Specialized Classes */}
                <TabsContent value="specialized">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      Specialized Classes
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Focused courses designed for specific goals and contexts
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Spanish for Travel"
                          description="Quick, practical Spanish skills for travelers heading to Spanish-speaking countries."
                          icon="✈️"
                          price="€25.00"
                          features={[
                            "50 minutes",
                            "Survival phrases & vocabulary",
                            "Cultural etiquette guidance",
                            "Travel-specific role play",
                            "Practical pronunciation focus"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Colombian Spanish"
                          description="Learn Colombian Spanish with native insights into regional expressions and culture."
                          icon="🇨🇴"
                          price="€25.00"
                          features={[
                            "50 minutes",
                            "Colombian expressions",
                            "Regional pronunciation",
                            "Cultural context",
                            "Native speaker insights"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Conversational Spanish"
                          description="Focus on speaking fluency and natural conversation skills for real-world communication."
                          icon="💬"
                          price="€21.00"
                          features={[
                            "50 minutes",
                            "Speaking practice focus",
                            "Real-world scenarios",
                            "Pronunciation improvement",
                            "Confidence building"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                {t('services.faq.title')}
              </h2>
            </ScrollAnimation>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <ScrollAnimation direction="left" delay={0.1}>
                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    {t('services.faq.q1')}
                  </h3>
                  <p className="text-gray-600">
                    {t('services.faq.a1')}
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.2}>
                <motion.div 
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    {t('services.faq.q2')}
                  </h3>
                  <p className="text-gray-600">
                    {t('services.faq.a2')}
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sarai-accent text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="max-w-3xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('services.cta.title')}
                </h2>
                <p className="text-xl mb-8">
                  {t('services.cta.subtitle')}
                </p>
                <Link to="/book">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white text-sarai-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                      {t('services.cta.button')}
                    </button>
                  </motion.div>
                </Link>
              </motion.div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
