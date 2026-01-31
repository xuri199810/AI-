import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    id: 1,
    title: '智能客服机器人',
    category: 'AI智能体',
    description: '为电商客户开发的智能客服系统，基于豆包大模型，实现7x24小时自动回复，解决率达85%以上。',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    stats: { users: '10K+', satisfaction: '92%', response: '<3s' },
    tags: ['豆包API', '自然语言处理', '多轮对话'],
  },
  {
    id: 2,
    title: 'AI绘画工作流',
    category: '内容创作',
    description: '为设计团队搭建的AI绘画工作流，从prompt生成到批量出图，效率提升10倍。',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    stats: { users: '5K+', satisfaction: '88%', response: '实时' },
    tags: ['AI绘画', '工作流设计', '批量处理'],
  },
  {
    id: 3,
    title: '直播带货方案',
    category: '直播服务',
    description: '为品牌打造的AI直播解决方案，智能互动+数据分析，单场直播GMV突破百万。',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
    stats: { users: '50K+', satisfaction: '95%', response: '实时' },
    tags: ['直播技术', '数据分析', '互动玩法'],
  },
  {
    id: 4,
    title: '私域运营机器人',
    category: 'AI智能体',
    description: '双机器人协作的私域运营方案，客服+气氛组配合，群活跃度提升300%。',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    stats: { users: '3K+', satisfaction: '90%', response: '<1s' },
    tags: ['微信群机器人', '私域运营', '自动化'],
  },
];

export function CasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        sliderRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden cloud-pattern"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-palace-deep/50 to-transparent" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm text-gold">案例展示</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
              我们的<span className="gold-text gold-glow">成功案例</span>
            </h2>
          </div>
          <p className="text-cream/50 max-w-md">
            从智能客服到直播带货，我们用AI技术为各行各业带来变革
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="relative">
          {/* Main Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="grid lg:grid-cols-2 gap-8 bg-palace-deep/50 rounded-2xl overflow-hidden border border-gold/20">
                    {/* Image */}
                    <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-palace-deep/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gold text-palace-deep text-sm font-medium">
                          {caseItem.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-cream mb-4">
                        {caseItem.title}
                      </h3>
                      <p className="text-cream/60 leading-relaxed mb-6">
                        {caseItem.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {caseItem.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-gold/10 text-gold/80 text-sm border border-gold/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {Object.entries(caseItem.stats).map(([key, value], i) => (
                          <div key={i} className="text-center p-4 rounded-xl bg-gold/5 border border-gold/10">
                            <div className="text-xl lg:text-2xl stat-number mb-1">
                              {value}
                            </div>
                            <div className="text-xs text-cream/40 capitalize">
                              {key === 'users' && '服务用户'}
                              {key === 'satisfaction' && '满意度'}
                              {key === 'response' && '响应时间'}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 text-gold hover:text-gold-bright transition-colors group">
                        <span className="font-medium">查看详情</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-gold'
                      : 'bg-cream/20 hover:bg-cream/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Case Cards Grid - Mobile/Tablet */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-gold/20 border border-gold/50'
                  : 'bg-palace-deep/30 border border-gold/10 hover:border-gold/30'
              }`}
            >
              <div className="text-sm text-gold mb-1">{caseItem.category}</div>
              <div className="text-cream font-medium">{caseItem.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
