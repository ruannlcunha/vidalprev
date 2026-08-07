import "./button-primary.style.css"

export function ButtonPrimary({children, fontSize, onClick}) {
    return (
        <button className="button-primary" onClick={onClick} style={fontSize && {fontSize: `${fontSize/10}rem`}}>
            {children}
        </button>
    )
}