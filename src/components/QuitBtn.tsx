import "../App.css"

interface QuitBtnProps {
    onclick: () => void;
}


function QuitBtn({
    onclick,
}: QuitBtnProps) {
    let ClassName = "btn-usable  "

    return (
        <>
            <button className={ClassName} onClick={() =>
                onclick()
            }
            >
                Quit
            </button >
        </>
    )
}

export default QuitBtn