const reviews = [
  {
    id: 1,
    img: "assets/girl1.jpg",
    name: "sarah",
    professional: "Web Developer",
    About: `I'm baby meggings twee goth +1.Bicycle rights tumeric chartreuse
            before they sold out chambray popup.Shaman humblegrab pickled
            coloring book salvia hoodie.cold pressed four dollar toast everyday
            carry'`,
  },
  {
    id: 2,
    img: "assets/girl2.jpg",
    name: "Amna Riaz",
    professional: "Web Designer",
    About: `"I'm a passionate web designer who believes in the magic of user experience. I love blending creativity with functionality, crafting beautiful and intuitive websites. When I'm not coding, you can find me exploring local coffee shops or experimenting with the latest design trends. My mission? To make the web a more beautiful place, one pixel at a time!"`,
  },
  {
    id: 3,
    img: "assets/girl3.jpg",
    name: "Asfa Ijaz",
    professional: "Graphic Designer",
    About: `"I'm a graphic designer who thrives on transforming ideas into captivating visuals. With a love for bold colors and innovative layouts, I aim to create designs that tell a story and engage audiences. When I'm not sketching or brainstorming, I enjoy diving into art books or taking long walks to find inspiration in the world around me."`,
  },
  {
    id: 4,
    img: "assets/girl4.jpg",
    name: "Radia Iqbal",
    professional: "Full Stack Developer",
    About: `"I'm a full stack developer with a passion for crafting seamless digital experiences. From front-end design to back-end architecture, I enjoy solving complex problems and bringing ideas to life through code. Outside of work, I love tinkering with new technologies, exploring open-source projects, and sharing knowledge with fellow developers over coffee."`,
  },
];

//select items
const img = document.getElementById("img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
const preBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.professional;
  info.textContent = item.About;
}

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

//show previous person
preBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

//show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
