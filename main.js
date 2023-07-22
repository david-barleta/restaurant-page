(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!t;)t=o[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"13711fcc82fed7597da4.png",n=e.p+"b4b392a13a9222f84f3b.png",o=e.p+"75a963dd1ebf142c31e1.png",c=e.p+"db8fab89d351b347cf7a.png",a=e.p+"95a10b632911fc47919f.png",r=e.p+"a14e4b2ed98da0f8b9fe.png";function d(e){switch(e){case"home":!function(){const e=document.createElement("div");e.id="home-page";const t=document.createElement("div");t.id="hero-section";const n=document.createElement("header"),o=document.createElement("div"),c=document.createElement("div");c.textContent="Café Luna";const a=document.createElement("button");a.type="button",a.classList.add("tab-button"),a.id="home",a.textContent="Home";const r=document.createElement("button");r.type="button",r.classList.add("tab-button"),r.id="menu",r.textContent="Menu";const d=document.createElement("button");d.type="button",d.classList.add("tab-button"),d.id="contact",d.textContent="Contact",n.append(o,c,a,r,d);const i=document.createElement("div");i.id="hero-content";const u=document.createElement("div");u.textContent="Café Luna";const s=document.createElement("p");s.textContent="Welcome to Café Luna, a place where you can unwind and enjoy delicious flavors. Located in the heart of Cavite, our peaceful cafe offers a break from the busyness of daily life. Whether you're seeking solitude or spending time with friends, our cozy interior sets the perfect atmosphere. With soft lighting, comfortable seating, and soothing music, you can unwind, reflect, and connect with others.",i.append(u,s),t.append(n,i);const m=document.createElement("div");m.id="menu-section";const l=document.createElement("p");l.textContent="At Café Luna, we take pride in offering a range of menu options that strike a balance between quality and affordability. We've carefully created a menu that caters to your desire for both relaxation and culinary pleasure. Indulge in the enticing aroma of freshly brewed coffee drinks, expertly prepared by our skilled baristas. Treat yourself to our delightful selection of pastries and cakes, each baked to perfection, tempting you wth their delightful textures and flavors.",m.append(l);const p=document.createElement("div");p.id="cta-section";const f=document.createElement("p");f.textContent="Experience the perfect blend of flavors, relaxation, and connection at Café Luna.";const b=document.createElement("button");b.type="button",b.textContent="View our menu.",p.append(f,b),e.append(t,m,p),document.querySelector("#content").append(e)}();break;case"menu":!function(){const e=document.createElement("div");e.id="menu-page";const d=document.createElement("header"),i=document.createElement("div"),u=document.createElement("div");u.textContent="Café Luna";const s=document.createElement("button");s.type="button",s.classList.add("tab-button"),s.id="home",s.textContent="Home";const m=document.createElement("button");m.type="button",m.classList.add("tab-button"),m.id="menu",m.textContent="Menu";const l=document.createElement("button");l.type="button",l.classList.add("tab-button"),l.id="contact",l.textContent="Contact",d.append(i,u,s,m,l);const p=document.createElement("section");p.id="menu-items";const f=document.createElement("div");f.classList.add("menu-category"),f.textContent="Coffee Drinks";const b=document.createElement("section");b.id="coffee-items";const h=[{name:"Iced Americano",imgSrc:t},{name:"Iced Cappuccino",imgSrc:n},{name:"Iced Latte",imgSrc:o},{name:"Iced Mocha",imgSrc:c},{name:"Iced Caramel Macchiato",imgSrc:a},{name:"Iced Matcha Latte",imgSrc:r}];for(let e=0;e<6;e++){const t=document.createElement("div");t.classList.add("coffee-item");const n=document.createElement("div");n.textContent=h[e].name;const o=document.createElement("img");o.src=h[e].imgSrc,o.alt=h[e].name,t.append(n,o),b.append(t)}p.append(f,b),e.append(d,p),document.querySelector("#content").append(e)}()}document.querySelectorAll(".tab-button").forEach((e=>{e.addEventListener("click",i)}))}function i(e){const t=e.target.id;document.querySelector("#content").innerHTML="",d(t)}d("home")})();