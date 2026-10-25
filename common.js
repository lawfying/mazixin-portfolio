(function(){
  window.installLightbox=function(){
    var d=document.getElementById("lightbox");
    if(!d||d.dataset.viewerReady)return;
    d.innerHTML='<div class="lightbox-toolbar"><span class="lightbox-title"></span><div class="lightbox-actions"><button type="button" data-zoom="out" aria-label="缩小">−</button><span class="lightbox-zoom">100%</span><button type="button" data-zoom="in" aria-label="放大">＋</button><button type="button" class="lightbox-reset">适合窗口</button><a class="lightbox-original" target="_blank" rel="noopener">原图 ↗</a><button type="button" class="lightbox-close" aria-label="关闭">×</button></div></div><div class="lightbox-stage"><img class="lightbox-image" alt=""></div><p class="lightbox-caption"></p>';
    d.dataset.viewerReady="true";
    var img=d.querySelector("img"),stage=d.querySelector(".lightbox-stage"),title=d.querySelector(".lightbox-title"),caption=d.querySelector(".lightbox-caption"),zoomLabel=d.querySelector(".lightbox-zoom"),original=d.querySelector(".lightbox-original"),scale=1,fitScale=1;
    function applyZoom(){img.style.width=Math.round(img.naturalWidth*scale)+"px";zoomLabel.textContent=Math.round(scale*100)+"%"}
    function fitImage(){if(!img.naturalWidth)return;fitScale=Math.min(1,stage.clientWidth/img.naturalWidth);scale=fitScale;applyZoom();stage.scrollTop=0;stage.scrollLeft=0}
    document.addEventListener("click",function(e){
      var t=e.target.closest("[data-lightbox]");
      if(!t)return;
      e.preventDefault();
      var src=t.getAttribute("data-full")||t.getAttribute("src");
      title.textContent=t.getAttribute("data-lightbox")||t.alt||"作品预览";
      caption.textContent="滚动查看长图；使用 + / − 调整大小。";
      original.href=src;
      img.onload=fitImage;
      img.src=src;
      d.showModal();
      if(img.complete)fitImage();
    });
    d.addEventListener("click",function(e){if(e.target===d||e.target.classList.contains("lightbox-close"))d.close()});
    d.addEventListener("click",function(e){
      var b=e.target.closest("[data-zoom]");
      if(b){scale=Math.max(.2,Math.min(3,scale*(b.dataset.zoom==="in"?1.25:.8)));applyZoom()}
      if(e.target.closest(".lightbox-reset"))fitImage();
    });
    document.addEventListener("keydown",function(e){
      if(!d.open)return;
      if(e.key==="Escape")d.close();
      if(e.key==="+"){scale=Math.min(3,scale*1.25);applyZoom()}
      if(e.key==="-"){scale=Math.max(.2,scale*.8);applyZoom()}
    });
  };
  var t=document.querySelector(".menu-toggle"),n=document.querySelector(".nav-links");if(t&&n)t.addEventListener("click",function(){n.classList.toggle("open")});
})();