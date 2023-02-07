import Navbar from "../../components/Navbar/navbar"
import Subbar from "../../components/SubBar/subbar"
import Tabela from "../../components/Tabela/tabela"

export default function Home(){
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