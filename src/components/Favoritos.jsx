import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Favoritos({ favoritos, onRemover }) {
  return (
    <Card as="section" className="shadow-sm mt-4" aria-labelledby="titulo-favoritos">
      <Card.Body>
        <h2 id="titulo-favoritos" className="h4">Favoritos</h2>

        {favoritos.length === 0 ? (
          <p className="text-secondary mb-0">
            Nenhum endereço salvo nos favoritos.
          </p>
        ) : (
          <div className="lista-favoritos">
            {favoritos.map((favorito) => (
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
