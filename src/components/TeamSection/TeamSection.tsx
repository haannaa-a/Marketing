import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';
import { TeamSectionConstant } from './TeamSection.constant.ts';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  return (
    <ContentWrapper>
      <ContentHeader
        subTitle={TeamSectionConstant.header.subTitle}
        title={TeamSectionConstant.header.title}
        text={TeamSectionConstant.header.text}
      />
      <ul className={styles.containerTeamList}>
        {TeamSectionConstant.teamList.map(
          ({ id, img, name, position, description }) => {
            return (
              <li key={id} className={styles.containerItem}>
                <div className={styles.containerImg}>
                  <img src={img.src} alt={img.alt} />
                </div>
                <div>
                  <span className={styles.name}>{name}</span>
                  <p className={styles.position}>{position}</p>
                  <p className={styles.description}>{description}</p>
                </div>
              </li>
            );
          },
        )}
      </ul>
    </ContentWrapper>
  );
};

export default TeamSection;
