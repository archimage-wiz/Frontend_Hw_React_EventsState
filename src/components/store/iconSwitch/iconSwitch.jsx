import "./iconSwith.css";
export function IconSwitch({ icon, onSwitch }) {
    return (
        <>
            <div className="icon_switch">
                <span className="material-icons" onClick={onSwitch}>
                    {icon}
                </span>
            </div>
        </>
    );
}
