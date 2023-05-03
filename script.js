const btn = document.querySelector('.btn');
let cards = document.querySelector('.cards');

const url = `https://randomuser.me/api/?results=50&gender=male`;

const getData = async () => {
  const res = await fetch(url);
  const jsonData = await res.json();
  // console.log(jsonData.results);

  jsonData.results.forEach((data, i) => {

    cards.innerHTML += `
    <div class="card" style="width: 20rem">
      <img src="${data.picture.large}" class="card-img-top" alt="" />
      <h5 class="card-title text-center text-dark border rounded-3 mt-1 bg-dark bg-gradient bg-opacity-10">User : ${i + 1}</h5>
      <div class="card-body d-flex gap-4 bg-light border rounded-3 p-2">
        <div class="">
          <p class="card-text"><span>${data.name.title}. </span>${data.name.first} ${data.name.last}</p>
          <p class="card-text">Ph:${data.phone}</p>
          <p class="card-text">Cell: ${data.cell}</p>
          <p class="card-text text-break">Email: ${data.email}</p>
          <p class="card-text">DOB: ${data.dob.date.slice(0, 4)}</p>
        </div>
        <div>
          <p class="card-text"><span>Gender:</span> ${data.gender}</p>
          <p class="card-text"><span>Location:</span> ${data.location.city}</p>
          <p class="card-text"><span>State:</span> ${data.location.state}</p>
          <p class="card-text"><span>Country:</span> ${data.location.country}</p>
          <p class="card-text"><span>Postcode:</span> ${data.location.postcode}</p>
        </div>
    </div>
    `;
  });

};

btn.addEventListener('click', getData);



