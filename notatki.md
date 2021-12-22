# GIT

cd ..
git clone https://bitbucket.org/ev45ive/altkom-angular-grudzien.git altkom-angular-grudzien
cd altkom-angular-grudzien
npm install
npm run start


git remote remove origin
git remote add origin https://github.com/ev45ive/altkom-angular-grudzien
git pull --set-upstream origin master

## GIT Update

git pull --set-upstream origin master

git stash -u
git pull

## Instalacje

https://nodejs.org/en/
node -v
v16.13.1

npm -v
8.1.2

https://gitforwindows.org/
git --version
git version 2.31.1.windows.1

https://code.visualstudio.com/
code -v
1.40.1

Google Chrome 96.0.4664.110

## VS Code extensions

https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode

https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

## Angular CLI

npm install --global @angular/cli
npm i -g @angular/cli

ng --version
Angular CLI: 13.1.2  
Node: 16.13.1
Package Manager: npm 8.1.2
OS: win32 x64

ng help
ng new --help

 $ ng new --directory "."
? What name would you like to use for the new workspace and initial project? myapp
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS  https://sass-lang.com/documentation/syntax#scss 

ng new myapp --directory "." --package-manager npm --routing --strict --style scss

git config --global user.email "mojemail@mojadomena.com"
git config --global user.name "Zbyszek Xowski"

code ~/.gitconfig

[user]
email = email@email.com
name = Imie Nawzisko

## Serwer

ng serve
ng s
ng s --port 8080

ng s -o

## Devtools

https://angular.io/guide/devtools

https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh

http://localhost:4200/

## Counter Component

ng generate component mojkomonent
ng g c --help

ng g c counter -s -t
CREATE src/app/counter/counter.component.spec.ts (633 bytes)
CREATE src/app/counter/counter.component.ts (268 bytes)
UPDATE src/app/app.module.ts (593 bytes)

https://github.com/angular/angular/tree/master/packages/zone.js

## Playlist module

ng g m playlists -m app --routing

ng g c playlists/containers/playlists-view

ng g c playlists/components/playlist-list
ng g c playlists/components/playlist-details
ng g c playlists/components/playlist-form

## Template syntax

https://angular.io/guide/template-syntax
https://angular.io/guide/binding-syntax

  <!-- {{ }}  #  [ ]  (  )  *  -->

## Album Search module

ng g m music -m app --route music

ng g c music/containers/album-search

ng g c music/components/album-card 
ng g c music/components/search-form 
ng g c music/components/search-results


## Services
ng g s --help
<!-- ng g service core/services/search -->
ng g s core/services/search


## Shared module

ng g m shared -m app


## Observability - Error Handler - Sentry
https://docs.sentry.io/platforms/javascript/guides/angular/

https://logrocket.com/

## RxJS
https://gist.github.com/staltz/868e7e9bc2a7b8c1f754


## OAuth
npm i angular-oauth2-oidc --save

https://github.com/manfredsteyer/angular-oauth2-oidc


## Forms

ng.getDirectives($0 )[2].form.patchValue({name: 'Best  test'})

this.formRef.form.value 

this.formRef.form.patchValue({name: 'Best  test'})

this.formRef.setValue({
  name: 'Best  123123', public: false, description: 'my last playlist'
})


## RxJS operators

https://rxjs.dev/operator-decision-tree

https://rxmarbles.com/#debounceTime


## NgRX 
https://ngrx.io/guide/store/why


## UI toolkits

https://ng-bootstrap.github.io/#/components/dropdown/examples

https://www.primefaces.org/primeng/showcase/#/


https://material.angular.io/

https://material.angular.io/cdk/categories

https://ng.ant.design/

