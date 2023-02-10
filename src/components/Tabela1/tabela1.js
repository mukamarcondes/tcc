import './tab.css';
import Olho from '../../img/olho.png';
import Reticencias from '../../img/reticencias.png';
import Lixo from '../../img/lixo.png';


export default function Navbar() {
    return (
        
        <div className='geral'>
                <table style={{border:'1px'}}>
                    <thead>
                    <tr className='linha1'>
                        <th>Nome</th>
                        <th>Problema</th>
                        <th>Protocolo</th>
                        <th>Status</th>
                        <th>Detalhes</th>
                        <th>Conclusão</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='linha2'>
                        <th>Murilo Marcondes</th>
                        <th>Hardware</th>
                        <th>234234234</th>
                        <th className='con'>Concluido</th>
                        <th> <a href='#'><img src={Olho}/> </a> </th>
                        <th> <a href='#'><img style={{width:"35px", height:"35px"}} src={Reticencias}/> </a> </th>
                        <th> <a href='#'><img style={{width:"35px", height:"35px"}} src={Lixo}/> </a> </th>
                    </tr>
                    </tbody>
                </table>
            </div>
    )
}