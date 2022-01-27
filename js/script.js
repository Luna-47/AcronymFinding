var list={
  'www':['World Wide Web','weeweewe'],
  'abc':['Attanasoff Berry Computer','aboydabc']
}

function showresult(){
  var text=document.getElementById('search');
  console.log(search.value)
  var result=document.getElementById('result');

  for (var i=0; i<list[search.value.toLowerCase()].length; i++){
    let li=document.createElement("li");
    li.textContent=list[search.value][i];
    result.appendChild(li);
  }
}