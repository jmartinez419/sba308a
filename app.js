
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const mountInfo = document.getElementById(`mount_info`)

searchButton.addEventListener('click', (event) => {
  event.preventDefault()
  const inputValue = searchInput.value;
  getMounts(inputValue)
});

async function getMounts(inputValue){
      try {
        const response = await fetch (`https://ffxivcollect.com/api/mounts?name_en_start=${inputValue}`)
        const data = await response.json()
        console.log(data)
        for(i = 0; i <= data.results.length; i++){
            mountInfo.innerHTML +=
            `<li><img src="${data.results[i].icon}">
            <b>${data.results[i].name}</b>:
            ${data.results[i].description}
            <br><b>Seats:</b>${data.results[i].seats}</br>
            <br>This mount came out in patch ${data.results[i].patch}.</br>
            Only <b>${data.results[i].owned}</b> have this mount currently.

            </li>`
            
        }
      }catch(error){
        console.log("Mount does not exist")
      }
     
}

function showMounts() {
    document.getElementsByClassName("mount_list")


}