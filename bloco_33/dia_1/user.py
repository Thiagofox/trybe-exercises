class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


"""
No Python, a palavra reservada class é usada, como você talvez imagine,
para definir entidades. Não uma entidade específica, uma pessoa específica,
mas a entidade de uma forma um pouco mais abstrata, como vimos acima.
"Uma entidade user contém um nome, um email e uma senha". É isso que fizemos
aí em cima. Para, a partir dessa definição, criarmos uma entidade,
precisamos do código abaixo:
"""

meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)

"""
Veja só! Você criou uma variável que contém... a entidade! Temos nela os
valores, os dados daquela entidade. Já vimos variáveis que são números,
que são strings, que são montes de coisas... Pois é! Nossa variável é uma
entidade. Só vamos usar o nome que é dado a tais entidades. Nossa variável
é um... Objeto!
"""

"""
Toda classe capaz de criar objetos deve possuir um método construtor, que
será chamado quando o objeto estiver sendo criado. No caso de Python, o
método construtor é, sempre, definido com o nome __init__ no topo da classe
que se está criando. Por trás dos panos, o Python utilizará a sua lógica
para criar e retornar um objeto para você ou quem for. Ou seja:
"""


class User:
    def __init__(self, name, email, password):
        """Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password


# Para invocar o método construtor, a sintaxe é
# NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")

# A variável `meu_user` contém o objeto criado pelo construtor da classe User!

"""
Muita calma nessa hora, sintaxe nova é sempre confusa de se absorver. Vamos
para um segundo exemplo para elucidar as coisas. Já criamos nossa primeira
entidade, agora vamos codar a nossa ação de enviar emails!
"""

# ==========================================================================================

"""
Bem! Se temos uma entidade User que quer enviar emails de recuperação de senha,
em princípio faz sentido que essa entidade saiba enviar emails, certo? Então
bora lá! Para uma entidade saber fazer algo, precisamos definir nela uma função
que represente essa ação. Algo assim:
"""


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print("Envia email de reset de senha")


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()

"""
Se definimos numa classe uma função, podemos chamar ela a partir do objeto que
criamos! Quando pedimos para um objeto fazer algo, dizemos que estamos enviando
uma mensagem àquele objeto . Atenção para isso! Na essência, toda lógica da
orientação a objetos parte do envio de mensagens entre objetos.
"""


"""
Na Programação Orientada a Objeto muitas coisas tem nome, e é importante
sabermos quais são, são jargões importantes para uma boa comunicação no
mercado! Vamos parar para resumir tudo o que aprendemos até agora, e dar
os nomes ao que fizemos.

    Classe : Entidade "geral" que definimos com base no problema que queremos
    resolver.

    Objeto : Entidade "específica", criada a partir das regras definidas pela
    entidade "geral". Pense que a classe é o molde e o objeto a escultura
    que o molde faz!

    Instância : esse é novo! Sabe quando criamos um objeto a partir de uma
    classe! Então! Dizemos que esse objeto é uma instância dessa classe! Ou,
    também, dizemos que a classe instanciou um objeto!

    Atributo : outro novo! Um atributo é uma informação de uma instância que
    você criou. O nome de um User, por exemplo.

    Mensagem : Forma com que objetos interagem - chamando funções uns dos
    outros. Um chamado como esse é um envio de mensagem a outro objeto.
    "User, resete sua senha!"

    Abstração : Pilar da Programação Orientada a Objetos. Se refere a sempre
    criar entidades que farão as ações que resolverão seu problema.

    Encapsulamento : Pilar da Programação Orientada a Objetos. Se refere a
    poder instanciar uma entidade e enviar mensagens a ela sem saber como
    ela funciona por dentro
"""

# ==========================================================================================

# import smtplib
# import ssl


class User:
    def __init__(self, name, email, password, from_email, from_password):
        self.name = name
        self.email = email
        self.password = password
        self.from_email = from_email
        self.from_password = from_password

    def reset_password(self):
        """Só com isso a função não irá funcionar! O email em
        questão não existe e costuma ser necessário configurar
        permissões no servidor de email para o envio ocorrer. Se
        quiser, explore isso como exercício bônus! (Por segurança,
        crie uma nova conta de e-mail para testar).
        Por hora, basta entender a lógica aqui!"""

        subject = "Reset your password"
        message = "Instruções para resetar a senha, com o link de resetar"
        body = f"Subject:{subject}\n\n{message}".encode("utf-8")
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User(
    "Valentino Trocatapa",
    "valentino@tinytoons.com",
    "Grana",
    "password_reset@teste.com",
    "myverysafepassword",
)
meu_user.reset_password()

"""
Leia o código do final. Estamos criando uma entidade (aliás, estamos
instânciando um objeto!) User . Para criá-la, estamos passando seu nome, email,
senha e... o email de envio de reset de senha e a senha desse email. Se
tivermos mil users teremos sempre o mesmo email de reset e a mesma senha!
Note como o construtor de User está lotado de atribuições! E cada instância que
criarmos vai ter uma cópia das informações do enviador de emails. Pra quê? Pra
nada. Não precisamos disso.

Bora arrumar o código então?
Lembre-se do primeiro pilar de POO, a Abstração ! Se uma lógica parece não
pertencer a uma entidade, extraia-a para uma outra entidade, ou para uma
entidade nova! Sempre comece por aí para organizar o seu código. No nosso
caso, que tal criamos um enviador de emails? O nome faz sentido, não faz?
O nome mais literal possível que podemos dar para uma entidade que envia
emails é Enviador de Emails . Em inglês, Mailer . Então é esse o nome que
daremos. Bom!
"""

# ...


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email  # Email de origem
        self.from_password = from_password  # Senha do email de origem
        self.to_email = to_email  # Email a receber a mensagem


# ...

"""
Beleza! Temos duas de nossas entidades, as classes User e Mailer.
Mas pense conosco. Que leitura faz mais sentido?
"""

# import smtplib
# import ssl


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer(
            "password_reset@teste.com", "myverysafepassword", self.email
        )
        meu_mailer.send_email(
            "Reset your password",
            "Instruções para resetar a senha, com o link de resetar",
        )


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}".encode("utf-8")
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()
