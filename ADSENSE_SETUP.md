# Google AdSense Setup Guide

## ✅ Implementação Completa

O Google AdSense foi implementado de forma segura e escalável no projeto SleepInTime.

## 📋 Configuração Necessária

### 1. Obter Publisher ID do Google AdSense

1. Acesse: https://www.google.com/adsense/
2. Faça login na sua conta AdSense
3. Vá em **Sites** → **AdSense code**
4. Copie o **Publisher ID** (formato: `ca-pub-XXXXXXXXXXXX`)

### 2. Configurar o Publisher ID

**Opção A: Substituir diretamente no código (não recomendado para produção)**

Edite `index.html` e substitua:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
```

**Opção B: Usar variável de ambiente (RECOMENDADO)**

1. Crie um arquivo `.env` na raiz do projeto:
```bash
VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXX
```

2. Adicione `.env` ao `.gitignore` (já deve estar lá)

3. No Vercel, adicione a variável de ambiente:
   - Dashboard Vercel → Settings → Environment Variables
   - Adicione: `VITE_ADSENSE_CLIENT` = `ca-pub-XXXXXXXXXXXX`

### 3. Obter Ad Slot IDs

Após aprovação no AdSense, você precisará criar unidades de anúncio e obter os **Ad Slot IDs**:

1. No AdSense, vá em **Ads** → **By ad unit**
2. Crie unidades de anúncio para cada página:
   - Homepage: `homepage-ad-1`
   - How It Works: `how-it-works-ad-1`
   - FAQ: `faq-ad-1`
   - Sleep Hygiene: `sleep-hygiene-ad-1`
   - About: `about-ad-1`

3. Substitua os valores de `slot` nos componentes:
   ```tsx
   <AdsenseAd slot="SEU_AD_SLOT_ID_AQUI" />
   ```

## 📍 Localização dos Anúncios

### ✅ Páginas com Anúncios:

1. **Home (`/en`, `/pt-br`, etc.)**
   - 1 anúncio abaixo da ferramenta e conteúdo editorial
   - Posicionado após todo o conteúdo principal

2. **How It Works (`/en/how-it-works`, etc.)**
   - 1 anúncio após todo o conteúdo
   - Abaixo da dobra (below the fold)

3. **FAQ (`/en/faq`, etc.)**
   - 1 anúncio após todas as perguntas
   - Abaixo da dobra

4. **Sleep Hygiene (`/en/sleep-hygiene`, etc.)**
   - 1 anúncio após todo o conteúdo
   - Abaixo da dobra

5. **About (`/en/about`, etc.)**
   - 1 anúncio após todo o conteúdo
   - Abaixo da dobra

### ❌ Páginas SEM anúncios:

- Nenhuma página vazia ou técnica tem anúncios
- Nenhum anúncio acima do conteúdo principal
- Nenhum anúncio colado em CTAs ou botões

## 🎨 Regras Visuais Implementadas

✅ **Espaçamento adequado**: 40px de margem vertical (mobile: 12px, desktop: 16px)  
✅ **Não parece botão**: Estilos CSS garantem que anúncios não se parecem com botões  
✅ **Abaixo da dobra**: Todos os anúncios estão após o conteúdo principal  
✅ **Responsivo**: Anúncios se adaptam a diferentes tamanhos de tela  
✅ **Sem interferência**: Anúncios não empurram conteúdo essencial

## 🔧 Componente AdsenseAd

O componente `AdsenseAd` foi criado com as seguintes características:

- ✅ Previne pushes duplicados
- ✅ Seguro para navegação SPA
- ✅ Fallback silencioso se AdSense não estiver carregado
- ✅ Suporte a diferentes formatos de anúncio
- ✅ Responsivo por padrão
- ✅ Não quebra SSR/SPA

### Uso:

```tsx
import { AdsenseAd } from '../components/AdsenseAd';

// Uso básico
<AdsenseAd slot="seu-ad-slot-id" />

// Com estilos customizados
<AdsenseAd 
  slot="seu-ad-slot-id" 
  className="my-custom-class"
  style={{ marginTop: '60px' }}
/>
```

## 🚀 Deploy

Após configurar o Publisher ID e Ad Slot IDs:

1. **Commit e push:**
   ```bash
   git add .
   git commit -m "feat: add Google AdSense integration with safe reusable component"
   git push origin main
   ```

2. **Verificar no Vercel:**
   - O deploy deve iniciar automaticamente
   - Aguarde 1-2 minutos
   - Verifique se o site está funcionando

3. **Testar anúncios:**
   - Acesse o site em produção
   - Verifique se os anúncios aparecem (pode levar alguns minutos)
   - Use o DevTools para verificar se não há erros no console

## ⚠️ Importante

- **NÃO** coloque anúncios em todas as páginas
- **NÃO** use auto-ads agressivos
- **NÃO** coloque anúncios acima do conteúdo
- **NÃO** misture anúncios com UI da ferramenta
- **NÃO** duplique o script do AdSense

## ✅ Checklist de Aprovação AdSense

Antes de solicitar aprovação, verifique:

- [ ] Publisher ID configurado corretamente
- [ ] Ad Slot IDs configurados em todas as páginas de conteúdo
- [ ] Anúncios aparecem apenas em páginas de conteúdo
- [ ] Nenhum anúncio acima do conteúdo principal
- [ ] Espaçamento adequado ao redor dos anúncios
- [ ] Site funciona corretamente em mobile e desktop
- [ ] Conteúdo original e de qualidade em todas as páginas
- [ ] Política de privacidade e termos de uso (se aplicável)
- [ ] Navegação clara e funcional
- [ ] SEO configurado corretamente (sitemap, robots.txt)

## 📞 Suporte

Se tiver problemas:

1. Verifique o console do navegador (F12) para erros
2. Verifique se o Publisher ID está correto
3. Verifique se os Ad Slot IDs estão corretos
4. Aguarde alguns minutos após o deploy (AdSense pode levar tempo para carregar)


