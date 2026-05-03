/* ══════════════════════════════
   DATA
══════════════════════════════ */
const JOBS = [
  {id:1,title:"Software Engineer II",co:"Google",logo:"G",lc:"#1a2a3a",type:"Full-time",loc:"Bangalore",sal:"₹25–40 LPA",exp:"3–6 yrs",el:"mid",tags:["Python","System Design","Distributed Systems"],dept:"Engineering",feat:true,dead:"Jun 30",ddate:"2025-06-30",sn:32,isNew:false,urgent:false,
    desc:"Join Core Infrastructure to design, develop, and maintain systems serving billions of users globally. Work on high-scale distributed systems, optimize performance, and mentor junior engineers.",
    resp:["Design and implement scalable backend services","Participate in on-call rotations and incident response","Write technical design documents","Collaborate cross-functionally with product and SRE teams"],
    req:["3+ years backend development experience","Proficiency in Python or Go","Experience with distributed systems and microservices","Strong data structures & algorithms fundamentals"]},
  {id:2,title:"Senior Product Designer",co:"Razorpay",logo:"R",lc:"#0d2a1a",type:"Remote",loc:"Remote",sal:"₹20–30 LPA",exp:"4+ yrs",el:"senior",tags:["Figma","UX Research","Design Systems"],dept:"Design",feat:false,dead:"Jul 5",ddate:"2025-07-05",sn:25,isNew:true,urgent:false,
    desc:"Lead design for Razorpay's merchant dashboard and payment flows. Own end-to-end design from research to final handoff.",
    resp:["Own design end-to-end for key product areas","Conduct user research and usability testing","Contribute to the Razorpay design system","Partner with engineers for pixel-perfect implementation"],
    req:["4+ years product design experience","Expert-level Figma skills","Experience with complex B2B or fintech products","Portfolio demonstrating strong UX thinking"]},
  {id:3,title:"Data Scientist",co:"Swiggy",logo:"S",lc:"#2a0d0d",type:"Full-time",loc:"Bangalore",sal:"₹22–36 LPA",exp:"2–5 yrs",el:"mid",tags:["ML","Python","SQL"],dept:"Data & AI",feat:true,dead:"Jun 28",ddate:"2025-06-28",sn:29,isNew:false,urgent:true,
    desc:"Work on Swiggy's recommendation and personalization systems, optimizing food discovery for 80M+ users.",
    resp:["Build and deploy recommendation models at scale","Analyze A/B tests and drive data-informed decisions","Collaborate with engineering to productionize models","Present insights to leadership"],
    req:["2+ years in data science or ML","Strong Python (pandas, scikit-learn, PyTorch)","Solid SQL and data pipeline experience","Experience with A/B testing frameworks"]},
  {id:4,title:"Product Manager",co:"CRED",logo:"C",lc:"#1a1a1a",type:"Full-time",loc:"Mumbai",sal:"₹28–45 LPA",exp:"4–8 yrs",el:"senior",tags:["Strategy","Analytics","Roadmapping"],dept:"Product",feat:false,dead:"Jul 10",ddate:"2025-07-10",sn:36,isNew:true,urgent:false,
    desc:"Drive the roadmap for CRED's credit-card rewards and benefits product. Shape strategy and partner with design and engineering.",
    resp:["Own the product roadmap for rewards","Define success metrics and track performance","Conduct user interviews and synthesize insights","Drive alignment across design, engineering, and business"],
    req:["4+ years product management experience","Strong analytical mindset with SQL/Excel","Fintech or consumer app experience preferred","Excellent communication skills"]},
  {id:5,title:"ML Engineer",co:"Microsoft",logo:"M",lc:"#0d1a2a",type:"Full-time",loc:"Hyderabad",sal:"₹30–50 LPA",exp:"3–6 yrs",el:"senior",tags:["PyTorch","MLOps","LLMs"],dept:"Data & AI",feat:false,dead:"Jul 2",ddate:"2025-07-02",sn:40,isNew:false,urgent:false,
    desc:"Join Microsoft Research India to build production ML systems focused on LLM training infrastructure, fine-tuning pipelines, and evaluation frameworks.",
    resp:["Design and maintain LLM training infrastructure","Build scalable MLOps pipelines","Collaborate with researchers to productionize models","Optimize inference latency and throughput at scale"],
    req:["3+ years ML engineering or MLOps","Deep PyTorch expertise","Experience with distributed training (DeepSpeed, FSDP)","Familiarity with LLM fine-tuning and evaluation"]},
  {id:6,title:"Frontend Engineer",co:"Meesho",logo:"m",lc:"#1a1a0d",type:"Remote",loc:"Remote",sal:"₹16–28 LPA",exp:"2–4 yrs",el:"mid",tags:["React","TypeScript","Performance"],dept:"Engineering",feat:false,dead:"Jul 8",ddate:"2025-07-08",sn:22,isNew:true,urgent:false,
    desc:"Build blazing-fast, accessible web experiences for Meesho's 140M+ users. Own critical user journeys including discovery, cart, and checkout.",
    resp:["Build and maintain high-performance React components","Optimize Core Web Vitals","Implement accessibility standards (WCAG 2.1)","Create pixel-perfect UIs with the design team"],
    req:["2+ years frontend development","Expert-level React and TypeScript","Strong browser performance fundamentals","Experience with Lighthouse or WebPageTest"]},
  {id:7,title:"SDE Intern",co:"Amazon",logo:"A",lc:"#2a0d0d",type:"Internship",loc:"Hyderabad",sal:"₹70k/mo",exp:"0 yrs",el:"entry",tags:["DSA","Java","OOP"],dept:"Engineering",feat:false,dead:"Jun 25",ddate:"2025-06-25",sn:8,isNew:false,urgent:true,
    desc:"6-month SDE internship on Amazon's supply chain optimization team. Solve real problems affecting millions of deliveries.",
    resp:["Build features in Java microservices","Participate in design and code reviews","Write unit and integration tests","Present at end-of-internship showcase"],
    req:["Pursuing B.Tech/M.Tech in CS","Strong DSA fundamentals","Java proficiency","Interest in distributed systems"]},
  {id:8,title:"DevOps Engineer",co:"Flipkart",logo:"F",lc:"#0d2a0d",type:"Full-time",loc:"Bangalore",sal:"₹18–32 LPA",exp:"3–5 yrs",el:"mid",tags:["Kubernetes","AWS","CI/CD"],dept:"Engineering",feat:false,dead:"Jul 15",ddate:"2025-07-15",sn:25,isNew:false,urgent:false,
    desc:"Manage one of India's largest cloud-native infrastructures. Own CI/CD pipelines, Kubernetes clusters, and IaC for services handling millions of requests daily.",
    resp:["Design and operate Kubernetes clusters at scale","Build CI/CD pipelines with Jenkins/GitHub Actions","Implement IaC using Terraform","Drive SRE practices including SLOs and error budgets"],
    req:["3+ years DevOps or SRE","Hands-on Kubernetes and Helm","AWS expertise (EKS, EC2, S3, IAM)","Strong scripting in Python or Bash"]},
  {id:9,title:"Growth Marketing Manager",co:"Zepto",logo:"Z",lc:"#0d1a2a",type:"Full-time",loc:"Mumbai",sal:"₹18–28 LPA",exp:"3–5 yrs",el:"mid",tags:["Performance Marketing","SQL","CRM"],dept:"Marketing",feat:false,dead:"Jul 20",ddate:"2025-07-20",sn:23,isNew:false,urgent:false,
    desc:"Drive Zepto's user acquisition and retention across digital channels. Manage large budgets and use data to optimize CAC and LTV.",
    resp:["Manage ₹5Cr+ monthly ad budgets","Run A/B tests on creatives and targeting","Build automated CRM journeys","Report on growth KPIs to leadership"],
    req:["3+ years growth or performance marketing","Meta Ads Manager, Google Ads, MMP tools","SQL proficiency","Strong communication skills"]},
  {id:10,title:"Backend Engineer (Go)",co:"Zerodha",logo:"Z",lc:"#0d2a1a",type:"Full-time",loc:"Bangalore",sal:"₹20–35 LPA",exp:"2–5 yrs",el:"mid",tags:["Go","Kafka","PostgreSQL"],dept:"Engineering",feat:true,dead:"Jul 12",ddate:"2025-07-12",sn:27,isNew:true,urgent:false,
    desc:"Work on Zerodha's core trading platform serving 10M+ active traders. Build high-throughput, low-latency Go systems processing millions of orders per day.",
    resp:["Build and maintain critical trading microservices in Go","Design Kafka-based event-driven architectures","Optimize PostgreSQL queries and schema","On-call for production systems"],
    req:["2+ years Go in production","Familiarity with Kafka or message queues","Strong PostgreSQL skills","Passion for fault-tolerant systems"]},
  {id:11,title:"UX Researcher",co:"Atlassian",logo:"A",lc:"#0d1a2a",type:"Remote",loc:"Remote",sal:"₹22–35 LPA",exp:"3–5 yrs",el:"mid",tags:["User Research","Usability Testing","Figma"],dept:"Design",feat:false,dead:"Jul 18",ddate:"2025-07-18",sn:28,isNew:false,urgent:false,
    desc:"Lead research for Atlassian's Jira and Confluence products. Plan and execute qualitative and quantitative studies.",
    resp:["Plan and execute usability studies","Conduct interviews, surveys, and diary studies","Synthesize research into clear insights","Partner with product and design on roadmap decisions"],
    req:["3+ years UX research","Experience with qualitative and quantitative methods","Familiarity with UserTesting, Dovetail, Maze","Strong written communication"]},
  {id:12,title:"Finance Analyst",co:"PhonePe",logo:"P",lc:"#1a1a0d",type:"Full-time",loc:"Bangalore",sal:"₹12–20 LPA",exp:"1–3 yrs",el:"entry",tags:["Excel","Financial Modelling","SQL"],dept:"Finance",feat:false,dead:"Jul 22",ddate:"2025-07-22",sn:16,isNew:false,urgent:false,
    desc:"Support PhonePe's FP&A function by building financial models, preparing management reports, and partnering with business units.",
    resp:["Build and maintain monthly MIS reports","Support budgeting and forecasting cycles","Analyze actuals vs. budget","Ad hoc financial analysis for business teams"],
    req:["CA / MBA (Finance) from top institute","1–3 years finance or accounting","Strong Excel and financial modelling","SQL knowledge preferred"]},
];

