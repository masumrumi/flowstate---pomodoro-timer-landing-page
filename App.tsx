
import React, { useEffect, useState } from 'react';
import { 
  Cloud, 
  Flame, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  LayoutGrid, 
  Activity, 
  Apple, 
  Twitter, 
  Github,
  Monitor,
  Smartphone,
  Tablet,
  Palette,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

// --- Constants ---
const IMAGES = {
  timerDark: './input_file_10.png',
  timerLight: './input_file_3.png',
  plannerDark: './input_file_9.png',
  insightsYearDark: './input_file_6.png',
  insightsMonthDark: './input_file_7.png',
  insightsDayDark: './input_file_8.png',
  settingsDark: './input_file_5.png',
  proDark: './input_file_4.png',
};

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-[#FF5733] rounded-xl flex items-center justify-center font-bold text-white shadow-lg transition-transform group-hover:scale-110">F</div>
          <span className="text-xl font-bold tracking-tight text-white">FlowState</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-400">
          <a href="#features" className="hover:text-[#FF5733] transition-colors">Features</a>
          <a href="#insights" className="hover:text-[#FF5733] transition-colors">Insights</a>
          <a href="#themes" className="hover:text-[#FF5733] transition-colors">Themes</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-white/70 hover:text-white transition-colors">Log In</button>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all shadow-xl active:scale-95">
            Get Pro
          </button>
        </div>
      </div>
    </nav>
  );
};

