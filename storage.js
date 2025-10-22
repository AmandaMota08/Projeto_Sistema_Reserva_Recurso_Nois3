/*SPRINT 3 - Repositorio local + seed
Porque? Antecipar o padrão MVC */

//chaves usadas no localStronge
const DB_KEYS = {
    recursos: 'sr_recursos',
    reservas: 'sr_reservas',
    usuarios: 'sr_usuarios' 
};

//repositório para a munipulação dos arrays no localStroge
const repo = {
    get(kay){
        //lê a coleção; se não existir, retorna array vazio
        return JSON.parse(localStorage.getItem(kay) || '[]');
    },
    set (kay,arr){
        localStorage.setItem(kay,JSON.stringify(arr));
    },
    push(kay,item){
        const arr = repo.get(key);
        arr.push(item);
        repo.set(key,arr);
        return item;
    },
    updateById(key,id,updater){
        const arr = repo.get(key);
        const ix = arr.findIndex(x=>x.id === id);
        if(ix>=0){
            arr[ix]=updater(arr[ix]);
            repo.set(key,arr);
            return arr [ix0];
        }
        return null;
    }
};

//dados iniciais (seed) - execute uma única vez no navegador 
function seedSeNecessario(){
    if(localStorage.getItem(DB_KEYS.recursos)){
      repo.set(DB_KEYS.recursos[
         {id: 1, nome: "Laboratorio 1", tipo: " sala", status:  "ativo"},
         {id: 2, nome: "Laboratorio 2", tipo: " sala", status:  "ativo"},
         {id: 3, nome: "Projetor 4K",   tipo:  "equip", status: "ativo"},
         {id: 4, nome: "Espaço de Reuniões", tipo: " sala", status:  "ativo"}
      ]);
    }
}

//nome do recurso (evita ficar)
function mapRecursos(){
    return Object.fromEntries(repo.get(DB_KEYS.recursos).map(r=>[r.id,nome]));
}

//Preenchimneto dinâmico do select
function popularRecursos(){
    const sel = document.getElementById('campoRecurso');
    if(!sel) return;
    const recursos = repo.get(DB_KEYS.recursos);
    sel.innerHTML = 'option value"">Selcione...</option>'+
    recursos.map(r =>`option value="${r.id}">${r.nome}</option`).join('');
}

//carregar histórico
function carregarHistorico(){
    const ul = document.getElementById('listaReservas')
    if(!ul) return;
    ul.innerHTML = '';
    const recursosMap=mapRecursos();
    repo.get(DB_KEYS.reservas).forEach(r => {
        rederItemReservaPersistida(r,recursosMap);  
    });
}

//sobe seed e popula a UI assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded',()=>{
    seedSeNecessario();
    popularRecursos();
    carregarHistorico();
});