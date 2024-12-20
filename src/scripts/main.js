AOS.init();

const dataDoEvento = new Date("Jun 29, 2025 7:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function (){
    const agora = new Date();
    const timeStempAtual = agora.getTime();

    const distanciaDoEvento = timeStempDoEvento - timeStempAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const MinutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMs)
    const horasAteOEvento = Math.floor ((distanciaDoEvento % diasEmMs)/ horasEmMs)
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horasEmMs)/MinutosEmMs)
    const segundosAteOEvento = Math.floor ((distanciaDoEvento % MinutosEmMs)/1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d, ${horasAteOEvento}h, ${minutosAteOEvento}m, ${segundosAteOEvento}s `

    if(distanciaDoEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento já aconteceu.Mas ano que vem teremos mais'
    }
}, 1000);