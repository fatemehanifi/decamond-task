import styles from './Loading.module.scss';

function BounceLoading() {
    return (
        <div className={styles.loading}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default BounceLoading;
