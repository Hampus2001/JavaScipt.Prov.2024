// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

const responsePromise2 = fetch("https://jsonplaceholder.typicode.com/photos");

const dataPromise2 = responsePromise2.then((response) => {
  return response.json();
});

dataPromise2.then((data) => {
  //create parent
  const parent2 = document.createElement("div");
  parent2.setAttribute("class", "container2");
  document.body.appendChild(parent2);

  for (let i = 0; i < 10; i++) {
    //create img element
    const photo = document.createElement("img");
    photo.setAttribute("class", "photo");
    photo.src = data[i].url;
    photo.addEventListener("click", () => {
      alert(data[i].title);
    });

    //add into html
    parent2.appendChild(photo);
  }
});
