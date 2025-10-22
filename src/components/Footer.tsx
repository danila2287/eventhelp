import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span>EH</span>
              </div>
              <span className="text-xl">EventHelp</span>
            </div>
            <p className="text-white/70">
              Профессиональный персонал для ваших мероприятий
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/70">
              <li>Хелперы</li>
              <li>Швейцары</li>
              <li>Хостес</li>
              <li>Выездной гардероб</li>
              <li>Охранники</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span>info@eventhelp.ru</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>© {currentYear} EventHelp. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
