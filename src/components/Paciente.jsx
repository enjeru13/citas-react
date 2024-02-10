const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { Fecha, Mascota, Propietario, Email, Contacto, Sintomas, id } = paciente
    
    const handEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        
        if(respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="mx-5 my-10 bg-white shadow-md rounded-lg py-5 px-5 mb-10">
            <p className="font-bold mb-4 text-gray-700 uppercase">Fecha de Ingreso: {''}
                <span className="font-normal normal-case">{Fecha}</span>
            </p>

            <p className="font-bold mb-4 text-gray-700 uppercase">Nombre de la Mascota: {''}
                <span className="font-normal normal-case">{Mascota}</span>
            </p>

            <p className="font-bold mb-4 text-gray-700 uppercase">Nombre del Propietario: {''}
                <span className="font-normal normal-case">{Propietario}</span>
            </p>

            <p className="font-bold mb-4 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{Email}</span>
            </p>

            <p className="font-bold mb-4 text-gray-700 uppercase">Numero de Contacto: {''}
                <span className="font-normal normal-case">{Contacto}</span>
            </p>

            <p className="font-bold mb-4 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{Sintomas}</span>
            </p>
            <div className="flex justify-between mt-8">
                <button
                type = 'button'
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                type = 'button'
                className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                onClick={handEliminar}                
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
