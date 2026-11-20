# Ofício Barbearia

Landing page responsiva para uma barbearia, criada como projeto de demonstração. O site apresenta a marca, os serviços, preços, informações de localização e uma chamada para agendamento.

🔗 **Repositório:** [Site profissional para uma barbearia](https://github.com/muriloo00/Site-profissional-para-uma-barbearia)

## Tecnologias

- React
- Vite
- JavaScript
- CSS

## Executar localmente

Você precisa ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

   ```bash
   git clone https://github.com/muriloo00/Site-profissional-para-uma-barbearia.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Site-profissional-para-uma-barbearia
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run build` | Gera a versão de produção na pasta `dist`. |
| `npm run preview` | Abre uma prévia local da versão de produção. |
| `npm run lint` | Analisa o código com ESLint. |

## Seções do site

- Apresentação da barbearia
- Sobre a experiência e diferenciais
- Lista de serviços e preços
- Chamada para agendamento
- Endereço e horários

## Personalização

O conteúdo e a lista de serviços ficam em `src/App.jsx`. Os estilos e os ajustes para celular ficam em `src/App.css`; as configurações globais estão em `src/index.css`.

Antes de usar o site para uma barbearia real, atualize o nome, os serviços, preços, endereço, horários e informações de contato. Os dados exibidos atualmente são demonstrativos. O botão de WhatsApp precisa receber o número de telefone da barbearia para abrir uma conversa.

O projeto carrega fontes do Google Fonts e uma imagem do Unsplash, então esses elementos dependem de conexão com a internet.
