import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function FormularioCEP({ onConsultar }) {
  const [cep, setCep] = useState('')
  const [erro, setErro] = useState('')

  function alterarCep(evento) {
    setCep(evento.target.value)
    setErro('')
  }

  function enviarFormulario(evento) {
    evento.preventDefault()
    setErro('')

    // Aceita oito dígitos ou o formato 00000-000, sem letras.
    const cepDigitado = cep.trim()

    if (!/^\d{5}-?\d{3}$/.test(cepDigitado)) {
      setErro('Digite um CEP com 8 números, como 01001000 ou 01001-000.')
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
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="00000-000"
          value={cep}
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

      <Button type="submit" className="w-100">
        Consultar
      </Button>

    </Form>
  )
}

export default FormularioCEP
