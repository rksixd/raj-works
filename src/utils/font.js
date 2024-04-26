import { Bungee, Nunito, Poppins } from "next/font/google";
import localfont from "next/font/local"
// import f from "../../public/font/Fontspring.otf"

const vanguard = localfont({
    src:[
        {
        path: "../../public/font/Fontspring.otf",
        weight: "700",
        // style:"normal"
        
    }

],
variable: "--font-fontspring"
})


const vanguard1 = localfont({
    src:[
        {
        path: "../../public/font/FontspringNormal.otf",
        weight: "700",
        // style:"normal"
        
    }

],
variable: "--font-fontspring-normal"
})

const bungee_init = Bungee({subsets: ['latin'], weight: ['400'], variable:"--font-bungee"})

const nunito_init = Nunito({subsets: ['latin'], weight: ['400'], variable: "--font-nunito"})

const poppins_init = Poppins({subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600"], variable: "--font-poppins"})

const bungee = bungee_init.variable
const nunito = nunito_init.variable
const poppins = poppins_init.variable
const fontspring = vanguard.variable
const fontspringNormal = vanguard1.variable

export { bungee, nunito, poppins, vanguard, fontspring, fontspringNormal  }