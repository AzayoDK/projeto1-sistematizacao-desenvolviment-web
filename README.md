# 🏥 Clínica Vitalis - Landing Page

Esse projeto é um trabalho acadêmico da faculdade CEUB (Centro de Ensino Unificado de Brasília), orientado pelo professor Leonardo Reboucas De Carvalho. O objetivo é desenvolver uma aplicação web para uma clínica fictícia, seguindo os requisitos do Projeto 1. A aplicação consiste em uma landing page para a **Clínica Vitalis**, criada com **React** e **Material UI (MUI)**. O site possui um layout moderno, com um carrossel animado, seções de serviços, equipe, formulário de contato e navegação fluida.

> Projeto criado para fins acadêmicos e utilizado como portfólio pessoal.

---

## 🚀 Tecnologias utilizadas

- React
- Material UI (MUI)
- JavaScript (ES6+)
- CSS Flexbox/Grid
- HTML Semântico

---

## 🛠️ Como executar o projeto

### ✅ Pré-requisitos

- Node.js (recomenda-se a versão LTS)
- Git (opcional)
- Navegador moderno (Chrome, Firefox, Edge...)

---

### 💻 No Windows

1. Clone o repositório:
   ```bash
   git clone https://github.com/AzayoDK/projeto1-sistematizacao-desenvolviment-web.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. (Se necessário) Permitir execução de scripts no PowerShell:
   ```bash
   Set-ExecutionPolicy RemoteSigned
   ```
   > Executar esse comando somento se houver o erro: "npm : O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema."

4. Inicie o projeto:
   ```bash
   npm start
   ```
   
---

### 🐧No Linux (Ubunto 22.04)

1. Clone o repositório:
   ```bash
   git clone https://github.com/AzayoDK/projeto1-sistematizacao-desenvolviment-web.git
   ```
2. Instale as dependências com permissões elevadas:
   ```bash
   sudo npm install
   ```
3. Torne o script do React executável:
   ```bash
   chmod +x node_modules/.bin/react-scripts
   ```
4. Instale o utilitário xdg-utils (necessário para abrir o navegador automaticamente):
   ```bash
   sudo apt install xdg-utils
   ```
5. Inicie o projeto:
   ```bash
   npm start
   ```

---

### 🐋 No Docker

#### 🛠️ Pré-requisitos

- Docker instalado na sua máquina

#### 📦 Passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/AzayoDK/projeto1-sistematizacao-desenvolviment-web.git
   ```
2. Criar a imagem Docker:
   ```bash
   docker build -t projeto1 .
   ```
3. Rodar o container
   ```bash
   docker run -p 3000:80 projeto1
   ```
4. Entrando na aplicação:
   Entre no seu navegador e digite [http://localhost:3000](http://localhost:3000) para acessar a aplicação em execução.
