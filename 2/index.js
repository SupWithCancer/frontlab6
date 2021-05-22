class HTTP {
  get(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = () => {
          if (xhr.status == 200) {
              callback(xhr.response);
          } else {
              console.log(`что-то не так`);
          }
      }
      xhr.send();
  }

  post(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.onload = () => {
          if (xhr.status == 200) {
              callback(xhr.response);
          } else {
              console.log(`что-то не так`);
          }
      }
      xhr.send();
  }
}

const renderPosts = posts => {
  let result = '';
  posts.forEach(el => {
      result += `
          <div class="box">
              <h1 class="box_title">
                  ${el.title}
              </h1>
              <p class="box_content">
                  ${el.content}
              </p>
          </div>
      `;
  });
  document.querySelector('#boxes').innerHTML = result;
}

const req = new HTTP();
req.get('./db.json', (response) => {
  renderPosts(JSON.parse(response).posts);
});
