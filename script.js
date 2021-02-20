function RandomUser() {
  fetch("https://randomuser.me/api/?results=3")
  .then(response=>{
    console.log(response);
    if(!response.ok){
      throw Error("Error");
    }
      return response.json();
    })
    .then(data =>{
      console.log(data.results);
      const html = data.results.map(user =>{
        return`
        
        <div class="userType">
          <div class="userType1">
          <img src=${user.picture.medium} alt="" />
        	<h3> ${user.name.first} ${user.name.last}</h3>
       	 	<p> ${user.location.street.number} ${user.location.street.name}${user.location.city}</p>
          <p> ${user.email}</p>
          </div>
          <div class="userType2">
          <p> ${user.cell}</p>
          </div>
        </div>`;
      }).join("");
      console.log(html);
      document.querySelector(".user").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error =>{
      console.log(error);
    });
}
 
RandomUser();
