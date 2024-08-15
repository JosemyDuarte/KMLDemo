import Head from 'next/head';
import WebsitePresentation from '@/components/WebsitePresentation';
import FeaturedProductsCarrousel from '@/components/FeaturedProductsCarrousel';
import CustomerReviews from '@/components/CustomerReviews';
import PopularLashStyles from '@/components/PopularLashStyles';
import SocialMediaBuzz from '@/components/SocialMediaBuzz';
import ExclusiveLashTips from '@/components/ExclusiveLashTips';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Kiss My Lash</title>
      </Head>

      <div className="max-w-4xl mx-auto py-8 px-4 space-y-4 sm:py-16 sm:px-6 lg:px-8 bg-white">
        <WebsitePresentation />
        <FeaturedProductsCarrousel />
        {/* <CustomerReviews /> */}
        {/* <PopularLashStyles /> */}
        <SocialMediaBuzz />
        <ExclusiveLashTips />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );

}
