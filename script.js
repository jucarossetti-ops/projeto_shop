console.log("Funcionando");

/*
 1 - Pegar o valor do email e armazena em uma variavel
 2 - Pegar o valor da senha e armazena em uma variavel
 3 - Fazer condicao(IF) para verificar se email é igual = senai@gmail.com
 e senha igual = senai
 CASO a condicao seja verdadeira: 
    redireciona o usuario para tela de home.html
 CASO a condicao seja falsa:
    exibir tela um alert() dizendo crendenciais incorreta
*/

function realizarLogin() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (!email) {
    document.getElementById("email").style.borderColor = "tomato";
    // document.getElementById("error_email").innerText = "O email e obrigatorio";
    return;
  }

  if (!senha) {
    document.getElementById("senha").style.borderColor = "tomato";
    return;
  }

  if (email === "senai@gmail.com" && senha === "senai") {
    /* Usamos 3 sinais de === para comparar tanto o valor quanto o tipo da informacao */
    window.location.href = "./home.html";
  } else {
    alert("Crendeciais incorreta");
  }
}

function exibirSenha() {
  var tipo_atual = document.getElementById("senha").type;

  /* Condicao com IF ternario
  document.getElementById(senha).type = tipo_atual === "text" ? "password" : "text"
  */

  if (tipo_atual === "text") {
    document.getElementById("senha").type = "password";
  } else if (tipo_atual === "password") {
    document.getElementById("senha").type = "text";
  }
}
