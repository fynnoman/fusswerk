import HeroCinematic from '@/components/HeroCinematic';
import ImageMarquee from '@/components/ImageMarquee';
import TickerCounter from '@/components/TickerCounter';
import MagazineEditorial from '@/components/MagazineEditorial';
import HorizontalTreatments from '@/components/HorizontalTreatments';
import KaltplasmaImmersive from '@/components/KaltplasmaImmersive';
import PortraitEditorial from '@/components/PortraitEditorial';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <ImageMarquee />
      <TickerCounter />
      <MagazineEditorial />
      <HorizontalTreatments />
      <KaltplasmaImmersive />
      <PortraitEditorial />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
