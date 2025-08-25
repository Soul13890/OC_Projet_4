import { useState, useEffect, useRef } from "react";
import Arrow from "../../assets/vector-bas.svg";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const contentHeightRef = useRef(0);
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            contentHeightRef.current = contentRef.current.scrollHeight;
          } else {
            contentHeightRef.current = 0;
          }
    }, [isOpen]);

    return (
        <div className="collapse-item">
            <div className="collapse-header">
                <h3>{title}</h3>
                <img src={Arrow} alt="fleche" className={isOpen ? "arrow up" : "arrow down"}  onClick={handleToggle}/>               
            </div>
            <div ref={contentRef} className={`collapse-content ${isOpen ? "open" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;