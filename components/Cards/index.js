// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(result => {
    //console.log(result);
    const list = Object.keys(result.data.articles);

    for (let index = 0; index < list.length; index++) {
      const key = list[index];

      result.data.articles[`${key}`].forEach(element => {
        CardCreator(element);
      });
    }
  })
  .catch(error => {
    console.log(error);
  });

function CardCreator(data) {

    // Create Elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");
  const cardContainer = document.querySelector(".cards-container");

    // Class Elements
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

    // Append if needed
  cardContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(name);

    // Set Content
    headline.textContent = data.headline;
    name.textContent = "By " + data.authorName;
    image.src = data.authorPhoto;

  return card;
}
