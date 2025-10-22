import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Елена Петрова",
    position: "Event-менеджер, АльфаКорп",
    rating: 5,
    text: "EventHelp помогли организовать корпоративную конференцию на 300 человек. Персонал был на высшем уровне - профессиональный, пунктуальный и внимательный к деталям.",
    avatar: "ЕП",
  },
  {
    name: "Михаил Соколов",
    position: "Директор, Премиум События",
    rating: 5,
    text: "Уже третий год сотрудничаем с EventHelp. Всегда оперативно подбирают квалифицированный персонал. Особенно ценим индивидуальный подход и гибкость.",
    avatar: "МС",
  },
  {
    name: "Анна Волкова",
    position: "Свадебный координатор",
    rating: 5,
    text: "Для свадеб нужен особенно деликатный и внимательный персонал. EventHelp всегда предоставляют именно таких сотрудников. Рекомендую всем своим клиентам!",
    avatar: "АВ",
  },
  {
    name: "Дмитрий Новиков",
    position: "CEO, TechStart",
    rating: 5,
    text: "Организовывали презентацию нового продукта. Персонал от EventHelp работал как единая команда с нашими сотрудниками. Мероприятие прошло идеально!",
    avatar: "ДН",
  },
  {
    name: "Ольга Кузнецова",
    position: "Маркетинг-директор",
    rating: 5,
    text: "Быстрый подбор персонала - это то, что нам было нужно. За сутки нам подобрали 20 сотрудников для выставки. Все прошло отлично!",
    avatar: "ОК",
  },
  {
    name: "Сергей Иванов",
    position: "Организатор мероприятий",
    rating: 5,
    text: "Профессионализм и надежность - главные качества EventHelp. Работаем вместе уже больше года и планируем продолжать сотрудничество.",
    avatar: "СИ",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