/* ══════════════════════════════
   STATE
══════════════════════════════ */
let chipFilter  = 'all';
let sortMode    = 'recent';
let viewMode    = 'list';
let saved       = new Set();
let compareSet  = new Set();
let sbTypes     = new Set();
let sbExps      = new Set();
let sbDepts     = new Set();
let minSal      = 5;
let profile     = null;
let compareOpen = false;
let applyStep   = 1;
let applyJob    = null;
const TC = ['skill-b','skill-g','skill-a','skill-r','skill-p'];

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
function showToast(msg, type='success', dur=3000) {
  const w = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  const icons = {success:'✓',warning:'⚠',error:'✕',info:'ℹ'};
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ'}</span><span>${msg}</span>`;
  w.appendChild(t);
  setTimeout(() => { t.classList.add('toast-out'); setTimeout(() => t.remove(), 250); }, dur);
}

/* ══════════════════════════════
   ANIMATIONS
══════════════════════════════ */
function countUp(id, target, suffix='', prefix='') {
  const el = document.getElementById(id);
  let v = 0; const step = Math.ceil(target/40);
  const iv = setInterval(() => {
    v = Math.min(v + step, target);
    el.textContent = prefix + v.toLocaleString('en-IN') + suffix;
    if (v >= target) clearInterval(iv);
  }, 28);
}
function animSalBars() {
  setTimeout(() => {
    document.querySelectorAll('.sal-fill').forEach((el,i) => {
      setTimeout(() => { el.style.width = el.dataset.w; }, i * 90);
    });
  }, 800);
}
function updateRangeTrack(el) {
  const pct = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.setProperty('--pct', pct + '%');
}
function updateRange(el) {
  updateRangeTrack(el);
  document.getElementById('sal-val').textContent = `₹${el.value} LPA+`;
  minSal = parseInt(el.value);
}

/* ══════════════════════════════
   MATCH SCORE
══════════════════════════════ */
function matchScore(job) {
  if (!profile || !profile.skills || !profile.skills.length) return null;
  const txt = [...job.tags, job.title, job.dept, ...(job.req||[])].join(' ').toLowerCase();
  let m = 0;
  profile.skills.forEach(s => { if (txt.includes(s.toLowerCase())) m++; });
  const pct = Math.round(m / profile.skills.length * 100);
  if (pct >= 60) return {pct, cls: 'badge-match', label: `${pct}% match`};
  if (pct >= 30) return {pct, cls: 'badge-match', label: `${pct}% match`, dim: true};
  return null;
}

/* ══════════════════════════════
   SUGGESTIONS
══════════════════════════════ */
const SUGG = ['Software Engineer','Data Scientist','Product Manager','Product Designer','Frontend Engineer','Backend Engineer','ML Engineer','DevOps Engineer','UX Researcher','Finance Analyst','Go Engineer'];
function renderSuggestions() {
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  if (!q) { hideSuggestions(); return; }
  const hits = SUGG.filter(s => s.toLowerCase().includes(q)).slice(0,4);
  const cos  = JOBS.filter(j => j.co.toLowerCase().includes(q)).slice(0,2);
  const el = document.getElementById('suggestions');
  if (!hits.length && !cos.length) { hideSuggestions(); return; }
  let html = hits.map(s => `<div class="suggestion" onclick="qs('${s}')"><span class="suggestion-icon">⌕</span><span>${s}</span></div>`).join('');
  if (cos.length) {
    html += '<div class="suggestion-divider"></div>';
    html += cos.map(j => `<div class="suggestion" onclick="qs('${j.co}')"><span class="suggestion-icon">⬡</span><span>${j.co}</span><span class="suggestion-meta">Company</span></div>`).join('');
  }
  el.innerHTML = html;
  el.classList.add('open');
}
function hideSuggestions() { document.getElementById('suggestions').classList.remove('open'); }
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) hideSuggestions(); });

