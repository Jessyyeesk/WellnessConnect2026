/* ===== QUESTION BANK (edit here) =====
 t = topic, q = situation/question, o = 4 answer options, a = index of correct option (0-3), e = explanation.
 Options are shuffled automatically. Keep exactly 4 options per question. */
const QUESTIONS = [
 {t:"Why health matters",q:"Dr. Giggles says: \"Health is more than not being sick.\" Which description is the best?",o:["Health means body and mind both working well, so you can enjoy life and cope with daily demands","Health only means having no illness in the body","Health only matters when you are old","Mental health matters only for people with a diagnosis"],a:0,e:"Physical and mental health are connected. Good health helps you learn, work, enjoy relationships and cope with stress at every age."},
 {t:"Physical health",q:"Uncle Ben, 58, sits all day, skips breakfast and sleeps 4 hours. Which change helps his physical health most?",o:["Regular movement, balanced meals, water and 7 to 9 hours of sleep","Drinking more coffee to stay awake","Taking vitamins instead of changing habits","Exercising once a month very hard"],a:0,e:"Regular activity, balanced eating, hydration and enough sleep are the foundation of physical health. Small daily habits beat occasional extremes."},
 {t:"Mental health",q:"Aisyah, 12, feels worried before tests but still copes, laughs with friends and sleeps fine. What is this?",o:["A normal feeling that everyone has sometimes","Definitely a serious mental illness","A sign she is weak","Something that must be hidden"],a:0,e:"Everyone feels stress or worry at times. It becomes a concern when feelings are intense, last a long time and get in the way of daily life."},
 {t:"Major depressive disorder",q:"For three weeks, Hafiz feels sad and empty most days, has lost interest in football, sleeps badly and feels tired. Which condition do these signs match?",o:["Major depressive disorder","A simple cold","Normal tiredness after a busy day","Schizophrenia"],a:0,e:"Major depressive disorder involves low mood or loss of interest most of the day, nearly every day, for at least 2 weeks, often with sleep, energy and appetite changes."},
 {t:"Myths about depression",q:"A cousin says: \"Depression is just laziness. Tell him to snap out of it.\" What is the best response?",o:["Depression is a real medical condition and it is treatable with support, therapy and sometimes medicine","You are right, he just needs willpower","Only rich people get depression","It can never be treated"],a:0,e:"Depression is not a character flaw. Treatment such as talking therapy, medicine and lifestyle support helps many people recover."},
 {t:"Mood disorders",q:"What is a mood disorder?",o:["A condition where a person's mood is persistently very low, very high, or swings, affecting daily life","Being in a bad mood after losing a game","A problem with the stomach","Something only teenagers get"],a:0,e:"Mood disorders include major depressive disorder and bipolar disorder. They are more intense and longer lasting than everyday ups and downs."},
 {t:"Bipolar disorder",q:"Lim has days of very high energy, little sleep and big risky plans, then weeks of deep sadness. Which mood disorder is most likely?",o:["Bipolar disorder","Seasonal sneezing","Ordinary excitement","Dehydration"],a:0,e:"Bipolar disorder involves episodes of mania or hypomania (high energy, less need for sleep) alternating with depression. A professional must assess it."},
 {t:"Urgent warning signs",q:"A friend says they feel hopeless and have thoughts of ending their life. What should you do?",o:["Take it seriously, stay with them, and get urgent help from a doctor, crisis line or emergency services (999 in Malaysia)","Promise to keep it secret and say nothing","Tell them to cheer up","Change the subject"],a:0,e:"Thoughts of self-harm are a medical emergency. Listen without judgement, do not leave them alone if they are in danger, and involve professionals right away."},
 {t:"Schizophrenia",q:"Mr. Tan, 25, hears voices others cannot hear and firmly believes neighbours are spying on him. Which condition includes these signs?",o:["Schizophrenia","Fear of heights","Mild homesickness","Hay fever"],a:0,e:"Schizophrenia can involve hallucinations (such as hearing voices), delusions (fixed false beliefs), disorganised thinking and reduced motivation or emotion."},
 {t:"Myths about schizophrenia",q:"A comedy show says schizophrenia means \"split personality\". Is that correct?",o:["No. Schizophrenia affects thinking and perception. It is not multiple personalities","Yes, it means two people live in one body","Yes, and the person is always violent","No, it only affects children"],a:0,e:"Schizophrenia is not split personality, and most people with it are not violent. They are more likely to be harmed or treated unfairly than to harm others."},
 {t:"Treatment and recovery",q:"Which statement about schizophrenia treatment is true?",o:["Medicine, therapy and family and community support help many people live full lives, and early help improves outcomes","Nothing helps, so do not bother","Stopping medicine as soon as you feel better is always safe","Only hospitals can ever help"],a:0,e:"Treatment is usually long term. Changes to medicine should only be made with a doctor, since stopping suddenly can bring symptoms back."},
 {t:"Supporting others",q:"Your colleague seems very down lately. What is the most helpful first step?",o:["Check in privately, listen without judging and encourage them to see a professional","Gossip about it with the team","Tell them everyone has problems","Avoid them"],a:0,e:"Listening kindly and encouraging professional help reduces isolation and stigma. You do not have to fix the problem yourself."},
 {t:"Daily self-care",q:"Which routine best protects both physical and mental health?",o:["Regular sleep, movement, healthy food, time with people you trust and limited alcohol","Staying up late and avoiding people","Skipping meals when stressed","Using alcohol to relax every night"],a:0,e:"Sleep, activity, nutrition and social connection support mood and body. Alcohol and isolation tend to make low mood worse."},
 {t:"When to seek help",q:"When should you talk to a doctor or counsellor about your mood?",o:["When low mood, strange experiences or extreme highs last more than about two weeks or disrupt daily life","Only after you have lost your job and home","Never, it always goes away alone","Only if someone else notices first"],a:0,e:"Seeking help early is a sign of strength. Persistent symptoms that affect sleep, school, work or relationships deserve a professional check."},
 {t:"New example: apply what you learned",q:"FINAL CHALLENGE: Madam Mei Ling, 45, has felt empty for 4 weeks, lost interest in gardening, sleeps poorly and feels worthless. She has no voices, no extreme highs. What is the best description and next step?",o:["Signs of major depressive disorder: see a doctor or counsellor soon","Schizophrenia: wait and see","Normal ageing: nothing can be done","Bipolar mania: avoid all contact"],a:0,e:"Low mood and loss of interest for over 2 weeks, with sleep problems and worthlessness, fit depression. No hallucinations or highs points away from schizophrenia or bipolar mania. See a professional."}
];
const QUIPS=["Dr. Giggles adjusts his oversized stethoscope.","A pigeon in a lab coat nods approvingly.","The town mascot, Sir Wobbles the Banana, applauds.","Somewhere, a nurse high-fives a traffic cone."];
const MODES=["pick","shoot","race"];
const $=id=>document.getElementById(id);
let S={},raf=0;

