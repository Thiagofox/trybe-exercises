"""
Exercício 3: is_in

Caso queiramos saber se um elemento faz parte ou não do conjunto usando o
operador in precisamos que a nossa classe tenha um método chamado
__contains__ e é o que Faremos agora:

Crie um método com a assinatura abaixo:

def __contains__(self, item):
    # retorno: True, caso o elemento faça parte. False, caso o elemento não
    # Faça parte.

Exemplos de entrada e saída:

A = {1, 2, 3}

# entrada: 1
# saída: True

# entrada: 0
# saída: False

"""

# Solução ====================================================================


class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]


if __name__ == "__main__":
    # conj = Conjunto()
    # for i in [0, 10, 100, 1000]:
    #     conj.add(i)
    # print(conj)

    # conj2 = Conjunto()
    # for i in [1, 2, 3]:
    #     conj2.add(i)
    # print(conj2)

    # conj3 = Conjunto()
    # for i in [7, 2, 10]:
    #     conj3.add(i)
    # print(conj3)

    # conj4 = Conjunto()
    # print(conj4)

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)
    print(conj1)
    print(1 in conj1)
    print(0 in conj1)
