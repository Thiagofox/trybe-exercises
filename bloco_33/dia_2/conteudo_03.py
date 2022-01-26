""" 
Exercício 3

Defina na classe SalesReport um segundo método abstrato chamado get_length que
retorna quantos itens tem no relatório. Tente chamar esse método a partir da
classe herdeira que não implementa esse método e veja o erro que você recebe.
Tente instanciar a SalesReport também! Depois disso, implemente uma lógica
qualquer para esse método em uma das classes herdeiras e verifique que já é
possível instanciá-la e até chamar o método!
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

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)

    def get_length(self):
        return 4  # eu rolei um dado, garanto que é aleatório.


# Para testar

# Isso não funcionará
# meu_relatorio = SalesReport()

# Isso também não, a não ser que SalesReportJSON defina a função `get_length`
meu_relatorio = SalesReportJSON("meu_relatorio")
print(meu_relatorio.get_length())

"""
Exercício 4

O problema que você terá aqui é o mesmo que o problema descrito na seção Como
estender o meu código? , mas dessa vez herança também não ajuda! A seção
seguinte explica no detalhe, mas a idéia é que você teria que criar uma
infinidade de classes herdeiras com código replicado para resolver o problema,
ou mudar nomes e assinaturas, e nada disso a gente pode fazer!
A idéia é ilustrar a vantagem de se usar composição !
"""
