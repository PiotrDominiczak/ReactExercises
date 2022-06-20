import styles from './styles.module.css'
import classNames from 'classnames'
export const StyleTest = () => {
    return <div className={classNames({ [styles.Container]: false })}>Test</div>
}