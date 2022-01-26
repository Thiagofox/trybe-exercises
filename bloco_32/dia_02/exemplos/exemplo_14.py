import csv

with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader
print(data)

a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

# exemplo header, *data -> desacoplamento

''' 
header, *data é um truque para separarmos o cabeçalho do restante dos dados.
Quando há uma atribuição múltipla e o valor da direita ( beach_status_reader )
pode ser percorrido, o Python entende que deve atribuir cada um dos valores a
uma variável da esquerda (header, *data), seguindo a ordem. Isto é chamado de
desempacotamento de valores. Dito isso, vamos ver o exemplo abaixo para
entendermos melhor como o desempacotamento de valores funciona:
'''

head, *tail = [1, 2, 3]
''' Quando um * está presente no desempacotamento,
    os valores são desempacotados em formato de lista. '''
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
