var usuarios = [
  {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];
function info(user){
  for(let u of user)
      console.log("O "+u.nome+" possui as habilidades: "+u.habilidades.join(', '));
}
info(usuarios);