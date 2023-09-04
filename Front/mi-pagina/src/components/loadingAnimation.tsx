import styles from '@/styles/loadingAnimation.module.css'

export default function LoadingAnimation() {
    return (
        <div className="flex justify-center items-center">
            <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}