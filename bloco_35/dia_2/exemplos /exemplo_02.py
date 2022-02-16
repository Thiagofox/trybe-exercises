"""
Exercício 2:
Reversecorp Faça uma função que recebe uma lista, e retorna-a na ordem reversa.
"""

# Soluções


def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


"""
Nesta solução iterativa, percorremos a lista inserindo seus elementos em
uma nova lista, porém a inserção ocorre no começo da lista (posição 0),
assim a ordem se inverte.
"""


def reverse_rec(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


"""
Nesta solução recursiva primeiro definimos a condição de parada,
ou caso base: se a lista tiver menos de dois elementos, ela invertida
será ela mesma. Depois, a lógica de recursão é: Para inverter uma
lista, basta colocar o primeiro elemento no fim, e depois inverter
o resto da lista.
"""
