import React from 'react';
import styles from './Bounded.module.css';

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Bounded({
    as: Comp = "section",
    className, 
    children,
    ...restProps
}: BoundedProps) {

    return(
        <Comp className={className} {...restProps}>
            <div className={styles.container}>
                {children}
            </div>
        </Comp>
    )
}