/* 282 reviewed learning prompts for Jomlati MVP. */
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
  },
  {
    "en": "How was your weekend?",
    "ar": "كيف كانت عطلة نهاية الأسبوع؟",
    "word": "weekend",
    "meaning": "عطلة نهاية الأسبوع",
    "options": [
      "عطلة نهاية الأسبوع",
      "يوم العمل",
      "الإجازة المرضية"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "سؤال شائع لبدء حديث ودي بعد العطلة."
  },
  {
    "en": "What have you been up to?",
    "ar": "ماذا كنت تفعل مؤخراً؟",
    "word": "up to",
    "meaning": "تفعل / تنشغل بـ",
    "options": [
      "تفعل / تنشغل بـ",
      "تتذكر",
      "تشتري"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تُستخدم للسؤال عمّا استجد في حياة شخص."
  },
  {
    "en": "It has been a long time!",
    "ar": "مر وقت طويل!",
    "word": "long time",
    "meaning": "وقت طويل",
    "options": [
      "وقت طويل",
      "وقت قصير",
      "موعد قريب"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تقال عند لقاء شخص بعد غياب."
  },
  {
    "en": "I am glad to see you.",
    "ar": "يسعدني أن أراك.",
    "word": "glad",
    "meaning": "سعيد / مسرور",
    "options": [
      "سعيد / مسرور",
      "قلق",
      "متفاجئ"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تعبير لطيف عند استقبال شخص."
  },
  {
    "en": "How is everything going?",
    "ar": "كيف تسير الأمور؟",
    "word": "everything",
    "meaning": "كل شيء",
    "options": [
      "كل شيء",
      "لا شيء",
      "بعض الوقت"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "سؤال عام للاطمئنان على الأحوال."
  },
  {
    "en": "Things are going pretty well.",
    "ar": "الأمور تسير على ما يرام.",
    "word": "pretty well",
    "meaning": "بشكل جيد إلى حد كبير",
    "options": [
      "بشكل جيد إلى حد كبير",
      "بصعوبة شديدة",
      "ببطء شديد"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "إجابة طبيعية عن سؤال الأحوال."
  },
  {
    "en": "Sorry, I am a little late.",
    "ar": "آسف، لقد تأخرت قليلاً.",
    "word": "late",
    "meaning": "متأخر",
    "options": [
      "متأخر",
      "مبكر",
      "مستعد"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "اعتذار بسيط عند الوصول بعد الموعد."
  },
  {
    "en": "No worries, it happens.",
    "ar": "لا تقلق، فهذا يحدث.",
    "word": "no worries",
    "meaning": "لا تقلق",
    "options": [
      "لا تقلق",
      "لا تتحدث",
      "لا تقترب"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "رد مطمئن على اعتذار."
  },
  {
    "en": "Would you like to join us?",
    "ar": "هل ترغب في الانضمام إلينا؟",
    "word": "join",
    "meaning": "تنضم",
    "options": [
      "تنضم",
      "تغادر",
      "تنتظر"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "دعوة شخص للمشاركة في نشاط."
  },
  {
    "en": "That would be lovely.",
    "ar": "سيكون ذلك رائعاً.",
    "word": "lovely",
    "meaning": "رائع / جميل",
    "options": [
      "رائع / جميل",
      "مزعج",
      "مستحيل"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "قبول مهذب لدعوة أو اقتراح."
  },
  {
    "en": "I would love to, but I am busy.",
    "ar": "يسعدني ذلك، لكنني مشغول.",
    "word": "busy",
    "meaning": "مشغول",
    "options": [
      "مشغول",
      "متاح",
      "مرتاح"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "اعتذار مهذب عن عدم القدرة على المشاركة."
  },
  {
    "en": "Maybe another time.",
    "ar": "ربما في وقت آخر.",
    "word": "another time",
    "meaning": "وقت آخر",
    "options": [
      "وقت آخر",
      "في الحال",
      "كل يوم"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "اقتراح تأجيل اللقاء دون رفض قاطع."
  },
  {
    "en": "What do you think about this idea?",
    "ar": "ما رأيك في هذه الفكرة؟",
    "word": "think",
    "meaning": "تعتقد / ترى",
    "options": [
      "تعتقد / ترى",
      "تنسى",
      "تحتاج"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "طلب رأي شخص بشأن فكرة."
  },
  {
    "en": "That is a good point.",
    "ar": "هذه نقطة وجيهة.",
    "word": "point",
    "meaning": "نقطة",
    "options": [
      "نقطة",
      "مشكلة",
      "خطة"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تُظهر تقديرك لرأي المتحدث."
  },
  {
    "en": "I see what you mean.",
    "ar": "أفهم ما تقصده.",
    "word": "mean",
    "meaning": "تقصد",
    "options": [
      "تقصد",
      "تبيع",
      "تنسى"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تعبير عن فهم وجهة نظر شخص."
  },
  {
    "en": "Could you explain that again?",
    "ar": "هل يمكنك شرح ذلك مرة أخرى؟",
    "word": "explain",
    "meaning": "يشرح",
    "options": [
      "يشرح",
      "يختصر",
      "يؤجل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "طلب إعادة الشرح لفهم الفكرة."
  },
  {
    "en": "I did not catch the last part.",
    "ar": "لم أسمع الجزء الأخير بوضوح.",
    "word": "catch",
    "meaning": "أسمع / ألتقط",
    "options": [
      "أسمع / ألتقط",
      "أكتب",
      "أوافق"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تُستخدم عندما يفوتك جزء من الكلام."
  },
  {
    "en": "Let us keep in touch.",
    "ar": "لنبقَ على تواصل.",
    "word": "keep in touch",
    "meaning": "نبقى على تواصل",
    "options": [
      "نبقى على تواصل",
      "نغير المكان",
      "نغلق الباب"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تقال عند الوداع للحفاظ على العلاقة."
  },
  {
    "en": "I will send you a message.",
    "ar": "سأرسل لك رسالة.",
    "word": "message",
    "meaning": "رسالة",
    "options": [
      "رسالة",
      "فاتورة",
      "هدية"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "إخبار شخص بأنك ستتواصل معه كتابة."
  },
  {
    "en": "Did you get my message?",
    "ar": "هل وصلتك رسالتي؟",
    "word": "get",
    "meaning": "تستلم / يصلك",
    "options": [
      "تستلم / يصلك",
      "ترسل",
      "تحذف"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للتأكد من وصول رسالة."
  },
  {
    "en": "How have you been lately?",
    "ar": "كيف كانت أحوالك مؤخراً؟",
    "word": "lately",
    "meaning": "مؤخراً",
    "options": [
      "مؤخراً",
      "غداً",
      "سابقاً"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "للسؤال عن أحوال شخص خلال الفترة الأخيرة."
  },
  {
    "en": "I have been quite busy these days.",
    "ar": "كنت مشغولاً جداً هذه الأيام.",
    "word": "quite",
    "meaning": "إلى حد كبير / جداً",
    "options": [
      "إلى حد كبير / جداً",
      "نادراً",
      "تقريباً لا"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تصف انشغالك خلال الأيام الماضية."
  },
  {
    "en": "What brings you here today?",
    "ar": "ما الذي أتى بك إلى هنا اليوم؟",
    "word": "brings",
    "meaning": "يأتي بـ",
    "options": [
      "يأتي بـ",
      "يأخذ من",
      "يبتعد عن"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "سؤال مهذب لمعرفة سبب زيارة شخص."
  },
  {
    "en": "I am here to visit a friend.",
    "ar": "أنا هنا لزيارة صديق.",
    "word": "visit",
    "meaning": "أزور",
    "options": [
      "أزور",
      "أنتظر",
      "أعمل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "توضح سبب وجودك في مكان ما."
  },
  {
    "en": "Is anyone sitting here?",
    "ar": "هل يجلس أحد هنا؟",
    "word": "anyone",
    "meaning": "أي شخص / أحد",
    "options": [
      "أي شخص / أحد",
      "الجميع",
      "لا أحد أبداً"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "للاستئذان قبل الجلوس على مقعد."
  },
  {
    "en": "No, the seat is free.",
    "ar": "لا، المقعد شاغر.",
    "word": "free",
    "meaning": "شاغر / متاح",
    "options": [
      "شاغر / متاح",
      "محجوز",
      "مكسور"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "إجابة عند السؤال عن مقعد فارغ."
  },
  {
    "en": "Would you mind if I sat here?",
    "ar": "هل تمانع لو جلست هنا؟",
    "word": "sat",
    "meaning": "جلست",
    "options": [
      "جلست",
      "وقفت",
      "غادرت"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "استئذان مهذب قبل الجلوس."
  },
  {
    "en": "Not at all. Go ahead.",
    "ar": "إطلاقاً، تفضل.",
    "word": "not at all",
    "meaning": "إطلاقاً / أبداً",
    "options": [
      "إطلاقاً / أبداً",
      "ربما لاحقاً",
      "ليس الآن"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "الموافقة على طلب بطريقة ودودة."
  },
  {
    "en": "I think we have met before.",
    "ar": "أعتقد أننا التقينا من قبل.",
    "word": "before",
    "meaning": "من قبل",
    "options": [
      "من قبل",
      "في الخارج",
      "بعد قليل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تقال عندما يبدو الشخص مألوفاً لك."
  },
  {
    "en": "Your face looks familiar.",
    "ar": "وجهك يبدو مألوفاً.",
    "word": "familiar",
    "meaning": "مألوف",
    "options": [
      "مألوف",
      "غريب",
      "متعب"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "للتعبير عن شعورك بأنك رأيت شخصاً سابقاً."
  },
  {
    "en": "Where did we first meet?",
    "ar": "أين التقينا أول مرة؟",
    "word": "first",
    "meaning": "أول مرة",
    "options": [
      "أول مرة",
      "آخر مرة",
      "كل مرة"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "سؤال لتذكّر مكان التعارف."
  },
  {
    "en": "I cannot remember exactly.",
    "ar": "لا أستطيع أن أتذكر بالتحديد.",
    "word": "exactly",
    "meaning": "بالتحديد",
    "options": [
      "بالتحديد",
      "بسرعة",
      "بسهولة"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "توضح أنك لا تتذكر التفاصيل بدقة."
  },
  {
    "en": "That reminds me of something.",
    "ar": "هذا يذكرني بشيء ما.",
    "word": "reminds",
    "meaning": "يذكرني",
    "options": [
      "يذكرني",
      "يمنعني",
      "يساعدني"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "للانتقال إلى فكرة مرتبطة بالحديث."
  },
  {
    "en": "Speaking of which, how is your family?",
    "ar": "وبالمناسبة، كيف حال عائلتك؟",
    "word": "speaking of",
    "meaning": "بمناسبة الحديث عن",
    "options": [
      "بمناسبة الحديث عن",
      "بعيداً عن",
      "على الرغم من"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "للانتقال بسلاسة إلى موضوع مرتبط."
  },
  {
    "en": "Everyone is doing fine, thanks.",
    "ar": "الجميع بخير، شكراً.",
    "word": "everyone",
    "meaning": "الجميع",
    "options": [
      "الجميع",
      "لا أحد",
      "شخص واحد"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "إجابة عن سؤال يتعلق بالعائلة أو المجموعة."
  },
  {
    "en": "Please say hello to them for me.",
    "ar": "بلّغهم سلامي من فضلك.",
    "word": "say hello",
    "meaning": "بلّغ التحية",
    "options": [
      "بلّغ التحية",
      "اطلب المساعدة",
      "ودّعهم"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تُستخدم لإرسال التحية إلى أشخاص غير موجودين."
  },
  {
    "en": "I have not seen you around lately.",
    "ar": "لم أرك في المكان مؤخراً.",
    "word": "around",
    "meaning": "في المكان / هنا وهناك",
    "options": [
      "في المكان / هنا وهناك",
      "في الأعلى",
      "في الداخل فقط"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "تعبير عفوي عند ملاحظة غياب شخص."
  },
  {
    "en": "I have been away for a few days.",
    "ar": "كنت بعيداً لبضعة أيام.",
    "word": "away",
    "meaning": "بعيداً / خارج المكان",
    "options": [
      "بعيداً / خارج المكان",
      "مستعداً",
      "مزدحماً"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تفسير الغياب لفترة قصيرة."
  },
  {
    "en": "Did you enjoy the event?",
    "ar": "هل استمتعت بالفعالية؟",
    "word": "enjoy",
    "meaning": "استمتع",
    "options": [
      "استمتع",
      "نظّم",
      "فوّت"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "سؤال بعد حضور مناسبة أو نشاط."
  },
  {
    "en": "The atmosphere was wonderful.",
    "ar": "كانت الأجواء رائعة.",
    "word": "atmosphere",
    "meaning": "الأجواء",
    "options": [
      "الأجواء",
      "التكلفة",
      "الموعد"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "وصف إيجابي لأجواء مناسبة أو مكان."
  },
  {
    "en": "I especially liked the music.",
    "ar": "أعجبتني الموسيقى بشكل خاص.",
    "word": "especially",
    "meaning": "بشكل خاص",
    "options": [
      "بشكل خاص",
      "بالكاد",
      "بالخطأ"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تحديد أكثر شيء أعجبك."
  },
  {
    "en": "The place was packed.",
    "ar": "كان المكان مكتظاً.",
    "word": "packed",
    "meaning": "مكتظاً",
    "options": [
      "مكتظاً",
      "هادئاً",
      "مغلقاً"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "وصف مكان مزدحم جداً."
  },
  {
    "en": "We should do this again sometime.",
    "ar": "ينبغي أن نكرر هذا في وقت ما.",
    "word": "sometime",
    "meaning": "في وقت ما",
    "options": [
      "في وقت ما",
      "في كل لحظة",
      "أمس فقط"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "اقتراح تكرار نشاط ممتع مستقبلاً."
  },
  {
    "en": "Count me in!",
    "ar": "أنا معكم!",
    "word": "count me in",
    "meaning": "اعتبروني مشاركاً",
    "options": [
      "اعتبروني مشاركاً",
      "استثنوني",
      "انتظروني"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تعبير حماسي عن الموافقة على خطة."
  },
  {
    "en": "I will see if I can make it.",
    "ar": "سأرى إن كنت أستطيع الحضور.",
    "word": "make it",
    "meaning": "أتمكن من الحضور",
    "options": [
      "أتمكن من الحضور",
      "أجد الطريق",
      "أنهي الحديث"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "رد عندما لم تحسم قرارك بشأن الحضور."
  },
  {
    "en": "I will let you know by tomorrow.",
    "ar": "سأخبرك بحلول الغد.",
    "word": "by",
    "meaning": "بحلول",
    "options": [
      "بحلول",
      "بعد",
      "قبل"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تحديد موعد متوقع لإعطاء إجابة."
  },
  {
    "en": "That works perfectly for me.",
    "ar": "هذا يناسبني تماماً.",
    "word": "perfectly",
    "meaning": "تماماً",
    "options": [
      "تماماً",
      "نادراً",
      "تقريباً"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "الموافقة على موعد أو ترتيب."
  },
  {
    "en": "Could we make it a little earlier?",
    "ar": "هل يمكننا تقديم الموعد قليلاً؟",
    "word": "earlier",
    "meaning": "في وقت أبكر",
    "options": [
      "في وقت أبكر",
      "في وقت متأخر",
      "في مكان آخر"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "طلب تعديل الموعد ليكون أبكر."
  },
  {
    "en": "I have something else planned.",
    "ar": "لدي خطة أخرى.",
    "word": "planned",
    "meaning": "مخطط له",
    "options": [
      "مخطط له",
      "منسي",
      "مستحيل"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "توضيح أن لديك ارتباطاً آخر."
  },
  {
    "en": "I completely understand.",
    "ar": "أتفهم ذلك تماماً.",
    "word": "completely",
    "meaning": "تماماً / بالكامل",
    "options": [
      "تماماً / بالكامل",
      "جزئياً",
      "نادراً"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "إظهار التفهم لموقف شخص آخر."
  },
  {
    "en": "There is no need to apologize.",
    "ar": "لا داعي للاعتذار.",
    "word": "apologize",
    "meaning": "تعتذر",
    "options": [
      "تعتذر",
      "تنتظر",
      "تشرح"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "طمأنة شخص يعتذر."
  },
  {
    "en": "I did not mean to interrupt you.",
    "ar": "لم أقصد مقاطعتك.",
    "word": "interrupt",
    "meaning": "أقاطع",
    "options": [
      "أقاطع",
      "أساعد",
      "أنتظر"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "اعتذار عند مقاطعة حديث شخص."
  },
  {
    "en": "Please go on; I am listening.",
    "ar": "تفضل أكمل؛ أنا أستمع إليك.",
    "word": "go on",
    "meaning": "تابع / أكمل",
    "options": [
      "تابع / أكمل",
      "توقف",
      "غادر"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تشجيع المتحدث على متابعة كلامه."
  },
  {
    "en": "That makes a lot of sense.",
    "ar": "هذا منطقي جداً.",
    "word": "makes sense",
    "meaning": "يبدو منطقياً",
    "options": [
      "يبدو منطقياً",
      "يبدو مستحيلاً",
      "يبدو مكلفاً"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "إظهار أن كلام الشخص مفهوم ومقنع."
  },
  {
    "en": "I had not thought of it that way.",
    "ar": "لم أفكر في الأمر بهذه الطريقة.",
    "word": "that way",
    "meaning": "بهذه الطريقة",
    "options": [
      "بهذه الطريقة",
      "في ذلك الوقت",
      "من هذا المكان"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "رد عند سماع وجهة نظر جديدة."
  },
  {
    "en": "You have a point there.",
    "ar": "لديك وجهة نظر وجيهة.",
    "word": "point",
    "meaning": "وجهة نظر / نقطة",
    "options": [
      "وجهة نظر / نقطة",
      "موعد",
      "مشكلة"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "الاعتراف بصحة جزء من كلام شخص."
  },
  {
    "en": "Let us agree to disagree.",
    "ar": "لنتفق على أن نختلف.",
    "word": "agree to disagree",
    "meaning": "نتفق على الاختلاف",
    "options": [
      "نتفق على الاختلاف",
      "نؤجل النقاش",
      "نغيّر الموضوع"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "إنهاء اختلاف الرأي باحترام."
  },
  {
    "en": "I would rather not discuss that.",
    "ar": "أفضل ألا أناقش ذلك.",
    "word": "rather",
    "meaning": "أفضل",
    "options": [
      "أفضل",
      "أرفض دائماً",
      "أستطيع"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "وضع حدود مهذبة لموضوع لا ترغب بمناقشته."
  },
  {
    "en": "It is a personal matter.",
    "ar": "إنه أمر شخصي.",
    "word": "personal",
    "meaning": "شخصي",
    "options": [
      "شخصي",
      "عام",
      "عاجل"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "توضيح أن الموضوع يتعلق بالخصوصية."
  },
  {
    "en": "I appreciate your understanding.",
    "ar": "أقدّر تفهمك.",
    "word": "understanding",
    "meaning": "تفهم",
    "options": [
      "تفهم",
      "مقاطعة",
      "منافسة"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "شكر شخص على احترام موقفك."
  },
  {
    "en": "Could you do me a favor?",
    "ar": "هل يمكنك أن تسدي لي معروفاً؟",
    "word": "favor",
    "meaning": "معروف / خدمة",
    "options": [
      "معروف / خدمة",
      "موعد",
      "اقتراح"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "مقدمة مهذبة لطلب مساعدة."
  },
  {
    "en": "Of course. What do you need?",
    "ar": "بالتأكيد، ماذا تحتاج؟",
    "word": "of course",
    "meaning": "بالتأكيد",
    "options": [
      "بالتأكيد",
      "مستحيل",
      "ربما"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "رد إيجابي على طلب المساعدة."
  },
  {
    "en": "I owe you one.",
    "ar": "أنا مدين لك بمعروف.",
    "word": "owe",
    "meaning": "أدين بـ",
    "options": [
      "أدين بـ",
      "أرفض",
      "أشرح"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "تعبير غير رسمي عن الامتنان لمساعدة."
  },
  {
    "en": "You have been a great help.",
    "ar": "لقد كنت عوناً كبيراً.",
    "word": "help",
    "meaning": "عون / مساعدة",
    "options": [
      "عون / مساعدة",
      "عبء",
      "تأخير"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "شكر شخص على مساعدته المؤثرة."
  },
  {
    "en": "I will manage, thank you.",
    "ar": "سأتدبر أمري، شكراً لك.",
    "word": "manage",
    "meaning": "أتدبر أمري",
    "options": [
      "أتدبر أمري",
      "أستسلم",
      "أغادر"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تعبير عن القدرة على التعامل مع الموقف."
  },
  {
    "en": "Everything is under control.",
    "ar": "كل شيء تحت السيطرة.",
    "word": "under control",
    "meaning": "تحت السيطرة",
    "options": [
      "تحت السيطرة",
      "خارج المنزل",
      "قيد الانتظار"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "طمأنة الآخرين بأن الوضع مستقر."
  },
  {
    "en": "Let us take it one step at a time.",
    "ar": "لنتعامل مع الأمر خطوة خطوة.",
    "word": "one step at a time",
    "meaning": "خطوة خطوة",
    "options": [
      "خطوة خطوة",
      "بسرعة كبيرة",
      "من البداية للنهاية"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "تشجيع على التعامل مع مهمة بهدوء وتدرج."
  },
  {
    "en": "We will figure it out together.",
    "ar": "سنجد حلاً للأمر معاً.",
    "word": "figure out",
    "meaning": "نجد حلاً / نفهم",
    "options": [
      "نجد حلاً / نفهم",
      "ننسى",
      "نتجاهل"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "تعبير عن التعاون لإيجاد حل."
  },
  {
    "en": "That is all for now.",
    "ar": "هذا كل شيء في الوقت الحالي.",
    "word": "for now",
    "meaning": "في الوقت الحالي",
    "options": [
      "في الوقت الحالي",
      "إلى الأبد",
      "في الماضي"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "تُستخدم لإنهاء حديث أو شرح مؤقتاً."
  },
  {
    "en": "I should get going.",
    "ar": "ينبغي أن أنصرف الآن.",
    "word": "get going",
    "meaning": "أنصرف / أبدأ بالتحرك",
    "options": [
      "أنصرف / أبدأ بالتحرك",
      "أجلس",
      "أنتظر"
    ],
    "level": "متوسط",
    "category": "محادثات يومية",
    "usage": "عبارة طبيعية للإشارة إلى أنك ستغادر."
  },
  {
    "en": "It was great catching up with you.",
    "ar": "سعدت بتبادل أخبارنا والحديث معك.",
    "word": "catching up",
    "meaning": "تبادل الأخبار بعد غياب",
    "options": [
      "تبادل الأخبار بعد غياب",
      "إنهاء العمل",
      "تحديد موعد"
    ],
    "level": "متقدم",
    "category": "محادثات يومية",
    "usage": "تقال بعد محادثة مع شخص لم تره منذ مدة."
  },
  {
    "en": "Until next time!",
    "ar": "إلى اللقاء في المرة القادمة!",
    "word": "until",
    "meaning": "حتى",
    "options": [
      "حتى",
      "قبل",
      "بدون"
    ],
    "level": "مبتدئ",
    "category": "محادثات يومية",
    "usage": "وداع ودود عند توقع اللقاء مجدداً."
  },
  {
    "en": "I usually spend time with my family.",
    "ar": "عادة أقضي وقتاً مع عائلتي.",
    "word": "usually",
    "meaning": "عادة",
    "options": [
      "عادة",
      "نادراً",
      "أبداً"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "وصف نشاط متكرر في الحياة اليومية."
  },
  {
    "en": "We are planning a family gathering.",
    "ar": "نحن نخطط لتجمع عائلي.",
    "word": "gathering",
    "meaning": "تجمع",
    "options": [
      "تجمع",
      "رحلة عمل",
      "موعد طبي"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن لقاء يجمع أفراد العائلة."
  },
  {
    "en": "My cousin is coming to visit us.",
    "ar": "ابن عمي قادم لزيارتنا.",
    "word": "cousin",
    "meaning": "ابن العم / ابنة العم",
    "options": [
      "ابن العم / ابنة العم",
      "جار",
      "زميل"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تقديم معلومة عن زيارة أحد الأقارب."
  },
  {
    "en": "We grew up in the same neighborhood.",
    "ar": "نشأنا في الحي نفسه.",
    "word": "grew up",
    "meaning": "نشأنا",
    "options": [
      "نشأنا",
      "انتقلنا",
      "عملنا"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن الطفولة والمكان الذي نشأت فيه."
  },
  {
    "en": "I have known her since childhood.",
    "ar": "أعرفها منذ الطفولة.",
    "word": "since",
    "meaning": "منذ",
    "options": [
      "منذ",
      "حتى",
      "خلال"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تصف علاقة بدأت في الماضي وما زالت مستمرة."
  },
  {
    "en": "We have a lot in common.",
    "ar": "لدينا الكثير من الأمور المشتركة.",
    "word": "in common",
    "meaning": "مشترك",
    "options": [
      "مشترك",
      "مختلف",
      "مؤقت"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تصف أوجه التشابه بين شخصين."
  },
  {
    "en": "He is one of my closest friends.",
    "ar": "إنه أحد أقرب أصدقائي.",
    "word": "closest",
    "meaning": "الأقرب",
    "options": [
      "الأقرب",
      "الأحدث",
      "الأطول"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن صديق مقرّب."
  },
  {
    "en": "We lost touch after graduation.",
    "ar": "انقطع التواصل بيننا بعد التخرج.",
    "word": "lost touch",
    "meaning": "انقطع التواصل",
    "options": [
      "انقطع التواصل",
      "بدأنا العمل",
      "تبادلنا الزيارات"
    ],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تصف انقطاع التواصل مع شخص."
  },
  {
    "en": "I hope we can meet more often.",
    "ar": "آمل أن نتمكن من اللقاء بشكل أكثر تكراراً.",
    "word": "often",
    "meaning": "غالباً / بشكل متكرر",
    "options": [
      "غالباً / بشكل متكرر",
      "نادراً",
      "مرة واحدة"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن الرغبة في تكرار اللقاءات."
  },
  {
    "en": "She always makes everyone feel welcome.",
    "ar": "هي تجعل الجميع يشعرون بالترحيب دائماً.",
    "word": "welcome",
    "meaning": "بالترحيب",
    "options": [
      "بالترحيب",
      "بالقلق",
      "بالملل"
    ],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "وصف شخص يجيد استقبال الآخرين."
  },
  {
    "en": "We are celebrating my brother's birthday.",
    "ar": "نحتفل بعيد ميلاد أخي.",
    "word": "celebrating",
    "meaning": "نحتفل",
    "options": [
      "نحتفل",
      "نعتذر",
      "ننتقل"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن مناسبة عائلية."
  },
  {
    "en": "I brought a small gift for you.",
    "ar": "أحضرت لك هدية صغيرة.",
    "word": "brought",
    "meaning": "أحضرت",
    "options": [
      "أحضرت",
      "استعرت",
      "فقدت"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تقال عند تقديم هدية."
  },
  {
    "en": "You did not have to bring anything.",
    "ar": "لم يكن عليك إحضار أي شيء.",
    "word": "have to",
    "meaning": "كان عليك / يجب",
    "options": [
      "كان عليك / يجب",
      "يمكنك دائماً",
      "لا يمكنك"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "رد لطيف عندما يحضر الضيف هدية."
  },
  {
    "en": "Thank you for inviting me.",
    "ar": "شكراً لدعوتي.",
    "word": "inviting",
    "meaning": "دعوتي",
    "options": [
      "دعوتي",
      "انتظاري",
      "مساعدتي"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "شكر المضيف على الدعوة."
  },
  {
    "en": "I had a wonderful evening.",
    "ar": "قضيت أمسية رائعة.",
    "word": "evening",
    "meaning": "أمسية",
    "options": [
      "أمسية",
      "صباحاً",
      "أسبوعاً"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تعبير عن الاستمتاع بزيارة أو مناسبة."
  },
  {
    "en": "The children are playing outside.",
    "ar": "الأطفال يلعبون في الخارج.",
    "word": "outside",
    "meaning": "في الخارج",
    "options": [
      "في الخارج",
      "في الداخل",
      "في الأعلى"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "وصف ما يفعله الأطفال."
  },
  {
    "en": "We enjoy having guests at home.",
    "ar": "نستمتع باستضافة الضيوف في المنزل.",
    "word": "guests",
    "meaning": "الضيوف",
    "options": [
      "الضيوف",
      "الجيران",
      "الموظفون"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن استقبال الزوار."
  },
  {
    "en": "Please feel free to visit anytime.",
    "ar": "لا تتردد في زيارتنا في أي وقت.",
    "word": "anytime",
    "meaning": "في أي وقت",
    "options": [
      "في أي وقت",
      "مرة واحدة",
      "في وقت متأخر فقط"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "دعوة ودية لزيارة المنزل."
  },
  {
    "en": "I will bring something to share.",
    "ar": "سأحضر شيئاً لنتشاركه.",
    "word": "share",
    "meaning": "نتشارك",
    "options": [
      "نتشارك",
      "نخفي",
      "نستبدل"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تقال عند الاتفاق على إحضار طعام أو شيء للمجموعة."
  },
  {
    "en": "Everyone contributed to the celebration.",
    "ar": "ساهم الجميع في الاحتفال.",
    "word": "contributed",
    "meaning": "ساهم",
    "options": [
      "ساهم",
      "اعترض",
      "غادر"
    ],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "وصف مشاركة أفراد المجموعة في مناسبة."
  },
  {
    "en": "We had a lovely time together.",
    "ar": "قضينا وقتاً جميلاً معاً.",
    "word": "together",
    "meaning": "معاً",
    "options": [
      "معاً",
      "بمفردنا",
      "مبكراً"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تعبير عن متعة قضاء الوقت مع الآخرين."
  },
  {
    "en": "It was nice seeing the whole family.",
    "ar": "كان جميلاً أن أرى العائلة كلها.",
    "word": "whole",
    "meaning": "كل / كامل",
    "options": [
      "كل / كامل",
      "بعض",
      "نصف"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تقال بعد لقاء أفراد العائلة."
  },
  {
    "en": "I should call my parents this evening.",
    "ar": "ينبغي أن أتصل بوالديّ هذا المساء.",
    "word": "parents",
    "meaning": "الوالدان",
    "options": [
      "الوالدان",
      "الأصدقاء",
      "الأطفال"
    ],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن التواصل مع الوالدين."
  },
  {
    "en": "We try to have dinner together every Friday.",
    "ar": "نحاول تناول العشاء معاً كل يوم جمعة.",
    "word": "try",
    "meaning": "نحاول",
    "options": [
      "نحاول",
      "ننسى",
      "نرفض"
    ],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "تصف عادة عائلية منتظمة."
  },
  {
    "en": "Family traditions are important to us.",
    "ar": "التقاليد العائلية مهمة بالنسبة إلينا.",
    "word": "traditions",
    "meaning": "التقاليد",
    "options": [
      "التقاليد",
      "المواعيد",
      "المنافسات"
    ],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن العادات التي تحافظ عليها الأسرة."
  }
,
  {
    "en": "We usually visit our grandparents on Fridays.",
    "ar": "عادةً ما نزور جدّينا أيام الجمعة.",
    "word": "usually",
    "meaning": "عادةً",
    "options": ["عادةً","نادراً","فوراً"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف عادة اجتماعية متكررة."
  },
  {
    "en": "My neighbors are friendly and helpful.",
    "ar": "جيراني ودودون ومتعاونون.",
    "word": "neighbors",
    "meaning": "الجيران",
    "options": ["الجيران","الأقارب","الزملاء"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف العلاقة الطيبة مع الجيران."
  },
  {
    "en": "We invited our friends to dinner.",
    "ar": "دعونا أصدقاءنا إلى العشاء.",
    "word": "invited",
    "meaning": "دعونا",
    "options": ["دعونا","قابلنا","ودّعنا"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن دعوة الأصدقاء إلى مناسبة."
  },
  {
    "en": "She always remembers people's birthdays.",
    "ar": "هي تتذكر أعياد ميلاد الناس دائماً.",
    "word": "remembers",
    "meaning": "تتذكر",
    "options": ["تتذكر","تنسى","تحتفل"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف الاهتمام بالمناسبات الشخصية."
  },
  {
    "en": "We shared stories around the table.",
    "ar": "تبادلنا القصص حول المائدة.",
    "word": "shared",
    "meaning": "تبادلنا",
    "options": ["تبادلنا","أخفينا","اختصرنا"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف جلسة عائلية أو اجتماعية."
  },
  {
    "en": "It is important to listen without interrupting.",
    "ar": "من المهم أن نصغي دون مقاطعة.",
    "word": "interrupting",
    "meaning": "المقاطعة",
    "options": ["المقاطعة","الابتسام","التأخر"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتأكيد على احترام المتحدث."
  },
  {
    "en": "They welcomed the new family to the neighborhood.",
    "ar": "رحبوا بالعائلة الجديدة في الحي.",
    "word": "welcomed",
    "meaning": "رحبوا",
    "options": ["رحبوا","تجاهلوا","غادروا"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف حسن استقبال الجيران الجدد."
  },
  {
    "en": "We take turns preparing the family meal.",
    "ar": "نتناوب على إعداد وجبة العائلة.",
    "word": "take turns",
    "meaning": "نتناوب",
    "options": ["نتناوب","نتنافس","نتوقف"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف تقاسم المسؤوليات داخل الأسرة."
  },
  {
    "en": "A small gesture can make someone's day.",
    "ar": "لفتة بسيطة قد تجعل يوم شخص ما أجمل.",
    "word": "gesture",
    "meaning": "لفتة",
    "options": ["لفتة","مشكلة","قاعدة"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن أثر التصرفات اللطيفة."
  },
  {
    "en": "We try to stay in touch with distant relatives.",
    "ar": "نحاول البقاء على تواصل مع الأقارب البعيدين.",
    "word": "stay in touch",
    "meaning": "نبقى على تواصل",
    "options": ["نبقى على تواصل","نختلف باستمرار","نلتقي يومياً"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن الحفاظ على صلة الأقارب رغم المسافة."
  },
  {
    "en": "He apologized for arriving late.",
    "ar": "اعتذر عن وصوله متأخراً.",
    "word": "apologized",
    "meaning": "اعتذر",
    "options": ["اعتذر","احتفل","وافق"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن الاعتذار في موقف اجتماعي."
  },
  {
    "en": "Good friendships require honesty and respect.",
    "ar": "تتطلب الصداقات الجيدة الصدق والاحترام.",
    "word": "honesty",
    "meaning": "الصدق",
    "options": ["الصدق","الشهرة","السرعة"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف أسس الصداقة المتينة."
  },
  {
    "en": "The community organized a charity event.",
    "ar": "نظم المجتمع فعالية خيرية.",
    "word": "charity",
    "meaning": "العمل الخيري",
    "options": ["العمل الخيري","العمل التجاري","العمل المنزلي"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن المبادرات المجتمعية."
  },
  {
    "en": "We offered to help our elderly neighbor.",
    "ar": "عرضنا مساعدة جارنا المسن.",
    "word": "offered",
    "meaning": "عرضنا",
    "options": ["عرضنا","رفضنا","طلبنا"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف المبادرة إلى مساعدة الآخرين."
  },
  {
    "en": "Please let me know if you need anything.",
    "ar": "أرجو أن تخبرني إذا احتجت إلى أي شيء.",
    "word": "need",
    "meaning": "تحتاج",
    "options": ["تحتاج","تتذكر","تغادر"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "عبارة مهذبة لعرض المساعدة."
  },
  {
    "en": "They planned a reunion after many years apart.",
    "ar": "خططوا للقاء لمّ الشمل بعد سنوات طويلة من الفراق.",
    "word": "reunion",
    "meaning": "لقاء لمّ الشمل",
    "options": ["لقاء لمّ الشمل","رحلة عمل","مباراة"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن اجتماع الأصدقاء أو أفراد العائلة بعد غياب."
  },
  {
    "en": "Respecting different opinions helps avoid arguments.",
    "ar": "يساعد احترام الآراء المختلفة على تجنب الجدال.",
    "word": "opinions",
    "meaning": "الآراء",
    "options": ["الآراء","الهدايا","العناوين"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن أهمية تقبل وجهات النظر."
  },
  {
    "en": "She keeps in contact with her former classmates.",
    "ar": "تحافظ على التواصل مع زملائها السابقين في الدراسة.",
    "word": "former",
    "meaning": "السابقين",
    "options": ["السابقين","الجدد","الصغار"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف استمرار التواصل بعد انتهاء الدراسة."
  },
  {
    "en": "We celebrated the good news together.",
    "ar": "احتفلنا بالخبر السار معاً.",
    "word": "celebrated",
    "meaning": "احتفلنا",
    "options": ["احتفلنا","ناقشنا","أخفينا"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف مشاركة الآخرين لحظات الفرح."
  },
  {
    "en": "Volunteering brings people closer together.",
    "ar": "يجعل العمل التطوعي الناس أكثر تقارباً.",
    "word": "volunteering",
    "meaning": "العمل التطوعي",
    "options": ["العمل التطوعي","التسوق","السفر"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن دور التطوع في تقوية الروابط المجتمعية."
  }
,
  {
    "en": "We often gather to celebrate special occasions.",
    "ar": "غالباً ما نجتمع للاحتفال بالمناسبات الخاصة.",
    "word": "occasions",
    "meaning": "المناسبات",
    "options": ["المناسبات","المشكلات","الواجبات"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن التجمعات في المناسبات."
  },
  {
    "en": "My friend gave me some thoughtful advice.",
    "ar": "قدم لي صديقي نصيحة قيّمة ومدروسة.",
    "word": "advice",
    "meaning": "نصيحة",
    "options": ["نصيحة","هدية","دعوة"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن تلقي نصيحة من صديق."
  },
  {
    "en": "We should make time for the people we care about.",
    "ar": "ينبغي أن نخصص وقتاً للأشخاص الذين نهتم بهم.",
    "word": "care about",
    "meaning": "نهتم بـ",
    "options": ["نهتم بـ","نختلف مع","نبتعد عن"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتأكيد على أهمية الاهتمام بالعلاقات."
  },
  {
    "en": "The children played together while the adults talked.",
    "ar": "لعب الأطفال معاً بينما تحدث الكبار.",
    "word": "adults",
    "meaning": "الكبار",
    "options": ["الكبار","الجيران","الضيوف"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف مشهد في تجمع عائلي."
  },
  {
    "en": "I appreciate your kindness and support.",
    "ar": "أقدّر لطفك ودعمك.",
    "word": "appreciate",
    "meaning": "أقدّر",
    "options": ["أقدّر","أتجاهل","أرفض"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن الامتنان لشخص."
  },
  {
    "en": "They took a group photo to remember the day.",
    "ar": "التقطوا صورة جماعية لتذكر ذلك اليوم.",
    "word": "remember",
    "meaning": "يتذكر",
    "options": ["يتذكر","يغير","ينسى"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن توثيق الذكريات المشتركة."
  },
  {
    "en": "A good neighbor respects your privacy.",
    "ar": "الجار الجيد يحترم خصوصيتك.",
    "word": "privacy",
    "meaning": "الخصوصية",
    "options": ["الخصوصية","الممتلكات","المواعيد"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن احترام الحدود الشخصية."
  },
  {
    "en": "We exchanged phone numbers after the meeting.",
    "ar": "تبادلنا أرقام الهواتف بعد اللقاء.",
    "word": "exchanged",
    "meaning": "تبادلنا",
    "options": ["تبادلنا","حذفنا","أخفينا"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف التعارف والتواصل بعد لقاء."
  },
  {
    "en": "She encourages her friends to pursue their goals.",
    "ar": "تشجع أصدقاءها على السعي لتحقيق أهدافهم.",
    "word": "encourages",
    "meaning": "تشجع",
    "options": ["تشجع","تمنع","تنتقد"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن دعم الأصدقاء لبعضهم."
  },
  {
    "en": "The best conversations begin with genuine interest.",
    "ar": "تبدأ أفضل المحادثات باهتمام صادق.",
    "word": "genuine",
    "meaning": "صادق / حقيقي",
    "options": ["صادق / حقيقي","مؤقت","متردد"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن أهمية الاهتمام الحقيقي بالآخرين."
  },
  {
    "en": "We agreed to meet at the community center.",
    "ar": "اتفقنا على اللقاء في المركز المجتمعي.",
    "word": "agreed",
    "meaning": "اتفقنا",
    "options": ["اتفقنا","اختلفنا","تأخرنا"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لتحديد مكان لقاء اجتماعي."
  },
  {
    "en": "He introduced me to his closest friends.",
    "ar": "عرّفني إلى أقرب أصدقائه.",
    "word": "introduced",
    "meaning": "عرّف",
    "options": ["عرّف","استعار","رافق"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن التعارف بين الأصدقاء."
  },
  {
    "en": "Small acts of generosity strengthen communities.",
    "ar": "تعزز أعمال الكرم البسيطة المجتمعات.",
    "word": "generosity",
    "meaning": "الكرم",
    "options": ["الكرم","القلق","الاختلاف"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن أثر العطاء في المجتمع."
  },
  {
    "en": "Please respect the time we agreed on.",
    "ar": "يرجى احترام الوقت الذي اتفقنا عليه.",
    "word": "respect",
    "meaning": "احترم",
    "options": ["احترم","غيّر","انسَ"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتأكيد على الالتزام بالمواعيد."
  },
  {
    "en": "They supported each other during difficult times.",
    "ar": "ساند بعضهم بعضاً في الأوقات الصعبة.",
    "word": "supported",
    "meaning": "ساندوا",
    "options": ["ساندوا","نافسوا","لاموا"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف التضامن بين الأصدقاء أو أفراد المجتمع."
  }
,
  {
    "en": "We made everyone feel welcome at the gathering.",
    "ar": "حرصنا على أن يشعر الجميع بالترحيب في التجمع.",
    "word": "welcome",
    "meaning": "الترحيب",
    "options": ["الترحيب","الانتقاد","الغياب"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف أجواء اجتماعية مريحة ومرحبة."
  },
  {
    "en": "My cousin and I grew up in the same neighborhood.",
    "ar": "كبرت أنا وابن عمي في الحي نفسه.",
    "word": "grew up",
    "meaning": "كبرنا / نشأنا",
    "options": ["كبرنا / نشأنا","انتقلنا","تعارفنا"],
    "level": "مبتدئ",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن علاقة الأقارب والذكريات المشتركة."
  },
  {
    "en": "She checks on her friends when they feel down.",
    "ar": "تطمئن على أصدقائها عندما يشعرون بالإحباط.",
    "word": "checks on",
    "meaning": "تطمئن على",
    "options": ["تطمئن على","تختلف مع","تبتعد عن"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف الاهتمام بالأصدقاء في الأوقات الصعبة."
  },
  {
    "en": "We arranged to help our neighbor move house.",
    "ar": "رتبنا لمساعدة جارنا في الانتقال إلى منزل آخر.",
    "word": "arranged",
    "meaning": "رتبنا",
    "options": ["رتبنا","ألغينا","نسينا"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن التعاون بين الجيران."
  },
  {
    "en": "It is polite to thank the host before leaving.",
    "ar": "من اللائق شكر المضيف قبل المغادرة.",
    "word": "host",
    "meaning": "المضيف",
    "options": ["المضيف","الضيف","الجار"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن آداب الزيارة."
  },
  {
    "en": "Their friendship has lasted for more than a decade.",
    "ar": "استمرت صداقتهما لأكثر من عقد.",
    "word": "decade",
    "meaning": "عقد من الزمن",
    "options": ["عقد من الزمن","أسبوع","شهر"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف صداقة طويلة الأمد."
  },
  {
    "en": "We listened carefully to each person's point of view.",
    "ar": "استمعنا بعناية إلى وجهة نظر كل شخص.",
    "word": "point of view",
    "meaning": "وجهة نظر",
    "options": ["وجهة نظر","موعد محدد","خبر عاجل"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للحديث عن الحوار واحترام اختلاف الآراء."
  },
  {
    "en": "The volunteers distributed food to families in need.",
    "ar": "وزع المتطوعون الطعام على الأسر المحتاجة.",
    "word": "distributed",
    "meaning": "وزعوا",
    "options": ["وزعوا","جمعوا","اشتروا"],
    "level": "متوسط",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "لوصف نشاط تطوعي لخدمة المجتمع."
  },
  {
    "en": "We take care to include everyone in our plans.",
    "ar": "نحرص على إشراك الجميع في خططنا.",
    "word": "include",
    "meaning": "يشرك / يضم",
    "options": ["يشرك / يضم","يستبعد","يؤجل"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن الشمول والمشاركة في الأنشطة."
  },
  {
    "en": "A sincere thank-you can strengthen a relationship.",
    "ar": "قد تقوي كلمة شكر صادقة العلاقة بين الناس.",
    "word": "sincere",
    "meaning": "صادق / مخلص",
    "options": ["صادق / مخلص","متأخر","عابر"],
    "level": "متقدم",
    "category": "الحياة والتواصل الاجتماعي",
    "usage": "للتعبير عن أثر التقدير والامتنان في العلاقات."
  }
,
  {
    "en": "I would like to book a window seat.",
    "ar": "أود حجز مقعد بجانب النافذة.",
    "word": "window seat",
    "meaning": "مقعد بجانب النافذة",
    "options": ["مقعد بجانب النافذة","مقعد في الممر","مقعد أمامي"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "لطلب مقعد محدد عند حجز تذكرة الطيران."
  },
  {
    "en": "Where can I collect my luggage?",
    "ar": "أين يمكنني استلام أمتعتي؟",
    "word": "collect",
    "meaning": "أستلم",
    "options": ["أستلم","أحجز","أفحص"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للسؤال عن مكان استلام الحقائب في المطار."
  },
  {
    "en": "Our flight has been delayed by two hours.",
    "ar": "تأخرت رحلتنا ساعتين.",
    "word": "delayed",
    "meaning": "تأخرت",
    "options": ["تأخرت","أُلغيت","وصلت مبكراً"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للتحدث عن تأخر موعد إقلاع الرحلة."
  },
  {
    "en": "Could you tell me which platform the train leaves from?",
    "ar": "هل يمكنك إخباري من أي رصيف ينطلق القطار؟",
    "word": "platform",
    "meaning": "رصيف القطار",
    "options": ["رصيف القطار","موقف الحافلات","صالة الوصول"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للاستفسار عن رصيف المغادرة في محطة القطار."
  },
  {
    "en": "I need to exchange some money before the trip.",
    "ar": "أحتاج إلى صرف بعض المال قبل الرحلة.",
    "word": "exchange",
    "meaning": "أصرف / أبدّل",
    "options": ["أصرف / أبدّل","أستعير","أخفي"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للسؤال عن تحويل العملة قبل السفر."
  },
  {
    "en": "Is breakfast included in the room price?",
    "ar": "هل الإفطار مشمول في سعر الغرفة؟",
    "word": "included",
    "meaning": "مشمول",
    "options": ["مشمول","محجوز","متاح لاحقاً"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للاستفسار عن الخدمات المشمولة في حجز الفندق."
  },
  {
    "en": "We have to check out before eleven o'clock.",
    "ar": "علينا تسجيل المغادرة قبل الساعة الحادية عشرة.",
    "word": "check out",
    "meaning": "تسجيل المغادرة",
    "options": ["تسجيل المغادرة","تسجيل الوصول","طلب الطعام"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للحديث عن موعد مغادرة الفندق."
  },
  {
    "en": "The bus stop is opposite the museum.",
    "ar": "موقف الحافلات مقابل المتحف.",
    "word": "opposite",
    "meaning": "مقابل",
    "options": ["مقابل","بجانب","خلف"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "لوصف موقع موقف الحافلات."
  },
  {
    "en": "Please let me know when we reach the station.",
    "ar": "من فضلك أخبرني عندما نصل إلى المحطة.",
    "word": "reach",
    "meaning": "نصل إلى",
    "options": ["نصل إلى","نغادر","نمر بجانب"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "لطلب التنبيه عند الوصول إلى الوجهة."
  },
  {
    "en": "I prefer to travel with a small backpack.",
    "ar": "أفضل السفر بحقيبة ظهر صغيرة.",
    "word": "backpack",
    "meaning": "حقيبة ظهر",
    "options": ["حقيبة ظهر","حقيبة سفر كبيرة","محفظة نقود"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للحديث عن نوع الحقيبة المفضلة أثناء السفر."
  },
  {
    "en": "The hotel is within walking distance of the beach.",
    "ar": "يقع الفندق على مسافة يمكن قطعها سيراً من الشاطئ.",
    "word": "walking distance",
    "meaning": "مسافة مشياً على الأقدام",
    "options": ["مسافة مشياً على الأقدام","مسافة بالقطار","طريق سريع"],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "لوصف قرب الفندق من مكان سياحي."
  },
  {
    "en": "I have a reservation under the name of Ahmed.",
    "ar": "لدي حجز باسم أحمد.",
    "word": "reservation",
    "meaning": "حجز",
    "options": ["حجز","شكوى","فاتورة"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "لتأكيد حجز الفندق أو المطعم باسمك."
  },
  {
    "en": "Could you recommend a reliable taxi service?",
    "ar": "هل يمكنك أن ترشح لي خدمة سيارات أجرة موثوقة؟",
    "word": "reliable",
    "meaning": "موثوقة",
    "options": ["موثوقة","مكلفة","بعيدة"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "لطلب توصية بوسيلة نقل يمكن الاعتماد عليها."
  },
  {
    "en": "We missed the connection because the first train was late.",
    "ar": "فاتنا القطار الواصل لأن القطار الأول تأخر.",
    "word": "connection",
    "meaning": "الوصلة / الرحلة المتصلة",
    "options": ["الوصلة / الرحلة المتصلة","المقعد المحجوز","تذكرة العودة"],
    "level": "متقدم",
    "category": "السفر والتنقل",
    "usage": "لشرح فوات وسيلة النقل التالية بسبب التأخير."
  },
  {
    "en": "Please keep your passport in a safe place.",
    "ar": "يرجى الاحتفاظ بجواز سفرك في مكان آمن.",
    "word": "safe",
    "meaning": "آمن",
    "options": ["آمن","مزدحم","مفتوح"],
    "level": "مبتدئ",
    "category": "السفر والتنقل",
    "usage": "للتذكير بحفظ وثائق السفر المهمة."
  },
  {
    "en": "The tour guide explained the history of the old city.",
    "ar": "شرح المرشد السياحي تاريخ المدينة القديمة.",
    "word": "tour guide",
    "meaning": "مرشد سياحي",
    "options": ["مرشد سياحي","سائق حافلة","موظف استقبال"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للتحدث عن الشخص الذي يرافق الزوار ويشرح المعالم."
  },
  {
    "en": "We should arrive at the airport at least three hours early.",
    "ar": "ينبغي أن نصل إلى المطار قبل موعد الرحلة بثلاث ساعات على الأقل.",
    "word": "at least",
    "meaning": "على الأقل",
    "options": ["على الأقل","بالضبط","في موعد أقصاه"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للتعبير عن الحد الأدنى من الوقت اللازم قبل الرحلة."
  },
  {
    "en": "Can I change my ticket to an earlier date?",
    "ar": "هل يمكنني تغيير تذكرتي إلى تاريخ أبكر؟",
    "word": "earlier",
    "meaning": "أبكر",
    "options": ["أبكر","متأخر","أطول"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "لطلب تعديل موعد التذكرة إلى وقت أسبق."
  },
  {
    "en": "The road was closed because of construction work.",
    "ar": "كان الطريق مغلقاً بسبب أعمال الإنشاء.",
    "word": "construction",
    "meaning": "الإنشاء / البناء",
    "options": ["الإنشاء / البناء","الطقس","الازدحام"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "لوصف سبب إغلاق طريق أثناء التنقل."
  },
  {
    "en": "I always check the weather before packing.",
    "ar": "أتحقق دائماً من الطقس قبل تجهيز الأمتعة.",
    "word": "packing",
    "meaning": "تجهيز الأمتعة",
    "options": ["تجهيز الأمتعة","حجز التذاكر","تغيير العملة"],
    "level": "متوسط",
    "category": "السفر والتنقل",
    "usage": "للحديث عن الاستعداد للسفر."
  }
];