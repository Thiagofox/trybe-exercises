# ==============================================================================
# Exercício 4
''' 
Agora iremos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:
Responder com um "Olá, client", logo quando estabelecer uma conexão.
Imprimir no console todo dado recebido.
Responder com os dados recebidos (como um eco).
Utilize a porta 8085.
Perceba que o servidor sozinho não faz nada. Ele precisa que alguém se conecte a ele, então para testá-lo você pode utilizar o comando telnet localhost 8085 , onde telnet é a aplicação que iremos utilizar, localhost é o local onde o servidor está (no caso, o seu próprio PC) e 8085 é a porta em que o servidor está escutando conexões.
Dicas:
a documentação do módulo traz exemplos de como instanciar seu servidor TCP
na mesma documentação, temos exemplos de classes para responder as requisições
os dados na requisição vêm em bytes -- não strings! bytes podem ser decodificados em string com a codificação correta
do mesmo jeito, para responder você pode precisar codificar strings em bytes
telnet sempre envia ASCII, já o netcat envia no encoding do sistema (em Linux, geralmente utf-8, mas confirme com o comando locale ) 
'''
# ==============================================================================


from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085


class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('ascii').strip())

if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()

''' 
Exercício 5: 
Utilizando o comando telnet ou o Netcat (nc):
Conecte no server do exercício anterior e envie informações, o server deverá imprimir as mensagens enviadas no console.
Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
'''
$ nc -t 127.0.0.1 8085

$ telnet 127.0.0.1 8085
'''
Após estabelecer a conexão, digite a mensagem e tecle enter para enviá-las.
Exercício 6 : Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP), perceba o que é exibido no console do server já que não estamos utilizando o HTTP nele, perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.
'''
$ curl localhost:8085
'''
Uma request mais legal:
'''
$ curl --request POST \
    --data "{ \"foo\": \"bar\" }" \
    --header 'Content-Type: application/json' \
    --header 'Foo-Bar-Header: foo-bar' \
    localhost:8085/foo-bar
'''
Exercício 7 : Agora iremos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver . Nosso servidor UDP deverá:
Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
Responder com os dados recebidos (como um eco).
Utilize a porta 8084.

todas as dicas do exercício 4 se aplicam
telnet não funciona com udp -- use netcat (ou nc)
'''

from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084


class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()


# Exercício 8 : Envie pacotes para o servidor UDP, utilizando o Netcat (nc). Em seguida pare o servidor e perceba que como não há conexão nada é sentido pelo client .

$ nc -u 127.0.0.1 8084

# Após executar o comando, digite a mensagem e tecle enter para enviá-las.

# Exercício 9 : Faça uma chamada ao server, utilizando o cURL . Lembre que além do HTTP o comando utiliza o protocolo TCP e não o UDP. Repare o que acontece.

$ curl localhost:8084

# Exercício 10 : Identifique o IP interno e externo da sua máquina.
# Para IP externo acesse algum site como o http://meuip.com.br/ ou execute:

$ curl ifconfig.me

# Para o interno, acesses as propriedades de rede através do seu sistema operacional ou busque o dado com o comando ip a (linux) ou ifconfig (mac)
# Exercício 11 : Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.
# Use os mesmos comandos do exercício 10.
