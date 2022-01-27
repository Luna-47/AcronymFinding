const list={
  'www':['World Wide Web'],
  'abc':['Attanasoff-Berry Computer','American Broadcasting Company','Automatic Brightness Control','Active Body Control'],
  'ram':['Random Access Memory'],
  'rom':['Read Only Memomy'],
  'bas':['Business Activity Statement','Bachelor of Applied Studies','Behavorial Analysis Science'],
  'bit':['binary digit','Bachelor of Information Technology','Baggage Identification Tag'],
  'url':['Uniform Resource Locator'],
  'tcp':['Transmission Control Protocol'],
  'ups':['Uninterruptible Power Supply']
}

function showresult(){
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
