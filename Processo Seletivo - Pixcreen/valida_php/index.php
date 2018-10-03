<?php

include('class/class-valida-cpf-cnpj.php'); // referencia -> https://www.todoespacoonline.com/w/2014/08/classe-para-validar-e-formatar-cpf-e-cnpj-em-php/
include('class/class-valida-email.php'); // referencia -> http://blog.thiagobelem.net/validacao-de-e-mail-no-php-com-expressoes-regulares

// valida itens
if (!isset($_GET["cpf"])) {
	echo 'CPF é obrigatório!';
	exit();
}

if (!isset($_GET["email"])) {
	echo 'E-mail é obrigatório!';
	exit();
}

$cpf = new ValidaCPFCNPJ($_GET["cpf"]); // formatos aceitos -> 00000000000, 000000000-00 e 000.000.000-00
$email = new ValidaEmail($_GET["email"]);

// Verifica se o CPF ou CNPJ é válido
echo "Seu CPF: $cpf->valor é " . ($cpf->valida() ? 'válido' : 'inválido') . "<br>";
echo "Seu E-mail: $email->valor é " . ($email->valida() ? 'válido' : 'inválido');

?>