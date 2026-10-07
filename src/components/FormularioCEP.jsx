import { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

function FormularioCEP({ onConsultar, onNovaConsulta, carregando }) {
  const [cep, setCep] = useState('')
  const [erro, setErro] = useState('')
  const campoCep = useRef(null)

  function alterarCep(evento) {
    setCep(evento.target.value)
    setErro('')
  }

  function novaConsulta() {
    if (carregando) return

    setCep('')
    setErro('')
    onNovaConsulta()
    campoCep.current.focus()
  }

  function enviarFormulario(evento) {
    evento.preventDefault()
    if (carregando) return

    setErro('')
    const cepDigitado = cep.trim()

    if (!/^\d{5}-?\d{3}$/.test(cepDigitado)) {
      setErro('Digite um CEP com 8 números, como 01001000 ou 01001-000.')
      campoCep.current.focus()
      return
    }

    const cepNormalizado = cepDigitado.replace('-', '')
    onConsultar(cepNormalizado)
  }

  return (
    <Form onSubmit={enviarFormulario} noValidate>
      <Form.Group controlId="cep" className="mb-3">
        <Form.Label>CEP</Form.Label>
        <Form.Control
          ref={campoCep}
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="00000-000"
          value={cep}
          disabled={carregando}
          onChange={alterarCep}
          isInvalid={Boolean(erro)}
          aria-invalid={Boolean(erro)}
          aria-describedby={erro ? 'ajuda-cep erro-cep' : 'ajuda-cep'}
        />
        <Form.Control.Feedback id="erro-cep" type="invalid" role="alert">
          {erro}
        </Form.Control.Feedback>
        <Form.Text id="ajuda-cep">
          Informe 8 números, com ou sem hífen.
        </Form.Text>
      </Form.Group>

      <Button type="submit" className="w-100" disabled={carregando}>
        {carregando && (
          <Spinner animation="border" size="sm" className="me-2" aria-hidden="true" />
        )}
        {carregando ? 'Consultando...' : 'Consultar'}
      </Button>

      <Button
        type="button"
        variant="outline-secondary"
        className="w-100 mt-2"
        onClick={novaConsulta}
        disabled={carregando}
      >
        Nova consulta
      </Button>

      <span className="visually-hidden" role="status">
        {carregando ? 'Consultando CEP. Aguarde.' : ''}
      </span>
    </Form>
  )
}

export default FormularioCEP
