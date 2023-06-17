# ROTAS API

# Rotas Raiz

GET

```shell
localhost:3000/
```

RESPONSE

```json
{
	"message": "UniBuddy"
}
```

&nbsp;

# Rota Usuarios

## Registro Usuario
&nbsp;

POST

```shell
localhost:3000/usuarios/registro
```

REQUEST

```json
{
    "nomeCompleto": "Leo",
    "email": "leo3@example.com",
    "telefone": "61999999999",
    "senha": "senha123"
}
```
&nbsp;
## Login Usuario
&nbsp;

POST

```shell
localhost:3000/usuarios/login
```

REQUEST

```json
{
    "email": "leo3@example.com",
    "senha": "senha123"
}
```

&nbsp;
## Redireciona para Whatsapp
&nbsp;

GET

```url
http://localhost:3000/usuarios/whatsapp/?telefone={numero}
```

RESPONSE

- Redireciona para a conversa no whatsapp

&nbsp;
# Rota Caronas

## Cadastro de Caronas (necessita de autenticação, token JWT)
&nbsp;

POST

```shell
localhost:3000/caronas/cadastrar
```

REQUEST

```json
{
    "vagas": 4,
    "origem": "UNB Gama",
    "destino": "Taguatinga Norte",
    "data": "22/03/2023",
    "horario": "17:50",
}
```

&nbsp;
## Deletar Carona (necessita de autenticação, token JWT)
&nbsp;

DELETE

```shell
localhost:3000/caronas/deletar/:idCarona
```

&nbsp;
## Busca Todas as Caronas
&nbsp;

GET

```shell
localhost:3000/caronas/vizualizar
```

RESPONSE

```json
{
	"caronas": [
		{
			"id": 1,
			"id_usuario": 1,
			"vagas": 4,
			"origem": "UNB Gama",
			"destino": "Taguatinga Norte",
			"data": "22/03/2023",
			"horario": "17:50",
			"createdAt": "2023-06-17T01:27:02.000Z",
			"updatedAt": "2023-06-17T01:27:02.000Z"
		}
	]
}
```

&nbsp;
## Solicita uma Carona (necessita de autenticação, token JWT)
&nbsp;

POST

```shell
localhost:3000/caronas/solicitar/:idCarona
```

&nbsp;
## Recusar Solicitação (necessita de autenticação, token JWT)
&nbsp;

POST

```shell
localhost:3000/caronas/recusar-solicitacao
```

REQUEST

```json
{
	"idCarona": 1,
	"idPassageiro": 3
}
```

&nbsp;
# Rota Notificação

## Busca Todas as Notificações do Usuário (necessita de autenticação, token JWT)
&nbsp;


GET

```shell
localhost:3000/notificacoes/buscar
```

RESPONSE

```json
{
	"notificacoes": [
		{
			"id": 1,
			"idDestinatario": 1,
			"conteudo": "Leo está interessado na sua carona",
			"status": false,
			"createdAt": "2023-06-17T01:35:13.000Z",
			"updatedAt": "2023-06-17T01:35:13.000Z"
		}
	]
}
```