function calcular() {

  // obtiene los valores de los inputs y convertirlos a número decimal
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // obtiene un elemento en html por su id
  const resultados = document.getElementById("resultados");


  // Validar si los campos tienen números válidos
  if (isNaN(num1) || isNaN(num2)) {
    resultados.innerHTML = "<p>ingresa ambos numeros.</p>";
    return; // Detiene la ejecución si falta algún número
  }

  for (let i = 1; i <= 5; i++) {
    let texto = ""; // Variable para guardar el resultado con descripción

    switch(i) {
      case 1:
        // suma
        texto = `1 Suma: ${num1} + ${num2} = ${num1 + num2}`;
        break;
      case 2:
        // resta
        texto = `2 Resta: ${num1} - ${num2} = ${num1 - num2}`;
        break;
      case 3:
        // multiplicacion
        texto = `3 Multiplicación: ${num1} * ${num2} = ${num1 * num2}`;
        break;
      case 4:
        // divison (con validación por si num2 es cero)
        if (num2 !== 0) {
          texto = `4 División: ${num1} / ${num2} = ${num1 / num2}`;
        } else {
          texto = `4 División: No se puede dividir por cero`;
        }
        break;
      case 5:
        // modulo o resto (también verifica que num2 no sea cero)
        if (num2 !== 0) {
          texto = `5 Módulo: ${num1} % ${num2} = ${num1 % num2}`;
        } else {
          texto = `5 Módulo: No se puede hacer módulo con cero`;
        }
        break;
    }

    // dependiendo lo que el usuario ingrese se crea un <p> 
    const p = document.createElement("p");
    p.textContent = texto;

    // añadir el <p> al div de resultados o inserta elementos "hijos" dentro de otro 
    resultados.appendChild(p);
  }
}
