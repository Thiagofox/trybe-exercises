""" 
Suponha que você precisa criar um software que gera Relatórios de Vendas.
Nosso programa tem que conter toda uma lógica para ler dados e criar o
relatório e, ao final, vamos gerar um arquivo imprimível com tais dados.
Um JSON, por exemplo. Como estamos trabalhando com orientação a objetos,
vamos pensar! Qual entidade eu preciso criar para resolver meu problema?

Essa é uma pergunta que, muitas vezes, só conseguimos responder com firmeza
depois de experimentar um pouco. Já que estamos fazendo um relatório, vamos
começar fazendo dele a nossa entidade! Vamos, então, criar uma entidade
SalesReport e tentar incumbir a ela a responsabilidade de gerar o nosso
relatório.
"""


import json


class SalesReport:
    def __init__(self, export_file):
        self.export_file = export_file + ".json"

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!"""
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def serialize(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(self.export_file, "w") as file:
            json.dump(self.build(), file)


# Classe, crie (em outras palavras, instancie!) uma nova entidade
# Relatório de vendas' para eu usar!

meu_relatorio_de_vendas = SalesReport("meu_relatorio")

# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!

meu_relatorio_de_vendas.serialize()

"""
Exercicio - 01

Altere o código da classe SalesReport para que ela, além de gerar relatórios
em JSON, gere relatórios em CSV também. Defina, primeiro, como você fará a
extensão da lógica para depois gerar o CSV mesmo. Não gaste mais que cinco
minutos nesse exercício! Quando o relógio apitar, volte para a leitura que
vamos refletir sobre a experiência!

Resposta

Há várias formas de resolver esse problema! Na seção seguinte do conteúdo,
porém, vemos que não é possível estender a funcionalidade conforme pedido sem
evitar algum retrabalho. O propósito do exercício é evidenciar o problema que
o código, como está, gera quando queremos expandir suas funcionalidades -
para ilustrar, a seguir, como um bom código evitaria esse problema com o uso
de herança.

Abaixo mostramos uma das formas de resolver o problema, revisitando também o
que estudamos sobre leitura de CSVs em Python.

"""

import json
from csv import DictWriter


class SalesReport:
    def __init__(self, export_file):
        self.export_file = export_file + ".json"

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!"""
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def serialize(self):
        with open(self.export_file, "w") as file:
            json.dump(self.build(), file)

    def serialize_csv(self):
        with open("meu_relatorio.csv", "w") as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# Para testar
relatorio_de_vendas = SalesReport("meu_relatorio")
relatorio_de_vendas.serialize()
relatorio_de_vendas.serialize_csv()
