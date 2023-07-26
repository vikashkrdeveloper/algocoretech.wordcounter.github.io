let text=document.getElementById('text-box');
text.addEventListener('input',function(){
   let value=this.value;
  let len = value.length;
  document.getElementById('char').innerHTML=len;
  value=value.trim();
  let words= value.split(" ");
  document.getElementById('words').innerHTML=words.length;
})