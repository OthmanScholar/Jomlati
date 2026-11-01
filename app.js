const $ = id => document.getElementById(id);
const STORAGE_KEY = "jomlati-state-v3";
function localDateKey(date = new Date()) {
  const y=date.getFullYear(), m=String(date.getMonth()+1).padStart(2,"0"), d=String(date.getDate()).padStart(2,"0");
  return `${y}-${m}-${d}`;
}
const todayKey = localDateKey();
const defaults = {favorites:[],learned:[],correct:0,streak:0,lastVisit:"",lastQuizDate:"",lastQuizSentence:"",level:"مبتدئ",reminder:"08:00",lastReminder:"",quizDone:[]};
let savedState = {};
try { savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem("jomlati-state") || "{}"); } catch { savedState = {}; }
let state = {...defaults,...savedState};
if (!Array.isArray(state.favorites)) state.favorites=[];
if (!Array.isArray(state.learned)) state.learned=[];
if (!Array.isArray(state.quizDone)) state.quizDone=[];
if (!Number.isFinite(state.correct) || state.correct < 0) state.correct=0;
if (!Number.isFinite(state.streak) || state.streak < 0) state.streak=0;
if (!["مبتدئ","متوسط","متقدم"].includes(state.level)) state.level="مبتدئ";
if (typeof state.lastQuizSentence!=="string") state.lastQuizSentence="";
if (typeof state.lastQuizDate!=="string") state.lastQuizDate="";
let currentIndex = 0;
let deferredPrompt = null;
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(e){console.warn("Could not save learning state",e);}renderStats();}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2300);}
const todayIndex = (()=>{const [y,m,d]=todayKey.split("-").map(Number);return Math.floor((Date.UTC(y,m-1,d)-Date.UTC(y,0,0))/86400000);})();
function dailySentence(){
  const pool=sentences.filter(s=>s.level===state.level);
  const chosen=pool.length?pool:sentences;
  return chosen[todayIndex % chosen.length];
}
function current(){
  if(state.quizDone.includes(todayKey)&&state.lastQuizSentence){
    const completed=sentences.find(s=>s.en===state.lastQuizSentence);
    if(completed)return completed;
  }
  return dailySentence();
}
function setQuestion(){
  const s=current();
  const q=$("questionText");q.textContent="ما معنى كلمة ";const word=document.createElement("b");word.textContent=s.word;q.append(word);q.append("؟");
  $("quizFeedback").textContent="";$("quizFeedback").className="feedback";
  const answers=$("answers");answers.innerHTML="";
  const options=[...s.options].sort((a,b)=>a.localeCompare(b,"ar"));
  options.forEach(option=>{const b=document.createElement("button");b.className="answer";b.textContent=option;b.addEventListener("click",()=>checkAnswer(option,b));answers.appendChild(b);});
  if(state.quizDone.includes(todayKey)){
    [...answers.children].forEach(b=>{b.disabled=true;if(b.textContent===s.meaning)b.classList.add("correct");});
    $("quizFeedback").textContent="أنجزت اختبار اليوم. أحسنت!";$("quizFeedback").className="feedback good";
  }
}
function renderSentence(){
  const s=current();$("sentenceText").textContent=s.en;$("translation").textContent=s.ar;$("sentenceLevel").textContent=s.level;$("sentenceCategory").textContent=s.category;$("usageNote").textContent=s.usage;
  $("todayDate").textContent=new Intl.DateTimeFormat("ar",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
  const saved=state.favorites.includes(s.en);$("favoriteBtn").classList.toggle("saved",saved);$("favoriteBtn").textContent=saved?"♥":"♡";
  setQuestion();
}
function checkAnswer(option,button){
  const s=current();if(state.quizDone.includes(todayKey))return;
  document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
  if(option===s.meaning){button.classList.add("correct");$("quizFeedback").textContent="أحسنت! إجابة صحيحة 🎉";$("quizFeedback").className="feedback good";state.correct++;}
  else{button.classList.add("wrong");document.querySelectorAll(".answer").forEach(b=>{if(b.textContent===s.meaning)b.classList.add("correct")});$("quizFeedback").textContent=`ليست هذه الإجابة. المعنى الصحيح: ${s.meaning}`;$("quizFeedback").className="feedback bad";}
  if(!state.learned.includes(s.en))state.learned.push(s.en);state.lastQuizSentence=s.en;state.quizDone.push(todayKey);markQuizStreak();save();
}
function renderStats(){
  $("learnedCount").textContent=state.learned.length;$("correctCount").textContent=state.correct;$("favoriteCount").textContent=state.favorites.length;$("favBadge").textContent=state.favorites.length;$("favoritesCount").textContent=`${state.favorites.length} جملة`;$ ("streakCount").textContent=state.streak;
}
function renderFavorites(){
  const list=$("favoritesList");list.innerHTML="";
  if(!state.favorites.length){list.innerHTML='<div class="empty"><b>لم تحفظ أي جملة بعد</b>اضغط على رمز القلب بجانب جملة اليوم لإضافتها هنا.</div>';return;}
  state.favorites.forEach(en=>{const s=sentences.find(x=>x.en===en);if(!s)return;const item=document.createElement("article");item.className="favorite-item";const content=document.createElement("div");const title=document.createElement("strong");title.textContent=s.en;const translation=document.createElement("p");translation.textContent=s.ar;const category=document.createElement("small");category.textContent=s.category;content.append(title,translation,category);const remove=document.createElement("button");remove.className="remove-fav";remove.textContent="حذف";remove.onclick=()=>{state.favorites=state.favorites.filter(x=>x!==en);save();renderFavorites();renderSentence();};item.append(content,remove);list.append(item);});
}
function showPage(name){document.querySelectorAll(".page").forEach(p=>p.hidden=true);$(name+"Page").hidden=false;document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.page===name));if(name==="favorites")renderFavorites();}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>showPage(t.dataset.page)));
$("favoriteBtn").addEventListener("click",()=>{const en=current().en;if(state.favorites.includes(en))state.favorites=state.favorites.filter(x=>x!==en);else state.favorites.push(en);save();renderSentence();toast(state.favorites.includes(en)?"أضيفت إلى مفرداتك":"أزيلت من مفرداتك");});
$("speakBtn").addEventListener("click",()=>{if(!("speechSynthesis" in window)){toast("ميزة النطق غير مدعومة في هذا المتصفح");return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(current().en);u.lang="en-US";u.rate=.88;speechSynthesis.speak(u);});
$("copyBtn").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(current().en);toast("تم نسخ الجملة");}catch{toast("تعذر النسخ في هذا المتصفح");}});
$("levelSelect").value=state.level;$("levelSelect").addEventListener("change",e=>{state.level=e.target.value;save();renderSentence();toast(state.quizDone.includes(todayKey)?"تم حفظ المستوى وسيبدأ تطبيقه غداً":"تم تحديث المستوى");});
$("reminderTime").value=state.reminder;$("saveReminder").addEventListener("click",()=>{const value=$("reminderTime").value;if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)){toast("يرجى اختيار وقت صحيح");return;}state.reminder=value;save();toast("تم حفظ موعد التذكير على هذا الجهاز");checkReminder();});
$("enableNotifications").addEventListener("click",async()=>{if(!("Notification" in window)){toast("المتصفح لا يدعم التنبيهات");return;}try{const permission=await Notification.requestPermission();toast(permission==="granted"?"تم السماح بالتنبيهات":"لم يتم السماح بالتنبيهات");checkReminder();}catch(error){console.warn("Notification permission unavailable",error);toast("تعذر طلب إذن التنبيهات من هذا المتصفح");}});
function checkReminder(){if(!("Notification" in window)||Notification.permission!=="granted")return;const now=new Date(),hhmm=now.toTimeString().slice(0,5);if(hhmm>=state.reminder&&state.lastReminder!==todayKey){new Notification("جملتي — وقت التعلّم!",{body:"افتح التطبيق وتعلّم جملة إنجليزية جديدة اليوم."});state.lastReminder=todayKey;save();}}
$("resetData").addEventListener("click",()=>{if(confirm("هل تريد حذف تقدمك ومفرداتك المحفوظة من هذا الجهاز؟")){state={...defaults};save();$("levelSelect").value=state.level;$("reminderTime").value=state.reminder;renderSentence();renderFavorites();toast("تمت إعادة ضبط البيانات");}});
function markQuizStreak(){if(state.lastQuizDate===todayKey)return;const yesterday=localDateKey(new Date(Date.now()-86400000));state.streak=state.lastQuizDate===yesterday?state.streak+1:1;state.lastQuizDate=todayKey;}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installBtn").hidden=false;});
$("installBtn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBtn").hidden=true;});
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(console.error));}
renderSentence();renderStats();checkReminder();setInterval(checkReminder,60000);
