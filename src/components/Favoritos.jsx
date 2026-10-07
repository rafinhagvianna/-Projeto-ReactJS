import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Favoritos({ favoritos, onRemover }) {
  const [filtro, setFiltro] = useState('')

  const favoritosFiltrados = favoritos.filter((favorito) => {
    const termo = filtro.toLowerCase().trim()

    return (
      favorito.cep.toLowerCase().includes(termo) ||
      favorito.localidade?.toLowerCase().includes(termo)
    )
  })

  return (
    <Card as="section" className="shadow-sm mt-4" aria-labelledby="titulo-favoritos">
      <Card.Body>
        <h2 id="titulo-favoritos" className="h4">Favoritos</h2>

        <Form.Control
          type="search"
          placeholder="Filtrar por CEP ou cidade"
          value={filtro}
          onChange={(evento) => setFiltro(evento.target.value)}
          className="mb-3"
          aria-label="Filtrar favoritos por CEP ou cidade"
        />

        {favoritos.length === 0 ? (
          <p className="text-secondary mb-0">
            Nenhum endereço salvo nos favoritos.
          </p>
        ) : (
          <div className="lista-favoritos">
            {favoritosFiltrados.map((favorito) => (
              <article key={favorito.cep} className="favorito-item border rounded p-3">
                <p className="fw-semibold mb-1">{favorito.cep}</p>
                <p className="mb-1">
                  {favorito.logradouro || 'Endereço não informado'}
                </p>
                <p className="text-secondary mb-2">
                  {favorito.localidade || 'Cidade não informada'} / {favorito.uf || '--'}
                </p>
                <Button
                  type="button"
                  variant="outline-danger"
                  size="sm"
                  onClick={() => onRemover(favorito.cep)}
                >
                  Remover
                </Button>
              </article>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default Favoritos
