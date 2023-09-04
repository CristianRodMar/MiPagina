import styles from '@/styles/loadingAnimation.module.css'

export default function LoadingAnimation() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className={(styles['animate-spin']) + " rounded-full border-t-2 border-b-2 border-gray-900 h-16 w-16"}></div>
        </div>
    )
}