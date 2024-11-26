// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

const dataPromise = responsePromise.then((response) => {
  return response.json();
});

dataPromise.then((data) => {
  //create parent
  const parent = document.createElement("div");
  parent.setAttribute("class", "container");
  //insert parent into html
  document.body.appendChild(parent);

  data.forEach((element) => {
    //create parent for each post
    const postParent = document.createElement("div");
    postParent.setAttribute("class", "post");
    // create title element
    const title = document.createElement("h1");
    title.textContent = element.title;
    postParent.appendChild(title);

    //create body element
    const body = document.createElement("h2");
    body.textContent = element.body;
    postParent.appendChild(body);

    // insert post into parent
    parent.appendChild(postParent);
  });
});
