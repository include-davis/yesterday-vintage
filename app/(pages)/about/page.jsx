import styles from './about.module.scss';
import Image from 'next/image';

import uncroppedAllStaff from '../../../public/Images/about/uncroppedAllStaff.svg';

import MichaelaLanders from '../../../public/Images/about/MichaelaLanders.svg';
import DonbiKim from '../../../public/Images/about/DonbiKim.svg';
import StevieTat from '../../../public/Images/about/StevieTat.svg';
import JackHalet from '../../../public/Images/about/JackHatlet.svg';

import clothing from '../../../public/Images/about/clothing.svg';
import staffPose from '../../../public/Images/about/staffPose.svg';


import cutCake from '../../../public/Images/about/cutCake.svg';
import rack from '../../../public/Images/about/rack.svg';
import shelf from '../../../public/Images/about/shelf.svg';
import talkCake from '../../../public/Images/about/talkCake.svg';


export default function AboutUs() {

    //https://www.figma.com/design/YVD7QRKNOI1ApXogwJH4ij/Yesterday-Vintage-FW25--include-Design-Cohort-Project?node-id=3094-2903&p=f&t=iTeiaU79nGoGXURA-0

    const people = [
        { name: "Michaela Landers", imgsrc: MichaelaLanders, alt: "image of Michaela Landers" },
        { name: "Donbi Kim", imgsrc: DonbiKim, alt: "image of Donbi Kim" },
        { name: "Stevie Tat", imgsrc: StevieTat, alt: "image of Tuan (Stevie) Tat" },
        { name: "Jack Halet", imgsrc: JackHalet, alt: "image of John (Jack) Halet" },
    ];

    return (
        <div className={styles.container}>
            {/** Title */}
            {/* <h1 className={styles.title}>About Us</h1> */}

            {/** Here's Our Story Section */} {/** Fix cropping!! */}
            <Image src={uncroppedAllStaff} alt={"All staff talking over cake."} className={styles.largeImage} />

            <div className={styles.content}>

                {/** Paragraphs */}
                <div className={styles.body}>
                    Yesterday is an owner-operated, four member endeavor. 
                    <br/> <br/>
                    Our names are Michaela Landers, Donbi Kim, Tuan (Stevie) Tat, and John (Jack) Halet. Donbi and Stevie attended UC Davis, and both graduated in 2022, while Jack and Michaela have lived in Davis now for over 3 years. 
                    <br/> <br/>
                    We all began selling vintage at different stages in our lives, but found ourselves all in Davis when we wanted to open a physical storefront. As soon as we stepped foot into the shop, we knew it was the space for us! It was a quick turnaround; our doors opened 30 days after we signed our lease in September of 2023!
                    <br/> <br/>
                    Now, we’ve been in Downtown Davis for two years, and feel more grateful than ever to be in a community with so many wonderful fellow business owners and patrons. We’ve been able to engage in awesome collaborations with UC Davis and local student organizations, participate in Davis pop-ups, and now help put together our community-oriented event “Day in Downtown”. 
                    <br/> <br/>
                    As we begin a new year, we’re excited to tie up some loose ends in our shop, and bring our complete vision to life! We feel humbled to have made it this far, and we are ever-indebted to our Davis community. Whether you have been following us from the very beginning, or you just discovered us today, Yesterday wouldn’t be possible without you all. 
                    <br/> <br/>
                    Love, <br/>
                    Donbi, Michaela, Stevie, & Jack
                </div>

                {/** Staff */}
                <div className={styles.row}>
                    {people.map((person) => (
                        <div key={person.name} className={styles.person}>
                            <Image className={styles.image} src={person.imgsrc} alt={person.alt} />
                            <p className={styles.personName}>{person.name}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.hidden} > 
                    <Image className={styles.image} src={clothing} alt={"All the staff smiling in one photo."} />
                    <Image className={styles.image} src={staffPose} alt={"All the staff smiling in one photo."} />
                </div>

                {/** Other Images */}
                <div className={styles.wideRow}>
                    <Image className={styles.image} src={cutCake} alt={"All the staff smiling in one photo."} />
                    <Image className={styles.image} src={shelf} alt={"All the staff smiling in one photo."} />
                    <div className={styles.hidden} >
                        <Image className={styles.image} src={rack} alt={"All the staff smiling in one photo."} />
                    </div>
                    <Image className={styles.image} src={talkCake} alt={"All the staff smiling in one photo."} />
                </div>

            </div>
        </div>
    );
}
