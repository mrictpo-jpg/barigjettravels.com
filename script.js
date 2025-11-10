document.getElementById('year').textContent = new Date().getFullYear();
const form=document.getElementById('contactForm'),status=document.getElementById('formStatus');
if(form){
 const usesPlaceholder=form.action.includes('YOUR_FORM_ID');
 if(usesPlaceholder){
   form.addEventListener('submit',function(e){
     e.preventDefault();
     const name=encodeURIComponent(form.name.value||'');
     const email=encodeURIComponent(form.email.value||'');
     const msg=encodeURIComponent(form.message.value||'');
     const mailto=`mailto:hello@BARIGJETtravelServices.com?subject=Website%20Inquiry%20-%20${name}&body=From:%20${name}%20(%20${email}%20)%0A%0A${msg}`;
     window.location.href=mailto;
   });
 } else {
   form.addEventListener('submit',async function(e){
     e.preventDefault();
     try{
       const data=new FormData(form);
       const r=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
       if(r.ok){form.reset();status.style.display='block';}
       else alert('Submission failed, please use Email Us.');
     }catch(err){alert('Network error.');}
   });
 }
}
