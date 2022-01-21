print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultado são", 6, 23, 42)  # saída: Os resultados são 6 23 42


# Podemos alterar o separador dos argumentos passados, que, por padrão, é um
# espaço em branco.

print("Maria", "João", "Miguel", "Ana")
# saída: Maria João Miguel Ana
print("Maria", "João", "Miguel", "Ana", sep=", ")
# saída: Maria, João, Miguel, Ana


# Além do separador, podemos também alterar o caractere de fim de linha
# que, por regra, é uma quebra de linha:

print("Em duas ")
print("linhas.")

# saida

# Em duas
# linhas.

print("Na mesma", end="")
print("linha.")

# Saída:

# Na mesma linha.

""" Em Python , podemos fazer interpolação de variáveis e expressões
utilizando f-string . Adicionamos um f antes das aspas e o valor de
saída entre chaves.

Essa dica é importante, pois é a maneira mais eficiente de
formatar strings. """

x = 5
y = 3
print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 2 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores,
# como nesse exemplo, duas casas decimais (.2f).
print(f"{x:.^5}")  # saída: "..5.."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos
