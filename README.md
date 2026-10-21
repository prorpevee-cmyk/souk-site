# Souk — página em construção

Site estático responsivo da Souk. Entrega de 21 de outubro de 2026.

## Conteúdo

- `index.html`: textos e estrutura da página.
- `style.css`: identidade visual e versões de celular e desktop.
- `motion.js`: animações, respeitando a preferência do dispositivo por movimento reduzido.
- `assets/`: logos, fontes locais e licença da fonte Inter.

## Publicação

O repositório público `prorpevee-cmyk/souk-site` usa GitHub Pages para a prévia de aprovação. Em **Settings → Pages**, a origem é **Deploy from a branch**, branch **main**, pasta **/ (root)**. Alterações salvas em `main` iniciam uma nova publicação; acompanhe o resultado na aba **Actions**.

Não há instalação de pacotes, etapa de compilação, banco de dados, API ou login de visitante. Todos os elementos visuais estão incluídos. O único destino externo é o botão do WhatsApp.

O domínio do cliente será configurado depois da aprovação. A prévia usa o domínio padrão do GitHub Pages com HTTPS. Para migrar para outra hospedagem estática, mantenha `index.html` na raiz da pasta pública e preserve a subpasta `assets/`.

## Manutenção

O texto da headline é compartilhado entre celular e desktop. Ao alterá-lo em `index.html`, atualize também o `aria-label` do título e a descrição da página. O link do botão está no mesmo arquivo e aponta para o WhatsApp comercial da Souk: +55 41 98834-9172.

O muro aparece na lateral do desktop e como uma animação no rodapé do celular. A assinatura do rodapé é `© 2026 Souk. Todos os direitos reservados.`

O GitHub Pages acompanha este repositório. A versão anterior hospedada no Sites é independente: não há sincronização automática entre Sites e GitHub.

## Visualização local

Abra `index.html` no navegador ou sirva esta pasta com um servidor HTTP estático. Antes de publicar mudanças, confira uma tela larga e uma tela de celular e teste o destino do botão.
