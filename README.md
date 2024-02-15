# Alterações

* Mudança na estrutura de pastas
  * Cada componente tem a sua própria pasta, para poder guardar junto o arquivo CSS e caso queira outros como teste, storybook etc
  * Foi agrupado de acordo com a hierarquia da tela. Componentes usados na lista de confirmados ficam dentro componentes da pasta `ConfirmedList`
  * Foi criado a pasta `Home` para caso o projeto tenham mais páginas cada página tem uma pasta separada para os seus componentes
  * Como os componentes do Header e Footer é esperado que sejam usados em toda aplicação ficaram em uma pasta separada chamada de `Partials`
  * Caso algum componente vá ser usado em múltiplas partes da aplicação uma boa sugestão é criar uma pasta `Shared`
  * O arquivo de estilos da página foi movido para a raiz da pasta `/components/Home`
* Quebra dos arquivos CSS por componente
  * Os arquivos CSS estavam pouco divididos sendo difícil saber de forma intuitiva onde estavam os estilos de um dado componente
  * Os arquivos CSS estavam bem longos dificultando navegar por eles
  * Foi criado um arquivo de estilo por componente e um para a página, assim eles ficam menores, mais específicos e mais fáceis de achar as classes
* Padronização dos nomes dos componente usando letra maíscula inicial e camel case
  * Por exemplo o `Header` e que o nome do arquivo era `header`, mas o nome do componente era `Header` foi padronizado para o nome da pasta seguir o nome do componente
* Movido todos as estilizações que estavam usando a tag `styles` para uma classe dentro de um arquivo CSS
* Foram feitas outras mudanças mais específicas, todo o código está comentando mostrando cada uma delas. Foi removido os seus comentários para não confundir o que era meu e o que era seu
