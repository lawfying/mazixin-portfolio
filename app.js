(function(){
  var d=window.portfolio;
  var rail=document.getElementById("project-rail");
  function esc(s){return String(s||"").replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function projectCard(id,i){
    var p=d.projects[id];
    var first=(p.media||[]).find(function(m){return m[0]==="img"||m[0]==="preview"});
    var image=(p.star&&p.star.image)||(first&&first[1])||"assets/vision-evaluation.webp";
    var award=(p.awards||[])[0]||"项目实践";
    var tags=(p.tags||[]).slice(0,4).map(function(t){return '<span>'+esc(t)+'</span>'}).join("");
    return '<a class="project-slide '+(i%3===1?'is-portrait':'is-landscape')+(i===0?' is-active':'')+'" href="case.html?id='+encodeURIComponent(id)+'" data-slide="'+i+'"><div class="slide-copy"><span class="slide-index">'+String(i+1).padStart(2,'0')+' / 08</span><p class="slide-kicker">'+esc(p.category)+'</p><h4>'+esc(p.title)+'</h4><p class="slide-story">'+esc(p.card)+'</p><div class="slide-tags">'+tags+'</div><div class="slide-foot"><span>'+esc(award)+'</span><b>查看项目 ↗</b></div></div><div class="slide-visual"><img src="'+esc(image)+'" alt="'+esc(p.star&&p.star.alt||p.title)+'"><span class="visual-caption">'+esc(p.kind)+'</span></div></a>';
  }
  var ids=d.featured.concat(d.support);
  rail.innerHTML=ids.map(projectCard).join("");
  var viewport=document.getElementById("project-viewport"),slides=[].slice.call(rail.querySelectorAll(".project-slide")),dots=document.getElementById("project-dots"),count=document.getElementById("project-count"),active=0;
  dots.innerHTML=slides.map(function(_,i){return '<button class="carousel-dot'+(i===0?' active':'')+'" data-to="'+i+'" aria-label="第 '+(i+1)+' 个作品"></button>'}).join("");
  var dotButtons=[].slice.call(dots.querySelectorAll("button"));
  function setActive(i){
    active=i;
    slides.forEach(function(s,n){s.classList.toggle("is-active",n===active)});
    dotButtons.forEach(function(b,n){b.classList.toggle("active",n===active)});
    count.textContent=String(active+1).padStart(2,"0")+' / '+String(slides.length).padStart(2,"0");
  }
  function go(i){
    i=(i+slides.length)%slides.length;
    setActive(i);
    var slide=slides[i];
    var left=slide.getBoundingClientRect().left-viewport.getBoundingClientRect().left+viewport.scrollLeft-(viewport.clientWidth-slide.clientWidth)/2;
    viewport.scrollTo({left:left,behavior:"smooth"});
  }
  document.getElementById("project-prev").addEventListener("click",function(){go(active-1)});
  document.getElementById("project-next").addEventListener("click",function(){go(active+1)});
  dots.addEventListener("click",function(e){var b=e.target.closest("[data-to]");if(b)go(Number(b.dataset.to))});
  var scrollFrame=0;
  viewport.addEventListener("scroll",function(){
    if(scrollFrame)return;
    scrollFrame=requestAnimationFrame(function(){
      scrollFrame=0;
      var center=viewport.getBoundingClientRect().left+viewport.clientWidth/2,best=0,distance=Infinity;
      slides.forEach(function(slide,i){var rect=slide.getBoundingClientRect(),d=Math.abs(rect.left+rect.width/2-center);if(d<distance){distance=d;best=i}});
      if(best!==active)setActive(best);
    });
  },{passive:true});
  document.getElementById("gallery-grid").innerHTML=d.gallery.filter(function(x){return !x[0].includes("-deck")}).map(function(x){return '<article class="gallery-tile"><img src="'+esc(x[0])+'" alt="'+esc(x[1])+'" data-lightbox="'+esc(x[1])+'"><p>'+esc(x[1])+'</p></article>'}).join("");
  document.getElementById("deck-grid").innerHTML=d.gallery.filter(function(x){return x[0].includes("-deck")}).map(function(x){return '<article class="gallery-tile"><img src="'+esc(x[0])+'" alt="'+esc(x[1])+'" data-lightbox="'+esc(x[1])+'" data-full="'+esc(x[2]||x[0])+'"><p>'+esc(x[1])+'</p></article>'}).join("");
  document.getElementById("doc-grid").innerHTML=d.docs.map(function(x){return '<a class="doc-card" href="'+esc(x[0])+'" target="_blank" rel="noopener"><b>PDF · '+esc(x[1])+'</b><small>↗</small></a>'}).join("");
  var t=document.querySelector(".menu-toggle"),n=document.querySelector(".nav-links");if(t&&n)t.addEventListener("click",function(){n.classList.toggle("open")});
  var revealNodes=document.querySelectorAll(".profile-card,.clean-section-head,.score-summary,.transcript-link,.course-grid,.tech-overview,.project-subhead,.project-carousel,.project-slide,.gallery-tile,.document-preview-grid,.doc-grid");
  revealNodes.forEach(function(el,i){el.classList.add("reveal");el.style.setProperty("--reveal-order",i%4)});
  if("IntersectionObserver" in window){var revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(e){e.target.classList.toggle("is-visible",e.isIntersecting)})},{threshold:.12,rootMargin:"-6% 0px -8% 0px"});revealNodes.forEach(function(el){revealObserver.observe(el)})}else{revealNodes.forEach(function(el){el.classList.add("is-visible")})}  window.installLightbox&&window.installLightbox();
})();

