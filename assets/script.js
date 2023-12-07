let rowPosition=document.getElementsByClassName("container")[2]
document.getElementById("caricaimmagini1").addEventListener("click",async function(){
        document.getElementById("tabella").classList.remove("d-none")
        const urlApi= await fetch("https://api.pexels.com/v1/search?query=[your-query]",{
        
        
        headers:{
            Authorization: "ASaGYFyuZZDboUVk8I6aUiQebwhfxJBmclZSKYB4MAuE3zKrZQLKuUXz"
            
        }
         })
        fotografi= await urlApi.json()
        popolaPagina(fotografi.photos)
})

document.getElementById("caricaimmagini2").addEventListener("click",async function(){
    document.getElementById("tabella").classList.remove("d-none")
    const urlApi2= await fetch("https://api.pexels.com/v1/search?query=nature",{
    
    
    headers:{
        Authorization: "vAAii7vJTjSgPtwxBumRmNpYIdirSaLKxIeF6NbR4DbR4K8CYufK4t9I"
        
    }
     })
    fotografi2= await urlApi2.json()
    
    
    popolaPagina(fotografi2.photos)
})

async function  popolaPagina(arrayFotografi){
    for(let i=0;i<arrayFotografi.length;i++)
    {
        
        creaCard(arrayFotografi[i])
    
    }
}






function creaCard(fotografo){
    document.getElementById("tabcontainer").innerHTML+=`
    
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${fotografo.src.tiny}" class="card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false" role="img" >
          <title>Placeholder</title>
  
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            testo immmagine
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button id="B${fotografo.id}" type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button onclick="hideCard(this)" type="button" class="btn btn-sm btn-outline-secondary">
                Hide
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    
    `
    
}

function hideCard(button) {
    let card = button.closest('.card')
    card.style.display = 'none'
}
