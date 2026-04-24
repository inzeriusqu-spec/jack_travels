// ============================================
// БАЗА ДАННЫХ ПУТЕШЕСТВИЙ
// ============================================
const travelData = [
    {
        id: 1,
        title: "Тоскана, Италия",
        region: "Европа",
        country: "Италия",
        shortDesc: "Холмы, виноградники и искусство эпохи Возрождения.",
        fullDesc: "Тоскана — сердце Италии, где время течет медленно. Посетите Флоренцию с её собором и галереей Уффици, средневековую Сиену с знаменитой площадью Кампо, и попробуйте знаменитое вино Кьянти.",
        tips: "Лучшее время: май-июнь или сентябрь. Арендуйте машину для поездок по деревням. Обязательно попробуйте местные оливки и вино.",
        rating: 4.9,
        mainImage: "https://www.reisroutes.be/userfiles/fotos/campiglia-marittima_46465_xl.jpg",
        photos: [
            { id: 1, url: "https://photocentra.ru/images/main71/718149_main.jpg", title: "Холмы Тосканы", desc: "Знаменитые тосканские пейзажи с кипарисами" },
            { id: 2, url: "https://avatars.mds.yandex.net/i?id=5aa3ffbac723c0bd559a72f5896fbe61_l-6614807-images-thumbs&n=13", title: "Флоренция", desc: "Собор Санта-Мария-дель-Фьоре и панорама города" },
            { id: 3, url: "https://avatars.mds.yandex.net/i?id=d97f50df986a731a2ce47a514d0b6c50_l-10752166-images-thumbs&n=13", title: "Виноградники Кьянти", desc: "Знаменитые виноградники региона Кьянти" }
        ]
    },
    {
        id: 2,
        title: "Киото, Япония",
        region: "Азия",
        country: "Япония",
        shortDesc: "Храмы, сакура и вековые традиции.",
        fullDesc: "Киото — культурная столица Японии, где насчитывается более 2000 храмов и святилищ. Здесь вы найдете знаменитый золотой павильон Кинкаку-дзи, бамбуковую рощу в Арасияме и традиционные чайные церемонии.",
        tips: "Весной любуйтесь сакурой, осенью — кленовыми листьями. Купите проездной на автобус. Арендуйте кимоно для фотосессии.",
        rating: 4.95,
        mainImage: "https://i.pinimg.com/originals/d0/33/79/d033799f420c2280344a1c91d49de55b.jpg",
        photos: [
            { id: 1, url: "https://avatars.mds.yandex.net/get-altay/14296532/2a0000019b241592817763c41081f97b4337/orig", title: "Золотой павильон", desc: "Знаменитый храм Кинкаку-дзи, покрытый золотом" },
            { id: 2, url: "https://avatars.mds.yandex.net/i?id=7429f6e95d5210d9defd4d13680bea5f_l-4453150-images-thumbs&n=13", title: "Бамбуковая роща", desc: "Мистическая бамбуковая роща в Арасияме" },
            { id: 3, url: "https://avatars.mds.yandex.net/i?id=d308cde96da5eec1ada0ee8fe68f5449_l-5878141-images-thumbs&n=13", title: "Цветение сакуры", desc: "Весеннее цветение сакуры в Киото" }
        ]
    },
    {
        id: 3,
        title: "Крюгер, ЮАР",
        region: "Африка",
        country: "ЮАР",
        shortDesc: "Сафари и большая пятерка.",
        fullDesc: "Национальный парк Крюгера — один из крупнейших заповедников Африки. Здесь обитают все представители большой пятерки.",
        tips: "Лучшее время: сухой сезон (май-сентябрь). Возьмите бинокль.",
        rating: 4.85,
        mainImage: "https://perito.media/uploads/content_image/11274/medium_Skukuza-Airport.jpg",
        photos: [
            { id: 1, url: "https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2024/10/shutterstock-2432163773-e1728390688430.jpg?w=1600&ssl=1", title: "Стадо слонов", desc: "Семья слонов на водопое" },
            { id: 2, url: "https://i.pinimg.com/originals/80/11/d4/8011d48124fb1a40057136d3286467eb.jpg", title: "Львы", desc: "Прайд львов в саванне" },
            { id: 3, url: "https://img.freepik.com/free-photo/giraffe-wild_23-2151708925.jpg?semt=ais_hybrid&w=740&q=80", title: "Жираф", desc: "Жираф на фоне африканского заката" }
        ]
    },
    {
        id: 4,
        title: "Исландия",
        region: "Европа",
        country: "Исландия",
        shortDesc: "Водопады, гейзеры и лавовые поля.",
        fullDesc: "Золотое кольцо Исландии — самый популярный туристический маршрут с водопадом Гюдльфосс и геотермальной долиной.",
        tips: "Берите непромокаемую одежду. Путешествуйте на полноприводном автомобиле.",
        rating: 4.92,
        mainImage: "https://i.pinimg.com/originals/70/23/07/7023078f3c65e8ece094b6d456020d1c.jpg",
        photos: [
            { id: 1, url: "https://avatars.mds.yandex.net/i?id=d58c07c85d30551fc22cdb97118731e2_l-4580593-images-thumbs&n=13", title: "Водопад Гюдльфосс", desc: "Знаменитый Золотой водопад" },
            { id: 2, url: "https://i.pinimg.com/originals/6f/66/d9/6f66d92412e40ddba9cbb5bb094c43c7.jpg", title: "Ледник", desc: "Ледник Ватнайёкюдль" },
            { id: 3, url: "https://avatars.mds.yandex.net/i?id=c3b4b9792fa8af40c01bf41504b188b4_l-5292616-images-thumbs&n=13", title: "Северное сияние", desc: "Аврора бореалис над Исландией" }
        ]
    },
    {
        id: 5,
        title: "Бали, Индонезия",
        region: "Азия",
        country: "Индонезия",
        shortDesc: "Остров богов, рисовые террасы и сёрфинг.",
        fullDesc: "Бали — уникальное место, где индуистская культура встречается с тропической природой. Убуд — центр йоги и духовности.",
        tips: "Не забудьте международные права для аренды скутера. Уважайте местные храмы.",
        rating: 4.87,
        mainImage: "https://i.pinimg.com/originals/8b/f1/94/8bf194274d7bab16a37a0c445a2b8d3c.png",
        photos: [
            { id: 1, url: "https://www.indonesia.travel/contentassets/a60156ac7b454b12b42824f52a4be98b/pura-uluwatu.jpeg", title: "Храм Улувату", desc: "Знаменитый храм на скале" },
            { id: 2, url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5a/e2/51/view-indah.jpg?w=900&h=500&s=1", title: "Пляж Кута", desc: "Популярный пляж для сёрфинга" },
            { id: 3, url: "https://www.danas.rs/wp-content/uploads/2026/02/shutterstock_2478946463-e1770116570783.jpg", title: "Рисовые террасы", desc: "Тегаллаланг — рисовые террасы Убуда" }
        ]
    },
    {
        id: 6,
        title: "Патагония",
        region: "Америка",
        country: "Аргентина, Чили",
        shortDesc: "Ледники, фьорды и пики Анд.",
        fullDesc: "Патагония — один из самых диких и красивых регионов с ледником Перито-Морено и горой Фитц-Рой.",
        tips: "Сезон с ноября по март. Возьмите ветровку и треккинговые ботинки.",
        rating: 4.96,
        mainImage: "https://avatars.mds.yandex.net/i?id=e6389bc749fbf78794f32fa7faf8d916_l-5433932-images-thumbs&n=13",
        photos: [
            { id: 1, url: "https://i.pinimg.com/originals/0b/a6/1f/0ba61f56fe01297db7bd895eee4856fb.jpg", title: "Гора Фитц-Рой", desc: "Знаменитая вершина Патагонии" },
            { id: 2, url: "https://avatars.mds.yandex.net/i?id=65a1936da79988da103705f52093f7de_l-9224539-images-thumbs&n=13", title: "Ледник Перито-Морено", desc: "Один из немногих растущих ледников" },
            { id: 3, url: "https://www.circleofblue.org/wp-content/uploads/2010/02/Patagonia-Lake.JPG", title: "Озера Патагонии", desc: "Бирюзовые озера среди гор" }
        ]
    },
    {
    id: 7,
    title: "Кёльн, Германия",
    region: "Европа",
    country: "Германия",
    shortDesc: "Величественный Кёльнский собор и атмосфера старой Европы.",
    fullDesc: "Кёльн — один из древнейших городов Германии, основанный римлянами. Главная достопримечательность — Кёльнский собор (Kölner Dom), шедевр готической архитектуры, строившийся более 600 лет. Это самый посещаемый памятник Германии. Собор внесён в список Всемирного наследия ЮНЕСКО. Поднимитесь на южную башню (533 ступени), чтобы насладиться панорамой города и Рейна. Также в Кёльне стоит посетить Музей шоколада, прогуляться по набережной Рейна и попробовать знаменитое кёльнское пиво — Kölsch.",
    tips: "Лучшее время для посещения: май-сентябрь. Подъём на башню собора требует хорошей физической формы (533 ступени). Билеты лучше покупать онлайн заранее. Попробуйте местное пиво Kölsch в традиционной пивной (Brauhaus). Обязательно посетите Рождественскую ярмарку в декабре — она считается одной из лучших в Европе.",
    rating: 4.91,
    mainImage: "https://www.bitkom.org/sites/main/files/styles/facebook/public/2020-12/fotolia_114775040_xxl_simon.jpg?h=15c7efbc&amp;itok=6bROwf_1",
    photos: [
        { id: 1, url: "https://travelask.ru/system/images/files/001/313/025/wysiwyg/05B9CF72-CA92-4283-A29F-22397707234E.jpeg?1557568275", title: "Кёльнский собор", desc: "Величественный готический собор — символ Кёльна" },
        { id: 2, url: "https://live.staticflickr.com/399/18731702386_78e30f3b31_b.jpg", title: "Вид с высоты", desc: "Кёльнский собор и реки Рейн" },
        { id: 3, url: "https://farm5.staticflickr.com/4788/27134244728_404780fc5d_c.jpg", title: "Интерьер собора", desc: "Великолепные витражи и внутреннее убранство" }
    ]
    },
    {
        id: 8,
        title: "Новая Зеландия",
        region: "Океания",
        country: "Новая Зеландия",
        shortDesc: "Фьорды, хоббитон и экстрим.",
        fullDesc: "Новая Зеландия — страна невероятных пейзажей, где снимали 'Властелина колец'. Фьордленд и роторуа с гейзерами.",
        tips: "Лучшее время: декабрь-февраль. Арендуйте кемпер для путешествия.",
        rating: 4.94,
        mainImage: "https://static.vecteezy.com/system/resources/previews/033/713/180/non_2x/beautiful-rural-landscape-with-lake-and-farm-house-in-south-island-new-zealand-new-zealand-north-island-waikato-region-rural-landscape-near-matamata-ai-generated-free-photo.jpg",
        photos: [
            { id: 1, url: "https://avatars.mds.yandex.net/i?id=e1fcde0fa5a3c32a7007587266456d5c_l-5327407-images-thumbs&n=13", title: "Фьордленд", desc: "Милуфорд-Саунд" },
            { id: 2, url: "https://i.pinimg.com/736x/a5/b3/5a/a5b35acd5b8737caac4eb1f3ba9dd233.jpg", title: "Хоббитон", desc: "Деревня хоббитов" },
            { id: 3, url: "https://img.freepik.com/premium-photo/scenic-view-snowcapped-mountains-against-sky_1048944-1273491.jpg?semt=ais_hybrid&w=740", title: "Горы", desc: "Южные Альпы" }
        ]
    },
    {
        id: 9,
        title: "Таиланд",
        region: "Азия",
        country: "Таиланд",
        shortDesc: "Пляжи, храмы и уличная еда.",
        fullDesc: "Таиланд — страна улыбок с бирюзовыми водами Андаманского моря, буддийскими храмами и невероятной кухней.",
        tips: "Посетите острова Пхи-Пхи и Чиангмай. Уважайте местные обычаи.",
        rating: 4.91,
        mainImage: "https://img.freepik.com/premium-fotograf/wat-arun-temple-of-dawn-in-bangkok-landmark-of-thailand-after-restoration-2018_1048944-6823449.jpg?semt=ais_hybrid&w=740",
        photos: [
            { id: 1, url: "https://avatars.mds.yandex.net/i?id=10db0feab21f3f1d5e8d03eedc179a05_l-5175116-images-thumbs&n=13", title: "Пляжи", desc: "Белый песок и бирюзовая вода" },
            { id: 2, url: "https://news.store.rambler.ru/img/550fc4b370ef25e140c33407ff5fc316", title: "Храмы", desc: "Ват Арун в Бангкоке" },
            { id: 3, url: "https://cdn.nur.kz/images/1120/51c4bfb14fa4304d.jpeg", title: "Уличная еда", desc: "Знаменитый том ям" }
        ]
    },
    {
        id: 10,
        title: "Норвегия",
        region: "Европа",
        country: "Норвегия",
        shortDesc: "Фьорды и северное сияние.",
        fullDesc: "Норвегия — страна величественных фьордов, водопадов и возможности увидеть северное сияние.",
        tips: "Лучшее время: июнь-август для фьордов, зима для сияния.",
        rating: 4.93,
        mainImage: "https://avatars.mds.yandex.net/i?id=d5dc0242191241059b6341b56dd10dfb_l-13275216-images-thumbs&n=13",
        photos: [
            { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Geirangerfjord_.jpg/1280px-Geirangerfjord_.jpg", title: "Гейрангер-фьорд", desc: "Самый известный фьорд" },
            { id: 2, url: "https://s.yimg.com/ny/api/res/1.2/aI8ZVB4F_fdIQ.PTV9EYww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg7Y2Y9d2VicA--/https://media.zenfs.com/en/travel.travelleisure.com/b27b462cb398315710fc98e030d4f46d", title: "Северное сияние", desc: "Аврора над Тромсё" },
            { id: 3, url: "https://photos.travellerspoint.com/752307/large_6A4D2150DBBE8201E1FDA90F22E8E1B4.jpg", title: "Города", desc: "Берген — город между горами" }
        ]
    },
    {
        id: 11,
        title: "Канада",
        region: "Америка",
        country: "Канада",
        shortDesc: "Озера, леса и скалистые горы.",
        fullDesc: "Канада — страна невероятных национальных парков. Банф и Джаспер — жемчужины Скалистых гор.",
        tips: "Лучшее время: июль-сентябрь. Посетите озеро Луиз.",
        rating: 4.88,
        mainImage: "https://ru.solandworld.com/wp-content/uploads/2024/05/canadian-flag-flies-front-city-skyline-1024x683.jpg",
        photos: [
            { id: 1, url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/49/45/00/canada-july-2014-lake.jpg?w=1400&h=800&s=1", title: "Озеро Луиз", desc: "Бирюзовое озеро в горах" },
            { id: 2, url: "https://i.pinimg.com/originals/bc/7a/e4/bc7ae46a31fac29616f83f912b6dac94.jpg", title: "Банф", desc: "Национальный парк Банф" },
            { id: 3, url: "https://avatars.mds.yandex.net/i?id=82798af8e4ef0925fee6fcde89a821731ce040b3-5264085-images-thumbs&n=13", title: "Кленовый лист", desc: "Символ Канады осенью" }
        ]
    },
    {
        id: 12,
        title: "Австралия",
        region: "Океания",
        country: "Австралия",
        shortDesc: "Кенгуру, коалы и Большой Барьерный риф.",
        fullDesc: "Австралия — континент-страна с уникальной природой. Сидней, Мельбурн и коралловые рифы.",
        tips: "Лучшее время: сентябрь-ноябрь. Ныряйте с маской на рифе.",
        rating: 4.86,
        mainImage: "https://avatars.mds.yandex.net/i?id=6de381c65ea9ec5c317dca87b0b19d11_l-5232826-images-thumbs&n=13",
        photos: [
            { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sydneyoperahouse_at_night.jpg/1280px-Sydneyoperahouse_at_night.jpg", title: "Сиднейский оперный театр", desc: "Символ Австралии" },
            { id: 2, url: "https://i.pinimg.com/originals/9a/b3/84/9ab384afef7681e77e1c0ef53267293e.jpg", title: "Большой Барьерный риф", desc: "Коралловый рай" },
            { id: 3, url: "https://i.pinimg.com/originals/8b/b5/15/8bb51522fe63ec628ae7cb57aa3d6609.jpg", title: "Кенгуру", desc: "Символ Австралии" }
        ]
    },
    {
        id: 13,
        title: "Египет",
        region: "Африка",
        country: "Египет",
        shortDesc: "Пирамиды, фараоны и Красное море.",
        fullDesc: "Египет — страна древних цивилизаций. Пирамиды Гизы, Луксор и дайвинг в Хургаде.",
        tips: "Лучшее время: октябрь-апрель. Уважайте местные традиции.",
        rating: 4.79,
        mainImage: "https://media-prog-l.magput.ru/391d071b-1b9e-43ab-8381-d76fe9833459.jpg",
        photos: [
            { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1280px-Pyramids_of_the_Giza_Necropolis.jpg", title: "Пирамиды Гизы", desc: "Чудо света" },
            { id: 2, url: "https://i.pinimg.com/originals/09/6a/6f/096a6f3e8f56b8425561ba244e2f2429.jpg", title: "Красное море", desc: "Подводный мир" },
            { id: 3, url: "https://avatars.mds.yandex.net/i?id=e0e6fe012f3aafe493da2e9a9c23aaf4_l-11942308-images-thumbs&n=13", title: "Луксорский храм", desc: "Древнеегипетский храм" }
        ]
    },
    {
        id: 14,
        title: "Стамбул, Турция",
        region: "Азия",
        country: "Турция",
        shortDesc: "Город двух континентов, мечети и восточные базары.",
        fullDesc: "Стамбул — уникальный город, раскинувшийся на двух континентах: Европе и Азии. Здесь величественные мечети соседствуют с византийскими соборами, а шумные базары манят ароматами специй и сладостей. Обязательно посетите Айя-Софию, Голубую мечеть, дворец Топкапы и прокатитесь по Босфору.",
        tips: "Лучшее время для посещения: май-июнь или сентябрь-октябрь. На базарах обязательно торгуйтесь. Попробуйте турецкий чай, кебаб и настоящую пахлаву. Для посещения мечетей надевайте скромную одежду и снимайте обувь.",
        rating: 4.93,
        mainImage: "https://fs.tonkosti.ru/sized/c960x400/du/b7/dub7ldiy5bswcgo00owg8swss.jpg",
        photos: [
            { id: 1, url: "https://img-fotki.yandex.ru/get/9824/161539159.d/0_16556c_10d8a32e_XL.jpg", title: "Айя-София", desc: "Величественный собор и мечеть, символ Стамбула" },
            { id: 2, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blue_Mosque_2017.jpg/1280px-Blue_Mosque_2017.jpg", title: "Голубая мечеть", desc: "Знаменитая мечеть с шестью минаретами" },
            { id: 3, url: "https://publika.az/storage/2025/05/13/jsjbwik4jfcii4hvebnatck2twx7qfpbobn3u31m_1200.webp", title: "Босфор", desc: "Прогулка по проливу между Европой и Азией" }
        ]
    }
];


// ============================================
// ДОПОЛНИТЕЛЬНЫЕ ФОТО ДЛЯ ГАЛЕРЕИ
// ============================================
const extraGalleryPhotos = [
    {
        id: 101,
        title: "Водопад Игуасу",
        location: "Бразилия/Аргентина",
        description: "Один из самых мощных водопадов мира. Мощь воды и радуга над каньоном!",
        image: "https://1zoom.club/uploads/posts/2023-03/1677996214_1zoom-club-p-vodopadi-na-iguasu-80.jpg"
    },
    {
        id: 102,
        title: "Пляжи Мальдив",
        location: "Мальдивы",
        description: "Бирюзовая вода и белый песок. Райское место для отдыха!",
        image: "https://avatars.mds.yandex.net/i?id=beb39e3fa7949d9e550bc3098873b494_l-5231332-images-thumbs&n=13"
    },
    {
        id: 103,
        title: "Гранд-Каньон",
        location: "США, Аризона",
        description: "Величие природы, которое нужно видеть своими глазами. Миллионы лет истории!",
        image: "https://avatars.mds.yandex.net/get-altay/10869107/2a0000018b0b05358d5cb5a41336de2c0742/XXL_height"
    }
];


// ============================================
// ОТЗЫВЫ ПОЛЬЗОВАТЕЛЕЙ
// ============================================
let reviews = [
    {
        id: 1,
        author: "Анна Иванова",
        rating: 5,
        country: "Италия",
        text: "Благодаря советам Джека отлично провели время в Тоскане! Арендовали машину, объехали все деревушки. Вино и виды невероятные!",
        date: "2024-03-15"
    },
    {
        id: 2,
        author: "Михаил Петров",
        rating: 5,
        country: "Япония",
        text: "Киото весной — это что-то невероятное. Цветущая сакура, храмы и невероятная атмосфера.",
        date: "2024-04-02"
    },
    {
        id: 3,
        author: "Елена Смирнова",
        rating: 4,
        country: "Исландия",
        text: "Поездка в Исландию была мечтой. Совет про непромокаемую одежду очень пригодился. Северное сияние видели!",
        date: "2024-02-18"
    }
];

// ============================================
// FAQ ДАННЫЕ
// ============================================
const faqData = [
    {
        question: "Как выбрать страну для первого путешествия?",
        answer: "Для первого раза рекомендую выбрать страну с комфортным климатом и развитой инфраструктурой: Турция, Таиланд, Италия."
    },
    {
        question: "Как экономить на авиабилетах?",
        answer: "Покупайте билеты за 2-3 месяца до вылета, используйте Skyscanner, Aviasales."
    },
    {
        question: "Нужна ли страховка для путешествий?",
        answer: "Страховка ОБЯЗАТЕЛЬНА! Она покрывает расходы на лечение до 50 000 долларов."
    },
    {
        question: "Что обязательно взять в дорогу?",
        answer: "Документы, аптечка, Power Bank, наличные и карта, сменная одежда."
    },
    {
        question: "Как не потерять деньги за границей?",
        answer: "Держите деньги в нескольких местах: часть на карте, часть наличными."
    }
];

// ============================================
// ДАННЫЕ ДЛЯ ПОЛЕЗНЫХ ССЫЛОК
// ============================================
const usefulLinksData = {
    tips: {
        title: "Советы путешественникам",
        content: "<ul><li>Всегда имейте копии документов</li><li>Берите Power Bank</li><li>Скачивайте офлайн-карты</li></ul>"
    },
    seasons: {
        title: "Лучшее время для поездок",
        content: "<ul><li>Весна: Япония, Европа</li><li>Лето: Исландия</li><li>Осень: Тоскана, Турция</li><li>Зима: Таиланд</li></ul>"
    },
    budget: {
        title: "Бюджетные путешествия",
        content: "<ul><li>Ловите акции авиакомпаний</li><li>Живите в хостелах</li><li>Ешьте на рынках</li></ul>"
    },
    gear: {
        title: "Что взять в дорогу",
        content: "<ul><li>Документы</li><li>Аптечка</li><li>Power Bank</li><li>Непромокаемая одежда</li></ul>"
    },
    insurance: {
        title: "Страховка",
        content: "<p>Страховка покрывает лечение до 50 000 долларов. Обязательна!</p>"
    },
    visa: {
        title: "Визы",
        content: "<ul><li>Без визы: Турция, Таиланд</li><li>Электронная виза: Индия</li><li>Шенген: нужны документы</li></ul>"
    }
};

// ============================================
// ПЕРЕМЕННЫЕ
// ============================================
let currentFilter = "all";
let searchQuery = "";
let currentPage = "home";
let currentPlace = null;
let currentPhotoIndex = 0;
let selectedRating = 5;

// ============================================
// ТЁМНАЯ ТЕМА
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.theme-icon').textContent = '☀️';
        document.querySelector('.theme-text').textContent = 'Светлая тема';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    const themeIcon = document.querySelector('.theme-icon');
    const themeText = document.querySelector('.theme-text');
    
    if (isDark) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Светлая тема';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Тёмная тема';
        localStorage.setItem('theme', 'light');
    }
}

// ============================================
// ОТОБРАЖЕНИЕ КАРТОЧЕК
// ============================================
function renderCards() {
    const filtered = travelData.filter(item => {
        const matchFilter = currentFilter === "all" || item.region === currentFilter;
        const matchSearch = searchQuery === "" || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.country.toLowerCase().includes(searchQuery.toLowerCase());
        return matchFilter && matchSearch;
    });

    const grid = document.getElementById("cardsGrid");
    const noResultsDiv = document.getElementById("noResults");
    
    if (filtered.length === 0) {
        grid.style.display = "none";
        noResultsDiv.style.display = "block";
        return;
    }
    
    grid.style.display = "grid";
    noResultsDiv.style.display = "none";
    
    grid.innerHTML = filtered.map(place => `
        <div class="card" data-id="${place.id}">
            <div class="card-img" style="background-image: url('${place.mainImage}');">
                <span class="card-badge">${place.region}</span>
            </div>
            <div class="card-content">
                <div class="card-title">${place.title}</div>
                <div class="card-desc">${place.shortDesc}</div>
                <div class="card-stats">
                    <div class="rating">⭐ ${place.rating}</div>
                    <span class="read-more">Смотреть 3 фото →</span>
                </div>
            </div>
        </div>
    `).join("");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.getAttribute('data-id'));
            openPlaceModal(id);
        });
    });
}

