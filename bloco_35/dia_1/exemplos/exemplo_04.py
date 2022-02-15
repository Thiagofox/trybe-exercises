# A estrutura deve estar ordenada para que a busca binária funcione
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while start <= end:
        print(
            "Subarray in step {}: {}"\.format(step, str(array[start : end + 1]))
        )
        step = step + 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid

        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


print(binary_search_iterative(data, 2))

"""
Exercício 4: Imagine que você recebe dois arrays de tamanho igual, array1 e
array2 . Para cada elemento do array1 , realize uma busca binária no array2.
Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n) ,
ou O(n log n) .
"""

''' 
Resposta
Se cada busca binária tem uma complexidade O(log n) e fazemos n buscas,
sendo cada uma nessa complexidade, a complexidade final é O(n * log n) .
'''