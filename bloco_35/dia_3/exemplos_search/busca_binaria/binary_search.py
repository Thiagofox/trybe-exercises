# ==============================================================================
# Busca Binária
# ==============================================================================
"""
A Busca binária ( binary search ) é mais um exemplo onde empregamos a técnica
da divisão e conquista. É importante destacar que ela supõe que nossa coleção
está ordenada e seu funcionamento é através de múltiplas divisões do espaço de
busca, reduzindo-o, buscando o elemento no meio do espaço.

Vamos supor a seguinte lista: [1, 10, 35, 42, 51, 60, 75] e o número buscado
é 60 . Dividimos a lista em duas partes e verificamos se o elemento do meio
( 42 ) é o elemento procurado.

Como sabemos que a lista esta ordenada e que
o valor buscado é maior que o encontrado, não precisamos comparar com todos
os outros à esquerda. Vamos procurar somente os valores posteriores a ele
[51, 60, 75] . Realizamos o mesmo processo de divisão e nosso elemento do
meio passa a ser 60 .
Como encontramos o valor, vamos retornar o seu índice, 5 .
É mais rápida que a busca linear, visto que o número de comparações
necessárias, mesmo em um caso onde não encontre um elemento, é menor.
"""


def binary_search(array, low_index, high_index, value):
    """
    array - onde estamos procurando o valor
    low_index - índice de onde iniciaremos nossa busca
    high_index - índice de onde finalizaremos nossa busca
    value - valor a ser procurado
    """
    # caso base: quando os índices se cruzam.
    # Caso onde a busca terminou e o elemento não foi encontrado
    if high_index < low_index:
        raise ValueError(f"{value} is not in list")

    # middle_index é o índice que divide o array formado
    # entre o menor índice (low) e o maior (high)
    middle_index = (high_index + low_index) // 2

    # se encontrou o elemento retorne seu índice
    if array[middle_index] == value:
        return middle_index
    # caso o elemento buscado seja menor que o encontrado,
    # procure somente os anteriores a ele.
    # Fazemos isto modificando o índice maior,
    # para o índice anterior ao meio (middle)
    elif array[middle_index] > value:
        return binary_search(array, low_index, middle_index - 1, value)
    # caso o elemento buscado seja maior que o encontrado,
    # procuramos somente os posteriores a ele.
    # Fazemos isto indicando que o índice menor
    # será o índice posterior ao meio (middle)
    else:
        return binary_search(array, middle_index + 1, high_index, value)


array = [2, 3, 4, 10, 40]
target = 40

result = binary_search(array, 0, len(array) - 1, target)
print(f"Elemento encontrado na posição: {result}")
