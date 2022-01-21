# escrita
file = open("arquivo2.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo2.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo
