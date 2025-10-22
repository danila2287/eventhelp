import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1644291833042-1361b57de761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBldmVudCUyMHRlYW18ZW58MXx8fHwxNzYxMTExOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional event team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
          Профессиональный персонал для ваших мероприятий
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
          Быстрый подбор проверенных сотрудников за 24 часа
        </p>
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-6 gap-2"
        >
          Подобрать персонал
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
