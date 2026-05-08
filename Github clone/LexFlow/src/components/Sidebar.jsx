import { useNavigate } from "react-router-dom";

const links = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Clients", path: "/clients" },
    // { label: "Cases", path: "/clients" },
    { label: "Logout", path: "/" },
];

function Sidebar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-top">
                    <img src="https://imgs.search.brave.com/jxcs4uGvoLH5Z_T98Ac2N4y86wssklSkxXDnMpFAiW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzY4Lzk5LzQ5/LzM2MF9GXzU2ODk5/NDk1OV9EemRyQlo1/bGI1MU95QXc2d0pq/akhscFBQV3huVFll/TC5qcGc" alt="LexFlow Logo" className="logo" />
                    <div className="brand-title">
                        <h1>LexFlow</h1>
                        <p>Client Onboarding</p>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {links.map((link) => (
                    <button
                        key={link.label}
                        className={link.label === "Logout" ? "sidebar-link logout" : "sidebar-link"}
                        onClick={() => handleNavigation(link.path)}
                    >
                        {link.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
