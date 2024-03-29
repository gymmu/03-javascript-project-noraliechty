export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Lösche alle 'e's 
  if (currentElement === 'e' ) {
    result.push("")

    //Lösche alle 'E's 
  } else if (currentElement === 'E') {
    result.push("")
  }
else {
    result.push(currentElement)
  }
  }
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wandle das aktuelle Element in einen Grossbuchstaben um 
    const capitalizedElement = currentElement.toUpperCase()
    
    //Hänge den Grossbuchstaben an das Resultat an...
    result.push(capitalizedElement)

  }
  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Zähle alle 'e's die enthalten sind 

    if (currentElement === 'e') {
     count = count + 1
    }
    {//Zähle auch alle 'E's die enthalten sind
    if (currentElement === 'E') {
    count = count + 1 
    }

  }
  }
  return count
}

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ' ') {
     count++
    }
  //Zähle alle im Text enthaltenen Wörter 
  }
  return count
}

export function aufgabe05(args) {
  const input = args
  const result = [] 
let capitalLetters = 0 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Gib an ob Grossbuchstaben enthalten sind
    const ascii = currentElement.charCodeAt(0)

    if ( 65 <= ascii && ascii <= 90) {
      return true
    }
  }
  return false
}

export function aufgabe06 (args) {
const input = args 

for (let i = 1; i < input.length; i++) {
  const currentElement = input[i]
  const ascii = currentElement.charCodeAt(0)
  if (48 <= ascii && ascii <= 57){
    //mache nichts; handelt sich um eine Zahl

  } else if (65 <= ascii && ascii <= 90) {
    //mache nichts; handelt sich um A-Z


  } else if (97 <= ascii && ascii <= 122) {
    // mache nichts; handelt sich um a-z

  } else if (currentElement === " ") {

  } else {
    return true
  }
}
return false 
}

export function aufgabe07 (args) {
  const input = args 
  const result = []

  for (let i=0; i < input.length; i++) {
    const currentElement = input [i]
  if (currentElement === "u") {
    if (input[i+1] === "n") {
      if (input[i+2] === "d") {
        // wenn der Code bis hier kommt, sind die Zeichen u,n,d hintereinander
      return true
      }
    }
  }
  }
return false 
}

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // 'e's werden mit 3 ersetzt
  if (currentElement === 'e') {
    result.push("3")
    // 'E' s werden nicht ersetzt
  } else if (currentElement === 'E') {
    result.push("E")
  
  } else {
    result.push(currentElement)
  }


}
return result.join("")
}

export function aufgabe09 (args) {
  //Teste ob eine Eingabe genau sechs Zeichen lang ist. 
  const input = args
  let len = 0
  for (let i = 0; i < input.length; i++) {
  len++
  }

if (len === 6) {
  return true
} else {//Wenn die Eingabe nicht genau sechs Zeichen lang ist, sollte 'falsch' zurückgegeben werden. 
  return false
}

}

export function aufgabe10 (args) {
  const input = args

  if (input.length !== 7) return false 
  if (input[0] !== '#') return false 

  for (let i = 1; i < input.length; i++) {
  const currentElement = input[i]
  const ascii = currentElement.charCodeAt(0)
  if (48 <= ascii && ascii <= 57) {
    //mache nichts; ist eine Zahl
  } else if (65 <= ascii && ascii <= 70) {
    //mache nichts; ist A-F 
  } else {
    return false 
  }
  }
  
  return true 
}

export function aufgabe11 (args) {
//Gib den ASCII Code eines einzelnen Buchstabens an.
const input = args
let ascii = null

if (input.length > 1 ) { //Funktionswächter
  return null
}

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  ascii = currentElement.charCodeAt(0)
    return ascii
  }

return null
}

export function aufgabe12 (args) {

  //Suche die Position des ersten 'e's in einem Text.

  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    }
  }

  return -1
}

export function aufgabe13 (args) {

  //Suche die Position des letzten 'e's in einem Text. 

  const input = args
  const result = []

let positionOfLastE = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[ input.length - i -1 ]

    if (currentElement === "e") {
      return (input.length-1) - i   
    }
  }

  return -1
}

export function aufgabe14 (args) {
  const input = args
  const result = 0
  let count = 0 

  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

//Ermittle die Position des dritten 'e's.

if (currentElement === "e") {
  count++
  if (count === 3) {
    return i 
  }
}
}
return -1 
}

export function aufgabe15 (args) {
  const input = args 
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

// Stelle das Leerzeichen fest. 
    if (currentElement === ' ') {
    return result.join("")
  }
  // Wenn kein Leerzeichen enthalten ist, keine Unterbrechungen.
  result.push(currentElement)

}

return result.join("")

}

export function aufgabe16 (args) {
  const input = args
  const result = []

  return result.join("")
}

