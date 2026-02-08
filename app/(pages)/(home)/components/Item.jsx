import Image from "next/image";
import styles from "./Item.module.scss";


export function Item({ src, title, price }) {
    return (
        <div className={styles.item}>
            <div className={styles.imageContainer}>
                <Image src={src} alt="image" width={400} height={400} />
            </div>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    );
}