import { I18nProvider } from "./i18n/i18n";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RestaurantIntro from "./components/RestaurantIntro";
import FeaturedDishes from "./components/FeaturedDishes";
import MenuPreview from "./components/MenuPreview";
import ExperienceSection from "./components/ExperienceSection";
import Gallery from "./components/Gallery";
import OrderingSection from "./components/OrderingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main id="principal">
        <HeroSection />
        <RestaurantIntro />
        <FeaturedDishes />
        <MenuPreview />
        <ExperienceSection />
        <Gallery />
        <OrderingSection />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  );
}
