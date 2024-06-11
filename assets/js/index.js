// Базовий рівень

// 1) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити текст цієї кнопки.

// 2) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити її колір.

// 3) HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const buttonTaskOne = document.querySelector(".click-btn");
const deafulColor = buttonTaskOne.style.background;
const deafulText = buttonTaskOne.textContent;
let isClicked = false;

function eventClickBtn() {
  if (isClicked) {
    buttonTaskOne.style.background = deafulColor;
    buttonTaskOne.textContent = deafulText;
  } else {
    buttonTaskOne.style.background =
      "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
    buttonTaskOne.textContent = "You are clicked!";
  }
  isClicked = !isClicked;
}

buttonTaskOne.onclick = eventClickBtn;

const catImage = document.querySelector(".cat-img");

catImage.onmouseenter = (e) => {
  catImage.src = "./assets/img/task1.jpg";
};

catImage.onmouseleave = (e) => {
  catImage.src = "./assets/img/task.jpg";
};

// Розширена версія

// Дана інформація про користувача в об'єкті:

// Реалізувати обробку наступних подій:
// при натисканні на кнопку "Завантажити" додати інфо про користувача в <article></article>
// при натисканні на сердечко перефарбувати його в червоний колір.
// при наведенні на дату народження показувати кількість повних років.
// * стилізувати картку

const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto: "./assets/img/pexels-photo-4902634.jpeg",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

const loadBtn = document.getElementById("load-btn");

function loadEvent() {
  const userCard = document.getElementById("userCard");
  userCard.innerHTML = `
  <div class="user-card">
  <img class="user-img" src=${user.profilePhoto} alt="user-photo">
  <h2 class="user-fullName">${user.firstName} ${user.lastName}</h2>
  <p class="user-nick">${user.nickname}</p>
  <p class="user-birthday">${user.birthday.toDateString()}</p>
  <p class="user-like">&#10084 <span class="like-count"> ${
    user.likesCount
  }</span></p>
  <p></p>
</div>
  `;

  const like = document.querySelector(".user-like");
  const likeCountElement = document.querySelector(".like-count");
  let isLiked = false;
  const notLikedColor = like.style.color;
  let likeCount = user.likesCount;

  function eventLike() {
    if (isLiked) {
      like.style.color = notLikedColor;
      likeCount -= 1;
    } else {
      like.style.color = "red";
      likeCount += 1;
    }
    likeCountElement.textContent = likeCount;
    isLiked = !isLiked;
  }

  like.addEventListener("click", eventLike);

  const birthdayElement = document.querySelector(".user-birthday");

  birthdayElement.onmouseenter = (event) => {
    const userAge = new Date().getFullYear() - user.birthday.getFullYear();
    birthdayElement.textContent = `Users age is ${userAge} years`;
  };
  birthdayElement.onmouseleave = (event) => {
    birthdayElement.textContent = `${user.birthday.toDateString()}`;
  };
}

loadBtn.addEventListener("click", loadEvent);
