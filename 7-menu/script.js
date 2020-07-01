const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 2,
    title: "Dinner Double",
    category: "Lunch",
    price: 13.99,
    img: "images/item-2.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "images/item-3.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    img: "images/item-4.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    img: "images/item-5.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 18.99,
    img: "images/item-6.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "Breakfast",
    price: 8.99,
    img: "images/item-7.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 8,
    title: "American Classic",
    category: "Lunch",
    price: 12.99,
    img: "images/item-8.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 16.99,
    img: "images/item-9.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "Dinner",
    price: 39.99,
    img: "images/item-10.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
        freegan copper mug whatever cold-pressed.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function contentLoaded() {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryButtons = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">
    ${category}
  </button>`;
    })
    .join("");
  container.innerHTML = categoryButtons;
  const filterButtons = container.querySelectorAll(".filter-btn");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
