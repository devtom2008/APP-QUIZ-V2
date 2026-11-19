import "../App.css"

interface NextBtnBtnProps {
    onclick: () => void;
    hasChosen: boolean;
}


function NextBtn({
    onclick,
    hasChosen,
}: NextBtnBtnProps) {
    let className = "unusable-btn"

    if (hasChosen) {
        className = "btn-usable"
    }

    return (
        <>
            <button className={className} onClick={() =>
                onclick()
            }
                disabled={!hasChosen}>
                Next
            </button >
        </>
    )
}

export default NextBtn