---
layout: post
title: "Você realmente precisa do Underscore?"
description: ""
language: "pt-br"
---

#Você realmente precisa do Underscore?

Atualmente, bibliotecas utéis como [Underscore](http://underscorejs.org/) e [Lodash](https://lodash.com/) encontraram seu lugar reservado na caixa de ferramentas básicas de muitos desenvolvedores javascripts.

Enquanto essas bibliotecas deixam o desenvolvimento mais fácil, elas não necessariamente deixam o código simples ou fácil de entender. As pessoas que estão desenvolvendo no mesmo código, são obrigadas a conhecer a biblioteca que está sendo usada.

Bibliotecas vem e vão, e todo desenvolvedor tem a sua favorita. Mas sempre acabam se perguntando, qual é a ordem de argumentos que essa função recebe, ou qual biblioteca é essa mesmo, seré que é underscore, será lodash ou talvez ramda, ou qualquer abstração que tiver hoje em dia.

<!-- more -->

Quando se desenvolve um código simples que usa funções da biblioteca padrão, é muito mais fácil para o futuro desenvolvedor que for manter aquele código (que provavelmente vai ser você mesmo) entender.

É muito mais fácil refatorar um código verboso com algumas abstrações do que um código conciso com abstrações incorretas. Quando você começa a ver padrões em seu codigo repetido várias e várias vezes, é hora de abstrair.

O javascript vem evoluindo continuamente, e com isso uma variedade de novas features, com [Babel](https://babeljs.io/) torna-se muito fácil de usa-las. E essas novas features deixam algumas funções dessas bilibotecas uteis, absoletas.

Bons recursos para aprender essas novas features é a [pagina no site Babel](https://babeljs.io/docs/learn-es2015/) ou o excelente livro escrito por Nicholas C. Zakas, [Entendendo ECMAScript 6](https://leanpub.com/understandinges6/read). Aprendendo a utilizar completamente o javascript lhe dá um poder de desenvolvimento absurdo, e é bem mais provavel que irá ficar por muito mais tempo que as bibliotecas citadas.

Isso não quer dizer que não há lugar para mais nenhuma biblioteca instalada pelo [npm](https://www.npmjs.com/).

É que muitas funções que eram quase essenciais, a fim de ser produtivo quando estávamos desenvolvendo com ES3 não são mais necessárias, e hoje pode ser melhor usando apenas javascript puro para realizar o desenvolvimento.

##Exemplos
Os exemplos abaixo mostram algumas features contidas no ES5.1, ES2015 e ES2016 que deixa fácil a não necessidade de qualquer biblioteca de terceiros.

###O que preciso para usá-las?
**ES5** é hoje nativamente suportado por todos os browsers atuais e também pelo [NodeJS](https://nodejs.org/en/). Os exemplos com ES2015 e ES2016 podem ser compilados com [BabelJS](http://babeljs.io/docs/setup/), sendo muito fácil de adicionar em qualquer projeto.


###Arrays

####Iteração
**Função:**
O método each/foreach intera sobre uma lista de elementos. A interação é limitado ao contexto do objeto. Cada chamada do interador é com 3 argumentos `(elemento, indice, lista)`. Se uma lista é um objeto javascript, os argumentos vão ser `(valor, chave, lista)`. Retornando a lista para o encadeamento.

**Underscore**

`_.each(array, iteratee)`

**ES5**

`array.forEach(iteratee)`


####Map
**Função:**
O método Map cria um novo array de valores mapeando cada valor da lista através de uma função de transformação `(iterador)`.

**Underscore**

`_.map(array, iteratee)
`
**ES5**

`array.map(iteratee)
`
####Reduce
**Função:**
O método reduce transforma uma lista de valores em um valor único.

**Underscore**

`_.reduce(array, iteratee, memo)
`
**ES5**

`array.reduce(iteratee, memo)
`
####Reduce Right
**Função:**
O método Reduce Right chama a função de retorno de chamada especificada para todos os elementos de uma matriz, em ordem decrescente

**Underscore**

`_.reduceRight(array, iteratee, memo)
`
**ES5**

`array.reduceRight(iteratee, memo)
`
####Every
**Função:**
O método every, testa todo os elementos da array passam no teste executado pela função em que fornecemos

**Underscore**

`_.every(array, predicate)
`
**ES5**

`array.every(predicate)
`
####Some
**Função:**
O método some faz basicamente o mesmo que o every, a única diferença é que ele testa se algum elemento do array passa no teste executado pela função que foi fornecida

**Underscore**

`_.some(array, predicate)
`
**ES5**

`array.some(predicate)
`
####Find
**Função:**
O método find retorna apenas o primeiro elemento que passe no teste especificado.

**Underscore**

`_.find(array, predicate)
`
**ES5**

`array.find(predicate)
`
####Pluck
**Função:**
O método pluck retorna uma lista formada por valores de uma propriedade específica.

**Underscore**

`_.pluck(array, propertyName)
`
**ES5**

`array.map(value => value[propertyName])
####Includes`
**Função:**
O método includes checa se um array contem um elemento.

**Underscore**

`_.includes(array, element)
`
**ES5**

`array.includes(element)
####To Array`
**Função:**
O método to array convert um objeto array para array.

**Underscore**

`_.toArray(arguments)
`
**ES5**

`[...arguments]
`
####Compact
**Função:**
O método compact convert cria uma copia de um array com todos valores falsos removidos.

**Underscore**

`_.compact(array)
`
**ES5**

`array.filter(Boolean)
`
####Uniq
**Função:**
O método uniq cria uma copia de um array com valores duplicados removidos.

**Underscore**

`_.uniq(array)
`
**ES5**

`[...new Set(array)]
`
####Index Of
**Função:**
O método indexof procura o indice de um valor em um array.

**Underscore**

`_.indexOf(array, value)
`
**ES5**

`array.indexOf(value)
`
####Range
**Função:**
O método range cria um array com n numeros, começãod por x.

**Underscore**

`_.range(x, x + n)
`
**ES5**

`Array.from(Array(n), (v, k) => k + x)
`

###Objetos
####Keys
**Função:**
O método keys retorna um array com todos os nomes do proprio enumerador.

**Underscore**

`_.keys(object)
`
**ES5**

`Object.keys(object)
`
####Size
**Função:**
O método size retorna o numero de chaves em um objeto.

**Underscore**

`_.size(object)
`
**ES5**

`Object.keys(object).length
`
####All Keys
**Função:**
O método allkeys retorna um array com todos os nome de todos os enumeradores.

**Underscore**

`_.allKeys(object)
`
**ES5**

`[...Reflect.enumerate(object)]
`
####Values
**Função:**
O método values retorna todos os valores de um objeto.

**Underscore**

`_.values(object)
`
**ES5**

`Object.keys(object).map(key => object[key])
`
####Create
**Função:**
O método create cria um novo objeto com o dado prototype e propriedades.

**Underscore**

`_.create(proto, properties)
`
**ES5**

`Object.assign(Object.create(proto), properties)
`
####Assign
**Função:**
O método assign cria um novo objeto de um mesclado.

**Underscore**

`_.assign({}, source, { a: false })
`
**ES5**

`Object.assign({}, source, { a: false })
`
####IsArray
**Função:**
O método isArray verifica se um objeto é um array.

**Underscore**

`_.isArray(object)
`
**ES5**

`Array.isArray(object)
`
####IsNumber
**Função:**
O método isNumber verifica se um objeto é um numero finito.

**Underscore**

`_.isNumber(object) && _.isFinite(object)
`
**ES5**

`Number.isFinite(object)
`
###Funções
####Bind
**Função:**
O método bind vincula uma função em um objeto.

**Underscore**

`foo(_.bind(function () {
  this.bar();
}, this));`

`foo(_.bind(object.fun, object));`

**ES5**

`foo(() => {
  this.bar();
});`

`foo(::object.fun);`
