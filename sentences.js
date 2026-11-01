/* 120 reviewed learning prompts for Jomlati MVP. */
const sentences = [
  {
    "en": "Good morning!",
    "ar": "صباح الخير!",
    "word": "morning",
    "meaning": "الصباح",
    "options": [
      "الصباح",
      "المساء",
      "الليل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تُستخدم للتحية في بداية اليوم."
  },
  {
    "en": "How are you today?",
    "ar": "كيف حالك اليوم؟",
    "word": "today",
    "meaning": "اليوم",
    "options": [
      "اليوم",
      "أمس",
      "غداً"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "سؤال لطيف للاطمئنان على شخص."
  },
  {
    "en": "I am doing well, thank you.",
    "ar": "أنا بخير، شكراً لك.",
    "word": "well",
    "meaning": "بخير",
    "options": [
      "بخير",
      "متعب",
      "غاضب"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "إجابة شائعة عن سؤال How are you?"
  },
  {
    "en": "What is your name?",
    "ar": "ما اسمك؟",
    "word": "name",
    "meaning": "الاسم",
    "options": [
      "الاسم",
      "العمر",
      "العنوان"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للتعارف مع شخص جديد."
  },
  {
    "en": "My name is Ahmed.",
    "ar": "اسمي أحمد.",
    "word": "name",
    "meaning": "الاسم",
    "options": [
      "الاسم",
      "العمل",
      "البلد"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "استبدل Ahmed باسمك."
  },
  {
    "en": "Nice to meet you.",
    "ar": "سعيد بلقائك.",
    "word": "meet",
    "meaning": "ألتقي",
    "options": [
      "ألتقي",
      "أغادر",
      "أنتظر"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تقال عند التعارف لأول مرة."
  },
  {
    "en": "Where are you from?",
    "ar": "من أين أنت؟",
    "word": "from",
    "meaning": "من",
    "options": [
      "من",
      "إلى",
      "مع"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للسؤال عن بلد أو مدينة الشخص."
  },
  {
    "en": "I live near the city center.",
    "ar": "أعيش بالقرب من وسط المدينة.",
    "word": "near",
    "meaning": "بالقرب من",
    "options": [
      "بالقرب من",
      "بعيداً عن",
      "داخل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تصف مكان السكن."
  },
  {
    "en": "Could you speak more slowly?",
    "ar": "هل يمكنك التحدث ببطء أكثر؟",
    "word": "slowly",
    "meaning": "ببطء",
    "options": [
      "ببطء",
      "بصوت عالٍ",
      "بسرعة"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "مفيدة عندما لا تفهم المتحدث."
  },
  {
    "en": "I do not understand.",
    "ar": "أنا لا أفهم.",
    "word": "understand",
    "meaning": "أفهم",
    "options": [
      "أفهم",
      "أتذكر",
      "أوافق"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "عبارة واضحة لطلب التوضيح."
  },
  {
    "en": "Can you repeat that, please?",
    "ar": "هل يمكنك إعادة ذلك من فضلك؟",
    "word": "repeat",
    "meaning": "يعيد",
    "options": [
      "يعيد",
      "يترجم",
      "يكتب"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "اطلب بها إعادة الكلام."
  },
  {
    "en": "Thank you for your help.",
    "ar": "شكراً لمساعدتك.",
    "word": "help",
    "meaning": "مساعدة",
    "options": [
      "مساعدة",
      "نصيحة",
      "زيارة"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للتعبير عن الامتنان."
  },
  {
    "en": "You are welcome.",
    "ar": "على الرحب والسعة.",
    "word": "welcome",
    "meaning": "مرحباً / على الرحب والسعة",
    "options": [
      "مرحباً / على الرحب والسعة",
      "آسف",
      "وداعاً"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "رد شائع على Thank you."
  },
  {
    "en": "Excuse me, where is the bathroom?",
    "ar": "عذراً، أين الحمام؟",
    "word": "where",
    "meaning": "أين",
    "options": [
      "أين",
      "متى",
      "لماذا"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "سؤال عملي في الأماكن العامة."
  },
  {
    "en": "I am just looking, thank you.",
    "ar": "أنا أتفرج فقط، شكراً.",
    "word": "looking",
    "meaning": "أتفرج / أنظر",
    "options": [
      "أتفرج / أنظر",
      "أشتري",
      "أنتظر"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تُستخدم في المتاجر عندما لا تحتاج مساعدة."
  },
  {
    "en": "How much does this cost?",
    "ar": "كم سعر هذا؟",
    "word": "cost",
    "meaning": "يكلف / السعر",
    "options": [
      "يكلف / السعر",
      "يحتوي",
      "يستغرق"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للسؤال عن السعر."
  },
  {
    "en": "That sounds great!",
    "ar": "هذا يبدو رائعاً!",
    "word": "great",
    "meaning": "رائع",
    "options": [
      "رائع",
      "ممل",
      "صعب"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "لإظهار الحماس والموافقة."
  },
  {
    "en": "I agree with you.",
    "ar": "أنا أتفق معك.",
    "word": "agree",
    "meaning": "أتفق",
    "options": [
      "أتفق",
      "أختلف",
      "أنسى"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للتعبير عن الموافقة."
  },
  {
    "en": "I am not sure.",
    "ar": "لست متأكداً.",
    "word": "sure",
    "meaning": "متأكد",
    "options": [
      "متأكد",
      "جاهز",
      "مشغول"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "عندما تحتاج وقتاً للتفكير."
  },
  {
    "en": "Let me think about it.",
    "ar": "دعني أفكر في الأمر.",
    "word": "think",
    "meaning": "أفكر",
    "options": [
      "أفكر",
      "أشرح",
      "أقرر"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تمنحك وقتاً قبل الإجابة."
  },
  {
    "en": "What time is it?",
    "ar": "كم الساعة؟",
    "word": "time",
    "meaning": "الوقت",
    "options": [
      "الوقت",
      "التاريخ",
      "المكان"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للسؤال عن الساعة."
  },
  {
    "en": "I will be there soon.",
    "ar": "سأكون هناك قريباً.",
    "word": "soon",
    "meaning": "قريباً",
    "options": [
      "قريباً",
      "أبداً",
      "متأخراً"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "لإخبار شخص أنك قادم."
  },
  {
    "en": "I am on my way.",
    "ar": "أنا في الطريق.",
    "word": "way",
    "meaning": "الطريق",
    "options": [
      "الطريق",
      "المنزل",
      "العمل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تُرسل عادة عند التوجه إلى مكان ما."
  },
  {
    "en": "See you tomorrow.",
    "ar": "أراك غداً.",
    "word": "tomorrow",
    "meaning": "غداً",
    "options": [
      "غداً",
      "اليوم",
      "الأسبوع"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "وداع مناسب عند توقع اللقاء في اليوم التالي."
  },
  {
    "en": "Have a nice day!",
    "ar": "أتمنى لك يوماً سعيداً!",
    "word": "nice",
    "meaning": "سعيد / لطيف",
    "options": [
      "سعيد / لطيف",
      "طويل",
      "صعب"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "عبارة وداع مهذبة."
  },
  {
    "en": "I need a little more time.",
    "ar": "أحتاج إلى مزيد من الوقت.",
    "word": "need",
    "meaning": "أحتاج",
    "options": [
      "أحتاج",
      "أبيع",
      "أعرف"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "لطلب وقت إضافي."
  },
  {
    "en": "Could you send me the details?",
    "ar": "هل يمكنك إرسال التفاصيل لي؟",
    "word": "details",
    "meaning": "التفاصيل",
    "options": [
      "التفاصيل",
      "الصور",
      "الأسعار"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تصلح للمحادثات والرسائل."
  },
  {
    "en": "I will call you later.",
    "ar": "سأتصل بك لاحقاً.",
    "word": "later",
    "meaning": "لاحقاً",
    "options": [
      "لاحقاً",
      "الآن",
      "مبكراً"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "لإنهاء المكالمة مع وعد بالتواصل."
  },
  {
    "en": "It was nice talking to you.",
    "ar": "كان الحديث معك ممتعاً.",
    "word": "talking",
    "meaning": "الحديث",
    "options": [
      "الحديث",
      "الانتظار",
      "السفر"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تقال عند إنهاء محادثة لطيفة."
  },
  {
    "en": "Have a wonderful weekend.",
    "ar": "أتمنى لك عطلة نهاية أسبوع رائعة.",
    "word": "weekend",
    "meaning": "عطلة نهاية الأسبوع",
    "options": [
      "عطلة نهاية الأسبوع",
      "يوم العمل",
      "الصباح"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تمنٍ شائع قبل عطلة نهاية الأسبوع."
  },
  {
    "en": "I am looking for a job.",
    "ar": "أنا أبحث عن وظيفة.",
    "word": "looking for",
    "meaning": "أبحث عن",
    "options": [
      "أبحث عن",
      "أعمل في",
      "أترك"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "عبارة أساسية عند الحديث عن البحث عن عمل."
  },
  {
    "en": "I have experience in customer service.",
    "ar": "لدي خبرة في خدمة العملاء.",
    "word": "experience",
    "meaning": "خبرة",
    "options": [
      "خبرة",
      "شهادة",
      "موعد"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "يمكنك استبدال مجال العمل حسب خبرتك."
  },
  {
    "en": "I am available for an interview.",
    "ar": "أنا متاح لإجراء مقابلة.",
    "word": "available",
    "meaning": "متاح",
    "options": [
      "متاح",
      "متأخر",
      "مشغول"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "للرد على دعوة مقابلة."
  },
  {
    "en": "Could you tell me about the role?",
    "ar": "هل يمكنك إخباري عن طبيعة الوظيفة؟",
    "word": "role",
    "meaning": "الدور / الوظيفة",
    "options": [
      "الدور / الوظيفة",
      "الراتب",
      "المكتب"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "سؤال مناسب لفهم مسؤوليات الوظيفة."
  },
  {
    "en": "I work well in a team.",
    "ar": "أعمل جيداً ضمن فريق.",
    "word": "team",
    "meaning": "فريق",
    "options": [
      "فريق",
      "مكتب",
      "شركة"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "تصف مهارة العمل الجماعي."
  },
  {
    "en": "I am a quick learner.",
    "ar": "أنا سريع التعلم.",
    "word": "learner",
    "meaning": "متعلم",
    "options": [
      "متعلم",
      "مدير",
      "متحدث"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "تُستخدم لإبراز القدرة على التعلم."
  },
  {
    "en": "I can start immediately.",
    "ar": "يمكنني البدء فوراً.",
    "word": "immediately",
    "meaning": "فوراً",
    "options": [
      "فوراً",
      "لاحقاً",
      "أسبوعياً"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "تُقال عند السؤال عن موعد المباشرة."
  },
  {
    "en": "I am interested in this position.",
    "ar": "أنا مهتم بهذه الوظيفة.",
    "word": "position",
    "meaning": "وظيفة / منصب",
    "options": [
      "وظيفة / منصب",
      "مشكلة",
      "إجازة"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "عبارة لإظهار الاهتمام بالفرصة."
  },
  {
    "en": "My strengths are communication and teamwork.",
    "ar": "نقاط قوتي هي التواصل والعمل الجماعي.",
    "word": "strengths",
    "meaning": "نقاط القوة",
    "options": [
      "نقاط القوة",
      "نقاط الضعف",
      "الهوايات"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "مثال على إجابة في مقابلة."
  },
  {
    "en": "I would like to learn more.",
    "ar": "أود معرفة المزيد.",
    "word": "learn",
    "meaning": "أتعلم / أعرف",
    "options": [
      "أتعلم / أعرف",
      "أغادر",
      "أبيع"
    ],
    "level": "مبتدئ",
    "category": "العمل والمقابلات",
    "usage": "تُظهر رغبتك في فهم الفرصة."
  },
  {
    "en": "I have three years of relevant experience.",
    "ar": "لدي ثلاث سنوات من الخبرة ذات الصلة.",
    "word": "relevant",
    "meaning": "ذات صلة",
    "options": [
      "ذات صلة",
      "حديثة",
      "قليلة"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "استخدمها لتوضيح خبرتك المرتبطة بالوظيفة."
  },
  {
    "en": "I was responsible for managing the project.",
    "ar": "كنت مسؤولاً عن إدارة المشروع.",
    "word": "responsible",
    "meaning": "مسؤول",
    "options": [
      "مسؤول",
      "متردد",
      "مندهش"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "تصف مسؤولية سابقة في سيرتك المهنية."
  },
  {
    "en": "I enjoy solving problems.",
    "ar": "أستمتع بحل المشكلات.",
    "word": "solving",
    "meaning": "حل",
    "options": [
      "حل",
      "تجنب",
      "تأجيل"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "تصف أسلوبك في التعامل مع التحديات."
  },
  {
    "en": "I can work under pressure.",
    "ar": "أستطيع العمل تحت الضغط.",
    "word": "pressure",
    "meaning": "الضغط",
    "options": [
      "الضغط",
      "الراحة",
      "التغيير"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "مهارة مطلوبة في بعض بيئات العمل."
  },
  {
    "en": "Could you clarify the main responsibilities?",
    "ar": "هل يمكنك توضيح المسؤوليات الرئيسية؟",
    "word": "clarify",
    "meaning": "يوضح",
    "options": [
      "يوضح",
      "يلغي",
      "يؤجل"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "سؤال مهني عند مناقشة وصف الوظيفة."
  },
  {
    "en": "I am flexible with working hours.",
    "ar": "لدي مرونة في ساعات العمل.",
    "word": "flexible",
    "meaning": "مرن",
    "options": [
      "مرن",
      "صارم",
      "متعب"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "توضح استعدادك لترتيبات مختلفة."
  },
  {
    "en": "I would be happy to contribute to the team.",
    "ar": "سيسعدني أن أساهم في الفريق.",
    "word": "contribute",
    "meaning": "أساهم",
    "options": [
      "أساهم",
      "أنافس",
      "أغادر"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "تعبير إيجابي عن الرغبة في الإضافة."
  },
  {
    "en": "I have attached my updated CV.",
    "ar": "أرفقت سيرتي الذاتية المحدّثة.",
    "word": "attached",
    "meaning": "أرفقت",
    "options": [
      "أرفقت",
      "حذفت",
      "راجعت"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "مناسبة لرسالة التقديم بالبريد."
  },
  {
    "en": "Thank you for considering my application.",
    "ar": "شكراً للنظر في طلبي.",
    "word": "considering",
    "meaning": "النظر في / دراسة",
    "options": [
      "النظر في / دراسة",
      "رفض",
      "توقيع"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "خاتمة مهذبة لرسالة التقديم."
  },
  {
    "en": "I look forward to hearing from you.",
    "ar": "أتطلع إلى تلقي ردكم.",
    "word": "look forward",
    "meaning": "أتطلع إلى",
    "options": [
      "أتطلع إلى",
      "أخشى",
      "أنسى"
    ],
    "level": "متوسط",
    "category": "العمل والمقابلات",
    "usage": "تستخدم في نهاية المراسلات المهنية."
  },
  {
    "en": "I led a team through a challenging period.",
    "ar": "قدت فريقاً خلال فترة مليئة بالتحديات.",
    "word": "led",
    "meaning": "قدت",
    "options": [
      "قدت",
      "اتبعت",
      "دعمت"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "مثال قوي لوصف تجربة قيادية."
  },
  {
    "en": "We improved the process by twenty percent.",
    "ar": "حسّنا العملية بنسبة عشرين بالمئة.",
    "word": "improved",
    "meaning": "حسّنا",
    "options": [
      "حسّنا",
      "أوقفنا",
      "كررنا"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "اربطها بنتيجة قابلة للقياس عند توفرها."
  },
  {
    "en": "I prioritize tasks based on urgency and impact.",
    "ar": "أرتب الأولويات بناءً على الاستعجال والأثر.",
    "word": "prioritize",
    "meaning": "أرتب الأولويات",
    "options": [
      "أرتب الأولويات",
      "أتجاهل",
      "أؤجل"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "تصف مهارة إدارة الوقت."
  },
  {
    "en": "I welcome constructive feedback.",
    "ar": "أرحب بالملاحظات البنّاءة.",
    "word": "constructive",
    "meaning": "بنّاءة",
    "options": [
      "بنّاءة",
      "قاسية",
      "غامضة"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "تظهر تقبلك للتطوير المهني."
  },
  {
    "en": "Could you share the expected timeline?",
    "ar": "هل يمكنك مشاركة الجدول الزمني المتوقع؟",
    "word": "timeline",
    "meaning": "الجدول الزمني",
    "options": [
      "الجدول الزمني",
      "الميزانية",
      "المسمى"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "سؤال عن مراحل العمل أو التوظيف."
  },
  {
    "en": "I am confident that I can add value.",
    "ar": "أنا واثق من قدرتي على إضافة قيمة.",
    "word": "confident",
    "meaning": "واثق",
    "options": [
      "واثق",
      "قلق",
      "متردد"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "تُستخدم بثقة دون مبالغة."
  },
  {
    "en": "My approach is practical and results-oriented.",
    "ar": "نهجي عملي ويركز على النتائج.",
    "word": "approach",
    "meaning": "نهج / أسلوب",
    "options": [
      "نهج / أسلوب",
      "مشكلة",
      "تقرير"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "وصف موجز لطريقة العمل."
  },
  {
    "en": "I coordinated with different departments.",
    "ar": "نسّقت مع أقسام مختلفة.",
    "word": "coordinated",
    "meaning": "نسّقت",
    "options": [
      "نسّقت",
      "تنافست",
      "اختلفت"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "تصف خبرة التعاون بين الأقسام."
  },
  {
    "en": "I would appreciate the opportunity to discuss this further.",
    "ar": "سأقدّر فرصة مناقشة هذا الأمر بمزيد من التفصيل.",
    "word": "opportunity",
    "meaning": "فرصة",
    "options": [
      "فرصة",
      "عقبة",
      "نتيجة"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "عبارة ختامية مناسبة بعد مقابلة أو تواصل مهني."
  },
  {
    "en": "Could you let me know the next steps?",
    "ar": "هل يمكنك إخباري بالخطوات التالية؟",
    "word": "next steps",
    "meaning": "الخطوات التالية",
    "options": [
      "الخطوات التالية",
      "النتائج السابقة",
      "المهام اليومية"
    ],
    "level": "متقدم",
    "category": "العمل والمقابلات",
    "usage": "سؤال مناسب بعد المقابلة."
  },
  {
    "en": "I am a university student.",
    "ar": "أنا طالب جامعي.",
    "word": "university",
    "meaning": "جامعة",
    "options": [
      "جامعة",
      "مدرسة",
      "مكتبة"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "تعريف بسيط عن وضعك الدراسي."
  },
  {
    "en": "Where is the library?",
    "ar": "أين المكتبة؟",
    "word": "library",
    "meaning": "مكتبة",
    "options": [
      "مكتبة",
      "مختبر",
      "قاعة"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "للسؤال عن مكان المكتبة."
  },
  {
    "en": "I have a class at nine.",
    "ar": "لدي محاضرة في التاسعة.",
    "word": "class",
    "meaning": "حصة / محاضرة",
    "options": [
      "حصة / محاضرة",
      "امتحان",
      "عطلة"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "تستخدم للحديث عن جدولك الدراسي."
  },
  {
    "en": "When is the exam?",
    "ar": "متى الامتحان؟",
    "word": "exam",
    "meaning": "امتحان",
    "options": [
      "امتحان",
      "واجب",
      "درس"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "سؤال عن موعد الاختبار."
  },
  {
    "en": "I need to study tonight.",
    "ar": "أحتاج إلى الدراسة الليلة.",
    "word": "study",
    "meaning": "أدرس",
    "options": [
      "أدرس",
      "أنام",
      "أسافر"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "للتعبير عن خطة الدراسة."
  },
  {
    "en": "Can I borrow your notes?",
    "ar": "هل يمكنني استعارة ملاحظاتك؟",
    "word": "borrow",
    "meaning": "أستعير",
    "options": [
      "أستعير",
      "أشتري",
      "أبيع"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "طلب مهذب من زميل."
  },
  {
    "en": "The lesson starts at ten.",
    "ar": "يبدأ الدرس في العاشرة.",
    "word": "starts",
    "meaning": "يبدأ",
    "options": [
      "يبدأ",
      "ينتهي",
      "يتغير"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "للحديث عن وقت بدء الدرس."
  },
  {
    "en": "I have finished my homework.",
    "ar": "أنهيت واجبي المنزلي.",
    "word": "finished",
    "meaning": "أنهيت",
    "options": [
      "أنهيت",
      "بدأت",
      "نسيت"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "تخبر بها أنك أكملت الواجب."
  },
  {
    "en": "Could you explain this question?",
    "ar": "هل يمكنك شرح هذا السؤال؟",
    "word": "explain",
    "meaning": "يشرح",
    "options": [
      "يشرح",
      "يكتب",
      "يحفظ"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "لطلب المساعدة من المعلم أو زميل."
  },
  {
    "en": "I am preparing for the exam.",
    "ar": "أنا أستعد للامتحان.",
    "word": "preparing",
    "meaning": "أستعد",
    "options": [
      "أستعد",
      "أحتفل",
      "أغادر"
    ],
    "level": "مبتدئ",
    "category": "الدراسة والجامعة",
    "usage": "تصف المذاكرة قبل الاختبار."
  },
  {
    "en": "I am majoring in educational administration.",
    "ar": "أتخصص في الإدارة التربوية.",
    "word": "majoring",
    "meaning": "أتخصص",
    "options": [
      "أتخصص",
      "أتدرب",
      "أعمل"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "استبدل التخصص بتخصصك."
  },
  {
    "en": "The assignment is due next Monday.",
    "ar": "موعد تسليم الواجب يوم الاثنين القادم.",
    "word": "due",
    "meaning": "موعد استحقاق / تسليم",
    "options": [
      "موعد استحقاق / تسليم",
      "ملغي",
      "اختياري"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "مهمة لمعرفة مواعيد التسليم."
  },
  {
    "en": "I would like to join the discussion.",
    "ar": "أود المشاركة في النقاش.",
    "word": "discussion",
    "meaning": "نقاش",
    "options": [
      "نقاش",
      "محاضرة",
      "رحلة"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "عبارة للمشاركة في الصف."
  },
  {
    "en": "Could you recommend a useful reference?",
    "ar": "هل يمكنك اقتراح مرجع مفيد؟",
    "word": "reference",
    "meaning": "مرجع",
    "options": [
      "مرجع",
      "قاعة",
      "درجة"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "تطلب بها مصدراً أكاديمياً."
  },
  {
    "en": "I need to review my lecture notes.",
    "ar": "أحتاج إلى مراجعة ملاحظات المحاضرة.",
    "word": "review",
    "meaning": "أراجع",
    "options": [
      "أراجع",
      "أطبع",
      "أرسل"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "تصف مراجعة المادة الدراسية."
  },
  {
    "en": "The research focuses on educational leadership.",
    "ar": "يركز البحث على القيادة التربوية.",
    "word": "focuses",
    "meaning": "يركز",
    "options": [
      "يركز",
      "يعترض",
      "يتوقف"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "مثال على وصف موضوع بحث."
  },
  {
    "en": "I collected data for my research.",
    "ar": "جمعت بيانات لبحثي.",
    "word": "collected",
    "meaning": "جمعت",
    "options": [
      "جمعت",
      "حللت",
      "نشرت"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "تصف خطوة من خطوات البحث العلمي."
  },
  {
    "en": "The results support our hypothesis.",
    "ar": "تدعم النتائج فرضيتنا.",
    "word": "support",
    "meaning": "تدعم",
    "options": [
      "تدعم",
      "ترفض",
      "تخفي"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "تستخدم عند مناقشة النتائج."
  },
  {
    "en": "I need an extension for the deadline.",
    "ar": "أحتاج إلى تمديد للموعد النهائي.",
    "word": "extension",
    "meaning": "تمديد",
    "options": [
      "تمديد",
      "تأكيد",
      "نسخة"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "طلب مهذب عند الحاجة إلى وقت إضافي."
  },
  {
    "en": "I submitted the final version yesterday.",
    "ar": "قدمت النسخة النهائية أمس.",
    "word": "submitted",
    "meaning": "قدمت",
    "options": [
      "قدمت",
      "استلمت",
      "عدلت"
    ],
    "level": "متوسط",
    "category": "الدراسة والجامعة",
    "usage": "تصف تسليم عمل أكاديمي."
  },
  {
    "en": "The findings highlight the importance of collaboration.",
    "ar": "تسلط النتائج الضوء على أهمية التعاون.",
    "word": "findings",
    "meaning": "النتائج",
    "options": [
      "النتائج",
      "الأسئلة",
      "المراجع"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "تعبير شائع في الكتابة الأكاديمية."
  },
  {
    "en": "The literature review identifies a research gap.",
    "ar": "تحدد مراجعة الأدبيات فجوة بحثية.",
    "word": "gap",
    "meaning": "فجوة",
    "options": [
      "فجوة",
      "فرضية",
      "عينة"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "تصف وظيفة مراجعة الدراسات السابقة."
  },
  {
    "en": "We used a descriptive correlational approach.",
    "ar": "استخدمنا المنهج الوصفي الارتباطي.",
    "word": "approach",
    "meaning": "منهج / مقاربة",
    "options": [
      "منهج / مقاربة",
      "نتيجة",
      "مقابلة"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "مصطلح لوصف تصميم البحث."
  },
  {
    "en": "The data were analyzed using statistical software.",
    "ar": "حُللت البيانات باستخدام برنامج إحصائي.",
    "word": "analyzed",
    "meaning": "حُللت",
    "options": [
      "حُللت",
      "جُمعت",
      "حُذفت"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "عبارة مناسبة لقسم تحليل البيانات."
  },
  {
    "en": "Further research is needed to confirm these results.",
    "ar": "هناك حاجة إلى مزيد من البحث لتأكيد هذه النتائج.",
    "word": "further",
    "meaning": "مزيد من",
    "options": [
      "مزيد من",
      "أقل من",
      "نوع من"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "تستخدم عند ذكر حدود الدراسة."
  },
  {
    "en": "The study contributes to the existing body of knowledge.",
    "ar": "تسهم الدراسة في رصيد المعرفة القائم.",
    "word": "contributes",
    "meaning": "تسهم",
    "options": [
      "تسهم",
      "تنسحب",
      "تتعارض"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "عبارة أكاديمية لتوضيح الإضافة العلمية."
  },
  {
    "en": "Please find the revised draft attached.",
    "ar": "يرجى الاطلاع على المسودة المعدلة المرفقة.",
    "word": "revised",
    "meaning": "معدلة",
    "options": [
      "معدلة",
      "أولية",
      "مفقودة"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "تستخدم عند إرسال نسخة معدلة للمشرف."
  },
  {
    "en": "I would value your comments on the methodology.",
    "ar": "سأقدّر ملاحظاتك حول المنهجية.",
    "word": "methodology",
    "meaning": "المنهجية",
    "options": [
      "المنهجية",
      "النتائج",
      "العنوان"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "طلب تغذية راجعة أكاديمية."
  },
  {
    "en": "The evidence suggests a strong relationship between the variables.",
    "ar": "تشير الأدلة إلى وجود علاقة قوية بين المتغيرات.",
    "word": "evidence",
    "meaning": "الأدلة",
    "options": [
      "الأدلة",
      "الآراء",
      "المواعيد"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "صياغة حذرة لعرض نتائج البحث."
  },
  {
    "en": "Our conclusions should be interpreted with caution.",
    "ar": "ينبغي تفسير استنتاجاتنا بحذر.",
    "word": "caution",
    "meaning": "حذر",
    "options": [
      "حذر",
      "سرعة",
      "ثقة"
    ],
    "level": "متقدم",
    "category": "الدراسة والجامعة",
    "usage": "تعبير مهم عند مناقشة حدود النتائج."
  },
  {
    "en": "I have a reservation.",
    "ar": "لدي حجز.",
    "word": "reservation",
    "meaning": "حجز",
    "options": [
      "حجز",
      "تذكرة",
      "حقيبة"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "تستخدم عند الوصول إلى الفندق أو المطعم."
  },
  {
    "en": "Where is the check-in desk?",
    "ar": "أين مكتب تسجيل الوصول؟",
    "word": "check-in",
    "meaning": "تسجيل الوصول",
    "options": [
      "تسجيل الوصول",
      "استلام الأمتعة",
      "بوابة المغادرة"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للسؤال في المطار."
  },
  {
    "en": "Here is my passport.",
    "ar": "هذا جواز سفري.",
    "word": "passport",
    "meaning": "جواز سفر",
    "options": [
      "جواز سفر",
      "بطاقة",
      "تذكرة"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "عند طلب وثيقة السفر."
  },
  {
    "en": "What time does the flight leave?",
    "ar": "متى تقلع الرحلة؟",
    "word": "flight",
    "meaning": "رحلة جوية",
    "options": [
      "رحلة جوية",
      "حافلة",
      "قطار"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للسؤال عن موعد الإقلاع."
  },
  {
    "en": "I would like a window seat.",
    "ar": "أود مقعداً بجانب النافذة.",
    "word": "window",
    "meaning": "نافذة",
    "options": [
      "نافذة",
      "ممر",
      "مخرج"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "طلب اختيار المقعد."
  },
  {
    "en": "Is breakfast included?",
    "ar": "هل الإفطار مشمول؟",
    "word": "included",
    "meaning": "مشمول",
    "options": [
      "مشمول",
      "متأخر",
      "جاهز"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "سؤال شائع في الفندق."
  },
  {
    "en": "Could I have the Wi-Fi password?",
    "ar": "هل يمكنني الحصول على كلمة مرور الواي فاي؟",
    "word": "password",
    "meaning": "كلمة مرور",
    "options": [
      "كلمة مرور",
      "اسم المستخدم",
      "رقم الغرفة"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للاتصال بالإنترنت في الفندق أو المقهى."
  },
  {
    "en": "I need a taxi, please.",
    "ar": "أحتاج إلى سيارة أجرة من فضلك.",
    "word": "taxi",
    "meaning": "سيارة أجرة",
    "options": [
      "سيارة أجرة",
      "حافلة",
      "دراجة"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "لطلب وسيلة نقل."
  },
  {
    "en": "How long does it take?",
    "ar": "كم يستغرق ذلك من الوقت؟",
    "word": "long",
    "meaning": "طويل / مدة",
    "options": [
      "طويل / مدة",
      "بعيد",
      "مكلف"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للسؤال عن مدة الرحلة."
  },
  {
    "en": "Can you show me on the map?",
    "ar": "هل يمكنك أن تريني على الخريطة؟",
    "word": "map",
    "meaning": "خريطة",
    "options": [
      "خريطة",
      "صورة",
      "قائمة"
    ],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "لطلب تحديد المكان."
  },
  {
    "en": "I would like to change my booking.",
    "ar": "أود تغيير حجزي.",
    "word": "booking",
    "meaning": "حجز",
    "options": [
      "حجز",
      "رحلة",
      "غرفة"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "تستخدم عند تعديل الحجز."
  },
  {
    "en": "My luggage has not arrived.",
    "ar": "أمتعتي لم تصل.",
    "word": "luggage",
    "meaning": "أمتعة",
    "options": [
      "أمتعة",
      "وثائق",
      "مقاعد"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للتواصل مع مكتب الأمتعة المفقودة."
  },
  {
    "en": "Is there a direct train to the airport?",
    "ar": "هل يوجد قطار مباشر إلى المطار؟",
    "word": "direct",
    "meaning": "مباشر",
    "options": [
      "مباشر",
      "مزدحم",
      "متأخر"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للسؤال عن وسيلة نقل دون تبديل."
  },
  {
    "en": "Could I have a late check-out?",
    "ar": "هل يمكنني تسجيل مغادرة متأخر؟",
    "word": "late",
    "meaning": "متأخر",
    "options": [
      "متأخر",
      "مبكر",
      "سريع"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "طلب تمديد وقت مغادرة الفندق."
  },
  {
    "en": "I would like to confirm my departure time.",
    "ar": "أود تأكيد موعد مغادرتي.",
    "word": "confirm",
    "meaning": "أؤكد",
    "options": [
      "أؤكد",
      "أغير",
      "ألغي"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "مفيد قبل موعد السفر."
  },
  {
    "en": "Is this seat already taken?",
    "ar": "هل هذا المقعد محجوز بالفعل؟",
    "word": "taken",
    "meaning": "محجوز / مشغول",
    "options": [
      "محجوز / مشغول",
      "مريح",
      "نظيف"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للتأكد قبل الجلوس."
  },
  {
    "en": "Could you recommend a local restaurant?",
    "ar": "هل يمكنك اقتراح مطعم محلي؟",
    "word": "recommend",
    "meaning": "يقترح",
    "options": [
      "يقترح",
      "يحجز",
      "يدفع"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للحصول على اقتراح من السكان المحليين."
  },
  {
    "en": "I seem to have lost my wallet.",
    "ar": "يبدو أنني فقدت محفظتي.",
    "word": "lost",
    "meaning": "فقدت",
    "options": [
      "فقدت",
      "وجدت",
      "نسيت"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "تستخدم لطلب المساعدة عند فقدان المحفظة."
  },
  {
    "en": "What is the best way to get there?",
    "ar": "ما أفضل طريقة للوصول إلى هناك؟",
    "word": "way",
    "meaning": "طريقة",
    "options": [
      "طريقة",
      "وقت",
      "سعر"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للسؤال عن أفضل وسيلة للوصول."
  },
  {
    "en": "Could you write down the address?",
    "ar": "هل يمكنك كتابة العنوان؟",
    "word": "address",
    "meaning": "العنوان",
    "options": [
      "العنوان",
      "الموعد",
      "الاسم"
    ],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "لتجنب نسيان العنوان."
  },
  {
    "en": "My connecting flight has been delayed.",
    "ar": "تأخرت رحلتي المتصلة.",
    "word": "connecting",
    "meaning": "متصلة / ترانزيت",
    "options": [
      "متصلة / ترانزيت",
      "مباشرة",
      "ملغاة"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "تصف رحلة تليها رحلة أخرى."
  },
  {
    "en": "I need assistance with my travel documents.",
    "ar": "أحتاج إلى مساعدة بشأن وثائق سفري.",
    "word": "assistance",
    "meaning": "مساعدة",
    "options": [
      "مساعدة",
      "نسخة",
      "معلومات"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "عبارة رسمية لطلب المساعدة."
  },
  {
    "en": "Could you clarify the cancellation policy?",
    "ar": "هل يمكنك توضيح سياسة الإلغاء؟",
    "word": "cancellation",
    "meaning": "الإلغاء",
    "options": [
      "الإلغاء",
      "التأخير",
      "التأمين"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "مهمة قبل تعديل الحجوزات."
  },
  {
    "en": "The hotel is within walking distance.",
    "ar": "الفندق على مسافة يمكن قطعها سيراً.",
    "word": "within",
    "meaning": "ضمن / في حدود",
    "options": [
      "ضمن / في حدود",
      "خارج",
      "بعيد عن"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "تصف قرب المكان."
  },
  {
    "en": "I would like to request a receipt.",
    "ar": "أود طلب إيصال.",
    "word": "receipt",
    "meaning": "إيصال",
    "options": [
      "إيصال",
      "جواز",
      "خريطة"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "لطلب إثبات الدفع."
  },
  {
    "en": "Please let me know if there are any additional fees.",
    "ar": "يرجى إخباري إن كانت هناك أي رسوم إضافية.",
    "word": "additional",
    "meaning": "إضافية",
    "options": [
      "إضافية",
      "مخفّضة",
      "مستردة"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "للتأكد من التكلفة الكاملة."
  },
  {
    "en": "I missed my connection due to the delay.",
    "ar": "فاتتني رحلتي المتصلة بسبب التأخير.",
    "word": "due to",
    "meaning": "بسبب",
    "options": [
      "بسبب",
      "رغم",
      "قبل"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "تشرح سبب فوات الرحلة التالية."
  },
  {
    "en": "Could you arrange transportation to the hotel?",
    "ar": "هل يمكنك ترتيب وسيلة نقل إلى الفندق؟",
    "word": "arrange",
    "meaning": "يرتب",
    "options": [
      "يرتب",
      "يلغي",
      "يؤكد"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "طلب خدمة نقل."
  },
  {
    "en": "I need to report a missing item.",
    "ar": "أحتاج إلى الإبلاغ عن غرض مفقود.",
    "word": "report",
    "meaning": "أبلغ",
    "options": [
      "أبلغ",
      "أشتري",
      "أستبدل"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "تستخدم في المطار أو الفندق."
  },
  {
    "en": "Thank you for your assistance throughout the trip.",
    "ar": "شكراً لمساعدتكم طوال الرحلة.",
    "word": "throughout",
    "meaning": "طوال",
    "options": [
      "طوال",
      "قبل",
      "بعد"
    ],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "عبارة شكر رسمية في نهاية الرحلة."
  }
];
