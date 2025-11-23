export const Etablissement ="ISFO";
class Etudiant1{
    constructor(nom, age){
        this.nom=nom;
        this.age=age;
    }
    info(){
       // return "nom="+this.nom+" age="+this.age;
        return `nom=${this.nom} age=${this.age}`;
    }
}

function infoETudiant(etudiant){
    return `nom=${etudiant.nom} age=${etudiant.age}`
}

//let el=new Etudiant("Achraf", 20);
//console.log(el.nom+" "+el.age);
export default Etudiant1;
export {Etablissement, infoETudiant};