// ============================================
// МОДАЛЬНОЕ ОКНО С ФОТО
// ============================================
function openPlaceModal(placeId) {
    const place = travelData.find(p => p.id === placeId);
    if (!place) return;
    
    currentPlace = place;
    
    document.getElementById("placeModalTitle").innerText = place.title;
    document.getElementById("placeModalDesc").innerHTML = place.fullDesc;
    document.getElementById("placeTips").innerHTML = place.tips;
    
    const photosGrid = document.getElementById("placePhotosGrid");
    photosGrid.innerHTML = place.photos.map((photo, index) => `
        <div class="place-photo-item" data-photo-index="${index}">
            <img src="${photo.url}" alt="${photo.title}">
        </div>
    `).join("");
    
    document.querySelectorAll('.place-photo-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(item.getAttribute('data-photo-index'));
            openPhotoView(place, index);
        });
    });
    
    document.getElementById("placeModal").style.display = "flex";
}

function openPhotoView(place, photoIndex) {
    currentPlace = place;
    currentPhotoIndex = photoIndex;
    updatePhotoView();
    document.getElementById("photoViewModal").style.display = "flex";
}

function updatePhotoView() {
    const photo = currentPlace.photos[currentPhotoIndex];
    document.getElementById("photoViewImage").style.backgroundImage = `url('${photo.url}')`;
    document.getElementById("photoViewTitle").innerText = photo.title;
    document.getElementById("photoViewDesc").innerHTML = photo.desc;
    document.getElementById("photoCounter").innerText = `${currentPhotoIndex + 1} / ${currentPlace.photos.length}`;
}

