/*
EN:
Definition Recursion
The act of a function calling itself, recursion is used to solve 
problems that contain smaller sub-problems. 
A recursive function can receive two inputs: 
a base case (ends recursion) or a recursive case (resumes recursion).
PT:
Recursão
Um ato de uma função invocando a si mesma. A recursão é usada 
para resolver problemas que contêm subproblemas menores. 
Uma função recursiva pode receber dois inputs (entradas): um 
caso base (termina a recursão) 
ou um caso recursivo (continua a recursão).
Font:https://developer.mozilla.org/en-US/docs/Glossary/Recursion
*/

//Font: https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f
{
    // Example 1
    function countDown(fromNumber) {
        // Return VOID
        //console.log("Count", fromNumber); // Exibition on console
        let nextNumber = fromNumber - 1; // decrement
        if (nextNumber > 0) {
            // condition to end function
            countDown(nextNumber); // call recursive
        }
    }
    //countDown(100); // call initialized
}

// Font: https://developer.mozilla.org/en-US/docs/Glossary/Recursion
/*
EN
Recursion: Function Factorial
Mathematic model: F(n) = n * F(n-1)
*/
/*
PT
Recursividade: Fatorial
Modelo matemático: F(n) = n * F(n-1)
*/

{
    function factorial(fromNumber) {
        // return Number
        if (fromNumber <= 1)
            // Condition base
            return 1;
        else return fromNumber * factorial(fromNumber - 1);
    }

    //console.log('Factorial', factorial(5));
}

/*
Recursion: Function contador
*/

{
    function contador(n) {
        // Retorna array
        if (n < 1) {
            return [];
        } else {
            let contadorArray = contador(n - 1);
            contadorArray.push(n);
            return contadorArray;
        }
    }
    //console.log(contador(5));
}

{
    /* Arvore de objetos de clientes */
    let objectClients = [
        {
            1: {
                nome: 'Nome do cliente',
                idade: 21,
                endereco: {
                    rua: 'rua teste',
                    numero: 122,
                    complemento: 'AP222'
                },
                sexo: 'F',
                altura: 1.9,
                dadosPessoais: {
                    rg: '0000000-41',
                    cpf: '38600000000'
                },
                perfilDeNegocio: {
                    risco: {
                        atrasouFatura: 15,
                        riscoAtribuido: 'Alto',
                        serasa: {
                            pendencia1: {
                                estabelecimento: 'MACH1',
                                divida: 100000000
                            },
                            pendencia2: {
                                estabelecimento: 'SMACH LANCHES',
                                divida: 350
                            }
                        }
                    }
                }
            },
            2: {
                nome: 'Nome do cliente',
                idade: 21,
                endereco: {
                    rua: 'rua teste',
                    numero: 122,
                    complemento: 'AP222'
                },
                sexo: 'F',
                altura: 1.9,
                dadosPessoais: {
                    rg: '0000000-41',
                    cpf: '38600000000'
                },
                perfilDeNegocio: {
                    risco: {
                        atrasouFatura: 15,
                        riscoAtribuido: 'Alto',
                        serasa: {
                            pendencia1: {
                                estabelecimento: 'MACH1',
                                divida: 100000000
                            },
                            pendencia2: {
                                estabelecimento: 'SMACH LANCHES',
                                divida: 350
                            }
                        }
                    }
                }
            },
            3: {
                nome: 'Nome do cliente',
                idade: 21,
                endereco: {
                    rua: 'rua teste',
                    numero: 122,
                    complemento: 'AP222'
                },
                sexo: 'F',
                altura: 1.9,
                dadosPessoais: {
                    rg: '0000000-41',
                    cpf: '38600000000'
                },
                perfilDeNegocio: {
                    risco: {
                        atrasouFatura: 15,
                        riscoAtribuido: 'Alto',
                        serasa: {
                            pendencia1: {
                                estabelecimento: 'MACH1',
                                divida: 100000000
                            },
                            pendencia2: {
                                estabelecimento: 'SMACH LANCHES',
                                divida: 350
                            }
                        }
                    }
                }
            },
            4: {
                nome: 'Nome do cliente',
                idade: 21,
                endereco: {
                    rua: 'rua teste',
                    numero: 122,
                    complemento: 'AP222'
                },
                sexo: 'F',
                altura: 1.9,
                dadosPessoais: {
                    rg: '0000000-41',
                    cpf: '38600000000'
                },
                perfilDeNegocio: {
                    risco: {
                        atrasouFatura: 15,
                        riscoAtribuido: 'Alto',
                        serasa: {
                            pendencia1: {
                                estabelecimento: 'MACH1',
                                divida: 100000000
                            },
                            pendencia2: {
                                estabelecimento: 'SMACH LANCHES',
                                divida: 350
                            }
                        }
                    }
                }
            },
            5: {
                nome: 'Nome do cliente',
                idade: 21,
                endereco: {
                    rua: 'rua teste',
                    numero: 122,
                    complemento: 'AP222'
                },
                sexo: 'F',
                altura: 1.9,
                dadosPessoais: {
                    rg: '0000000-41',
                    cpf: '38600000000'
                },
                perfilDeNegocio: {
                    risco: {
                        atrasouFatura: 15,
                        riscoAtribuido: 'Alto',
                        serasa: {
                            pendencia1: {
                                estabelecimento: 'MACH1',
                                divida: 100000000
                            },
                            pendencia2: {
                                estabelecimento: 'SMACH LANCHES',
                                divida: 350
                            }
                        }
                    }
                }
            }
        }
    ];
}
