import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import StructuredData, { createOrganizationSchema } from "@/components/StructuredData";
import creationOfAdam from "@/assets/creation-of-adam.png";
import creationOfAdamMobile from "@/assets/creation-of-adam-mobile.jpeg";
import { generateTitle, truncateDescription } from "@/utils/seoHelpers";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Toaster } from "@/components/ui/sonner";
import BrandHeader from "@/components/BrandHeader";

const Landing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const seoTitle = generateTitle("A Shared Living Gallery");
  const seoDescription = truncateDescription(
    "Mirran - Where every art has a meaning, and every person has a story. Discover the story behind our platform and our mission to connect artists with art lovers."
  );

  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="/"
        keywords={["art gallery", "contemporary art platform", "artist community", "digital gallery", "art connection"]}
        type="website"
      />
      <StructuredData data={createOrganizationSchema()} />

      {/* Hero Background */}
      <div className="fixed inset-0 z-0">
        {/* Mobile Image - Close-up detail of hands */}
        <img 
          src={creationOfAdamMobile} 
          alt="Creation of Adam detail - mobile view" 
          className="md:hidden w-full h-full object-cover object-center"
          style={{ filter: 'blur(3px)', transform: 'scale(1.02)' }}
        />
        {/* Desktop Image - Full scene */}
        <img 
          src={creationOfAdam} 
          alt="Creation of Adam - desktop view" 
          className="hidden md:block w-full h-full object-cover object-center"
          style={{ filter: 'blur(3px)', transform: 'scale(1.02)' }}
        />
        {/* Gradient Overlay - Applied to both images */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/60" />
      </div>

      {/* Brand Header */}
      <BrandHeader />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
          {/* Hero Content */}
          <div className="relative z-10 text-center px-3 md:px-6 max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light mb-6 text-amber-50 tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(251,191,36,0.4), 0 0 40px rgba(251,191,36,0.2)' }}>
              A Shared Living Gallery
            </h1>
            <p className="font-serif text-base md:text-lg font-normal text-white/80 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              Where every art has a meaning, and every person has a story.
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>

        {/* The Story Behind Mirran */}
        <section className="py-8 lg:py-16 px-3 md:px-6">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 lg:p-8">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-center text-amber-50" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 0 15px rgba(251,191,36,0.3), 0 0 30px rgba(251,191,36,0.15)' }}>
                The Story Behind Mirran
              </h2>
              <div className="space-y-6 font-serif text-base md:text-lg font-normal leading-relaxed text-white/80">
                <p>
                  Mirran was born from a belief that <span className="text-white font-medium">every art has a meaning, and every person has a story</span>. Behind every brushstroke lies a truth, a memory, a moment that deserves to be seen and felt — they are physical manifestations of our shared human experiences.
                </p>
                <p>
                  We invite artists to share not just their creations, but the <span className="text-white font-medium">inspirational journeys behind them</span>. And we invite viewers to connect with art on a deeper level — to find pieces that <span className="text-white font-medium">resonate with their own stories</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More Than Just Art */}
        <section className="py-8 lg:py-16 px-3 md:px-6">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 lg:p-8">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-center text-amber-50" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 0 15px rgba(251,191,36,0.3), 0 0 30px rgba(251,191,36,0.15)' }}>
                More Than Just Art
              </h2>
              <div className="space-y-6 font-serif text-base md:text-lg font-normal leading-relaxed text-white/80">
                <p>
                  Mirran is a platform designed for artists to connect their <span className="text-white font-medium">journey of creation</span> to those who experience it.
                </p>
                <p>
                  Whether you're creating or viewing, you're part of something deeper: a <span className="text-white font-medium">human story told through art</span>. Inspire others with your truth. Move others with your presence. Build a world where stories are not just seen, but they connect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 lg:py-12 px-3 md:px-6 pb-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-amber-50" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 0 15px rgba(251,191,36,0.3), 0 0 30px rgba(251,191,36,0.15)' }}>
              Begin the connection.
            </p>
            <Button
              onClick={() => setIsDialogOpen(true)}
              size="lg"
              className="bg-amber-500/20 backdrop-blur-md hover:bg-amber-500/30 text-amber-50 font-medium text-lg px-8 py-6 rounded-lg border border-amber-500/40 hover:border-amber-500/60 transition-all"
              style={{ 
                textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 0 15px rgba(251,191,36,0.3), 0 0 30px rgba(251,191,36,0.15)',
                boxShadow: '0 0 30px rgba(251,191,36,0.3), 0 10px 40px rgba(0,0,0,0.4)'
              }}
            >
              Join the Waitlist
            </Button>
          </div>
        </section>
      </div>

      {/* Waitlist Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-black/90 border-white/20 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-amber-50">
              Join the Waitlist
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Be part of our journey from the beginning
            </DialogDescription>
          </DialogHeader>
          <WaitlistForm onSuccess={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  );
};

export default Landing;
