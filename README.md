# projen-playground

## Criando o projeto
```
projen new awscdk-app-ts --projenrc-ts --cdk-version=2.28.1
```

## Configurando a geração de release ro projeto

[Projen release documentation](https://projen.io/releases.html)

patch No arquivo `projenrc.ts` defina a variável `release` do objeto `project` com o valor `true`
```
const project = new awscdk.AwsCdkTypeScriptApp({
  ...
  release: true,
  ...
});
```
Desta forma o workflow do GitHub passará a gerar a versão do projeto iniciando uma versão experimental (`0.0.0`)

O projen usa versionamento semântico, desta forma todo commit deve ser inicialido com `feat`, `fix` ou `chore`.

Quando o projeto se tornar **estável**, é necessário definir a versão no arquivo `projenrc.ts` definindo a versão no parâmetro `majorVersion` do objeto `project`
```
const project = new awscdk.AwsCdkTypeScriptApp({
  ...
  release: true,
  majorVersion: 1,
  ...
});
```

Existe uma diferença na geração da versão de acordo com a maturidade do projeto conforma a tabela abaixo

||Versão|Versão|
|---|---|---|
|**Tipo de commit**|_Experimental_ **(0.0.0)**|_Estável_ **(`x`.0.0)**|
||||
|`chore`|não altera a versão|não altera a versão|
|`fix`|`patch` (0.0.`x`)|`patch` (0.0.`x`)|
|`feat`|`patch` (0.0.`x`)|`minor` (0.`x`.0)|

Após alterar o arquivo `projenrc.ts` execute o comando **projen** para atualizar o projeto.

## Habilitando o mergify
Habilite o mergify no arquivo `projenrc.ts` alterando a configuração do `project` conforme abaixo
```
const project = new awscdk.AwsCdkTypeScriptApp({
  ...
  githubOptions: {
    mergify: true,
  },
  ...
});
```