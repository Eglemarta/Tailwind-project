import Card from "./Card"

function Cards() {

    interface myCards {
        [index: number]: { title: string, description: string }
    }


    let myCards = [{
        title: "Project 1",
        description: "This is a description of project 1"
    },
    {
        title: "Project 2",
        description: "This is a description of project 2"
    },
    {
        title: "Project 3",
        description: "This is a description of project 3"
    }
    ]



    return (
        <main >
            {
                myCards.map((item, key) => {
                    return (
                        <Card key={key}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })
            }

        </main>
    )
}
export default Cards