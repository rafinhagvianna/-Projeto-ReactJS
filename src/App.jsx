import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import FormularioCEP from './components/FormularioCEP.jsx'

function App() {
  return (
    <>
      <header className="cabecalho py-4">
        <Container>
          <h1 className="h2 mb-2">BuscaCEP</h1>
          <p className="mb-0">Consulta e organização de endereços.</p>
        </Container>
      </header>

      <Container as="main" className="py-4">
        <Row className="g-4">
          <Col xs={12} md={5}>
            <Card as="section" className="h-100 shadow-sm" aria-labelledby="titulo-consulta">
              <Card.Body>
                <h2 id="titulo-consulta" className="h4">Consultar CEP</h2>
                <p className="text-secondary">Encontre o endereço a partir do CEP.</p>

                <FormularioCEP />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={7}>
            <Card as="section" className="h-100 shadow-sm" aria-labelledby="titulo-resultado">
              <Card.Body>
                <h2 id="titulo-resultado" className="h4">Endereço encontrado</h2>
                <div className="resultado-vazio text-center rounded p-4 mt-3">
                  <p className="fw-semibold mb-2">Nenhum endereço consultado</p>
                  <p className="text-secondary mb-0">
                    O resultado da sua consulta aparecerá aqui, com rua, bairro,
                    cidade e estado.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-center text-secondary px-3 py-3">
        <small>BuscaCEP — Projeto de Programação Web Fullstack</small>
      </footer>
    </>
  )
}

export default App
