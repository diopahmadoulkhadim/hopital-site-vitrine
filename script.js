document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t){const o=80;window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-o,behavior:'smooth'})}const n=document.querySelector('.navbar-collapse');if(n.classList.contains('show'))new bootstrap.Collapse(n).hide()})});
const sections=document.querySelectorAll('section[id]'),navLinks=document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll',()=>{let c='';sections.forEach(s=>{if(window.pageYOffset>=s.offsetTop-100)c=s.getAttribute('id')});navLinks.forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+c)l.classList.add('active')})});
const form=document.getElementById('contactForm'),alertBox=document.getElementById('formAlert');
if(form)form.addEventListener('submit',function(e){e.preventDefault();alertBox.classList.remove('d-none');form.reset();setTimeout(()=>alertBox.classList.add('d-none'),5000)});
const animateElements=document.querySelectorAll('.doctor-card,.service-card,.equip-card,.stat-box,.about-card,.contact-info,.contact-form,.section-title,.table-responsive');
const observer=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('animate-in'),i*60);observer.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
animateElements.forEach(el=>{el.classList.add('animate-ready');observer.observe(el)});
window.addEventListener('load',()=>{const h=document.querySelector('.hero-section .container');if(h)h.classList.add('hero-animate')});
function animateCounter(el){const target=parseInt(el.getAttribute('data-target'),10),suffix=el.getAttribute('data-suffix')||'',duration=1800,start=performance.now();
function update(now){const p=Math.min((now-start)/duration,1),ease=1-Math.pow(1-p,3);el.textContent=Math.floor(ease*target)+suffix;if(p<1)requestAnimationFrame(update);else el.textContent=target+suffix}requestAnimationFrame(update)}
const counterObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.counter').forEach(c=>{if(!c.classList.contains('counted')){c.classList.add('counted');animateCounter(c)}});counterObserver.unobserve(e.target)}})},{threshold:.4});
const about=document.querySelector('#apropos');if(about)counterObserver.observe(about);