function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("on",s.id===id));window.scrollTo(0,0);}
function stop(){cancelAnimationFrame(raf);raf=0;}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function start(){
  stop();
  S={list:QUESTIONS.map((_,i)=>i),i:0,score:0,missed:[],done:{},practice:false,untimed:$("untimed").checked,locked:true};
  $("score").textContent=0;show("game");load();
}
function load(){
  stop();
  const n=S.list[S.i],q=QUESTIONS[n];
  S.locked=false;S.n=n;
  S.opts=shuffle(q.o.map((t,j)=>({t,j})));
  S.mode=(S.untimed||S.practice||n===QUESTIONS.length-1)?"pick":MODES[n%3];
  $("progFill").style.width=(S.i/S.list.length*100)+"%";
  $("qmeta").textContent=(S.practice?"Practice · ":"")+"Question "+(S.i+1)+" of "+S.list.length+" · "+q.t;
  $("qtext").textContent=q.q;
  $("feedback").classList.add("hidden");$("carBtns").classList.add("hidden");
  $("legend").innerHTML="";
  const ar=$("arena");ar.innerHTML="";ar.className="";
  const L="ABCD";
  if(S.mode==="pick"){
    ar.className="picks";$("hint").textContent="Pick the best answer (click, tap, or press 1 to 4).";
    S.opts.forEach((o,k)=>{const b=document.createElement("button");b.className="pick";b.textContent=(k+1)+". "+o.t;b.onclick=()=>answer(k);ar.appendChild(b);});
  }else if(S.mode==="shoot"){
    ar.className="shoot";$("hint").textContent="🎯 Shoot the sign with the best answer: click or tap it, or press 1 to 4. Misses cost nothing.";
    S.t=S.opts.map((o,k)=>{const b=document.createElement("button");b.className="target";b.style.top=(8+k*72)+"px";b.innerHTML="<i>"+(k+1)+"</i><span></span>";b.lastChild.textContent=o.t;b.onclick=()=>answer(k);ar.appendChild(b);return {el:b,x:Math.random()*100,v:(40+Math.random()*50)*(k%2?-1:1)};});
    S.last=performance.now();raf=requestAnimationFrame(moveTargets);
  }else{
    ar.className="race";$("hint").textContent="🚗 Read the answers, press Start engine, then steer into the gate you choose (← → or A / D, or tap a lane).";
    S.opts.forEach((o,k)=>{const d=document.createElement("div");d.textContent=L[k]+". "+o.t;$("legend").appendChild(d);});
    S.g=[];S.car=1;
    for(let k=0;k<4;k++){const ln=document.createElement("div");ln.className="lane";ln.onclick=()=>{S.car=k;placeCar();};const g=document.createElement("div");g.className="gate";g.textContent=L[k];ln.appendChild(g);ar.appendChild(ln);S.g.push(g);}
    S.carEl=document.createElement("div");S.carEl.className="car";S.carEl.textContent="🚗";ar.appendChild(S.carEl);
    S.y=-60;S.run=false;placeCar();$("carBtns").classList.remove("hidden");$("goBtn").disabled=false;
  }
}
function moveTargets(now){
  if(S.locked||S.mode!=="shoot")return;
  const dt=Math.min(now-S.last,50)/1000;S.last=now;
  const W=$("arena").clientWidth,w=W*0.62,max=Math.max(W-w,1);
  S.t.forEach(t=>{t.x+=t.v*dt*(max/300);if(t.x<0){t.x=0;t.v=Math.abs(t.v);}if(t.x>max){t.x=max;t.v=-Math.abs(t.v);}t.el.style.transform="translateX("+t.x+"px)";});
  raf=requestAnimationFrame(moveTargets);
}
function placeCar(){S.carEl.style.left=(S.car*25)+"%";}
function go(){if(S.mode!=="race"||S.run||S.locked)return;S.run=true;$("goBtn").disabled=true;S.last=performance.now();raf=requestAnimationFrame(driveGates);}
function driveGates(now){
  if(S.locked||S.mode!=="race")return;
  const dt=Math.min(now-S.last,50)/1000;S.last=now;
  S.y+=dt*34;
  S.g.forEach(g=>g.style.top=S.y+"px");
  if(S.y+48>=$("arena").clientHeight-60){answer(S.car);return;}
  raf=requestAnimationFrame(driveGates);
}
function steer(d){if(S.mode==="race"&&!S.locked){S.car=Math.max(0,Math.min(3,S.car+d));placeCar();}}

