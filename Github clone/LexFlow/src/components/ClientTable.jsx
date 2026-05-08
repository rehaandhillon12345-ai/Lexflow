import { Link } from "react-router-dom";

function statusClass(status) {
    switch (status) {
        case "Approved":
            return "status approved";
        case "Pending":
            return "status pending";
        case "Review":
            return "status review";
        default:
            return "status";
    }
}

function ClientTable({ clients }) {
    return (
        <div className="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Case Type</th>
                        <th>Status</th>
                        <th>Documents</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>
                                <Link to={`/cases/${client.id}`} className="client-link">
                                    {client.name}
                                </Link>
                            </td>
                            <td>{client.caseType}</td>
                            <td>
                                <span className={statusClass(client.status)}>{client.status}</span>
                            </td>
                            <td>{client.documents}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientTable;
