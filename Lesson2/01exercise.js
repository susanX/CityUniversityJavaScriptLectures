//fetch('https://ghibliapi.vercel.app/people') // api for the get request
   // .then(response => response.json())
    //.then(data => console.log(data));
    
// Print the surname of the player
//console.log(response[0].name);    

fetch('https://ghibliapi.vercel.app/people')
  .then(response => response.json())
  .then(data => {
    // console.log(data[0].name);
    // console.log(data[2].name);
    // console.log(data[3].name);
    // console.log(data[4].name);
    //console.log(data);
    //console.log(JSON.stringify(data[0], null, 2));
  });

  
// fetch('https://ghibliapi.vercel.app/people')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(person => {
//       console.log(person);
//     });
//   });

  //https://ghibliapi.vercel.app/films
//   fetch('https://ghibliapi.vercel.app/films')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(film => {
//       console.log(film.title, film);
//     });
//   });

// "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
// "title": "Castle in the Sky",
// "original_title": "天空の城ラピュタ",
// "original_title_romanised": "Tenkū no shiro Rapyuta",
// "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
// "director": "Hayao Miyazaki",
// "producer": "Isao Takahata",
// "release_date": "1986",
// "running_time": "124",
// "rt_score": "95",
// "people": [],
// "species": [],
// "locations": [],
// "vehicles": [],
// "url": 
// fetch('https://ghibliapi.vercel.app/people')
//   .then(response => response.json())
//   .then(data => {
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//   });
//html list
//   fetch('https://ghibliapi.vercel.app/people')
//   .then(res => res.json())
//   .then(data => {
//     const list = document.getElementById('people');

//     data.forEach(person => {
//       const li = document.createElement('li');
//       li.textContent = person.name;
//       list.appendChild(li);
//     });
//   });

  fetch('https://ghibliapi.vercel.app/people')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('cards');

    data.forEach(person => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${person.name}</h3>
        <p><strong>Gender:</strong> ${person.gender}</p>
        <p><strong>Age:</strong> ${person.age}</p>
        <p><strong>Eye color:</strong> ${person.eye_color}</p>
        <p><strong>Hair color:</strong> ${person.hair_color}</p>
      `;

      container.appendChild(card);
    });
  });