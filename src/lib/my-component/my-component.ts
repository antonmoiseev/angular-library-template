import { Component, NgModule } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-component',
    styleUrls: [ './my-component.css' ],
    templateUrl: './my-component.html'
})
export class MyComponent {}

@NgModule({
    declarations: [ MyComponent ],
    exports: [ MyComponent ]
})
export class MyComponentModule {}
