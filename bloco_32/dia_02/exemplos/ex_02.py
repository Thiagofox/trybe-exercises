def sum_values():
    numbers = input("Insira os numeros aqui separados por espaçõs:")

    array_numbers = numbers.split(" ")
    print(array_numbers)

    sum = 0
    for index in array_numbers:
        if not index.isdigit():
            print(f"Erro ao somar os valores - {index} nao é um dígito")
        else:
            sum = sum + int(index)

    print(f"A soma dos valores é: {sum}")


sum_values()
