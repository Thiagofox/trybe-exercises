"""
Herança - Especialização de comportamentos

Não se deve ter medo de criar objetos. Não importa quão pequenos sejam, é a
separação de responsabilidades que faz o paradigma brilhar
Nós queremos estender nosso código sem modificar o que já existe . O codigo a
seguir faz a mesma coisa que o código anterior, mas está refatorado. Ele usa,
para resolver o nosso problema, os conceitos de classes abstratas, métodos
abstratos e o conceito de herança. 
"""


from abc import ABC, abstractmethod
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


# Para testar
relatorio_de_vendas = SalesReportJSON("meu_relatorio")
relatorio_de_vendas.serialize()

"""
Exercicio - 02

Implemente uma classe SalesReportCSV que seja herdeira da classe SalesReport,
da mesma forma que fizemos com a SalesReportJSON . Para testar seu
funcionamento, instancie-a e chame sua função serialize .

Resposta

O que nos interessa aqui é a familiarização com a sintaxe de herança, para
começarmos a "sentir" o que isso é, além de reforçar o que aprendemos sobre 
instanciar objetos e chamar suas funções! Além disso, queremos mostrar que,
nas classes herdeiras, usa-se a função build definida só na classe ascendente.
Isso é a herança quem faz!
"""

from abc import ABC, abstractmethod
from csv import DictWriter
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + ".csv", "w") as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# Para testar
relatorio_de_vendas = SalesReportJSON("meu_relatorio")
relatorio_de_vendas.serialize()

relatorio_de_compras = SalesReportCSV("meu_relatorio")
relatorio_de_compras.serialize()
