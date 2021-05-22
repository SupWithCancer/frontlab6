const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    
  })
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

const body = {
  name: 'Dariia',
  age: 19
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))


