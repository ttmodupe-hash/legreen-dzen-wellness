import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg text-gradient">LEGREEN DZEN</div>
              <div className="text-[10px] tracking-[3px] text-muted-foreground uppercase">
                Wellness · Soshanguve
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Moshate Gardens, Klipfontein, Molotlegi Rd, Soshanguve · {new Date().getFullYear()}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
          <p className="text-xs text-accent/80 leading-relaxed">
            LeGreen Dzen Corp holds a SAHPRA licence to cultivate cannabis for producing scheduled substances 
            (s22C(1)(b), Medicines and Related Substances Act 1965, issued 21 April 2023, expiring 21 April 2028). 
            LeGreen Dzen is a registered Section 21 approved collection point (Synergy Wellness, UID 25CM002, 
            valid to 14 October 2027). Medicines are dispensed ONLY to patients with a valid Section 21 
            authorization issued by a registered medical practitioner. No products are sold to the general public. 
            18+. This website provides information and facilitates consultations — it does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
