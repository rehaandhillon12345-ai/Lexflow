import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Timeline from "../components/Timeline.jsx";
import { clients } from "../data.js";

function CaseDetails() {
    const { id } = useParams();
    const client = clients.find((item) => item.id === Number(id));

    if (!client) {
        return (
            <div className="app-shell">
                <Sidebar />
                <main className="main-panel">
                    <p>Client not found.</p>
                </main>
            </div>
        );
    }

    return (
        <div className="app-shell">
            <Sidebar />
            <main className="main-panel">
                <div className="page-header">
                    <div>
                        <h2>Case Details</h2>
                        <p>{client.name} — {client.caseType}</p>
                    </div>
                    <Link to="/clients" className="secondary-button">
                        Back to Clients
                    </Link>
                </div>

                <div className="details-grid">
                    <div className="card white-card">
                        <h3>Case Summary</h3>
                        <div className="detail-row">
                            <span>Client Name</span>
                            <strong>{client.name}</strong>
                        </div>
                        <div className="detail-row">
                            <span>Case Type</span>
                            <strong>{client.caseType}</strong>
                        </div>
                        <div className="detail-row">
                            <span>Uploaded Documents</span>
                            <strong>{client.uploaded.length}</strong>
                        </div>
                        <div className="detail-row">
                            <span>Pending Documents</span>
                            <strong>{client.pending.length}</strong>
                        </div>
                    </div>

                    <div className="card white-card uploads-card">
                        <h3>Uploaded Documents</h3>
                        <ul>
                            {client.uploaded.map((doc) => (
                                <li key={doc}>{doc}</li>
                            ))}
                        </ul>
                        <h3>Pending Documents</h3>
                        <ul>
                            {client.pending.map((doc) => (
                                <li key={doc}>{doc}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Timeline steps={client.timeline} />
            </main>
        </div>
    );
}

export default CaseDetails;
