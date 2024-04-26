import step1 from "../../public/step1.png"
import step2 from "../../public/step2.png"
import step3 from "../../public/step3.png"
import step1d from "../../public/step1d.png"
import step2d from "../../public/step2d.png"
import step3d from "../../public/step3d.png"


export const images = [
    {
        id: 0,
        src: step1,
        subImg: step1d,
        alt: "step_1",
        title: "Select a Match",
        top: 35,
        margin: "-300px",
        del:0.2,
        description: "Choose an upcoming match that you want to play"
    },
    {
        id: 1,
        src: step2,
        subImg: step2d,
        alt: "step_2",
        title: "Create Team",
        top: 54,
        del:0.5,
        margin: "-250px",
        description: "Use your skills to pick the right players"
    },{
        id: 2,
        src: step3,
        subImg: step3d,
        alt: "step_3",
        title: "Join Contests",
        top: 40,
        del:0.7,
        margin: "-300px",
        description: "Choose between different contests and compete"
    },
]