export function aufgabe17(args) {
  const input = args;
  const result = input.split(',') //Das Resultat, ist der Input, welcher mit einem ',' getrennt wird. 
 
 
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
 
}
 
  return result.join(',') //Das Resultat wird zurückgegeben. 
}

  export function aufgabe19(args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      //Verdopple jedes in der Eingabe vorkommende Element

      result.push(currentElement)
      result.push(currentElement)
   
   
    }
    return result.join("")
  }
 
    export function aufgabe20 (args) {
      const input = args
      const result = []
     
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
     
      if (currentElement === '.' )  
      //Teste ob nach jedem Punkt ein Leerzeichen folgt.
      if (input [i+1] === ' ') {
        return true
      }
       
      }
     
    return false
     
    }
  

export function aufgabe21 (args) {
  const input = args 
  const result = []


let positionOfLastE = -1

 //Soll die Eingabe ungekehrt lesen.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[ input.length - i -1 ]

      result.push(currentElement)
    }

  return result.join("")

}

export function aufgabe22 (args) {
  
const input = args
const result = []
let firstPart = true

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

  //Tausche alle Zeichen der Eingabe mit '_' aus. 

  if (firstPart === true) {
    result.push("_")
  } else {
    result.push(currentElement)
  }

  //Tausche alle Zeichen mit '_' aus, bis und mit dem ersten 'k'. 

  if (currentElement === 'k') {
    firstPart = false
  }

}
return result.join("")
}


export function aufgabe23(args) {
  const input = args;
  const result = [];

  if (input.length === 0) {
    return ''; //Leer zurückgeben. 
  }

  const firstChar = input.charAt(0);

  result.push(firstChar); //Erstes Zeichen soll am Anfang der Ausgabe angehängt werden. 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    result.push(currentElement);
  }

  result.push(firstChar); //Erstes Zeichen soll am Schluss der Ausgabe angehängt werden. 

  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []
 
//Vertausche das erste und letztes Zeichen der Eingabe miteinander. 

  if (input.length === 1) return input
  const firstElem=input[0]
  const lastElem=input[input.length-1]
 
  result.push(lastElem)
  for (let i = 1; i < input.length -1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
 
result.push(firstElem)
  return result.join("")
}

export function aufgabe25 (args) {

  //Das mittlere Zeichen der Eingabe soll gelöscht werden. Wenn die Anzahl gerade ist, sollen die beiden mittleren Zeichen gelöscht werden.

const input = args
const result = []

if (input.length % 2 === 0 ){
  //prüft ob input.length gerade ist


  //brauchen -1 um auf Position zu kommmen, weil wir bei 0 zu zählen beginnnen. 
const pos = input.length / 2 - 1 

for (let i = 0; i < input.length; i ++) {
const currentElement = input[i]
if (i === pos || i === pos + 1) {
//mache nichts 
} else {
  result.push (currentElement)
}
}

} else {
//input.length ist ungerade
const pos = Math.floor(input.length / 2)

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (i === pos) {
    //mache nichts
} else {
  result.push (currentElement)
}
}
}
return result.join("")
}


export function aufgabe26 (args) {
  
  const list = args.split("") //Text wird in eine Liste umgewandelt, um anschliessend Elemente zu vertauschen.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    //Elemente sollte getauscht werden.
  const tmp = list[i+1]
  list[i+1] = list[i]
  list[i] = tmp
  i = 0 //starte nochmals vom Anfang aus.
   }
  }
  
  const result = list.join("")
  return (result)
}

export function aufgabe27 (args) {
  const input = args 
  const result = []
  //ohne Eingabe wird es sofort zurückgegeben
  if (input.length === 0) {return false}
  for (let i = 0; i < input.length; i++) {

    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57) {

    }
    else return false
  }
  return true 
} 

export function  aufgabe28 (args) {
  const input = args
  const zahlen = input.split(' ')
  
  //Soll testen ob zwei Zahlen durch ein Leerzeichen getrennt werden. 
  if (zahlen.length === 2 && !isNaN(zahlen[0]) && !isNaN(zahlen[1])) {
    const zahl1 = parseFloat(zahlen[0]);
    const zahl2 = parseFloat(zahlen[1]);

   //Falls ja soll die Summme als Ausgabe angegeben werden. 
    const summe = zahl1 + zahl2;
    return `${summe}`;

    //Falls nicht soll eine Fehlermeldung angegeben werden.
} else {
    return null
}
}

export function bubbleSort(args) {

  const text = args
  const list = text.split("") //Text wird in eine Liste umgewandelt, um anschliessend Elemente zu vertauschen.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {

      //Die Reihenfolge sollte geändert werden und Elemente sollten vertauscht werden. 
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = -1 //nochmals vom Anfang aus starten.  
  }
}
  const result = list.join("")
  console.log(result)

  return result
}
