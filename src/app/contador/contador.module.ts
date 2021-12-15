import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    //componentes del modulo
    declarations: [
        ContadorComponent
    ],
    //componentes que se usan fuera del modulo
    exports: [
        ContadorComponent
    ],
    //modulos que usa este modulo
    imports: [

    ]
})
export class ContadorModule {}