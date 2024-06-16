import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import CollectionsSection from '../components/Collections'
import FeaturedProductsSection from '../components/FeaturedProducts'
import CustomerTestimonialsSection from '../components/Testimonials'
import LatestBlogPostsSection from '../components/Blog'
import NewsletterSubscriptionSection from '../components/Newsletter'
import FAQSection from '../components/Faqs'
import ContactUsSection from '../components/Contact'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <FeaturedProductsSection />
      <CustomerTestimonialsSection />
      <LatestBlogPostsSection />
      <NewsletterSubscriptionSection />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </main>
  )
}
