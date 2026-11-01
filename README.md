# جملتي | Jomlati — Daily English PWA v0.4

## محتوى النسخة التجريبية
- مكتبة من 365 جملة إنجليزية مع ترجمة عربية وكلمة مستهدفة وثلاثة اختيارات وشرح استخدام.
- خمسة مسارات: المحادثات اليومية، العمل والمقابلات، الدراسة والجامعة، السفر والتنقل، والحياة والتواصل الاجتماعي.
- ثلاثة مستويات: مبتدئ ومتوسط ومتقدم.
- جملة يومية ثابتة بحسب التاريخ والمستوى المختار.
- اختبار يومي مع حفظ الجمل التي جرت مراجعتها والإجابات الصحيحة وسلسلة التعلم.
- حفظ المفردات المفضلة، والاستماع للنطق عبر SpeechSynthesis، ونسخ الجملة.
- إعدادات المستوى وموعد التذكير وإذن التنبيهات.
- تخزين محلي ودعم PWA للعمل دون اتصال بعد أول زيارة.

## التشغيل المحلي
من داخل مجلد المشروع شغّل: `python -m http.server 8000` ثم افتح `http://localhost:8000`.

## النشر
المشروع ملفات ثابتة. انشر محتويات المجلد كاملة، وتأكد من وجود `index.html` و`styles.css` و`sentences.js` و`app.js` و`manifest.webmanifest` و`sw.js` و`icon.svg`.

## حدود النسخة
لا يوجد حالياً تسجيل دخول أو مزامنة سحابية أو تحليلات استخدام أو دفع أو إعلانات. بيانات التقدم والمفضلة محفوظة على الجهاز الحالي فقط، ولا تنتقل تلقائياً إلى جهاز آخر. التذكير المحلي يعمل عندما يكون التطبيق مفتوحاً؛ أما التنبيهات أثناء إغلاق التطبيق فتحتاج إلى خدمة Push وخادم خلفي.

## ملاحظات التحديث
تم تحديث اسم ذاكرة التخزين المؤقت في Service Worker إلى `jomlati-v0.7-365-library` حتى يحصل المستخدمون على ملفات المكتبة الجديدة بدلاً من الاحتفاظ بالنسخة القديمة المخزنة محلياً.


## تجربة الترحيب والقائمة
- قائمة جانبية من الجهة اليسرى تضم تسجيل الدخول بالبريد الإلكتروني، تسجيل الخروج، التواصل عبر واتساب، وإعدادات الموقع.
- نافذة ترحيب أول زيارة باسم VELORA INTERNATIONAL.
- تسجيل الدخول بالبريد الإلكتروني يحتاج إلى إعداد مشروع Auth مخصص لـ Jomlati؛ الخيار ظاهر في الواجهة لكنه غير مفعّل حتى الآن.
- زر تسجيل الخروج يظهر غير متاح إلى أن توجد جلسة دخول فعلية.
- زر واتساب يحتاج إلى إضافة رقم التواصل الرسمي بصيغة دولية (أرقام فقط) في ثابت `VELORA_WHATSAPP_NUMBER` داخل `app.js`.


## Firebase backend (project: jomlati-2ad49)
- Web app nickname: `Jomlati-Web`; hosting remains on Cloudflare.
- Firebase Authentication uses email/password.
- Firestore database: Standard edition, `me-central2` (Dammam), created in production mode.
- Browser SDK configuration is held in `firebase-app.js`; Firebase web API configuration is public client configuration. Never add Admin SDK credentials, service-account JSON, or private server keys to this repository.
- `firebase-app.js` provides email/password registration, login, sign-out, password reset, profile creation, public content loading, and owner dashboard actions.
- `firestore.rules` contains the intended least-privilege rules. Before deploying them, replace `REPLACE_WITH_OWNER_UID` with the UID of the owner's Firebase Auth account. The same UID must be assigned to `OWNER_UID` in `firebase-app.js`.
- Add the production Cloudflare hostname to Firebase Authentication > Settings > Authorized domains before testing signup/login.
- After the owner account is registered and its UID is assigned, publish `firestore.rules` in Firebase Console > Firestore Database > Rules.
- Then sign in as owner, import the 365 default sentences from the owner dashboard, and test that public visitors can read the published library while only the owner can modify it.
- Firebase Auth and Firestore integration is not considered production-ready until the owner UID is configured, rules are published, and real-browser tests pass.
