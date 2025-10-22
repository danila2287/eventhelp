import { useState } from "react";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const projects = [
  {
    id: 1,
    title: "Корпоративная конференция Tech Summit",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYxMDc3MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    staff: "25 сотрудников",
  },
  {
    id: 2,
    title: "Свадебная церемония",
    type: "wedding",
    image: "https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjEwMzQ2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    staff: "15 сотрудников",
  },
  {
    id: 3,
    title: "Бизнес-конференция",
    type: "conference",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYxMDE3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    staff: "30 сотрудников",
  },
  {
    id: 4,
    title: "Гала-вечер",
    type: "gala",
    image: "https://images.unsplash.com/photo-1670529776258-aed0041eb4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxhJTIwZXZlbnR8ZW58MXx8fHwxNzYxMTMwMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    staff: "20 сотрудников",
  },
  {
    id: 5,
    title: "Корпоративное мероприятие",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYxMDc3MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    staff: "18 сотрудников",
  },
  {
    id: 6,
    title: "Презентация продукта",
    type: "conference",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYxMDE3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    staff: "12 сотрудников",
  },
];

const categories = [
  { value: "all", label: "Все" },
  { value: "corporate", label: "Корпоративные" },
  { value: "wedding", label: "Свадьбы" },
  { value: "conference", label: "Конференции" },
  { value: "gala", label: "Гала-вечера" },
];

export function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Наши проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 успешно реализованных мероприятий
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs value={filter} onValueChange={setFilter} className="w-full max-w-3xl">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <Badge className="self-start bg-accent">{project.staff}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
