import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, Workflow, PenTool, Video, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: Bot,
    title: 'AI智能体开发',
    subtitle: 'Agent Development',
    description: '基于豆包、元宝、通义千问等大模型，开发定制化AI智能体，满足您的专属需求。从概念到落地，全程技术支持。',
    features: ['智能客服机器人', '私域群管理机器人', '个性化AI助手', '自动化工作流'],
    color: '#D4AF37',
  },
  {
    id: 2,
    icon: Workflow,
    title: 'AI工作流设计',
    subtitle: 'Workflow Design',
    description: '设计并优化AI驱动的工作流程，提升团队效率。让AI成为您团队的得力助手，释放创造力。',
    features: ['内容生产流水线', '数据分析自动化', '多平台内容分发', '智能决策支持'],
    color: '#FFD700',
  },
  {
    id: 3,
    icon: PenTool,
    title: '内容创作',
    subtitle: 'Content Creation',
    description: 'AI辅助的内容创作服务，包括文案、设计、视频脚本等。让创作更高效，让灵感源源不断。',
    features: ['AI绘画与设计', '文案生成优化', '视频脚本创作', '多模态内容生成'],
    color: '#F4E4C1',
  },
  {
    id: 4,
    icon: Video,
    title: '直播服务',
    subtitle: 'Live Streaming',
    description: '专业的AI技术直播服务，从策划到执行一站式解决。帮您打造高转化率的直播间。',
    features: ['直播技术支持', '直播间搭建', '互动玩法设计', '数据分析优化'],
    color: '#D4AF37',
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden cloud-pattern"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold">我们的服务</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            全方位<span className="gold-text gold-glow">AI解决方案</span>
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto">
            从AI智能体开发到直播服务，我们提供一站式AI应用解决方案，
            助力您在AI时代抢占先机
          </p>
        </div>

        {/* Accordion Cards - Desktop */}
        <div
          ref={cardsRef}
          className="hidden lg:flex gap-4 h-[500px]"
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'flex-[3]' : 'flex-1'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  background: `linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(139, 0, 0, 0.5) 100%)`,
                  border: `1px solid ${isActive ? service.color + '60' : 'rgba(212, 175, 55, 0.2)'}`,
                }}
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${service.color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    style={{ background: `${service.color}20` }}
                  >
                    <Icon
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title - always visible */}
                  <div className="mb-4">
                    <h3
                      className={`font-bold text-cream transition-all duration-500 ${
                        isActive ? 'text-2xl' : 'text-lg'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-cream/40 text-sm">{service.subtitle}</p>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`flex-1 flex flex-col transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <p className="text-cream/60 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex-1">
                      <p className="text-sm text-cream/40 mb-3">服务内容包括：</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-cream/70"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: service.color }}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className="mt-6 flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: service.color }}
                    >
                      了解详情
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Collapsed indicator */}
                {!isActive && (
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="w-8 h-1 rounded-full mx-auto"
                      style={{ background: `${service.color}40` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-palace-deep/50 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(139, 0, 0, 0.3) 100%)`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${service.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-cream/50 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-gold/10 text-gold/70 border border-gold/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
