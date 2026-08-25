# AJ Digital — site institucional

Site da agência em React + Vite, publicado no Netlify em
[ajdigital.dev.br](https://ajdigital.dev.br).

## Comandos

```bash
npm install
npm run dev      # servidor local em http://localhost:5173
npm run build    # gera sitemap.xml/robots.txt e compila para dist/
npm run images   # converte os PNG de public/ para WebP + gera a og-image
```

## Imagens

Os prints dos projetos ficam em `public/` como PNG. Depois de adicionar um print
novo, rode `npm run images`: o script gera o `.webp` otimizado (máx. 1280px) que
o site realmente usa e regenera a `og-image.jpg`. Em `src/data/projects.js` o
campo `image` aponta sempre para o `.webp`.

## SEO

- `src/data/seo.js` — título, descrição e caminho de cada rota, em um lugar só.
- `src/components/Seo.jsx` — aplica título, descrição, canonical e as tags de
  preview de link (Open Graph / Twitter) conforme a rota.
- `scripts/generate-sitemap.mjs` — roda dentro do `npm run build` e gera
  `public/sitemap.xml` e `public/robots.txt` a partir das rotas e dos projetos.

Depois de publicar, cadastrar o site no
[Google Search Console](https://search.google.com/search-console) e enviar
`https://ajdigital.dev.br/sitemap.xml`.

## Formulário de contato

Ao enviar, o formulário abre o WhatsApp com a mensagem já montada a partir dos
campos — a conversa começa organizada, sem backend.

Em paralelo, o mesmo conteúdo é registrado no
[Netlify Forms](https://docs.netlify.com/forms/setup/) como cópia de segurança,
para o contato não se perder se a pessoa desistir de apertar enviar no WhatsApp.

- Campos obrigatórios: nome, WhatsApp, tipo de projeto e descrição (mínimo de
  caracteres em `MIN_MENSAGEM`, em `src/lib/validation.js`). Empresa e email são
  opcionais — o email, se preenchido, é validado.
- As regras de validação ficam em `src/lib/validation.js` (máscara de telefone,
  lista de DDDs válidos, formato de email), separadas da interface.
- O formulário estático escondido em `index.html` é o que o Netlify detecta no
  build. Campo novo precisa ser adicionado nele **e** em
  `src/components/ContactForm.jsx`.
- Em ambiente local o registro no Netlify falha em silêncio (o endpoint só
  existe em produção). A abertura do WhatsApp funciona normalmente.
- Para receber os registros por e-mail: Netlify → Forms → Form notifications.

## Medição (GA4)

Nada é carregado sem a variável `VITE_GA_ID` (ver `.env.example`). Com ela
configurada em Netlify → Site settings → Environment variables, o site envia:

- `page_view` a cada troca de rota;
- `click_whatsapp`, `click_email`, `click_instagram` e `click_demo_projeto`,
  cada um com a página e o texto do botão de origem — dá para ver qual CTA
  gera conversa.
