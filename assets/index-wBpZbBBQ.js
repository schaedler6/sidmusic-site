(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll(".play-button"),o=document.querySelectorAll(".track-item");for(let r=0;r<c.length;r++)c[r].addEventListener("click",e=>{var n;e.stopPropagation();const t=((n=o[r].querySelector(".track-title"))==null?void 0:n.textContent)||"música";alert(`Reproduzindo a música "${t}"...`)});for(const r of o)r.addEventListener("click",()=>{var e;const s=((e=r.querySelector(".track-title"))==null?void 0:e.textContent)||"música";alert(`Reproduzindo a música "${s}"...`)});setInterval(()=>{for(const r of c)r.classList.add("pulse"),setTimeout(()=>{r.classList.remove("pulse")},1e3)},3e3)});
