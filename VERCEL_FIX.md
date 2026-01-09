# Vercel Auto-Deploy + SPA Routing + Sitemap Fix

## A) DIAGNÓSTICO: Por que Vercel não está fazendo deploy automático

### Status Atual:
- **Branch local:** `main`
- **Remote:** `https://github.com/celsors-enfs/SleepInTime.git`
- **Último commit local:** `75cab1c` (não foi pushado)
- **Último commit no origin/main:** `20e0dca`

### Problema Identificado:
O commit `75cab1c` está apenas local e não foi pushado para o GitHub. A Vercel só detecta commits que estão no GitHub.

### Solução: Restaurar Webhooks e Push

#### 1. Verificar Conexão Vercel-GitHub:
1. Acesse: https://vercel.com/dashboard
2. Vá em **Settings** → **Git**
3. Verifique se o repositório `celsors-enfs/SleepInTime` está conectado
4. Verifique se a branch `main` está selecionada para Production

#### 2. Reconectar se necessário:
1. Em **Settings** → **Git**, clique em **Disconnect** no repositório
2. Clique em **Add New...** → **GitHub**
3. Autorize e reconecte `celsors-enfs/SleepInTime`
4. Configure:
   - **Production Branch:** `main`
   - **Root Directory:** `.` (raiz)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

#### 3. Verificar Webhooks no GitHub:
1. Acesse: https://github.com/celsors-enfs/SleepInTime/settings/hooks
2. Procure por webhooks da Vercel
3. Se não existir, a Vercel criará automaticamente ao reconectar

#### 4. Push do commit pendente:
```bash
git push origin main
```

## B) CORREÇÃO: vercel.json

### Arquivo Corrigido:
O `vercel.json` foi atualizado para:
- Excluir `sitemap.xml` e `robots.txt` do rewrite SPA
- Excluir todos os arquivos com extensões conhecidas
- Adicionar headers corretos para XML e TXT

### Mudanças Aplicadas:
- Regex simplificada e mais confiável
- Headers garantem `Content-Type` correto
- Cache-Control configurado

## C) VALIDAÇÃO: Comandos de Teste

### Após o deploy, teste localmente:

```bash
# 1. Testar sitemap.xml (deve retornar XML com headers corretos)
curl -I https://sleepintime.com/sitemap.xml

# Deve mostrar:
# HTTP/2 200
# content-type: application/xml; charset=utf-8
# x-content-type-options: nosniff
# cache-control: public, max-age=3600, s-maxage=3600

# 2. Testar robots.txt (deve retornar TXT com headers corretos)
curl -I https://sleepintime.com/robots.txt

# Deve mostrar:
# HTTP/2 200
# content-type: text/plain; charset=utf-8
# cache-control: public, max-age=3600, s-maxage=3600

# 3. Verificar conteúdo do sitemap (deve ser XML válido)
curl https://sleepintime.com/sitemap.xml | head -20

# 4. Testar rota SPA (deve retornar HTML, não 404)
curl -I https://sleepintime.com/en

# Deve mostrar:
# HTTP/2 200
# content-type: text/html

# 5. Testar rota SPA aninhada (deve retornar HTML, não 404)
curl -I https://sleepintime.com/en/faq

# Deve mostrar:
# HTTP/2 200
# content-type: text/html
```

### Teste de Validação XML:
```bash
# Validar estrutura XML do sitemap
curl -s https://sleepintime.com/sitemap.xml | xmllint --noout -

# Se não tiver xmllint instalado:
curl -s https://sleepintime.com/sitemap.xml | grep -q "<?xml" && echo "XML válido" || echo "XML inválido"
```

## D) COMANDOS GIT FINAIS

```bash
# 1. Verificar status
git status

# 2. Adicionar mudanças
git add vercel.json

# 3. Commit (se necessário)
git commit -m "fix: improve vercel.json routing for sitemap and SPA"

# 4. Push para GitHub (dispara deploy automático na Vercel)
git push origin main
```

## E) VERIFICAÇÃO PÓS-DEPLOY

Após o push e deploy:

1. **Acesse no navegador:**
   - https://sleepintime.com/sitemap.xml (deve renderizar como XML)
   - https://sleepintime.com/robots.txt (deve mostrar texto)

2. **Verifique no DevTools (Network tab):**
   - `sitemap.xml` → Headers → `Content-Type: application/xml; charset=utf-8`
   - `robots.txt` → Headers → `Content-Type: text/plain; charset=utf-8`

3. **Teste rotas SPA:**
   - https://sleepintime.com/en (deve carregar)
   - https://sleepintime.com/es (deve carregar)
   - https://sleepintime.com/en/faq (deve carregar)
   - Recarregue a página (F5) - não deve dar 404

4. **Google Search Console:**
   - Envie o sitemap: https://sleepintime.com/sitemap.xml
   - Deve ser aceito sem erros



