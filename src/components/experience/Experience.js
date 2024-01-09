import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { experience } from '../../data/constants';

export const Experience = () => {
    return (
        <div id="experience">
            <h1 className="text-center">Experience</h1>
            <VerticalTimeline layout='1-column-left'>
                {experience.map((item, index) => {
                    return <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        key={index}
                        date={item.date}
                        icon={<MdWork />}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        contentStyle={{ boxShadow: "none", border: "1px solid #854ce6", borderRadius:"12px" }}
                        contentArrowStyle={{ borderRight: '7px solid #854ce6' }}
                    >
                        <h4 className="vertical-timeline-element-title fs-2 pb-2">{item.role}</h4>
                        <h5 className="vertical-timeline-element-subtitle highlight">{item.name}</h5>
                    </VerticalTimelineElement>
                })
                }
            </VerticalTimeline>
        </div>
    )
}



