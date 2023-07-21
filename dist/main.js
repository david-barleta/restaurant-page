(()=>{"use strict";function e(){const e=document.createElement("div");e.id="home";const t=document.createElement("div");t.id="hero-section";const n=document.createElement("header"),o=document.createElement("div"),c=document.createElement("div");c.textContent="Café Luna";const a=document.createElement("button");a.type="button",a.id="home-button",a.textContent="Home";const r=document.createElement("button");r.type="button",r.id="menu-button",r.textContent="Menu";const u=document.createElement("button");u.type="button",u.id="contact-button",u.textContent="Contact",n.append(o,c,a,r,u);const i=document.createElement("div");i.id="hero-content";const d=document.createElement("div");d.textContent="Café Luna";const l=document.createElement("p");l.textContent="Welcome to Café Luna, a place where you can unwind and enjoy delicious flavors. Located in the heart of Cavite, our peaceful cafe offers a break from the busyness of daily life. Whether you're seeking solitude or spending time with friends, our cozy interior sets the perfect atmosphere. With soft lighting, comfortable seating, and soothing music, you can unwind, reflect, and connect with others.",i.append(d,l),t.append(n,i);const s=document.createElement("div");s.id="menu-section";const m=document.createElement("p");m.textContent="At Café Luna, we take pride in offering a range of menu options that strike a balance between quality and affordability. We've carefully created a menu that caters to your desire for both relaxation and culinary pleasure. Indulge in the enticing aroma of freshly brewed coffee drinks, expertly prepared by our skilled baristas. Treat yourself to our delightful selection of pastries and cakes, each baked to perfection, tempting you wth their delightful textures and flavors.",s.append(m);const f=document.createElement("div");f.id="cta-section";const p=document.createElement("p");p.textContent="Experience the perfect blend of flavors, relaxation, and connection at Café Luna.";const h=document.createElement("button");h.type="button",h.textContent="View our menu.",f.append(p,h),e.append(t,s,f),document.querySelector("#content").append(e)}function t(){document.querySelector("#content").innerHTML="",console.log("I was clicked")}e(),function(){const n=document.querySelector("#home-button");document.querySelector("#menu-button"),document.querySelector("#contact-button"),n.addEventListener("click",t),n.addEventListener("click",e)}()})();