const Card = (props: any) => {


    const styleCard = "max-w-sm rounded-lg overflow-hidden shadow-lg"
    const styleSpanCard = "inline-block   bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-5 mb-5 "

    const handleClick = () => {
        alert(props.title)
    }
    return (
        <main  >
            {/* Project 1 */}
            <div className="p-5">
                <div className={styleCard}>
                    <div className="px-6 py-4">
                        <span className="font-bold text-xl mb-2">{props.title}</span>
                        <p className="text-gray-700 text-base">
                            {props.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-end">
                        <button className={styleSpanCard} onClick={handleClick}>Go</button>
                    </div>
                </div>
            </div>

        </main>
    )
}
export default Card 