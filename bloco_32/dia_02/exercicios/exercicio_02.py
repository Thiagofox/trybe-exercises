import random


WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3


def draw_secret_words(words):
    secret_words = random.choice(words)
    scrambled_word = "".join(random.sample(secret_words, len(secret_words)))
    return secret_words, scrambled_word


def collect_guesses():
    guesses = []
    for attemps in range(MAX_ATTEMPTS):
        guess = input("Guess the word:")
        guesses.append(guess)
    return guesses


def check_game_results(secret_words, guesses):
    if secret_words in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    secret_word, scrambled_word = draw_secret_words(WORDS)
    print(f"scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_results(secret_word, guesses)

"""
Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que o
usuário tenha que adivinhar uma palavra que será mostrada com as letras
embaralhadas. O programa terá uma lista de palavras e escolherá uma
aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
Ao final a palavra deve ser mostrada na tela, informando se o usuário
ganhou ou perdeu o jogo.
"""

""" Para embaralhar uma palavra faça:
scrambled_word = "".join(random.sample(word, len(word))) """

""" O sorteio de uma palavra aleatória pode ser feito utilizando
o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" . """
