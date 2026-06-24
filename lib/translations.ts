export type Locale = 'et' | 'en' | 'ru';

type Dict = {
  brand: string;
  nav: {
    home: string;
    services: string;
    gallery: string;
    ceilingTypes: string;
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
    hoursNote: string;
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
      ceilingTypes: 'Pinglae tüübid',
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
        'Professionaalne paigaldus, kvaliteetsed materjalid, kirjalik garantii ja tasuta garantiiülevaatus.',
      ctaPrimary: 'Telli tasuta kõne',
      ctaSecondary: 'Vaata töid',
      statsLabel0: 'Tasuta konsultatsioon',
      statsLabel1: 'Leiame teie ruumile sobivaima lahenduse',
      statsLabel2: 'paigaldatud objekti',
      statsLabel3: 'a. garantii materjalile',
      introTitle: 'Mis on pinglagi?',
      introBody:
        'Pinglagi on kaasaegne laelahendus, mis kombineerib esteetika ja vastupidavuse. Õhuke PVC- või kangast valmistatud kile pingutatakse spetsiaalse alumiiniumprofiili sisse, varjates kõik laetaseme ebatasasused ühe tööpäevaga – ilma tolmu ja koristamiseta.',
      benefits: ['1 päev', 'Kirjalik garantii', 'Tolmuvaba', 'EU sertifikaat'],
      advantagesTitle: 'Miks valida Pinglagi?',
      advantages: [
        {
          title: 'Garantii',
          body: 'Kirjalik 15-aastane garantii materjalile, 2-aastane tööde garantii ja tasuta garantiiülevaatus.',
        },
        {
          title: 'Üks päev paigaldust',
          body: 'Enamik töid valmib ühe tööpäeva jooksul, mööblit ei ole vaja välja viia.',
        },
        {
          title: 'Veekindel',
          body: 'Peab vastu kuni 100 liitrit vett ruutmeetril – kaitseb naabri lekete eest.',
        },
        {
          title: 'Sertifitseeritud materjalid',
          body: 'Kasutame kvaliteetseid ja vastupidavaid materjale usaldusväärsetelt tootjatelt.',
        },
      ],
      typesTitle: 'Pinglae tüübid',
      ctaBannerTitle: 'Valmis alustama?',
      ctaBannerBody:
        'Tasuta mõõdistamine ja hinnapakkumine kiirelt ning teile sobival ajal.',
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
        'Töötame ainult sertifitseeritud materjalidega ning pöörame tähelepanu igale detailile, et tagada kvaliteetne ja vastupidav tulemus.',
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
          body: 'Selge hind, kirjalik garantii koos tasuta garantiiülevaatusega ja ilma varjatud kuludeta.',
        },
        {
          title: 'Sertifikaadid',
          body: 'Sertifitseeritud paigaldajad ja kvaliteetmaterjalid.',
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
          q: 'Kuidas käitub pinglagi veeuputuse korral?',
          a: 'Pinglagi peab vee väga hästi kinni ning suudab taluda kuni 100 liitrit vett ruutmeetri kohta. Vee eemaldamise järel taastab lagi enamasti oma algse kuju ega vaja väljavahetamist. Erinevalt tavapärastest lagedest ei ima pinglagi niiskust, ei paisu ega kahjustu samal viisil nagu kips- või ripplagi, mis võib veekahjustuse korral vajada ulatuslikku remonti või täielikku väljavahetamist.',
        },
        {
          q: 'Milline on garantii?',
          a: 'Anname kirjaliku 15-aastase garantii materjalile ja 2-aastase garantii tööle. Lisaks teeme tasuta garantiiülevaatuse.',
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
      privacy: 'Me ei jaga teie andmeid kolmandate osapooltega.',
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
      hoursNote: 'Muul ajal kokkuleppel – jäta päring teile sobival ajal.',
    },
    footer: {
      tagline: 'Kvaliteetsed pinglaed üle Eesti.',
      navTitle: 'Lehed',
      contactTitle: 'Kontakt',
      copyright: '© 2026 Devign OÜ. Kõik õigused kaitstud.',
    },
  },
  en: {
    brand: 'Pinglagi',
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      ceilingTypes: 'Ceiling types',
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
      heroEyebrow: 'MODERN CEILING SOLUTIONS',
      heroTitle: 'Stretch ceilings that last for decades',
      heroSubtitle:
        'Professional installation, quality materials, a written warranty, and a free warranty inspection.',
      ctaPrimary: 'Request a free call',
      ctaSecondary: 'See our work',
      statsLabel0: 'Free consultation',
      statsLabel1: 'We find the best solution for your space',
      statsLabel2: 'installed projects',
      statsLabel3: 'yr material warranty',
      introTitle: 'What is a stretch ceiling?',
      introBody:
        'A stretch ceiling is a modern ceiling solution that combines aesthetics with durability. A thin PVC or fabric membrane is tensioned into a special aluminium profile, hiding all ceiling imperfections in a single working day – without dust or cleanup.',
      benefits: ['One day', 'Written warranty', 'Dust-free', 'EU certificate'],
      advantagesTitle: 'Why choose Pinglagi?',
      advantages: [
        {
          title: 'Warranty',
          body: 'Written 15-year warranty on materials, 2-year warranty on works, and a free warranty inspection.',
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
          body: 'We use quality and durable materials from reliable manufacturers.',
        },
      ],
      typesTitle: 'Ceiling types',
      ctaBannerTitle: 'Ready to start?',
      ctaBannerBody:
        'Free measurement and a quote quickly, at a time that suits you.',
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
        'Pinglagi is a team of certified stretch ceiling installers offering quality ceiling solutions across Estonia.',
        'We work only with certified materials and pay close attention to every detail to ensure a quality and durable result.',
        'Our goal is to create stretch ceilings that combine aesthetics, durability, and impeccable finish.',
      ],
      valuesTitle: 'Our principles',
      values: [
        {
          title: 'Quality',
          body: 'No compromises on materials or installation.',
        },
        {
          title: 'Honesty',
          body: 'Clear pricing, written warranty with a free warranty inspection, and no hidden costs.',
        },
        {
          title: 'Certificates',
          body: 'Certified installers and quality materials.',
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
          q: 'What happens if water leaks through from above?',
          a: 'A stretch ceiling holds water very well and can take up to 100 litres per square metre. After the water is removed, it typically returns to its original shape and does not need replacing. Unlike conventional ceilings, a stretch ceiling does not absorb moisture, swell, or get damaged the same way as plasterboard or suspended ceilings, which may need extensive repairs or full replacement after a flood.',
        },
        {
          q: "What's the warranty?",
          a: 'We provide a written 15-year warranty on materials and a 2-year warranty on installation work. We also offer a free warranty inspection.',
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
        'Write to us or book a callback at a time that suits you – we respond to all enquiries at the earliest opportunity.',
      phoneLabel: 'Phone',
      phone: '+37258051866',
      emailLabel: 'Email',
      email: 'info@pinglagi.eu',
      hoursLabel: 'Hours',
      hours: 'Mon-Fri 9:00 - 18:00',
      hoursNote:
        'Outside these hours by appointment – leave a request at a time that suits you.',
    },
    footer: {
      tagline: 'Quality stretch ceilings across Estonia.',
      navTitle: 'Pages',
      contactTitle: 'Contact',
      copyright: '© 2026 Devign OÜ. All rights reserved.',
    },
  },
  ru: {
    brand: 'Pinglagi',
    nav: {
      home: 'Главная',
      services: 'Услуги',
      gallery: 'Галерея',
      ceilingTypes: 'Типы потолков',
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
      heroEyebrow: 'СОВРЕМЕННЫЕ ПОТОЛОЧНЫЕ РЕШЕНИЯ',
      heroTitle: 'Натяжные потолки, которые служат десятилетиями',
      heroSubtitle:
        'Профессиональный монтаж, качественные материалы, письменная гарантия и бесплатный гарантийный осмотр.',
      ctaPrimary: 'Заказать бесплатный звонок',
      ctaSecondary: 'Смотреть работы',
      statsLabel0: 'Бесплатная консультация',
      statsLabel1: 'Подберём лучшее решение для вашего помещения',
      statsLabel2: 'выполненных объектов',
      statsLabel3: 'лет гарантии на материалы',
      introTitle: 'Что такое натяжной потолок?',
      introBody:
        'Натяжной потолок – современное решение, сочетающее эстетику и долговечность. Тонкая ПВХ- или тканевая плёнка натягивается в специальный алюминиевый профиль, скрывая все неровности потолка за один рабочий день – без пыли и уборки.',
      benefits: ['1 день', 'Письменная гарантия', 'Без пыли', 'Сертификат ЕС'],
      advantagesTitle: 'Почему Pinglagi?',
      advantages: [
        {
          title: 'Гарантия',
          body: 'Письменная гарантия 15 лет на материалы, 2 года на монтаж и бесплатный гарантийный осмотр.',
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
          body: 'Используем качественные и долговечные материалы от надёжных производителей.',
        },
      ],
      typesTitle: 'Типы потолков',
      ctaBannerTitle: 'Готовы начать?',
      ctaBannerBody:
        'Бесплатный замер и предложение быстро, в удобное для вас время.',
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
        'Pinglagi – команда сертифицированных монтажников натяжных потолков, предлагающая качественные потолочные решения по всей Эстонии.',
        'Работаем только с сертифицированными материалами и уделяем внимание каждой детали, чтобы обеспечить качественный и долговечный результат.',
        'Наша цель – создавать натяжные потолки, объединяющие эстетику, долговечность и безупречную отделку.',
      ],
      valuesTitle: 'Наши принципы',
      values: [
        {
          title: 'Качество',
          body: 'Никаких компромиссов в материалах и монтаже.',
        },
        {
          title: 'Честность',
          body: 'Понятная цена, письменная гарантия с бесплатным гарантийным осмотром, без скрытых расходов.',
        },
        {
          title: 'Сертификаты',
          body: 'Сертифицированные монтажники и качественные материалы.',
        },
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
          q: 'Что будет, если сверху прольётся вода?',
          a: 'Натяжной потолок отлично удерживает воду и выдерживает до 100 литров на квадратный метр. После удаления воды он, как правило, возвращает первоначальную форму и не требует замены. В отличие от обычных потолков, натяжной потолок не впитывает влагу, не разбухает и не повреждается так, как гипсокартонный или подвесной потолок, который при заливе может потребовать серьёзного ремонта или полной замены.',
        },
        {
          q: 'Какая гарантия?',
          a: 'Даём письменную гарантию 15 лет на материалы и 2 года на монтаж. Также проводим бесплатный гарантийный осмотр.',
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
        'Напишите нам или закажите обратный звонок в удобное время – отвечаем на запросы при первой возможности.',
      phoneLabel: 'Телефон',
      phone: '+37258051866',
      emailLabel: 'E-mail',
      email: 'info@pinglagi.eu',
      hoursLabel: 'Часы работы',
      hours: 'Пн-Пт 9:00 - 18:00',
      hoursNote:
        'В другое время по договорённости – оставьте заявку в удобное для вас время.',
    },
    footer: {
      tagline: 'Качественные натяжные потолки по всей Эстонии.',
      navTitle: 'Страницы',
      contactTitle: 'Контакты',
      copyright: '© 2026 Devign OÜ. Все права защищены.',
    },
  },
};

export type Translations = Dict;
