const siteConfig = {
  brandName: "Oráculo Lunar",
  whatsappNumber: "5599999999999",
  whatsappMessage: "Olá! Quero agendar uma leitura de tarot e entender qual opção combina com meu momento.",
  heroTitle: "Receba clareza para decidir com mais calma e confiança.",
  heroDescription:
    "Uma leitura de tarot acolhedora para transformar dúvidas em reflexão, enxergar possibilidades com mais lucidez e sair com direcionamentos práticos para o seu momento.",
  aboutTitle: "Um encontro para escutar o que sua intuição já tenta dizer.",
  aboutText:
    "O tarot é conduzido como uma ferramenta simbólica de reflexão: ele ajuda a organizar emoções, perceber padrões e abrir novas formas de olhar para uma situação. A leitura não promete certezas absolutas sobre o futuro; ela oferece presença, profundidade e perguntas certas para você escolher seus próximos passos com mais consciência.",
  testimonialText:
    "Cheguei confusa e saí com uma sensação enorme de alívio. A leitura foi delicada, direta e me ajudou a entender o que eu precisava priorizar naquele momento.",
  testimonialAuthor: "— Marina S.",
  ctaTitle: "Se uma pergunta está insistindo em você, talvez seja hora de olhar para ela com mais cuidado.",
  ctaText:
    "Me chame no WhatsApp para escolher a leitura ideal e reservar seu horário. O atendimento é acolhedor, confidencial e pensado para o seu momento.",
  readings: [
    {
      icon: "☾",
      title: "Leitura Essencial",
      description:
        "Ideal para quem tem uma pergunta específica e quer clareza sem rodeios. Uma leitura objetiva para entender o cenário, as possibilidades e um próximo passo mais consciente.",
      price: "R$ 80",
    },
    {
      icon: "✦",
      title: "Caminhos do Amor",
      description:
        "Para relações, dúvidas afetivas e padrões emocionais. Um olhar cuidadoso para compreender sentimentos, limites e escolhas sem perder sua autonomia.",
      price: "R$ 120",
    },
    {
      icon: "✧",
      title: "Mapa do Momento",
      description:
        "Para fases de transição, decisões importantes ou sensação de bloqueio. Uma leitura mais completa para enxergar recursos internos, desafios e caminhos possíveis.",
      price: "R$ 160",
    },
  ],
};

const applyTextConfig = () => {
  document.querySelectorAll("[data-config]").forEach((element) => {
    const key = element.dataset.config;
    if (siteConfig[key]) {
      element.textContent = siteConfig[key];
    }
  });
};

const renderReadings = () => {
  const readingGrid = document.querySelector("#readingGrid");
  if (!readingGrid) return;

  readingGrid.innerHTML = siteConfig.readings
    .map(
      (reading) => `
        <article class="reading-card reveal">
          <div class="reading-icon" aria-hidden="true">${reading.icon}</div>
          <h3>${reading.title}</h3>
          <p>${reading.description}</p>
          <div class="reading-price">${reading.price}</div>
        </article>
      `
    )
    .join("");
};

const applyWhatsappLinks = () => {
  const message = encodeURIComponent(siteConfig.whatsappMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", whatsappUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
};

const setCurrentYear = () => {
  const currentYear = document.querySelector("#currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
};

applyTextConfig();
renderReadings();
applyWhatsappLinks();
setCurrentYear();
