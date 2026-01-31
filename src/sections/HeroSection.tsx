import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const x = (mousePosition.x / window.innerWidth - 0.5) * 20;
    const y = (mousePosition.y / window.innerHeight - 0.5) * 20;
    
    gsap.to(containerRef.current, {
      rotateY: x * 0.1,
      rotateX: -y * 0.1,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [mousePosition]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { rotateX: 90, opacity: 0, transformOrigin: 'center bottom' },
          { rotateX: 0, opacity: 1, duration: 1.2, stagger: 0.05 },
          0.2
        );
      }

      tl.fromTo(
        subtitleRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1 },
        0.8
      );

      tl.fromTo(
        descRef.current,
        { filter: 'blur(10px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, duration: 0.8 },
        1
      );

      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
        1.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = 'AI普及时代';

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container cloud-pattern"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-palace-red to-palace-deep" />
        
        {/* Animated gold particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #FFD700, #D4AF37)`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
              animation: `float-gold ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-gold/30 rounded-tl-3xl" />
      <div className="absolute top-20 right-10 w-20 h-20 border-r-2 border-t-2 border-gold/30 rounded-tr-3xl" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border-l-2 border-b-2 border-gold/30 rounded-bl-3xl" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-gold/30 rounded-br-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm text-gold-warm">新春特别版 · 豆包AI直播训练营</span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ perspective: '1000px' }}
        >
          {title.split('').map((char, i) => (
            <span
              key={i}
              className="char inline-block gold-text gold-glow"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-gold-warm mb-6 font-light"
        >
          用智能科技，创造无限可能
        </p>

        {/* Description */}
        <p
          ref={descRef}
          className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          我们是一家专注于AI应用创新的数字工作室，致力于让人工智能技术真正服务于生活与商业。
          从豆包AI技术分享到实战训练营，我们陪伴每一位探索者开启智能新时代。
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-gold to-gold-bright text-palace-deep font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-gold-lg hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              探索我们的服务
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-gold animate-pulse-gold" />
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 text-gold font-medium rounded-full border-2 border-gold/50 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            了解更多
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'AI技能板块' },
            { value: '66.88', label: '新春特惠价' },
            { value: '2', label: '阶段战略' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl stat-number mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-cream/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-palace-deep to-transparent" />
    </section>
  );
}
