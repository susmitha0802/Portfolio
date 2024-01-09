import { useTheme } from '../../context/ThemeContext';
import { About } from "../about/About"
import { Skills } from "../skills/Skills"
import { Education } from "../education/Education"
import { Experience } from "../experience/Experience"
import { Projects } from "../projects/Projects"

export const Content = () => {
    const { theme } = useTheme()
    return (
        <div className={theme}>
            <div style={{ maxWidth: "1240px", marginLeft: "auto", marginRight: "auto" }}>
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
            </div>
        </div>
    )
}
