const SIZES=[
  {name:"Mini",ft:3,price:50},
  {name:"Small",ft:4,price:55},
  {name:"Regular",ft:5,price:60},
  {name:"Large",ft:6,price:65}
];
// pricing rows, widths to scale
const sizesEl=document.getElementById("sizes");
if(sizesEl)sizesEl.innerHTML=SIZES.map(s=>`
  <div class="size">
    <div class="sheet kraft" style="width:${(s.ft/6*100).toFixed(1)}%">3ft × ${s.ft}ft</div>
    <div class="label"><div class="name">${s.name}</div><div class="price">$${s.price}</div></div>
  </div>`).join("");

// bunting flags
const flags=document.getElementById("flags"),cols=["#FFFBFC","#D9829F","#C9A77A","#F2BCD6"];
if(flags)for(let i=0;i<24;i++){const x=25+i*48.9,y=4+18*(1-Math.pow((x-600)/600,2));
  flags.insertAdjacentHTML("beforeend",`<path d="M${x-12} ${y} L${x+12} ${y} L${x} ${y+17} Z" fill="${cols[i%4]}"/>`);}

if(document.getElementById("f")){
// planner
const $=id=>document.getElementById(id);
$("size").innerHTML=SIZES.map((s,i)=>`<option value="${i}" ${i===2?"selected":""}>${s.name} · 3ft × ${s.ft}ft · $${s.price}</option>`).join("");
const d=new Date();d.setDate(d.getDate()+14);$("date").value=d.toISOString().slice(0,10);

function fmt(v){if(!v)return"";const [y,m,dd]=v.split("-").map(Number);return new Date(y,m-1,dd).toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"});}
function update(){
  const s=SIZES[$("size").value];
  const date=$("date").value;
  let note="";
  if(date){const [y,m,dd]=date.split("-").map(Number);const days=Math.round((new Date(y,m-1,dd)-new Date(new Date().toDateString()))/864e5);
    if(days<0)note="That date has already passed.";
    else if(days<7)note="That's under a week away. Reach out soon and I'll see what I can do!";}
  $("dateNote").textContent=note;
  const lines=[
    "Hi! I'd love to order a banner 🎀",
    `Size: ${s.name} (3ft x ${s.ft}ft)`,
    `Event: ${$("event").value||"—"}`,
    `Words: ${$("words").value||"—"}`,
    `Theme/colors/graphics: ${$("theme").value||"—"}`,
    `Needed by: ${fmt(date)||"—"}`,
    "I'll send some inspo pics too!"
  ];
  $("msg").textContent=lines.join("\n");
  $("total").textContent=`${s.name} banner · $${s.price}`;
}
$("f").addEventListener("input",update);
$("f").addEventListener("submit",e=>e.preventDefault());
$("copy").addEventListener("click",()=>{
  const t=$("msg").textContent;
  navigator.clipboard.writeText(t).then(()=>{$("copied").textContent="Copied! Paste it into your DM."})
  .catch(()=>{const r=document.createRange();r.selectNodeContents($("msg"));const sel=getSelection();sel.removeAllRanges();sel.addRange(r);$("copied").textContent="Message selected. Copy it and paste into your DM.";});
});
update();
}
