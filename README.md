# Souk — página em construção

Site estático responsivo da Souk. Entrega de 21 de outubro de 2026.

## Conteúdo

- `index.html`: textos e estrutura da página.
- `style.css`: identidade visual e versões de celular e desktop.
- `motion.js`: animações, respeitando a preferência do dispositivo por movimento reduzido.
- `assets/`: logos, fontes locais e licença da fonte Inter.

## Publicação

Publique os arquivos desta pasta em uma hospedagem de sites estáticos. O arquivo `index.html` deve ficar na raiz da pasta pública. Preserve a subpasta `assets/`.

Não há instalação de pacotes, etapa de compilação, banco de dados, API ou login de visitante. Todos os elementos visuais estão incluídos. O único destino externo é o botão do WhatsApp.

O domínio e o HTTPS devem ser configurados na hospedagem escolhida. Colocar o código neste repositório, por si só, não altera o endereço do site.

## Manutenção

O texto da headline é compartilhado entre celular e desktop. Ao alterá-lo em `index.html`, atualize também o `aria-label` do título e a descrição da página. O link do botão está no mesmo arquivo e aponta para o WhatsApp comercial da Souk: +55 41 98834-9172.

O muro aparece na lateral do desktop e como uma animação no rodapé do celular. A assinatura do rodapé é `© 2026 Souk. Todos os direitos reservados.`

Mantenha as mudanças sincronizadas com a hospedagem usada em produção. Este repositório é uma cópia de entrega; não há sincronização automática com a hospedagem atual.

## Visualização local

Abra `index.html` no navegador ou sirva esta pasta com um servidor HTTP estático. Antes de publicar mudanças, confira uma tela larga e uma tela de celular e teste o destino do botão.
