# Especificação de Caso de Uso: Editar carona

**Histórico da Revisão**


|**Data**|**Versão**|**Descrição**|**Autor**|
| :-: | :-: | :-: | :-: |
|17/07/2023|1.0|Criação|João Vítor|


## **Breve Descrição**
Este caso de uso é utilizado pelos motoristas para a edição de caronas e leva em consideração o escopo o qual essa ação afeta. A edição de caronas ocorre quando o motorista quer mudar alguns dados inseridos previamente na criação da carona.

### Atores
- Motorista que deseja editar uma carona;

### Condições Prévias
   1. O motorista precisa estar “logado” no sistema;
   2. A carona deve ter sido cadastrada.

### **Pós Condições**
   1. A carona agora exibe as novas informações inseridas em detrimento das anteriores.

### **Fluxo Básico de Eventos (FB)**
   1. O motorista clica em meu perfil;
   2. O sistema exibe todas as caronas criadas pelo motorista;
   3. O motorista navega entre suas caronas criadas e seleciona o botão de editar da respectiva carona que deseja editar (FA01);
   4. O sistema exibe um campo com as informações atuais da carona (RN01);
   5. O motorista altera os campos que deseja;
   6. O mostorista clica em "salvar";
   7. O sistema valida as informações inseridas (RN02) (FN01);
   8. O sistema atualiza a carona com as novas informações inseridas;
   9. O caso de uso se encerra (FA02).

### **Fluxo Alternativo (FA)**

#### **FA01 - Não criar mais carona**
   No passo 3 do fluxo básico, o motorista preenche os campos mas decide não editar mais essa carona e clica em "cancelar", nesse caso se retorna ao fluxo basico no passo 9.

#### **FA02 - Criar outra carona**
   No passo 9 do fluxo básico o motorista decide editar uma outra carona, nesse casdo ele retorna ao passo 1 do fluxo basico.

### **Fluxo de Exceção (FE)**

#### **FE01 - informações inseridas não estão no formato adequado**
Nesse caso as informações preenchidas pelo motorista não seguem o formato estabelecido em RN02, então o sistema exibe uma mensagem de erro para o motorista não permitindo ele avançar com a criação até que todos os dados estejam no formato adequado.

### **Regras de Negócio (RN)**

#### **RN01 - Campos exibidos**
os campos exibidos para serem preenchidos são:
- Quantidade de vagas;
- Origem da carona;
- Destino da carona;
- Data;
- Horário;
- Descrição;
- Modelo do carro;
- Cor do carro.

#### **RN02 -  validação dos compos preenchidos**
os campos exibidos deven ser preenchidos seguindo tais regras:
- Quantidade de vagas (numero de 1 a 4) (obrigatorio);
- Origem da carona (1 a 50 characteres) (obrigatorio);
- Destino da carona (1 a 50 characteres) (obrigatorio);
- Data (formato dd/mm/yyyy, deve ser uma data valida de acordo com o calendario gregoriano e não pode ser uma data anterior ao do dia em que se esta criando/editando a carona) (obrigatorio);
- Horario (formato hh:ss PM/AM, deve ser um horario valido) (opcional);
- Descrição (maximo de 200 characteres) (opcional);
- Modelo do carro (1 a 50 characteres) (obriagatorio);
- Cor do carro (1 a 20 characteres) (obrigatorio).


### **Pós-condições**
- A carona foi editada com sucesso;
- A carona deve estar com os dados atualizados.