# João Gabriel Vaz — Portfólio

Portfólio pessoal em Next.js App Router, React, Tailwind CSS 4 e Framer Motion.

## Começar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador. Para gerar a versão de produção, use `npm run build` e depois `npm run start`.

## Estrutura

- `app/layout.tsx`: idioma, metadados e estilos globais.
- `app/page.tsx`: entrada da página inicial.
- `app/components/portfolio.tsx`: seções e conteúdo do portfólio.
- `app/components/motion.tsx`: componentes reutilizáveis de revelação.
- `app/globals.css`: tema, tipografia, efeitos e acessibilidade de movimento.
- `public/curriculo.pdf`: currículo servido pelo botão de download.
- `public/eu.jpeg`: foto de perfil exibida na seção Sobre.

As capas usam as logos dos repositórios indicados e o ícone HeartPulse para o Portal SUS. As imagens remotas estão configuradas em `app/components/portfolio.tsx`.
