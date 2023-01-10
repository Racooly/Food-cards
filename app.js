//Search bar
function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let Name = document.querySelectorAll('#Name')
    for(let i = 0 ; i < Name.length ; i++){
        if(!Name[i].innerHTML.includes(input)){
        Name[i].style.display = "none"
    }else{
        Name[i].style.display = "inline"
    }
  }
}
