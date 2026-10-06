export async function consultarCEP(cep) {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

  if (!resposta.ok) {
    throw new Error('Não foi possível consultar o CEP. Tente novamente.')
  }

  const endereco = await resposta.json()

  if (endereco.erro) {
    throw new Error('CEP não encontrado.')
  }

  return endereco
}
