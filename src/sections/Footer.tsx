import { Sparkles } from 'lucide-react';

const footerLinks = {
  navigation: [
    { label: '首页', href: '#hero' },
    { label: '关于我们', href: '#about' },
    { label: '服务', href: '#services' },
    { label: '案例', href: '#cases' },
    { label: '联系我们', href: '#contact' },
  ],
  services: [
    { label: 'AI智能体开发', href: '#services' },
    { label: 'AI工作流设计', href: '#services' },
    { label: '内容创作', href: '#services' },
    { label: '直播服务', href: '#services' },
  ],
  legal: [
    { label: '隐私政策', href: '#' },
    { label: '服务条款', href: '#' },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-palace-deep border-t border-gold/20">
      {/* Gold divider */}
      <div className="gold-divider" />
      
      {/* Main Footer */}
      <div className="section-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-bright flex items-center justify-center shadow-gold">
                <Sparkles className="w-5 h-5 text-palace-deep" />
              </div>
              <span className="text-cream font-semibold text-xl">
                AI兜工作室
              </span>
            </a>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              专注AI应用创新，让人工智能技术真正服务于生活与商业。
              从豆包AI技术分享到实战训练营，陪伴每一位探索者开启智能新时代。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', 'Bilibili'].map((platform, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold/60 hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-gold/20"
                >
                  <span className="text-xs">{platform[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream font-semibold mb-6">导航</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-semibold mb-6">服务</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold mb-6">联系方式</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-cream/50">
                <span className="text-cream/30">地址：</span>
                中国 · 深圳
              </li>
              <li className="text-cream/50">
                <span className="text-cream/30">电话：</span>
                +86 400-XXX-XXXX
              </li>
              <li className="text-cream/50">
                <span className="text-cream/30">邮箱：</span>
                hello@aidou.studio
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-cream/30 text-sm mb-3">订阅我们的动态</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="您的邮箱"
                  className="flex-1 px-4 py-2 rounded-lg bg-gold/5 border border-gold/20 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-gold to-gold-bright text-palace-deep text-sm font-semibold hover:shadow-gold transition-all">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="section-padding max-w-7xl mx-auto py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/30 text-sm">
              © 2024 AI兜工作室. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-cream/30 hover:text-cream/60 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
