"""
Exercício 1:

Crie um algoritmo não recursivo para contar quantos números pares existem em
uma sequência numérica (1 a n).
"""


def conta_pares(n):
    numero_de_pares = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1

    return numero_de_pares


print(conta_pares(50))

"""
Exercício 2:

Transforme o algoritmo criado acima em recursivo.
"""


def conta_pares_rec(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares_rec(n - 1)
    else:
        return conta_pares_rec(n - 1)


print(conta_pares_rec(50))
