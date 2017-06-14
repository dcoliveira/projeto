function Consultar() {
    var nome = document.getElementById("nome");
    var nomeC = form.nome.value;
    var processo = form.processo.value;

    if (nomeC == "") {
        alert('Preencha o campo com Nome do Solicitante');
        form.nome.focus();
        return false;
    }
    if ((nomeC != "Carlos Santos") && (nomeC != "Fábio Gomes")) {
        alert('Não existe processo para os dados informados');
        form.nome.focus();
        return false;
    }
    if (processo.length < 8) {
        alert('Processo inválido');
        form.processo.focus();
        return false;
    }



    if (nome.value != "") {
        alert('Seja bem vindo(a) sr(a) ' + nome.value + ' Clique em OK para verificar os detalhes');
    }
    window.open ("processo.html");
    form.reset();
}⁠⁠⁠⁠