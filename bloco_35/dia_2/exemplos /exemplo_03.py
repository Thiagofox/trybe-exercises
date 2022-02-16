def countdown(n):  # nome da função e parâmetro
    if n == 0:  # condição de parada
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # chamada de si mesma com um novo valor


countdown(5)

"""
No código acima temos uma função recursiva que chamamos de countdown . A ideia
da função é fazer uma contagem regressiva de 5 até 0. Dito isso, primeira
chamada que fazemos à função passamos o parâmetro inicial, no caso o número
5 . Nas outras vezes que a função for chamada é que vamos suprir a segunda
lei da recursão , passando n - 1 , sendo n o número passado por parâmetro.


Exemplo da execução do código:

n = 5 -> não satisfaz a condição de parada / chama a função novamente:
`countdown(5 - 1)`.  # primeira execução

n = 4 -> não satisfaz a condição de parada / chama a função novamente:
`countdown(4 - 1)`.  # segunda execução

n = 3 -> não satisfaz a condição de parada / chama a função novamente:
`countdown(3 - 1)`.  # terceira execução

n = 2 -> não satisfaz a condição de parada / chama a função novamente:
`countdown(2 - 1)`.  # quarta execução

n = 1 -> não satisfaz a condição de parada / chama a função novamente:
`countdown(1 - 1)`.  # quinta execução

n = 0 -> satisfaz condição de parada / entra no if e printa "FIM!".
# sexta execução
"""
