import styles from './about.module.scss';
import Image from 'next/image';

export default function AboutUs() {

    //https://www.figma.com/design/YVD7QRKNOI1ApXogwJH4ij/Yesterday-Vintage-FW25--include-Design-Cohort-Project?node-id=3094-2903&p=f&t=iTeiaU79nGoGXURA-0

    const people = [
        { name: "Name", imgsrc: "/Images/person_placeholder.png", alt: "image of Name" },
        { name: "Name2", imgsrc: "/Images/person_placeholder.png", alt: "image of Name" },
        { name: "Name3", imgsrc: "/Images/person_placeholder.png", alt: "image of Name" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>About Us</div>
            <div className={styles.content}>
                <div className={styles.horizontal}>
                        <Image className={styles.image} src={"/Images/ourstory.png"} alt={"frog."} width={500} height={300}/>
                        <div className={styles.veritcal}>
                            <div className={styles.subtitle}>Our Story</div>
                            <div className={styles.body}>
                                Yesterday is an owner-operated, four member endeavor. Our names are Michaela Landers, Donbi Kim, Tuan (Stevie) Tat, and John (Jack) Halet. Donbi and Stevie attended UC Davis, and both graduated in 2022, while Jack and Michaela have lived in Davis now for over 3 years.
                            </div>
                        </div>
                </div>
                <div className={styles.horizontal}>
                    {people.map((person) => (
                        <div key={person.name} className={styles.person}>
                            <Image className={styles.personImage} src={person.imgsrc} alt={person.alt} fill/>
                        </div>
                    ))}
                </div>
                <div className={styles.horizontal}>
                    <div className={styles.imageDiv} >
                        <Image className={styles.image} src={"/Images/paragraphs.png"} alt={"!!!!frog."} fill/>
                    </div>
                    <div className={styles.body}>
                        lalajofe
                    </div>
                </div>
                <div className={styles.horizontal}>
                    <div className={styles.body}>
                        jwefjwjef
                    </div>
                    <div className={styles.imageDiv} >
                        <Image className={styles.image} src={"/Images/paragraphs.png"} alt={"frog."} fill/>
                    </div>
                </div>
                <div className={styles.horizontal}>
                    <div className={styles.imageDiv} >
                        <Image className={styles.image} src={"/Images/closing1.png"} alt={"frog."} fill/>
                    </div>
                    <div className={styles.imageDiv} >
                        <Image className={styles.image} src={"/Images/closing2.png"} alt={"frog."} fill/>
                    </div>
                    <div className={styles.imageDiv} >
                        <Image className={styles.image} src={"/Images/closing3.png"} alt={"frog."} fill/>
                    </div>
                </div>
                <div className={styles.closingMessage}>
                    bye
                </div>
            </div>
        </div>
    );
}