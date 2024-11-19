function inicioreceita() {
  let produto = ["leite", "ovo", "sal", "açúcar", "farinha", "fermento"];
  return produto;
}

function receita(ingredientes) {
  let descricao_receita = "Receita de Bolo:\n";
  descricao_receita += "1. Separe os seguintes ingredientes: " + ingredientes.join(", ") + ".\n";
  descricao_receita += "2. Misture os ingredientes secos (farinha, açúcar, sal e fermento) em uma tigela.\n";
  descricao_receita += "3. Adicione os ovos e o leite aos poucos, mexendo até obter uma massa homogênea.\n";
  descricao_receita += "4. Despeje a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por 35 minutos.\n";
  descricao_receita += "5. Retire do forno, deixe esfriar e sirva!";
  return descricao_receita;
}

console.log(receita(inicioreceita()));
