import{a}from"./vendor-c8bc0669.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const i="/comand-project__team-8/assets/sptite-2dc2b9fb.svg";async function d(){const o="https://food-boutique.b.goit.study/api/products/categories";try{return(await a.get(o)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function l({keyword:o,category:e,page:n,limit:s}){const t="https://food-boutique.b.goit.study/api/products";return(await a.get(t,{params:{keyword:o,category:e,page:n,limit:s}})).data}async function p(){const o="https://food-boutique.b.goit.study/api/products/popular";return(await a.get(o)).data}async function f(){const o="https://food-boutique.b.goit.study/api/products/discount";return(await a.get(o)).data}async function g(o){const e="https://food-boutique.b.goit.study/api/subscription",n={email:o};try{return{success:!0,data:(await a.post(e,n)).data}}catch(s){return s.response&&s.response.status===409?{success:!1,status:409,message:"Email already subscribed"}:(console.error("Произошла ошибка при отправке:",s),{success:!1,status:s.response?s.response.status:null,message:"Oops! Something went wrong"})}}async function y({email:o,products:e}){const n="https://food-boutique.b.goit.study/api/orders",s={email:o,products:e};try{return(await a.post(n,s)).data}catch(t){throw alert("Oops! Something went wrong"),console.error("Произошла ошибка при отправке:",t),t}}export{d as a,p as b,i as c,f as d,g as e,l as f,y as p};
//# sourceMappingURL=API-7abd57e6.js.map