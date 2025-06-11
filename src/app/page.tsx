import Image from "next/image";
import PremiumDecorative from "@/components/MoroccanDecorative";
import { TitleGrand, SequenceText, CommentLabel, ItalicText, BoldText } from "@/components/Typography";
import { PremiumBorder } from "@/components/MoroccanIcons";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-black text-premium-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Typography Showcase */}
      <section className="py-16 bg-off-black">
        <div className="container mx-auto px-6">
          <PremiumBorder className="mb-12" />
          <SequenceText className="text-center mb-12 text-premium-white">
            Typographie
          </SequenceText>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="bg-charcoal p-8 overflow-hidden">
              <CommentLabel className="text-soft-white mb-4">
                Title Grand Texte
              </CommentLabel>
              <div className="overflow-hidden">
                <div className="text-6xl lg:text-7xl xl:text-8xl font-bodoni-regular text-premium-white truncate">
                  Bodoni Poster
                </div>
              </div>
              <div className="text-sm text-soft-white mt-4">
                200pt/240pt line height (responsive)
              </div>
            </div>
            
            <div className="bg-charcoal p-8">
              <CommentLabel className="text-soft-white mb-4">
                Sequence Text
              </CommentLabel>
              <div className="text-3xl lg:text-4xl font-bodoni-regular text-premium-white">
                Bodoni Poster Regular
              </div>
              <div className="text-sm text-soft-white mt-4">
                50pt/65pt line height (responsive)
              </div>
            </div>
            
            <div className="bg-charcoal p-8">
              <CommentLabel className="text-soft-white mb-4">
                Comment Labels
              </CommentLabel>
              <div className="text-xl lg:text-2xl font-bodoni-regular text-premium-white">
                Bodoni Poster Regular
              </div>
              <div className="text-sm text-soft-white mt-4">
                34pt/39pt line height (responsive)
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal p-8">
                <CommentLabel className="text-soft-white mb-4">
                  Bodoni Poster Italic
                </CommentLabel>
                <div className="text-xl lg:text-2xl font-bodoni-italic text-accent-gold">
                  Elegant Italic Variant
                </div>
              </div>
              
              <div className="bg-charcoal p-8">
                <CommentLabel className="text-soft-white mb-4">
                  Bodoni Bold
                </CommentLabel>
                <div className="text-xl lg:text-2xl font-bodoni-bold text-premium-white">
                  Strong Bold Variant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <PremiumBorder className="mb-12" />
          <SequenceText className="text-center mb-12 text-premium-white">
            Palette de Couleurs
          </SequenceText>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col">
              <div className="h-24 bg-premium-black"></div>
              <div className="bg-slate p-4">
                <div className="font-bodoni-regular text-premium-white">Premium Black</div>
                <div className="text-sm text-soft-white">#000000</div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-charcoal"></div>
              <div className="bg-slate p-4">
                <div className="font-bodoni-regular text-premium-white">Charcoal</div>
                <div className="text-sm text-soft-white">#1A1A1A</div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-slate"></div>
              <div className="bg-slate p-4">
                <div className="font-bodoni-regular text-premium-white">Slate</div>
                <div className="text-sm text-soft-white">#3A3A3A</div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-premium-white"></div>
              <div className="bg-slate p-4">
                <div className="font-bodoni-regular text-premium-white">Premium White</div>
                <div className="text-sm text-soft-white">#FFFFFF</div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-accent-gold"></div>
              <div className="bg-slate p-4">
                <div className="font-bodoni-regular text-premium-white">Accent Gold</div>
                <div className="text-sm text-soft-white">#D4AF37</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section id="exhibitions" className="py-16 bg-off-black">
        <div className="container mx-auto px-6">
          <PremiumBorder className="mb-12" />
          <h2 className="text-3xl font-bodoni-regular text-premium-white mb-12 text-center">Expositions Actuelles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-charcoal overflow-hidden">
                <div className="h-64 bg-graphite relative">
                  {/* Placeholder for exhibition image */}
                  <div className="absolute inset-0 bg-graphite animate-pulse"></div>
                </div>
                <div className="p-6 border-t border-accent-gold/20">
                  <h3 className="text-xl font-bodoni-regular text-premium-white mb-2">Titre de l'exposition {i}</h3>
                  <p className="text-soft-white mb-4">Une brève description de cette superbe exposition présentant des œuvres d'art remarquables.</p>
                  <p className="text-sm text-soft-white/70">Jusqu'à décembre 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Spotlight */}
      <section id="artists" className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <PremiumBorder className="mb-12" />
          <h2 className="text-3xl font-bodoni-regular text-premium-white mb-12 text-center">Artistes à l'Honneur</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-graphite mb-4 overflow-hidden relative border border-accent-gold/30">
                  {/* Placeholder for artist image */}
                  <div className="absolute inset-0 bg-graphite animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bodoni-regular text-premium-white mb-1">Nom de l'Artiste {i}</h3>
                <p className="text-soft-white">Contemporain</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section id="visit" className="py-16 bg-off-black">
        <div className="container mx-auto px-6">
          <PremiumBorder className="mb-12" />
          <h2 className="text-3xl font-bodoni-regular text-premium-white mb-8 text-center">Planifiez Votre Visite</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bodoni-regular text-premium-white mb-4">Horaires & Emplacement</h3>
              <p className="text-soft-white mb-2">Mardi - Dimanche: 10h - 18h</p>
              <p className="text-soft-white mb-2">Lundi: Fermé</p>
              <p className="text-soft-white mb-6">12, rue du Parc, Casablanca, Maroc</p>
              
              <h3 className="text-xl font-bodoni-regular text-premium-white mb-4">Tarifs</h3>
              <p className="text-soft-white mb-2">Adultes: 30 DH</p>
              <p className="text-soft-white mb-2">Étudiants & Seniors: 15 DH</p>
              <p className="text-soft-white">Enfants de moins de 12 ans: Gratuit</p>
            </div>
            <div className="bg-charcoal p-6 border border-slate/30">
              <h3 className="text-xl font-bodoni-regular text-premium-white mb-4">Contactez-nous</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-bodoni-regular text-soft-white mb-1">Nom</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-slate bg-graphite text-premium-white focus:outline-none focus:border-accent-gold" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-bodoni-regular text-soft-white mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-slate bg-graphite text-premium-white focus:outline-none focus:border-accent-gold" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-bodoni-regular text-soft-white mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-slate bg-graphite text-premium-white focus:outline-none focus:border-accent-gold"></textarea>
                </div>
                <button type="submit" className="w-full bg-premium-black border border-accent-gold text-premium-white py-2 px-4 hover:bg-graphite transition-colors font-bodoni-regular">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium-black text-premium-white py-8 border-t border-accent-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bodoni-regular">Musée Abderrahman Slaoui</h2>
              <p className="text-soft-white text-sm mt-1">Un patrimoine artistique et culturel marocain d'exception</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-soft-white hover:text-premium-white hover:border-b hover:border-accent-gold transition-colors">Instagram</a>
              <a href="#" className="text-soft-white hover:text-premium-white hover:border-b hover:border-accent-gold transition-colors">Twitter</a>
              <a href="#" className="text-soft-white hover:text-premium-white hover:border-b hover:border-accent-gold transition-colors">Facebook</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-graphite text-center text-soft-white text-sm">
            &copy; {new Date().getFullYear()} Fondation Musée Abderrahman Slaoui. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
