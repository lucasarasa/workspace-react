# ⚛️ Workspace React

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Template inicial em **React + Vite**, configurado com **Tailwind CSS** e **ESLint**, pronto para servir como base em projetos frontend modernos.

---

## 📌 Objetivo

- Prover um **boilerplate** simples e funcional em React
- Facilitar a prototipação e aprendizado de frontend
- Servir como repositório base para novos projetos

---

## 🧱 Estrutura do Repositório

```
workspace-react/
├── public/                 # Arquivos estáticos (index.html, favicon etc.)
├── src/
│   ├── App.jsx             # Componente raiz
│   ├── main.jsx            # Ponto de entrada da aplicação
│   ├── index.css           # Estilos globais
│   └── components/         # Componentes reutilizáveis
├── .eslintrc.cjs           # Configuração ESLint
├── postcss.config.js       # Configuração PostCSS
├── tailwind.config.js      # Configuração Tailwind
├── vite.config.js          # Configuração Vite
├── package.json            # Dependências e scripts
└── README.md               # Este documento
```

---

## ⚙️ Tecnologias Utilizadas

- [React](https://react.dev/) — biblioteca para construção de interfaces
- [Vite](https://vitejs.dev/) — bundler rápido para desenvolvimento moderno
- [Tailwind CSS](https://tailwindcss.com/) — framework CSS utilitário
- [PostCSS](https://postcss.org/) — processamento de CSS
- [ESLint](https://eslint.org/) — linting e boas práticas de código

---

## ▶️ Como Rodar o Projeto

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (18+)
- npm ou yarn

### 📥 Instalação

```bash
# Clonar repositório
git clone https://github.com/lucasarasa/workspace-react.git

# Entrar no diretório
cd workspace-react

# Instalar dependências
npm install
# ou
yarn
```

### 🚀 Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

👉 O servidor rodará em [http://localhost:5173](http://localhost:5173)

### 🏗️ Build de Produção

```bash
npm run build
```

Gerará os arquivos otimizados em `/dist`.

---

## 📜 Scripts Disponíveis

| Comando           | Descrição                                    |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Executa em modo de desenvolvimento com HMR   |
| `npm run build`   | Gera build otimizado para produção           |
| `npm run preview` | Pré-visualiza a build de produção localmente |
| `npm run lint`    | Verifica estilo e erros de código            |

---

## 📂 Exemplo de Código

```jsx
function HelloWorld() {
  return <h1 className="text-2xl font-bold text-blue-600">Hello, React!</h1>;
}

export default HelloWorld;
```

---

## 👨‍💻 Autor

**Lucas Sarasa**  
🔗 [LinkedIn](https://www.linkedin.com/in/lucassarasa)  
🔗 [GitHub](https://github.com/lucasarasa)

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).
