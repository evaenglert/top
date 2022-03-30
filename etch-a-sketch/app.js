// create 16 * 16 divs in a grid :)


const body = document.querySelector('body');
console.log(body)


N = 16

for (var i = 0; i < N; i++){
  const div_outer = document.createElement('div');
  div_outer.classList.add('row');
  body.appendChild(div_outer)

  nodes = body.querySelectorAll('div')
  console.log(nodes)
  const last_div = nodes[nodes.length-1];

  for (var j = 0; j < N; j++) {
    const div_inner = document.createElement('div');
    div_inner.classList.add('grid');
    last_div.appendChild(div_inner)

  }
}
