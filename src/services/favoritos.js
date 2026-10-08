export function carregarFavoritos() {
  try {
    const dados = JSON.parse(localStorage.getItem('favoritos') || '[]')

    if (!Array.isArray(dados)) return []

    return dados.filter((favorito) =>
      favorito &&
      typeof favorito.cep === 'string' &&
      /^\d{5}-?\d{3}$/.test(favorito.cep) &&
      ['logradouro', 'bairro', 'localidade', 'uf'].every((campo) =>
        favorito[campo] == null || typeof favorito[campo] === 'string',
      ),
    )
  } catch {
    return []
  }
}
