import "../App.css"

interface NextBtnProps {
    onclick: () => void;
    hasChosen: boolean;
}


function NextBtn({
    onclick,
    hasChosen
}: NextBtnProps) {
    let className = "unusable-btn "

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