function nextPhoto() {
    if (currentPhotoIndex < currentPlace.photos.length - 1) {
        currentPhotoIndex++;
        updatePhotoView();
    }
}

function prevPhoto() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        updatePhotoView();
    }
}

// ============================================
// ГАЛЕРЕЯ
// ============================================
function renderGallery() {
    const galleryGrid = document.getElementById("galleryGrid");
    
    const allGalleryItems = [
        ...travelData.map(item => ({
            id: item.id,
            title: item.title,
            location: item.country,
            image: item.mainImage,
            isPlace: true
        })),
        ...extraGalleryPhotos.map(photo => ({
            id: photo.id,
            title: photo.title,
            location: photo.location,
            image: photo.image,
            isPlace: false
        }))
    ];
    
    galleryGrid.innerHTML = allGalleryItems.map(item => `
        <div class="gallery-item" data-id="${item.id}" data-is-place="${item.isPlace}">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.location}</p>
            </div>
        </div>
    `).join("");
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const isPlace = item.getAttribute('data-is-place') === 'true';
            const id = parseInt(item.getAttribute('data-id'));
            
            if (isPlace) {
                openPlaceModal(id);
            } else {
                const photo = extraGalleryPhotos.find(p => p.id === id);
                if (photo) {
                    alert(`📸 ${photo.title}\n📍 ${photo.location}\n\n${photo.description}`);
                }
            }
        });
    });
}

