
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.buttons');
  for(var i=0; i<26; i++){
    var alphabet=document.createElement('button');
    alphabet.classList.add('btn');
    alphabet.textContent=((i+10).toString(36)).toUpperCase();
    alphabet.style.position=i*10+'px';
    alphabet.setAttribute('value',((i+10).toString(36)).toUpperCase());
    btn.appendChild(alphabet);
  }

  document.querySelectorAll('.btn').forEach((button)=>{
    button.onclick=()=>{
      var letter=button.getAttribute('value').toLowerCase();
      Object.keys(list).forEach(key=>{
        if(key.startsWith(letter)){
          display(key);
        }
      })
    }
  })

  document.getElementById('button').onclick=()=>{
    var search=document.getElementById('search');
    console.log(search.value)
    var result=document.getElementById('result');
    result.innerHTML=""

    for (var i=0; i<list[search.value.toLowerCase()].length; i++){
      const li=document.createElement("li");
      li.textContent=list[search.value][i];
      result.appendChild(li);
  }
  }
})

function display(key){
    var result=document.getElementById('result');
    result.innerHTML=""

    for (var i=0; i<list[key].length; i++){
      const li=document.createElement("li");
      li.textContent=list[key][i];
      result.appendChild(li);
  }
}



