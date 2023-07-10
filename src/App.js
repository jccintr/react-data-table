import React ,{ useState, useEffect} from 'react'
import Api from './Api';
import DataTable from 'react-data-table-component';
import { FaEdit,FaTrashAlt } from "react-icons/fa";

const columns = [
    {
        name: 'id',
        width: '50px',
        selector: row => row.id,
    },
    {
      name: 'Logo',
      width: '80px',
      center: true,
      cell: row => <img style={{margin:5,width:60,height:60,borderRadius:15}} src={`${Api.base_storage}/${row.logotipo}`} />,
    },
    {
        name: 'Nome',
        selector: row => row.nome,
    },
    {
      name: 'Endereço',
      selector: row => row.endereco,
  },
 
{
  name: 'Bairro',
  selector: row => row.bairro,
},
{
  name: 'Cidade',
  selector: row => row.nome_cidade,
},
{
  name: 'Telefone',
  selector: row => row.telefone,
},

{
  name: 'Actions',
  cell: row => <><FaEdit style={{color:'#00f',marginRight:20}} onClick={()=>alert(row.id)} size={20} /><FaTrashAlt style={{color:'#f00'}}size={20} /></>,

},

];



const App = () => {
  const [parceiros,setParceiros] = useState([]);


  useEffect(()=>{
    const getParceiros = async () => {
      
      let json = await Api.getParceiros();
      setParceiros(json);
     
  }
    getParceiros();
  }, []);


  return (
    <div>
      
        <DataTable
            columns={columns}
            data={parceiros}
            highlightOnHover
        />
    </div>
  );
}

export default App;
