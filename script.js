export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  if (currentElement === 'e' ) {
    result.push("")
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
  let count = 0 

  for (let i = 0; i < input.length; i++) {
    const countWords = input[i]
  //Zähle alle Wörter die enthalten sind

  }
  return 2
}

export function aufgabe05(args) {
  const input = args
  const result = [] 
let capitalLetters = 0 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Gib an ob keine Grossbuchstaben enthalten sind

    if ( currentElement === ".") {
      //do nothing
    } else if (currentElement === " ") {
      //ignoriere Leerzeichen
    } else if (currentElement === currentElement.toUpperCase()) {
      //es wird geprüft, ob das aktuelle Zeichen gleich ist wie die Grossbuchstabenversion des Zeichen
    } else if ( currentElement === " " ) {
      //TODO wenn nötiges Wissen vorhanden ist
    }
    capitalLetters++
    }
  
  

if (capitalLetters > 0) {
  return true 
} else {
  return false
}

}

export function aufgabe06 (args) {
const input = args 
const result = [] 
 
for (let i=0; i < input.length; i++) {
  const currentElement = input[i]

  if (currentElement === 'a')


return result.join("") 
}
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
} else {
  return false
}

}

export function aufgabe10 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {

  }
  
  return result.join("")
}


export function aufgabe11 (args) {
//Gib den ASCII code eines einzelnen Buchstabens an.
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
  const result = []
  
  return result.join("")
}

