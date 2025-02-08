let tbody=document.getElementById("tbody");
console.log(tbody)

let data=fetch('https://api.github.com/users')

data.then((Response)=>{
  console.log(Response)
  let finalData=Response.json();
  finalData.then((result)=>{
    result.map((m)=>{
      console.log(m);

      tbody.innerHTML+=   `
      <tr>
      <td>${m.id}</td>
      <td>${m.login}</td>
      <td><img src=${m.avatar_url}></td>
      <td>${m.type}</td>
      <td><a href=${m.url}>${m.url}</a>

      </tr>
      `        
    })
  })
})
