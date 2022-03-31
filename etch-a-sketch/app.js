// create 16 * 16 divs in a grid :)


const outer_grid = document.querySelector('.outer-grid');
console.log(outer_grid)



var slider = document.getElementById("myRange");
var output = document.querySelector("body");
// console.log(output)
const demo = document.createElement('div');
output.appendChild(demo) // Display the default slider value
demo.innerHTML = slider.value
// // Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  demo.innerHTML = this.value;
  N = this.value

  console.log(N)

  const rows = document.querySelectorAll('.row');

  rows.forEach(row => {
    row.remove();
  });


  for (var i = 0; i < N; i++) {
    const div_outer = document.createElement('div');
    div_outer.classList.add('row');
    outer_grid.appendChild(div_outer)

    nodes = outer_grid.querySelectorAll('div')
    const last_div = nodes[nodes.length - 1];

    for (var j = 0; j < N; j++) {
      const div_inner = document.createElement('div');
      div_inner.classList.add('grid');
      last_div.appendChild(div_inner)

    }
  }

  const all_grid = document.querySelectorAll('.grid');

  for (var i = 0; i < all_grid.length; i++) {
    all_grid[i].addEventListener('mouseenter', (e) => {
      e.target.classList.add('colored')
    });
  }


  const reset_button = document.querySelector('.reset')

  reset_button.addEventListener('click', () => {
    for (var i = 0; i < all_grid.length; i++) {
      all_grid[i].classList.remove('colored')
    }
  })

}
