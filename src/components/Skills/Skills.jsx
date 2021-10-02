import styles from "./Skills.module.scss";
import { webDevSkills, visualArtSkills } from "./skillitems";

const Skills = () => {
    return (
        <section className={styles.Skills} id="skills">
            <div className={styles.Skills__container}>
                <div className={styles.Skills__title}>
                    <h1>Skills</h1>
                    <h2>Software Development</h2>
                </div>
                <div className={styles.Skills__icon_flex}>
                    {webDevSkills.map((skill) => (
                        <div className={styles.Skills__box}>
                            <div className={styles.Skills__box__icon}>
                                <img src={skill.image} alt={skill.name} />
                            </div>
                            <p className={styles.Skills__box__text}>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className={styles.Skills__title}>
                        Visual Art / Design and Animation
                    </h2>
                </div>
                <div className={styles.Skills__icon_flex}>
                    {visualArtSkills.map((skill) => (
                        <div className={styles.Skills__box}>
                            <div className={styles.Skills__box__icon}>
                                <img src={skill.image} alt={skill.name} />
                            </div>
                            <p className={styles.Skills__box__text}>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        // <section className={styles.Skills} id="skills">
        //     <div>
        //         <h1 className={styles.title}>My Skills</h1>
        //     </div>
        //     <div>
        //         <h2>Web Development</h2>
        //     </div>
        //     <div className={styles.icon_flex}>
        //         {webDevSkills.map((skill) => (
        //             <div className={styles.box}>
        //                 <img
        //                     src={skill.image}
        //                     alt={skill.name}
        //                     width="60px"
        //                     height="60px"
        //                 />
        //                 <p>{skill.name}</p>
        //             </div>
        //         ))}
        //     </div>
        //     <div>
        //         <h2>Visual Art and Animation</h2>
        //     </div>
        //     <div className={styles.icon_flex}>
        //         {visualArtSkills.map((skill) => (
        //             <div className={styles.box}>
        //                 <img
        //                     src={skill.image}
        //                     alt={skill.name}
        //                     width="60px"
        //                     height="60px"
        //                 />
        //                 <p>{skill.name}</p>
        //             </div>
        //         ))}
        //     </div>
        // </section>
    );
};

export default Skills;
