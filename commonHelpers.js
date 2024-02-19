import{S as m,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let l;function p(){l=new m(".image-link",{captionsData:"alt",captionDelay:250})}p();const a=document.querySelector(".loader"),c=document.querySelector(".gallery");function g(r){if(c.innerHTML="",r.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}r.forEach(t=>{const s=y(t);c.insertAdjacentHTML("beforeend",s)}),b()}function y(r){const{webformatURL:t,largeImageURL:s,tags:i,likes:e,views:o,comments:n,downloads:f}=r;return`<li class="photo">
    <div class="photo-card">
      <a class="image-link" data-lightbox="image" href="${s}">
        <img class="gallery-image" data-source="${s}"  src="${t}" alt="${i}">
      </a>
    </div>
    <div class="description">
      <p class="description-item"> Likes ${e}</p>
      <p class="description-item"> Views ${o}</p>
      <p class="description-item"> Comments ${n}</p>
      <p class="description-item"> Downloads ${f}</p>
    </div>
  </li>`}function b(){l.refresh()}function u(r){h.show({message:r,backgroundColor:"red",messageColor:"white",messageSize:"25"})}function L(r){const t="https://pixabay.com",s="/api/",i="42444486-bc4896f356324bce186cf1418",e=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${t}${s}?${e}`}function w(r){return a.style.display="block",c.innerHTML="",fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return a.style.display="none",t.json()})}const d=document.querySelector(".search-form"),P=document.querySelector(".form-input");d.addEventListener("submit",S);function S(r){r.preventDefault();const t=P.value.trim();if(t===""){u("Please enter a search query");return}const s=L(t);w(s).then(i=>{g(i.hits)}).catch(i=>{console.log("Error fetching data:",i)}),d.reset()}
//# sourceMappingURL=commonHelpers.js.map
