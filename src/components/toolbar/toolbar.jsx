import "./toolbar.css";

export function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`toolbar_btn ${filter === selected ? "active" : ""}`}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
