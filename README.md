# Como Iniciar o Desafio:
- Via terminal, entre na pasta "server-client-01-jornadas"
- Rode o comando para instalar as dependências: npm install
- Rode o comando para iniciar o servidor Jornadas: npm run start
- Deixe esse terminal aberto enquanto faz o desafio
- Em outro terminal, entre na pasta "server-client-02-parceiro"
- Rode o comando para instalar as dependências: npm install
- Rode o comando para iniciar o servidor Parceiro: npm run start
- Deixe esse terminal aberto enquanto faz o desafio
- Abra a pasta "camel-apache-integrator" no Intellij, Eclipse ou no seu editor de códigos favoritos
- Instale as dependências maven
- Construa suas rotas livremente. O arquivo inicial é a classe Rotas.java
# Legendas:
- "Escala Jornadas": Servidor na porta 3000
- "Cliente Parceiro": Servidor na porta 3001
# Informações:
- Todos os dados serão retornando em formato JSON
- Todos os dados deverão ser enviados em formato JSON
- API Escala Jornadas:
  - Servidor: http://localhost:3000
  - Eventos de ausências: /api/v1/events
    - GET
  - Colaboradores: /api/v1/employees
    - POST
    - Payload: [{external_employee_id, employee_name, employee_birthday}, ...]
  - Horários de Trabalho: /api/v1/timetables
    - GET
  - Colaboradores V2: /api/v2/employees
    - POST
    - Payload: [{external_employee_id, employee_name, employee_birthday}, ...]
- API Cliente Parceiro:
  - Servidor: http://localhost:3001
  - Eventos de ausências: /api/ausencias
    - POST
    - Payload: [{data, tipo, id_externo_colaborador, nome_colaborador}, ...]
  - Colaboradores: /api/colaboradores
    - GET
# Objetivos:
## Nível 1:
1.  Resgatar todos os eventos de ausência na API Escala Jornadas, processar os dados para que todas as chaves que estão em inglês fiquem em português, utilizando a melhor estratégia. Uma dica é usar POJOs para representar os dados
2. Enviar todos os dados resgatados e processados anteriormente (1) para a API Cliente Parceiro e verificar se a resposta da API foi um sucesso ou um erro e printar essa resposta em forma de log no console
3. Resgatar todos os colaboradores na API Cliente Parceiro, processar os dados para que todas as chaves que estão em português fiquem em inglês, utilizando a melhor estratégia. Uma dica é usar POJOs oara representar os dados
4. Enviar todos os dados resgatados e processados anteriormente (3) para a API Escala Jornadas e
verificar se a resposta da API foi um sucesso ou um erro e printar essa resposta em forma
de log no console
## Nível 2:
1. Resgatar horários de trabalho na API Escala Jornadas, que estarão com erro proposital na estrutura dos dados.
2. Tratar essa exceção fazendo com que printe esse erro em log no console, sem quebrar a aplicação
## Nível 3:
1. Enviar todos os dados de colaboradores resgatados e processados no item 1.c para a API Escala Jornadas no endpoint v2 de colaboradores. Esse endpoint irá retornar um  erro 418 (I'm a teapot) a cada 2 chamadas, fazendo com que a terceira chamada consecutiva retorne sempre o status 200. Uma dica é usar uma estratégia de reenvio (redelivery) após um número X de exceções com alguns segundos de diferença entre uma e outra (backoff).