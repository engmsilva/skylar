## App Agenda

Agenda Simples usando React JS Hooks e Bulma CSS.

Requisitos:
- git 2.20.1
- node v10.15.2
- yarn 1.21.1

Para executar o aplicativo localmente:

```bash
git clone git@github.com:engmsilva/skylar.git
 cd skylar
yarn install
yarn start
open http://localhost:3000
```

Para executar a versão minificada do aplicativo localmente:

Instalação do servidor Node

```bash
yarn global add serve
```
Exportar caminho de instalação do servidor para variável de ambiente do sistema operacional.

```bash
export PATH="$PATH:$(yarn global bin)" // exemplo usado no Ubunto
```
Execute o servidor

```bash
serve -s build
open http://localhost:5000
```
