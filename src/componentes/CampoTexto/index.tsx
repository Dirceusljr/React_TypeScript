import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'date'| 'email' | 'number' | 'passwaord'
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text'}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} 
            onChange={aoDigitado} 
            type={tipo}
            required={obrigatorio} 
            placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto