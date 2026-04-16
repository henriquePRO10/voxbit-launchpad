# VoxBit Launchpad

Landing page institucional da VoxBit Solucoes, desenvolvida com foco em performance, SEO e conversao.

## Visao geral

- Framework: Next.js 14 (App Router)
- UI: React 18 + Tailwind CSS + componentes shadcn/ui
- Animacoes: Framer Motion
- Qualidade: ESLint + Vitest
- Deploy: Vercel

Site principal: https://voxbitsolucoes.com.br

## Requisitos

- Node.js 20+
- pnpm 10+

## Como rodar localmente

```bash
pnpm install
pnpm dev
```

App disponivel em:

- http://localhost:3000

## Scripts

- `pnpm dev`: inicia ambiente de desenvolvimento
- `pnpm build`: gera build de producao
- `pnpm start`: sobe aplicacao em modo producao
- `pnpm lint`: executa lint
- `pnpm test`: executa testes uma vez
- `pnpm test:watch`: executa testes em modo watch

## Estrutura do projeto

```text
app/
	layout.tsx        # metadata SEO, fontes, schema.org e Analytics
	page.tsx          # entrada da pagina principal
	sitemap.ts        # sitemap dinamico
	not-found.tsx     # pagina 404

src/
	views/
		HomePage.tsx    # composicao das secoes da landing
	components/
		HeroSection.tsx
		ServicesSection.tsx
		AboutSection.tsx
		CtaSection.tsx
		Footer.tsx
		Navbar.tsx
	test/
		setup.ts
		example.test.ts

public/
	robots.txt
	*.webp
```

## Conteudo e personalizacao

Os principais textos da landing ficam nos componentes em `src/components`.

- Hero: `src/components/HeroSection.tsx`
- Servicos: `src/components/ServicesSection.tsx`
- Sobre: `src/components/AboutSection.tsx`
- CTA/Contato: `src/components/CtaSection.tsx`
- Navegacao e ancora: `src/components/Navbar.tsx`

## SEO e metadados

O projeto ja vem com base de SEO configurada:

- Metadata e Open Graph em `app/layout.tsx`
- Structured Data (JSON-LD) de LocalBusiness em `app/layout.tsx`
- Sitemap em `app/sitemap.ts`
- Robots em `public/robots.txt`

Opcional para producao:

- Defina `NEXT_PUBLIC_SITE_URL` para controlar URLs canonicas do sitemap.

## Deploy

Configuracao pronta para Vercel em `vercel.json`:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Framework: `nextjs`

## Contato comercial

- Email: voxbitinformatica@gmail.com
- WhatsApp: https://wa.me/5566999366419

---

Se quiser, posso adicionar no README uma secao de checklist de publicacao (SEO, performance, analytics, validacao mobile e revisao de copy) para padronizar cada release.
