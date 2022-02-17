# ==============================================================================
# Insertion Sort
# ==============================================================================
"""
A ordenação por inserção ( insertion sort ), tem esse nome por inserir um
elemento de cada vez em sua posição correta. Fazendo uma analogia a um jogo de
cartas, onde sua "mão" esteja ordenada, é como se a cada nova carta recebida
fossemos movendo ela até achar a posição correta e a inserimos ali, e faremos
isso sucessivamente até que não tenha novas cartas e por consequência, nossa
mão esteja ordenada. É mais eficiente que a ordenação por seleção e também
considerada mais simples.

Como funciona o algoritmo?

# Vamos supor os números não ordenados
- coleção = 3 2 1 7

# vamos pegar o primeiro elemento e movê-lo até sua posição
- elemento = 3

# como não há elementos a esquerda de 3 não o movemos
- coleção = 3 2 1 7

# agora vamos pegar o segundo elemento
- elemento = 2

# vamos movê-lo à esquerda, enquanto seu valor for menor
# que o elemento a sua esquerda
             ⤺
- coleção = 2 3 1 7

# próximo elemento da coleção
- elemento = 1

# vamos inseri-lo na  posição correta,
# movendo para a esquerda enquanto seu valor for menor
# que o elemento a esquerda
             ⤺ ⤺
- coleção = 1 2 3 7

# por fim verificamos o último elemento
- elemento = 7

# não há elementos menores a esquerda
# e a coleção está ordenada
- coleção = 1 2 3 7
"""


def insertion_sort(array):
    # itera sobre cada valor do array
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        # enquanto o valor da posição for menor que os elementos a sua esquerda
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            # move as posições para a direita
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        # colocamos o elemento em sua nova posição
        array[current_position] = current_value
    return array


print(insertion_sort([100, 4, 6, 33, 56, 67]))


"""
Como precisamos percorrer cada um dos elementos, e depois percorrer comparando
os elementos à esquerda do mesmo, em um pior caso, onde o array esteja
inversamente ordenado, teremos uma complexidade de O(n²) . Isto se repete
também em média, para arrays parcialmente ordenados. Porém se inicialmente
o array estiver ordenado, este algoritmo terá complexidade O(n) , pois só fara
a iteração de todos os elementos, e não precisará ficar movendo os elementos.

Assim como na ordenação por seleção, como criamos apenas algumas variáveis de
controle e não criamos um array auxiliar, nosso algoritmo tem uma complexidade
de espaço constante, ou seja, não muda, seja para 10, 1000 ou 10.000 elementos.
"""
