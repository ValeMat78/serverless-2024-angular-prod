export interface IPaziente{
    id: number;
    code: TCodicePaziente;
    firstname: string;
    lastname: string;
    birthdate: Date;
    doctor: string;
    colorcode: TCodiceColore;
    arrive: TModalitaArrivo;
    state: Tstato;
}

type TCodicePaziente = string;
type TCodiceColore = "ROSSO" | "GIALLO" | "VERDE" | "AZZURRO" | "BIANCO";
type Tstato ="IN ATTESA" | "IN CURA" | "DIMISSIONE" | "DECEDUTO";
type TModalitaArrivo ="AMBULANZA" | "PRIVATO" | "ALTRO";
