import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Target,
    title: '精准定位',
    description: '聚焦AI普及爆发期，精准把握市场机遇',
  },
  {
    icon: Users,
    title: '矩阵运营',
    description: '全员视频号直播，互相引流推广',
  },
  {
    icon: Lightbulb,
    title: '实战导向',
    description: '娱乐炫技、工作提效、AI变现三大方向',
  },
  {
    icon: Rocket,
    title: '私域深耕',
    description: '双机器人维护，持续高阶转化',
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(30% at 50% 50%)', scale: 1.2 },
        {
          clipPath: 'inset(0% round 20px)',
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
      if (featureCards) {
        gsap.fromTo(
          featureCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden cloud-pattern"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden gold-border-glow"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="AI兜工作室团队协作"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-palace-deep/60 via-transparent to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 glass-red rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-bright flex items-center justify-center">
                  <span className="text-palace-deep font-bold">AI</span>
                </div>
                <div>
                  <div className="text-cream font-semibold">AI兜工作室</div>
                  <div className="text-cream/60 text-sm">成立于2024年</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm text-gold">关于我们</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6 leading-tight">
              借势2026年
              <span className="gold-text gold-glow"> AI普及爆发期</span>
            </h2>

            <div className="space-y-4 text-cream/70 leading-relaxed mb-8">
              <p>
                AI兜工作室是一家专注于AI应用创新的数字工作室。我们的核心战略是通过直播矩阵将公域流量导入私域，
                以低客单价实物产品筛选精准用户，并在节后进行高客单价转化。
              </p>
              <p>
                我们的实操手册和训练营主要解决三类用户痛点：娱乐炫技型AI技能、工作学习提效型、AI变现型。
                无论你是想玩转AI炫技，还是提升工作效率，亦或是探索AI变现之路，我们都有适合你的内容。
              </p>
              <p>
                私域交流群配备双机器人维护：客服型机器人及时整理回复用户提问，气氛组机器人每天定时发起AI热点话题，
                引发群内热度讨论。
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-bright transition-colors group"
            >
              <span className="font-medium">加入我们</span>
              <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card group p-6 rounded-2xl bg-palace-deep/50 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-cream mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-cream/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
