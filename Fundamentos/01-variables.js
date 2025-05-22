// var
// manera antigua de definir variables.
// Ámbito de función (no de bloque como let/const).
// Su declaración se eleva (hoisting), pero no su inicialización.
// Permite la redeclaración en el mismo ámbito.
// **Hoisting:** JavaScript mueve las declaraciones de 'var' al inicio de su ámbito,
// pero la asignación del valor se queda donde está en el código. Por eso a veces
// puedes usar una variable 'var' antes de declararla (aparecerá como 'undefined').
/*
Casos específicos para usar 'var':
    - Mantener compatibilidad con código JavaScript muy antiguo.
    - Patrones específicos que históricamente se basaban en el ámbito de función de 'var' (menos comunes hoy en día).

Ventajas de 'var' (en contextos muy específicos):
    - Su ámbito de función a veces era intencional en patrones antiguos.
    - La redeclaración podía ser útil en ciertos escenarios (aunque también propensa a errores).

Desventajas de 'var' (razones por las que se prefiere let/const):
    - Ámbito de función confuso y propenso a errores (especialmente en bloques if/for).
    Hoisting puede llevar a comportamientos inesperados si no se entiende bien.
    - Permite la redeclaración, lo que puede ocultar errores y dificultar el seguimiento del código.

En código moderno, generalmente se recomienda usar 'let' y 'const' en lugar de 'var' para un código más 
claro y seguro.
*/
var holaMundo = "¡Hola, JavaScript!";
var holaMundo = "¡Hola, JavaScript!"
console.log(holaMundo)

holaMundo = "¡Hola de nuevo, JavaScript"
console.log(holaMundo)

// let
// Variables con ámbito de bloque ({}), función o clase.
// No permite redeclaración en el mismo ámbito.
// Su declaración se eleva (hoisting), pero con Zona Muerta Temporal (no se puede usar antes de declarar).
/*
Ventajas de 'let':
    - Ámbito de bloque más intuitivo y menos propenso a errores que el ámbito de función de 'var'.
    - No permite la redeclaración accidental de variables en el mismo ámbito, lo que ayuda a prevenir errores.
    - El comportamiento del hoisting con la Zona Muerta Temporal fomenta la declaración de variables antes de su uso,
    haciendo el código más legible y predecible.

Desventajas de 'let':
    - Puede ser un poco más restrictivo que 'var' en algunos patrones de código muy antiguos que dependían del 
    ámbito de función y la redeclaración de 'var'. Sin embargo, estos patrones son menos comunes en el desarrollo 
    moderno.

En general, 'let' es preferible a 'var' para declarar variables que pueden ser reasignadas en código JavaScript
moderno.
*/
let holaMundo2 = "¡Hola, JavaScript 2!"
console.log(holaMundo2)

holaMundo2 = "¡Hola de nuevo, JavaScript 2!"
console.log(holaMundo2)

// const
// Se usan para declarar constantes, su valor no puede ser reasignado después de la declaración.
// Tienen ámbito de bloque ({}), función o clase, al igual que 'let'.
// No permite la redeclaración en el mismo ámbito.
// Su declaración también se eleva (hoisting), pero con Zona Muerta Temporal (no se puede usar antes de declarar).
// **Importante:** Para objetos y arrays declarados con 'const', la *referencia* es constante,
// aunque el contenido del objeto o array sí se puede modificar.

/*
Ventajas de 'const':
    - Claridad en el código al indicar que una variable no debe ser reasignada, lo que facilita la comprensión y 
    previene errores.
    - Ámbito de bloque, similar a 'let', lo que ayuda a evitar problemas de ámbito como los que pueden ocurrir con
    'var'.
    - El comportamiento del hoisting con la Zona Muerta Temporal fomenta la declaración antes del uso.
    - Ayuda a la optimización del motor de JavaScript en algunos casos, al saber que la variable no cambiará.

Desventajas de 'const':
    - Requiere una inicialización al momento de la declaración (no puedes declarar una constante sin asignarle un 
    valor).
    - No permite la reasignación, lo que puede requerir un enfoque diferente si necesitas que un valor cambie (en 
    ese caso, usar 'let').

En general, se recomienda usar 'const' por defecto para las variables que no necesitan ser reasignadas. Si se 
necesita reasignación, entonces se usa 'let'.
*/
const holaMundo3 = "¡Hola, JavaScript 3!"
console.log(holaMundo3)

// Error
// holaMundo3 = "¡Hola de nuevo, JavaScript3!"
// console.log(holaMundo3)