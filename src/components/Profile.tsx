import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64712614?s=460&u=c3ba624995c34eee8f82f6d1630276f4569dbb0f&v=4" alt="Silvio Manenti Junior"/>
            <div>
                <strong>Silvio Manenti Junior</strong>
                <p>
                    <img src="icons/level.svg" alt="Lvl"/>    
                    Level {level}
                </p>
            </div>
        </div>
    );
};