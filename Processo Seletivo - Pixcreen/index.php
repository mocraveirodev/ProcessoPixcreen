<?php
header('Location: default.asp?email='.$_GET['email']);

header('Location: default.asp?cpf='.$_GET['cpf']);

function validaEmail($email) {
    $conta = "^[a-zA-Z0-9\._-]+@";
    $domino = "[a-zA-Z0-9\._-]+.";
    $extensao = "([a-zA-Z]{2,4})$";
    $pattern = $conta.$domino.$extensao;
    if (ereg($pattern, $email))
    return true;
    else
    return false;
    }
    // Define uma variável para testar o validador
    $input = "meuemail@dominio.com.br";
    // Faz a verificação usando a função
    if (validaEmail($email)) {
    echo "Seu e-mail " + $email + " é valido!";
    } else {
    echo "Seu e-mail " + $email + " é invalido!";
    }

    function validaCPF($cpf)
    {	// Verifiva se o número digitado contém todos os digitos
        $cpf = str_pad(ereg_replace('[^0-9]', '', $cpf), 11, '0', STR_PAD_LEFT);
        
        // Verifica se nenhuma das sequências abaixo foi digitada, caso seja, retorna falso
        if (strlen($cpf) != 11 || $cpf == '00000000000' || $cpf == '11111111111' || $cpf == '22222222222' || $cpf == '33333333333' || $cpf == '44444444444' || $cpf == '55555555555' || $cpf == '66666666666' || $cpf == '77777777777' || $cpf == '88888888888' || $cpf == '99999999999')
        {
        return false;
        }
        else
        {   // Calcula os números para verificar se o CPF é verdadeiro
            for ($t = 9; $t < 11; $t++) {
                for ($d = 0, $c = 0; $c < $t; $c++) {
                    $d += $cpf{$c} * (($t + 1) - $c);
                }
     
                $d = ((10 * $d) % 11) % 10;
     
                if ($cpf{$c} != $d) {
                    return false;
                }
            }
     
            return true;
        }
    }

    if (validaCPF($cpf)) {
        echo "Seu CPF " + $cpf + " é valido!";
        } else {
        echo "Seu CPF " + $cpf + " é invalido!";
        }

?>