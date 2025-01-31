AOS.init();

const dataEvento = new Date('Feb 26, 2025 12:00');
const timeStampDoEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAgora;

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutoEmMs = 1000*60;

    const diasAteOEveneto = Math.floor(distanciaAteEvento / (diaEmMs));
    const horasAteOEveneto = Math.floor((distanciaAteEvento % (diaEmMs))/(horaEmMs));
    const minutosAteOEveneto = Math.floor((distanciaAteEvento % (horaEmMs))/(minutoEmMs));
    const segundosAteOEveneto = Math.floor((distanciaAteEvento % (minutoEmMs))/(1000));


    document.getElementById('contador').innerText = `${diasAteOEveneto}d ${horasAteOEveneto}h ${minutosAteOEveneto}m ${segundosAteOEveneto}s`;

    if(distanciaAteEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerText = 'Evento expirado';
    }
}, 1000);
