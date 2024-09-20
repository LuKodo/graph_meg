export const RequestStatus = {
  Anulado: 'Anulado',
  Entregado: 'Entregado',
  NoAplicado: 'No Aplicado',
  Enviado: 'Enviado',
  Devolucion: 'Devolucion',
  Fallecido: 'Fallecido',
  Suspendido: 'Suspendido',
  Digitado: 'Digitado',
  Programado: 'Programado',
  Abierto: 'Abierto',
  Aplicado: 'Aplicado',
  Reprogramado: 'Reprogramado',
  EnvioManual: 'Envío Manual',
  CargueIPS: 'Cargue IPS',
} as const;

export const UserRoles = {
  Superadministrador: 'Superadministrador',
  CarguePharmaser: 'Cargue (Pharmaser)',
  Auxiliar: 'Auxiliar',
  Contingencia: 'Contingencia',
  SupervisorMEG: 'Supervisor MEG',
  Aceptacion: 'Aceptacion',
  CompartidoEquipoPQRS: 'Compartido (Equipo PQRS)',
  Digitadores: 'Digitadores',
  IPS: 'IPS',
  Mutual: 'Mutual',
} as const;