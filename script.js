/* ===== QUESTION BANK (edit here) =====
 t = topic, q = situation/question, o = 4 answer options, a = index of correct option (0-3), e = explanation.
 Options are shuffled automatically. Keep exactly 4 options per question. */
const QUESTIONS = [
 {t:"Blood pressure basics",q:"Uncle Raju, 52, feels fine, but his clinic reading is 150/95 on two visits. What does this most likely mean?",o:["He has high blood pressure (hypertension) even though he feels fine, and should follow up with a doctor","He is healthy because he has no symptoms","It is only stress and never needs checking again","It means low blood pressure"],a:0,e:"High blood pressure often has no symptoms, which is why it is called a silent danger. Repeated readings of about 140/90 or higher need a doctor's review, because it raises the risk of stroke and heart disease."},
 {t:"Blood pressure coping",q:"Which set of habits helps lower blood pressure?",o:["Less salt, more fruit and vegetables, regular exercise, a healthy weight and no smoking","More salty snacks and instant noodles for energy","Staying still all day to save energy","Skipping medicine when you feel well"],a:0,e:"Cutting salt (under about 1 teaspoon a day), eating more fruit and vegetables, being active around 150 minutes a week and not smoking all help. Medicine prescribed by a doctor should continue even when you feel well."},
 {t:"Blood pressure warning signs",q:"Madam Lee has a sudden severe headache, chest pain and blurred vision, and her home blood pressure reading is very high. What should she do?",o:["Seek emergency care straight away (999 in Malaysia)","Sleep it off and check tomorrow","Drink a sugary drink","Wait for the weekend clinic"],a:0,e:"A very high reading with severe headache, chest pain, vision change, weakness or confusion can signal a stroke or heart emergency. Get urgent medical help."},
 {t:"Checking blood pressure",q:"What is the best way to check blood pressure at home?",o:["Sit quietly for 5 minutes, feet flat, arm supported, and record readings on several days","Measure right after running","Measure while talking on the phone","Check once a year only"],a:0,e:"Rest, correct posture and repeated readings give a reliable picture. Share your record with your doctor."},
 {t:"Diabetes basics",q:"Auntie Siti is always thirsty, urinates often, feels tired and her cuts heal slowly. Which condition should she ask her doctor about?",o:["Diabetes","A simple cold","Too much sleep","Hay fever"],a:0,e:"Extreme thirst, frequent urination, tiredness, blurred vision and slow healing are common diabetes signs. A blood test confirms it. Many people with type 2 diabetes have mild or no symptoms, so regular screening helps."},
 {t:"Diabetes coping",q:"Which daily plan best helps someone manage type 2 diabetes?",o:["Balanced meals with less sugar, regular activity, medicine as prescribed and blood sugar checks","Skipping meals and then eating a huge dinner","Stopping medicine when readings look normal","Drinking sweet drinks to stay energetic"],a:0,e:"Steady healthy eating, movement, taking medicine as directed and monitoring keep blood sugar in range. Normal readings mean the plan is working, not that it can stop."},
 {t:"Low blood sugar",q:"A person with diabetes becomes shaky, sweaty and confused after skipping lunch. What is the best first action if they are awake and can swallow?",o:["Give fast sugar such as juice or glucose tablets, then recheck and eat a snack","Give nothing and let them rest","Give salty chips only","Make them exercise"],a:0,e:"These are signs of low blood sugar (hypoglycaemia). Fast sugar raises it quickly. If they cannot swallow or become unconscious, call 999."},
 {t:"Preventing diabetes",q:"Which actions lower the risk of type 2 diabetes?",o:["Healthy weight, regular exercise, fewer sugary drinks and regular health screening","Drinking soft drinks daily","Avoiding all exercise","Never visiting a clinic"],a:0,e:"Lifestyle changes greatly reduce risk. Screening helps catch high blood sugar early, when it is easiest to manage."},
 {t:"Stress",q:"Before exams, Daniel has a racing heart, tight shoulders and trouble sleeping, but feels better after the exams. What is this?",o:["Stress, a normal body reaction to pressure","A broken heart","Definitely diabetes","A permanent illness"],a:0,e:"Stress is the body's response to demands. Short-term stress is normal, but long-term stress can raise blood pressure and affect sleep and mood."},
 {t:"Stress coping",q:"Which is a healthy way to cope with stress?",o:["Take short breaks, move your body, plan tasks, sleep well and talk to someone you trust","Skip sleep to do more","Use alcohol to switch off every night","Keep everything to yourself"],a:0,e:"Rest, activity, planning and social support reduce stress. Alcohol and isolation tend to make stress worse."},
 {t:"Anxiety",q:"Mei worries constantly, feels restless, her heart pounds and she avoids school events for months. What does this suggest?",o:["Possible anxiety that deserves a check with a doctor or counsellor","Normal behaviour needing no help","Laziness","High blood sugar only"],a:0,e:"Anxiety becomes a concern when worry is intense, lasts weeks or months and stops daily activities. Therapy, skills and sometimes medicine help."},
 {t:"Anxiety coping",q:"Sam suddenly feels panicky in a crowded mall. Which quick coping skill can help?",o:["Slow breathing (in for 4, out for 6) and grounding: name 5 things you see","Hold your breath","Drink three strong coffees","Run away and never go out again"],a:0,e:"Slow breathing and grounding calm the body's alarm system. Avoiding places makes anxiety stronger, so ask a professional for step-by-step help."},
 {t:"Depression",q:"For over two weeks, Hana feels sad and empty, has lost interest in hobbies, sleeps badly and feels worthless. What should she do?",o:["See a doctor or counsellor, because these may be signs of depression","Wait years and hope it disappears","Tell herself to snap out of it","Stay away from everyone"],a:0,e:"Low mood or loss of interest for at least 2 weeks with sleep, energy or worth changes may be depression. It is common and treatable."},
 {t:"Depression coping and crisis",q:"Which helps someone coping with depression, and what if they think about ending their life?",o:["Daily routine, gentle activity, staying in touch, therapy or medicine, and urgent help (999 or a crisis line) for suicidal thoughts","Isolation and no routine, and keep suicidal thoughts secret","Alcohol to numb feelings","Stopping treatment early"],a:0,e:"Routine, movement, connection and professional treatment help. Thoughts of self-harm are an emergency: stay with the person and get immediate help."},
 {t:"New example: apply what you learned",q:"FINAL CHALLENGE: Mr. Chong, 48, has high blood pressure and diabetes. After a stressful month he sleeps badly and feels hopeless. What is the best plan?",o:["Keep taking medicines, cut salt and sugar, move daily, practise relaxation and talk to a doctor or counsellor about his mood","Stop all medicine since he is stressed","Drink alcohol to sleep","Hide it from everyone"],a:0,e:"Physical and mental health affect each other. Keep treatment going, use healthy habits and coping skills, and get support for low mood."}
];
const QUIPS=["Dr. Giggles honks the horn in approval.","A pigeon in a racing helmet gives a thumbs up.","Sir Wobbles the Banana waves a chequered flag.","Somewhere, a traffic cone cheers."];
const $=id=>document.getElementById(id);
let S={},raf=0;
const keys={gas:false,brake:false};

