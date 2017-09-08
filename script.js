var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  if (request.readyState == 4 && request.status == 200) {
    var response = JSON.parse(request.responseText);
    console.log(response);
    // console.log(response.data.children[0].data.title)
    let childArr = response.data.children;
    for(let i = 0; i < childArr.length; i++) {
      console.log(childArr[i].data.title)
    }
  }
}

request.open('GET', 'https://www.reddit.com/r/starwars.json');

request.send();
