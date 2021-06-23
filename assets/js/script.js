let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let senha = document.querySelector("#senha");
let address = document.querySelector("#address");
let cidade = document.querySelector("#cidade");
let CEP = document.querySelector("#CEP");
let estado = document.querySelector("#estado");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let senhaOk = false;
let enderecolOk = false;
let cidadeOk = false;
let cepOk = false;
let estadoOk = false;

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 2) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}
function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 150) {
    txtAssunto.innerHTML = "Digite no máximo 150 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}
function validaSenha() {
  let txtSenha = document.querySelector("#txtSenha");

  if (senha.value.length < 6) {
    txtSenha.innerHTML = "Mínimo de 6 digitos";
    txtSenha.style.color = "red";
  } else {
    txtSenha.innerHTML = "Senha válida";
    txtSenha.style.color = "green";
    senhaOk = true;
  }
}
function validaEndereco() {
  let txtEndereco = document.querySelector("#txtEndereco");

  if (address.value == "") {
    txtEndereco.innerHTML = "Endereço inválido";
    txtEndereco.style.color = "red";
  } else {
    txtEndereco.innerHTML = "Endereço válido";
    txtEndereco.style.color = "green";
    enderecolOk = true;
  }
}
function validaCidade() {
  let txtCidade = document.querySelector("#txtCidade");

  if (cidade.value == "") {
    txtCidade.innerHTML = "Cidade inválida";
    txtCidade.style.color = "red";
  } else {
    txtCidade.innerHTML = "Cidade válida";
    txtCidade.style.color = "green";
    cidadeOk = true;
  }
}
function validaCep() {
  let txtCep = document.querySelector("#txtCep");

  if (CEP.value == "") {
    txtCep.innerHTML = "CEP inválido";
    txtCep.style.color = "red";
  } else {
    txtCep.innerHTML = "CEP válido";
    txtCep.style.color = "green";
    cepOk = true;
  }
}
function validaEstado() {
  let txtEstado = document.querySelector("#txtEstado");

  if (estado.value == "") {
    txtEstado.innerHTML = "Estado inválido";
    txtEstado.style.color = "red";
  } else {
    txtEstado.innerHTML = "Estado válido";
    txtEstado.style.color = "green";
    estadoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha os campos do formulário corretamente!");
  }
}

function enviar() {
  if (
    nomeOk == true &&
    emailOk == true &&
    senhaOk == true &&
    enderecolOk == true &&
    cidadeOk == true &&
    cepOk == true &&
    estadoOk == true
  ) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha os campos do formulário corretamente!");
  }
}
function entrar() {
  if (
    nomeOk == true &&
    emailOk == true &&
    senhaOk == true &&
    enderecolOk == true &&
    cidadeOk == true &&
    cepOk == true &&
    estadoOk == true
  ) {
    window.location.href = "pagina.html";
  } else {
    alert("Preencha os campos do formulário corretamente!");
  }
}
