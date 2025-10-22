import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white">EH</span>
          </div>
          <span className="text-xl text-primary">EventHelp</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
            Услуги
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
            Проекты
          </button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
            О нас
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
            Отзывы
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
            Контакты
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
            Связаться
          </Button>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
