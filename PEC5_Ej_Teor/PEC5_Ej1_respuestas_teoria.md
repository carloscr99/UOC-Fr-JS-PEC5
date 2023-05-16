- Las principales diferencias entre ``formularios dirigidos por template`` y los ``formularios reactivos`` son:
  - Los ``dirigidos por template`` recuerdan como se trabajaban en AngularJS ya que usa sintaxis y metodología similar, estos empiezan con la plantilla y utilizan la vinculación de datos para obtener los datos hacia y desde los componentes, mientras que en los ``formularios reactivos``, se definen todos los objetos de control del formulario en el código del componente y se vinculan a los elementos de control de formularios nativos de la plantilla.
  - Cuando creamos formularios usando el ``template-driven`` declaramos los controles del formulario en la plantilla y añadimos directivas como ``ngModel``, por lo que Angular es el responsable de crear el control de formularios, de la sincronización de datos y los envíos de información al modelo, entre otras muchas cosas.
  - En los ``formularios reactivos``, son síncronos y como desarrolladores, tenemos un control absoluto sobre como y cuando los datos se sincronizan del modelo al UI y viceversa, por lo que no tenenmos le lidiar con el ciclo de vida de Angular

- ¿Qué son, para qué sirven y cómo se utilizan las directivas ``ngModel`` y
``ngModelChange``?
    - ``ngModel``: Vincula los datos, por lo que cuando el usuario introduce cualquier dato por la interfaz, lo envía al componente, y cuando este responde, devuelve la respuesta a la interfaz.
    - ``ngModelChange``: Obtiene el nuevo valor del input.

Como vemos en la explicación, un ejemplo de uso sería el siguiente:
```html
<div class="form-group">
  <form>
    <div class="stock-name">
      <input type="text"
             placeholder="Stock Name"
             name="stockName"
             [ngModel]="stock.name"
             (ngModelChange)="stock.name=$event">
    </div>
  </form>
  <button (click)="stock.name='test'">Reset stock name</button>
</div>
```

- ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos
por templates?
    - Los estados nos permiten conocer es estado del control del formulario (si lo ha visitado, si lo ha cambiado, y si está en un estado válido).
    - Los estados son: 
      - ``visited``: Si ha sido visitado, la clase css es ``ng-touched``, mientras que se si no lo ha sido, la clase css es ``ng-untouched``.
      - ``changed``: Si ha sido modificado (un input, por ejemplo), la clase css es ``ng-dirty``, mientras que si no lo ha sido, la clase css es ``ng-pristine``.
      - ``valid``: Si el formulario no es válido, la clase css es ``ng-invalid``, mientras que si es válido, es ``ng-valid``.

- ¿Qué ventajas aportan los ``FormGroup`` en la composición de formularios?
  - Creamos un div con la directiva ``ngModelGroup``, dándole un nombre, y el grupo de elementos crea los elementos necesarios (nombre, precio, código e intercambio en el ejemplo del libro), y estos son visibles en el componente cuando accedemos a todo el set de variables a través de from.value.nombreValor 