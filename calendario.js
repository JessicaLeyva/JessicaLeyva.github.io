document.addEventListener('DOMContentLoaded', function () {
    const calendarioCeldas = document.getElementById('calendario-celdas');
    const mesAnio = document.getElementById('mes-anio');

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    function generarCalendario(mes, anio) {
        calendarioCeldas.innerHTML = '';

        // Obtener el primer día del mes y el último día del mes
        const primerDia = new Date(anio, mes, 1);
        const ultimoDia = new Date(anio, mes + 1, 0);

        // Mostrar el mes y el año en el encabezado
        mesAnio.textContent = `${primerDia.toLocaleString('es', { month: 'long' })} ${anio}`;

        // Agregar celdas para cada día del mes
        for (let i = 0; i < primerDia.getDay(); i++) {
            calendarioCeldas.innerHTML += '<div class="calendario-celda"></div>';
        }

        for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
            calendarioCeldas.innerHTML += `<div class="calendario-celda">${dia}</div>`;
        }
    }

    const fechaActual = new Date();
    generarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
});
