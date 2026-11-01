import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, sendPasswordResetEmail,
  sendEmailVerification, setPersistence, browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, collection, getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIOU2XhsEhHsjBr2p1KlmpOTZYpjqNHgY",
  authDomain: "jomlati-2ad49.firebaseapp.com",
  projectId: "jomlati-2ad49",
  storageBucket: "jomlati-2ad49.firebasestorage.app",
  messagingSenderId: "879474024506",
  appId: "1:879474024506:web:ba344c592e1da938661503"
};

// Set this only after the owner account has been created in Firebase Authentication.
const OWNER_UID = "VELqTJteQHegrYHhFHSzDYTxLNh2";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const $ = (id) => document.getElementById(id);

let authMode = "login";
let activeUser = null;
let adminSentences = [];
let sentenceSearchTerm = "";
let publicSettings = {
  welcomeTitle: "أهلاً بك في جملتي!",
  welcomeMessage: "ترحب بك VELORA INTERNATIONAL في مساحتك اليومية لتعلّم الإنجليزية. ابدأ بجملة واحدة كل يوم، وطوّر مهاراتك بثقة، واجعل كل خطوة صغيرة تقرّبك من فرص أكبر.",
  welcomeSignature: "نتمنى لك رحلة تعلّم ممتعة وملهمة.",
  announcementActive: false,
  announcementTitle: "",
  announcementMessage: ""
};

