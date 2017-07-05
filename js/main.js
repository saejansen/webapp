var clock = document.getElementById('clock');

function klok() {
	var time = new Date();
	  var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

var hands = [
	{
	      hand: 'hours',
	      angle: (hours * 30) + (minutes / 2)
	},
	{
      hand: 'minutes',
      angle: (minutes * 6)
  },
	{
		hand: 'seconds',
		angle: (seconds * 6)
	}
];

for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';

      if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

klok();
setInterval(klok, 1000);

var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style type="text/css">.st0{fill:#C0CECB;}</style><path class="fill" d="M16.1 3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9 1 7.8 2 7.8 3.3v0.2H5.9c-1.3 0-2.3 1-2.3 2.3v1.3c0 0.5 0.4 0.9 0.9 1v10.5c0 1.3 1 2.3 2.3 2.3h8.5c1.3 0 2.3-1 2.3-2.3V8.2c0.5-0.1 0.9-0.5 0.9-1V5.9C18.4 4.6 17.4 3.6 16.1 3.6zM9.1 3.3c0-0.6 0.5-1.1 1.1-1.1h1.7c0.6 0 1.1 0.5 1.1 1.1v0.2H9.1V3.3zM16.3 18.7c0 0.6-0.5 1.1-1.1 1.1H6.7c-0.6 0-1.1-0.5-1.1-1.1V8.2h10.6L16.3 18.7 16.3 18.7zM17.2 7H4.8V5.9c0-0.6 0.5-1.1 1.1-1.1h10.2c0.6 0 1.1 0.5 1.1 1.1V7z"/><path class="fill" d="M11 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v6.8C11.6 17.7 11.4 18 11 18z"/><path class="fill" d="M8 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8C7.4 10.2 7.7 10 8 10c0.4 0 0.6 0.3 0.6 0.6v6.8C8.7 17.7 8.4 18 8 18z"/><path class="fill" d="M14 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8C14.6 17.7 14.3 18 14 18z"/></svg>';

document.getElementById('add').addEventListener('click', function() {
   var value = document.getElementById('item').value;
   if (value) addItemTodo(value);
   document.getElementById('item').value = '';
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function addItemTodo(text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var button = document.createElement('div');
  button.classList.add('button');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  remove.addEventListener('click', removeItem);

  button.appendChild(remove);
  item.appendChild(button);

  list.appendChild(item);

  list.insertBefore(item, list.childNodes[0]);
};
