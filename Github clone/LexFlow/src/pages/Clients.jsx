import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import ClientTable from "../components/ClientTable.jsx";
import { clients } from "../data.js";

function Clients() {
    const [search, setSearch] = useState("");

    const filteredClients = clients.filter((client) =>
        client.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app-shell">
            <Sidebar />
            <main className="main-panel">
                <div className="page-header">
                    <div>
                        <h2>Clients</h2>
                        <p>Review all client cases and documents.</p>
                    </div>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search by client name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <ClientTable clients={filteredClients} />
            </main>
        </div>
    );
}

export default Clients;