function showAuthMessage(message, type = "info") {
  const box = $("authMessage");
  box.textContent = message;
  box.className = "auth-message " + type;
  box.hidden = !message;
}
function friendlyAuthError(error) {
  const messages = {
    "auth/invalid-email": "صيغة البريد الإلكتروني غير صحيحة.",
    "auth/user-not-found": "لا يوجد حساب بهذا البريد الإلكتروني.",
    "auth/wrong-password": "كلمة المرور غير صحيحة.",
    "auth/invalid-credential": "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    "auth/email-already-in-use": "هذا البريد مسجل بالفعل. جرّب تسجيل الدخول.",
    "auth/weak-password": "اختر كلمة مرور أقوى من ستة أحرف.",
    "auth/too-many-requests": "محاولات كثيرة. انتظر قليلاً ثم حاول مرة أخرى.",
    "auth/network-request-failed": "تعذر الاتصال. تحقق من الإنترنت ثم أعد المحاولة.",
    "auth/unauthorized-domain": "هذا النطاق غير مضاف إلى النطاقات المصرح بها في Firebase Authentication.",
    "auth/operation-not-allowed": "تسجيل البريد وكلمة المرور غير مفعّل في Firebase.",
    "permission-denied": "قواعد Firestore لم تُنشر بعد أو لا تسمح بهذه العملية."
  };
  return messages[error?.code] || error?.message || "حدث خطأ غير متوقع. حاول مرة أخرى.";
}
function ownerSignedIn() {
  return Boolean(OWNER_UID) && Boolean(activeUser) && activeUser.uid === OWNER_UID;
}
function setAuthMode(mode) {
  authMode = mode;
  const signup = mode === "signup";
  $("loginTitle").textContent = signup ? "إنشاء حساب جديد" : "تسجيل الدخول بالبريد الإلكتروني";
  $("authSubmit").textContent = signup ? "إنشاء الحساب" : "تسجيل الدخول";
  $("authModeToggle").textContent = signup ? "لديك حساب بالفعل؟ سجّل الدخول" : "ليس لديك حساب؟ أنشئ حساباً";
  $("authPasswordConfirmWrap").hidden = !signup;
  $("authPasswordConfirm").required = signup;
  $("authResetButton").hidden = signup;
  $("authUidPanel").hidden = true;
  showAuthMessage("");
}
function updateAccountMenu(user) {
  const signedIn = Boolean(user);
  $("menuLoginButton").hidden = signedIn;
  $("menuLogoutButton").hidden = !signedIn;
  $("menuLogoutButton").disabled = !signedIn;
  $("menuAccountSummary").hidden = !signedIn;
  $("menuAccountEmail").textContent = user?.email || "";
  $("menuAccountRole").textContent = ownerSignedIn() ? "مالك التطبيق · VELORA INTERNATIONAL" : "مستخدم جملتي";
  $("menuAdminButton").hidden = !ownerSignedIn();
}
async function saveUserProfile(user) {
  const ref = doc(db, "users", user.uid);
  try {
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) {
      await updateDoc(ref, { email: user.email || "", lastLoginAt: serverTimestamp() });
    } else {
      await setDoc(ref, {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp()
      });
    }
  } catch (error) {
    console.warn("Jomlati profile is waiting for Firestore security rules:", error);
  }
}
async function loadPublicContent() {
  try {
    const [librarySnapshot, settingsSnapshot] = await Promise.all([
      getDoc(doc(db, "siteContent", "library")),
      getDoc(doc(db, "siteSettings", "public"))
    ]);
    if (librarySnapshot.exists()) {
      const items = librarySnapshot.data().sentences;
      if (Array.isArray(items) && items.length) window.JomlatiApp?.setSentences(items);
    }
    if (settingsSnapshot.exists()) {
      publicSettings = { ...publicSettings, ...settingsSnapshot.data() };
      window.JomlatiApp?.setWelcome(publicSettings);
    }
  } catch (error) {
    console.info("Jomlati is using its offline/default content until Firestore rules are published.", error);
  }
}
function setBusy(button, busy, busyText = "جارٍ التنفيذ...") {
  if (busy) {
    button.dataset.originalText = button.textContent;
    button.textContent = busyText;
    button.disabled = true;
  } else {
    button.textContent = button.dataset.originalText || button.textContent;
    button.disabled = false;
  }
}
$("authForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = $("authSubmit");
  const email = $("authEmail").value.trim();
  const password = $("authPassword").value;
  setBusy(button, true, authMode === "signup" ? "جارٍ إنشاء الحساب..." : "جارٍ تسجيل الدخول...");
  showAuthMessage("");
  try {
    if (authMode === "signup") {
      const confirm = $("authPasswordConfirm").value;
      if (password !== confirm) throw new Error("كلمتا المرور غير متطابقتين.");
      if (password.length < 6) throw new Error("يجب ألا تقل كلمة المرور عن ستة أحرف.");
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      try { await sendEmailVerification(credential.user); } catch (verificationError) {
        console.warn("Verification email could not be sent:", verificationError);
      }
      $("authUidValue").textContent = credential.user.uid;
      $("authUidPanel").hidden = false;
      showAuthMessage("تم إنشاء حسابك بنجاح. تحقق من بريدك الإلكتروني لرسالة التأكيد. احتفظ بمعرّف الحساب UID؛ سنحتاجه لتخصيص صلاحية المالك.", "success");
      $("authPassword").value = "";
      $("authPasswordConfirm").value = "";
    } else {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      await saveUserProfile(credential.user);
      $("authUidValue").textContent = credential.user.uid;
      $("authUidPanel").hidden = Boolean(OWNER_UID) && !ownerSignedIn();
      showAuthMessage("تم تسجيل الدخول بنجاح.", "success");
      setTimeout(() => { $("loginModal").hidden = true; }, 900);
    }
  } catch (error) {
    showAuthMessage(friendlyAuthError(error), "error");
  } finally {
    setBusy(button, false);
  }
});
$("authModeToggle").addEventListener("click", () => setAuthMode(authMode === "login" ? "signup" : "login"));
$("authResetButton").addEventListener("click", async () => {
  const email = $("authEmail").value.trim();
  if (!email) { showAuthMessage("اكتب بريدك الإلكتروني أولاً، ثم اضغط نسيت كلمة المرور.", "error"); $("authEmail").focus(); return; }
  try {
    await sendPasswordResetEmail(auth, email);
    showAuthMessage("إذا كان البريد مسجلاً، ستصلك رسالة لإعادة تعيين كلمة المرور.", "success");
  } catch (error) {
    showAuthMessage(friendlyAuthError(error), "error");
  }
});
$("copyAuthUid").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText($("authUidValue").textContent);
    showAuthMessage("تم نسخ UID. أرسله في المحادثة لتخصيص حساب المالك.", "success");
  } catch {
    showAuthMessage("انسخ معرّف UID الظاهر يدوياً.", "info");
  }
});
$("menuLogoutButton").addEventListener("click", async () => {
  try {
    await signOut(auth);
    $("sideMenu").classList.remove("is-open");
    $("menuScrim").hidden = true;
    document.body.classList.remove("menu-open");
    window.JomlatiApp?.showPage("today");
    window.JomlatiToast?.("تم تسجيل الخروج بنجاح.");
  } catch (error) {
    window.JomlatiToast?.(friendlyAuthError(error));
  }
});
$("menuAdminButton").addEventListener("click", async () => {
  if (!ownerSignedIn()) return;
  $("sideMenu").classList.remove("is-open");
  $("menuScrim").hidden = true;
  document.body.classList.remove("menu-open");
  window.JomlatiApp?.showPage("admin");
  await loadAdminDashboard();
});
$("saveWelcomeButton").addEventListener("click", async () => {
  if (!ownerSignedIn()) return;
  const values = {
    welcomeTitle: $("adminWelcomeTitle").value.trim(),
    welcomeMessage: $("adminWelcomeMessage").value.trim(),
    welcomeSignature: $("adminWelcomeSignature").value.trim()
  };
  if (!values.welcomeTitle || !values.welcomeMessage || !values.welcomeSignature) {
    window.JomlatiToast?.("أكمل حقول رسالة الترحيب أولاً."); return;
  }
  try {
    await setDoc(doc(db, "siteSettings", "public"), { ...publicSettings, ...values, updatedAt: serverTimestamp() }, { merge: true });
    publicSettings = { ...publicSettings, ...values };
    window.JomlatiApp?.setWelcome(publicSettings);
    window.JomlatiToast?.("تم تحديث رسالة الترحيب لجميع الزوار.");
  } catch (error) {
    window.JomlatiToast?.(friendlyAuthError(error));
  }
});
$("saveAnnouncementButton").addEventListener("click", async () => {
  if (!ownerSignedIn()) return;
  const values = {
    announcementTitle: $("adminAnnouncementTitle").value.trim(),
    announcementMessage: $("adminAnnouncementMessage").value.trim(),
    announcementActive: $("adminAnnouncementActive").checked
  };
  try {
    await setDoc(doc(db, "siteSettings", "public"), { ...publicSettings, ...values, updatedAt: serverTimestamp() }, { merge: true });
    publicSettings = { ...publicSettings, ...values };
    window.JomlatiApp?.setWelcome(publicSettings);
    window.JomlatiToast?.("تم حفظ الإعلان.");
  } catch (error) {
    window.JomlatiToast?.(friendlyAuthError(error));
  }
});
function normalizeSentence(item, index) {
  return { ...item, id: item.id || "sentence-" + String(index + 1).padStart(3, "0") };
}
function renderAdminSentenceList() {
  const host = $("adminSentenceList");
  host.replaceChildren();
  const filtered = adminSentences.filter((item) => {
    const haystack = [item.en, item.ar, item.word, item.category].join(" ").toLowerCase();
    return haystack.includes(sentenceSearchTerm);
  });
  $("adminSentenceCount").textContent = String(adminSentences.length);
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "لا توجد جمل تطابق البحث.";
    host.append(empty);
    return;
  }
  filtered.slice(0, 40).forEach((item) => {
    const row = document.createElement("article");
    row.className = "admin-sentence-row";
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = item.en;
    const detail = document.createElement("small");
    detail.textContent = item.ar + " · " + item.level + " · " + item.category;
    copy.append(title, detail);
    const actions = document.createElement("div");
    actions.className = "admin-row-actions";
    const edit = document.createElement("button");
    edit.type = "button"; edit.className = "secondary-btn"; edit.textContent = "تعديل";
    edit.addEventListener("click", () => startSentenceEdit(item));
    const remove = document.createElement("button");
    remove.type = "button"; remove.className = "danger-btn"; remove.textContent = "حذف";
    remove.addEventListener("click", () => deleteSentence(item.id));
    actions.append(edit, remove);
    row.append(copy, actions);
    host.append(row);
  });
  if (filtered.length > 40) {
    const note = document.createElement("p");
    note.className = "hint";
    note.textContent = "يظهر أول 40 نتيجة. استخدم البحث لتحديد الجملة المطلوبة.";
    host.append(note);
  }
}
function startSentenceEdit(item) {
  $("adminSentenceId").value = item.id;
  $("adminSentenceEn").value = item.en || "";
  $("adminSentenceAr").value = item.ar || "";
  $("adminSentenceWord").value = item.word || "";
  $("adminSentenceMeaning").value = item.meaning || "";
  $("adminOption1").value = item.options?.[0] || "";
  $("adminOption2").value = item.options?.[1] || "";
  $("adminOption3").value = item.options?.[2] || "";
  $("adminSentenceLevel").value = item.level || "مبتدئ";
  $("adminSentenceCategory").value = item.category || "محادثات يومية";
  $("adminSentenceUsage").value = item.usage || "";
  $("saveSentenceButton").textContent = "حفظ التعديلات";
  $("cancelSentenceEdit").hidden = false;
  $("adminSentenceEn").focus();
}
function clearSentenceForm() {
  $("adminSentenceForm").reset();
  $("adminSentenceId").value = "";
  $("saveSentenceButton").textContent = "إضافة الجملة";
  $("cancelSentenceEdit").hidden = true;
}
$("cancelSentenceEdit").addEventListener("click", clearSentenceForm);
$("adminSentenceSearch").addEventListener("input", (event) => {
  sentenceSearchTerm = event.target.value.trim().toLowerCase();
  renderAdminSentenceList();
});
$("adminSentenceForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!ownerSignedIn()) return;
  const id = $("adminSentenceId").value || "sentence-" + crypto.randomUUID();
  const item = {
    id,
    en: $("adminSentenceEn").value.trim(),
    ar: $("adminSentenceAr").value.trim(),
    word: $("adminSentenceWord").value.trim(),
    meaning: $("adminSentenceMeaning").value.trim(),
    options: [$("adminOption1").value.trim(), $("adminOption2").value.trim(), $("adminOption3").value.trim()],
    level: $("adminSentenceLevel").value,
    category: $("adminSentenceCategory").value,
    usage: $("adminSentenceUsage").value.trim()
  };
  if (new Set(item.options).size !== 3 || !item.options.includes(item.meaning)) {
    window.JomlatiToast?.("تأكد من وجود ثلاثة اختيارات مختلفة وأن يكون أحدها هو المعنى الصحيح."); return;
  }
  if (!item.en || !item.ar || !item.word || !item.usage) {
    window.JomlatiToast?.("أكمل جميع الحقول المطلوبة."); return;
  }
  const existingIndex = adminSentences.findIndex((entry) => entry.id === id);
  if (existingIndex < 0 && adminSentences.some((entry) => entry.en.toLowerCase() === item.en.toLowerCase())) {
    window.JomlatiToast?.("هذه الجملة موجودة بالفعل في المكتبة."); return;
  }
  if (existingIndex >= 0) adminSentences[existingIndex] = item;
  else adminSentences.push(item);
  try {
    await saveLibrary();
    clearSentenceForm();
    renderAdminSentenceList();
    window.JomlatiToast?.(existingIndex >= 0 ? "تم تعديل الجملة." : "تمت إضافة الجملة.");
  } catch (error) {
    if (existingIndex >= 0) adminSentences[existingIndex] = adminSentences.find((entry) => entry.id === id) || item;
    window.JomlatiToast?.(friendlyAuthError(error));
  }
});
async function saveLibrary() {
  const safeList = adminSentences.map((item, index) => normalizeSentence(item, index));
  await setDoc(doc(db, "siteContent", "library"), {
    sentences: safeList,
    count: safeList.length,
    updatedAt: serverTimestamp()
  }, { merge: true });
  adminSentences = safeList;
  window.JomlatiApp?.setSentences(safeList);
  $("adminUpdatedAt").textContent = "محفوظة سحابياً";
}
async function deleteSentence(id) {
  if (!ownerSignedIn() || !confirm("هل تريد حذف هذه الجملة نهائياً من مكتبة جميع المستخدمين؟")) return;
  const previous = adminSentences.slice();
  adminSentences = adminSentences.filter((item) => item.id !== id);
  try {
    await saveLibrary();
    renderAdminSentenceList();
    window.JomlatiToast?.("تم حذف الجملة.");
  } catch (error) {
    adminSentences = previous;
    renderAdminSentenceList();
    window.JomlatiToast?.(friendlyAuthError(error));
  }
}
$("importSentencesButton").addEventListener("click", async () => {
  if (!ownerSignedIn()) return;
  const defaults = (window.JOMLATI_SENTENCES || []).map(normalizeSentence);
  if (!defaults.length) { window.JomlatiToast?.("لم يتم العثور على المكتبة الافتراضية."); return; }
  if (!confirm("سيتم استيراد 365 جملة إلى مكتبة Firestore. إذا كانت هناك مكتبة سحابية موجودة فسيتم استبدالها بالنسخة الافتراضية. هل تريد المتابعة؟")) return;
  const button = $("importSentencesButton");
  setBusy(button, true, "جارٍ استيراد الجمل...");
  try {
    adminSentences = defaults;
    await saveLibrary();
    renderAdminSentenceList();
    window.JomlatiToast?.("تم استيراد " + adminSentences.length + " جملة بنجاح.");
  } catch (error) {
    window.JomlatiToast?.(friendlyAuthError(error));
  } finally {
    setBusy(button, false);
  }
});
async function loadAdminDashboard() {
  if (!ownerSignedIn()) return;
  $("adminWelcomeTitle").value = publicSettings.welcomeTitle || "";
  $("adminWelcomeMessage").value = publicSettings.welcomeMessage || "";
  $("adminWelcomeSignature").value = publicSettings.welcomeSignature || "";
  $("adminAnnouncementTitle").value = publicSettings.announcementTitle || "";
  $("adminAnnouncementMessage").value = publicSettings.announcementMessage || "";
  $("adminAnnouncementActive").checked = publicSettings.announcementActive === true;
  try {
    const [librarySnapshot, usersSnapshot] = await Promise.all([
      getDoc(doc(db, "siteContent", "library")),
      getDocs(collection(db, "users"))
    ]);
    if (librarySnapshot.exists() && Array.isArray(librarySnapshot.data().sentences)) {
      adminSentences = librarySnapshot.data().sentences.map(normalizeSentence);
    } else {
      adminSentences = (window.JOMLATI_SENTENCES || []).map(normalizeSentence);
    }
    $("adminUsersCount").textContent = String(usersSnapshot.size);
    $("adminUpdatedAt").textContent = librarySnapshot.exists() ? "محفوظة سحابياً" : "لم تُستورد بعد";
    renderAdminSentenceList();
  } catch (error) {
    window.JomlatiToast?.("تعذر تحميل لوحة المالك: " + friendlyAuthError(error));
  }
}
onAuthStateChanged(auth, async (user) => {
  activeUser = user;
  updateAccountMenu(user);
  if (user) {
    await saveUserProfile(user);
  } else {
    $("authUidPanel").hidden = true;
    if ($("adminPage")) window.JomlatiApp?.showPage("today");
  }
});
$("authModeToggle").addEventListener("click", () => {
  $("authUidPanel").hidden = true;
});
$("authUidPanel").hidden = true;
$("authUidValue").textContent = "";

(async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (error) {
    console.warn("Could not set local Firebase Auth persistence", error);
  }
  await loadPublicContent();
})();
