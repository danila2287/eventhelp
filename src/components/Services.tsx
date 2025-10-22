import { Users, DoorOpen, Sparkles, Shirt, Shield, Coffee } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Users,
    title: "Хелперы",
    description: "Многофункциональные помощники для любых задач",
  },
  {
    icon: DoorOpen,
    title: "Швейцары",
    description: "Встреча гостей, создание первого впечатления",
  },
  {
    icon: Sparkles,
    title: "Хостес",
    description: "Приветливые администраторы и координаторы",
  },
  {
    icon: Shirt,
    title: "Выездной гардероб",
    description: "Организация гардеробной зоны под ключ",
  },
  {
    icon: Shield,
    title: "Охранники",
    description: "Обеспечение безопасности мероприятия",
  },
  {
    icon: Coffee,
    title: "Кейтеринг персонал",
    description: "Обслуживание гостей на высшем уровне",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Предоставляем квалифицированный персонал для любых типов мероприятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
