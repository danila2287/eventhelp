import { CheckCircle2, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Сотрудников в базе",
  },
  {
    icon: Award,
    value: "500+",
    label: "Реализованных мероприятий",
  },
  {
    icon: Clock,
    value: "24",
    label: "Часа на подбор персонала",
  },
];

const advantages = [
  "Быстрый подбор квалифицированного персонала",
  "Все сотрудники проходят тщательную проверку",
  "Гарантия качества выполнения работ",
  "Индивидуальный подход к каждому клиенту",
  "Опыт работы на крупных мероприятиях",
  "Гибкая ценовая политика",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">О компании</h2>
          <p className="text-2xl text-primary mb-8">
            Делаем ваши мероприятия безупречными
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl mb-2 text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Advantages */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl mb-8 text-center">Наши преимущества</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
