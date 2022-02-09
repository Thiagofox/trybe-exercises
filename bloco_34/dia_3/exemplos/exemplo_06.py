"""
Podemos definir um tempo limite (timeout) para que, após este tempo, possamos
tomar alguma atitude como por exemplo, realizar uma nova tentativa.
Este tempo limite normalmente é definido através de experimentações e
análise do tempo de resposta normal de uma requisição.
"""
import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
