# Especificação de Caso de Uso: Criar carona


**Histórico da Revisão**


|**Data**|**Versão**|**Descrição**|**Autor**|
| :-: | :-: | :-: | :-: |
|17/07/2023|1.0|Criação|João Vítor|




## **Breve Descrição**
Este caso de uso é utilizado pelos motoristas para a criação de caronas e leva em consideração o escopo o qual essa ação afeta. A criação de caronas ocorre quando o motorista decide disponibilizar uma carona para outros.


### Atores
- Motorista que deseja criar uma carona;


### Condições Prévias
1. O motorista precisa estar “logado” no sistema.


### **Pós Condições**
1. Os passageiros agora serão capazes de solicitar e realizar a(s) carona(s) criada(s).


### **Fluxo Básico de Eventos (FB)**
1. O motorista seleciona a opção “criar carona”;
2. O sistema exibe os campos a serem preenchidos (RN01) (RN02)
3. O motorista preenche os campos
4. O motorista confirma a criação ao clicar em "Criar Carona"
5. O sistema valida as informações (RN02) (FE01)
6. A criação da carona é feito com sucesso e é inserida na página de caronas e na página do perfil do motorista
7. o caso de uso é encerrado


### **Fluxo Alternativo (FA)**


#### **FA01 - Não criar mais carona**
No passo 3 o motorista preenche os campos mas decide não criar mais essa carona e clica em "sair", nesse caso se retorna ao fluxo no passo 7


#### **FA01 - Criar outra carona**
No passo 6 o motorista decide criar uma nova carona e então ele retorna ao passo 1 do fluxo básico


### **Fluxo de Exceção (FE)**


#### **FE01 - informações inseridas não estão no formato adequado**
Nesse caso as informações preenchidas pelo motorista não seguem o formato estabelecido em RNF02, então o sistema exibe uma mensagem de erro para o motorista não permitindo ele avançar com a criação até que todos os dados estejam no formato adequado


#### **FE02 - motorista não cadastrado**
O motorista tenta criar uma carona mas ainda não possui cadastro no sistema, nesse caso ele será redirecionado para a pagina de cadastro


### **Regras de Negócio (RN)**


#### **RN01 - Campos exibidos **
os campos exibidos para serem preenchidos são:
- Quantidade de vagas
- Origem da carona
- Destino da carona
- Data
- Horário
- Descrição


#### **RN02 - validação dos compos preenchidos**
os campos exibidos devem ser preenchidos seguindo tais regras:
- Quantidade de vagas (número de 1 a 4) (obrigatório)
- Origem da carona (1 a 50 caracteres) (obrigatório)
- Destino da carona (1 a 50 caracteres) (obrigatório)
- Data (formato dd/mm/yyyy, deve ser uma data valida de acordo com o calendário gregoriano e não pode ser uma data anterior a do dia em que se está criando a carona) (obrigatório)
- Horário (formato hh:ss PM/AM, deve ser um horário válido) (opcional)
- Descrição (máximo de 200 caracteres) (opcional)




### **Pós-condições**
- A carona foi criada com sucesso
- A carona deve estar sendo exibida na página de caronas disponíveis
- A carona deve estar sendo exibida na página de perfil do motorista




### **Ponto de Extensão**


#### **Estender o caso de Uso: realizar cadastro como motorista**
Para se criar uma carona, deve ser realizado o cadastro como motorista
