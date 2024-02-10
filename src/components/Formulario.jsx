import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [Fecha, setFecha] = useState('');
  const [Mascota, setMascota] = useState('');
  const [Propietario, setPropietario] = useState('');
  const [Email, setEmail] = useState('');
  const [Contacto, setContacto] = useState('');
  const [Sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
      if( Object.keys(paciente).length > 0) {
      setFecha(paciente.Fecha)
      setMascota(paciente.Mascota)
      setPropietario(paciente.Propietario)
      setEmail(paciente.Email)
      setContacto(paciente.Contacto)
      setSintomas(paciente.Sintomas)
   }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
    }

  const handleSubmit = (e) => {
      e.preventDefault()

      // Validacion del Formulario
      if ( [ Fecha, Mascota, Propietario, Email, Contacto, Sintomas ].includes('') ) {
           console.log('Hay al menos un campo vacio')

      setError(true)
      return
    }

      setError(false)

        // Objeto de Paciente
        const objetoPaciente = {
          Fecha, 
          Mascota, 
          Propietario, 
          Email, 
          Contacto, 
          Sintomas
        }

        if(paciente.id) {
            // Editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
              paciente.id ? objetoPaciente : pacienteState )

              setPacientes(pacientesActualizados)
              setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])

        }

        //Reiniciar el form

        setFecha('')
        setMascota('')
        setPropietario('')
        setEmail('')
        setContacto('')
        setSintomas('')

  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-6'>
        
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }

        <div className='mb-4'>
          <label htmlFor='Fecha de ingreso' className='block text-g uppercase font-bold'>
            Fecha de Ingreso
          </label>
          <input
            id='Fecha de Ingreso'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            value={Fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>


        <div className='mb-4'>
          <label htmlFor='Nombre Mascota' className='block text-g uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='Nombre Mascota'
            type='text'
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            value={Mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='Nombre del Propietario' className='block text-g uppercase font-bold'>
            Nombre del Propietario
          </label>
          <input
            id='Nombre del Propietario'
            type='text'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            value={Propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-g uppercase font-bold'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email contacto del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='numero de contacto' className='block text-g uppercase font-bold'>
            Numero de Contacto
          </label>
          <input
            id='Numero de Contacto'
            type='text'
            placeholder='Contacto del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            value={Contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='sintomas' className='block text-g uppercase font-bold '>
            Sintomas
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            placeholder='Describa los sintomas'
            value={Sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-md
            hover:bg-indigo-700 cursor-pointer transition-all'
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Formulario
