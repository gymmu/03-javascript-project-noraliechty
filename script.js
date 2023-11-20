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
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ' ') {
    count++
    }
  //Zähle alle Wörter die enthalten sind

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
const result = [] 
 

return result.join("") 
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
} else {
  return false
}

}

export function aufgabe10 (args) {
  const input = args

  if (input.length !== 7) return false 
  if (input[0] !== '#') return false 

  for (let i = 0; i < input.length; i++) {
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

if (currentElement === "e") {
  count++
  if (count === 3) {
    return i 
  }
}
}
return -1 
}

//