/* ══════════════════════════════
   RENDER JOBS
══════════════════════════════ */
function renderJobs(list) {
  const c = document.getElementById('jobs-list');
  const n = list.length;
  document.getElementById('list-count').textContent = `${n} role${n!==1?'s':''}`;
  document.getElementById('results-count').textContent = `${n} result${n!==1?'s':''}`;

  if (!n) {
    c.innerHTML = `<div class="empty-state">
      <div class="empty-icon">◎</div>
      <div class="empty-title">No roles found</div>
      <p class="empty-sub">Try different keywords or adjust your filters.</p>
      <button class="btn-modal btn-modal-outline" onclick="clearAll()">Clear all filters</button>
    </div>`;
    return;
  }

  const cards = list.map((j,i) => {
    const tags = j.tags.map((t,ti) => `<span class="skill-tag ${TC[ti%5]}">${t}</span>`).join('');
    const sv = saved.has(j.id);
    const cv = compareSet.has(j.id);
    const ms = matchScore(j);
    return `
<div class="job-card ${j.feat?'featured':''}" style="animation-delay:${i*.05}s" data-id="${j.id}">
  <div class="card-badges">
    ${ms ? `<span class="badge badge-match">${ms.label}</span>` : ''}
    ${j.isNew ? '<span class="badge badge-new">NEW</span>' : ''}
    ${j.feat ? '<span class="badge badge-featured">★ FEATURED</span>' : ''}
    ${j.urgent ? '<span class="badge badge-urgent">⚡ URGENT</span>' : ''}
  </div>
  <div class="card-top" onclick="openDetail(${j.id})" style="cursor:pointer">
    <div class="logo-wrap" style="background:${j.lc}">${j.logo}</div>
    <div class="card-title-wrap">
      <div class="card-title">${j.title}</div>
      <div class="card-company">${j.co}</div>
    </div>
  </div>
  <div class="card-meta" onclick="openDetail(${j.id})" style="cursor:pointer">
    <span class="meta-tag"><span class="meta-tag-icon">📍</span>${j.loc}</span>
    <span class="meta-tag"><span class="meta-tag-icon">💼</span>${j.type}</span>
    <span class="meta-tag"><span class="meta-tag-icon">💰</span>${j.sal}</span>
    <span class="meta-tag"><span class="meta-tag-icon">⏱</span>${j.exp}</span>
  </div>
  <div class="skill-tags">${tags}</div>
  <div class="card-footer">
    <div class="card-deadline ${j.urgent?'urgent':''}">
      ${j.urgent?'⚡':'○'} Closes ${j.dead}
    </div>
    <div class="card-actions">
      <button class="btn-card btn-compare-card ${cv?'active':''}" onclick="toggleCompare(${j.id},this)" title="Compare">⚖</button>
      <button class="btn-card btn-save ${sv?'saved':''}" onclick="toggleSave(${j.id},this)">
        ${sv?'★ Saved':'☆ Save'}
      </button>
      <button class="btn-card btn-apply-card" onclick="openApply(${j.id})">Apply →</button>
    </div>
  </div>
</div>`;
  }).join('');

  c.innerHTML = viewMode === 'grid' ? `<div class="jobs-grid">${cards}</div>` : cards;
  document.getElementById('list-title').textContent =
    profile ? `Matched for ${profile.name.split(' ')[0]}` : 'All Jobs';
}

/* ══════════════════════════════
   FILTERING
══════════════════════════════ */
function getFiltered() {
  const q  = document.getElementById('search-input').value.toLowerCase().trim();
  const lf = document.getElementById('loc-filter').value;
  return JOBS.filter(j => {
    if (chipFilter !== 'all') {
      if (chipFilter==='featured' && !j.feat) return false;
      if (chipFilter==='new' && !j.isNew) return false;
      if (!['featured','new'].includes(chipFilter) && j.type!==chipFilter && !(chipFilter==='Remote'&&j.loc==='Remote')) return false;
    }
    if (sbTypes.size && !sbTypes.has(j.type) && !(sbTypes.has('Remote')&&j.loc==='Remote')) return false;
    if (sbExps.size && !sbExps.has(j.el)) return false;
    if (sbDepts.size && !sbDepts.has(j.dept)) return false;
    if (j.sn < minSal) return false;
    if (q && !j.title.toLowerCase().includes(q) && !j.co.toLowerCase().includes(q) &&
        !j.tags.some(t=>t.toLowerCase().includes(q)) && !j.dept.toLowerCase().includes(q) &&
        !j.desc.toLowerCase().includes(q)) return false;
    if (lf!=='All Locations' && j.loc!==lf && !(lf==='Remote'&&j.type==='Remote')) return false;
    return true;
  });
}
function getSorted(list) {
  if (sortMode==='salary')   return [...list].sort((a,b)=>b.sn-a.sn);
  if (sortMode==='deadline') return [...list].sort((a,b)=>new Date(a.ddate)-new Date(b.ddate));
  if (sortMode==='match')    return [...list].sort((a,b)=>(matchScore(b)?.pct||0)-(matchScore(a)?.pct||0));
  return [...list].sort((a,b)=>b.id-a.id);
}
function doSearch() { renderJobs(getSorted(getFiltered())); }
function qs(q) {
  document.getElementById('search-input').value = q;
  hideSuggestions();
  doSearch();
  document.getElementById('jobs-anchor').scrollIntoView({behavior:'smooth'});
}
function setChipFilter(f, btn) {
  chipFilter = f;
  document.querySelectorAll('.filter-chip[data-f]').forEach(b => {
    b.classList.remove('active','active-amber');
    if (b.dataset.f === f) b.classList.add(f==='featured' ? 'active-amber' : 'active');
  });
  doSearch();
}
function applyFilters() {
  sbTypes = new Set([...document.querySelectorAll('#sb-type input:checked')].map(c=>c.value));
  sbExps  = new Set([...document.querySelectorAll('#sb-exp input:checked')].map(c=>c.value));
  sbDepts = new Set([...document.querySelectorAll('#sb-dept input:checked')].map(c=>c.value));
  document.querySelectorAll('.filter-option input[type=checkbox]').forEach(cb => {
    const box = cb.nextElementSibling;
    if (box && box.classList.contains('custom-checkbox')) {
      box.classList.toggle('checked', cb.checked);
      const svg = box.querySelector('svg');
      if (svg) svg.style.display = cb.checked ? 'block' : 'none';
    }
  });
  doSearch();
}
function clearSidebarGroup(id) {
  document.querySelectorAll(`#${id} input`).forEach(el => { el.checked = false; });
  applyFilters();
  showToast('Filter cleared', 'info', 2000);
}
function clearAll() {
  document.getElementById('search-input').value = '';
  document.getElementById('loc-filter').selectedIndex = 0;
  document.getElementById('sal-range').value = 5;
  updateRange(document.getElementById('sal-range'));
  document.querySelectorAll('.sidebar input[type=checkbox]').forEach(el => el.checked = false);
  sbTypes = sbExps = sbDepts = new Set(); minSal = 5; chipFilter = 'all';
  document.querySelectorAll('.filter-chip[data-f]').forEach(b => {
    b.classList.remove('active','active-amber');
    if (b.dataset.f==='all') b.classList.add('active');
  });
  applyFilters();
  showToast('All filters cleared', 'info', 2500);
}
function sortBy(v) { sortMode = v; doSearch(); }
function setView(v) {
  viewMode = v;
  document.getElementById('vb-list').classList.toggle('on', v==='list');
  document.getElementById('vb-grid').classList.toggle('on', v==='grid');
  doSearch();
}

