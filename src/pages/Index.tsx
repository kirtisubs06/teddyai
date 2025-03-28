
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { MessageCircle, ChevronRight, BookOpen, Check, CreditCard, Shield, Info, X, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      content: "I can't wait to pre-order Bubbles! The analytics dashboard looks incredible - being able to track my daughter's learning interests in real-time will completely transform how I support her education journey.",
      author: "Sarah M.",
      role: "Parent of a 6-year-old"
    },
    {
      content: "As an educator, I'm beyond excited about Bubbles' potential. The analytics platform will revolutionize how we understand children's learning patterns. This isn't just a toy; it's the future of personalized education!",
      author: "Michael T.",
      role: "Teacher and parent"
    },
    {
      content: "My twins have such different learning styles. I'm pre-ordering two Bubbles immediately! The idea of getting personalized analytics for each child is exactly what modern parenting needs. This will be game-changing.",
      author: "Aisha K.",
      role: "Mother of twins"
    }
  ];
  
  const oneTimePlan = {
    name: "Bubbles Hardware",
    price: 69,
    description: "The perfect dolphin companion for your child's learning journey.",
    features: [
      { included: true, text: "Premium dolphin plush hardware" },
      { included: true, text: "Basic conversation capabilities" },
      { included: true, text: "100+ educational stories" },
      { included: true, text: "Parent dashboard" },
      { included: true, text: "1-year hardware warranty" },
      { included: true, text: "30-day money back guarantee" }
    ],
    popular: true,
    ctaText: "Purchase Now"
  };
  
  const subscriptionPlans = [
    {
      name: "Basic",
      price: 4.99,
      period: "monthly",
      description: "Essential access for continued learning.",
      features: [
        { included: true, text: "Basic AI conversation quota (200/month)" },
        { included: true, text: "Standard response time" },
        { included: true, text: "Monthly content updates" },
        { included: true, text: "Basic cloud storage" },
        { included: false, text: "Premium educational content" },
        { included: false, text: "Priority support" }
      ],
      popular: false,
      ctaText: "Choose Basic"
    },
    {
      name: "Premium",
      price: 9.99,
      period: "monthly",
      description: "Enhanced features for active learners.",
      features: [
        { included: true, text: "Unlimited AI conversations" },
        { included: true, text: "Faster response time" },
        { included: true, text: "Weekly content updates" },
        { included: true, text: "Advanced cloud storage" },
        { included: true, text: "Full premium content access" },
        { included: true, text: "24/7 priority support" }
      ],
      popular: true,
      ctaText: "Choose Premium"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        <section className="py-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-bubbles-blue/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-bubbles-blue/10 text-bubbles-blue mb-4">
                <span className="mr-2">🔍</span>
                <span>How It Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple Setup, Endless Learning
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get started with Bubbles in just a few easy steps and watch your child's curiosity and knowledge grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="h-8 w-8 text-bubbles-blue" />,
                  title: "Interactive Conversations",
                  description: "Your child asks questions or shares thoughts, and Bubbles responds with age-appropriate, educational content."
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-bubbles-teal" />,
                  title: "Learning & Growth",
                  description: "Every interaction helps build vocabulary, critical thinking, emotional intelligence, and subject knowledge."
                },
                {
                  icon: <ChevronRight className="h-8 w-8 text-bubbles-skyblue" />,
                  title: "Insightful Analytics",
                  description: "The parent dashboard tracks learning progress, interests, and emotional development patterns."
                }
              ].map((step, index) => (
                <AnimatedCard key={index} delay={index * 200} className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-bubbles-deep shadow-soft rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-bubbles-blue/5 dark:bg-bubbles-blue/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-bubbles-blue/10 text-bubbles-blue mb-4">
                <span className="mr-2">💬</span>
                <span>Early Excitement</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Future Parents Say
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hear from families who are eagerly waiting to make Bubbles a part of their children's learning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 100} className="h-full">
                  <div className="h-full flex flex-col">
                    <div className="text-bubbles-blue text-4xl mb-4">"</div>
                    <p className="text-gray-700 dark:text-gray-200 flex-grow mb-6">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-bubbles-teal/10 text-bubbles-teal mb-4">
                <span className="mr-2">💰</span>
                <span>Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Bubbles requires both a one-time hardware purchase and an ongoing subscription for AI access and content updates.
              </p>
              
              <div className="bg-bubbles-cream/50 dark:bg-bubbles-blue/10 p-4 rounded-xl max-w-2xl mx-auto mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-bubbles-blue mr-2 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-left">
                    Bubbles requires both a one-time hardware purchase and an ongoing subscription for AI access and content updates. Select your preferred options below.
                  </p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="hardware" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
                <TabsTrigger 
                  value="hardware" 
                  className="text-lg py-4 px-8 data-[state=active]:bg-bubbles-blue data-[state=active]:text-white"
                >
                  Hardware
                </TabsTrigger>
                <TabsTrigger 
                  value="subscription" 
                  className="text-lg py-4 px-8 data-[state=active]:bg-bubbles-blue data-[state=active]:text-white"
                >
                  Subscription
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="hardware">
                <div className="max-w-md mx-auto">
                  <AnimatedCard 
                    delay={100}
                    className="border-2 border-bubbles-blue shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-bubbles-blue text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                      Most Popular
                    </div>
                    
                    <div className="p-6">
                      <div className="text-center pb-2">
                        <h3 className="text-2xl font-bold">{oneTimePlan.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">{oneTimePlan.description}</p>
                        <div className="flex items-center justify-center">
                          <span className="text-4xl font-bold text-bubbles-deep dark:text-white">${oneTimePlan.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">one-time</span>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <ul className="space-y-3 mb-6">
                          {oneTimePlan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-bubbles-teal mr-2 flex-shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                              )}
                              <span className={feature.included ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}>
                                {feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto">
                        <Button 
                          className="w-full py-6 text-white bg-bubbles-blue hover:bg-bubbles-blue/90 rounded-lg text-base font-medium"
                          onClick={() => navigate('/pre-order')}
                        >
                          {oneTimePlan.ctaText}
                        </Button>
                      </div>
                    </div>
                  </AnimatedCard>
                  
                  <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                    All hardware purchases include a 1-year warranty and 30-day money-back guarantee.
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="subscription">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {subscriptionPlans.map((plan, index) => (
                    <AnimatedCard 
                      key={index}
                      delay={index * 100}
                      className={cn(
                        "relative overflow-hidden border h-full",
                        plan.popular 
                          ? "border-2 border-bubbles-blue shadow-lg" 
                          : "border-gray-100 dark:border-gray-800"
                      )}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-bubbles-blue text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="text-center pb-2">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{plan.description}</p>
                          <div className="flex items-center justify-center">
                            <span className="text-4xl font-bold text-bubbles-deep dark:text-white">${plan.price}</span>
                            <span className="text-gray-500 dark:text-gray-400 ml-1">/{plan.period}</span>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                {feature.included ? (
                                  <Check className="h-5 w-5 text-bubbles-teal mr-2 flex-shrink-0" />
                                ) : (
                                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                                )}
                                <span className={feature.included ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}>
                                  {feature.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-auto">
                          <Button 
                            className={`w-full py-6 text-white rounded-lg text-base font-medium ${
                              plan.popular 
                                ? "bg-bubbles-blue hover:bg-bubbles-blue/90" 
                                : "bg-bubbles-teal hover:bg-bubbles-teal/90"
                            }`}
                            onClick={() => navigate('/pre-order')}
                          >
                            {plan.ctaText}
                          </Button>
                        </div>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
                
                <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                  All subscriptions are billed monthly and can be canceled anytime. Annual plans with 20% discount available.
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-bubbles-blue mr-2" />
                <span className="text-gray-600 dark:text-gray-300">Secure payment processing</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-bubbles-teal mr-2" />
                <span className="text-gray-600 dark:text-gray-300">30-day money back guarantee</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-bubbles-blue mr-2" />
                <span className="text-gray-600 dark:text-gray-300">Free shipping on all orders</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-bubbles-cream dark:bg-bubbles-deep/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedCard glassEffect={true} className="py-12 px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Child's Learning Journey?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of families using Bubbles to spark curiosity, foster emotional intelligence, and create magical learning moments.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="py-6 px-8 text-white bg-bubbles-blue hover:bg-bubbles-blue/90 rounded-lg text-base font-medium"
                    onClick={() => navigate('/pre-order')}
                  >
                    Get Started Today
                  </Button>
                  <Button 
                    className="py-6 px-8 bg-transparent border border-bubbles-blue text-bubbles-blue hover:bg-bubbles-blue/10 rounded-lg text-base font-medium"
                    onClick={() => navigate('/dolphin-demo')}
                  >
                    Try Demo
                  </Button>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
