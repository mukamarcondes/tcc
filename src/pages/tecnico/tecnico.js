import Navbar from "../../components/Navbar3/navbar3"
import Subbar from "../../components/SubBar3/subbar3"
import Tabela from "../../components/Tabela3/tabela3"

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