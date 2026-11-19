type CommentProps = {
    displayedScore: number;
}

function Comment({
    displayedScore
}: CommentProps) {
    let className
    let commentText
    function commentDislayed() {


        if (displayedScore <= 4 && displayedScore >= 0) {
            commentText = 'Assia'
            className = 'red'
        } else if (displayedScore >= 5 && displayedScore <= 7) {
            commentText = "Bravo"
            className = "yellow"
        } else {
            commentText = "Excelent"
            className = "green"
        }
        return commentText
    }
    commentDislayed()
    return (
        <div style={{ marginBottom: "10px" }}>
            <div className={className} >
                {commentText}
            </div>
        </div>
    )
}

export default Comment