// ============================================
// ОТЗЫВЫ
// ============================================
function renderReviews() {
    const reviewsGrid = document.getElementById("reviewsGrid");
    if (!reviewsGrid) return;
    
    const sortedReviews = [...reviews].reverse();
    
    reviewsGrid.innerHTML = sortedReviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <span class="review-author">${escapeHtml(review.author)}</span>
                <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
            </div>
            <div class="review-country">📍 ${escapeHtml(review.country)}</div>
            <div class="review-text">${escapeHtml(review.text)}</div>
            <div class="review-date">${formatDate(review.date)}</div>
        </div>
    `).join("");
    
    updateRatingStats();
}

function updateRatingStats() {
    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);
    const overallRating = document.getElementById("overallRating");
    const ratingCount = document.getElementById("ratingCount");
    const overallStars = document.getElementById("overallStars");
    
    if (overallRating) overallRating.textContent = avgRating;
    if (ratingCount) ratingCount.textContent = `На основе ${reviews.length} отзывов`;
    if (overallStars) {
        const fullStars = Math.round(avgRating);
        overallStars.textContent = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
    }
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function openReviewModal() {
    document.getElementById("reviewModal").style.display = "flex";
    selectedRating = 5;
    updateStarsDisplay();
    document.getElementById("reviewForm").reset();
    document.getElementById("reviewRating").value = 5;
}

function closeReviewModal() {
    document.getElementById("reviewModal").style.display = "none";
}

function updateStarsDisplay() {
    const stars = document.querySelectorAll('.stars-input span');
    stars.forEach((star, index) => {
        if (index < selectedRating) {
            star.textContent = '★';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
}

function addReview(event) {
    event.preventDefault();
    
    const name = document.getElementById("reviewName").value;
    const country = document.getElementById("reviewCountry").value || "Не указано";
    const text = document.getElementById("reviewText").value;
    const rating = selectedRating;
    
    if (!name || !text) {
        alert("Пожалуйста, заполните имя и текст отзыва!");
        return;
    }
    
    const newReview = {
        id: reviews.length + 1,
        author: name,
        rating: rating,
        country: country,
        text: text,
        date: new Date().toISOString().split('T')[0]
    };
    
    reviews.push(newReview);
    renderReviews();
    closeReviewModal();
    alert("Спасибо за ваш отзыв!");
}

// ============================================
// FAQ
// ============================================
function renderFAQ() {
    const faqGrid = document.getElementById("faqGrid");
    if (!faqGrid) return;
    
    faqGrid.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join("");
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// ============================================
// ПОЛЕЗНЫЕ ССЫЛКИ
// ============================================
function openLinkModal(linkType) {
    const data = usefulLinksData[linkType];
    if (!data) return;
    
    document.getElementById("linkModalTitle").innerText = data.title;
    document.getElementById("linkModalContent").innerHTML = data.content;
    document.getElementById("linkModal").style.display = "flex";
}

// ============================================
// НАВИГАЦИЯ
// ============================================
function showPage(page) {
    currentPage = page;
    
    const pages = ['homePage', 'storyPage', 'galleryPage', 'reviewsPage', 'contactsPage'];
    pages.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.style.display = "none";
    });
    
    const searchSection = document.getElementById("searchSection");
    if (searchSection) searchSection.style.display = "none";
    
    if (page === "home") {
        document.getElementById("homePage").style.display = "block";
        if (searchSection) searchSection.style.display = "block";
    } else if (page === "story") {
        document.getElementById("storyPage").style.display = "block";
    } else if (page === "gallery") {
        document.getElementById("galleryPage").style.display = "block";
        renderGallery();
    } else if (page === "reviews") {
        document.getElementById("reviewsPage").style.display = "block";
        renderReviews();
    } else if (page === "contacts") {
        document.getElementById("contactsPage").style.display = "block";
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}

function closeModals() {
    const modals = ['placeModal', 'photoViewModal', 'linkModal', 'reviewModal'];
    modals.forEach(m => {
        const el = document.getElementById(m);
        if (el) el.style.display = "none";
    });
}

// ============================================
// НАСТРОЙКА СОБЫТИЙ
// ============================================
function setupEventListeners() {
    // Тёмная тема
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    
    // Навигация
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(link.getAttribute('data-page'));
        });
    });
    
    // Фильтры
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderCards();
        });
    });
    
    // Поиск
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderCards();
        });
    }
    
    // Закрытие модалок
    document.getElementById("closePlaceModalBtn")?.addEventListener('click', closeModals);
    document.getElementById("closePhotoViewBtn")?.addEventListener('click', closeModals);
    document.getElementById("closeLinkModalBtn")?.addEventListener('click', closeModals);
    document.getElementById("closeReviewModalBtn")?.addEventListener('click', closeReviewModal);
    
    // Навигация по фото
    document.getElementById("prevPhotoBtn")?.addEventListener('click', prevPhoto);
    document.getElementById("nextPhotoBtn")?.addEventListener('click', nextPhoto);
    
    // Закрытие по клику на фон
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeModals();
    });
    
    // Полезные ссылки
    document.querySelectorAll('.useful-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openLinkModal(link.getAttribute('data-link'));
        });
    });
    
    // Отзывы
    document.getElementById("addReviewBtn")?.addEventListener('click', openReviewModal);
    
    // Звёзды для оценок
    document.querySelectorAll('.stars-input span').forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            updateStarsDisplay();
            document.getElementById("reviewRating").value = selectedRating;
        });
    });
    
    // Форма отзыва
    document.getElementById("reviewForm")?.addEventListener('submit', addReview);
    
    // Форма контактов
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formMessage = document.getElementById("formMessage");
            if (formMessage) {
                formMessage.className = "form-message success";
                formMessage.textContent = "Сообщение отправлено! Джек ответит вам в ближайшее время.";
                contactForm.reset();
                setTimeout(() => {
                    formMessage.style.display = "none";
                    formMessage.className = "form-message";
                }, 5000);
            }
        });
    }
}

// ============================================
// ЗАПУСК
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCards();
    renderFAQ();
    renderReviews();
    setupEventListeners();
    showPage("home");
});
