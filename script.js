// 
const button = document.querySelector('button'),
    body = document.querySelector('body');
button.addEventListener('click', () => {



    // const a = fetch('http://localhost:8080/users').then(response => response.json()).then((json) => {
    //     const p = document.createElement('p')
    //     body.append(p)
    //     json.forEach(element => {
    //         const p = document.createElement('p')
    //         body.append(p)
    //         p.textContent = `${element.name}`;
    //     });
    // })

    fetch('http://localhost:8080/send', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
})