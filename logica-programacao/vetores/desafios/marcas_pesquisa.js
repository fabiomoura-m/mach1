/**
 Montar um programa onde faço pesquisa por parte do nome das marcas de nome de carros
 o sistema apresenta uma lista numerada com os carros que a pesquisa retornar.

 Se nao encontrar nenhum resultado exibir a informação que nenhuma marca de carro foi encontrada.

 Exemplo pesquisa: merc

 Exemplo de saida:
 1 - MERCEDES - BENZ
 2 - MERCURY

 */

const marcas = [
    'CHEVROLET',
    'VOLKSWAGEN',
    'FIAT',
    'MERCEDES-BENZ',
    'CITROEN',
    'CHANA',
    'HONDA',
    'SUBARU',
    'FERRARI',
    'BUGATTI',
    'LAMBORGHINI',
    'FORD',
    'HYUNDAI',
    'JAC',
    'KIA',
    'GURGEL',
    'DODGE',
    'CHRYSLER',
    'BENTLEY',
    'SSANGYONG',
    'PEUGEOT',
    'TOYOTA',
    'RENAULT',
    'ACURA',
    'ADAMO',
    'AGRALE',
    'ALFA ROMEO',
    'AMERICAR',
    'ASTON MARTIN',
    'AUDI',
    'BEACH',
    'BIANCO',
    'BMW',
    'BORGWARD',
    'BRILLIANCE',
    'BUICK',
    'CBT',
    'NISSAN',
    'CHAMONIX',
    'CHEDA',
    'CHERY',
    'CORD',
    'COYOTE',
    'CROSS LANDER',
    'DAEWOO',
    'DAIHATSU',
    'VOLVO',
    'DE SOTO',
    'DETOMAZO',
    'DELOREAN',
    'DKW-VEMAG',
    'SUZUKI',
    'EAGLE',
    'EFFA',
    'ENGESA',
    'ENVEMO',
    'FARUS',
    'FERCAR',
    'FNM',
    'PONTIAC',
    'PORSCHE',
    'GEO',
    'GRANCAR',
    'GREAT WALL',
    'HAFEI',
    'HOFSTETTER',
    'HUDSON',
    'HUMMER',
    'INFINITI',
    'INTERNATIONAL',
    'JAGUAR',
    'JEEP',
    'JINBEI',
    'JPX',
    'KAISER',
    'KOENIGSEGG',
    'LAUTOMOBILE',
    'LAUTOCRAFT',
    'LADA',
    'LANCIA',
    'LAND ROVER',
    'LEXUS',
    'LIFAN',
    'LINCOLN',
    'LOBINI',
    'LOTUS',
    'MAHINDRA',
    'MASERATI',
    'MATRA',
    'MAYBACH',
    'MAZDA',
    'MENON',
    'MERCURY',
    'MITSUBISHI',
    'MG',
    'MINI',
    'MIURA',
    'MORRIS',
    'MP LAFER',
    'MPLM',
    'NEWTRACK',
    'NISSIN',
    'OLDSMOBILE',
    'PAG',
    'PAGANI',
    'PLYMOUTH',
    'PUMA',
    'RENO',
    'REVA-I',
    'ROLLS-ROYCE',
    'ROMI',
    'SEAT',
    'UTILITARIOS AGRICOLAS',
    'SHINERAY',
    'SAAB',
    'SHORT',
    'SIMCA',
    'SMART',
    'SPYKER',
    'STANDARD',
    'STUDEBAKER',
    'TAC',
    'TANGER',
    'TRIUMPH',
    'TROLLER',
    'UNIMOG',
    'WIESMANN',
    'CADILLAC',
    'AM GEN',
    'BUGGY',
    'WILLYS OVERLAND',
    'KASEA',
    'SATURN',
    'SWELL MINI',
    'SKODA',
    'KARMANN GHIA',
    'KART',
    'HANOMAG',
    'HILLMAN',
    'HRG',
    'GAIOLA',
    'TATA',
    'DITALLY',
    'RELY',
    'MCLAREN',
    'GEELY'
];

let prompt = require('prompt-sync')();

let pesquisa = prompt('Digite a marca desejada: ');

let resultadoPesquisa = marcas.filter(function (marca) {
    return marca.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase());
});

let respostaSaida = [];
resultadoPesquisa.forEach(function (marca, index) {
    respostaSaida.push(`${index + 1} - ${marca}`);
});

if (!respostaSaida[0]) {
    console.log('Nenhuma marca de carro foi encontrada');
} else {
    console.log(respostaSaida);
}
