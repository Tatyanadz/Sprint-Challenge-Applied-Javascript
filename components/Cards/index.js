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
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((results) => {
    for (let key in results.data.articles) {
      if (results.data.articles.hasOwnProperty(key)) {
        results.data.articles[key].forEach(articles => {
          const card1 = articleFactory(articles);
          const cardsContainer = document.querySelector('.cards-container');
          cardsContainer.appendChild(card1)
        })

      }
    }
  })
  .catch((err) => {
    console.log('err');
  });


function articleFactory(articles) {
  const card = document.createElement('div');
  card.classList.add('card');

  const headLine = document.createElement('div');
  headLine.classList.add('headline');
  headLine.innerHTML = articles.headline;

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const imgSrc = document.createElement('img');
  imgSrc.src = articles.authorPhoto;

  const name = document.createElement('span');
  name.innerHTML = `By: ${articles.authorName} `;

  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imgContainer)
  author.appendChild(name);
  imgContainer.appendChild(imgSrc);

  return card;
}