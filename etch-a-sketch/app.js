
const body = document.querySelector("body");
const outer_grid = document.querySelector('.outer-grid');
const reset_button = document.querySelector('.reset')
const slider = document.querySelector(".slider");
const slider_value = document.querySelector('.slider-value');
const black_button = document.querySelector(".option-black")
const random_color_button = document.querySelector(".option-colorful")

enableDrawing(slider.value)



slider_value.innerHTML = slider.value

enableSlider()

black_button.addEventListener('click', () => {
  enableDrawing('black')
})

random_color_button.addEventListener('click', () => {
  enableDrawing('colorful')
})


// Update the current slider value (each time you drag the slider handle)



// FUNCTIONS

function add_reset_button(all_grid) {
  reset_button.addEventListener('click', () => {
    console.log(all_grid)
    for (var i = 0; i < all_grid.length; i++) {
      all_grid[i].classList.remove('black')
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

  // add coloring functionality to each grid
  for (var i = 0; i < all_grid.length; i++) {
    all_grid[i].addEventListener('mouseenter', (e) => {
      if (color_option == 'black') {
        e.target.classList.add('black')
      }
      else {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
      }
    });
  }

  add_reset_button(all_grid)
}

function enableSlider() {


  slider.oninput = function () {
    slider_value.innerHTML = this.value;
    N = this.value

    createGrid(N)
  }
}
