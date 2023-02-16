let name = "Charlie"
function getName() {
  if(!name){
    let name = "James"
  }
  return name
}
console.log('Your name is', getName())
