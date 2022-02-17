# ==============================================================================
# Selection Sort
# ==============================================================================
"""
A ordenação por seleção ( selection sort em inglês), divide o array em duas
partes, uma já ordenada e outra de itens a serem ordenados. Em seguida,
selecionaremos o menor elemento na lista não ordenada e o incluiremos na lista
ordenada. Isto será feito continuamente até que nossa lista de elementos não
ordenados se esgote, e logo teremos uma lista com os itens ordenados.

Como funciona o algoritmo?

# Vamos supor os números não ordenados
- ordenados =
- não ordenados = 3 6 1 7

# Buscamos entre os elementos não ordenados o menor elemento
- menor = 1

# Vamos adicioná-lo a lista de elementos ordenados
- ordenados = 1
- não ordenados = 6 3 7

# Agora repetimos o passo de busca
- menor = 3

# Assim teremos
- ordenados = 1 3
- não ordenados = 6 7

# Como ainda não esgotamos os números a serem ordenados repetiremos a busca
menor = 6

# Agora temos quase todos os elementos ordenados
- ordenados = 1 3 6
- não ordenados = 7

# Faremos a busca pelo menor elemento novamente (único)
- menor = 7

# Esgotamos as possibilidades e temos nossa lista ordenada
- ordenados = 1 3 6 7

"""


def selection_sort(array):
    # como um algoritmo de força bruta
    # percorre a estrutura exaustivamente
    for i in range(len(array)):
        minimum = i

        # itera sobre os elementos não ordenados
        for j in range(i + 1, len(array)):
            # seleciona o menor valor
            if array[j] < array[minimum]:
                minimum = j

        # após encontrar o menor valor
        # ao invés de criar um novo array
        # (o que aumenta complexidade de espaço)
        # realizamos a substituição entre o menor elemento
        # e a posição i que corresponde ao primeiro elemento não ordenado
        # que consequentemente passará a ser o último ordenado
        array[minimum], array[i] = array[i], array[minimum]

    return array


print(selection_sort([100, 4, 6, 33, 56, 67]))

"""
Analisando a complexidade deste algoritmo, vemos que independente de todos os
elementos estarem ordenados (ou não), ou parcialmente ordenados, sempre
teremos que percorrer o array completamente e também n - 1 elementos a cada
iteração. Isto nos leva a uma complexidade O(n²) para todos os casos
(pior, médio, melhor).

Como criamos apenas algumas variáveis de controle e não criamos um array
auxiliar, nosso algoritmo tem uma complexidade de espaço constante, ou seja,
não muda seja para 10, 1000 ou 10.000 elementos.
"""
