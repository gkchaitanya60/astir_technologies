(()=>{'use strict';document.querySelectorAll('.tech-accordion details').forEach(d=>d.addEventListener('toggle',()=>{const b=d.querySelector('summary b');if(b)b.textContent=d.open?'−':'+'}));})();