/* ══════════════════════════════
   SAVE
══════════════════════════════ */
function toggleSave(id, btn) {
  if (saved.has(id)) {
    saved.delete(id); btn.textContent='☆ Save'; btn.classList.remove('saved');
    showToast('Removed from saved','info',2000);
  } else {
    saved.add(id); btn.textContent='★ Saved'; btn.classList.add('saved');
    showToast('Saved! Open Saved Jobs to review →','success',2500);
  }
  updateBadge('saved-badge', saved.size);
}
function updateBadge(id, n) {
  const el = document.getElementById(id);
  if (n > 0) { el.style.display='flex'; el.textContent=n; } else el.style.display='none';
}
function openSavedDrawer() {
  const body = document.getElementById('saved-drawer-body');
  const ct = document.getElementById('saved-drawer-count');
  ct.textContent = saved.size ? `(${saved.size})` : '';
  if (!saved.size) {
    body.innerHTML = `<div class="empty-state" style="padding:48px 16px">
      <div class="empty-icon">☆</div>
      <div class="empty-title">Nothing saved yet</div>
      <p class="empty-sub">Click ☆ Save on any job card.</p></div>`;
  } else {
    const list = JOBS.filter(j=>saved.has(j.id));
    body.innerHTML = list.map(j=>`
<div class="saved-card">
  <div class="saved-card-top">
    <div class="saved-logo" style="background:${j.lc}">${j.logo}</div>
    <div><div class="saved-title">${j.title}</div><div class="saved-co">${j.co} · ${j.sal}</div></div>
  </div>
  <div class="saved-actions">
    <button class="btn-saved-action btn-sa-primary" onclick="closeSavedDrawer();openApply(${j.id})">Apply →</button>
    <button class="btn-saved-action btn-sa-ghost" onclick="closeSavedDrawer();openDetail(${j.id})">Details</button>
    <button class="btn-saved-action btn-sa-remove" onclick="removeSaved(${j.id},this.closest('.saved-card'))">Remove</button>
  </div>
</div>`).join('');
  }
  document.getElementById('saved-overlay').classList.add('open');
}
function removeSaved(id, el) {
  saved.delete(id); el.style.opacity=0; setTimeout(()=>el.remove(),200);
  updateBadge('saved-badge', saved.size);
  doSearch();
  if (!saved.size) {
    document.getElementById('saved-drawer-count').textContent = '';
    document.getElementById('saved-drawer-body').innerHTML = `<div class="empty-state" style="padding:48px 16px"><div class="empty-icon">☆</div><div class="empty-title">Nothing saved</div></div>`;
  }
}
function closeSavedDrawer() { document.getElementById('saved-overlay').classList.remove('open'); }
function closeSavedBg(e) { if (e.target===document.getElementById('saved-overlay')) closeSavedDrawer(); }

