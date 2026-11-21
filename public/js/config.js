/* config.js — Helpers ($, norm), secciones, toast, navegación go() */
const $=(q,e=document)=>e.querySelector(q),$$=(q,e=document)=>[...e.querySelectorAll(q)],PH="assets/img/photo.jpg";
$$('[data-ph]').forEach(i=>i.src=PH);
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const SEC=EN?SEC_EN:[['inicio','Inicio'],['perfil','Perfil'],['trayectoria','Trayectoria'],['investigacion','Investigación'],['impacto','Impacto'],['eventos','Eventos'],['reconocimientos','Reconocimientos'],['especializacion','Software libre y seguridad'],['contacto','Contacto']];
const toast=t=>{const e=$('#toast');e.textContent=t;e.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display='none',2600)};
const copyMail=()=>{navigator.clipboard?.writeText(SITE.email);toast((EN?'Email copied: ':'Email copiado: ')+SITE.email+' ✓')};
function go(id){mob.classList.remove('open');pal(0);const e=document.getElementById(id);e&&e.scrollIntoView({behavior:'smooth'})}
const tbl=(id,rows)=>$('#'+id).innerHTML=rows.map(r=>'<tr>'+r.map((c,i)=>`<td>${i==1?'<b>'+c+'</b>':c}</td>`).join('')+'</tr>').join('');
const cards=(id,arr,f)=>$('#'+id).innerHTML=arr.map(f).join('');
