import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import StatCard from "../components/StatCard.jsx";
import { stats, activity, progress } from "../data.js";

function Dashboard() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (!apiKey) {
            setError("Add VITE_NEWS_API_KEY to .env");
            setLoading(false);
            return;
        }

        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=${apiKey}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "ok") {
                    setNews(data.articles || []);
                } else {
                    setError(data.message || "Unable to load news.");
                }
            })
            .catch(() => {
                setError("Unable to load news.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="app-shell">
            <Sidebar />
            <main className="main-panel">
                <div className="page-header">
                    <div>
                        <h2>Welcome Back!</h2>
                        <p>Legal client onboarding overview.</p>
                    </div>
                </div>

                <div className="stats-grid">
                    {stats.map((stat) => (
                        <StatCard key={stat.title} title={stat.title} value={stat.value} />
                    ))}
                </div>

                <div className="section-row">
                    <div className="card white-card activity-card">
                        <div className="section-title">
                            <h3>Recent Activity</h3>
                        </div>
                        <ul>
                            {activity.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card white-card progress-card">
                        <div className="section-title">
                            <h3>Small Progress</h3>
                        </div>
                        <p>{progress.label}</p>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress.value}%` }} />
                        </div>
                        <span className="progress-text">{progress.value}%</span>
                    </div>
                </div>

                <div className="card white-card news-card">
                    <div className="section-title">
                        <h3>Latest News</h3>
                        <p>Business headlines powered by NewsAPI.</p>
                    </div>
                    {loading && <p>Loading news...</p>}
                    {error && <p className="error-text">{error}</p>}
                    {!loading && !error && news.length === 0 && <p>No news available right now.</p>}
                    <div className="news-grid">
                        {news.map((article) => (
                            <a
                                key={article.url}
                                className="news-item"
                                href={article.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>
                                    <h4>{article.title}</h4>
                                    <p>{article.description || "Read more..."}</p>
                                </div>
                                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
