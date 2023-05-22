1.  ¿Qué son, para qué sirven y cómo se utilizan ``FormControl``, ``FormGroup`` y ``FormBuilder``?
  - ``FormControl``: Es el core de los formularios reactivos, el cual representa directamente y de forma independiente un elemento en la plantilla. En este nivel, asignamos los valores iniciales y las validaciones, que esto es todo lo que hacemos en los formularios dirigidos por plantillas, ahora se hace por código TypeScript.

Ejemplo de uso:

```html
             
<div class="form-group">

    <div class="stock-name">
      <input type="text"
             placeholder="Stock Name"
             name="stockName"
             [formControl]="nameControl"> 
    </div>
    <button (click)="onSubmit()">Submit</button>
</div>      
```

```TS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public nameControl = new FormControl();
  constructor() {}

  onSubmit() {
    console.log('Name Control Value', this.nameControl.value);
  }
}
```

En el ``nameControl.value``, obtenemos el valor que recogemos para el nombre del stock.

  - ``FormGroup``: Agrupamos campos útiles del formulario debajo de un mismo grupo, lo que nos permite seguir los controles de los formularios individualmente o como grupo. 

Ejemplo de uso:

```html

<div class="form-group">
  <form [formGroup]="stockForm" (ngSubmit)="onSubmit()"> 
    <div class="stock-name">
      <input type="text"
             placeholder="Stock Name"
             name="stockName"
             formControlName="name">
    </div>
    <div class="stock-code">
        <input type="text"
               placeholder="Stock Code"
               formControlName="code">
    </div>
    <div class="stock-price">
        <input type="number"
               placeholder="Stock Price"
               formControlName="price">
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
```

````TS

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });
  constructor() {}

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }
}

````
En el constructor del ``FormGroup``, asignamos los valores por defecto -el primer argumento del FormControl-, así como los validadores de los campos -el segundo argumento (o el array)-.

  - ``FormBuilder``: Nos da la flexibilidad para construir un formulario complejo y anidado de una manera más simple y límpia de lo que se haría en un ``FormGroup``. Con este siestema, no tenemops que modificar la plantilla, y nos permite crear un ``FormGroup`` y un ``FormControl`` sin tener que llamar al ``new`` de los mismos.

Ejemplo de uso:

```TS

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stockForm: FormGroup;                 
  constructor(private fb: FormBuilder) {       
    this.createForm();
  }

  createForm() {
    this.stockForm = this.fb.group({             
      name: [null, Validators.required],         
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }

```

Importamos el ``FormBuilder`` y pasamos lo pasámos como parámetro al constructor, creamos un ``FormGroup`` usando la instáncia inyectada del ``FormBuilder`` y realizamos las inicializaciones pertinentes.

2. ``Validadores`` Angular para los ``formularios reactivos``:

| Validador | Objetivo |
| ---- | ----- |
| min | Valida que el valor numérico del campo sea igual o mayor que un valor mínimo especificado |
| max | Valida que el valor numérico del campo sea igual o menor que un valor máximo especificado |
| required | Valida que el campo tenga un valor |
| requiredTrue | Valida que el campo tenga un valor verdadero (por ejemplo, un checkbox marcado) | 
| email | Valida que el valor del campo sea una dirección de correo electrónico válida |
| minLength | Valida que la longitud del campo sea igual o mayor que un valor mínimo especificado |
| maxLength | Valida que la longitud del campo sea igual o menor que un valor máximo especificado | 
| pattern | Valida que el valor del campo coincida con un patrón de expresión regular |
| nullValidator | Validador que no realiza ninguna operación |
| compose | Compone múltiples validadores y devuelve la unión de los mapas de error individuales |
| composeAsync | Compone múltiples validadores asíncronos y devuelve una única función que es la unión de los objetos individuales de los errores | 

3. ¿Qué son, cuáles son y para qué sirven los ``estados`` en los ``formularios reactivos``?

Los estados en los formularios reactivos són los siguientes:
   - ``Pristine``:  El formulario no ha sido tocado por le usuario, y es el estado de un formulario cuando se carga por primera vez.
   - ``Dirty``: El formulario ha sido modificado por el usuario.
   - ``Touched``: El usuario ha interactuado con el formulario con al menos uno de los campos.
   - ``Untouched``: El usuario no ha interactuado con ningún campo de los campos del formulario.
   - ``Valid``: Todos los campos del formulario han pasado las validaciones.
   - ``Invalid``: Al menos uno de los campos del formulario no cumple con los validaciones que se han definido.