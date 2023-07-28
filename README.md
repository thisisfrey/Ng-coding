# NgCoding

## Angular Concepts
### Angular Components
Components are the basic UI building blocks in an Angular application. They are responsible for defining the view and behavior of a specific part of the user interface. Each component is typically associated with a custom HTML template and a TypeScript class that defines the component's behavior.

Key characteristics of Angular components include:

- Encapsulation: Components have encapsulated styles, ensuring that their styles do not interfere with other components.
- Reusability: Components can be reused throughout the application, promoting a modular and maintainable codebase.
- Hierarchy: Components can be organized in a hierarchical tree-like structure, making it easier to manage complex UI elements.

### Angular Modules
Modules in Angular are containers for organizing and encapsulating related components, services, directives, and other features. They help in managing the application's complexity and allow developers to split the app into smaller, manageable pieces. An Angular application typically consists of multiple modules, including the root module.

Key characteristics of Angular modules include:

- NgModule Decorator: Modules are defined using the @NgModule decorator in TypeScript.
- Imports: Modules can import other modules to access their exported components, services, and directives.
- Declarations: Components, directives, and pipes are declared in the module to make them available within that module's context.
- Exports: Components, directives, or services that need to be used by other modules can be exported from the module.

### Angular Services
Services in Angular are singleton objects that provide functionality that can be shared across different components and modules. They are used to encapsulate and centralize common data management, business logic, and communication with external services.

Key characteristics of Angular services include:

- Singleton: Angular services are instantiated only once, making them shareable across the entire application.
- Injectable: Services are marked with the @Injectable decorator to allow them to be injected into components or other services.
- Dependency Injection: Services are typically injected into components and other services via constructor injection.

### Angular Directives
Directives are instructions in the DOM (Document Object Model) that extend HTML with custom behaviors and functionalities. In Angular, there are two types of directives: structural directives and attribute directives.

- Structural Directives: These directives manipulate the DOM layout by adding or removing elements. Examples include *ngIf, *ngFor, and *ngSwitch.
- Attribute Directives: These directives change the appearance or behavior of an existing element. Examples include ngClass, ngStyle, and custom directives.
Angular also allows developers to create custom directives to implement application-specific behaviors.

## Angular Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
