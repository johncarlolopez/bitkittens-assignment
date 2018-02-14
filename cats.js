document.addEventListener("DOMContentLoaded", function() {

  summonKittensButton = document.querySelector('button.summon-cats');

  summonKittensButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {number: 5}
    }).done(function(responseData) {
      console.log(responseData);
      cats = responseData.cats;
      for (var i = 0; i < cats.length; i++) {
        if (i >= 3) {
          div = document.createElement('div');
          div.style.display = 'absolute'
          div.style.left =  parseInt((Math.random() * 600) + 100) + 'px';
          div.style.top =  parseInt((Math.random() * 500) + 100) + 'px';
          div.classList.add('cat-box');
          main = document.querySelector('main');
          main.append(div);
        } else {
          div = document.getElementById('cat' + (i + 1));
        }
        var img = document.createElement('img');
        img.src = cats[i].photo;
        img.alt =  "Photo of " + cats[i].name;
        div.innerHTML = '';
        div.append(img);
        console.log("final" + i);
        console.log(div);
        console.log(div.style);


      }
    });
  })
});
