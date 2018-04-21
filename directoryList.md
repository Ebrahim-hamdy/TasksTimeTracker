|-- undefined
    |-- .gitignore
    |-- LICENSE
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- backend
    |   |-- server.js
    |   |-- app
    |   |   |-- controllers
    |   |   |   |-- task.controller.js
    |   |   |-- models
    |   |   |   |-- task.model.js
    |   |   |-- routes
    |   |       |-- task.routes.js
    |   |-- config
    |       |-- database.config.js
    |-- config
    |   |-- helpers.js
    |   |-- tsconfig.json
    |   |-- tslint.json
    |   |-- build
    |   |   |-- webpack.common.js
    |   |   |-- webpack.dev.js
    |   |   |-- webpack.prod.js
    |   |-- server
    |   |   |-- prod-server.js
    |   |-- test
    |       |-- karma-test-shim.js
    |       |-- karma.conf.js
    |       |-- webpack.test.js
    |-- frontend
        |-- index.html
        |-- main.ts
        |-- polyfills.ts
        |-- vendor.ts
        |-- app
        |   |-- app.component.html
        |   |-- app.component.scss
        |   |-- app.component.spec.ts
        |   |-- app.component.ts
        |   |-- app.module.ts
        |   |-- app.routing.ts
        |   |-- data
        |   |   |-- contexts.ts
        |   |   |-- endpoints.ts
        |   |   |-- repositories
        |   |       |-- taskRepository
        |   |           |-- taskRepository.ts
        |   |-- route
        |   |   |-- task
        |   |       |-- task.component.html
        |   |       |-- task.component.scss
        |   |       |-- task.component.ts
        |   |       |-- sass
        |   |       |   |-- controls.scss
        |   |       |   |-- modal.scss
        |   |       |   |-- task-area.scss
        |   |       |   |-- timer-area.scss
        |   |       |   |-- timer.scss
        |   |       |-- tasksAddEdit
        |   |           |-- taskAddEdit.component.ts
        |   |           |-- tasksAddEdit.component.html
        |   |-- shared
        |       |-- pipes
        |       |   |-- taskFilter.pipe.ts
        |       |-- resolvers
        |           |-- taskResolver.ts
        |-- assets
            |-- images
            |   |-- bin.svg
            |   |-- edit.svg
            |   |-- plus.svg
            |   |-- sort-amount-asc.svg
            |   |-- sort-amount-desc.svg
            |   |-- sort-amount-down.svg
            |   |-- sort-amount-up.svg
            |   |-- sort-asc.svg
            |   |-- sort-desc.svg
            |   |-- favicon
            |       |-- apple-touch-icon-114x114.png
            |       |-- apple-touch-icon-120x120.png
            |       |-- apple-touch-icon-144x144.png
            |       |-- apple-touch-icon-152x152.png
            |       |-- apple-touch-icon-57x57.png
            |       |-- apple-touch-icon-60x60.png
            |       |-- apple-touch-icon-72x72.png
            |       |-- apple-touch-icon-76x76.png
            |       |-- favicon-128.png
            |       |-- favicon-16x16.png
            |       |-- favicon-196x196.png
            |       |-- favicon-32x32.png
            |       |-- favicon-512.png
            |       |-- favicon-96x96.png
            |       |-- favicon.ico
            |       |-- mstile-144x144.png
            |       |-- mstile-150x150.png
            |       |-- mstile-310x150.png
            |       |-- mstile-310x310.png
            |       |-- mstile-70x70.png
            |-- sass
                |-- global.scss
                |-- abstracts
                |   |-- base.scss
                |   |-- cards.scss
                |   |-- functions.scss
                |   |-- mixins.scss
                |   |-- transitions.scss
                |   |-- type.scss
                |-- config
                |   |-- buttons.scss
                |   |-- variables.scss
                |-- vendor
                    |-- normalize.scss