/* ══════════════════════════════
   COMPARE
══════════════════════════════ */
function toggleCompareBar() {
  compareOpen = !compareOpen;
  document.getElementById('compare-bar').classList.toggle('open', compareOpen);
}
function toggleCompare(id, btn) {
  if (compareSet.has(id)) {
    compareSet.delete(id); btn.classList.remove('active');
    showToast('Removed from compare','info',2000);
  } else {
    if (compareSet.size>=3) { showToast('Max 3 jobs at once','warning',3000); return; }
    compareSet.add(id); btn.classList.add('active');
    showToast('Added to compare ⚖','info',2000);
    if (!compareOpen) { compareOpen=true; document.getElementById('compare-bar').classList.add('open'); }
  }
  updateCompareSlots();
  updateBadge('compare-badge', compareSet.size);
}
function updateCompareSlots() {
  const jobs = JOBS.filter(j=>compareSet.has(j.id));
  for (let i=0;i<3;i++) {
    const s = document.getElementById(`cs${i}`);
    if (jobs[i]) {
      s.className='cslot filled';
      s.innerHTML=`${jobs[i].title}<button class="cslot-remove" onclick="toggleCompare(${jobs[i].id},document.querySelector('[data-id=\\'${jobs[i].id}\\'] .btn-compare-card'))">×</button>`;
    } else {
      s.className='cslot'; s.textContent='Select a job…';
    }
  }
  const btn = document.getElementById('btn-cgo');
  btn.disabled = compareSet.size<2;
}
function clearCompare() {
  compareSet.clear(); updateCompareSlots(); updateBadge('compare-badge',0);
  compareOpen=false; document.getElementById('compare-bar').classList.remove('open');
  doSearch();
}
function openCtable() {
  if (compareSet.size<2) return;
  const jobs = JOBS.filter(j=>compareSet.has(j.id));
  document.getElementById('ctable-sub').textContent = jobs.map(j=>j.title).join(' vs ');
  const maxSal = Math.max(...jobs.map(j=>j.sn));
  const rows = [
    ['Company',j=>j.co],['Location',j=>j.loc],['Type',j=>j.type],
    ['Salary',j=>j.sal],['Experience',j=>j.exp],['Department',j=>j.dept],
    ['Deadline',j=>j.dead],['Skills',j=>j.tags.join(', ')],
  ].map(([lbl,fn])=>`<tr><td>${lbl}</td>${jobs.map(j=>{
    const v=fn(j); const win=lbl==='Salary'&&j.sn===maxSal;
    return `<td>${win?`<span class="compare-winner">${v}</span>`:v}</td>`;
  }).join('')}</tr>`).join('');
  document.getElementById('ctable-wrap').innerHTML=`<table class="ctable"><thead><tr><th></th>${jobs.map(j=>`<th><div style="font-size:13px;font-weight:600;color:var(--text)">${j.title}</div><div style="font-size:11px;font-weight:400;text-transform:none;letter-spacing:0;color:var(--text3)">${j.co}</div></th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`;
  document.getElementById('ctable-overlay').classList.add('open');
}
function closeCtable() { document.getElementById('ctable-overlay').classList.remove('open'); }

/* ══════════════════════════════
   JOB DETAIL
══════════════════════════════ */
function openDetail(id) {
  const j = JOBS.find(j=>j.id===id);
  const tags = j.tags.map((t,i)=>`<span class="skill-tag ${TC[i%5]}">${t}</span>`).join('');
  const ms = matchScore(j);
  document.getElementById('detail-body').innerHTML=`
<div class="detail-hero-section">
  <div class="detail-logo-lg" style="background:${j.lc}">${j.logo}</div>
  <div style="flex:1">
    <div class="detail-info-title">${j.title}</div>
    <div class="detail-info-sub">${j.co} · ${j.loc} · ${j.type}</div>
    <div style="display:flex;align-items:center;gap:8px;margin-top:10px;flex-wrap:wrap">
      <div class="skill-tags" style="margin:0">${tags}</div>
      ${ms?`<span class="badge badge-match">${ms.label}</span>`:''}
    </div>
  </div>
</div>
<div style="padding:22px 28px">
  <div class="ai-card">
    <div class="ai-card-label">✦ AI Summary</div>
    <p id="ai-p"><span class="typing-cursor">|</span></p>
  </div>
  <div class="detail-meta-grid">
    <div class="detail-meta-cell"><div class="detail-meta-label">Salary</div><div class="detail-meta-value">${j.sal}</div></div>
    <div class="detail-meta-cell"><div class="detail-meta-label">Experience</div><div class="detail-meta-value">${j.exp}</div></div>
    <div class="detail-meta-cell"><div class="detail-meta-label">Department</div><div class="detail-meta-value">${j.dept}</div></div>
    <div class="detail-meta-cell"><div class="detail-meta-label">Closing</div><div class="detail-meta-value">${j.dead}</div></div>
  </div>
  <div class="detail-section"><div class="detail-section-hd">About the Role</div><p>${j.desc}</p></div>
  <div class="detail-section"><div class="detail-section-hd">Responsibilities</div><ul>${j.resp.map(r=>`<li>${r}</li>`).join('')}</ul></div>
  <div class="detail-section"><div class="detail-section-hd">Requirements</div><ul>${j.req.map(r=>`<li>${r}</li>`).join('')}</ul></div>
</div>
<div class="modal-footer">
  <button class="btn-card btn-save ${saved.has(j.id)?'saved':''}" id="detail-save-btn" onclick="toggleSave(${j.id},this)">
    ${saved.has(j.id)?'★ Saved':'☆ Save'}
  </button>
  <div style="display:flex;gap:8px">
    <button class="btn-modal btn-modal-outline" onclick="closeDetail()">Close</button>
    <button class="btn-modal btn-modal-primary" onclick="closeDetail();openApply(${j.id})">Apply Now →</button>
  </div>
</div>`;
  const sumEl = document.getElementById('ai-p');
  const sum = `${j.co} is seeking a ${j.title} with ${j.exp} of experience. Based in ${j.loc}, this ${j.type.toLowerCase()} role offers ${j.sal} and focuses on ${j.tags.slice(0,2).join(' and ')} within the ${j.dept} team.`;
  let ci=0; sumEl.textContent='';
  const iv = setInterval(()=>{ sumEl.textContent=sum.slice(0,++ci); if(ci>=sum.length) clearInterval(iv); },16);
  document.getElementById('detail-overlay').classList.add('open');
}
function closeDetail() { document.getElementById('detail-overlay').classList.remove('open'); }

/* ══════════════════════════════
   APPLY MODAL
══════════════════════════════ */
const STEPS = [
  () => `
<div class="form-2col">
  <div class="form-row"><label>First Name *</label><input class="form-input" placeholder="Arjun"></div>
  <div class="form-row"><label>Last Name *</label><input class="form-input" placeholder="Sharma"></div>
</div>
<div class="form-row"><label>Email Address *</label><input class="form-input" type="email" placeholder="arjun@email.com"></div>
<div class="form-row"><label>Phone Number</label><input class="form-input" type="tel" placeholder="+91 98765 43210"></div>
<div class="form-row"><label>LinkedIn URL</label><input class="form-input" type="url" placeholder="linkedin.com/in/arjun"></div>
<div class="form-row"><label>Portfolio / GitHub</label><input class="form-input" type="url" placeholder="github.com/arjun"></div>`,
  () => `
<div class="form-row">
  <label>Resume / CV *</label>
  <div class="upload-area" onclick="document.getElementById('cv-file').click()">
    <div class="upload-icon">📄</div>
    <div class="upload-text" id="cv-label"><strong>Click to upload</strong> or drag & drop<br><span style="font-size:11px">PDF or DOCX · Max 5 MB</span></div>
    <input type="file" id="cv-file" accept=".pdf,.docx" style="display:none"
      onchange="document.getElementById('cv-label').innerHTML='<strong>'+this.files[0].name+'</strong> ready ✓'">
  </div>
</div>
<div class="form-2col">
  <div class="form-row"><label>Years of Experience</label>
    <select class="form-select"><option>0–1 yr</option><option>1–2 yrs</option><option>2–4 yrs</option><option selected>4–6 yrs</option><option>6–10 yrs</option><option>10+ yrs</option></select>
  </div>
  <div class="form-row"><label>Notice Period</label>
    <select class="form-select"><option>Immediately</option><option>15 days</option><option selected>30 days</option><option>60 days</option><option>90 days</option></select>
  </div>
</div>
<div class="form-row"><label>Current Role</label><input class="form-input" placeholder="Software Engineer at Infosys"></div>`,
  () => `
<div class="form-row">
  <label>Why are you interested in this role? *</label>
  <textarea class="form-textarea" placeholder="Tell us what excites you and why you'd be a great fit…"></textarea>
</div>
<div class="form-2col">
  <div class="form-row"><label>Expected Salary (LPA)</label><input class="form-input" placeholder="e.g. 30"></div>
  <div class="form-row"><label>How did you hear about us?</label>
    <select class="form-select"><option>Hirecraft</option><option>LinkedIn</option><option>Referral</option><option>Google</option><option>Other</option></select>
  </div>
</div>
<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:12px 14px;font-size:12px;color:var(--text3);line-height:1.7">
  By submitting, you agree to our <a href="#" style="color:var(--text2)">privacy policy</a>. Your info is shared only with the hiring company.
</div>`
];
const SLABELS = ['Personal','Experience','Questions'];

function openApply(id) {
  applyJob = JOBS.find(j=>j.id===id); applyStep=1;
  document.getElementById('apply-title').textContent = `Apply — ${applyJob.title}`;
  document.getElementById('apply-sub').textContent   = `${applyJob.co} · ${applyJob.loc} · ${applyJob.sal}`;
  renderApplyStep();
  document.getElementById('apply-overlay').classList.add('open');
}
function renderApplyStep() {
  for (let i=1;i<=3;i++) {
    const s = document.getElementById(`ss${i}`);
    s.className = 'step-seg' + (i<applyStep?' done':i===applyStep?' active':'');
  }
  document.getElementById('apply-step-content').innerHTML = STEPS[applyStep-1]();
  const ft = document.getElementById('apply-footer');
  const back = `<button class="btn-modal-ghost" onclick="${applyStep>1?'prevApply()':'closeApply()'}">← ${applyStep>1?'Back':'Cancel'}</button>`;
  const info = `<span class="step-info">Step ${applyStep} of 3 — ${SLABELS[applyStep-1]}</span>`;
  ft.innerHTML = applyStep<3
    ? `${back}${info}<button class="btn-modal btn-modal-primary" onclick="nextApply()">Continue →</button>`
    : `${back}${info}<button class="btn-modal btn-modal-primary" onclick="submitApply()">Submit Application</button>`;
}
function nextApply() { if (applyStep<3) { applyStep++; renderApplyStep(); } }
function prevApply() { if (applyStep>1) { applyStep--; renderApplyStep(); } }
function submitApply() {
  document.getElementById('apply-step-content').innerHTML=`
<div class="success-wrap">
  <div class="success-icon-ring">✓</div>
  <div class="success-title">Application Submitted!</div>
  <p class="success-sub">Your application for <strong>${applyJob.title}</strong> at <strong>${applyJob.co}</strong> has been received. Expect a response within 3–5 business days.</p>
  <div class="success-tip">💡 Tip: Save similar roles to stay ready. Companies respond faster to active candidates.</div>
  <div style="display:flex;gap:10px;justify-content:center">
    <button class="btn-modal btn-modal-outline" onclick="closeApply()">Close</button>
    <button class="btn-modal btn-modal-primary" onclick="closeApply();openSavedDrawer()">View Saved →</button>
  </div>
</div>`;
  document.getElementById('apply-footer').innerHTML='';
  ['ss1','ss2','ss3'].forEach(id=>document.getElementById(id).className='step-seg done');
  showToast(`🎉 Applied to ${applyJob.co}!`, 'success', 4000);
}
function closeApply() { document.getElementById('apply-overlay').classList.remove('open'); }

/* ══════════════════════════════
   POST JOB
══════════════════════════════ */
function showPostModal() { document.getElementById('post-overlay').classList.add('open'); }
function closePost() { document.getElementById('post-overlay').classList.remove('open'); }
function submitPost() {
  const co = document.getElementById('pj-co').value.trim();
  const title = document.getElementById('pj-title').value.trim();
  const email = document.getElementById('pj-email').value.trim();
  if (!co||!title) { showToast('Company and title are required','warning'); return; }
  if (!email||!email.includes('@')) { showToast('Valid work email required','warning'); return; }
  JOBS.unshift({
    id: Date.now(), title, co, logo: co[0].toUpperCase(), lc:'#0d1a0d',
    type: document.getElementById('pj-type').value,
    loc: document.getElementById('pj-loc').value,
    sal: '₹'+(document.getElementById('pj-sal').value||'Competitive'),
    exp: document.getElementById('pj-exp').value||'Any', el:'mid',
    tags: document.getElementById('pj-skills').value.split(',').map(s=>s.trim()).filter(Boolean).slice(0,4),
    dept:'Engineering', feat:false, dead:'Aug 30', ddate:'2025-08-30', sn:20, isNew:true, urgent:false,
    desc: document.getElementById('pj-desc').value||`Exciting opportunity at ${co}.`,
    resp:['Drive key projects','Collaborate with the team'],
    req:['Relevant experience','Strong communication']
  });
  closePost(); doSearch();
  showToast(`"${title}" at ${co} posted! Live within 24 hrs ✓`, 'success', 5000);
}

/* ══════════════════════════════
   PROFILE
══════════════════════════════ */
function showProfileModal() { document.getElementById('profile-overlay').classList.add('open'); }
function closeProfile()     { document.getElementById('profile-overlay').classList.remove('open'); }
function saveProfile() {
  const name = document.getElementById('p-name').value.trim();
  if (!name) { showToast('Please enter your name','warning'); return; }
  const exp  = document.getElementById('p-exp').value;
  const loc  = document.getElementById('p-loc').value;
  const msal = parseInt(document.getElementById('p-minsal').value)||0;
  const skills = [...document.querySelectorAll('#skill-grid .skill-select-btn.sel')].map(b=>b.textContent);
  profile = {name, exp, loc, skills, msal};
  closeProfile();
  const banner = document.getElementById('profile-banner');
  banner.classList.add('show');
  document.getElementById('banner-avatar').textContent = name[0].toUpperCase();
  document.getElementById('banner-name').textContent = name;
  document.getElementById('banner-skills').textContent = '';
  const btags = document.getElementById('banner-tags');
  btags.innerHTML = skills.slice(0,4).map(s=>`<span class="profile-banner-tag">${s}</span>`).join('');
  if (exp) { document.querySelectorAll('#sb-exp input').forEach(cb => { cb.checked = cb.value===exp; }); sbExps = new Set([exp]); }
  if (loc) { document.getElementById('loc-filter').value = loc; }
  if (msal>5) { document.getElementById('sal-range').value=msal; updateRange(document.getElementById('sal-range')); }
  doSearch();
  showToast(`Profile saved, ${name}! Showing your matches 🎯`, 'success', 4000);
}

/* ══════════════════════════════
   SALARY / ALERTS
══════════════════════════════ */
function showSalaryModal() { document.getElementById('salary-overlay').classList.add('open'); }
function closeSalary()     { document.getElementById('salary-overlay').classList.remove('open'); }
function submitAlert() {
  const v = document.getElementById('alert-email').value.trim();
  if (!v||!v.includes('@')) { showToast('Valid email required','warning'); return; }
  showToast(`Alerts enabled for ${v} 🔔`, 'success', 4000);
  document.getElementById('alert-email').value='';
}

/* ════════════════════════════════
   MODAL CLOSE HELPERS
════════════════════════════════ */
function closeBg(id) {
  const el = document.getElementById(id);
  if (event && event.target===el) el.classList.remove('open');
}
function closeAllModals() {
  ['apply-overlay','detail-overlay','post-overlay','profile-overlay','salary-overlay','ctable-overlay']
    .forEach(id => document.getElementById(id).classList.remove('open'));
  closeSavedDrawer();
}

/* ══════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeAllModals(); return; }
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key==='/') { e.preventDefault(); document.getElementById('search-input').focus(); }
  if (e.key==='s'||e.key==='S') openSavedDrawer();
  if (e.key==='c'||e.key==='C') toggleCompareBar();
  if (e.key==='p'||e.key==='P') showProfileModal();
  if (e.key==='?') {
    const h = document.getElementById('kb-hint');
    h.classList.toggle('show');
  }
});

/* ══════════════════════════════
   CHATBOT LOGIC
══════════════════════════════ */
function toggleChat() {
  const widget = document.getElementById('chat-widget');
  const btn = document.getElementById('chat-toggle-btn');
  const isOpen = widget.classList.toggle('open');
  btn.innerHTML = isOpen ? '✕' : '✦';
  if (isOpen) document.getElementById('chat-input').focus();
}
function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  setTimeout(() => {
    const reply = getBotReply(text.toLowerCase());
    addMessage(reply, 'bot');
  }, 600);
}
function addMessage(text, side) {
  const body = document.getElementById('chat-chat-body');
  const m = document.createElement('div');
  m.className = `msg msg-${side}`;
  m.textContent = text;
  body.appendChild(m);
  body.scrollTop = body.scrollHeight;
}
function getBotReply(q) {
  if (q.includes('job') || q.includes('hiring'))
    return `We currently have ${JOBS.length} active roles. You can filter by Engineering, Design, or Data!`;
  if (q.includes('salary') || q.includes('pay'))
    return "Check out our Salary Guide in the menu. SDE-II roles typically range from ₹20–40 LPA.";
  if (q.includes('remote'))
    return "Yes! About 30% of our listings are fully remote. I've filtered them for you on the main page.";
  if (q.includes('hello') || q.includes('hi'))
    return "Hello! How can I help you find your next meaningful role today?";
  if (q.includes('apply'))
    return "To apply, just click the 'Apply' button on any job card. It only takes 3 steps!";
  return "That's a good question. I recommend checking our 'Browse Jobs' section or completing your profile for a better match.";
}

/* ══════════════════════════════
   INIT
══════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    countUp('stat-jobs', 12400);
    countUp('stat-cos', 3800);
    countUp('stat-rate', 94, '%');
  }, 400);
  setTimeout(() => { renderJobs(JOBS); animSalBars(); }, 650);
  updateRangeTrack(document.getElementById('sal-range'));
  setTimeout(() => {
    const h = document.getElementById('kb-hint');
    h.classList.add('show');
    setTimeout(() => h.classList.remove('show'), 4500);
  }, 2500);
});

/* ════════════════════════════════════════════════════
   HIRECRAFT — PREMIUM ANIMATION ENGINE
════════════════════════════════════════════════════ */
(function() {
'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.innerWidth < 768;
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }

/* ── 1. CUSTOM CURSOR ── */
if (!prefersReducedMotion && !isMobile()) {
  const cursor = document.getElementById('hc-cursor');
  const ring   = document.getElementById('hc-cursor-ring');
  const dot    = document.getElementById('hc-cursor-dot');
  let mx = -100, my = -100;
  let rx = -100, ry = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });
  (function animRing() {
    rx = lerp(rx, mx, 0.14); ry = lerp(ry, my, 0.14);
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  const hoverEls = 'a, button, input, select, .job-card, .quick-tag, .filter-chip, .nav-link, [role=button]';
  document.addEventListener('mouseover', e => { if (e.target.closest(hoverEls)) document.body.classList.add('cursor-hover'); });
  document.addEventListener('mouseout',  e => { if (e.target.closest(hoverEls)) document.body.classList.remove('cursor-hover'); });
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
}

/* ── 2. FLOATING PARTICLES ── */
if (!prefersReducedMotion) {
  const container = document.getElementById('hc-particles');
  const PARTICLE_COUNT = isMobile() ? 6 : 14;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'hc-particle';
    const size = 40 + Math.random() * 120;
    const left = Math.random() * 100;
    const dur  = 18 + Math.random() * 22;
    const del  = Math.random() * -30;
    p.style.cssText = `width:${size}px;height:${size}px;left:${left}%;bottom:-${size}px;animation-duration:${dur}s;animation-delay:${del}s;`;
    container.appendChild(p);
  }
}

/* ── 3. PAGE LOADER ── */
const loader = document.getElementById('hc-loader');
function dismissLoader() {
  loader.classList.add('done');
  document.body.classList.add('loaded');
  setTimeout(() => initHeroText(), 200);
}
window.addEventListener('load', () => {
  const delay = prefersReducedMotion ? 0 : 1750;
  setTimeout(dismissLoader, delay);
});
setTimeout(dismissLoader, 4000);

/* ── 4. LENIS SMOOTH SCROLL ── */
let lenis = null;
function initLenis() {
  if (typeof Lenis === 'undefined' || prefersReducedMotion) return;
  lenis = new Lenis({
    duration: 1.3,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.5,
  });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  lenis.on('scroll', ({ scroll }) => { updateParallax(scroll); updateNavScroll(scroll); });
}
(function loadLenis() {
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.29/dist/lenis.min.js';
  s.onload = initLenis;
  document.head.appendChild(s);
})();

/* ── 5. SCROLL ANIMATIONS ── */
function initScrollObserver() {
  if (prefersReducedMotion) return;
  function tag(selector, anim, delay) {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (!el.dataset.anim) {
        el.dataset.anim = anim;
        if (delay) el.style.transitionDelay = (i * delay) + 'ms';
      }
    });
  }
  tag('.sidebar-panel', 'fade-left');
  tag('.filter-bar',    'fade-down');
  tag('.list-hd',       'fade-up');
  tag('.hero-stats',    'fade-up');
  tag('footer',         'blur-in');
  const animObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); animObs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-anim]').forEach(el => animObs.observe(el));
  const staggerObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); staggerObs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-stagger]').forEach(el => staggerObs.observe(el));
  const divObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); divObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.hc-divider').forEach(el => divObs.observe(el));
}

/* ── 6. JOB CARDS STAGGER ── */
const _originalRenderJobs = window.renderJobs;
if (typeof _originalRenderJobs === 'function') {
  window.renderJobs = function(jobs) {
    _originalRenderJobs(jobs);
    if (!prefersReducedMotion) {
      setTimeout(() => {
        document.querySelectorAll('.job-card').forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'none';
          setTimeout(() => {
            card.style.transition = 'opacity .45s ease, transform .45s cubic-bezier(.34,1.2,.64,1), border-color .22s, box-shadow .3s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40 + i * 55);
        });
      }, 10);
    }
  };
}

/* ── 7. SPLIT TEXT — HERO ── */
function initHeroText() {
  if (prefersReducedMotion) return;
  const h1 = document.querySelector('.hero h1');
  if (!h1 || h1.querySelector('.hc-split-word')) return;
  const rawHTML = h1.innerHTML;
  const fragment = document.createDocumentFragment();
  const temp = document.createElement('div');
  temp.innerHTML = rawHTML;
  function splitNode(node) {
    if (node.nodeType === 3) {
      const words = node.textContent.split(/( |\n)/);
      words.forEach(w => {
        if (w === ' ' || w === '\n') { fragment.appendChild(document.createTextNode(' ')); }
        else if (w) { const span = document.createElement('span'); span.className = 'hc-split-word'; span.textContent = w; fragment.appendChild(span); }
      });
    } else {
      const words = node.textContent.split(' ');
      words.forEach((w, i) => {
        if (!w) return;
        const outer = document.createElement(node.tagName);
        outer.className = 'hc-split-word ' + node.className;
        outer.textContent = w;
        fragment.appendChild(outer);
        if (i < words.length - 1) fragment.appendChild(document.createTextNode(' '));
      });
    }
  }
  Array.from(temp.childNodes).forEach(node => splitNode(node));
  h1.innerHTML = ''; h1.appendChild(fragment);
  const words = h1.querySelectorAll('.hc-split-word');
  words.forEach((w, i) => { setTimeout(() => w.classList.add('revealed'), 80 + i * 65); });
}

/* ── 8. PARALLAX ── */
let heroEl = null;
function updateParallax(scrollY) {
  if (!heroEl) return;
  const orb1 = document.getElementById('hc-orb1');
  const orb2 = document.getElementById('hc-orb2');
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.1}px)`;
}
function initMouseParallax() {
  if (prefersReducedMotion || isMobile()) return;
  heroEl = document.querySelector('.hero');
  if (!heroEl) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => {
    const rect = heroEl.getBoundingClientRect();
    if (e.clientY < rect.bottom + 100) {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      tx = nx * 12; ty = ny * 8;
    }
  });
  (function animParallax() {
    cx = lerp(cx, tx, 0.08); cy = lerp(cy, ty, 0.08);
    const inner = document.querySelector('.hero-inner');
    if (inner) inner.style.transform = `translate(${cx * 0.4}px, ${cy * 0.3}px)`;
    requestAnimationFrame(animParallax);
  })();
}
window.addEventListener('scroll', () => {
  if (!lenis) { updateParallax(window.scrollY); updateNavScroll(window.scrollY); }
}, { passive: true });

