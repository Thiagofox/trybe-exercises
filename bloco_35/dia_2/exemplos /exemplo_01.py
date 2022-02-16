# ==============================================================================
"""
Exercício 1:

Fibonacci A sequência de fibonacci é uma sequência numérica em que, partindo
dos dois primeiros números sendo 0 e 1, o próximo número será sempre a soma
dos dois anteriores. Esta sequência é interessante pois aparece muito na
matemática e na natureza de formas inusitadas. Veja os primeiros números:

começo = [0, 1]
0 + 1 = 1 -> [0, 1, 1]
1 + 1 = 2 -> [0, 1, 1, 2]
1 + 2 = 3 -> [0, 1, 1, 2, 3]
3 + 2 = 5 -> [0, 1, 1, 2, 3, 5]

e assim por diante: 8, 13, 21, 33, 54...

Faça uma função que retorne o enésimo número da sequência de Fibonacci.
"""
# ==============================================================================

# Soluções


def fibonacci(n):
    sequence = [0, 1]
    print(sequence)
    for x in range(n):
        next = sequence[-1] + sequence[-2]
        print(sequence[-1], sequence[-2], next)
        sequence.append(next)
    print(sequence[-1])
    return sequence


# fibonacci(10)

"""
Na forma iterativa, calculamos todos os números da sequência até o
número desejado.
"""


def recur_fibo(n):
    if n <= 1:
        return n
    else:
        return recur_fibo(n - 1) + recur_fibo(n - 2)


nterms = 10

# check if the number of terms is valid
if nterms <= 0:
    print("Plese enter a positive integer")
else:
    print("Fibonacci sequence:")
    for i in range(nterms):
        print(recur_fibo(i))


"""
Na forma recursiva, definimos o caso trivial ou condição de parada como os dois
primeiros números, cuja posição na lista por acaso é igual à seu valor. Em
seguida, definimos a lógica recursiva: Um número é igual à soma dos dois
numeros que o precedem na sequência.
"""
