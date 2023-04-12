function convertir() {
	// Obtener valores de los prompts
	let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));
	let divisaOrigen = prompt("Ingrese la divisa de origen (CLP, USD o EUR):").toUpperCase();
	let divisaDestino = prompt("Ingrese la divisa de destino (CLP, USD o EUR):").toUpperCase();

	// Verificar las divisas ingresadas y realizar la conversión
	let tasa;
	switch (divisaOrigen) {
		case "CLP":
			switch (divisaDestino) {
				case "USD":
					tasa = 1 / 760; // 1 dólar = 760 pesos chilenos (al 12 de abril de 2023)
					break;
				case "EUR":
					tasa = 1 / 883; // 1 euro = 883 pesos chilenos (al 12 de abril de 2023)
					break;
				default:
					tasa = 1;
					break;
			}
			break;
		case "USD":
			switch (divisaDestino) {
				case "CLP":
					tasa = 760;
					break;
				case "EUR":
					tasa = 0.83; // 1 dólar = 0.83 euros (al 12 de abril de 2023)
					break;
				default:
					tasa = 1;
					break;
			}
			break;
		case "EUR":
			switch (divisaDestino) {
				case "CLP":
					tasa = 883;
					break;
				case "USD":
					tasa = 1 / 0.83; // 1 dólar = 0.83 euros (al 12 de abril de 2023)
					break;
				default:
					tasa = 1;
					break;
			}
			break;
		default:
			alert("La divisa ingresada no es válida.");
			return;
	}

	// Realizar la conversión y mostrar el resultado en una ventana de alerta
	let resultado = cantidad * tasa;
	alert(`${cantidad} ${divisaOrigen} equivale a ${resultado.toFixed(2)} ${divisaDestino}.`);
}
