export function DefaultButton({ children, onClick } : { children: React.ReactNode, onClick: () => void }) {
    return (
        <button onClick={onClick} className="default-button">
            {children}
        </button>
    );
}
