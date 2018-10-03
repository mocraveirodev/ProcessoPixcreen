<?php

class ValidaEmail
{
	/** 
	 * Configura o valor (Construtor)
	 * 
	 * @param string $valor - O email
	 */
	function __construct ( $valor = null ) {		
		// Garante que o valor é uma string
		$this->valor = (string)$valor;
    }

    function valida() {        
        $conta = "^[a-zA-Z0-9\._-]+@";
        $domino = "[a-zA-Z0-9\._-]+.";
        $extensao = "([a-zA-Z]{2,4})$";
        $pattern = "/".$conta.$domino.$extensao."/";

        if (preg_match($pattern, $this->valor))
            return true;
        else
            return false;
    }
}