let amigo = {
    nome: 'Genilson', 
    sexo: 'M', 
    peso: 47.4,
    engordar(p=0){//Se não passar o peso, ele passa a ser zero(0).
        console.log('Engordou');
        this.peso += p;

    }
};

amigo.engordar(3);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);