import * as constantes from "./constantes";

// Devuelve pacientes pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: constantes.Pacientes[]): constantes.Pacientes[] => {
  let pacientesPediatria: constantes.Pacientes[] = [];
    for (let i = 0; i++, i < pacientes.length;) {
        const paciente: constantes.Pacientes = pacientes[i];

        if (paciente.especialidad === "Pediatra") {
          pacientesPediatria.push(pacientes[i]);
        }
      }

  return pacientesPediatria;
};

//Devuelve pacientes pediatría menores de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: constantes.Pacientes[]): constantes.Pacientes[] => {
  let pacientesPediatriaMenores10: constantes.Pacientes[] = [];

  for (let i = 0; i++, i < (pacientes.length);) {
    const paciente: constantes.Pacientes = pacientes[i];

    if (paciente.edad < 10) {
      pacientesPediatriaMenores10.push(paciente);
    }
  }

  return pacientesPediatriaMenores10;
};

// Activa el protocolo de urgencia
const activarProtocoloUrgencia = (pacientes: constantes.Pacientes[]): boolean => {
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
const reasignaPacientesAMedicoFamilia = (pacientes: constantes.Pacientes[]): constantes.Pacientes[] => {
  let i = 0;
  const pacientesAreasignar = obtenPacientesAsignadosAPediatria(pacientes);

  while (i < pacientesAreasignar.length) {
    pacientesAreasignar[i].especialidad = "Medico de familia";
    i++;
  }

  const pacientesMedicofamilia = pacientes.filter((paciente) => paciente.especialidad === "Medico de familia");
  return pacientesMedicofamilia;
};

// Comprueba si el pediatra ya no tiene pacientes
const hayPacientesDePediatria = (pacientes: constantes.Pacientes[]): boolean => {
  let quedan_Pacientes: boolean = false;
  let i = 0;
  
  while (!quedan_Pacientes && i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      quedan_Pacientes = true;
      break;
    } else {
      quedan_Pacientes = false;
    }

    i++;
  }
  
  return !quedan_Pacientes;
};

// Contador de pacientes por especialidad
const cuentaPacientesPorEspecialidad = (pacientes: constantes.Pacientes[]): constantes.NumeroPacientesPorEspecialidad => {
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
  
  const cantidadPacientes: constantes.NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: contadorMedicoDeFamilia,
    pediatria: contadorPediatria,
    cardiologia:contadorCardiologia
  }
  
  return cantidadPacientes;

};



// Obtener listados
const pediatria_listado: constantes.Pacientes[] = obtenPacientesAsignadosAPediatria(constantes.pacientes);
const pediatria_menores_10_listado: constantes.Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(constantes.pacientes); // Por alguna razón no me permite hacerlo desde el listado de pediatría
const pacientes_pediatria_a_medico_de_familia: constantes.Pacientes[] = reasignaPacientesAMedicoFamilia(constantes.pacientes);

// Mostrar listados
console.log("Pacientes pediatría", "\n", pediatria_listado);
console.log("Pacientes pediatría menores de 10 años", "\n", pediatria_menores_10_listado);
console.log("Activar protocolo de urgencia", activarProtocoloUrgencia(constantes.pacientes));
console.log("Pacientes asignados a médico de familia", "\n", pacientes_pediatria_a_medico_de_familia);
console.log("El pediatra ha terminado: ", hayPacientesDePediatria(pediatria_listado));

// Contador de pacientes
console.log("Total pacientes médico de familia: " + cuentaPacientesPorEspecialidad(constantes.pacientes).medicoDeFamilia);
console.log("Total pacientes cardiología: " + cuentaPacientesPorEspecialidad(constantes.pacientes).cardiologia);
console.log("Total pacientes pediatría: " + cuentaPacientesPorEspecialidad(constantes.pacientes).pediatria);