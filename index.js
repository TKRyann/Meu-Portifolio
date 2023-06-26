function clickMenu(){
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }

  if (itens.style.display =='block'){
    iconnav.style.display = 'none'
  } else {
    iconnav.style.display = 'block'
  }

}
function mudouTamanho(){
  if (window.innerWidth >= 768){
    itens.style.display = 'block'
  } else {
    itens.style.display ='none'
  }
}