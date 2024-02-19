import{S as f,i as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();let l;function h(){l=new f(".image-link",{captionsData:"alt",captionDelay:250})}h();const c=document.querySelector(".loader"),a=document.querySelector(".gallery");function g(o){if(a.innerHTML="",o.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}o.forEach(t=>{const i=y(t);a.insertAdjacentHTML("beforeend",i)}),b()}function y(o){const{webformatURL:t,largeImageURL:i,tags:r,likes:e,views:s,comments:n,downloads:m}=o;return`<li class="photo">
    <div class="photo-card">
      <a class="image-link" data-lightbox="image" href="${i}">
        <img class="gallery-image" data-source="${i}"  src="${t}" alt="${r}">
      </a>
    </div>
    <div class="description">
      <p class="description-item"> Likes ${e}</p>
      <p class="description-item"> Views ${s}</p>
      <p class="description-item"> Comments ${n}</p>
      <p class="description-item"> Downloads ${m}</p>
    </div>
  </li>`}function b(){l.refresh()}function u(o){p.show({message:o,backgroundColor:"red",messageColor:"white",messageSize:"25"})}function L(o){const t="https://pixabay.com",i="/api/",r="42444486-bc4896f356324bce186cf1418",e=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${t}${i}?${e}`}function P(o){return c.style.display="block",a.innerHTML="",new Promise((t,i)=>{fetch(o).then(r=>r.json()).then(r=>{setTimeout(()=>{g(r.hits),c.style.display="none",t(r.hits)},1e3)}).catch(r=>{console.log("Error fetching data:",r),c.style.display="none",i(r)})})}const d=document.querySelector(".search-form"),w=document.querySelector(".form-input");d.addEventListener("submit",S);function S(o){o.preventDefault();const t=w.value.trim();if(t===""){u("Please enter a search query");return}const i=L(t);P(i),d.reset()}
//# sourceMappingURL=commonHelpers.js.map
