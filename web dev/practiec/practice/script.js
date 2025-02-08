let inputkey=document.getElementById("inputkey");

// console.log(inputkey)

inputkey.addEventListener("keydown",()=>
  {
    document.body.style.background=`#$(Math.floor(Math.random()*(9999-1000)*1000))`
  })

  // inputkey.addEventListener("keydown",()=>{
  //   document.body.style.background="red"
  // })

  // inputkey.addEventListener("keyup",()=>{
  //   document.body.style.background="yellow"
  // })

  let divs=document.getElementsByClassName('divs')
  console.log(divs);

  let purArray=Array.from(divs)
  console.log(purArray);

  purArray.map((m)=>{
    m.addEventListener("mouseover",()=>{
      m.style.background=m.innerHTML;
    })
  })

  purArray.map((m)=>{
    m.addEventListener("mouseout",()=>{
      m.style.background='initial'
    })
  })