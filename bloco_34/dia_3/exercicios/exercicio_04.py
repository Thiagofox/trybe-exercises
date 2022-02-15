"""
Exercício 4 Baseados em uma página contendo detalhes sobre um livro
http://books.toscrape.com/catalogue/the-grand-design_405/index.html ,
faça a extração dos campos título, preço, descrição e url contendo a
imagem de capa do livro.

O preço deve vir somente valores numéricos e ponto. Ex:
Â£13.76 -> 13.76 .

A descrição de ter o sufixo "more..." removido quando existir.
Os campos extraídos devem ser apresentados separados por
vírgula. Ex: título,preço,descrição,capa.
"""

import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(
    r"\d*\.\d{2}"
)

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")
import requests


has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(
        f"http://quotes.toscrape.com/api/quotes?page={page}"
    )
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
