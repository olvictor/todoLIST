# todoLIST

### Sobre o projeto
O projeto tem como objetivo criar uma aplicação web  para ajudar os usuários a gerenciar suas tarefas diárias de forma eficiente.

### Funcionalidades do projeto 💬
<ul>
Adicionar novas tarefas à lista.
<br>
Marcar tarefas como concluídas.
<br>
Remover tarefas da lista.
<br>
Filtrar tarefas por status (concluídas/pendentes).
<br>
</ul>

### Tecnlogias Utilizadas
<img aling="center" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript"/>
<img aling="center" src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite"/>
<img aling="center" src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" alt="framer-motion"/>

### Armazenamento	:receipt:
O armazenamento do projeto é feito em um **[Banco de dados](https://github.com/olvictor/backend-todolist)** criado em JSON utlizando nodeJS. 


### Como Utilizar o projeto :desktop_computer:

[Faça o Download](https://github.com/olvictor/backend-todolist) do backend para que as tarefas possam ser adicionadas e armazenadas.
  <ul>
    Executar o projeto do backend e iniciar utilizando o comando npm install.
    <br>
    Utilizar o comando npm run dev para iniciar o projeto.
    <br>
    <br>
     <img src="https://i.imgur.com/25hjnJu.png" width="200" /> 
    <br>
    <br>

    Para fazer a requisição de todas as tarefas é preciso usa o método 'GET' na rota localhost:8000/todos
    
    Para adicionar uma nova tarefa basta usar o método 'POST' na rota localhost:8000/todos, sendo necessário enviar body da requisição o id, todo, done.
    
    Para deletar uma tarefa basta usar o método 'DELETE', na rota localhost:8000/todos/:id, passando o ID da tarefa que deseja deletar como parâmetro de rota .

    Para alterar o status 'check' do input basta usar o método put na rota localhost:8000/todos/:id/checked, passando o ID da tarefa que deseja alterar o status como parâmetro de rota e enviando no corpo da requisição o novo status e a tarefa.
  </ul>

[Faça o Download](https://github.com/olvictor/todolist) do frontend.

<ul>
   Execute o projeto e instale as dependências utilizando o npm install.
  <br>
  <br>
   Utilizar o comando npm run dev para iniciar o projeto.
  <br>
  <br>
   <img src="https://i.imgur.com/o3si5tH.png" width="200" /> 
  <br>
  <br>
  Agora basta acessar o link: localhost:5173 e utilizar o site !
  <br>
  <br>
  <img src="https://i.imgur.com/iu9V0VY.png" width="600" /> 
  
</ul>
