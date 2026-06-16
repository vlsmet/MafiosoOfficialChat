
(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('mafioso-theme');
  const prefersLight=window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  root.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));

  function ready(fn){document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
  ready(()=>{
    const first=document.body.firstElementChild;
    if(!document.querySelector('.skip-link')){
      const skip=document.createElement('a'); skip.href='#main-content'; skip.className='skip-link'; skip.textContent='Перейти к содержимому'; document.body.prepend(skip);
    }
    const main=document.querySelector('.container')||document.querySelector('main')||document.body;
    if(!main.id) main.id='main-content';

    const shell=document.createElement('div'); shell.className='site-shell';
    const menuBtn=document.createElement('button'); menuBtn.className='menu-toggle'; menuBtn.type='button'; menuBtn.setAttribute('aria-label','Открыть меню'); menuBtn.innerHTML='☰';
    const themeBtn=document.createElement('button'); themeBtn.className='theme-toggle'; themeBtn.type='button'; themeBtn.setAttribute('aria-label','Переключить тему');
    const setIcon=()=>{themeBtn.innerHTML=root.getAttribute('data-theme')==='light'?'☀':'☾'}; setIcon();
    shell.append(menuBtn,themeBtn); document.body.insertBefore(shell, document.body.children[1] || null);

    const links=[...document.querySelectorAll('a[href]')].filter(a=>!a.href.startsWith('javascript:') && !a.classList.contains('skip-link'));
    const nav=document.createElement('nav'); nav.className='mobile-nav'; nav.setAttribute('aria-label','Мобильное меню');
    const seen=new Set();
    links.filter(a=>{const t=a.textContent.trim(); if(!t||seen.has(t)) return false; seen.add(t); return true;}).slice(0,10).forEach(a=>{const c=a.cloneNode(true); c.removeAttribute('class'); nav.appendChild(c)});
    document.body.appendChild(nav);
    menuBtn.addEventListener('click',()=>{nav.classList.toggle('open'); menuBtn.innerHTML=nav.classList.contains('open')?'×':'☰'});
    nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menuBtn.innerHTML='☰'}});

    themeBtn.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='light'?'dark':'light'; root.setAttribute('data-theme',next); localStorage.setItem('mafioso-theme',next); setIcon();});

    const top=document.createElement('button'); top.className='to-top'; top.type='button'; top.setAttribute('aria-label','Вверх'); top.innerHTML='↑'; document.body.appendChild(top);
    top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    window.addEventListener('scroll',()=>top.classList.toggle('show',window.scrollY>420),{passive:true});

    document.querySelectorAll('img').forEach(img=>{img.loading='lazy'; img.decoding='async'});
    document.querySelectorAll('.container > *, .index-buttons > *, .role-box, .slang-term, .rules-section, .section, .card, .example-box, .section-toggle').forEach(el=>el.classList.add('reveal'));
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    const sections=[...document.querySelectorAll('[id]')].filter(s=>s.id!=='main-content');
    const pageLinks=[...document.querySelectorAll('.nav-menu a, .mobile-nav a')];
    if(sections.length){
      const spy=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){pageLinks.forEach(a=>a.classList.toggle('active', (a.getAttribute('onclick')||a.getAttribute('href')||'').includes(entry.target.id)))}})},{threshold:.45});
      sections.forEach(s=>spy.observe(s));
    }
  });
})();
