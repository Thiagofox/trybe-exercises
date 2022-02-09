# Timeout =====================================================================
# =============================================================================
""" Ás vezes pedimos um recurso ao servidor, mas caso o nosso tráfego de rede
esteja lento ou tenha um problema interno do servidor, nossa resposta pode
demorar ou até mesmo ficar travada indefinidamente.
Como garantir, após um tempo, que o recurso seja retornado?  """
# =============================================================================


import requests

# Por 10 segundos não temos certeza se a requisição irá retornar
response = requests.get("https://httpbin.org/delay/10")
print(response)
