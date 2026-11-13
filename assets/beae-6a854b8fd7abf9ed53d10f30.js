(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "HOME PAGE 5.10"; 
              window.beaePageSetting.pageType = "page";

          let js_UKH3UPFO = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-1p156ar0section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1p156ar0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1p156ar0');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1p156ar0: ', ex)
      };
    

      try {
        let argid = 'beae-1p156ar0section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1p156ar0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1p156ar0');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1p156ar0: ', ex)
      };
    

      try {
        let argid = 'beae-d3eh90nqblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-d3eh90nq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-d3eh90nq');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-d3eh90nq: ', ex)
      };
    

      try {
        let argid = 'beae-x6nxzyniblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x6nxzyni',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x6nxzyni');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x6nxzyni: ', ex)
      };
    

      try {
        let argid = 'beae-ytzjnmcxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ytzjnmcx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ytzjnmcx');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ytzjnmcx: ', ex)
      };
    

      try {
        let argid = 'beae-v5czrab8section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-v5czrab8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-v5czrab8');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-v5czrab8: ', ex)
      };
    

      try {
        let argid = 'beae-gt3hbowbblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gt3hbowb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gt3hbowb');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const H=M.el.closest(".beae-slider-items");H&&!H.hasAttribute("data-svg")&&(H==null||H.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),H.setAttribute("data-svg","true"))}let O=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=O.querySelector(".beae-img-ratio-control"),L=O.querySelector(".beae-img-comp-container"),T=O.querySelector(".beae-img-comp-container--second");if(V&&T){let H=function(A){let R=0,j;D(),z?O.onmouseover=function(Z){F(Z)}:A.onmousedown=function(Z){F(Z)},O.onmouseup=function(){q()},A.ontouchstart=function(Z){F(Z)},O.ontouchend=function(){q()};function D(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(Z){check=!1,Z.preventDefault(),Z.clientX?Z.clientX:Z.touches[0].clientX,parseInt(A.style.left),R=1,O.onmousemove=function(K){G(K)},O.ontouchmove=function(K){G(K)}}function q(){R=0,check=!0}function G(Z){if(R==0)return!1;j=J(Z),j<0&&(j=0),j>100&&(j=100),W(j)}function J(Z){const K=O.getBoundingClientRect(),le=(Z.changedTouches?Z.changedTouches[0].clientX:Z.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(le*100/I)))}function W(Z){A.style.left=Z+"%",T.style.clipPath=`polygon(${Z}% 0%, ${Z}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${Z}% 0%, ${Z}% 100%)`}};V&&T&&H(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),H(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",O=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gt3hbowb: ', ex)
      };
    

      try {
        let argid = 'beae-rmxzhtkkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rmxzhtkk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rmxzhtkk');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rmxzhtkk: ', ex)
      };
    

      try {
        let argid = 'beae-mqmoxzy4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mqmoxzy4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mqmoxzy4');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mqmoxzy4: ', ex)
      };
    

      try {
        let argid = 'beae-2a4ka1u4button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2a4ka1u4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2a4ka1u4');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2a4ka1u4: ', ex)
      };
    

      try {
        let argid = 'beae-yrke37yfsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yrke37yf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yrke37yf');
        args.el = args.els[0];
        ((a) => { var d;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(d=a.el.querySelector(".beae-money-format"))==null?void 0:d.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((c,s)=>{a.mode.value=="live"&&!o&&(s===0?(c.classList.add("nav-active"),t[s]&&(t[s].style.display="block",t[s].setAttribute("data-active","true"))):(c.classList.remove("nav-active"),t[s]&&(t[s].style.display="none",t[s].setAttribute("data-active","false"))));let v=!1;c.addEventListener("click",()=>{if(v)return;v=!0,n.forEach(f=>{f.classList.remove("nav-active")}),c.classList.add("nav-active");const x=c.getAttribute("data-handle"),h=a.el.querySelectorAll(".viewall-link");h&&h.forEach(f=>{f.setAttribute("href",`/collections/${x}`)});const g=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${x}"]`),u=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),u){u.setAttribute("data-active","false");const f=l(u);setTimeout(()=>{u.style.display="none",g&&(g.style.display="block"),setTimeout(()=>{g&&g.setAttribute("data-active","true"),v=!1},50)},f)}else g&&(g.style.display="block"),setTimeout(()=>{g&&g.setAttribute("data-active","true"),v=!1},50)})});function l(c){const v=window.getComputedStyle(c).getPropertyValue("transition-duration");let x=parseFloat(v)*1e3;return v.includes("s")?x=parseFloat(v)*1e3:x=parseFloat(v),x||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(c){if(a.mode.value!="live")return;const s=a.el.querySelectorAll(".beae-slider-items");if(s&&s.length){s.forEach(x=>{const h=a.el.querySelector(".beae-promotion > *");if(!h)return;const g=h.cloneNode(!0),u=x.children;c>=u.length?x.appendChild(g):x.insertBefore(g,u[c]),c===0&&(x.scrollLeft=0)});const v=a.el.querySelector(".beae-promotion");v&&v.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yrke37yf: ', ex)
      };
    

      try {
        let argid = 'beae-yrke37yfsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yrke37yf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yrke37yf');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yrke37yf: ', ex)
      };
    

      try {
        let argid = 'beae-997io9agblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-997io9ag',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-997io9ag');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const H=M.el.closest(".beae-slider-items");H&&!H.hasAttribute("data-svg")&&(H==null||H.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),H.setAttribute("data-svg","true"))}let O=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=O.querySelector(".beae-img-ratio-control"),L=O.querySelector(".beae-img-comp-container"),T=O.querySelector(".beae-img-comp-container--second");if(V&&T){let H=function(A){let R=0,j;D(),z?O.onmouseover=function(Z){F(Z)}:A.onmousedown=function(Z){F(Z)},O.onmouseup=function(){q()},A.ontouchstart=function(Z){F(Z)},O.ontouchend=function(){q()};function D(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(Z){check=!1,Z.preventDefault(),Z.clientX?Z.clientX:Z.touches[0].clientX,parseInt(A.style.left),R=1,O.onmousemove=function(K){G(K)},O.ontouchmove=function(K){G(K)}}function q(){R=0,check=!0}function G(Z){if(R==0)return!1;j=J(Z),j<0&&(j=0),j>100&&(j=100),W(j)}function J(Z){const K=O.getBoundingClientRect(),le=(Z.changedTouches?Z.changedTouches[0].clientX:Z.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(le*100/I)))}function W(Z){A.style.left=Z+"%",T.style.clipPath=`polygon(${Z}% 0%, ${Z}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${Z}% 0%, ${Z}% 100%)`}};V&&T&&H(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),H(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",O=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-997io9ag: ', ex)
      };
    

      try {
        let argid = 'beae-f4nuoppablock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f4nuoppa',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f4nuoppa');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f4nuoppa: ', ex)
      };
    

      try {
        let argid = 'beae-i8aslrsublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i8aslrsu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i8aslrsu');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i8aslrsu: ', ex)
      };
    

      try {
        let argid = 'beae-r9bbk6wwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r9bbk6ww',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r9bbk6ww');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r9bbk6ww: ', ex)
      };
    

      try {
        let argid = 'beae-tzi81u5asection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tzi81u5a',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tzi81u5a');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tzi81u5a: ', ex)
      };
    

      try {
        let argid = 'beae-e6uiijn2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e6uiijn2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e6uiijn2');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e6uiijn2: ', ex)
      };
    

      try {
        let argid = 'beae-pqgu8kvzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pqgu8kvz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pqgu8kvz');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pqgu8kvz: ', ex)
      };
    

      try {
        let argid = 'beae-9znpw0p9button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9znpw0p9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9znpw0p9');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9znpw0p9: ', ex)
      };
    

      try {
        let argid = 'beae-atll9geqblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-atll9geq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-atll9geq');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-atll9geq: ', ex)
      };
    

      try {
        let argid = 'beae-qt0522q4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qt0522q4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qt0522q4');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qt0522q4: ', ex)
      };
    

      try {
        let argid = 'beae-3e5vyzykbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3e5vyzyk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3e5vyzyk');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3e5vyzyk: ', ex)
      };
    

      try {
        let argid = 'beae-o1e7y802block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o1e7y802',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o1e7y802');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o1e7y802: ', ex)
      };
    

      try {
        let argid = 'beae-dzuim02iblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dzuim02i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dzuim02i');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dzuim02i: ', ex)
      };
    

      try {
        let argid = 'beae-kvr4dk4rbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kvr4dk4r',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kvr4dk4r');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kvr4dk4r: ', ex)
      };
    

      try {
        let argid = 'beae-ujhlr5m4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ujhlr5m4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ujhlr5m4');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ujhlr5m4: ', ex)
      };
    

      try {
        let argid = 'beae-1rxwirqdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1rxwirqd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1rxwirqd');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1rxwirqd: ', ex)
      };
    

      try {
        let argid = 'beae-79a2f108button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-79a2f108',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-79a2f108');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-79a2f108: ', ex)
      };
    

      try {
        let argid = 'beae-lhugunn4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lhugunn4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lhugunn4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lhugunn4: ', ex)
      };
    

      try {
        let argid = 'beae-mot0k8oisection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mot0k8oi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mot0k8oi');
        args.el = args.els[0];
        ((a) => { var o;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(o=a.el.querySelector(".beae-money-format"))==null?void 0:o.innerHTML);const n=a.el.closest(".beae-body--preview");setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&t(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||n)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function t(r){const l=a.el.querySelector(".beae-slider-items");if(!l||a.mode.value!="live")return;const p=a.el.querySelector(".beae-promotion > *"),d=l.children;r>=d.length?l.appendChild(p):l.insertBefore(p,d[r]);const c=a.el.querySelector(".beae-promotion");c&&c.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mot0k8oi: ', ex)
      };
    

      try {
        let argid = 'beae-mot0k8oisection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mot0k8oi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mot0k8oi');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mot0k8oi: ', ex)
      };
    

      try {
        let argid = 'beae-9gf0r0ooblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9gf0r0oo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9gf0r0oo');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const H=M.el.closest(".beae-slider-items");H&&!H.hasAttribute("data-svg")&&(H==null||H.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),H.setAttribute("data-svg","true"))}let O=M.el.querySelector(".beae-image-content-position"),I,z=window.innerWidth>=768&&M.autoHover;var V=O.querySelector(".beae-img-ratio-control"),L=O.querySelector(".beae-img-comp-container"),T=O.querySelector(".beae-img-comp-container--second");if(V&&T){let H=function(A){let R=0,j;D(),z?O.onmouseover=function(Z){F(Z)}:A.onmousedown=function(Z){F(Z)},O.onmouseup=function(){q()},A.ontouchstart=function(Z){F(Z)},O.ontouchend=function(){q()};function D(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(Z){check=!1,Z.preventDefault(),Z.clientX?Z.clientX:Z.touches[0].clientX,parseInt(A.style.left),R=1,O.onmousemove=function(K){G(K)},O.ontouchmove=function(K){G(K)}}function q(){R=0,check=!0}function G(Z){if(R==0)return!1;j=J(Z),j<0&&(j=0),j>100&&(j=100),W(j)}function J(Z){const K=O.getBoundingClientRect(),le=(Z.changedTouches?Z.changedTouches[0].clientX:Z.clientX)-K.left;return Math.max(0,Math.min(100,Math.round(le*100/I)))}function W(Z){A.style.left=Z+"%",T.style.clipPath=`polygon(${Z}% 0%, ${Z}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${Z}% 0%, ${Z}% 100%)`}};V&&T&&H(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),H(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",O=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9gf0r0oo: ', ex)
      };
    

      try {
        let argid = 'beae-x260aafnblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x260aafn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x260aafn');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x260aafn: ', ex)
      };
    

      try {
        let argid = 'beae-3znc1suyblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3znc1suy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3znc1suy');
        args.el = args.els[0];
        ((y) => { if(y.mode.value=="builder"){if(!y.els)return;for(let S=0;S<y.els.length;S++)if(S==y.loopIndex){const B=y.els[S].closest("form.beae-product-form-next");if(!B)return;const w=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),C=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse((C!=null&&C.innerHTML?C==null?void 0:C.innerHTML:"{}").replace(/:\s*([,}])/g,": null$1").replace(/,\s*([\]}])/g,"$1")).variants||[];let V=B.getAttribute("data-variant-id"),L=M[0];V&&(L=M.find(N=>N.id==V));const T=w.querySelector(".beae-add-to-cart-text-content");L!=null&&L.available?T&&(M.length>1?T.innerHTML=w.getAttribute("data-choose-options-text"):T.innerHTML=w.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=w.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3znc1suy: ', ex)
      };
    

      try {
        let argid = 'beae-3v2pjcrisection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3v2pjcri',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3v2pjcri');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3v2pjcri: ', ex)
      };
    

      try {
        let argid = 'beae-3v2pjcrisection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3v2pjcri',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3v2pjcri');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3v2pjcri: ', ex)
      };
    

      try {
        let argid = 'beae-1ivvkjs0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1ivvkjs0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1ivvkjs0');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1ivvkjs0: ', ex)
      };
    

      try {
        let argid = 'beae-lhpaklbjblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lhpaklbj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lhpaklbj');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lhpaklbj: ', ex)
      };
    

      try {
        let argid = 'beae-rvkz4l96button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rvkz4l96',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rvkz4l96');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rvkz4l96: ', ex)
      };
    

      try {
        let argid = 'beae-t44gej1ublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-t44gej1u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-t44gej1u');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-t44gej1u: ', ex)
      };
    

      try {
        let argid = 'beae-yxt0nkx3block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yxt0nkx3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yxt0nkx3');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yxt0nkx3: ', ex)
      };
    

      try {
        let argid = 'beae-tglp18trbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tglp18tr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tglp18tr');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tglp18tr: ', ex)
      };
    

      try {
        let argid = 'beae-y5rvns2pblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y5rvns2p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y5rvns2p');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y5rvns2p: ', ex)
      };
    

      try {
        let argid = 'beae-g4j9lxmsblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g4j9lxms',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g4j9lxms');
        args.el = args.els[0];
        ((P) => { var I;let O=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");O==null||O.forEach(z=>{let H=z==null?void 0:z.getAttribute("href");z&&P.mode.value!=="builder"&&(H!=null&&H.includes("#"))&&z.addEventListener("click",A=>{let R=document.querySelector(H+","+(H==null?void 0:H.replace("#",".")));if(R)return R.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-g4j9lxms: ', ex)
      };
    

      try {
        let argid = 'beae-2m848fyqbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2m848fyq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2m848fyq');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let l=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(l,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(l=>{l.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(l),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2m848fyq: ', ex)
      };
    

      try {
        let argid = 'beae-znksdu91section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-znksdu91',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-znksdu91');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-znksdu91: ', ex)
      };
    }; if (window.BEAEBASE) {js_UKH3UPFO()} else {window.BEAEPAGEJS.push(js_UKH3UPFO)} })(); 