
// --host=192.168.0.107
//const BASE_API = 'http://localhost:8000/api';

const BASE_API = 'https://tripsun.tk/api';


//const BASE_API = 'http://192.168.0.117:8000/api';
//const BASE_API = 'http://177.104.209.216:8000/api';

export default {
//base_storage: 'http://localhost:8000/storage',
 
//base_storage: 'http://192.168.0.117:8000/storage',
   // base_storage: 'http://177.104.209.216:8000/storage',

 base_storage: 'https://tripsun.tk/storage',
    // Rotas dos Parceiros ========================================================
    getParceiros: async () => {
        const req = await fetch(`${BASE_API}/prestadores`);
        const json = await req.json();
        return json;
    },
    addParceiro: async (fd) => {
        const response = await fetch(`${BASE_API}/prestadores`, {
            method: 'POST',
            body: fd
        });
      return response;
    },
    getParceirobyId: async (id) => {
        const req = await fetch(`${BASE_API}/prestador/${id}`);
        const json = await req.json();
        return json;
    },
    updateParceiro: async (id,fd) => {
        const response = await fetch(`${BASE_API}/prestador/${id}/update`, {
            method: 'POST',
            body: fd
        });
       return response;
    },
  // Rotas dos Servicos (Atividades) ========================================================
  getAtividades: async () => {
    const req = await fetch(`${BASE_API}/servicos`);
    const json = await req.json();
    return json;
   },
   addAtividade: async (nome,categoria_id,subcategoria_id,cidade_id,prestador_id,descricao_curta,atrativos,duracao,itens_fornecidos,itens_obrigatorios,horario,latitude,longitude,destaque,ponto_encontro,endereco,percentual_plataforma,preco,vagas) => {
    const response = await fetch(`${BASE_API}/servicos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome,categoria_id,subcategoria_id,cidade_id,prestador_id,descricao_curta,atrativos,duracao,itens_fornecidos,itens_obrigatorios,horario,latitude,longitude,destaque,ponto_encontro,endereco,percentual_plataforma,preco,vagas})
    });
  return response;
  },
  getAtividadebyId: async (id) => {
    const req = await fetch(`${BASE_API}/servico/${id}`);
    const json = await req.json();
    return json;
  },
  updateAtividade: async (id,nome,categoria_id,subcategoria_id,cidade_id,prestador_id,descricao_curta,atrativos,duracao,itens_fornecidos,itens_obrigatorios,horario,latitude,longitude,destaque,ponto_encontro,endereco,percentual_plataforma,preco,vagas) => {
    const response = await fetch(`${BASE_API}/servico/${id}/update`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome,categoria_id,subcategoria_id,cidade_id,prestador_id,descricao_curta,atrativos,duracao,itens_fornecidos,itens_obrigatorios,horario,latitude,longitude,destaque,ponto_encontro,endereco,percentual_plataforma,preco,vagas})
    });
   return response;
},
addIcone: async (id,fd) => {
    const response = await fetch(`${BASE_API}/servico/icone/${id}`, {
        method: 'POST',
        body: fd
    });
    return response;
},
 
};
