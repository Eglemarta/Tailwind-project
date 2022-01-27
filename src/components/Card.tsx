function Card() {
    const styleCard = "max-w-sm rounded-lg overflow-hidden shadow-lg"
    const styleSpanCard = "inline-block   bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-5 mb-5 "
    return (
        <main  >
            {/* Project 1 */}
            <div className="p-5">
                <div className={styleCard}>
                    <div className="px-6 py-4">
                        <span className="font-bold text-xl mb-2">Project 1</span>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-end">
                        <span className={styleSpanCard}>Go</span>

                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="p-5">
                <div className={styleCard}>
                    <div className="px-6 py-4">
                        <span className="font-bold text-xl mb-2">Project 2</span>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-end">
                        <span className={styleSpanCard}>Go</span>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className="p-5 ">
                <div className={styleCard}>
                    <div className="px-6 py-4">
                        <span className="font-bold text-xl mb-2">Project 3</span>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-end">
                        <span className={styleSpanCard}>Go</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Card 