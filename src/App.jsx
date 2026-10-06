import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import ResultadoEndereco from './components/ResultadoEndereco.jsx'
import { consultarCEP } from './services/viacep.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import FormularioCEP from './components/FormularioCEP.jsx'

function App() {
  const [endereco, setEndereco] = useState(null)
  const [erroConsulta, setErroConsulta] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function buscarEndereco(cep) {
    if (carregando) return

    setCarregando(true)
    setEndereco(null)
    setErroConsulta('')

    try {
      const dados = await consultarCEP(cep)
      setEndereco(dados)
    } catch (erro) {
      setErroConsulta(
        erro instanceof TypeError
          ? 'Não foi possível conectar ao serviço. Tente novamente.'
          : erro instanceof SyntaxError
            ? 'O serviço retornou uma resposta inválida. Tente novamente.'
            : erro.message,
      )
    } finally {
      setCarregando(false)
    }
  }

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

                <FormularioCEP onConsultar={buscarEndereco} carregando={carregando} />
                {erroConsulta && (
                  <Alert variant="danger" className="mt-3 mb-0" role="alert">
                    {erroConsulta}
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={7}>
            <ResultadoEndereco endereco={endereco} />
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
