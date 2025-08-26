# Meu Site

Um projeto React moderno com Tailwind CSS e componentes UI customizados.

## 📋 Pré-requisitos

- Node.js (versão 18.x ou superior)
- NPM (instalado com Node.js)

## 🚀 Como executar o projeto

### 1. Instalação das dependências

```bash
npm install
```

### 2. Executar em modo de desenvolvimento

```bash
npm start
```

O projeto será executado em [http://localhost:3000](http://localhost:3000)

### 3. Outros comandos disponíveis

```bash
# Construir para produção
npm run build

# Executar testes
npm test

# Ejetar configuração (cuidado: operação irreversível)
npm run eject
```

## 📁 Estrutura do projeto

```
meu-site/
├── public/                 # Arquivos públicos
├── src/                   # Código fonte
│   ├── components/        # Componentes React
│   │   └── ui/           # Componentes de interface
│   ├── data/             # Dados mock
│   ├── hooks/            # Hooks customizados
│   └── lib/              # Utilitários
├── backend/              # Backend Python (separado)
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do Tailwind
└── postcss.config.js     # Configuração do PostCSS
```

## 🛠️ Tecnologias utilizadas

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **React Router** - Roteamento
- **Lucide React** - Ícones

## 🎨 Componentes UI

O projeto inclui uma biblioteca completa de componentes UI baseada no shadcn/ui:
- Botões, Cards, Dialogs
- Formulários e Inputs
- Navegação e Menus
- E muitos outros...

## 📝 Desenvolvimento

Este projeto foi reorganizado para usar:
- ✅ NPM (removido Yarn)
- ✅ React Scripts (removido CRACO)
- ✅ Estrutura simplificada (movido de /frontend para raiz)

## 🐛 Problemas conhecidos

Se encontrar problemas com dependências, execute:

```bash
npm install --legacy-peer-deps
```