function answer(k){
  if(S.locked||k<0||k>3)return;       /* locked flag stops double scoring */
  S.locked=true;stop();
  const q=QUESTIONS[S.n],ok=S.opts[k].j===q.a;
  if(!S.practice){
    if(ok)S.score+=10;else S.missed.push(S.n);
    S.done[S.n]=ok;
    $("score").textContent=S.score;
  }
  if(S.mode==="pick"){[...$("arena").children].forEach((b,i)=>{b.disabled=true;if(S.opts[i].j===q.a)b.classList.add("ok");else if(i===k)b.classList.add("bad");});}
  const fb=$("feedback");
  fb.className=ok?"good":"wrong";
  $("fbTitle").textContent=ok?"✅ Correct!":"❌ Not quite";
  $("fbText").textContent=(ok?"":"Best answer: "+q.o[q.a]+". ")+q.e+(S.practice?" (Practice does not change your score.)":"");
  $("fbQuip").textContent=QUIPS[Math.floor(Math.random()*QUIPS.length)];
  $("carBtns").classList.add("hidden");
  $("contBtn").textContent=(S.i===S.list.length-1)?"See my results":"Continue";
  fb.scrollIntoView({behavior:"smooth",block:"nearest"});
  $("contBtn").focus({preventScroll:true});
}
function next(){
  if(!S.locked||$("feedback").classList.contains("hidden"))return;
  S.i++;
  if(S.i>=S.list.length)finish();else load();
}
function finish(){
  stop();
  $("progFill").style.width="100%";
  if(S.practice){
    const right=S.list.length-S.missed2.length;
    S.practiceMsg="Practice round: "+right+" of "+S.list.length+" correct. Keep reviewing the explanations below!";
  }
  const max=QUESTIONS.length*10,pct=S.score/max,st=pct>=.85?3:pct>=.6?2:pct>=.3?1:0;
  $("stars").textContent="⭐".repeat(st)+"☆".repeat(3-st);
  $("finalScore").textContent=S.score;$("maxScore").textContent=max;
  $("rating").textContent=["Good start! Review the explanations and try again.","Nice work, Wellness Rookie!","Great job, Wellness Hero!","Superb! You are a Wellness Champion!"][st];
  $("pracMsg").textContent=S.practiceMsg||"";
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
function retryMissed(){
  stop();
  S.list=S.missed.slice();S.missed2=[];S.i=0;S.practice=true;
  /* practice answers do not change score or review */
  S.missedKeep=S.missed.slice();
  show("game");load();
}
/* After a practice round, finish() reuses saved score and missed list */
const origAnswer=answer;
answer=function(k){
  if(S.practice&&!S.locked){const q=QUESTIONS[S.n];if(k>=0&&k<4&&S.opts[k].j!==q.a)S.missed2.push(S.n);}
  origAnswer(k);
};

$("playBtn").onclick=start;$("againBtn").onclick=start;$("gRestart").onclick=()=>{if(confirm("Restart the game from question 1?"))start();};
$("howBtn").onclick=()=>show("how");$("backHome").onclick=()=>show("home");
$("gHome").onclick=()=>{if(confirm("Return to home? Your progress will be lost.")){stop();show("home");}};
$("rHome").onclick=()=>{stop();show("home");};
$("contBtn").onclick=next;$("retryBtn").onclick=retryMissed;
$("goBtn").onclick=go;$("leftBtn").onclick=()=>steer(-1);$("rightBtn").onclick=()=>steer(1);
document.addEventListener("keydown",e=>{
  if(!$("game").classList.contains("on")||e.target.tagName==="INPUT")return;
  const k=e.key.toLowerCase();
  if("1234".includes(k)&&k.length===1&&(S.mode==="pick"||S.mode==="shoot"))answer(+k-1);
  else if(S.mode==="race"){
    if(k==="arrowleft"||k==="a"){steer(-1);e.preventDefault();}
    else if(k==="arrowright"||k==="d"){steer(1);e.preventDefault();}
    else if((k===" "||k==="enter")&&!S.run&&!S.locked&&document.activeElement.tagName!=="BUTTON"){go();e.preventDefault();}
  }
});