function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("on",s.id===id));window.scrollTo(0,0);}
function stop(){cancelAnimationFrame(raf);raf=0;}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function start(){
  stop();
  S={list:QUESTIONS.map((_,i)=>i),i:0,score:0,missed:[],done:{},practice:false,untimed:$("untimed").checked,locked:true,stray:[]};
  $("score").textContent=0;show("game");load();
}
function load(){
  stop();
  const n=S.list[S.i],q=QUESTIONS[n];
  S.locked=false;S.n=n;S.opts=shuffle(q.o.map((t,j)=>({t,j})));
  S.mode=S.untimed?"pick":"race";
  $("progFill").style.width=(S.i/S.list.length*100)+"%";
  $("qmeta").textContent=(S.practice?"Practice · ":"")+"Question "+(S.i+1)+" of "+S.list.length+" · "+q.t;
  $("qtext").textContent=q.q;
  $("feedback").classList.add("hidden");$("carBtns").classList.add("hidden");$("speedo").classList.add("hidden");
  $("legend").innerHTML="";
  const ar=$("arena");ar.innerHTML="";ar.className="";ar.removeAttribute("style");
  if(S.mode==="pick"){
    ar.className="picks";$("hint").textContent="Quiz mode: pick the best answer (click, tap, or press 1 to 4). No driving needed.";
    S.opts.forEach((o,k)=>{const b=document.createElement("button");b.className="pick";b.textContent=(k+1)+". "+o.t;b.onclick=()=>answer(k);ar.appendChild(b);});
    return;
  }
  ar.className="race";
  $("hint").textContent="🏎️ Read answers A to D. Hold GAS to speed up the track and steer into the gate you choose. Your speed never changes your score.";
  S.opts.forEach((o,k)=>{const d=document.createElement("div");d.textContent="ABCD"[k]+". "+o.t;$("legend").appendChild(d);});
  for(let k=0;k<4;k++){
    const ln=document.createElement("div");ln.className="lane";ln.onclick=()=>{steerTo(k);};
    const g=document.createElement("div");g.className="gate";g.textContent="ABCD"[k];ln.appendChild(g);ar.appendChild(ln);
  }
  S.carEl=document.createElement("div");S.carEl.className="car";S.carEl.textContent="🏎️";ar.appendChild(S.carEl);
  S.lane=1;S.pos=0;S.speed=0;S.last=performance.now();
  $("carBtns").classList.remove("hidden");$("speedo").classList.remove("hidden");
  drive(S.last);
}
function steerTo(k){if(S.mode==="race"&&!S.locked){S.lane=Math.max(0,Math.min(3,k));S.carEl.style.left=(S.lane*25)+"%";}}
function steer(d){steerTo(S.lane+d);}
function drive(now){
  if(S.locked||S.mode!=="race")return;
  const dt=Math.min(now-S.last,50)/1000;S.last=now;
  if(keys.gas)S.speed+=70*dt;
  if(keys.brake)S.speed-=160*dt;else if(!keys.gas)S.speed-=25*dt;
  S.speed=Math.max(0,Math.min(100,S.speed));
  S.pos+=S.speed*dt*0.13;
  const H=$("arena").clientHeight,range=H-54-50-8;
  S.carEl.style.bottom=(8+Math.min(S.pos,100)/100*range)+"px";
  S.carEl.style.left=(S.lane*25)+"%";
  $("arena").style.backgroundPositionY=(S.pos*18)+"px";
  $("speedVal").textContent=Math.round(S.speed*1.2);
  if(S.pos>=100){answer(S.lane);return;}
  raf=requestAnimationFrame(drive);
}
function answer(k){
  if(S.locked||k<0||k>3)return;       /* lock prevents duplicate scoring */
  S.locked=true;stop();
  const q=QUESTIONS[S.n],ok=S.opts[k].j===q.a;
  if(S.practice){if(!ok)S.stray.push(S.n);}
  else{if(ok)S.score+=10;else S.missed.push(S.n);S.done[S.n]=ok;$("score").textContent=S.score;}
  if(S.mode==="pick"){[...$("arena").children].forEach((b,i)=>{b.disabled=true;if(S.opts[i].j===q.a)b.classList.add("ok");else if(i===k)b.classList.add("bad");});}
  else{[...$("legend").children].forEach((d,i)=>{if(S.opts[i].j===q.a)d.classList.add("ok");else if(i===k)d.classList.add("bad");});}
  const fb=$("feedback");fb.className=ok?"good":"wrong";
  $("fbTitle").textContent=ok?"✅ Correct! You crossed the finish line first.":"❌ Wrong gate";
  $("fbText").textContent=(ok?"":"Best answer: "+q.o[q.a]+". ")+q.e+(S.practice?" (Practice does not change your score.)":"");
  $("fbQuip").textContent=QUIPS[Math.floor(Math.random()*QUIPS.length)];
  $("carBtns").classList.add("hidden");$("speedo").classList.add("hidden");
  $("contBtn").textContent=(S.i===S.list.length-1)?"See my results":"Continue";
  fb.scrollIntoView({behavior:"smooth",block:"nearest"});
  $("contBtn").focus({preventScroll:true});
}
function next(){
  if(!S.locked||$("feedback").classList.contains("hidden"))return;
  S.i++;if(S.i>=S.list.length)finish();else load();
}
function finish(){
  stop();$("progFill").style.width="100%";
  const max=QUESTIONS.length*10,pct=S.score/max,st=pct>=.85?3:pct>=.6?2:pct>=.3?1:0;
  $("stars").textContent="⭐".repeat(st)+"☆".repeat(3-st);
  $("finalScore").textContent=S.score;$("maxScore").textContent=max;
  $("rating").textContent=["Good start! Review the explanations and race again.","Nice driving, Wellness Rookie!","Great job, Wellness Racer!","Superb! You are a Wellness Champion!"][st];
  $("pracMsg").textContent=S.practice?"Practice round: "+(S.list.length-S.stray.length)+" of "+S.list.length+" correct.":"";
  $("retryBtn").classList.toggle("hidden",S.missed.length===0);
  const rv=$("review");rv.innerHTML="";
  QUESTIONS.forEach((q,n)=>{
    const d=document.createElement("div"),good=S.done[n];d.className="rv "+(good?"g":"m");
    const h=document.createElement("b");h.textContent=(good?"✅ ":"❌ ")+(n+1)+". "+q.t;
    const p=document.createElement("p");p.textContent="Answer: "+q.o[q.a]+". "+q.e;
    d.append(h,p);rv.appendChild(d);
  });
  show("results");
}
function retryMissed(){stop();S.list=S.missed.slice();S.stray=[];S.i=0;S.practice=true;show("game");load();}

