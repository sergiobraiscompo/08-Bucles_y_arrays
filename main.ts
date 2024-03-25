type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

// Interfaz cantidad pacientes
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];


// Devuelve pacientes pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];
    for (let i = 0; i++, i < pacientes.length;) {
        const paciente: Pacientes = pacientes[i];

        if (paciente.especialidad === "Pediatra") {
          pacientesPediatria.push(pacientes[i]);
        }
      }

    return pacientesPediatria;
  };
  
  

  //Devuelve pacientes pediatría menores de 10 años
  const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesPediatriaMenores10: Pacientes[] = [];

  for (let i = 0; i++, i < (pacientes.length);) {
    const paciente: Pacientes = pacientes[i];

    if (paciente.edad < 10) {
      pacientesPediatriaMenores10.push(paciente);
    }
  }

  return pacientesPediatriaMenores10;
};



// Activa el protocolo de urgencia
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  let i = 0;

  while (!activarProctolo && i < pacientes.length) {
    let paciente = pacientes[i];
    
    if(paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100) {
      activarProctolo = true;
      break;
    }

    i++;
  }

  return activarProctolo;
};



// Reasigna los pacientes de pediatría a médico de familia
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesReasignadosPedietriaAMedicoDeFamilia: Pacientes[] = [];
  let i = 0;

  while (i < pacientes.length) {
    pacientesReasignadosPedietriaAMedicoDeFamilia.push(pacientes[i]);
    i++;
  }

  return pacientesReasignadosPedietriaAMedicoDeFamilia;
};



// Comprueba si el pediatra ya no tiene pacientes
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let quedan_Pacientes: boolean = false;
  let i = 0;
  
  while (!quedan_Pacientes && i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      quedan_Pacientes = true;
      break;
    }

    i++;
  }
  
  return quedan_Pacientes;
};



// Contador de pacientes por especialidad
const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let contadorPediatria = 0;
  let contadorMedicoDeFamilia = 0;
  let contadorCardiologia = 0;
  let i = 0;

  while (i < pacientes.length) {
    const paciente = pacientes[i];

    if (paciente.especialidad === "Pediatra") {
      contadorPediatria ++;
    } else {
      paciente.especialidad === "Cardiólogo" ?
      contadorMedicoDeFamilia ++
      : contadorCardiologia ++;
    }
    i++;
  }
  
  const cantidadPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: contadorMedicoDeFamilia,
    pediatria: contadorPediatria,
    cardiologia:contadorCardiologia
  }
  
  return cantidadPacientes;

};

// Obtener listados
const pediatria_listado: Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
const pediatria_menores_10_listado: Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes); // Por alguna razón no me permite hacerlo desde el listado de pediatría
const pacientes_pediatria_a_medico_de_familia: Pacientes[] = reasignaPacientesAMedicoFamilia(pediatria_listado);

// Mostrar listados
console.log("Pacientes pediatría", "\n", pediatria_listado);
console.log("Pacientes pediatría menores de 10 años", "\n", pediatria_menores_10_listado);
console.log("Activar protocolo de urgencia", activarProtocoloUrgencia(pacientes));
console.log("Pacientes reasignados a médico de familia", "\n", pacientes_pediatria_a_medico_de_familia);
console.log("El pediatra ha terminado: ", HayPacientesDePediatria(pediatria_listado));

// Contador de pacientes
console.log("Total pacientes médico de familia: " + cuentaPacientesPorEspecialidad(pacientes).medicoDeFamilia);
console.log("Total pacientes cardiología: " + cuentaPacientesPorEspecialidad(pacientes).cardiologia);
console.log("Total pacientes pediatría: " + cuentaPacientesPorEspecialidad(pacientes).pediatria);