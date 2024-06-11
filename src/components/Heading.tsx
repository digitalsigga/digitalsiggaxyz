import styles from './Components.module.css';

type HeadingProps = {
    as? : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
}


export default function Heading({
    as : Comp = "h1", 
    className, 
    children,
    size = "lg"
}: HeadingProps){
    return (
        <Comp>
            <div className={styles.heading}>
                {children}
            </div>
        </Comp>
    )
}
