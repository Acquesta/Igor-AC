

class Hamburguer{
    constructor(Mchen, McLancheAlegre, BigLanche ){
        this.BigLanche = BigLanche
        this.McLancheAlegre = McLancheAlegre
        this.Mchen = Mchen

        this.Mchen = [
            {
                Hamburguer: "Frango Empanado" ,
                pao: true,
                alface: true,
                queijo: true, 
                picles: true, 
                molhoBacana: false,
                cebola: false
            }
        ]

        this.McLancheAlegre = [
            {
                Hamburguer: "Carne",
                pao: true,
                alface: false,
                queijo: true, 
                picles: false, 
                molhoBacana: false,
                cebola: false
            }
        ]

        this.BigLanche = [
            {
                Hamburguer: "Carne 2",
                pao: true,
                alface: true,
                queijo: true, 
                picles: true, 
                molhoBacana: true,
                cebola: true
            }
        ]

    }
}

class acompanhamento extends lanches{
    constructor(McLancheAlegre, BigLanche, Mchen){
        this.BigLanche = BigLanche
        this.McLancheAlegre = McLancheAlegre
        this.Mchen = Mchen
        this.BatataPequena = [pequena, média]

        this.Mchen += [
            {
                Batata: true,
                Fruta: true,
                Bebidas: true
            }
        ]
        this.BigLanche += [
            {
                Batata: true,
                Fruta: true,
                Bebidas: true
            }
        ]
        this.McLancheAlegre += [
            {
                Batata: true,
                Fruta: true,
                Bebidas: true
            }
        ]
    }
}