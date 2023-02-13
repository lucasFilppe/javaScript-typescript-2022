try {
    const json = '{ nome: "Bruno", "dataNascimento": "09061993" }'
    const user = JSON.parse(json)
  
    console.log(user.nome)
    // Bruno
  } catch (e) {
    console.log(e.message)
    // Unexpected token n in JSON at position 2
  }