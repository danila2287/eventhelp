export default function SimpleApp() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 50,
          padding: "1rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              EH
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              EventHelp
            </span>
          </div>

          <nav style={{ display: "flex", gap: "2rem" }}>
            <a
              href="#services"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Услуги
            </a>
            <a
              href="#projects"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Проекты
            </a>
            <a
              href="#about"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              О нас
            </a>
            <a
              href="#testimonials"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Отзывы
            </a>
            <a
              href="#contact"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(rgba(37, 99, 235, 0.9), rgba(37, 99, 235, 0.7))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1644291833042-1361b57de761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBldmVudCUyMHRlYW18ZW58MXx8fHwxNzYxMTExOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         <div
           style={{
             textAlign: "center",
             color: "white",
             maxWidth: "800px",
             padding: "0 1rem",
             zIndex: 10,
             position: "relative"
           }}
         >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              color: "white"
            }}
          >
            Профессиональный персонал для ваших мероприятий
          </h1>
          <p
            style={{ 
              fontSize: "1.25rem", 
              marginBottom: "2rem", 
              opacity: 0.95,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              color: "white"
            }}
          >
            Быстрый подбор проверенных сотрудников за 24 часа
          </p>
          <button
            style={{
              background: "#f59e0b",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Подобрать персонал →
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ padding: "5rem 0", background: "white", width: "100%" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              Наши услуги
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Предоставляем квалифицированный персонал для любых типов
              мероприятий
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Хелперы",
                desc: "Многофункциональные помощники для любых задач",
              },
              {
                title: "Швейцары",
                desc: "Встреча гостей, создание первого впечатления",
              },
              {
                title: "Хостес",
                desc: "Приветливые администраторы и координаторы",
              },
              {
                title: "Выездной гардероб",
                desc: "Организация гардеробной зоны под ключ",
              },
              {
                title: "Охранники",
                desc: "Обеспечение безопасности мероприятия",
              },
              {
                title: "Кейтеринг персонал",
                desc: "Обслуживание гостей на высшем уровне",
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "2rem",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#1f2937",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#6b7280" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{ padding: "5rem 0", background: "#f8fafc", width: "100%" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              Наши проекты
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Более 500 успешно реализованных мероприятий
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Корпоративная конференция Tech Summit",
                staff: "25 сотрудников",
              },
              { title: "Свадебная церемония", staff: "15 сотрудников" },
              { title: "Бизнес-конференция", staff: "30 сотрудников" },
              { title: "Гала-вечер", staff: "20 сотрудников" },
              { title: "Корпоративное мероприятие", staff: "18 сотрудников" },
              { title: "Презентация продукта", staff: "12 сотрудников" },
            ].map((project, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  background: "white",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    background: "#e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6b7280",
                  }}
                >
                  Изображение проекта
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                      color: "#1f2937",
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      background: "#f59e0b",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    }}
                  >
                    {project.staff}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        style={{ padding: "5rem 0", background: "white", width: "100%" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              Отзывы клиентов
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                name: "Елена Петрова",
                position: "Event-менеджер, АльфаКорп",
                text: "EventHelp помогли организовать корпоративную конференцию на 300 человек. Персонал был на высшем уровне!",
              },
              {
                name: "Михаил Соколов",
                position: "Директор, Премиум События",
                text: "Уже третий год сотрудничаем с EventHelp. Всегда оперативно подбирают квалифицированный персонал.",
              },
              {
                name: "Анна Волкова",
                position: "Свадебный координатор",
                text: "Для свадеб нужен особенно деликатный персонал. EventHelp всегда предоставляют именно таких сотрудников!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "2rem",
                  background: "white",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#2563eb",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: "600", color: "#1f2937" }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ padding: "5rem 0", background: "#f8fafc", width: "100%" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1f2937",
            }}
          >
            Свяжитесь с нами
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6b7280",
              marginBottom: "2rem",
            }}
          >
            Готовы подобрать персонал для вашего мероприятия?
          </p>
          <button
            style={{
              background: "#2563eb",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Связаться с нами
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1f2937",
          color: "white",
          padding: "3rem 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              EH
            </div>
            <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              EventHelp
            </span>
          </div>
          <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
            Профессиональный персонал для ваших мероприятий
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#services"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              Услуги
            </a>
            <a
              href="#projects"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              Проекты
            </a>
            <a
              href="#about"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              О нас
            </a>
            <a
              href="#testimonials"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              Отзывы
            </a>
            <a
              href="#contact"
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