const AppMockup = ({ src, className = "", scale = 1, isLight = false }: { src: string, className?: string, scale?: number, isLight?: boolean }) => {
  return (
    <div 
      className={`relative rounded-[3.5rem] p-[10px] shadow-2xl overflow-hidden group transition-all duration-700 ${
        isLight ? 'bg-gray-200 ring-1 ring-gray-300' : 'bg-[#1a1a1a] ring-1 ring-white/10'
      } ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-3xl z-30 border border-white/5 flex items-center justify-center overflow-hidden">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-1.5"></div>
        <div className="w-6 h-1 rounded-full bg-white/10"></div>
      </div>
      
      {/* Screen Reflection Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-30"></div>
      
      {/* Screen Container */}
      <div className={`w-full h-full rounded-[2.8rem] overflow-hidden relative ${isLight ? 'bg-white' : 'bg-black'}`}>
        <img 
          src={src} 
          alt="App Preview" 
          className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        {/* Shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none"></div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-[#FF5733]/20 via-transparent to-transparent blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5733] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5733]"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-white/60">Version 2.5 is Live</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
          Achieve Unstoppable<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-[#FF8C33]">
            Flow State.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          The professional Pomodoro timer for Apple enthusiasts. Designed for focus, built for productivity, and refined for the modern workspace.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <button className="w-full sm:w-auto bg-[#FF5733] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#e44d2d] transition-all accent-glow flex items-center justify-center gap-3 group active:scale-95">
            <Apple size={24} fill="currentColor" />
            Download App
          </button>
          <button className="w-full sm:w-auto px-10 py-5 rounded-full text-lg font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            See Pricing <ChevronRight size={18} />
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative h-[500px] md:h-[650px] w-full flex justify-center items-end mt-12 perspective-[2000px]">
          <div className="absolute bottom-0 z-20 transform-gpu translate-y-8 animate-float">
            <AppMockup src={IMAGES.timerDark} className="w-[280px] h-[580px] md:w-[320px] md:h-[680px] shadow-2xl" />
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-[420px] hidden lg:block rotate-[-12deg] z-10 opacity-40 hover:opacity-100 hover:rotate-[-5deg] transition-all duration-700">
            <AppMockup src={IMAGES.plannerDark} className="w-[260px] h-[550px]" />
          </div>
          
          <div className="absolute bottom-12 left-1/2 translate-x-[160px] hidden lg:block rotate-[12deg] z-10 opacity-40 hover:opacity-100 hover:rotate-[5deg] transition-all duration-700">
            <AppMockup src={IMAGES.insightsMonthDark} className="w-[260px] h-[550px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoFeature = ({ icon: Icon, title, desc, className = "", color = "#FF5733" }: any) => (
  <div className={`p-8 rounded-[2.5rem] glass hover:bg-white/[0.08] transition-all group border-t border-white/5 ${className}`}>
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500" style={{ color }}>
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-medium">{desc}</p>
  </div>
);

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Engineered for Focus.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">FlowState isn't just a timer. It's a complete ecosystem designed to optimize your cognitive performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoFeature 
          icon={Lock} 
          title="Strict Mode" 
          desc="The most unbreakable focus mode in the App Store. Disable pauses and app-switching until your timer is finished."
          className="md:col-span-1"
        />
        <div className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] glass group p-8 flex flex-col md:flex-row items-center gap-8 border-t border-white/5">
          <div className="flex-1">
            <div className="w-14 h-14 rounded-2xl bg-[#FF5733]/10 flex items-center justify-center mb-8 text-[#FF5733]">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Focus Armor</h3>
            <p className="text-gray-400 leading-relaxed font-medium">Automatic Shielding. FlowState intelligently detects and suppresses notifications from distracting apps during sessions.</p>
          </div>
          <div className="flex-1 h-full w-full flex justify-center items-center">
            <AppMockup src={IMAGES.settingsDark} className="w-[240px] h-[480px] -mb-32 translate-y-12 rotate-3 group-hover:rotate-0 transition-transform duration-700" />
          </div>
        </div>
        
        <BentoFeature 
          icon={Cloud} 
          title="Universal Sync" 
          desc="Synchronize your work sessions and streaks effortlessly across iPhone, iPad, Mac, and Apple Watch."
          color="#60a5fa"
        />
        <BentoFeature 
          icon={Flame} 
          title="Daily Momentum" 
          desc="Build and maintain focus streaks. Visual feedback keeps you motivated to show up every single day."
          color="#f97316"
        />
        <BentoFeature 
          icon={ShieldCheck} 
          title="Privacy First" 
          desc="No account required. Your data never leaves your device and iCloud storage. Absolute privacy, guaranteed."
          color="#4ade80"
        />
      </div>
    </section>
  );
};

const DataSection = () => {
  return (
    <section id="insights" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #FF5733 0%, transparent 50%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10 hover:scale-105 transition-transform duration-700">
              <AppMockup src={IMAGES.insightsYearDark} className="w-[300px] h-[640px] md:w-[350px] md:h-[750px] mx-auto" />
            </div>
            {/* Decorative Screens */}
            <div className="absolute top-1/2 -left-20 -translate-y-1/2 opacity-20 hidden md:block">
              <AppMockup src={IMAGES.insightsDayDark} className="w-[200px] h-[450px]" />
            </div>
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-20 hidden md:block">
              <AppMockup src={IMAGES.insightsMonthDark} className="w-[200px] h-[450px]" />
            </div>
          </div>
          
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              Advanced Metrics
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">Master your<br />Time Data.</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              Every second is a data point. Our intuitive visualizations help you understand your productivity rhythms with surgical precision.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg Session', value: '26m', color: '#FF5733' },
                { label: 'Completed', value: '842', color: '#60a5fa' },
                { label: 'Total Flow', value: '382h', color: '#f59e0b' },
                { label: 'Streak', value: '14d', color: '#10b981' }
              ].map((stat, i) => (
                <div key={i} className="glass p-6 rounded-3xl border-t border-white/5">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ThemeSwitcher = () => {
  return (
    <section id="themes" className="py-32 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight">Elegance in Every Pixel.</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        <div className="space-y-8 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <AppMockup src={IMAGES.timerLight} className="w-[280px] h-[600px] shadow-2xl scale-100 group-hover:scale-105" isLight={true} />
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest mb-4">Canvas White</span>
            <p className="text-gray-500 font-medium">Pristine clarity for morning work.</p>
          </div>
        </div>

        <div className="space-y-8 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF5733]/20 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <AppMockup src={IMAGES.timerDark} className="w-[280px] h-[600px] shadow-2xl scale-100 group-hover:scale-105" />
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF5733] text-white font-black text-xs uppercase tracking-widest mb-4">Obsidian Dark</span>
            <p className="text-gray-500 font-medium">Stealth performance for late-night flow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      {/* Call to Action Card */}
      <div id="download" className="glass rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden mb-32 border border-white/10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5733]/20 blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] -z-10"></div>
        
        <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[1.0] tracking-tighter">Ready to enter<br />your zone?</h2>
        <div className="flex flex-col items-center gap-12">
          <button className="bg-white text-black px-12 py-6 rounded-full text-2xl font-black hover:bg-gray-200 transition-all shadow-2xl active:scale-95 flex items-center gap-4">
            <Apple size={36} fill="currentColor" />
            Get Started Free
          </button>
          
          <div className="flex gap-12 items-center text-gray-500">
            {[Smartphone, Tablet, Monitor].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Icon size={32} />
                <span className="text-[10px] font-black uppercase tracking-widest">{Icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-16 gap-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF5733] rounded-xl flex items-center justify-center font-black text-white shadow-lg text-lg">F</div>
          <span className="text-2xl font-black tracking-tight text-white">FlowState</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-gray-500 tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>

        <div className="flex gap-6 text-gray-500">
          <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Twitter size={22} /></a>
          <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Github size={22} /></a>
        </div>
      </div>
      
      <p className="text-center text-gray-700 text-xs font-bold mt-16 tracking-widest uppercase">
        © 2026 FlowState Productivity Lab. Built with passion in California.
      </p>
    </footer>
  );
};

// --- App Root ---

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FF5733] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <DataSection />
        <ThemeSwitcher />
      </main>
      <Footer />
      
      {/* Global CSS Inject */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

export default App;
