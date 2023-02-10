import Navbar from "../../components/Navbar2/navbar2"
import Subbar from "../../components/SubBar2/subbar2"
import Tabela from "../../components/Tabela2/tabela2"

export default function empresas(){
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