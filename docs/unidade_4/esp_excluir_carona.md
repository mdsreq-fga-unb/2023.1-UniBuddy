# Especificação de Caso de Uso: Excluir carona

**Histórico da Revisão**


|**Data**|**Versão**|**Descrição**|**Autor**|
| :-: | :-: | :-: | :-: |
|13/07/2023|1.0|Adicionando caso de uso no documento|Pedro Henrique|
|15/07/2023|1.1|Alterações no fluxo básico e em outros e adição de novas regras de negócios|Pedro Henrique|


## **Breve Descrição**
Este caso de uso é utilizado pelos motoristas para deletar caronas que foram criadas previamente e leva em consideração o escopo o qual essa remoção afeta. A exclusão de  caronas ocorre quando o motorista se torna incapaz de realizá-las.

### Atores
- Motorista que deseja excluir uma carona por não conseguir realizá-la;
- Passageiro que combinou uma carona com um motorista e acaba tendo que não realizar mais caronas com o mesmo.

### Condições Prévias
   1. O motorista precisa estar “logado” no sistema.

### **Pós Condições**
   1. O passageiro não será capaz de realizar e nem solicitar  a(s) carona(s) excluída(s).

### **Fluxo Básico de Eventos (FB)**
   1. O motorista seleciona a opção “minhas caronas”;
   1. O sistema exibe a lista de caronas criadas (RN01)(FE01)(FA01);
   1. O motorista seleciona uma carona desejada (RN02);
   1. O sistema exibe o passageiro, o horário, data e local de encontro da carona selecionada (RN02);
   1. O sistema verifica se a carona já foi solicitada por um passageiro e aceita pelo motorista (FA02)(RN02);
   1. O motorista confirma deletar a carona (FE02);
   1. O sistema deleta a carona (RN04);
   1. O caso de uso é encerrado.


### **Fluxo Alternativo (FA)**

#### **FA01 - Criar carona**

1. O sistema exibe que não há caronas criadas;
1. O sistema exibe uma opção de criar caronas;
1. O motorista escolhe a opção que o sistema exibe para criar uma ou mais caronas;
1. O caso de uso é encerrado e o caso de uso de criar caronas é iniciado;

#### **FA02 -  Enviar mensagem com explicação sobre a exclusão da carona**
   1. O sistema indica que o motorista preencha uma mensagem obrigatória para o passageiro;
   1. O motorista escreve uma mensagem explicando sobre a exclusão da carona (RN03);
   1. O motorista confirma deletar a carona (FE02);
   1. O sistema deleta a carona (RN04);
   1. O sistema notifica o passageiro sobre a exclusão da carona junto com a mensagem do motorista;
   1. O caso de uso é encerrado.


### **Fluxo de Exceção (FE)**

#### **FE01 - Não existem caronas criadas**
   No passo 2 do fluxo básico, caso não existam caronas para serem selecionadas, o sistema deve emitir a mensagem “Não existem caronas criadas”. E, o caso de uso retorna ao passo 2 do fluxo básico.

#### **FE02 - A exclusão não é confirmada**
No passo 6 do fluxo básico e 3 do fluxo alternativo FA02, caso o motorista escolha não confirmar a exclusão da carona, o sistema deve direcioná-lo para a lista de caronas e assim o caso de uso voltará para o passo 5.2 do fluxo básico.

### **Regras de Negócio (RN)**
 
 #### **RN01 - Validação da lista de caronas** 
No passo 2 do fluxo básico, a lista de caronas depende da existência de caronas, então é preciso que o usuário motorista tenha realizado o cadastro de uma ou mais caronas previamente.

 #### **RN02 -  Verificação de informações das caronas**
No passo 4 do fluxo básico, o sistema deve verificar se as informações listadas coincidem com a carona selecionada no passo 3 e  no passo 5 verifica se a carona apresenta um passageiro que a solicitou anteriormente.

 #### **RN03 -  Mensagem obrigatória**
No passo 2 do fluxo alternativo, para que o sistema envie a mensagem para o passageiro, as informações passadas não podem ser nulas.

#### **RN04 -  Alteração no banco de dados**
no passo 7 do fluxo básico e 4 do fluxo alternativo FA02, o sistema deve excluir do banco de dados a carona selecionada.

### **Pós-condições**
   1. O sistema não vai apresentar mais o registro das caronas que foram deletadas no fluxo básico.


### **Ponto de Extensão**

#### **Estender o caso de Uso: Criar Carona**
No passo 4 do fluxo alternativo FA01 deve ser estendido o caso de uso “Criar Carona”, com o objetivo de adicionar caronas na lista de caronas para que se tenha a possibilidade de excluí-la.