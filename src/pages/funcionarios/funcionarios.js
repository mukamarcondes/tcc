import Navbar from "../../components/Navbar1/navbar1"
import Subbar from "../../components/SubBar1/subbar1"
import Tabela from "../../components/Tabela1/tabela1"

export default function funcionarios(){
    return (
        <div className="App">
        <header className="App-header">
            < Navbar />
            < Subbar />
            < Tabela />
        </header>
        </div>
    );
}