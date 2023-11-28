function Notification({ icon, copy, headline }) {
    const iconPath = `/images/${icon.replace('icon-snk-', '')}.svg`;

    return (
        <div className="notification">
            <div className="notification__body">
                    <span className="notification__state--new"></span>
                    <img
                        className="notification__icon"
                        src={process.env.PUBLIC_URL + iconPath}
                        alt="Advent"
                    />
                {/* <i className="notification__icon {icon}"></i> */}
                <div className="notification__text">
                    <p className="d-block text-left mb-0 font-weight-bold">{headline}</p>
                    <small className="d-block">{copy}</small>
                </div>
            </div>
        </div>
    );
}

export default Notification;