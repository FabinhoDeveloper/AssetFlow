# 📌 AssetFlow

O projeto AssetFlow é uma aplicação web desenvolvida para o gerenciamento de Workspaces, setores, usuários e itens, com foco no controle de entrada e saída de itens dentro dos setores. 
Seu principal objetivo é facilitar a organização e o rastreamento de ativos, garantindo maior controle e eficiência na gestão de recursos.

## 📚 Tabela de Conteúdos
- [Sobre](#sobre)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Tecnologias](#tecnologias)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## 📖 Sobre
Este projeto foi desenvolvido para facilitar a organização e o controle de ativos dentro das organizações e seus setores. Ele permite que os usuários criem e gerenciem Workspaces (representando as organizações), 
administrem setores dentro dos Workspaces, gerenciem usuários em cada setor, e, o principal, controlarem a entrada e saída de itens dentro desses setores.

## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:
- Node.js `22.14.0`
- Git
- PostgreSQL `>17`

## 🔧 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/FabinhoDeveloper/AssetFlow.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   cd AssetFlow
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Configure o arquivo `.env` com as variáveis de ambiente necessárias.
   
- PORT: 8080
- DB_NAME: nome_banco_configurado
- DB_USERNAME: nome_usuario_configurado
- DB_PASSWORD: 'postgres'
- DB_HOST: 'localhost'

5. Crie um banco de dados local com o nome de sua preferência, e preencha as variáveis de ambiente:
  ```sh
    psql -U postgres
    CREATE DATABASE assetFlowDb; // Sugestão
   ```

6. Inicie a aplicação:
   ```sh
   npm run dev
   ```

## 📌 Uso

Acesse a aplicação em [http://localhost:8080](http://localhost:8080). 

### 🔹 Exemplo de requisição (se for API):

```sh
curl -X GET http://localhost:8080/usuario/listar
```

## 🛠 Tecnologias

- **Node.js** - Back-end
- **Express.js** - Framework para API
- **Sequelize** - ORM para banco de dados

## 🤝 Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📞 Contato

Criado por [Seu Nome](https://github.com/FabinhoDeveloper).