function hold(id,key){
  const b=$(id),on=e=>{e.preventDefault();keys[key]=true;},off=()=>{keys[key]=false;};
  b.addEventListener("pointerdown",on);["pointerup","pointerleave","pointercancel","blur"].forEach(ev=>b.addEventListener(ev,off));
}
hold("gasBtn","gas");hold("brakeBtn","brake");
$("playBtn").onclick=start;$("againBtn").onclick=start;
$("gRestart").onclick=()=>{if(confirm("Restart from question 1?"))start();};
$("howBtn").onclick=()=>show("how");$("backHome").onclick=()=>show("home");
$("gHome").onclick=()=>{if(confirm("Return to home? Your progress will be lost.")){stop();show("home");}};
$("rHome").onclick=()=>{stop();show("home");};
$("contBtn").onclick=next;$("retryBtn").onclick=retryMissed;
$("leftBtn").onclick=()=>steer(-1);$("rightBtn").onclick=()=>steer(1);
document.addEventListener("keydown",e=>{
  if(!$("game").classList.contains("on")||e.target.tagName==="INPUT")return;
  const k=e.key.toLowerCase();
  if(S.mode==="pick"){if(["1","2","3","4"].includes(k))answer(+k-1);return;}
  if(S.mode!=="race"||S.locked)return;
  if(k==="arrowup"||k==="w"||k===" "){keys.gas=true;e.preventDefault();}
  else if(k==="arrowdown"||k==="s"){keys.brake=true;e.preventDefault();}
  else if(k==="arrowleft"||k==="a"){steer(-1);e.preventDefault();}
  else if(k==="arrowright"||k==="d"){steer(1);e.preventDefault();}
  else if(["1","2","3","4"].includes(k))steerTo(+k-1);
});
document.addEventListener("keyup",e=>{
  const k=e.key.toLowerCase();
  if(k==="arrowup"||k==="w"||k===" ")keys.gas=false;
  if(k==="arrowdown"||k==="s")keys.brake=false;
});
