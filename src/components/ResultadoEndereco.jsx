import Card from 'react-bootstrap/Card'

function ResultadoEndereco({ endereco }) {
  return (
    <Card as="section" className="h-100 shadow-sm" aria-labelledby="titulo-resultado">
      <Card.Body>
        <h2 id="titulo-resultado" className="h4">Endereço encontrado</h2>
        <div aria-live="polite">
          {endereco ? (
            <dl className="mt-3 mb-0">
              <dt>CEP</dt>
              <dd>{endereco.cep || 'Não informado'}</dd>
              <dt>Rua</dt>
              <dd>{endereco.logradouro || 'Não informado'}</dd>
              <dt>Bairro</dt>
              <dd>{endereco.bairro || 'Não informado'}</dd>
              <dt>Cidade</dt>
              <dd>{endereco.localidade || 'Não informado'}</dd>
              <dt>Estado</dt>
              <dd className="mb-0">{endereco.uf || 'Não informado'}</dd>
            </dl>
          ) : (
            <div className="resultado-vazio text-center rounded p-4 mt-3">
              <p className="fw-semibold mb-2">Nenhum endereço para exibir</p>
              <p className="text-secondary mb-0">
                Consulte um CEP para visualizar rua, bairro, cidade e estado.
              </p>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ResultadoEndereco
