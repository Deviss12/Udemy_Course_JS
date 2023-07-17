// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 1) zrozumienie problemu

// czym jest amplituda temperatur? odp: amplituda to różnica między największą a najmniejszą temperaturą

// jak za pomocą kodu obliczyć tę amplitude?
// czym jest błąd sensoru w tym czujniku i co zrobić gdy error się pojawi?

// 2) rozbicie problemu na mniejsze problemy

// a) jak zignorować errory?
// b) znajdź maksymalną temperature w temp array
// c) znajdź minimalna temperature w temp array
// d) obliczyć różnicę tych temperatur
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
// max będzie równy pierwszej pozycji czyli =3, nastepnie kod bada czy nastepna liczba jest większa od wczesniej wybranego maksimum, jesli tak to przyjmuje nowe maskimum

// 2 problem:
// funkcja powinna otrzymywać 2 arraye

// zrozumienie problemu
// czy powinniśmy po prostu powtórzyć kod 2 raz? odp: Nie! kod powinien działać dla 2 tabel
// jak złączyć 2 tabele?
// możemy wykorzystać funkcję concat patrz:mdn

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };
  console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// a) wiemy jaki jest  bug
//b) znajdujemy go
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/

// funkcja forecast ma za zadanie "wydrukować" do konsoli stringa który informuje o maksymalnej temperaturze w następnych dniach
// tabela została przerobiona na stringa, każda wartość oddzielona jest kropkami i informacją o dniu
//czym jest X days? odp: index+1

// W jaki sposób mogę przekazać kolejne elementy tabeli do stringa?
// jak przypisać temperature do danego dnia jeśli ilosć dni może być nieskończona?odp: może się przydać indexOf

// funkcja przekształcająca tabele w stringa powinna mieć w sobie zmienna która będzie zbierać dane z pętli for
// w pętli zróbmy sobie stałą day odpowiadającą index+1
//zrobimy pętle for która będzie wprowadzać do stringa aktualną temperaturę i dzień aż do zakończenia iteracji na koću tabeli
//ostatnim wierszem pętli for będzie dodawanie fragmentu stringa z każdą iteracją
// zwracamy funkcję forecast (którą ustanowiliśmy na początku jako pustego stringa)

//przywołujemy funkcje do stałej i logujemy tę stałą i pyk

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = ``;

  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  return forecast;
};

const forecastData1 = printForecast(data1);
console.log(forecastData1);
const forecastData2 = printForecast(data2);
console.log(forecastData2);
