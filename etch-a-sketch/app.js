
const body = document.querySelector("body");
const outer_grid = document.querySelector('.outer-grid');
const reset_button = document.querySelector('.reset')
const slider = document.querySelector(".slider");
const slider_value = document.querySelector('.slider-value');
const black_button = document.querySelector(".option-black")
const random_color_button = document.querySelector(".option-colorful")
var drawing_color = 'black';




enableSlider()

black_button.addEventListener('click', () => {
  drawing_color = 'black';
  enableDrawing(drawing_color);
})

random_color_button.addEventListener('click', () => {
  drawing_color = 'colorful';
  enableDrawing(drawing_color);
})



// FUNCTIONS

function add_reset_button(all_grid) {
  reset_button.addEventListener('click', () => {

    for (var i = 0; i < all_grid.length; i++) {
      // all_grid[i].classList.remove('black');
      all_grid[i].style.backgroundColor = '#FFFFFF'
    }
  })
}

function createGrid(N, color_option) {

  // remove any current grids
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    row.remove();
  });

  // create grid
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

}


function enableDrawing(color_option) {
  const all_grid = document.querySelectorAll('.grid');

  for (var i = 0; i < all_grid.length; i++) {
    all_grid[i].removeEventListener('mouseenter', draw_black);}

  for (var i = 0; i < all_grid.length; i++) {
    all_grid[i].removeEventListener('mouseenter', draw_colorful);
  }

  // add coloring functionality to each grid
  if (color_option == 'black') {
    for (var i = 0; i < all_grid.length; i++) {
      all_grid[i].addEventListener('mouseenter', draw_black);
    }
  }
  else {
    for (var i = 0; i < all_grid.length; i++) {
      all_grid[i].addEventListener('mouseenter', draw_colorful);
  }
  add_reset_button(all_grid)
}}


// makes sure that any other drawing option is disabled
function draw_black(e) {

  // e.target.classList.add('black')
  e.target.style.backgroundColor = '#000000';
}

function draw_colorful(e) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = '#' + randomColor;
}

function enableSlider() {
  createGrid(slider.value)
  enableDrawing(drawing_color)

  slider.oninput = function () {
    slider_value.innerHTML = this.value;
    N = this.value

    createGrid(N)
    enableDrawing(drawing_color)
  }
}
