import { Language } from '../services/translation.service';

export const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'home': {
    'en': 'Home',
    'bs': 'Početna',
    'ar': 'الرئيسية'
  },
  'about': {
    'en': 'About',
    'bs': 'O nama',
    'ar': 'عن الفندق'
  },
  'services': {
    'en': 'Services',
    'bs': 'Usluge',
    'ar': 'الخدمات'
  },
  'reviews': {
    'en': 'Reviews',
    'bs': 'Recenzije',
    'ar': 'التقييمات'
  },
  'contact': {
    'en': 'Contact',
    'bs': 'Kontakt',
    'ar': 'اتصل بنا'
  },
  'book_now': {
    'en': 'Book Now',
    'bs': 'Rezerviši',
    'ar': 'احجز الآن'
  },
  'call_us': {
    'en': 'Call Us',
    'bs': 'Nazovite nas',
    'ar': 'اتصل بنا'
  },
  
  // Hero section
  'hero_title': {
    'en': 'Experience Luxury Living by the Lake',
    'bs': 'Doživite luksuzni život pored jezera',
    'ar': 'استمتع بالحياة الفاخرة بجانب البحيرة'
  },
  'hero_subtitle': {
    'en': 'Premium apartments with stunning views and world-class amenities',
    'bs': 'Premium apartmani sa zadivljujućim pogledom i prvoklasnim sadržajima',
    'ar': 'شقق فاخرة بإطلالات خلابة ومرافق عالمية المستوى'
  },
  
  // About section
  'about_title': {
    'en': 'About Lakeside Luxury',
    'bs': 'O Lakeside Luxury',
    'ar': 'عن لاكسايد لاكشري'
  },
  'about_description': {
    'en': 'Nestled on the shores of a pristine lake, our apartments offer a perfect blend of comfort, luxury and natural beauty.',
    'bs': 'Smješteni na obali netaknutog jezera, naši apartmani nude savršenu kombinaciju udobnosti, luksuza i prirodne ljepote.',
    'ar': 'تقع على ضفاف بحيرة نقية، توفر شققنا مزيجًا مثاليًا من الراحة والفخامة والجمال الطبيعي.'
  },
  'about_subtitle': {
    'en': 'Discover our peaceful retreat by the lake',
    'bs': 'Otkrijte naše mirno utočište pored jezera',
    'ar': 'اكتشف ملاذنا الهادئ بجانب البحيرة'
  },
  'perfect_escape': {
    'en': 'Your Perfect Lakeside Escape',
    'bs': 'Vaš savršeni bijeg pored jezera',
    'ar': 'ملاذك المثالي بجانب البحيرة'
  },
  'about_text_1': {
    'en': 'Nestled on the shores of a pristine lake, our luxury apartments and hostel provide the perfect blend of comfort, relaxation, and adventure. Whether you\'re seeking a weekend getaway, a family vacation, or a place to unwind, our property offers everything you need for a memorable lakeside experience.',
    'bs': 'Smješteni na obali netaknutog jezera, naši luksuzni apartmani i hostel pružaju savršenu kombinaciju udobnosti, opuštanja i avanture. Bilo da tražite vikend odmor, porodični odmor ili mjesto za opuštanje, naša imovina nudi sve što vam je potrebno za nezaboravan boravak pored jezera.',
    'ar': 'تقع على ضفاف بحيرة نقية، توفر شققنا الفاخرة ونزلنا مزيجًا مثاليًا من الراحة والاسترخاء والمغامرة. سواء كنت تبحث عن عطلة نهاية أسبوع، أو إجازة عائلية، أو مكان للاسترخاء، فإن عقارنا يوفر كل ما تحتاجه لتجربة لا تُنسى بجانب البحيرة.'
  },
  'about_text_2': {
    'en': 'Our apartments come with all the necessary equipment, comfortable furnishings, and stunning views, making your stay relaxing and enjoyable. Each space has been carefully designed to provide maximum comfort while highlighting the natural beauty of our lakeside surroundings.',
    'bs': 'Naši apartmani imaju potrebnu opremu, udoban namještaj i zadivljujući pogled, čineći vaš boravak i opuštajućim i ugodnim. Svaki prostor je pažljivo dizajniran kako bi pružio maksimalnu udobnost, istovremeno ističući prirodnu ljepotu našeg okruženja uz jezero.',
    'ar': 'تأتي شققنا مع جميع المعدات اللازمة والأثاث المريح والإطلالات الخلابة، مما يجعل إقامتك مريحة وممتعة. تم تصميم كل مساحة بعناية لتوفير أقصى قدر من الراحة مع إبراز الجمال الطبيعي لمحيطنا بجانب البحيرة.'
  },
  'luxury_apartments': {
    'en': 'Luxury Apartments',
    'bs': 'Luksuzni apartmani',
    'ar': 'شقق فاخرة'
  },
  'luxury_apartments_desc': {
    'en': 'Comfortable and stylish accommodations with stunning lake views. All units feature modern amenities and thoughtful touches.',
    'bs': 'Udoban i stilski smještaj sa zadivljujućim pogledom na jezero. Sve jedinice sadrže moderne sadržaje i pažljivo osmišljene detalje.',
    'ar': 'أماكن إقامة مريحة وأنيقة مع إطلالات خلابة على البحيرة. تتميز جميع الوحدات بوسائل راحة حديثة ولمسات مدروسة.'
  },
  'cozy_cafe': {
    'en': 'Cozy Café',
    'bs': 'Ugodna kafeterija',
    'ar': 'مقهى دافئ'
  },
  'cozy_cafe_desc': {
    'en': 'Enjoy delicious food and drinks in our café with a garden and terrace overlooking the beautiful lake.',
    'bs': 'Uživajte u ukusnoj hrani i pićima u našoj kafeteriji s vrtom i terasom s pogledom na prekrasno jezero.',
    'ar': 'استمتع بالطعام والمشروبات اللذيذة في مقهانا مع حديقة وشرفة تطل على البحيرة الجميلة.'
  },
  'raft_rentals': {
    'en': 'Raft Rentals',
    'bs': 'Iznajmljivanje splavova',
    'ar': 'تأجير الطوافات'
  },
  'raft_rentals_desc': {
    'en': 'Explore the lake at your own pace with our comfortable and easy-to-navigate raft rentals.',
    'bs': 'Istražite jezero svojim tempom s našim udobnim iznajmljenim splavovima.',
    'ar': 'استكشف البحيرة بوتيرتك الخاصة مع قواربنا المريحة وسهلة التنقل.'
  },
  
  // Services section
  'services_title': {
    'en': 'Our Services',
    'bs': 'Naše usluge',
    'ar': 'خدماتنا'
  },
  'services_description': {
    'en': 'We provide a range of premium services to make your stay comfortable and memorable.',
    'bs': 'Pružamo niz premium usluga kako bismo vaš boravak učinili udobnim i nezaboravnim.',
    'ar': 'نقدم مجموعة من الخدمات المميزة لجعل إقامتك مريحة ولا تُنسى.'
  },
  'services_subtitle': {
    'en': 'Discover the complete experience we offer',
    'bs': 'Otkrijte kompletno iskustvo koje nudimo',
    'ar': 'اكتشف التجربة الكاملة التي نقدمها'
  },
  'ready_to_experience': {
    'en': 'Ready to experience the lakeside luxury?',
    'bs': 'Spremni da doživite luksuz pored jezera?',
    'ar': 'هل أنت مستعد لتجربة الرفاهية بجانب البحيرة؟'
  },
  'book_your_stay': {
    'en': 'Book Your Stay Now',
    'bs': 'Rezervišite svoj boravak sada',
    'ar': 'احجز إقامتك الآن'
  },
  
  // Contact section
  'contact_title': {
    'en': 'Get in Touch',
    'bs': 'Kontaktirajte nas',
    'ar': 'تواصل معنا'
  },
  'contact_description': {
    'en': 'Have questions or want to book? Reach out to our team.',
    'bs': 'Imate pitanja ili želite rezervisati? Javite se našem timu.',
    'ar': 'هل لديك أسئلة أو ترغب في الحجز؟ تواصل مع فريقنا.'
  },
  'contact_us': {
    'en': 'Contact Us',
    'bs': 'Kontaktirajte nas',
    'ar': 'اتصل بنا'
  },
  'contact_subtitle': {
    'en': 'Get in touch for inquiries, special requests, or to learn more',
    'bs': 'Javite nam se za upite, posebne zahtjeve ili da saznate više',
    'ar': 'تواصل معنا للاستفسارات والطلبات الخاصة أو لمعرفة المزيد'
  },
  'our_location': {
    'en': 'Our Location',
    'bs': 'Naša lokacija',
    'ar': 'موقعنا'
  },
  'our_address': {
    'en': 'Ostrožac 212',
    'bs': 'Ostrožac 212',
    'ar': 'أوستروزاك 212'
  },
  'country': {
    'en': 'Ostrožac, Bosnia and Herzegovina',
    'bs': 'Ostrožac, Bosna i Hercegovina',
    'ar': 'أوستروزاك, بوسنة وهرسكوفينا'
  },
  'phone': {
    'en': 'Phone',
    'bs': 'Telefon',
    'ar': 'الهاتف'
  },
  'email': {
    'en': 'Email',
    'bs': 'Email',
    'ar': 'البريد الإلكتروني'
  },
  'find_us': {
    'en': 'Find Us',
    'bs': 'Pronađite nas',
    'ar': 'جدنا'
  },
  'map_placeholder': {
    'en': 'Map Embed Goes Here',
    'bs': 'Ovdje dolazi mapa',
    'ar': 'هنا يتم تضمين الخريطة'
  },
  'map_notice': {
    'en': 'Google Maps or other map service would be embedded in the final version',
    'bs': 'Google Maps ili druga usluga mapa bit će uključena u konačnoj verziji',
    'ar': 'سيتم تضمين خرائط جوجل أو خدمة خرائط أخرى في النسخة النهائية'
  },
  'send_message': {
    'en': 'Send Us a Message',
    'bs': 'Pošaljite nam poruku',
    'ar': 'أرسل لنا رسالة'
  },
  'name': {
    'en': 'Name',
    'bs': 'Ime',
    'ar': 'الاسم'
  },
  'subject': {
    'en': 'Subject',
    'bs': 'Predmet',
    'ar': 'الموضوع'
  },
  'message': {
    'en': 'Message',
    'bs': 'Poruka',
    'ar': 'الرسالة'
  },
  'submit': {
    'en': 'Send Message',
    'bs': 'Pošalji poruku',
    'ar': 'إرسال الرسالة'
  },
  
  // Form validation messages
  'name_required': {
    'en': 'Name is required',
    'bs': 'Ime je obavezno',
    'ar': 'الاسم مطلوب'
  },
  'name_minlength': {
    'en': 'Name must be at least 2 characters',
    'bs': 'Ime mora imati najmanje 2 karaktera',
    'ar': 'يجب أن يتكون الاسم من حرفين على الأقل'
  },
  'email_required': {
    'en': 'Email is required',
    'bs': 'Email je obavezan',
    'ar': 'البريد الإلكتروني مطلوب'
  },
  'email_invalid': {
    'en': 'Enter a valid email address',
    'bs': 'Unesite važeću email adresu',
    'ar': 'أدخل عنوان بريد إلكتروني صالح'
  },
  'subject_required': {
    'en': 'Subject is required',
    'bs': 'Predmet je obavezan',
    'ar': 'الموضوع مطلوب'
  },
  'message_required': {
    'en': 'Message is required',
    'bs': 'Poruka je obavezna',
    'ar': 'الرسالة مطلوبة'
  },
  'message_minlength': {
    'en': 'Message must be at least 10 characters',
    'bs': 'Poruka mora imati najmanje 10 karaktera',
    'ar': 'يجب أن تتكون الرسالة من 10 أحرف على الأقل'
  },
  
  // Service items 
  'service_apartments_title': {
    'en': 'Luxury Apartments',
    'bs': 'Luksuzni apartmani',
    'ar': 'شقق فاخرة'
  },
  'service_apartments_desc': {
    'en': "Experience ultimate comfort in our modern, fully equipped apartments. Each apartment features large windows, with two offering stunning lake views. The apartments do not have kitchens but are equipped with one double bed and one bunk bed, perfect for families. All apartments include Wi-Fi and a TV, providing a comfortable and convenient stay.",
    'bs': "Doživite vrhunsku udobnost u našim modernim i dobro opremljenim apartmanima. Svaki apartman ima velike prozore, od kojih dva nude prekrasan pogled na jezero. Apartmani nemaju kuhinju, ali su opremljeni jednim bračnim krevetom i jednim krevetom na sprat, idealnim za porodice. Svi apartmani uključuju Wi-Fi i televizor, pružajući vam udoban i praktičan boravak.",
    'ar': "استمتع بالراحة القصوى في شققنا الحديثة والمجهزة بالكامل. تتميز كل شقة بنوافذ كبيرة، مع اثنين منها توفر إطلالات خلابة على البحيرة. لا تحتوي الشقق على مطابخ ولكنها مجهزة بسرير مزدوج واحد وسرير بطابقين، مثالية للعائلات. تشمل جميع الشقق خدمة الواي فاي وتلفزيون، مما يوفر إقامة مريحة ومناسبة."
  },
  'service_cafe_title': {
    'en': 'Lakeside Café & Garden',
    'bs': 'Kafić i vrt pored jezera',
    'ar': 'مقهى وحديقة على ضفاف البحيرة'
  },
  'service_cafe_desc': {
    'en': "Our charming café offers delicious meals and beverages in a picturesque setting. Enjoy your morning coffee on the terrace overlooking the lake, savor a leisurely lunch in our garden, or unwind with a glass of wine as the sun sets over the water. Our menu features fresh, locally-sourced ingredients and a variety of options to suit all tastes. The café is open to both guests and visitors, making it the perfect spot to relax and soak in the tranquil lakeside atmosphere.",
    'bs': "Naš šarmantni kafić nudi ukusne obroke i napitke u slikovitom okruženju. Uživajte u jutarnjoj kavi na terasi s pogledom na jezero, uživajte u opuštenom ručku u našem vrtu ili se opustite uz čašu vina dok sunce zalazi nad vodom. Naš meni sadrži svježe, lokalno nabavljene sastojke i razne opcije koje odgovaraju svim ukusima. Kafić je otvoren za goste i posjetitelje, što ga čini savršenim mjestom za opuštanje i uživanje u mirnoj atmosferi pored jezera.",
    'ar': "يقدم مقهانا الساحر وجبات ومشروبات لذيذة في بيئة خلابة. استمتع بقهوة الصباح على الشرفة المطلة على البحيرة، وتلذذ بغداء متأنٍ في حديقتنا، أو استرخِ مع كأس من النبيذ بينما تغرب الشمس فوق الماء. تتميز قائمتنا بمكونات طازجة ومصدرها محلي ومجموعة متنوعة من الخيارات لتناسب جميع الأذواق. المقهى مفتوح للضيوف والزوار، مما يجعله المكان المثالي للاسترخاء والاستمتاع بأجواء البحيرة الهادئة."
  },
  'service_rafts_title': {
    'en': 'Raft Cruising Adventures',
    'bs': 'Avanture krstarenja splavom',
    'ar': 'مغامرات الإبحار بالطوافات'
  },
  'service_rafts_desc': {
    'en': "Explore the crystal-clear waters of the lake at your own pace or relax while a driver navigates the comfortable raft for you. The rafts are easy to handle and can be rented as needed, without any time restrictions, making them ideal for individuals, families, couples, or groups. We have a larger number of rafts in various sizes, capable of accommodating more people, so the experience is suitable for all kinds of visitors. The rental includes a driver with the necessary license and all safety equipment, ensuring a safe and enjoyable adventure. You can bring snacks or find a secluded cove to fully enjoy the beautiful lakeside surroundings.",
    'bs': "Istražite kristalno čistu vodu jezera vlastitim tempom ili se opustite dok vozač upravlja udobnim splavom. Splavovi su laki za upravljanje i mogu se iznajmiti po potrebi, bez vremenskog ograničenja, a idealni su za pojedince, porodice, parove ili grupe. Imamo veći broj splavova različitih veličina, koji mogu primiti veći broj ljudi, tako da je iskustvo pogodno za sve vrste posjetilaca. Uz iznajmljivanje dobijate vozača s potrebnom dozvolom i svu zaštitnu opremu, što osigurava sigurnu i ugodnu avanturu. Možete ponijeti užinu, pronaći osamljenu uvalu ili jednostavno uživati u prelijepom jezerskom okruženju.",
    'ar': "استكشف المياه الصافية البلورية للبحيرة بوتيرتك الخاصة أو استرخِ بينما يقود السائق الطوافة المريحة لك. الطوافات سهلة التعامل ويمكن استئجارها حسب الحاجة، دون أي قيود زمنية، مما يجعلها مثالية للأفراد والعائلات والأزواج والمجموعات. لدينا عدد كبير من الطوافات بأحجام مختلفة، قادرة على استيعاب المزيد من الأشخاص، لذا فإن التجربة مناسبة لجميع أنواع الزوار. يشمل الإيجار سائقًا حاصل على الترخيص اللازم وجميع معدات السلامة، مما يضمن مغامرة آمنة وممتعة. يمكنك إحضار الوجبات الخفيفة أو العثور على خليج منعزل للاستمتاع الكامل بالمناطق المحيطة الجميلة بجانب البحيرة."
  },
  
  // Footer sections
  'quick_links': {
    'en': 'Quick Links',
    'bs': 'Brzi linkovi',
    'ar': 'روابط سريعة'
  },
  'our_services': {
    'en': 'Our Services',
    'bs': 'Naše usluge',
    'ar': 'خدماتنا'
  },
  'follow_us': {
    'en': 'Follow Us',
    'bs': 'Pratite nas',
    'ar': 'تابعنا'
  },
  'address': {
    'en': 'Ostrožac 212',
    'bs': 'Ostrožac 212',
    'ar': 'أوستروزاك 212'
  },
  'phone_number': {
    'en': '+387 60 33 07 659',
    'bs': '+387 60 33 07 659',
    'ar': '+387 60 33 07 659'
  },
  'copyright': {
    'en': '© {currentYear} Lakeside Luxury. All rights reserved.',
    'bs': '© {currentYear} Lakeside Luxury. Sva prava zadržana.',
    'ar': '© {currentYear} ليكسايد لاكشري. جميع الحقوق محفوظة.'
  },
  'privacy_policy': {
    'en': 'Privacy Policy',
    'bs': 'Politika privatnosti',
    'ar': 'سياسة الخصوصية'
  },
  'terms_of_service': {
    'en': 'Terms of Service',
    'bs': 'Uslovi korištenja',
    'ar': 'شروط الخدمة'
  },

  // Reviews section
  'reviews_title': {
    'en': 'Guest Reviews',
    'bs': 'Recenzije gostiju',
    'ar': 'آراء الضيوف'
  },
  'reviews_subtitle': {
    'en': 'What our guests say about their stay',
    'bs': 'Šta naši gosti kažu o svom boravku',
    'ar': 'ما يقوله ضيوفنا عن إقامتهم'
  },
  'review_1_text': {
    'en': 'The room is modern with Ac. Beds are comfortable and ensuite spacious. Definitely recommend this place. The host is helpful and welcoming. The breakfast was freshly made with fresh fruit and dry meat.',
    'bs': 'Soba je moderna sa klimom. Kreveti su udobni, a kupatilo prostrano. Definitivno preporučujem ovo mjesto. Domaćin je uslužan i ljubazan. Doručak je bio svježe pripremljen sa svježim voćem i suhim mesom.',
    'ar': 'الغرفة حديثة ومكيفة. الأسرة مريحة والحمام واسع. أوصي بهذا المكان بالتأكيد. المضيف مفيد ومرحب. كان الإفطار طازجًا مع فواكه طازجة ولحوم مجففة.'
  },
  'review_2_text': {
    'en': 'The view of the lake was gorgeous. The staff were all friendly and helpful. We did not hear any train noise or noise from the bridge as the windows are insulated very well.',
    'bs': 'Pogled na jezero je bio prekrasan. Osoblje je bilo ljubazno i uslužno. Nismo čuli nikakvu buku od voza ili mosta jer su prozori vrlo dobro izolovani.',
    'ar': 'كان منظر البحيرة رائعًا. كان جميع الموظفين ودودين ومتعاونين. لم نسمع أي ضوضاء من القطار أو الجسر لأن النوافذ معزولة جيدًا.'
  },
  'review_3_text': {
    'en': 'Property is great, breakfast was great, and the host, Ajdin, was exceptional. If you want a place to stay, with no trouble at all, this is the one. Our stay here made the trip to Jablanica even more memorable.',
    'bs': 'Imanje je odlično, doručak je bio odličan, a domaćin Ajdin je bio izuzetan. Ako želite mjesto za boravak, bez ikakvih problema, ovo je pravo. Naš boravak ovdje učinio je putovanje u Jablanicu još pametnijim.',
    'ar': 'العقار رائع، والإفطار كان رائعًا، والمضيف أجدين كان استثنائيًا. إذا كنت تريد مكانًا للإقامة بدون أي مشاكل على الإطلاق، فهذا هو المكان. جعلت إقامتنا هنا الرحلة إلى يابلانيتسا أكثر لا تُنسى.'
  },
  'review_4_text': {
    'en': 'I absolutely loved this place – from the room to everything else. I rented a room with a lake view and wow, just amazing! It was such a beautiful spot to sit outside and enjoy the view. The service was excellent, with friendly and welcoming staff. The building is new, and although the room was basic, it was clean and had a comfortable bed. The blackout blinds made it easy to sleep through the night. Breakfast was also very good. Highly recommended!',
    'bs': 'Apsolutno sam volio ovo mjesto - od sobe do svega ostalog. Iznajmio sam sobu sa pogledom na jezero i vau, jednostavno nevjerovatno! Bilo je to tako lijepo mjesto da sjedim napolju i uživam u pogledu. Usluga je bila odlična, sa ljubaznim osobljem. Zgrada je nova i iako je soba bila osnovna, bila je čista i imala je udoban krevet. Zavjese za zamračivanje olakšale su spavanje tokom noći. Doručak je takođe bio vrlo dobar. Toplo preporučujem!',
    'ar': 'أحببت هذا المكان تمامًا - من الغرفة إلى كل شيء آخر. استأجرت غرفة بإطلالة على البحيرة ورائع، مذهل فقط! كانت بقعة جميلة للجلوس في الخارج والاستمتاع بالمنظر. كانت الخدمة ممتازة، مع موظفين ودودين ومرحبين. المبنى جديد، وعلى الرغم من أن الغرفة كانت بسيطة، إلا أنها كانت نظيفة وبها سرير مريح. جعلت الستائر المعتمة النوم طوال الليل سهلاً. كان الإفطار جيدًا جدًا أيضًا. أوصي به بشدة!'
  },
  'review_5_text': {
    'en': 'I would like to thank the owner Ajdin, he was very helpful and kind, i felt home as his family welcomed me and treat my children as if they were their own. The apartment was very clean and it is new. The location of the apartment and the view were amazing. Ajdin took us on a trip on early morning with a great breakfast during the trip to enjoy the lake and the breakfast. After that he took us to a great beach to swim in the river. This experience is unforgettable and made my visit to Bosnia great already.',
    'bs': 'Želio bih zahvaliti vlasniku Ajdinu, bio je vrlo uslužan i ljubazan, osjećao sam se kao kod kuće jer me je njegova porodica dočekala i tretirala moju djecu kao da su njihova vlastita. Apartman je bio vrlo čist i nov. Lokacija apartmana i pogled su bili nevjerovatni. Ajdin nas je poveo na izlet rano ujutro sa odličnim doručkom tokom puta da uživamo u jezeru i doručku. Nakon toga nas je odveo na odličnu plažu da se kupamo u rijeci. Ovo iskustvo je nezaboravno i već je učinilo moju posjetu Bosni odličnom.',
    'ar': 'أود أن أشكر المالك أجدين، كان مفيدًا جدًا ولطيفًا، شعرت بأنني في المنزل حيث رحبت بي عائلته وعاملت أطفالي كما لو كانوا أطفالهم. كانت الشقة نظيفة جدًا وجديدة. كان موقع الشقة والمنظر مذهلين. أخذنا أجدين في رحلة في الصباح الباكر مع إفطار رائع خلال الرحلة للاستمتاع بالبحيرة والإفطار. بعد ذلك أخذنا إلى شاطئ رائع للسباحة في النهر. هذه التجربة لا تُنسى وجعلت زيارتي للبوسنة رائعة بالفعل.'
  },
  'review_6_text': {
    'en': 'The room was very confortable, the bed and the pillows too. At morning we got up with a wonderful lake view, drinked a coffe at the cafè and took a nice lake tour with Ajdan the owner. He was very nice and patience with out kids too. We spend a very nice day by the lake, sure we will be back next time in summer.',
    'bs': 'Soba je bila vrlo udobna, krevet i jastuci takođe. Ujutro smo ustali sa prekrasnim pogledom na jezero, popili kafu u kafiću i otišli na lijepu turu jezerom sa vlasnikom Ajdinom. Bio je vrlo ljubazan i strpljiv i sa našom djecom. Proveli smo vrlo lijep dan pored jezera, sigurno ćemo se vratiti sljedeći put ljeti.',
    'ar': 'كانت الغرفة مريحة جدًا، والسرير والوسائد أيضًا. في الصباح استيقظنا بمنظر رائع للبحيرة، وشربنا القهوة في المقهى وقمنا بجولة جميلة في البحيرة مع المالك أجدان. كان لطيفًا جدًا وصبورًا مع أطفالنا أيضًا. قضينا يومًا جميلًا جدًا بجانب البحيرة، بالتأكيد سنعود في المرة القادمة في الصيف.'
  },
  'review_7_text': {
    'en': 'Beautiful natural environment, easy access, hospitality. They cook very tasty in the kitchen, the room was new and clean. The lake is simply fantastic, crystal clear and not cold. They rent a boat at their own jetty at a fair price - it is a great experience. We will be back!',
    'bs': 'Prekrasno prirodno okruženje, lak pristup, gostoprimstvo. Kuvhju vrlo ukusno u kuhinji, soba je bila nova i čista. Jezero je jednostavno fantastično, kristalno čisto i nije hladno. Iznajmljuju splav na svom sopstvenom pristaništu po fer cijeni - to je odlično iskustvo. Vratićemo se!',
    'ar': 'بيئة طبيعية جميلة، وصول سهل، ضيافة. يطبخون طعامًا لذيذًا جدًا في المطبخ، والغرفة كانت جديدة ونظيفة. البحيرة رائعة ببساطة، صافية كالكريستال وليست باردة. يؤجرون قاربًا في رصيفهم الخاص بسعر عادل - إنها تجربة رائعة. سنعود!'
  },
}; 