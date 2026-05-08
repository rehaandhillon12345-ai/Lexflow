function statusDot(index, active) {
    return <span className={index <= active ? "dot active" : "dot"} />;
}

function Timeline({ steps }) {
    return (
        <div className="timeline-card">
            <h3>Timeline</h3>
            <div className="timeline-list">
                {steps.map((step, index) => (
                    <div key={step} className="timeline-step">
                        {statusDot(index, 2)}
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
