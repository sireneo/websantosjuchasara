/* shortcuts.js — Atajos de teclado y easter egg «fedora» */
/* easter egg + atajos */
function egg(){$('#egg').classList.add('open');setTimeout(()=>$('#egg').classList.remove('open'),3800)}let buf='';
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=='k'){e.preventDefault();pal(!$('#pal').classList.contains('open'))}if(e.key=='Escape'){pal(0);ai(0);$('#mod').classList.remove('open');$('#egg').classList.remove('open')}if(e.key.length==1&&!/INPUT|TEXTAREA/.test(e.target.tagName)){buf=(buf+e.key.toLowerCase()).slice(-6);buf=='fedora'&&egg()}});
