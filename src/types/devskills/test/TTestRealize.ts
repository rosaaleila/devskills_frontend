// export interface Root {
//   data: Data;
// }

export type TTestRealize = {
  id: number;
  data_inicio: string;
  data_fim: string;
  duracao: string;
  idEmpresa: number;
  idProva: number;
  prova: TProva;
}

export type TProva = {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  link_repositorio: string;
  ultima_atualizacao: any;
  idProvaTipo: number;
  provasTodasQuestoes: TProvasTodasQuest[];
}

export type TProvasTodasQuest = {
  id: number;
  idQuestaoProva: number;
  idProva: number;
  questaoProva: TQuestaoProva;
}

export type TQuestaoProva = {
  id: number;
  enunciado: string;
  foto: string;
  idQuestaoProvaTipo: number;
  alternativaProva: TAlternativaProva[];
  questaoProvaTipo: TQuestaoProvaTipo;
}

export type TAlternativaProva = {
  id: number;
  idQuestaoProva: number;
  opcao: string;
}

export type TQuestaoProvaTipo = {
  id: number;
  tipo: string;
}
