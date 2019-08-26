export class Examen {
  constructor(public id: number, public datumVaststellingJaar: number, public datumVaststellingMaand: number, public datumVaststelling: Date,
              public opnameplaatsStraat: string, public opnameplaatsRijrichtingGaand: string, public opnameplaatsZoneSnelheid: number,
              public aantalPassanten: number, public aantalOvertredingenSnelheid: number, public aantalOvertredingenRoodlicht: number) {

  }

  toString(): string {
    return this.id + ', ' + this.datumVaststellingJaar + ', ' + this.datumVaststellingMaand + ', ' + this.datumVaststelling + ', ' + this.opnameplaatsStraat
      + ', ' + this.opnameplaatsRijrichtingGaand + ', ' + this.opnameplaatsZoneSnelheid + ', ' + this.aantalPassanten + ', ' + this.aantalOvertredingenSnelheid
      + ', ' + this.aantalOvertredingenRoodlicht;
  }
}