/* ── 9. NAV SCROLL EFFECT ── */
function updateNavScroll(scrollY) {
  const nav = document.querySelector('nav');
  if (!nav) return;
  nav.classList.toggle('scrolled', scrollY > 20);
}

/* ── 10. MAGNETIC BUTTONS ── */
function initMagneticButtons() {
  if (prefersReducedMotion || isMobile()) return;
  const magnets = document.querySelectorAll('.nav-btn-primary, .btn-search');
  magnets.forEach(btn => {
    btn.classList.add('magnetic');
    let bx = 0, by = 0, cx = 0, cy = 0;
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      bx = (e.clientX - (rect.left + rect.width/2)) * 0.35;
      by = (e.clientY - (rect.top  + rect.height/2)) * 0.35;
    });
    btn.addEventListener('mouseleave', () => { bx = 0; by = 0; });
    (function animMagnet() {
      cx = lerp(cx, bx, 0.18); cy = lerp(cy, by, 0.18);
      btn.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(animMagnet);
    })();
  });
}

/* ── 11. CARD HOVER RIPPLE ── */
function initCardRipples() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.job-card');
    if (!card || prefersReducedMotion) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:4px;height:4px;border-radius:50%;background:rgba(245,166,35,.15);transform:translate(-50%,-50%) scale(0);animation:cardRipple .6s cubic-bezier(.25,.46,.45,.94) forwards;pointer-events:none;z-index:10;`;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
  if (!document.getElementById('hc-ripple-style')) {
    const s = document.createElement('style');
    s.id = 'hc-ripple-style';
    s.textContent = `@keyframes cardRipple { to { transform:translate(-50%,-50%) scale(80); opacity:0; } }`;
    document.head.appendChild(s);
  }
}

/* ── 12. AMBIENT ORB FOLLOW ── */
function initOrbFollow() {
  if (prefersReducedMotion || isMobile()) return;
  const orb1 = document.getElementById('hc-orb1');
  let ox = 0, oy = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => {
    ox = (e.clientX / window.innerWidth  - 0.5) * 120;
    oy = (e.clientY / window.innerHeight - 0.5) * 80;
  });
  (function animOrb() {
    cx = lerp(cx, ox, 0.04); cy = lerp(cy, oy, 0.04);
    if (orb1) orb1.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(animOrb);
  })();
}

/* ── 13. SKELETON CARDS ── */
function showSkeletonCards() {
  const list = document.querySelector('.list-area');
  if (!list || prefersReducedMotion) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 4; i++) {
    const card = document.createElement('div');
    card.className = 'job-card'; card.style.marginBottom = '10px';
    card.innerHTML = `
      <div style="display:flex;gap:12px;margin-bottom:14px">
        <div class="hc-skeleton" style="width:42px;height:42px;border-radius:10px;flex-shrink:0"></div>
        <div style="flex:1">
          <div class="hc-skeleton" style="height:14px;width:60%;margin-bottom:8px"></div>
          <div class="hc-skeleton" style="height:11px;width:35%"></div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:12px">
        <div class="hc-skeleton" style="height:22px;width:70px;border-radius:5px"></div>
        <div class="hc-skeleton" style="height:22px;width:80px;border-radius:5px"></div>
        <div class="hc-skeleton" style="height:22px;width:60px;border-radius:5px"></div>
      </div>
      <div style="padding-top:14px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
        <div class="hc-skeleton" style="height:11px;width:80px"></div>
        <div class="hc-skeleton" style="height:28px;width:90px;border-radius:7px"></div>
      </div>`;
    frag.appendChild(card);
  }
  const listHd = list.querySelector('.list-hd');
  if (listHd) list.insertBefore(frag, listHd.nextSibling);
  setTimeout(() => {
    list.querySelectorAll('.hc-skeleton').forEach(el => {
      const card = el.closest('.job-card:not([data-id])');
      if (card) card.remove();
    });
  }, 700);
}

/* ── 14. SECTION DIVIDERS ── */
function injectDividers() {
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const div = document.createElement('div');
    div.className = 'hc-divider';
    div.style.cssText = 'margin:0;position:relative;z-index:1;';
    filterBar.after(div);
  }
}

/* ── 15. QUICK TAG EFFECTS ── */
function initQuickTagEffects() {
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => { if (!prefersReducedMotion) tag.style.transform = 'translateY(-2px)'; });
    tag.addEventListener('mouseleave', () => { tag.style.transform = ''; });
    tag.style.transition = 'all .25s cubic-bezier(.34,1.56,.64,1)';
  });
}

/* ── 16. PAGE VISIBILITY ── */
document.addEventListener('visibilitychange', () => {
  if (document.hidden && lenis) lenis.stop();
  else if (!document.hidden && lenis) lenis.start();
});

/* ── INIT ALL ── */
function initAll() {
  initScrollObserver();
  initMouseParallax();
  initMagneticButtons();
  initCardRipples();
  initOrbFollow();
  showSkeletonCards();
  injectDividers();
  initQuickTagEffects();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

})(); // end IIFE
