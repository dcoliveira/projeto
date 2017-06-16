//<script type="text/javascript" language="JavaScript" >
function enviardados(){
 
if(document.dados.textNome.value=="" || document.dados.textNome.value.length < 8)
{
alert( "Preencha campo NOME corretamente!" );
document.dados.textNome.focus();
return false;
}
 
 
if( document.dados.inputEmail.value=="" || document.dados.inputEmail.value.indexOf('@')==-1 || document.dados.inputEmail.value.indexOf('.')==-1 )
{
alert( "Preencha campo E-MAIL corretamente!" );
document.dados.inputEmail.focus();
return false;
}
 
if (document.dados.inputMensagen.value=="")
{
alert( "Preencha o campo MENSAGEM!" );
document.dados.inputMensagen.focus();
return false;
}
 
if (document.dados.inputMensagen.value.length < 50 )
{
alert( "É necessario preencher o campo MENSAGEM com mais de 50 caracteres!" );
document.dados.inputMensagen.focus();
return false;
}
 
return true;
}
 
//</script>