# Especificação de Caso de Uso: Cadastro de motorista


**Histórico da Revisão**


|**Data**|**Versão**|**Descrição**|**Autor**|
| :-: | :-: | :-: | :-: |
|17/07/2023|1.0|Criação|João Vítor|




## **Breve Descrição**
Este caso de uso é utilizado pelos usuários para o cadastro de motorista e leva em consideração o escopo o qual essa ação afeta. O cadastro de motorista ocorre quando o motorista decide criar uma conta.


### Atores
- motorista que decide criar uma conta.


### Condições Prévias
- motorista deve ter um email.


### **Pós Condições**
- motorista agora possui uma conta.


### **Fluxo Básico de Eventos (FB)**
1. O motorista seleciona a opção “entrar”;
2. O sistema exibe a página de login;
3. O motorista seleciona a opção “registrar” (FA01);
4. O sistema exibe os campos a serem preenchidos (RN01) (RN02);
5. O motorista preenche os campos (FA01);
6. O motorista confirma a criação ao clicar em "Registrar";
7. O sistema valida as informações (RN02) (FE01) (FE02);
8. A criação da conta é feito com suceeso e agora permite o motorista a entrar na conta e solicitar caronas (FA02);
9. o caso de uso é encerrado.


### **Fluxo Alternativo (FA)**


#### **FA01 - Não criar mais conta**
No passo 3 do fluxo básico, o motorista preenche os campos mas decide não criar mais essa conta e clica em "sair", nesse caso se retorna ao fluxo básico no passo 9.


#### **FA02 - Criar outra conta**
No passo 8 do fluxo básico, o motorista decide criar uma nova conta e então ele retorna ao passo 1 do fluxo básico.


### **Fluxo de Exceção (FE)**


#### **FE01 - informações inseridas não estão no formato adequado**
Nesse caso, as informações preenchidas pelo motorista não seguem o formato estabelecido em RN02, então o sistema exibe uma mensagem de erro para o motorista não permitindo ele avançar com a criação até que todos os dados estejam no formato adequado.


#### **FE02 - motorista já cadastrado**
O motorista tenta criar uma conta mas já possui cadastro no sistema.


### **Regras de Negócio (RN)**


#### **RN01 - Campos exibidos**
os campos exibidos para serem preenchidos são:
- Nome;
- Email;
- Telefone;
- Modelo do carro/transporte;
- Cor do carro/transporte;
- Senha;
- Confirmar senha.


#### **RN02 - validação dos campos preenchidos**
os campos exibidos devem ser preenchidos seguindo tais regras:
- Nome (máximo de 100 caracteres) (obrigatório);
- Email (formato de acordo com IETF) (obrigatório);
- Telefone (Obrigatório);
- Modelo do carro/transporte (máximo de 100 caracteres) (opcional);
- Cor do carro/transporte (máximo de 100 caracteres) (opcional);
- Senha (máximo 100 caracteres) (obrigatório);
- Confirmar senha (deve ser idêntico à senha).




### **Pós-condições**
- A conta foi criada com sucesso;
- Agora o(a) motorista(a) pode entrar na sua conta, criar caronas, etc.