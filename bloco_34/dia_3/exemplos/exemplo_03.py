import requests

# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests

for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)


"""
Neste exemplo, após a décima requisição, o servidor começa a nos retornar
respostas com o código de status 429 , "Too Many Requests". Isto significa
que estamos utilizando uma taxa de solicitação maior que a suportada. Ele
permanecerá assim por algum tempo (1 minuto).

Uma boa prática é sempre colocarmos um uma pausa entre as requisições, ou
lote delas, mesmo que o website, onde a informação está, não faça o
bloqueio, assim evitamos tirar o site do ar.
"""
