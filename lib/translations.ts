export type Locale = 'et' | 'en' | 'ru';

type Dict = {
  brand: string;
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    faq: string;
    contact: string;
    callback: string;
  };
  common: {
    requestCallback: string;
    learnMore: string;
    viewGallery: string;
    ourServices: string;
    freeQuote: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsLabel0: string;
    statsLabel1: string;
    statsLabel2: string;
    statsLabel3: string;
    introTitle: string;
    introBody: string;
    benefits: string[];
    advantagesTitle: string;
    advantages: { title: string; body: string }[];
    typesTitle: string;
    ctaBannerTitle: string;
    ctaBannerBody: string;
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  gallery: { title: string; intro: string; placeholder: string };
  about: {
    title: string;
    paragraphs: string[];
    valuesTitle: string;
    values: { title: string; body: string }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  callback: {
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    timeLabel: string;
    timeNow: string;
    timeMorning: string;
    timeAfternoon: string;
    timeEvening: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    privacy: string;
  };
  contact: {
    title: string;
    intro: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    copyright: string;
  };
};

export const translations: Record<Locale, Dict> = {
  et: {
    brand: 'Pinglagi',
    nav: {
      home: 'Avaleht',
      services: 'Teenused',
      gallery: 'Galerii',
      about: 'Meist',
      faq: 'KKK',
      contact: 'Kontakt',
      callback: 'Telli kõne',
    },
    common: {
      requestCallback: 'Telli tagasihelistamine',
      learnMore: 'Loe lähemalt',
      viewGallery: 'Vaata galeriid',
      ourServices: 'Meie teenused',
      freeQuote: 'Tasuta mõõdistamine',
    },
    home: {
      heroEyebrow: 'MODERNSED LAELAHENDUSED',
      heroTitle: 'Pinglaed, mis kestavad aastakümneid',
      heroSubtitle:
        'Professionaalne paigaldus, kvaliteetsed Euroopa materjalid ja 12-aastane kirjalik garantii.',
      ctaPrimary: 'Telli tasuta kõne',
      ctaSecondary: 'Vaata töid',
      statsLabel0: 'Tasuta konsultatsioon',
      statsLabel1: 'Leiame teie ruumile sobivaima lahenduse',
      statsLabel2: 'paigaldatud objekti',
      statsLabel3: 'aastat garantiid',
      introTitle: 'Mis on pinglagi?',
      introBody:
        'Pinglagi on kaasaegne laelahendus, mis kombineerib esteetika ja vastupidavuse. Õhuke PVC- või kangast valmistatud kile pingutatakse spetsiaalse alumiiniumprofiili sisse, varjates kõik laetaseme ebatasasused ühe tööpäevaga – ilma tolmu ja koristamiseta.',
      benefits: ['1 päev', '12 a. garantii', 'Tolmuvaba', 'EU sertifikaat'],
      advantagesTitle: 'Miks valida Pinglagi?',
      advantages: [
        {
          title: '12 aastat garantiid',
          body: 'Anname kirjaliku garantii nii materjalile kui ka paigaldusele.',
        },
        {
          title: 'Üks päev paigaldust',
          body: 'Enamik töid valmib ühe tööpäeva jooksul, mööblit pole vaja välja viia.',
        },
        {
          title: 'Veekindel',
          body: 'Peab vastu kuni 100 liitrit vett ruutmeetril – kaitseb naabri lekete eest.',
        },
        {
          title: 'Sertifitseeritud materjalid',
          body: 'Kasutame ainult Saksa ja Prantsuse päritolu kilesid.',
        },
      ],
      typesTitle: 'Pinglae tüübid',
      ctaBannerTitle: 'Valmis alustama?',
      ctaBannerBody:
        'Tasuta mõõdistamine ja siduv hinnapakkumine sinu kodus 24 tunni jooksul.',
    },
    services: {
      title: 'Meie teenused',
      intro:
        'Pakume kogu pinglagede valikut – alates klassikalisest mattlaest kuni keerukate mitmetasandiliste lahendusteni integreeritud valgustusega.',
      items: [
        {
          title: 'Mattlagi',
          body: 'Klassikaline ja diskreetne. Peegeldused on minimaalsed, sobib hästi igasse ruumi.',
        },
        {
          title: 'Läikiv lagi',
          body: 'Suurendab visuaalselt ruumi ja peegeldab valgust. Sobib madalatele lagedele.',
        },
        {
          title: 'Satiinlagi',
          body: 'Pehme läige, mis ühendab matt- ja läikiva lae parimad omadused.',
        },
        {
          title: 'Fototrükk',
          body: 'Sinu kujundus laes – maastik, tähistaevas või kunstiteos.',
        },
        {
          title: 'Valgustusega lagi',
          body: 'Integreeritud LED-valgustus, peidetud valguslindid ja tähistaeva efektid.',
        },
        {
          title: 'Mitmetasandiline lagi',
          body: 'Keerukad kujundid mitmes tasandis ja toonis.',
        },
      ],
    },
    gallery: {
      title: 'Meie tööd',
      intro:
        'Valik viimaste aastate projekte – kortermajades, eramutes ja ärihoonetes üle Eesti.',
      placeholder: 'Projekt',
    },
    about: {
      title: 'Meist',
      paragraphs: [
        'Pinglagi on sertifitseeritud pinglagede paigaldajate meeskond, kes pakub kvaliteetseid laelahendusi üle Eesti.',
        'Töötame ainult sertifitseeritud Euroopa materjalidega ning pöörame tähelepanu igale detailile, et tagada kvaliteetne ja vastupidav tulemus.',
        'Meie eesmärk on luua pinglaed, mis ühendavad esteetika, vastupidavuse ja laitmatu viimistluse.',
      ],
      valuesTitle: 'Meie põhimõtted',
      values: [
        {
          title: 'Kvaliteet',
          body: 'Ei tee järeleandmisi materjalides ega paigalduses.',
        },
        {
          title: 'Ausus',
          body: 'Selge hind, kirjalik garantii, ilma varjatud kuludeta.',
        },
        {
          title: 'Sertifikaadid',
          body: 'Sertifitseeritud paigaldajad ja Euroopa kvaliteetmaterjalid.',
        },
      ],
    },
    faq: {
      title: 'Korduma kippuvad küsimused',
      items: [
        {
          q: 'Kui kaua paigaldamine kestab?',
          a: 'Tavaliselt 4-6 tundi 20 m² ruumi kohta. Suuremad projektid valmivad 1-2 tööpäevaga.',
        },
        {
          q: 'Kas paigaldus jätab tolmu maha?',
          a: 'Ei. Pinglae paigaldamine on praktiliselt tolmuvaba – mööblit ei ole vaja välja viia.',
        },
        {
          q: 'Kas pinglagi talub vett ülevalt?',
          a: 'Jah, peab vastu kuni 100 liitrit vett ruutmeetri kohta. Pärast tühjendamist taastab lagi oma esialgse kuju.',
        },
        {
          q: 'Milline on garantii?',
          a: 'Anname kirjaliku 12-aastase garantii nii materjalile kui paigaldusele.',
        },
        {
          q: 'Kas saan ise valida valgustuse?',
          a: 'Jah, paigaldame nii süvistatud LED-valgustid, tähistaeva efektid kui ka peidetud valguslindid.',
        },
        {
          q: 'Kui palju maksab pinglagi?',
          a: 'Hind sõltub ruumi suurusest, materjalist ja valgustusest. Tasuta mõõdistamise käigus anname täpse pakkumise.',
        },
      ],
    },
    callback: {
      title: 'Telli tagasihelistamine',
      intro:
        'Jäta oma telefoninumber ja me helistame tagasi 30 minuti jooksul tööpäeviti 9-18.',
      nameLabel: 'Sinu nimi',
      namePlaceholder: 'Jaan Tamm',
      phoneLabel: 'Telefoninumber',
      phonePlaceholder: '+372 5xxx xxxx',
      timeLabel: 'Sobiv aeg helistamiseks',
      timeNow: 'Niipea kui võimalik',
      timeMorning: 'Hommikul (9-12)',
      timeAfternoon: 'Pärastlõunal (12-15)',
      timeEvening: 'Õhtul (15-18)',
      messageLabel: 'Sõnum (vabatahtlik)',
      messagePlaceholder: 'Ruumi suurus, soovid, muu info...',
      submit: 'Telli kõne',
      success: 'Aitäh! Helistame tagasi peagi.',
      privacy: 'Meie ei jaga teie andmeid kolmandate osapooltega.',
    },
    contact: {
      title: 'Võta meiega ühendust',
      intro:
        'Kirjuta meile või broneeri tagasihelistamine endale sobival ajal – vastame päringutele esimesel võimalusel.',
      phoneLabel: 'Telefon',
      phone: '+37258051866',
      emailLabel: 'E-post',
      email: 'info@pinglagi.eu',
      hoursLabel: 'Tööaeg',
      hours: 'E-R 9:00 - 18:00',
    },
    footer: {
      tagline: 'Kvaliteetsed pinglaed üle Eesti.',
      navTitle: 'Lehed',
      contactTitle: 'Kontakt',
      copyright: '© 2026 Pinglagi OÜ. Kõik õigused kaitstud.',
    },
  },
  en: {
    brand: 'Pinglagi',
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      callback: 'Request a call',
    },
    common: {
      requestCallback: 'Request a callback',
      learnMore: 'Learn more',
      viewGallery: 'View gallery',
      ourServices: 'Our services',
      freeQuote: 'Free measurement',
    },
    home: {
      heroEyebrow: 'Stretch ceilings in Estonia since 2010',
      heroTitle: 'Stretch ceilings that last for decades',
      heroSubtitle:
        'Professional installation, certified European materials, 12-year written warranty. Free on-site measurement anywhere in Estonia.',
      ctaPrimary: 'Request a free call',
      ctaSecondary: 'See our work',
      statsLabel0: 'years of experience',
      statsLabel1: 'years of experience',
      statsLabel2: 'installed projects',
      statsLabel3: 'years warranty',
      introTitle: 'What is a stretch ceiling?',
      introBody:
        'A stretch ceiling is a modern ceiling solution that combines aesthetics with durability. A thin PVC or fabric membrane is tensioned into a special aluminium profile, hiding all ceiling imperfections in a single working day – without dust or cleanup.',
      benefits: ['One day', '12-year warranty', 'Dust-free', 'EU certificate'],
      advantagesTitle: 'Why choose Pinglagi?',
      advantages: [
        {
          title: '12-year warranty',
          body: 'Written guarantee on both material and installation.',
        },
        {
          title: 'One day install',
          body: 'Most projects finish in a single working day – no need to move furniture.',
        },
        {
          title: 'Waterproof',
          body: 'Holds up to 100 litres of water per square metre – protects from upstairs leaks.',
        },
        {
          title: 'Certified materials',
          body: 'We use only certified membranes from Germany and France.',
        },
      ],
      typesTitle: 'Ceiling types',
      ctaBannerTitle: 'Ready to start?',
      ctaBannerBody:
        'Free measurement and binding quote at your home within 24 hours.',
    },
    services: {
      title: 'Our services',
      intro:
        'We offer the full range of stretch ceilings – from classic matte to complex multi-level designs with integrated lighting.',
      items: [
        {
          title: 'Matte ceiling',
          body: 'Classic and discreet. Minimal reflections – fits any room.',
        },
        {
          title: 'Glossy ceiling',
          body: 'Visually enlarges the room and reflects light. Great for low ceilings.',
        },
        {
          title: 'Satin ceiling',
          body: 'Soft sheen combining the best of matte and glossy finishes.',
        },
        {
          title: 'Photo print',
          body: 'Your design on the ceiling – landscape, starry sky or artwork.',
        },
        {
          title: 'Lit ceiling',
          body: 'Integrated LED lighting, hidden light strips, and starry-sky effects.',
        },
        {
          title: 'Multi-level ceiling',
          body: 'Complex designs across multiple levels and tones.',
        },
      ],
    },
    gallery: {
      title: 'Our work',
      intro:
        'A selection of recent projects – apartments, private homes and commercial buildings across Estonia.',
      placeholder: 'Project',
    },
    about: {
      title: 'About us',
      paragraphs: [
        'Pinglagi is an Estonian family-run business with over 15 years of experience installing stretch ceilings across Estonia and Scandinavia.',
        'We work only with certified materials from Germany and France. Every project is led by an experienced foreman responsible for the result from start to finish.',
        'Our goal is for every customer to receive a product that lasts decades and looks as good as on installation day.',
      ],
      valuesTitle: 'Our principles',
      values: [
        {
          title: 'Quality',
          body: 'No compromises on materials or installation.',
        },
        {
          title: 'Honesty',
          body: 'Clear pricing, written warranty, no hidden costs.',
        },
        {
          title: 'Experience',
          body: 'Over 15 years and thousands of installed projects.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How long does installation take?',
          a: 'Usually 4-6 hours for a 20 m² room. Larger projects finish in 1-2 working days.',
        },
        {
          q: 'Does installation leave dust?',
          a: "No. The installation is virtually dust-free – you don't need to move furniture.",
        },
        {
          q: 'Can a stretch ceiling handle water from above?',
          a: 'Yes, it holds up to 100 litres per square metre. After draining, it returns to its original shape.',
        },
        {
          q: "What's the warranty?",
          a: 'A written 12-year warranty on both material and installation.',
        },
        {
          q: 'Can I choose my own lighting?',
          a: 'Yes – recessed LEDs, starry-sky effects, and hidden light strips are all available.',
        },
        {
          q: 'How much does it cost?',
          a: 'Price depends on room size, material and lighting. We give a precise quote during the free measurement.',
        },
      ],
    },
    callback: {
      title: 'Request a callback',
      intro:
        "Leave your phone number and we'll call you back within 30 minutes (weekdays 9-18).",
      nameLabel: 'Your name',
      namePlaceholder: 'John Smith',
      phoneLabel: 'Phone number',
      phonePlaceholder: '+372 5xxx xxxx',
      timeLabel: 'Preferred time',
      timeNow: 'As soon as possible',
      timeMorning: 'Morning (9-12)',
      timeAfternoon: 'Afternoon (12-15)',
      timeEvening: 'Evening (15-18)',
      messageLabel: 'Message (optional)',
      messagePlaceholder: 'Room size, preferences, other info...',
      submit: 'Request call',
      success: "Thank you! We'll call you back shortly.",
      privacy: 'We do not share your data with third parties.',
    },
    contact: {
      title: 'Get in touch',
      intro:
        'Visit our office, call or write – we reply within an hour on working days.',
      phoneLabel: 'Phone',
      phone: '+37258051866',
      emailLabel: 'Email',
      email: 'info@pinglagi.eu',
      hoursLabel: 'Hours',
      hours: 'Mon-Fri 9:00 - 18:00',
    },
    footer: {
      tagline: 'Quality stretch ceilings across Estonia.',
      navTitle: 'Pages',
      contactTitle: 'Contact',
      copyright: '© 2026 Pinglagi OÜ. All rights reserved.',
    },
  },
  ru: {
    brand: 'Pinglagi',
    nav: {
      home: 'Главная',
      services: 'Услуги',
      gallery: 'Галерея',
      about: 'О нас',
      faq: 'Вопросы',
      contact: 'Контакты',
      callback: 'Заказать звонок',
    },
    common: {
      requestCallback: 'Заказать обратный звонок',
      learnMore: 'Подробнее',
      viewGallery: 'Смотреть галерею',
      ourServices: 'Наши услуги',
      freeQuote: 'Бесплатный замер',
    },
    home: {
      heroEyebrow: 'Натяжные потолки в Эстонии с 2010 года',
      heroTitle: 'Натяжные потолки, которые служат десятилетиями',
      heroSubtitle:
        'Профессиональный монтаж, сертифицированные европейские материалы, письменная гарантия 12 лет. Бесплатный замер по всей Эстонии.',
      ctaPrimary: 'Заказать бесплатный звонок',
      ctaSecondary: 'Смотреть работы',
      statsLabel0: 'лет опыта',
      statsLabel1: 'лет опыта',
      statsLabel2: 'выполненных объектов',
      statsLabel3: 'лет гарантии',
      introTitle: 'Что такое натяжной потолок?',
      introBody:
        'Натяжной потолок – современное решение, сочетающее эстетику и долговечность. Тонкая ПВХ- или тканевая плёнка натягивается в специальный алюминиевый профиль, скрывая все неровности потолка за один рабочий день – без пыли и уборки.',
      benefits: ['1 день', '12 лет гарантии', 'Без пыли', 'Сертификат ЕС'],
      advantagesTitle: 'Почему Pinglagi?',
      advantages: [
        {
          title: 'Гарантия 12 лет',
          body: 'Письменная гарантия на материал и монтаж.',
        },
        {
          title: 'Монтаж за день',
          body: 'Большинство работ – за один рабочий день, мебель выносить не нужно.',
        },
        {
          title: 'Водонепроницаемость',
          body: 'Выдерживает до 100 литров воды на квадратный метр – защита от протечек сверху.',
        },
        {
          title: 'Сертифицированные материалы',
          body: 'Используем только плёнки из Германии и Франции.',
        },
      ],
      typesTitle: 'Типы потолков',
      ctaBannerTitle: 'Готовы начать?',
      ctaBannerBody:
        'Бесплатный замер и точное предложение у вас дома в течение 24 часов.',
    },
    services: {
      title: 'Наши услуги',
      intro:
        'Весь спектр натяжных потолков – от классического матового до сложных многоуровневых конструкций с подсветкой.',
      items: [
        {
          title: 'Матовый потолок',
          body: 'Классика, минимум бликов. Подходит для любой комнаты.',
        },
        {
          title: 'Глянцевый потолок',
          body: 'Визуально увеличивает помещение, отражает свет. Подходит для низких потолков.',
        },
        {
          title: 'Сатиновый потолок',
          body: 'Мягкий блеск, объединяющий лучшее матового и глянца.',
        },
        {
          title: 'Фотопечать',
          body: 'Ваш дизайн на потолке – пейзаж, звёздное небо или картина.',
        },
        {
          title: 'Потолок с подсветкой',
          body: 'Встроенные LED-светильники, скрытая подсветка, эффект звёздного неба.',
        },
        {
          title: 'Многоуровневый потолок',
          body: 'Сложные конструкции в нескольких уровнях и оттенках.',
        },
      ],
    },
    gallery: {
      title: 'Наши работы',
      intro:
        'Выборка проектов последних лет – квартиры, частные дома и коммерческие объекты по всей Эстонии.',
      placeholder: 'Проект',
    },
    about: {
      title: 'О нас',
      paragraphs: [
        'Pinglagi – эстонская семейная компания с командой, имеющей более 15 лет опыта установки натяжных потолков в Эстонии и Скандинавии.',
        'Работаем только с сертифицированными материалами из Германии и Франции. Каждый проект ведёт опытный мастер, отвечающий за результат от начала до конца.',
        'Наша цель – чтобы каждый клиент получил продукт, который служит десятилетиями и выглядит так же хорошо, как в день монтажа.',
      ],
      valuesTitle: 'Наши принципы',
      values: [
        {
          title: 'Качество',
          body: 'Никаких компромиссов в материалах и монтаже.',
        },
        {
          title: 'Честность',
          body: 'Понятная цена, письменная гарантия, без скрытых расходов.',
        },
        { title: 'Опыт', body: 'Более 15 лет работы и тысячи объектов.' },
      ],
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        {
          q: 'Сколько длится монтаж?',
          a: 'Обычно 4-6 часов на комнату 20 м². Крупные проекты – 1-2 рабочих дня.',
        },
        {
          q: 'Остаётся ли пыль после монтажа?',
          a: 'Нет. Монтаж практически без пыли – мебель выносить не нужно.',
        },
        {
          q: 'Выдержит ли потолок воду сверху?',
          a: 'Да, до 100 литров на квадратный метр. После слива воды потолок восстанавливает форму.',
        },
        {
          q: 'Какая гарантия?',
          a: 'Письменная гарантия 12 лет на материал и монтаж.',
        },
        {
          q: 'Можно выбрать освещение?',
          a: 'Да – встроенные LED, эффект звёздного неба, скрытая подсветка.',
        },
        {
          q: 'Сколько стоит натяжной потолок?',
          a: 'Цена зависит от размера, материала и освещения. Точную цену называем на бесплатном замере.',
        },
      ],
    },
    callback: {
      title: 'Заказать обратный звонок',
      intro:
        'Оставьте номер телефона – перезвоним в течение 30 минут в рабочие дни 9-18.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      phoneLabel: 'Номер телефона',
      phonePlaceholder: '+372 5xxx xxxx',
      timeLabel: 'Удобное время для звонка',
      timeNow: 'Как можно скорее',
      timeMorning: 'Утром (9-12)',
      timeAfternoon: 'Днём (12-15)',
      timeEvening: 'Вечером (15-18)',
      messageLabel: 'Сообщение (необязательно)',
      messagePlaceholder: 'Размер помещения, пожелания, другая информация...',
      submit: 'Заказать звонок',
      success: 'Спасибо! Скоро перезвоним.',
      privacy: 'Мы не передаём ваши данные третьим лицам.',
    },
    contact: {
      title: 'Свяжитесь с нами',
      intro:
        'Заходите в офис, звоните или пишите – отвечаем в рабочие дни в течение часа.',
      phoneLabel: 'Телефон',
      phone: '+37258051866',
      emailLabel: 'E-mail',
      email: 'info@pinglagi.eu',
      hoursLabel: 'Часы работы',
      hours: 'Пн-Пт 9:00 - 18:00',
    },
    footer: {
      tagline: 'Качественные натяжные потолки по всей Эстонии.',
      navTitle: 'Страницы',
      contactTitle: 'Контакты',
      copyright: '© 2026 Pinglagi OÜ. Все права защищены.',
    },
  },
};

export type Translations = Dict;
