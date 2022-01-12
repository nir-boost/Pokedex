type Pokemon ={
    name: string,
    id: number,
    pic: string,
    stats: Stats,
    PokeTypes: PokeTypes,
    Description?: string,
    idView?: string

}

type Stats = {
    hp: number,
    defense: number,
    attack: number,
    specialDefense: number,
    specialAttack: number,
    speed: number
}

type PokeTypes = {
    name1: string,
    name2?: string,
    name3?: string
}


export type {Pokemon}