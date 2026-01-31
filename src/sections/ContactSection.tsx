import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    label: '地址',
    value: '中国 · 深圳',
  },
  {
    icon: Phone,
    label: '电话',
    value: '+86 400-XXX-XXXX',
  },
  {
    icon: Mail,
    label: '邮箱',
    value: 'hello@aidou.studio',
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden cloud-pattern"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold">联系我们</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            开始<span className="gold-text gold-glow">对话</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            无论您有任何问题或合作意向，我们都期待与您交流
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? '-top-2 text-xs text-gold bg-palace-deep px-1'
                      : 'top-4 text-cream/40'
                  }`}
                >
                  您的姓名
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full h-14 bg-palace-deep/50 border-gold/30 rounded-xl text-cream focus:border-gold focus:ring-gold/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? '-top-2 text-xs text-gold bg-palace-deep px-1'
                      : 'top-4 text-cream/40'
                  }`}
                >
                  电子邮箱
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full h-14 bg-palace-deep/50 border-gold/30 rounded-xl text-cream focus:border-gold focus:ring-gold/20 transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'message' || formData.message
                    ? '-top-2 text-xs text-gold bg-palace-deep px-1'
                    : 'top-4 text-cream/40'
                }`}
              >
                您的留言
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className="w-full bg-palace-deep/50 border-gold/30 rounded-xl text-cream focus:border-gold focus:ring-gold/20 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full sm:w-auto px-8 py-6 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden ${
                isSubmitted
                  ? 'bg-green-500 hover:bg-green-500'
                  : 'bg-gradient-to-r from-gold to-gold-bright text-palace-deep'
              }`}
            >
              <span
                className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    发送成功
                  </>
                ) : (
                  <>
                    发送消息
                    <Send className="w-4 h-4" />
                  </>
                )}
              </span>
              {isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-palace-deep/30 border-t-palace-deep rounded-full animate-spin" />
                </span>
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-2xl bg-palace-deep/50 border border-gold/20">
              <h3 className="text-xl font-semibold text-cream mb-6">
                联系方式
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-cream/40 mb-1">
                        {item.label}
                      </div>
                      <div className="text-cream">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-palace-deep/50 border border-gold/20">
              <h3 className="text-xl font-semibold text-cream mb-6">
                关注我们
              </h3>
              <div className="flex gap-4">
                {['微信', '微博', 'Bilibili'].map((platform, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 rounded-lg bg-gold/10 text-gold/70 hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-gold/20"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/30">
              <h3 className="text-xl font-semibold text-cream mb-4">
                工作时间
              </h3>
              <div className="space-y-2 text-cream/60">
                <div className="flex justify-between">
                  <span>周一至周五</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>周六</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>周日</span>
                  <span>休息</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
